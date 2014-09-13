(ns dasha.new-widget
  (:use [hiccup.core]
        [ring.util.response]))

(def new-widget-form
  (html [:form {:method :post}
         [:div [:label "url:"] [:input {:name "url"}]]
         [:button#create "create new widget"]]))

(defn create-new-widget [url]
  url)

(defn new-widget [widget-url]
  (do
    (create-new-widget widget-url)
    (redirect-after-post "index.html")))
