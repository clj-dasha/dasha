(ns dasha.widgets.travis
  (:require [org.httpkit.client :as http]
            [dasha.widgets.util :refer [from-json rotate]]
            [clj-time.format :as cf]
            [hiccup.core :as hc]))

(def t-fmtr (cf/formatter "MM-dd HH:m"))

(defn fmt [s] (cf/unparse t-fmtr (cf/parse s)))

(def url "https://api.travis-ci.org/repos/")

(def opts {:insecure? true :headers {"Content-Type" "application/json"}})

; {"id":35413375,"repository_id":2484656,
; "number":"74","state":"finished",
; "result":1,"started_at":"2014-09-16T08:29:24Z",
; "finished_at":"2014-09-16T08:36:44Z",
; "duration":440,"commit":"46cd9cdc86b7cfebd88bcd02fdf1b27ffa00f2b4",
; "branch":"ids","message":"fixing","event_type":"push"}


(defn icon [nm] [:i.fa {:class (str "fa-" (name nm))}])


(defn build-status [b]
  (if-let [st (:result b)]
    (nth [(icon :smile-o) (icon :meh-o)] st)
    (:result b)))

(defn render-build [b]
  [:span.small
   [:b (:branch b) " " (build-status b)]
   " "
   (fmt (:finished_at b))
   "&nbsp;" [:span.small (:message b)]])

(defn render [repo bs]
  (let [st (:result (first bs))
        clr (nth ["#029E77" "#b91d47"] (or st 0))]
    {:color clr
     :summary
     (hc/html [:h1 (icon :github) " " repo]
              [:p (render-build (first bs))])
     :full
     (hc/html [:h1 repo]
              [:hr]
              (for [b bs]
                [:p (render-build b)]))}))

(defn widget [out cfg]
  (let [repo (first (:qs cfg))]
    (http/get (str url  repo "/builds") opts
              (fn [{b :body}] (out (render repo (from-json b)))))
    (update-in cfg [:qs] rotate)))

