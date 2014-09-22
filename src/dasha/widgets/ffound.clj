(ns dasha.widgets.ffound
  (:require [org.httpkit.client :as http]
            [dasha.widgets.util :refer [icon]]
            [hiccup.core :as hc]))

(def res (atom nil))

(defn extract [body]
  (->>
    (for [img (re-seq #"<img.*>" body)]
      (nth (re-find #"src=\"([^\"]*)" img) 1))
    (filter identity)
    (filter #(re-find #"http://img\." %))
    (shuffle)))


(defn load-imgs []
  (extract (:body @(http/get "http://ffffound.com"))))

(defn read-or-load [cfg]
  (if (or (nil? (:imgs cfg)) (empty? (:imgs cfg)))
    (load-imgs)
    (:imgs cfg)))

(defn widget [out cfg]
  (let [[img & imgs] (read-or-load cfg)]
    (out {:color (or (:color cfg) "transparent")
          :summary (hc/html [:img.full {:src img}])
          :full (hc/html [:img.full {:src img}])})
    (assoc cfg :imgs imgs)))
