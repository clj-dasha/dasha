(ns dasha.widgets.clojure
  (:require
    [clojure.string :as cs]
    [clojure.repl :as cr]
    [hiccup.core :as hc]))

(defn rand-clj-doc []
  (let [[fnk var] (rand-nth (seq (ns-publics 'clojure.core)))
        dc (or (:doc  (meta var) ""))]
    {:color "#02779E"
     :summary (hc/html [:h1 [:b " &#x3bb; ("] fnk " ... )"]
                       [:p (cs/join " " (take 20 (cs/split dc #" "))) " ... "])
     :full (hc/html [:h1 fnk]
                    [:hr]
                    [:p dc]
                    [:pre
                     [:code
                      (or  (cr/source-fn fnk)  (str "Source not found"))]]
                    )}))

(defn widget [out cfg]
  (out (rand-clj-doc))
  cfg)
