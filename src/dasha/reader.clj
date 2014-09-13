(ns dasha.reader)

(defn eval-url-backend [url]
  (-> url slurp read-string eval))
