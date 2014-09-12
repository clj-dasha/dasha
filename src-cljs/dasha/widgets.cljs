(ns dasha.widgets
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]))

(defn log
  [data]
  (.log js/console (str data)))

(def widgets {:random #(log (str "Widget #1 received " % ))
              :widget2 #(log (str "Widget #2 received " % ))})

(def widget-keys (keys widgets))


(def all (into {} (map (fn [k] [k {:channel (chan)}]) widget-keys)))

(defn bind-widget
  [widget-key]
  (go-loop []
   (let [data (<! (-> all widget-key :channel))]
     ((widget-key widgets) data))
   (recur)))

(doseq [w widget-keys] (bind-widget w))
