(ns dasha.widgets
  (:require [clojure.core.async :as async :refer [<! >!! chan go-loop]]
            [dasha.widgets.random :as random]
            [dasha.widgets.weather :as weather]
            [dasha.widgets.chart :as chart]))

(def management-channel (atom nil))

(defn start []
  (let [in (chan)
        out (chan)
        multiplier (async/mult in)
        mixer (async/mix out)]
    (async/admix mixer (random/widget multiplier :random))
    (async/admix mixer (weather/widget multiplier :weather))
    (async/admix mixer (chart/widget multiplier :widget2 "Random Live Chart"))
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

