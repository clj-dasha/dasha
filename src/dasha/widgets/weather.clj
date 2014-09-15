(ns dasha.widgets.weather
  (:require [org.httpkit.client :as http]
            [dasha.widgets.util :as dwu :refer [ctrl-timeout from-json]]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout alts!]]))

(def url "http://api.openweathermap.org/data/2.5/weather")

(defn rotate [coll]
  (into (vec (rest coll)) [(first coll)]))

(defn msg [json]
  {:id "weather"
   :data (from-json json)})

(defn widget [ctrl out cfg]
  (go-loop [cfg cfg]
    (ctrl-timeout ctrl (or (:t cfg) 5000)
      (http/get url {:query-params {:q (first (:qs cfg))}}
                (fn [{b :body}] (go (>! out (msg b)))))
      (recur (update-in cfg [:qs] rotate)))))
