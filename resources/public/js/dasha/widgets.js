// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.widgets');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
dasha.widgets.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(123),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"i.fa.fa-random.fa-3x","i.fa.fa-random.fa-3x",-1402317228)], null));
dasha.widgets.random_widget_component = (function random_widget_component(){return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget.style1.navy-bg","div.widget.style1.navy-bg",3140553),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.vertical-align","div.row.vertical-align",1031842420),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-3","div.col-xs-3",-331276165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dasha.widgets.state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-9.text-right","div.col-xs-9.text-right",1401555090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold","h2.font-bold",276534827),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dasha.widgets.state))], null)], null)], null)], null)], null)], null);
});
});
dasha.widgets.widget = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),dasha.widgets.random_widget_component,new cljs.core.Keyword(null,"update","update",1045576396),(function (p1__11151_SHARP_){return cljs.core.reset_BANG_.call(null,dasha.widgets.state,p1__11151_SHARP_);
})], null);

//# sourceMappingURL=widgets.js.map