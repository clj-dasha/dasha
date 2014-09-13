(ns dasha.widgets.templates.chart
  (:require [reagent.core :as reagent :refer [atom]]))

(defn chart-component
  [doc]
  (fn []
    [:div.row
     [:div.col-lg-6
      [:div.ibox.float-e-margins
       [:div.ibox-title
        [:h5 (:title @doc)]]
       [:div.ibox-content
        [:div.flot-chart ]]]]]))

(defn component
  [doc]
  (with-meta
    (chart-component doc)
    {:component-did-mount (fn [this] (. js/window runFlot (reagent/dom-node this)))}))

(defn create
  [initial-state]
  (let [state (atom initial-state)
        c (component state)]
    {:component c
     :update #(reset! state %)}))
