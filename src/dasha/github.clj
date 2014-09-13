(ns dasha.github
  (require [tentacles.gists :as gists]
           [clojure.string :as str]))

(defn- get-gist-from-url [url]
  (gists/specific-gist
    (last (str/split url #"/"))))

(defn- predicate [ext]
  (fn [x] (.endsWith (:filename x) ext)))

(defn- get-raw [pred collection]
  (:raw_url (first (filter pred collection))))

(defn get-raws-from-gist-url [url]
  (let [gist (get-gist-from-url url)]
    (let [files (:files gist)
          sets (for [[_ v] files] v)
          c (predicate "clj")
          cj (predicate "cljs")]
      {:backend  (get-raw c sets)
       :frontend (get-raw cj sets)})))
