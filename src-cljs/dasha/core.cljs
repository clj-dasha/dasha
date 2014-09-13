(ns dasha.core
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [dasha.routing :as r]))

(defn log
  [data]
  (.log js/console (str data)))

(defn route-receive
  [[event {:keys [widget data] :as all}]]
  (log (str "received " event " with data: " all)))

(defn route-event
  [[event-id data :as all]]
  (case event-id
    :chsk/state (log (str "first open: " (:first-open? data)))
    :chsk/recv (route-receive data)
    (log (str "undefined event: " all))))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as before
       {:type :auto ; e/o #{:auto :ajax :ws}
       })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

(defn init!
  []
  (go-loop []
    (route-event (:event (<! ch-chsk)))
    (recur)))

(init!)
