(ns dasha.widgets.test
  (:require [org.httpkit.client :as http]
            [cheshire.core :as json]
            [clojure.core.async :as async :refer [chan dropping-buffer sliding-buffer
                                                  go go-loop thread
                                                  <! >! >!! <!! take!
                                                  alts! alts!!
                                                  timeout
                                                  close!]]))

(defn print-weather [responce]
  (let [main-weather (:main responce)]
    (println "Temperature is " (:temp main-weather)
             " atmospheric pressure is " (:pressure main-weather))))

(def channel (chan))

(go-loop [] (let [body (<! channel)]
      (print-weather (json/parse-string body true))
      (recur)))

(defn callback [{:keys [status headers body error opts]}]
  (go (>! channel body)))

(def options {:query-params {:q "Saint-Petersburg"}})

(go-loop [step 0]
         (<! (timeout 2000))
         (http/get "http://api.openweathermap.org/data/2.5/weather" options callback)
         (if (< step 10)
           (recur (inc step))))