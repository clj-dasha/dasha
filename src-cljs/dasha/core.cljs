(ns dasha.core)

(defn log
  [data]
  (.log js/console (str data)))

(log "test")
