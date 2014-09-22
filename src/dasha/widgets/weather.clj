(ns dasha.widgets.weather
  (:require [org.httpkit.client :as http]
            [dasha.widgets.util :refer [from-json rotate]]
            [hiccup.core :as hc]))

(def url "http://api.openweathermap.org/data/2.5/weather")

; coord":{"lon":30.52,"lat":50.43},
; "sys":{"type":1,"id":7358,"message":0.1006,"country":"UA","sunrise":1410838541,"sunset":1410883777},
; "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
; "base":"cmc stations",
; "main":{"temp":290.74,"pressure":1025,"humidity":59,"temp_min":290.15,"temp_max":291.55},
; "wind":{"speed":5,"deg":30,"var_beg":350,"var_end":70},
; "clouds":{"all":75},"dt":1410863347,
; "id":703448,
; "name":"Kiev","cod :200}

(defn summary [b]
  [:div
   [:h1 (:name b)]
   [:big (- (long (get-in b [:main :temp])) 273) "&#x2103;"]
   [:p (get-in b [:weather 0 :description])]])

(defn full  [b]
  [:div
   [:h1 (:name b) ]
   [:hr]
   [:big (- (long (get-in b [:main :temp])) 273) "&#x2103;"]
   [:h3 (get-in b [:weather 0 :description])]
   ])

(defn widget [out cfg]
  (http/get url {:query-params {:q (first (:qs cfg))}}
            (fn [{b :body}]
              (let [d (from-json b)]
                (out {:color "brown"
                      :summary (hc/html (summary d))
                      :full (hc/html (full d))}))))
  (update-in cfg [:qs] rotate))

