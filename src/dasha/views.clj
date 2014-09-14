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
    [:div.wgt.wthr
     [:span.title "{{weather.name}}"]
     [:span.tmp " {{(weather.main.temp - 273.15) | number:0}} &#8451;"]
     [:span.prs "{{(weather.main.pressure * 0.0750061682704) | number:1}} mmHg"]]

    [:div.wgt.clj
     [:span.title "{{clj.title}}"]
     [:p "{{clj.text}}"]]
    ))
