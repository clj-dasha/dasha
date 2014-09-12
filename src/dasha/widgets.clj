(ns dasha.widgets
  (:require [clojure.core.async :as async :refer [<! >!! chan go-loop]]
            [dasha.widgets.random :as random]))

(def management-channel (atom nil))

(defn start []
  (let [in (chan)
        out (chan)
        multiplier (async/mult in)
        mixer (async/mix out)]
    (async/admix mixer (random/widget multiplier :random))
    (async/admix mixer (random/widget multiplier :widget2))
    (reset! management-channel in)
    out))

(defn stop []
  (>!! @management-channel :stop))

;; (dasha.widgets/stop)

(defn test []
  (let [c (start)]
    (go-loop []
      (println (<! c))
      (recur))))

