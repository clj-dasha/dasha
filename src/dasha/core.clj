(ns dasha.core
  (:require
    [clojure.core.async :as cca]
    [org.httpkit.server :as ohs]
    [org.httpkit.timer :as oht]
    [compojure.handler :as ch]
    [compojure.core :as cc]
    [compojure.route :as cr]
    [dasha.socket :as ds]
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
      (hp/include-js "/test.js")
      ]]))

(defn render [& cnt]
  {:status  200
   :headers  {"Content-Type" "text/html"}
   :body    (apply layout "Dasha" cnt)})


(defn index-page  [req]
  (render
    [:div.wgt {:ng-controller "main"}
     [:b "{{weather.name}}"]
     [:br]
     [:span "Temp: {{(weather.main.temp - 32)/1.8 | number}}"]
     [:br]
     [:span "Wind {{weather.wind.speed}} {{weather.wind.deg}}"]
     ]))

(cc/defroutes routes
  (cc/GET "/"  [] index-page)
  (cc/GET "/async"  [] #'ds/async-handler)
  (cr/resources "/")
  (cr/not-found "<p>Page not found.</p>"))

(defn start []
  (ohs/run-server (ch/site #'routes)  {:port 8080}))
