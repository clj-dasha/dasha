(ns dasha.loader.clojure
  (:require [clojure.pprint :as pp]
            [clojure.tools.reader :as reader]
            [clojure.tools.reader.reader-types :as readers]
            [cljs.analyzer :as ana]
            [cljs.compiler :as c]
            [cljs.closure :as cc]
            [cljs.env :as env])
  (:import [java.io StringReader]))

(defn emit-str [ast]
  (with-out-str (c/emit ast)))

(defn string-reader [s]
  (clojure.lang.LineNumberingPushbackReader.
    (java.io.StringReader. s)))

(defn forms-seq [stream]
  (let [rdr (readers/indexing-push-back-reader stream 1)
        forms-seq* (fn forms-seq* []
                     (lazy-seq
                       (if-let [form (reader/read rdr nil nil)]
                         (cons form (forms-seq*)))))]
    (forms-seq*)))

(def user-env '{:ns {:name cljs.user} :locals {}})

(defn read1 [str]
  (first (forms-seq (string-reader str))))

(let [form (read1 "(if x true false)")]
  (ana/parse (first form) user-env form nil))
