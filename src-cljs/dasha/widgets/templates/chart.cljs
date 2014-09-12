(ns dasha.widgets.templates.chart
  (:require [reagent.core :as reagent :refer [atom]]))

(defn component
  [doc]
  (with-meta
    (fn
     []
     (when (:value @doc)
       [:div.row
        [:div.col-lg-6
         [:div.ibox.float-e-margins
          [:div.ibox-title
           [:h5 (:title @doc)]]
          [:div.ibox-content
           [:div.flot-chart ]]]]]))
    {:component-did-mount #(. js/window runFlot)}))

(defn create
  [initial-state]
  (let [state (atom initial-state)
        c (component state)]
    {:component c
     :update #(reset! state %)}))
