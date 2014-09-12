// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.routing');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dasha.widgets');
goog.require('dasha.widgets');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
dasha.routing.log = (function log(data){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
dasha.routing.widgets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"random","random",-557811113),dasha.widgets.widget,new cljs.core.Keyword(null,"widget2","widget2",-1634759239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update","update",1045576396),(function (p1__11069_SHARP_){return dasha.routing.log.call(null,("Widget #2 received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11069_SHARP_)));
}),new cljs.core.Keyword(null,"component","component",1555936782),(function (){return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello"], null);
});
})], null)], null);
dasha.routing.widget_keys = cljs.core.keys.call(null,dasha.routing.widgets);
dasha.routing.all = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null)], null)], null);
}),dasha.routing.widget_keys));
dasha.routing.bind_widget = (function bind_widget(widget_key){var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__){
return (function (state_11106){var state_val_11107 = (state_11106[(1)]);if((state_val_11107 === (4)))
{var inst_11098 = (state_11106[(2)]);var inst_11099 = widget_key.call(null,dasha.routing.widgets);var inst_11100 = new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(inst_11099);var inst_11101 = inst_11100.call(null,inst_11098);var state_11106__$1 = (function (){var statearr_11108 = state_11106;(statearr_11108[(7)] = inst_11101);
return statearr_11108;
})();var statearr_11109_11118 = state_11106__$1;(statearr_11109_11118[(2)] = null);
(statearr_11109_11118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11107 === (3)))
{var inst_11104 = (state_11106[(2)]);var state_11106__$1 = state_11106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11106__$1,inst_11104);
} else
{if((state_val_11107 === (2)))
{var inst_11095 = widget_key.call(null,dasha.routing.all);var inst_11096 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(inst_11095);var state_11106__$1 = state_11106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11106__$1,(4),inst_11096);
} else
{if((state_val_11107 === (1)))
{var state_11106__$1 = state_11106;var statearr_11110_11119 = state_11106__$1;(statearr_11110_11119[(2)] = null);
(statearr_11110_11119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6470__auto__))
;return ((function (switch__6455__auto__,c__6470__auto__){
return (function() {
var state_machine__6456__auto__ = null;
var state_machine__6456__auto____0 = (function (){var statearr_11114 = [null,null,null,null,null,null,null,null];(statearr_11114[(0)] = state_machine__6456__auto__);
(statearr_11114[(1)] = (1));
return statearr_11114;
});
var state_machine__6456__auto____1 = (function (state_11106){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_11106);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e11115){if((e11115 instanceof Object))
{var ex__6459__auto__ = e11115;var statearr_11116_11120 = state_11106;(statearr_11116_11120[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11106);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11115;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11121 = state_11106;
state_11106 = G__11121;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_11106){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_11106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__))
})();var state__6472__auto__ = (function (){var statearr_11117 = f__6471__auto__.call(null);(statearr_11117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_11117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__))
);
return c__6470__auto__;
});
var seq__11122_11126 = cljs.core.seq.call(null,dasha.routing.widget_keys);var chunk__11123_11127 = null;var count__11124_11128 = (0);var i__11125_11129 = (0);while(true){
if((i__11125_11129 < count__11124_11128))
{var w_11130 = cljs.core._nth.call(null,chunk__11123_11127,i__11125_11129);var widget_11131 = w_11130.call(null,dasha.routing.widgets);dasha.routing.bind_widget.call(null,w_11130);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(widget_11131)], null),document.getElementById((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w_11130))));
{
var G__11132 = seq__11122_11126;
var G__11133 = chunk__11123_11127;
var G__11134 = count__11124_11128;
var G__11135 = (i__11125_11129 + (1));
seq__11122_11126 = G__11132;
chunk__11123_11127 = G__11133;
count__11124_11128 = G__11134;
i__11125_11129 = G__11135;
continue;
}
} else
{var temp__4222__auto___11136 = cljs.core.seq.call(null,seq__11122_11126);if(temp__4222__auto___11136)
{var seq__11122_11137__$1 = temp__4222__auto___11136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11122_11137__$1))
{var c__4365__auto___11138 = cljs.core.chunk_first.call(null,seq__11122_11137__$1);{
var G__11139 = cljs.core.chunk_rest.call(null,seq__11122_11137__$1);
var G__11140 = c__4365__auto___11138;
var G__11141 = cljs.core.count.call(null,c__4365__auto___11138);
var G__11142 = (0);
seq__11122_11126 = G__11139;
chunk__11123_11127 = G__11140;
count__11124_11128 = G__11141;
i__11125_11129 = G__11142;
continue;
}
} else
{var w_11143 = cljs.core.first.call(null,seq__11122_11137__$1);var widget_11144 = w_11143.call(null,dasha.routing.widgets);dasha.routing.bind_widget.call(null,w_11143);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(widget_11144)], null),document.getElementById((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w_11143))));
{
var G__11145 = cljs.core.next.call(null,seq__11122_11137__$1);
var G__11146 = null;
var G__11147 = (0);
var G__11148 = (0);
seq__11122_11126 = G__11145;
chunk__11123_11127 = G__11146;
count__11124_11128 = G__11147;
i__11125_11129 = G__11148;
continue;
}
}
} else
{}
}
break;
}

//# sourceMappingURL=routing.js.map