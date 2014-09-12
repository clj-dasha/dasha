(ns dasha.routing
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]
            [reagent.core :as reagent]
            [dasha.widgets :as rw]))

(defn log
  [data]
  (.log js/console (str data)))

(def widgets {:random rw/widget
              :widget2 {:update #(log (str "Widget #2 received " % ))
                        :component #(fn [] [:div "hello"])}})

(def widget-keys (keys widgets))


(def all (into {} (map (fn [k] [k {:channel (chan)}]) widget-keys)))

(defn bind-widget
  [widget-key]
  (go-loop []
   (let [data (<! (-> all widget-key :channel))]
     ((-> widgets widget-key :update) data))
   (recur)))

(doseq [w widget-keys]
  (let [widget (w widgets)]
    (bind-widget w)
    (reagent/render-component [(:component widget)] (.getElementById js/document (str w)))))
