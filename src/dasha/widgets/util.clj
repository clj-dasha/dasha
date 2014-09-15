(ns dasha.widgets.util
  (:require [org.httpkit.client :as http]
            [cheshire.core :as cc]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout alts!]]))

(defmacro ctrl-timeout [ctrl t & body]
  `(when (not= ~ctrl (second (alts! [~ctrl (timeout ~t)])))
     ~@body))

(defn from-json [s]
   (cc/parse-string s keyword))
