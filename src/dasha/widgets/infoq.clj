(ns dasha.widgets.infoq
  (:require [org.httpkit.client :as http]
            [dasha.widgets.util :as dwu :refer [def-widget from-json rotate]]
            [clojure.xml :as cx]))

(def url "http://www.infoq.com/feed")

(defn parse [s]
  (-> s
      .getBytes
      java.io.ByteArrayInputStream.
      cx/parse))

(defn parse-rss [s]
  (->>
    (get-in (parse s) [:content 0 :content])
    (filter (fn [x] (= :item (:tag x))))
    (take 10)
    (map (fn [x] {:title (first (get-in x [:content 0 :content]))}))
    (shuffle)
    (take 4)))


(def-widget :infoq [out _]
  (http/get url {} #(out (parse-rss (:body %)))) _)
