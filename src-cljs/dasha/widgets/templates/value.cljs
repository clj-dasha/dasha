(ns dasha.widgets.templates.value
  (:require [reagent.core :as reagent :refer [atom]]))

(defn component
  [doc]
  (fn
    []
    [:div.row
     [:div.col-lg-2
      [:div.widget.style1.navy-bg
       [:div.row.vertical-align
        [:div.col-xs-3 [(:icon @doc)]]
        [:div.col-xs-9.text-right [:h2.font-bold (:value @doc)]]]]]]))

(defn create
  [initial-state]
  (let [state (atom initial-state)
        c (component state)]
    {:component c
     :update #(reset! state %)}))
