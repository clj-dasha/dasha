// Compiled by ClojureScript 0.0-2322
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function value_of(element){return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){return cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,cljs.core.name.call(null,id),/\./));
}));
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){return (function (id,value){return cljs.core.swap_BANG_.call(null,doc,(function (current_value){return cljs.core.reduce.call(null,(function (p1__10736_SHARP_,p2__10735_SHARP_){var or__3609__auto__ = p2__10735_SHARP_.call(null,reagent_forms.core.id__GT_path.call(null,id),value,p1__10736_SHARP_);if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return p1__10736_SHARP_;
}
}),cljs.core.assoc_in.call(null,current_value,reagent_forms.core.id__GT_path.call(null,id),value),events);
}));
});
});
reagent_forms.core.format_type = (function (){var method_table__4475__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4476__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4477__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4478__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4479__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("format-type",((function (method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__,hierarchy__4479__auto__){
return (function (field_type,_){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null))))
{return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else
{return field_type;
}
});})(method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__,hierarchy__4479__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4479__auto__,method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){var parsed = parseFloat(n);if(cljs.core.truth_(isNaN(parsed)))
{return null;
} else
{if(reagent_forms.core.valid_number_ending_QMARK_.call(null,n))
{return n;
} else
{return parsed;
}
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){return value;
}));
reagent_forms.core.bind = (function (){var method_table__4475__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4476__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4477__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4478__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4479__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("bind",((function (method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__,hierarchy__4479__auto__){
return (function (p__10737,_){var map__10738 = p__10737;var map__10738__$1 = ((cljs.core.seq_QMARK_.call(null,map__10738))?cljs.core.apply.call(null,cljs.core.hash_map,map__10738):map__10738);var field = cljs.core.get.call(null,map__10738__$1,new cljs.core.Keyword(null,"field","field",-1302436500));if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null))))
{return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else
{return field;
}
});})(method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__,hierarchy__4479__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4479__auto__,method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__10740,p__10741){var map__10742 = p__10740;var map__10742__$1 = ((cljs.core.seq_QMARK_.call(null,map__10742))?cljs.core.apply.call(null,cljs.core.hash_map,map__10742):map__10742);var fmt = cljs.core.get.call(null,map__10742__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));var id = cljs.core.get.call(null,map__10742__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var field = cljs.core.get.call(null,map__10742__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var map__10743 = p__10741;var map__10743__$1 = ((cljs.core.seq_QMARK_.call(null,map__10743))?cljs.core.apply.call(null,cljs.core.hash_map,map__10743):map__10743);var save_BANG_ = cljs.core.get.call(null,map__10743__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__10743__$1,new cljs.core.Keyword(null,"get","get",1683182755));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__3609__auto__ = get.call(null,id);if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return "";
}
})();if(cljs.core.truth_(fmt))
{return goog.string.format(fmt,value);
} else
{return value;
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10742,map__10742__$1,fmt,id,field,map__10743,map__10743__$1,save_BANG_,get){
return (function (p1__10739_SHARP_){return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__10739_SHARP_)));
});})(map__10742,map__10742__$1,fmt,id,field,map__10743,map__10743__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__10744,p__10745){var map__10746 = p__10744;var map__10746__$1 = ((cljs.core.seq_QMARK_.call(null,map__10746))?cljs.core.apply.call(null,cljs.core.hash_map,map__10746):map__10746);var id = cljs.core.get.call(null,map__10746__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var map__10747 = p__10745;var map__10747__$1 = ((cljs.core.seq_QMARK_.call(null,map__10747))?cljs.core.apply.call(null,cljs.core.hash_map,map__10747):map__10747);var checked = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));var save_BANG_ = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"get","get",1683182755));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,checked),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__10746,map__10746__$1,id,map__10747,map__10747__$1,checked,save_BANG_,get){
return (function (){return save_BANG_.call(null,id,cljs.core.swap_BANG_.call(null,checked,cljs.core.not));
});})(map__10746,map__10746__$1,id,map__10747,map__10747__$1,checked,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__10748,opts,p__10749){var vec__10752 = p__10748;var type = cljs.core.nth.call(null,vec__10752,(0),null);var attrs = cljs.core.nth.call(null,vec__10752,(1),null);var body = cljs.core.nthnext.call(null,vec__10752,(2));var vec__10753 = p__10749;var default_attrs = cljs.core.nth.call(null,vec__10753,(0),null);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
};
var set_attrs = function (p__10748,opts,var_args){
var p__10749 = null;if (arguments.length > 2) {
  p__10749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attrs__delegate.call(this,p__10748,opts,p__10749);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__10754){
var p__10748 = cljs.core.first(arglist__10754);
arglist__10754 = cljs.core.next(arglist__10754);
var opts = cljs.core.first(arglist__10754);
var p__10749 = cljs.core.rest(arglist__10754);
return set_attrs__delegate(p__10748,opts,p__10749);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__4475__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4476__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4477__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4478__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4479__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("init-field",((function (method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__,hierarchy__4479__auto__){
return (function (p__10755,_){var vec__10756 = p__10755;var ___$1 = cljs.core.nth.call(null,vec__10756,(0),null);var map__10757 = cljs.core.nth.call(null,vec__10756,(1),null);var map__10757__$1 = ((cljs.core.seq_QMARK_.call(null,map__10757))?cljs.core.apply.call(null,cljs.core.hash_map,map__10757):map__10757);var field = cljs.core.get.call(null,map__10757__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var field__$1 = cljs.core.keyword.call(null,field);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null))))
{return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else
{return field__$1;
}
});})(method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__,hierarchy__4479__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4479__auto__,method_table__4475__auto__,prefer_table__4476__auto__,method_cache__4477__auto__,cached_hierarchy__4478__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__10758,opts){var vec__10759 = p__10758;var _ = cljs.core.nth.call(null,vec__10759,(0),null);var map__10760 = cljs.core.nth.call(null,vec__10759,(1),null);var map__10760__$1 = ((cljs.core.seq_QMARK_.call(null,map__10760))?cljs.core.apply.call(null,cljs.core.hash_map,map__10760):map__10760);var field = cljs.core.get.call(null,map__10760__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var component = vec__10759;return ((function (vec__10759,_,map__10760,map__10760__$1,field,component){
return (function (){return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(vec__10759,_,map__10760,map__10760__$1,field,component))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__10762,p__10763){var vec__10764 = p__10762;var type = cljs.core.nth.call(null,vec__10764,(0),null);var map__10765 = cljs.core.nth.call(null,vec__10764,(1),null);var map__10765__$1 = ((cljs.core.seq_QMARK_.call(null,map__10765))?cljs.core.apply.call(null,cljs.core.hash_map,map__10765):map__10765);var attrs = map__10765__$1;var fmt = cljs.core.get.call(null,map__10765__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));var id = cljs.core.get.call(null,map__10765__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var map__10766 = p__10763;var map__10766__$1 = ((cljs.core.seq_QMARK_.call(null,map__10766))?cljs.core.apply.call(null,cljs.core.hash_map,map__10766):map__10766);var save_BANG_ = cljs.core.get.call(null,map__10766__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__10766__$1,new cljs.core.Keyword(null,"get","get",1683182755));var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));return ((function (display_value,vec__10764,type,map__10765,map__10765__$1,attrs,fmt,id,map__10766,map__10766__$1,save_BANG_,get){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = get.call(null,id);var map__10767 = cljs.core.deref.call(null,display_value);var map__10767__$1 = ((cljs.core.seq_QMARK_.call(null,map__10767))?cljs.core.apply.call(null,cljs.core.hash_map,map__10767):map__10767);var value = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"value","value",305978217));var changed_self_QMARK_ = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
if(cljs.core.truth_(fmt))
{return goog.string.format(fmt,value__$1);
} else
{return value__$1;
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_value,vec__10764,type,map__10765,map__10765__$1,attrs,fmt,id,map__10766,map__10766__$1,save_BANG_,get){
return (function (p1__10761_SHARP_){var temp__4220__auto__ = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__10761_SHARP_));if(cljs.core.truth_(temp__4220__auto__))
{var value = temp__4220__auto__;cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));
return save_BANG_.call(null,id,parseFloat(value));
} else
{return "";
}
});})(display_value,vec__10764,type,map__10765,map__10765__$1,attrs,fmt,id,map__10766,map__10766__$1,save_BANG_,get))
], null),attrs)], null);
});
;})(display_value,vec__10764,type,map__10765,map__10765__$1,attrs,fmt,id,map__10766,map__10766__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__10768,p__10769){var vec__10770 = p__10768;var _ = cljs.core.nth.call(null,vec__10770,(0),null);var map__10771 = cljs.core.nth.call(null,vec__10770,(1),null);var map__10771__$1 = ((cljs.core.seq_QMARK_.call(null,map__10771))?cljs.core.apply.call(null,cljs.core.hash_map,map__10771):map__10771);var field = cljs.core.get.call(null,map__10771__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var id = cljs.core.get.call(null,map__10771__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var component = vec__10770;var map__10772 = p__10769;var map__10772__$1 = ((cljs.core.seq_QMARK_.call(null,map__10772))?cljs.core.apply.call(null,cljs.core.hash_map,map__10772):map__10772);var opts = map__10772__$1;var get = cljs.core.get.call(null,map__10772__$1,new cljs.core.Keyword(null,"get","get",1683182755));var state = reagent.core.atom.call(null,get.call(null,id));return ((function (state,vec__10770,_,map__10771,map__10771__$1,field,id,component,map__10772,map__10772__$1,opts,get){
return (function (){return reagent_forms.core.set_attrs.call(null,component,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"checked","checked",-50955819),state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(state,vec__10770,_,map__10771,map__10771__$1,field,id,component,map__10772,map__10772__$1,opts,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__10773,p__10774){var vec__10775 = p__10773;var type = cljs.core.nth.call(null,vec__10775,(0),null);var map__10776 = cljs.core.nth.call(null,vec__10775,(1),null);var map__10776__$1 = ((cljs.core.seq_QMARK_.call(null,map__10776))?cljs.core.apply.call(null,cljs.core.hash_map,map__10776):map__10776);var attrs = map__10776__$1;var placeholder = cljs.core.get.call(null,map__10776__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));var postamble = cljs.core.get.call(null,map__10776__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));var preamble = cljs.core.get.call(null,map__10776__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));var id = cljs.core.get.call(null,map__10776__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var map__10777 = p__10774;var map__10777__$1 = ((cljs.core.seq_QMARK_.call(null,map__10777))?cljs.core.apply.call(null,cljs.core.hash_map,map__10777):map__10777);var get = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"get","get",1683182755));return ((function (vec__10775,type,map__10776,map__10776__$1,attrs,placeholder,postamble,preamble,id,map__10777,map__10777__$1,get){
return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4220__auto__ = get.call(null,id);if(cljs.core.truth_(temp__4220__auto__))
{var value = temp__4220__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble));
} else
{return placeholder;
}
})()], null);
});
;})(vec__10775,type,map__10776,map__10776__$1,attrs,placeholder,postamble,preamble,id,map__10777,map__10777__$1,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__10778,p__10779){var vec__10780 = p__10778;var type = cljs.core.nth.call(null,vec__10780,(0),null);var map__10781 = cljs.core.nth.call(null,vec__10780,(1),null);var map__10781__$1 = ((cljs.core.seq_QMARK_.call(null,map__10781))?cljs.core.apply.call(null,cljs.core.hash_map,map__10781):map__10781);var attrs = map__10781__$1;var touch_event = cljs.core.get.call(null,map__10781__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));var event = cljs.core.get.call(null,map__10781__$1,new cljs.core.Keyword(null,"event","event",301435442));var id = cljs.core.get.call(null,map__10781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var body = cljs.core.nthnext.call(null,vec__10780,(2));var map__10782 = p__10779;var map__10782__$1 = ((cljs.core.seq_QMARK_.call(null,map__10782))?cljs.core.apply.call(null,cljs.core.hash_map,map__10782):map__10782);var opts = map__10782__$1;var save_BANG_ = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__10782__$1,new cljs.core.Keyword(null,"get","get",1683182755));return ((function (vec__10780,type,map__10781,map__10781__$1,attrs,touch_event,event,id,body,map__10782,map__10782__$1,opts,save_BANG_,get){
return (function (){if(cljs.core.truth_(event))
{if(cljs.core.truth_(event.call(null,get.call(null,id))))
{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else
{return null;
}
} else
{var temp__4220__auto__ = cljs.core.not_empty.call(null,get.call(null,id));if(cljs.core.truth_(temp__4220__auto__))
{var message = temp__4220__auto__;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3609__auto__ = touch_event;if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4220__auto__,vec__10780,type,map__10781,map__10781__$1,attrs,touch_event,event,id,body,map__10782,map__10782__$1,opts,save_BANG_,get){
return (function (){return save_BANG_.call(null,id,null);
});})(message,temp__4220__auto__,vec__10780,type,map__10781,map__10781__$1,attrs,touch_event,event,id,body,map__10782,map__10782__$1,opts,save_BANG_,get))
], true, false),"X"], null),message], null);
} else
{return null;
}
}
});
;})(vec__10780,type,map__10781,map__10781__$1,attrs,touch_event,event,id,body,map__10782,map__10782__$1,opts,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__10783,p__10784){var vec__10785 = p__10783;var type = cljs.core.nth.call(null,vec__10785,(0),null);var map__10786 = cljs.core.nth.call(null,vec__10785,(1),null);var map__10786__$1 = ((cljs.core.seq_QMARK_.call(null,map__10786))?cljs.core.apply.call(null,cljs.core.hash_map,map__10786):map__10786);var attrs = map__10786__$1;var value = cljs.core.get.call(null,map__10786__$1,new cljs.core.Keyword(null,"value","value",305978217));var id = cljs.core.get.call(null,map__10786__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var field = cljs.core.get.call(null,map__10786__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var body = cljs.core.nthnext.call(null,vec__10785,(2));var map__10787 = p__10784;var map__10787__$1 = ((cljs.core.seq_QMARK_.call(null,map__10787))?cljs.core.apply.call(null,cljs.core.hash_map,map__10787):map__10787);var save_BANG_ = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"get","get",1683182755));var state = reagent.core.atom.call(null,cljs.core._EQ_.call(null,value,get.call(null,id)));return ((function (state,vec__10785,type,map__10786,map__10786__$1,attrs,value,id,field,body,map__10787,map__10787__$1,save_BANG_,get){
return (function (){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,vec__10785,type,map__10786,map__10786__$1,attrs,value,id,field,body,map__10787,map__10787__$1,save_BANG_,get){
return (function (){save_BANG_.call(null,id,value);
return cljs.core.reset_BANG_.call(null,state,cljs.core._EQ_.call(null,value,get.call(null,id)));
});})(state,vec__10785,type,map__10786,map__10786__$1,attrs,value,id,field,body,map__10787,map__10787__$1,save_BANG_,get))
], null),attrs)], null),body);
});
;})(state,vec__10785,type,map__10786,map__10786__$1,attrs,value,id,field,body,map__10787,map__10787__$1,save_BANG_,get))
}));
reagent_forms.core.group_item = (function group_item(p__10788,p__10789,selections,field,id){var vec__10793 = p__10788;var type = cljs.core.nth.call(null,vec__10793,(0),null);var map__10794 = cljs.core.nth.call(null,vec__10793,(1),null);var map__10794__$1 = ((cljs.core.seq_QMARK_.call(null,map__10794))?cljs.core.apply.call(null,cljs.core.hash_map,map__10794):map__10794);var attrs = map__10794__$1;var touch_event = cljs.core.get.call(null,map__10794__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));var key = cljs.core.get.call(null,map__10794__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var body = cljs.core.nthnext.call(null,vec__10793,(2));var map__10795 = p__10789;var map__10795__$1 = ((cljs.core.seq_QMARK_.call(null,map__10795))?cljs.core.apply.call(null,cljs.core.hash_map,map__10795):map__10795);var multi_select = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));var save_BANG_ = cljs.core.get.call(null,map__10795__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var handle_click_BANG_ = ((function (vec__10793,type,map__10794,map__10794__$1,attrs,touch_event,key,body,map__10795,map__10795__$1,multi_select,save_BANG_){
return (function handle_click_BANG_(){if(cljs.core.truth_(multi_select))
{cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);
return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else
{var value = key.call(null,cljs.core.deref.call(null,selections));cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));
return save_BANG_.call(null,id,(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?key:null));
}
});})(vec__10793,type,map__10794,map__10794__$1,attrs,touch_event,key,body,map__10795,map__10795__$1,multi_select,save_BANG_))
;
return ((function (vec__10793,type,map__10794,map__10794__$1,attrs,touch_event,key,body,map__10795,map__10795__$1,multi_select,save_BANG_){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?"active":null),(function (){var or__3609__auto__ = touch_event;if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__10793,type,map__10794,map__10794__$1,attrs,touch_event,key,body,map__10795,map__10795__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__10796){var map__10801 = p__10796;var map__10801__$1 = ((cljs.core.seq_QMARK_.call(null,map__10801))?cljs.core.apply.call(null,cljs.core.hash_map,map__10801):map__10801);var multi_select = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));var get = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"get","get",1683182755));var value = get.call(null,id);return cljs.core.reduce.call(null,((function (value,map__10801,map__10801__$1,multi_select,get){
return (function (m,p__10802){var vec__10803 = p__10802;var _ = cljs.core.nth.call(null,vec__10803,(0),null);var map__10804 = cljs.core.nth.call(null,vec__10803,(1),null);var map__10804__$1 = ((cljs.core.seq_QMARK_.call(null,map__10804))?cljs.core.apply.call(null,cljs.core.hash_map,map__10804):map__10804);var key = cljs.core.get.call(null,map__10804__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__10801,map__10801__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
reagent_forms.core.selection_group = (function selection_group(p__10805,opts){var vec__10808 = p__10805;var type = cljs.core.nth.call(null,vec__10808,(0),null);var map__10809 = cljs.core.nth.call(null,vec__10808,(1),null);var map__10809__$1 = ((cljs.core.seq_QMARK_.call(null,map__10809))?cljs.core.apply.call(null,cljs.core.hash_map,map__10809):map__10809);var attrs = map__10809__$1;var id = cljs.core.get.call(null,map__10809__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var field = cljs.core.get.call(null,map__10809__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var selection_items = cljs.core.nthnext.call(null,vec__10808,(2));var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items,opts));var selectors = cljs.core.map.call(null,((function (selections,vec__10808,type,map__10809,map__10809__$1,attrs,id,field,selection_items){
return (function (item){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null);
});})(selections,vec__10808,type,map__10809,map__10809__$1,attrs,id,field,selection_items))
,selection_items);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),selectors);
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (field,opts){return reagent_forms.core.selection_group.call(null,field,opts);
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (field,opts){return reagent_forms.core.selection_group.call(null,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true));
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__10811,p__10812){var vec__10813 = p__10811;var type = cljs.core.nth.call(null,vec__10813,(0),null);var map__10814 = cljs.core.nth.call(null,vec__10813,(1),null);var map__10814__$1 = ((cljs.core.seq_QMARK_.call(null,map__10814))?cljs.core.apply.call(null,cljs.core.hash_map,map__10814):map__10814);var attrs = map__10814__$1;var id = cljs.core.get.call(null,map__10814__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var field = cljs.core.get.call(null,map__10814__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var options = cljs.core.nthnext.call(null,vec__10813,(2));var map__10815 = p__10812;var map__10815__$1 = ((cljs.core.seq_QMARK_.call(null,map__10815))?cljs.core.apply.call(null,cljs.core.hash_map,map__10815):map__10815);var save_BANG_ = cljs.core.get.call(null,map__10815__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__10815__$1,new cljs.core.Keyword(null,"get","get",1683182755));var selection = reagent.core.atom.call(null,(function (){var or__3609__auto__ = get.call(null,id);if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return cljs.core.get_in.call(null,cljs.core.first.call(null,options),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());save_BANG_.call(null,id,cljs.core.deref.call(null,selection));
return ((function (selection,vec__10813,type,map__10814,map__10814__$1,attrs,id,field,options,map__10815,map__10815__$1,save_BANG_,get){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selection,vec__10813,type,map__10814,map__10814__$1,attrs,id,field,options,map__10815,map__10815__$1,save_BANG_,get){
return (function (p1__10810_SHARP_){return save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__10810_SHARP_));
});})(selection,vec__10813,type,map__10814,map__10814__$1,attrs,id,field,options,map__10815,map__10815__$1,save_BANG_,get))
], null)),options], null);
});
;})(selection,vec__10813,type,map__10814,map__10814__$1,attrs,id,field,options,map__10815,map__10815__$1,save_BANG_,get))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
* creates data bindings between the form fields and the supplied atom
* form - the form template with the fields
* doc - the document that the fields will be bound to
* events - any events that should be triggered when the document state changes
* @param {...*} var_args
*/
reagent_forms.core.bind_fields = (function() { 
var bind_fields__delegate = function (form,doc,events){var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__10816_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__10816_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);var form__$1 = clojure.walk.prewalk.call(null,((function (opts){
return (function (node){if(reagent_forms.core.field_QMARK_.call(null,node))
{var field = reagent_forms.core.init_field.call(null,node,opts);if(cljs.core.fn_QMARK_.call(null,field))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else
{return field;
}
} else
{return node;
}
});})(opts))
,form);return ((function (opts,form__$1){
return (function (){return form__$1;
});
;})(opts,form__$1))
};
var bind_fields = function (form,doc,var_args){
var events = null;if (arguments.length > 2) {
  events = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__10817){
var form = cljs.core.first(arglist__10817);
arglist__10817 = cljs.core.next(arglist__10817);
var doc = cljs.core.first(arglist__10817);
var events = cljs.core.rest(arglist__10817);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;

//# sourceMappingURL=core.js.map