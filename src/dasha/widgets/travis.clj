(ns dasha.widgets.travis
  (:require [org.httpkit.client :as http]
            [cheshire.core :as cc]
            [clojure.core.async :as async :refer [go go-loop <! >! timeout alts!]]))


(defn msg [json]
  {:id "travis"
   :data (cc/parse-string json keyword)})

(defmacro ctrl-timeout [ctrl t & body]
  `(when (not= ~ctrl (second (alts! [~ctrl (timeout ~t)])))
     ~@body))

(def url "https://api.travis-ci.org/repos/")

(defn rotate [coll]
  (into (vec (rest coll)) [(first coll)]))

(defn msg [json]
  {:id "travis"
   :data (cc/parse-string json keyword)})


(defn widget [ctrl out cfg]
  (go-loop
    [cfg cfg]
    (let [repo (first (:qs cfg))
          opts {:insecure? true :headers {"Content-Type" "application/json"}}]
      (ctrl-timeout ctrl (or (:t cfg) 1000)
                    (http/get (str url  repo "/builds") opts
                              (fn [{b :body}]
                                (go (>! out
                                        {:id "travis"
                                         :data {:repo repo
                                                :builds (cc/parse-string b keyword)}}))))
                    (recur (update-in cfg [:qs] rotate))))))
