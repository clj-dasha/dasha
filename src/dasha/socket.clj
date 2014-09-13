(ns dasha.socket
  (:require
    [clojure.core.async :as cca]
    [org.httpkit.server :as ohs]
    [org.httpkit.timer :as oht]))

(def clients (atom #{}))

; {:body (prn-str msg)
;  :headers {
(defn to-all [msg]
  (doseq [c @clients]
    (try
      (ohs/send! c msg))))

(defn async-handler [req]
  (ohs/with-channel req channel
    (if (ohs/websocket? channel)
      (println "WebSocket channel")
      (println "HTTP channel"))
    (swap! clients conj channel)
    (ohs/on-close
      channel
      (fn  [status]
        (println "Close" status)
        (swap! clients
               (fn [x]
                 (filter #(not (= % channel)) x)))))
    (ohs/on-receive
      channel
      (fn  [data] (to-all (str data))))))

(def nonstop (atom true))
(defn stop [] (swap! nonstop (fn [x] false)))

(defn publish []
  (swap! nonstop (constantly true))
  (cca/go
    (while  @nonstop
      (cca/<!  (cca/timeout 1000))
      (println "tick")
      (to-all {:rand (rand 10)}))))

;(to-all "hello")
