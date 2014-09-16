(ns dasha.robin
  (:require
    [clojure.core.async :refer [chan go go-loop <!! <! >! timeout close! alts!]]))

(defn to-tail [xs [id fnk new-st]]
  (into (vec (rest xs)) [[id fnk new-st]]))

(defn fake-robin [xs limit]
  (loop [i 0 xs xs]
    (if (< i limit)
      (let [[id fnk st] (first xs)
            new-st (fnk #(println id %) st)]
        (recur (inc i)
               (to-tail xs [id fnk new-st]))))))

(defn mk-out [id out]
  (fn [b] (go (>! out b))))

(defn robin [t out xs]
  (let [stop (chan)]
    (go-loop
      [xs xs]
      (when (not= stop (second (alts! [stop (timeout t)])))
        (let [[id fnk st] (first xs)
              out-fn (mk-out id out)
              new-st (fnk out-fn st)]
          (recur (to-tail xs [id fnk new-st])))))
    (fn [] (close! stop))))
