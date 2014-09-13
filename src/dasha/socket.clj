(ns dasha.socket
  (:require
    [clojure.core.async :as cca]
    [dasha.widgets.test :as dwt]
    [org.httpkit.server :as ohs]
    [org.httpkit.timer :as oht]

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

(cca/go-loop
  [c (dwt/get-weather "New-York")]
  (when-let [res (cca/<! c)]
    (send-to-all (str res))
    (recur c)))

; (cca/go-loop [c (dwt/get-weather "Moscow")]
;          (when-let [res (cca/<! c)]
;            (to-all (str res))
;            (recur c)
;            ))
