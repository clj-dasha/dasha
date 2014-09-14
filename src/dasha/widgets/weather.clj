(ns dasha.widgets.weather
  (:require [org.httpkit.client :as http]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout]]))


(def url "http://api.openweathermap.org/data/2.5/weather")

(defn rotate [coll]
  (into (vec (rest coll)) [(first coll)]))

(defn poll-weather [out cfg]
  (go-loop [cfg cfg]
           (<! (timeout (or (:timeout cfg) 5000)))
           (http/get url {:query-params {:q (first (:qs cfg))}}
                     (fn [{b :body}] (go (>! out b))))
           (recur (update-in cfg [:qs] rotate))))
