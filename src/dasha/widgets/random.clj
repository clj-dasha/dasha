(ns dasha.widgets.random
  (:require [clojure.core.async :as async :refer [<! >! go-loop chan]]))

(def widget-key :random)

(defn widget []
  (let [out (chan)]
    (go-loop [i 10]
      (when (> i 0)
        (<! (async/timeout 1000))
        (>! out {:widget widget-key :data (rand-nth (range 100))})
        (recur (dec i))))
    out))

