// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.widgets.templates.chart');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
dasha.widgets.templates.chart.component = (function component(doc){return cljs.core.with_meta.call(null,(function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,doc))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-6","div.col-lg-6",-987495203),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ibox.float-e-margins","div.ibox.float-e-margins",1959736664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ibox-title","div.ibox-title",-1957403600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,doc))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ibox-content","div.ibox-content",1804746603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flot-chart","div.flot-chart",2047657624)], null)], null)], null)], null)], null);
} else
{return null;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){return window.runFlot();
})], null));
});
dasha.widgets.templates.chart.create = (function create(initial_state){var state = reagent.core.atom.call(null,initial_state);var c = dasha.widgets.templates.chart.component.call(null,state);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),c,new cljs.core.Keyword(null,"update","update",1045576396),((function (state,c){
return (function (p1__16112_SHARP_){return cljs.core.reset_BANG_.call(null,state,p1__16112_SHARP_);
});})(state,c))
], null);
});

//# sourceMappingURL=chart.js.map