(ns dasha.widgets.infoq
  (:require [org.httpkit.client :as http]
            [hiccup.core :as hc]
            [dasha.widgets.util :refer [icon]]
            [clojure.xml :as cx]))

(def url "http://www.infoq.com/feed")

(defn parse [s]
  (-> s
      .getBytes
      java.io.ByteArrayInputStream.
      cx/parse))

(defn find-tag-content [tg nd]
  (first (:content (first (filter #(= (:tag %) tg) (:content nd))))))

(defn parse-rss [s]
  (->>
    (get-in (parse s) [:content 0 :content])
    (filter (fn [x] (= :item (:tag x))))
    (take 10)
    (map (fn [x] {:title (find-tag-content :title x)
                  :text  (find-tag-content :description x)}))
    (shuffle)
    (take 4)))


(defn render [items]
  (let [post (rand-nth items)]
    {:color "gray"
     :summary (hc/html [:h3 (icon :newspaper-o) " " (:title post)])
     :full    (hc/html [:h1 (:title post)]
                       [:hr]
                       [:p (:text post)])}))

(defn widget [out cfg]
  (http/get url {} #(out (render (parse-rss (:body %)))))
  cfg)
