(ns dasha.widgets.random
  (:require [clojure.core.async :as async :refer [<! >! go-loop chan alt!]]))

(def widget-key :random)

(defn widget [multiplier]
  (let [in (chan)
        out (chan)]
    (async/tap multiplier in)
    (go-loop []
      (alt!

        ;; loop
        (async/timeout 1000) ([_] (do (>! out {:widget widget-key
                                               :data (rand-nth (range 100))})
                                      (recur)))
        
        ;; stop
        in nil))
    out))

