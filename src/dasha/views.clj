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

(defn def-window [& cnt]
  (into [:div.wnd {}] cnt))

(defn dashboard [& wgts]
  (into [:div {:ng-switch "window" :ng-click "nextWnd()" :ng-init (str "windowNum = " (dec (count wgts)))}]
        (for [[w i] (map vector wgts (range))]
          (update-in w [1] assoc :ng-switch-when i))))

(defn index-page  []
  (layout
    "Dasha"
    (dashboard
      (def-window
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
        [:div.wgt.clj.dblh
         [:span.title "{{clj.title}}"]
         [:p "{{clj.text}}"]])
      (def-window
        [:h1 "Twitter"])
      (def-window
        [:div.wgt {:ng-repeat "n in infoq"}
         [:span "{{n.title}}"]
         [:p.small "{{n.text}}"]]))))
