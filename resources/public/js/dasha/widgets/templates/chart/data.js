// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.widgets.templates.chart.data');
goog.require('cljs.core');
dasha.widgets.templates.chart.data.cut_data = (function cut_data(data,maximum){if(cljs.core._EQ_.call(null,maximum,cljs.core.count.call(null,data)))
{return cljs.core.rest.call(null,data);
} else
{return data;
}
});
dasha.widgets.templates.chart.data.get_random_data = (function get_random_data(data,maximum,new_value){var data__$1 = dasha.widgets.templates.chart.data.cut_data.call(null,data,maximum);var data2 = cljs.core.cons.call(null,data__$1,new_value);var data3 = cljs.core.concat.call(null,cljs.core.List.EMPTY);return null;
});
dasha.widgets.templates.chart.data.render_chart = (function render_chart(state,node){var jq = window.$(node);var $chart = jq.find(".flot-chart");var outerWidth = $chart.outerWidth();var maximum = (function (){var or__3609__auto__ = (outerWidth / (2));if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return (300);
}
})();var data = dasha.widgets.templates.chart.data.get_random_data.call(null,cljs.core.deref.call(null,state),maximum,(0));return console.log(data);
});
dasha.widgets.templates.chart.data.get_flot = (function get_flot(){var data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (data){
return (function (node){return dasha.widgets.templates.chart.data.render_chart.call(null,data,node);
});})(data))
,new cljs.core.Keyword(null,"update","update",1045576396),((function (data){
return (function (new_value){return new_value;
});})(data))
], null);
});

//# sourceMappingURL=data.js.map