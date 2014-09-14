(ns dasha.socket
  (:require
    [clojure.core.async :as cca]
    [dasha.widgets.weather :as dww]
    [org.httpkit.server :as ohs]
    [org.httpkit.timer :as oht]
    [clojure.core.async :refer [chan go go-loop <! >! timeout]]

    [dasha.widgets :as dw]))

(def clients (atom #{}))

(defn add-client [c] (swap! clients conj c))
(defn rm-client  [c]
  (swap! clients
         (fn [cs]
           (remove #(= c %) cs))))

(defn send-to-all [msg]
  (doseq [c @clients] (try (ohs/send! c msg))))

(defn async-handler [req]
  (ohs/with-channel req ws
    (if (ohs/websocket? ws)
      (println "WebSocket channel")
      (println "HTTP channel"))

    (add-client ws)

    (ohs/on-close ws
                  (fn  [status]
                    (println "Channel " ws " status " status)
                    (rm-client ws)))

    (ohs/on-receive ws #(println "Data from socket " %))))


(defn start []
  (let [out (chan)]
    (go-loop [] (send-to-all (str (<! out))) (recur))
    (dww/poll-weather out {:qs ["Saint Petersburg" "Moscow" "Kiev"]})))

(start)
