(ns dasha.widgets
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]))

(defn log
  [data]
  (.log js/console (str data)))

(def widget-keys [:widget1 :widget2])

(def all (into {} (map (fn [k] [k {:channel (chan)}]) widget-keys)))

(defn bind-widget
  [widget-key]
  (go
   (while true
     (let [data (<! (-> all widget-key :channel))]
       (log (str "widget " widget-key " received " data))))))

(doseq [w widget-keys] (bind-widget w))
