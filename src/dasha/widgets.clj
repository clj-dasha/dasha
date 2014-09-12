(ns dasha.widgets
  (:require [clojure.core.async :as async :refer [<! chan mix admix go-loop]]
            [dasha.widgets.random :as random]))

(defn start []
  (let [out (chan)
        mixer (mix out)]
    (admix mixer (random/widget))
    out))

(defn test []
  (let [ch (start)]
    (go-loop []
      (println (<! ch))
      (recur))))

