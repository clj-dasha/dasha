(ns dasha.socket
  (:require
    [clojure.core.async :refer [chan go go-loop <! >! timeout close!]]
    [clojure.core.async :as cca]

    [dasha.robin :as  dr]
    [dasha.views :as dv]

    [dasha.widgets.weather :as dww]
    [dasha.widgets.lines :as dwl]
    [dasha.widgets.clojure :as dwc]
    [dasha.widgets.travis :as dwt]
    [dasha.widgets.ffound :as dwf]
    [dasha.widgets.infoq :as dwi]
    [dasha.widgets.twitter :as dwtw]

    [org.httpkit.server :as ohs]
    [org.httpkit.timer :as oht]
    [cheshire.core :as cc]
    ))

(def clients (atom #{}))

(defn add-client [c] (swap! clients conj c))
(defn rm-client  [c]
  (swap! clients
         (fn [cs] (remove #(= c %) cs))))

(defn send-to-all [msg]
  (let [json-msg (cc/generate-string msg)]
    (dv/cache-message msg)
    (doseq [c @clients]
      (try (ohs/send! c json-msg)))))

(defn async-handler [req]
  (ohs/with-channel req ws
    (println "Channel" ws)
    (add-client ws)
    (ohs/on-close ws (fn [st] (rm-client ws)))
    (ohs/on-receive ws #(println "Data from socket " %))))


(defn start []
  (let [out (chan)]
    (go-loop [] (send-to-all (<! out)) (recur))
    (dr/robin 25000
              out
              [[:ffound  #'dwf/widget  {}]
               [:weather #'dww/widget  {:qs ["Saint Petersburg" "Moscow" "Kiev"]}]
               [:clj     #'dwc/widget  {}]
               [:travis  #'dwt/widget  {:qs ["fhirbase/fhirbase" "FHIR/fhir.js" "formstamp/formstamp" "fhir-ru/fhir-svn"]}]
               [:infoq   #'dwi/widget  {}]
               [:twitter #'dwtw/widget {:q "from:ComedianTwi"}]
               [:clj     #'dwc/widget  {}]
               [:twitter #'dwtw/widget {:q "#clojure"}]
               [:travis  #'dwt/widget  {:qs ["fhirbase/fhirbase" "FHIR/fhir.js" "formstamp/formstamp" "fhir-ru/fhir-svn"]}]
               [:twitter #'dwtw/widget {:q "from:strangeloop_stl", :color "#da532c"}]
               [:lines   #'dwl/widget  {:title "Tongue Twisters" :url "https://gist.githubusercontent.com/niquola/30e4a74d86ada3c983ec/raw/a50a71afef935e7ce8dde365f05286bab3e392ce/Tongue%20Twisters"}]
               [:travis  #'dwt/widget  {:qs ["fhirbase/fhirbase" "FHIR/fhir.js" "formstamp/formstamp" "fhir-ru/fhir-svn"]}]])))

(def stop (start))
(comment (stop))
