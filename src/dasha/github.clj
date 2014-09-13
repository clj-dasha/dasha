(ns dasha.github
  (require [tentacles.gists :as gists]
           [clojure.string :as str]))

(defn- get-gist-from-url [url]
  (gists/specific-gist
    (last (str/split url #"/"))))

(defn get-raws-from-gist-url [url]
  (let [g (get-gist-from-url url)]
    (for [[_ v] (:files g)]
      (:raw_url v))))