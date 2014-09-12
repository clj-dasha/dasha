(ns dasha.widgets
  (:require [reagent.core :as reagent :refer [atom]]))

(def state (atom {:value 123 :icon :i.fa.fa-random.fa-3x}))

(defn random-widget-component
  []
  (fn []
    [:div.row
     [:div.col-lg-2
      [:div.widget.style1.navy-bg
       [:div.row.vertical-align
        [:div.col-xs-3 [(:icon @state)]]
        [:div.col-xs-9.text-right [:h2.font-bold (:value @state)]]]]]]))

(def widget {:component random-widget-component
             :update #(reset! state %)})
