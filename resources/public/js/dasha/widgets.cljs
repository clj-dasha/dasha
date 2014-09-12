(ns dasha.widgets
  (:require [reagent.core :as reagent :refer [atom]]
            [dasha.widgets.templates.value :as v]))


(def widget (v/create {:value 123 :icon :i.fa.fa-random.fa-3x}))
