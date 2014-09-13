(ns dasha.dashboard
  (:require [clojure.core.async :as async :refer [>!! <! >! chan go-loop go]]))


(defn new-one [title]
  {:title title
   :out (async/mix (chan))
   :wgts (atom {}) })

(defn add-wgt [db id wgt-fn]
  (swap! (:wgts db) #(assoc % id wgt-fn)))

(def wgt (new-one "my"))

(add-wgt wgt :idu identity)

(defn wrap-me [ch fnk cfg]
  (let [ctrl (chan)]
    (go-loop
      [cfg cfg]
      (recur (fnk cfg))) ctrl))
