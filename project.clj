(defproject dasha "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                 [org.clojure/clojure "1.7.0-alpha2"]
                 [http-kit "2.1.19"]
                 [hiccup "1.0.5"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [org.clojure/data.json "0.2.5"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [compojure "1.1.9"]
                 [ring/ring "1.3.1"]
                 ]
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
  :profiles {:uberjar {:aot :all}})
