(ns dasha.widgets.clojure
  (:require [org.httpkit.client :as http]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout alts!]]))


(defmacro ctrl-timeout [ctrl t & body]
  `(when (not= ~ctrl (second (alts! [~ctrl (timeout ~t)])))
     ~@body))

(defn rand-clj-doc []
  (let [[fnk var] (rand-nth (seq (ns-publics 'clojure.core)))]
    {:title fnk
     :text (:doc  (meta var))}))

(defn widget [ctrl out cfg]
  (go-loop [cfg cfg]
           (ctrl-timeout ctrl (or (:t cfg) 5000)
             (>! out {:id "clj" :data (rand-clj-doc)})
             (recur cfg))))

