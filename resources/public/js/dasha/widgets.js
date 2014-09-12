// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.widgets');
goog.require('cljs.core');
goog.require('reagent_forms.core');
goog.require('reagent.core');
goog.require('reagent_forms.core');
goog.require('reagent.core');
goog.require('reagent.core');
dasha.widgets.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
dasha.widgets.random_widget = (function random_widget(){var doc = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (doc){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2","div.col-lg-2",664351046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget.style1.navy-bg","div.widget.style1.navy-bg",3140553),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.vertical-align","div.row.vertical-align",1031842420),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-3","div.col-xs-3",-331276165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-random.fa-3x","i.fa.fa-random.fa-3x",-1402317228)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-9.text-right","div.col-xs-9.text-right",1401555090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold","h2.font-bold",276534827),"99"], null)], null)], null)], null)], null)], null);
});
;})(doc))
});
dasha.widgets.init_BANG_ = (function init_BANG_(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dasha.widgets.random_widget], null),document.getElementById("app"));
});

//# sourceMappingURL=widgets.js.map