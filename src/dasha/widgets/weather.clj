(ns dasha.widgets.weather
  (:require [clojure.core.async :as async :refer [<! >! go-loop chan alt! go]]))

(defn get-weather-for [city]
  ;; Make request for getting weather data
  (let [
        weather-chan (chan)
        ]
    (http/get
      (weather-for "Saint-Petersburg")
      (fn [resp]
        (let [
              data (json/read-str (:body resp)
                                  :key-fn keyword)]
          (go (>! weather-chan data))
          )))
    weather-chan))

(defn widget [multiplier widget-key]
  (let [in (chan)
        out (chan)]

    (async/tap multiplier in)
    (go-loop []
             (alt!

               ;; loop
               (get-weather-for "London")
               ([value ch] (do (>! out value)
                               (recur)))

               ;; stop
               in nil))
    out
    ))
