(ns dasha.widgets.util
  (:require [org.httpkit.client :as http]
            [cheshire.core :as cc]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout alts!]]))

(defn from-json [s]
  (cc/parse-string s keyword))

(defn rotate [coll]
  (into (vec (rest coll)) [(first coll)]))

(defn icon [nm] [:i.fa {:class (str "fa-" (name nm))}])

; (macroexpand-1 '(def-widget :weather [out cfg] (do) cfg))

