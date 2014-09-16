(ns dasha.widgets.twitter
  (:require [org.httpkit.client :as http]
            [twitter.oauth :as to]
            [dasha.widgets.util :refer [icon]]
            [twitter.api.search :as tas]
            [hiccup.core :as hc]))

(def cfg (read-string (slurp ".crd")))

(def creds
  (apply to/make-oauth-creds (:tw cfg)))

(defn load-twts [q]
  (->
    (tas/search :oauth-creds creds :params {:q q})
    (get-in [:body :statuses])))


(defn read-or-load [cfg]
  (if (or (nil? (:twts cfg)) (empty? (:twts cfg)))
    (load-twts (:q cfg))
    (:twts cfg)))

(defn widget [out cfg]
  (let [[twt & twts] (read-or-load cfg)]
    (out {:color "#02779E"
          :summary (hc/html [:h1 (icon :twitter) " " (:q cfg)] " " [:p (:text twt)])
          :full (hc/html [:h1 (icon :twitter) " " (:q cfg)] [:h1 (:text twt)])})
    (assoc cfg :twts twts)))

(comment
  (widget println {:q "from:ComedianTwi"})
  (def tweets (load-twts))
  (println (:text (rand-nth tweets))))

