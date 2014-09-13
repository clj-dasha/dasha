(ns dasha.views
  (:require
    [hiccup.core :as hc]
    [hiccup.page :as hp]))

(defn layout  [title & content]
  (hp/html5
    [:head
     [:title title]
     (hp/include-css "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css")
     (hp/include-css "/style.css")
     [:body {:ng-app "app"}
      content
      (hp/include-js "//code.angularjs.org/1.2.24/angular.min.js")
      (hp/include-js "/app.js")]]))

(defn index-page  []
  (layout
    "Dasha"
    [:div.wgt {:ng-controller "main"}
     [:b "{{weather.name}}"]
     [:br]
     [:span "Temp: {{(weather.main.temp - 32)/1.8 | number}}"]
     [:br]
     [:span "Wind {{weather.wind.speed}} {{weather.wind.deg}}"]]))
