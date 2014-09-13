(ns dasha.loader.clojure
  (:import (java.io StringWriter File)))

(defn- create-temp-file [name]
  (File/createTempFile name ".clj"))

(defn- save-from-url [url]
  (let [tmp-file (create-temp-file "src")]
    (spit tmp-file (slurp url))
    (.getCanonicalPath tmp-file)))

(defn load-ns [url]
  (load-file (save-from-url url)))
