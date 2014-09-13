(ns dasha.core
  (:require
    [clojure.core.async :as async :refer [<! >! go-loop chan alt! put! go]]
    [org.httpkit.client :as http]
    [clojure.data.json :as json]
    ))

;; @des Get weather api url for passed city
(defn weather-for [city]
  (str "http://api.openweathermap.org/data/2.5/weather?q=" city))

(def my-state (atom nil))

;; Create weather channel
(def weather-chan (chan))

(go (reset! my-state (<! weather-chan)))

;; Make request for getting weather data
(http/get
  (weather-for "Saint-Petersburg")
  (fn [resp]
    (let [
          data (json/read-str (:body resp)
                              :key-fn keyword)]
      (go (>! weather-chan data))
      )))

(println @my-state)

(let [data @my-state
      ]
  (println "City: " (:name data))
  (println "avg: " (get-in data [:main :temp]))
  (println "min: " (get-in data [:main :temp_min]))
  (println "max: " (get-in data [:main :temp_max]))
  )
