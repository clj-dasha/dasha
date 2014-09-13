(ns dasha.core
  (:require
    [org.httpkit.server :as ohs]
    [compojure.handler :as ch]
    [compojure.core :as cc]
    [compojure.route :as cr]

    [dasha.socket :as ds]
    [dasha.views :as v]))

(defn html [html]
  {:status  200
   :headers  {"Content-Type" "text/html"}
   :body    html})


(cc/defroutes routes
  (cc/GET "/"           []  (html (v/index-page)))
  (cc/GET "/jeki/chan"  [] #'ds/async-handler)
  (cr/resources "/")
  (cr/not-found "<p>Page not found.</p>"))


(defn start []
  (-> (ch/site #'routes)
      (ohs/run-server   {:port 8080})))
