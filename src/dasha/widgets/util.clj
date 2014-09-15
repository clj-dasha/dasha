(ns dasha.widgets.util
  (:require [org.httpkit.client :as http]
            [cheshire.core :as cc]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout alts!]]))

(defmacro ctrl-timeout [ctrl t & body]
  `(when (not= ~ctrl (second (alts! [~ctrl (timeout ~t)])))
     ~@body))

(defn from-json [s]
  (cc/parse-string s keyword))

(defn mk-out [id chan]
  (fn [b] (go (>! chan {:id id :data b}))))

(defmacro def-widget
  [wgt-nm args & body]
  (let [nm 'widget]
    `(defn ~nm [ctrl# out# cfg#]
       (go-loop [c# cfg#]
                (when (not= ctrl#
                            (second (alts! [ctrl# (timeout (:t cfg#))])))
                  (recur (let [~args [(mk-out ~(keyword wgt-nm) out#) c#]]
                           ~@body)))))))

(defn rotate [coll]
  (into (vec (rest coll)) [(first coll)]))

; (macroexpand-1 '(def-widget :weather [out cfg] (do) cfg))

