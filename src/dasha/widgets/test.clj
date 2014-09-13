(ns dasha.widgets.test
  (:require [org.httpkit.client :as http]
            [cheshire.core :as json]
            [clojure.core.async :as async :refer [chan dropping-buffer sliding-buffer
                                                  go go-loop thread
                                                  <! >! >!! <!! take!
                                                  alts! alts!!
                                                  timeout
                                                  close!]]))

(def options {:query-params {:q "Saint-Petersburg"}})

(defn get-weather [q]
  (let [chan (chan)
        callback (fn [{:keys [status headers body error opts]}]
                   (go (>! chan body)))
        ]
    (go-loop [step 0]
             (<! (timeout 2000))
             (http/get "http://api.openweathermap.org/data/2.5/weather" {:query-params {:q q}} callback)
             (if (< step 1000)
               (recur (inc step))
               (close! chan)
               ))
    chan))

(defn print-weather [responce]
  (let [main-weather (:main responce)]
    (println "Temperature is " (:temp main-weather)
             " atmospheric pressure is " (:pressure main-weather))))

#_(go-loop [] (let [body (<! channel)]
              (print-weather (json/parse-string body true))
              (recur)))
