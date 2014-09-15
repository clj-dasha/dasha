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

(defn def-window [num & cnt]
  (into [:div {:ng-switch-when num}] cnt))

(defn dashboard [& wgts]
  (into [:div {:ng-switch "window" :ng-init (str "windowNum = " (dec (count wgts)))}]
        wgts))

(defn index-page  []
  (layout
    "Dasha"
    (dashboard
      (def-window 0
        [:div.hgrp
         [:div.wgt.wthr
          [:span.title "{{weather.name}}"]
          [:span.tmp " {{(weather.main.temp - 273.15) | number:0}} &#8451;"]
          [:span.prs "{{(weather.main.pressure * 0.0750061682704) | number:1}} mmHg"]]
         [:div.wgt.trvs
          [:span.title "{{travis.repo}}"]
          [:div {:ng-repeat "b in travis.builds | limitTo:5"}
           [:b.state {:class " res-{{b.result}} "}]
           "&nbsp; {{b.branch}} &nbsp;"
           [:span.small " {{b.finished_at | date:'MM-dd HH:mm'}} "]
           [:span.small " {{b.message}} "]]]]
        [:div.wgt.clj
         [:span.title "{{clj.title}}"]
         [:p "{{clj.text}}"]])
      (def-window 1
        [:div.wgt.infoq {:ng-repeat "n in infoq.items"}
          [:span "{{n.title}}"]]))))
