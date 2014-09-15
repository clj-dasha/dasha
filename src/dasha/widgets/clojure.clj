(ns dasha.widgets.clojure
  (:require [dasha.widgets.util :as dwu :refer [def-widget from-json rotate]]))

(defn rand-clj-doc []
  (let [[fnk var] (rand-nth (seq (ns-publics 'clojure.core)))]
    {:title fnk
     :text (:doc  (meta var))}))

(def-widget :clj [out _] (out (rand-clj-doc)) _)

