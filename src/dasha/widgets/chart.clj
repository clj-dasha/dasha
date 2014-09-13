(ns dasha.widgets.chart
  (:require [clojure.core.async :as async :refer [<! >! go-loop chan alt!]]))

(defn widget [multiplier widget-key title]
  (let [in (chan)
        out (chan)]
    (async/tap multiplier in)
    (go-loop []
             (alt!
               (async/timeout 1000) ([_] (do (>! out {:widget widget-key
                                                      :data {:value (rand-nth (range 100))
                                                             :title title}})
                                             (recur)))

               ;; stop
               in nil))
    out))

