(defproject dasha "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha2"]
                 [cheshire "5.3.1"]
                 [compojure "1.1.9"]
                 [hiccup "1.0.5"]
                 [hiccup "1.0.5"]
                 [http-kit "2.1.19"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [org.clojure/data.json "0.2.5"]
                 [reagent "0.4.2"]
                 [reagent-forms "0.1.7"]
                 [ring/ring "1.3.1"]
                 [tentacles "0.2.5"]
                 ]
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
  :profiles {:dev
             {:source-paths ["dev"]
              :dependencies [[org.clojure/tools.namespace "0.2.6"]
                             [im.chit/vinyasa "0.2.2"]]
              :plugins [[lein-kibit "0.0.8"]]}})
