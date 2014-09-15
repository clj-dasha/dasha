(ns dasha.widgets.weather
  (:require [org.httpkit.client :as http]
            [dasha.widgets.util :as dwu :refer [def-widget from-json rotate]]))

(def url "http://api.openweathermap.org/data/2.5/weather")

(def-widget :weather
  [out cfg]
  (http/get url {:query-params {:q (first (:qs cfg))}}
            (fn [{b :body}] (out (from-json b))))
  (update-in cfg [:qs] rotate))
