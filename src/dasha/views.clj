(ns dasha.views
  (:require
    [cheshire.core :as cc]
    [hiccup.core :as hc]
    [hiccup.page :as hp]))

(def last-4-messages (atom (list)))

(defn cache-message [m]
  (swap! last-4-messages (fn [ms] (take 4 (cons m ms)))))

#_(println @last-4-messages)

(defn layout  [title & content]
  (hp/html5
    [:head
     [:title title]
     (hp/include-css "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css")
     (hp/include-css "//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css")
     (hp/include-css "/style.css")
     [:body {:ng-app "app"}
      content
      (hp/include-js "//code.jquery.com/jquery-2.1.1.min.js")
      (hp/include-js "/app.js")]]))

(defn index-page  []
  (layout
    "Dasha"
    [:script (str "stack = " (cc/generate-string @last-4-messages))]
    [:div
     [:div#i-4.main
      [:p [:big "?"]]]
     [:div.as
      [:div#i-1.a
       [:h3 [:big "?"]]]
      [:div#i-2.a
       [:h3 [:big "?"]]]
      [:div#i-3.a
       [:h3 [:big "?"]]]]
     ]))
