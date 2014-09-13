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
     #_(hp/include-css "/style.css")
     [:body
      [:h1 "Hello"]
      [:div  {:class "container"} content]
      ; (hp/include-js "http://fb.me/react-0.9.0.js")
      ; (hp/include-js "/goog/base.js")
      ;[:script {:type "text/javascript"} "goog.require(\"dasha.test\")"]
      (hp/include-js "/test.js")
      ]]))


(defn index-page  [req]
  {:status  200
   :headers  {"Content-Type" "text/html"}
   :body    (layout "Dasha" [:div#app])})

(cc/defroutes routes
  (cc/GET "/"  [] index-page)
  (cc/GET "/async"  [] #'ds/async-handler)
  (cr/resources "/")
  (cr/not-found "<p>Page not found.</p>"))

(defn start []
  (ohs/run-server (ch/site #'routes)  {:port 8080}))
