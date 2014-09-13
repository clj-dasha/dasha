(ns dasha.widgets.templates.chart.data)

(defn cut-data
  [data maximum]
  (if (= maximum (count data))
    (rest data)
    data))

(defn get-random-data
  [data maximum new-value]
  (let [data (cut-data data maximum)
        data2 (cons data new-value)
        data3 (concat ())]
    ))

(defn render-chart
  [state node]
  (let [jq (. js/window $ node)
        $chart (. jq find ".flot-chart")
        outerWidth (. $chart outerWidth)
        maximum (or (/ outerWidth 2) 300)
        data (get-random-data @state maximum 0)]
    (. js/console log data)))

(defn get-flot
  []
  (let [data (atom [])]
    {:render (fn [node] (render-chart data node))
     :update (fn [new-value] new-value)}))


