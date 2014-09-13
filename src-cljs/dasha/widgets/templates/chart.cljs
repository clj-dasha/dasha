(ns dasha.widgets.templates.chart
  (:require [reagent.core :as reagent :refer [atom]]
            [dasha.widgets.templates.chart.data :as d]))

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
  [doc render-flot]
  (with-meta
    (chart-component doc)
    {:component-did-mount (fn [this] (render-flot (reagent/dom-node this)))}))

(defn create
  [initial-state]
  (let [state (atom (merge initial-state {:data []}))
        flot (d/get-flot)
        c (component state (:render flot))]
    {:component c
     :update #((:update flot) %)}))

