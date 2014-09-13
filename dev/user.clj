(ns user
  (:require [dasha.core :as dc]
            [clojure.tools.namespace.repl :as nst]))

(println
  "
  Your server is in srv Var
  To start server run (start)
  To stop eval (stop)
  ")

(def srv (atom nil))

(defn start []
  (if @srv
    (println "Server already started")
    (reset! srv (dc/start))))

(defn stop []
  (if @srv
    (@srv)
    (println "No server started")))





