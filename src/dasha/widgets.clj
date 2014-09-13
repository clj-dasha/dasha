(ns dasha.widgets
  (:require [clojure.core.async :as async :refer [>!! <! >! chan go-loop go]]))

(def srv-state (atom nil))

(defn- dispatch
  [widgets {:keys [widget-key command]}]
  (if-let [channels (widgets widget-key)]
    (go (>! (:in channels) command))))

(defn start []
  (when (compare-and-set! srv-state nil {})
    (let [in (chan)
          out (chan)]
      (reset! srv-state {:mixer (async/mix out) :widgets {}})
      (go-loop []
               (let [cmd (<! in)]
                 (dispatch (:widgets @srv-state) cmd))
               (recur))
      (swap! srv-state assoc :channels {:in in :out out})))
  (:channels @srv-state))

(defn- attach-widget
  [widget-key widget-channels mixer]
  (async/admix mixer (async/map (fn [msg] {:widget widget-key :message msg})
                                [(:out widget-channels)]))
  (swap! srv-state update-in [:widgets] assoc widget-key widget-channels))

(defn- start-widget
  [running? out {:keys [refresh-rate widget-fn]}]
  (when (not @running?)
    (reset! running? true)
    (go-loop []
             (when @running?
               (<! (async/timeout refresh-rate))
               (>! out (widget-fn))
               (recur)))))

(defn- create-widget-channels [widget]
  (let [in (chan)
        out (chan)
        running? (atom false)]
    (go-loop []
             (case (<! in)
               :start (start-widget running? out widget)
               :stop (reset! running? false)
               ;; custom cmds
               )
             (recur))
    {:in in :out out}))

(defn new-widget
  "Returns widget-key on success, nil otherwise (see start)"
  [widget-key widget-fn]
  (if-let [mixer (:mixer @srv-state)]
    (attach-widget
      widget-key
      (create-widget-channels {:widget-fn widget-fn :refresh-rate 1000})
      mixer))
  widget-key)


;;
;; Examples
;;

(comment
  (def srv-chans (start))

  (def all-out (:out srv-chans))
  (def all-in (:in srv-chans))


  (go-loop []
           (println (<! all-out))
           (recur))

  (new-widget :w1 (constantly 12))
  (new-widget :w2 (constantly 11))

  (>!! all-in {:widget-key :w1 :command :start})
  (>!! all-in {:widget-key :w2 :command :start}))

;(>!! all-in {:widget-key :w1 :command :stop})
;(>!! all-in {:widget-key :w2 :command :stop})