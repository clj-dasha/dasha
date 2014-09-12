// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.routing');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dasha.widgets.templates.chart');
goog.require('dasha.widgets.templates.chart');
goog.require('dasha.widgets.templates.value');
goog.require('dasha.widgets.templates.value');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
dasha.routing.log = (function log(data){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
dasha.routing.widgets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"random","random",-557811113),dasha.widgets.templates.value.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(123),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"i.fa.fa-random.fa-3x","i.fa.fa-random.fa-3x",-1402317228)], null)),new cljs.core.Keyword(null,"widget2","widget2",-1634759239),dasha.widgets.templates.chart.create.call(null,cljs.core.PersistentArrayMap.EMPTY)], null);
dasha.routing.widget_keys = cljs.core.keys.call(null,dasha.routing.widgets);
dasha.routing.all = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null)], null)], null);
}),dasha.routing.widget_keys));
dasha.routing.bind_widget = (function bind_widget(widget_key){var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__){
return (function (state_16061){var state_val_16062 = (state_16061[(1)]);if((state_val_16062 === (4)))
{var inst_16053 = (state_16061[(2)]);var inst_16054 = widget_key.call(null,dasha.routing.widgets);var inst_16055 = new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(inst_16054);var inst_16056 = inst_16055.call(null,inst_16053);var state_16061__$1 = (function (){var statearr_16063 = state_16061;(statearr_16063[(7)] = inst_16056);
return statearr_16063;
})();var statearr_16064_16073 = state_16061__$1;(statearr_16064_16073[(2)] = null);
(statearr_16064_16073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16062 === (3)))
{var inst_16059 = (state_16061[(2)]);var state_16061__$1 = state_16061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16061__$1,inst_16059);
} else
{if((state_val_16062 === (2)))
{var inst_16050 = widget_key.call(null,dasha.routing.all);var inst_16051 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(inst_16050);var state_16061__$1 = state_16061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16061__$1,(4),inst_16051);
} else
{if((state_val_16062 === (1)))
{var state_16061__$1 = state_16061;var statearr_16065_16074 = state_16061__$1;(statearr_16065_16074[(2)] = null);
(statearr_16065_16074[(1)] = (2));
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
var state_machine__6456__auto____0 = (function (){var statearr_16069 = [null,null,null,null,null,null,null,null];(statearr_16069[(0)] = state_machine__6456__auto__);
(statearr_16069[(1)] = (1));
return statearr_16069;
});
var state_machine__6456__auto____1 = (function (state_16061){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_16061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e16070){if((e16070 instanceof Object))
{var ex__6459__auto__ = e16070;var statearr_16071_16075 = state_16061;(statearr_16071_16075[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16061);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16070;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16076 = state_16061;
state_16061 = G__16076;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_16061){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_16061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__))
})();var state__6472__auto__ = (function (){var statearr_16072 = f__6471__auto__.call(null);(statearr_16072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_16072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__))
);
return c__6470__auto__;
});
var seq__16077_16081 = cljs.core.seq.call(null,dasha.routing.widget_keys);var chunk__16078_16082 = null;var count__16079_16083 = (0);var i__16080_16084 = (0);while(true){
if((i__16080_16084 < count__16079_16083))
{var w_16085 = cljs.core._nth.call(null,chunk__16078_16082,i__16080_16084);var widget_16086 = w_16085.call(null,dasha.routing.widgets);dasha.routing.bind_widget.call(null,w_16085);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(widget_16086)], null),document.getElementById(cljs.core.name.call(null,w_16085)));
{
var G__16087 = seq__16077_16081;
var G__16088 = chunk__16078_16082;
var G__16089 = count__16079_16083;
var G__16090 = (i__16080_16084 + (1));
seq__16077_16081 = G__16087;
chunk__16078_16082 = G__16088;
count__16079_16083 = G__16089;
i__16080_16084 = G__16090;
continue;
}
} else
{var temp__4222__auto___16091 = cljs.core.seq.call(null,seq__16077_16081);if(temp__4222__auto___16091)
{var seq__16077_16092__$1 = temp__4222__auto___16091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16077_16092__$1))
{var c__4365__auto___16093 = cljs.core.chunk_first.call(null,seq__16077_16092__$1);{
var G__16094 = cljs.core.chunk_rest.call(null,seq__16077_16092__$1);
var G__16095 = c__4365__auto___16093;
var G__16096 = cljs.core.count.call(null,c__4365__auto___16093);
var G__16097 = (0);
seq__16077_16081 = G__16094;
chunk__16078_16082 = G__16095;
count__16079_16083 = G__16096;
i__16080_16084 = G__16097;
continue;
}
} else
{var w_16098 = cljs.core.first.call(null,seq__16077_16092__$1);var widget_16099 = w_16098.call(null,dasha.routing.widgets);dasha.routing.bind_widget.call(null,w_16098);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(widget_16099)], null),document.getElementById(cljs.core.name.call(null,w_16098)));
{
var G__16100 = cljs.core.next.call(null,seq__16077_16092__$1);
var G__16101 = null;
var G__16102 = (0);
var G__16103 = (0);
seq__16077_16081 = G__16100;
chunk__16078_16082 = G__16101;
count__16079_16083 = G__16102;
i__16080_16084 = G__16103;
continue;
}
}
} else
{}
}
break;
}

//# sourceMappingURL=routing.js.map