(ns dasha.widgets.travis
  (:require [org.httpkit.client :as http]
            [dasha.widgets.util :as dwu :refer [def-widget from-json rotate]]))

(def url "https://api.travis-ci.org/repos/")

(def opts {:insecure? true :headers {"Content-Type" "application/json"}})

(def-widget :travis
  [out cfg]
  (let [repo (first (:qs cfg))]
    (http/get (str url  repo "/builds") opts
               (fn [{b :body}]
                 (out {:repo repo
                       :builds (from-json b)})))
     (update-in cfg [:qs] rotate)))
