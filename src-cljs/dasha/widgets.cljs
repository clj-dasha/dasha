(ns dasha.widgets
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]))

(def state (atom {}))

(defn random-widget
  []
  (let [doc (atom {})]
    (fn []
      [:div.row
       [:div.col-lg-2
        [:div.widget.style1.navy-bg
         [:div.row.vertical-align
           [:div.col-xs-3 [:i.fa.fa-random.fa-3x]]
           [:div.col-xs-9.text-right [:h2.font-bold "99"]]]]]])))

(defn init! []
  (reagent/render-component [random-widget] (.getElementById js/document "app")))
