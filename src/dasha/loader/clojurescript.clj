(ns dasha.loader.clojurescript
  (:require [clojure.tools.reader :as reader]
            [clojure.tools.reader.reader-types :as readers]
            [cljs.compiler :as c]
            [cljs.closure :as cc]
            [cljs.analyzer :as ana]
            [cljs.env :as env])
  (:import [java.io StringReader]))

(def ^:private user-env '{:ns {:name cljs.user} :locals {}})
(def ^:private cenv (atom {}))

(defn- emit-str [ast]
  (with-out-str (c/emit ast)))

(defn- string-reader [s]
  (clojure.lang.LineNumberingPushbackReader.
    (java.io.StringReader. s)))

(defn- forms-seq [stream]
  (let [rdr (readers/indexing-push-back-reader stream 1)
        forms-seq* (fn forms-seq* []
                     (lazy-seq
                       (if-let [form (reader/read rdr nil nil)]
                         (cons form (forms-seq*)))))]
    (forms-seq*)))

(defn- read-first-form [str]
  (first (forms-seq (string-reader str))))

(defn string->js
  ([string]
     (emit-js-from-string string :advanced))
  ([string optimisations]
     (let [form (read-first-form string)]
       (cc/optimize {:optimizations optimisations}
         (emit-str (ana/analyze user-env form))))))

(def url->js (comp emit-js-from-string slurp))
