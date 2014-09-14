(ns dasha.widgets.weather
  (:require [org.httpkit.client :as http]
            [cheshire.core :as cc]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout alts!]]))

(defmacro ctrl-timeout [ctrl t & body]
  `(when (not= ~ctrl (second (alts! [~ctrl (timeout ~t)])))
     ~@body))

(def url "http://api.openweathermap.org/data/2.5/weather")

(defn rotate [coll]
  (into (vec (rest coll)) [(first coll)]))

(defn msg [json]
  {:id "weather"
   :data (cc/parse-string json keyword)})

(defn widget [ctrl out cfg]
  (go-loop [cfg cfg]
    (ctrl-timeout ctrl (or (:t cfg) 5000)
      (http/get url {:query-params {:q (first (:qs cfg))}}
                (fn [{b :body}] (go (>! out (msg b)))))
      (recur (update-in cfg [:qs] rotate)))))
