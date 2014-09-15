(ns dasha.widgets.infoq
  (:require [org.httpkit.client :as http]
            [clojure.xml :as cx]
            [dasha.widgets.util :as dwu :refer [ctrl-timeout from-json]]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout alts!]]))

(def url "http://api.openweathermap.org/data/2.5/weather")

(defn rotate [coll]
  (into (vec (rest coll)) [(first coll)]))

(def url "http://www.infoq.com/feed")
(defn load-rss [])
(defn parse [s]
  (-> s
      .getBytes
      java.io.ByteArrayInputStream.
      cx/parse))

(defn parse-rss [s]
  (->>
    (get-in (parse s) [:content 0 :content])
    (filter (fn [x] (= :item (:tag x))))
    (map (fn [x] {:title (first (get-in x [:content 0 :content]))}))
    (shuffle)
    (take 4)))


(defn widget [ctrl out cfg]
  (go-loop [cfg cfg]
           (ctrl-timeout ctrl (or (:t cfg) 5000)
            (http/get url {} (fn [{b :body}] (go (>! out {:id "infoq" :data {:items  (parse-rss b)}}))))
             (recur (update-in cfg [:qs] rotate)))))
