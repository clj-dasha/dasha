(defproject dasha "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                 [org.clojure/clojure "1.7.0-alpha2"]
                 [http-kit "2.1.19"]
                 [com.taoensso/sente "1.1.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [compojure "1.1.9"]
                 [ring/ring "1.3.1"]
                 [reagent "0.4.2"]
                 [reagent-forms "0.1.7"]
                 [tentacles "0.2.5"]
                 ]
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :cljsbuild
  {:builds
   [{:source-paths ["src-cljs"],
     :id "dev",
     :compiler
     {:output-dir "resources/public/js/",
      :optimizations :none,
      :output-to "resources/public/js/app.js",
      :source-map true,
      :pretty-print true}}
    {:source-paths ["src-cljs"],
     :id "release",
     :compiler
     {:closure-warnings {:non-standard-jsdoc :off},
      :optimizations :advanced,
      :output-to "resources/public/js/app.js",
      :output-wrapper false,
      :pretty-print false}}]}
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
