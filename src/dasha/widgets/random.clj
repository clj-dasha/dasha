(ns dasha.widgets.random
  (:require [clojure.core.async :as async :refer [<! >! go-loop chan alt!]]))

(defn widget [multiplier widget-key]
  (let [in (chan)
        out (chan)]
    (async/tap multiplier in)
    (go-loop []
      (alt!

        ;; loop
        (async/timeout 1000) ([_] (do (>! out {:widget widget-key
                                               :data {:value (rand-nth (range 100))
                                                      :icon :i.fa.fa-random.fa-3x}})
                                      (recur)))

        ;; stop
        in nil))
    out))

