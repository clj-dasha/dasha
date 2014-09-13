(ns dasha.core
  (:use [org.httpkit.server :only [run-server]]
        [compojure.core :only [defroutes GET POST]]
        [compojure.handler :only [site]]
        [dasha.new-widget]
        [ring.util.response :only [redirect]])
  (:require [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.reload :as reload]
            [compojure.route :as route]
            [taoensso.sente :as sente]
            [clojure.core.async :as async :refer [<! go-loop]]
            [dasha.widgets :as widgets]))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defroutes all-routes
  (GET  "/" [] (redirect "index.html"))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (GET  "/newwidget" [] new-widget-form)
  (POST  "/newwidget" [widget-url] (new-widget widget-url))
  (route/resources "/")
  (route/not-found "<p>Page not found.</p>")) ;; all other, return 404

(def handler
  (-> #'all-routes
      reload/wrap-reload
      wrap-params))

(defn in-dev? [args] true) ;; TODO read a config variable from command line, env, or file?

(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [server (run-server handler {:port 8080})
        widgets-channel (widgets/start)]
    (go-loop []
      (let [new-data (<! widgets-channel)]
        ;;(println new-data)
        (chsk-send! nil [:dasha.core/test new-data]))
      (recur))
    server))
;;(chsk-send! nil [:dasha.core/test {:widget :widget1 :data {:new-value 12}}])
;;(chsk-send! nil [:dasha.core/test {:widget :widget2 :data {:new-value "test"}}])
;(def s (-main))
;;(widgets/stop)
;;(s)
