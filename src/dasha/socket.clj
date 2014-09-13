(ns dasha.socket
  (:require
    [clojure.core.async :as cca]
    [dasha.widgets.test :as dwt]
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

(cca/go-loop [c (dwt/get-weather "Sankt-Peterburg")]
         (when-let [res (cca/<! c)]
           (to-all (str res))
           (recur c)
           ))
(cca/go-loop [c (dwt/get-weather "Moscow")]
         (when-let [res (cca/<! c)]
           (to-all (str res))
           (recur c)
           ))
