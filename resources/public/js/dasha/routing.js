// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.routing');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dasha.widgets.templates.value');
goog.require('dasha.widgets.templates.value');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
dasha.routing.log = (function log(data){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
dasha.routing.widgets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"random","random",-557811113),dasha.widgets.templates.value.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(123),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"i.fa.fa-random.fa-3x","i.fa.fa-random.fa-3x",-1402317228)], null)),new cljs.core.Keyword(null,"widget2","widget2",-1634759239),dasha.widgets.templates.value.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"i.fa.fa-refresh.fa-3x","i.fa.fa-refresh.fa-3x",387725845)], null))], null);
dasha.routing.widget_keys = cljs.core.keys.call(null,dasha.routing.widgets);
dasha.routing.all = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null)], null)], null);
}),dasha.routing.widget_keys));
dasha.routing.bind_widget = (function bind_widget(widget_key){var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__){
return (function (state_15379){var state_val_15380 = (state_15379[(1)]);if((state_val_15380 === (4)))
{var inst_15371 = (state_15379[(2)]);var inst_15372 = widget_key.call(null,dasha.routing.widgets);var inst_15373 = new cljs.core.Keyword(null,"update","update",1045576396).cljs$core$IFn$_invoke$arity$1(inst_15372);var inst_15374 = inst_15373.call(null,inst_15371);var state_15379__$1 = (function (){var statearr_15381 = state_15379;(statearr_15381[(7)] = inst_15374);
return statearr_15381;
})();var statearr_15382_15391 = state_15379__$1;(statearr_15382_15391[(2)] = null);
(statearr_15382_15391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (3)))
{var inst_15377 = (state_15379[(2)]);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15379__$1,inst_15377);
} else
{if((state_val_15380 === (2)))
{var inst_15368 = widget_key.call(null,dasha.routing.all);var inst_15369 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(inst_15368);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15379__$1,(4),inst_15369);
} else
{if((state_val_15380 === (1)))
{var state_15379__$1 = state_15379;var statearr_15383_15392 = state_15379__$1;(statearr_15383_15392[(2)] = null);
(statearr_15383_15392[(1)] = (2));
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
var state_machine__6456__auto____0 = (function (){var statearr_15387 = [null,null,null,null,null,null,null,null];(statearr_15387[(0)] = state_machine__6456__auto__);
(statearr_15387[(1)] = (1));
return statearr_15387;
});
var state_machine__6456__auto____1 = (function (state_15379){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_15379);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e15388){if((e15388 instanceof Object))
{var ex__6459__auto__ = e15388;var statearr_15389_15393 = state_15379;(statearr_15389_15393[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15388;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15394 = state_15379;
state_15379 = G__15394;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_15379){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_15379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__))
})();var state__6472__auto__ = (function (){var statearr_15390 = f__6471__auto__.call(null);(statearr_15390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_15390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__))
);
return c__6470__auto__;
});
var seq__15395_15399 = cljs.core.seq.call(null,dasha.routing.widget_keys);var chunk__15396_15400 = null;var count__15397_15401 = (0);var i__15398_15402 = (0);while(true){
if((i__15398_15402 < count__15397_15401))
{var w_15403 = cljs.core._nth.call(null,chunk__15396_15400,i__15398_15402);var widget_15404 = w_15403.call(null,dasha.routing.widgets);dasha.routing.bind_widget.call(null,w_15403);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(widget_15404)], null),document.getElementById((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w_15403))));
{
var G__15405 = seq__15395_15399;
var G__15406 = chunk__15396_15400;
var G__15407 = count__15397_15401;
var G__15408 = (i__15398_15402 + (1));
seq__15395_15399 = G__15405;
chunk__15396_15400 = G__15406;
count__15397_15401 = G__15407;
i__15398_15402 = G__15408;
continue;
}
} else
{var temp__4222__auto___15409 = cljs.core.seq.call(null,seq__15395_15399);if(temp__4222__auto___15409)
{var seq__15395_15410__$1 = temp__4222__auto___15409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15395_15410__$1))
{var c__4365__auto___15411 = cljs.core.chunk_first.call(null,seq__15395_15410__$1);{
var G__15412 = cljs.core.chunk_rest.call(null,seq__15395_15410__$1);
var G__15413 = c__4365__auto___15411;
var G__15414 = cljs.core.count.call(null,c__4365__auto___15411);
var G__15415 = (0);
seq__15395_15399 = G__15412;
chunk__15396_15400 = G__15413;
count__15397_15401 = G__15414;
i__15398_15402 = G__15415;
continue;
}
} else
{var w_15416 = cljs.core.first.call(null,seq__15395_15410__$1);var widget_15417 = w_15416.call(null,dasha.routing.widgets);dasha.routing.bind_widget.call(null,w_15416);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(widget_15417)], null),document.getElementById((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w_15416))));
{
var G__15418 = cljs.core.next.call(null,seq__15395_15410__$1);
var G__15419 = null;
var G__15420 = (0);
var G__15421 = (0);
seq__15395_15399 = G__15418;
chunk__15396_15400 = G__15419;
count__15397_15401 = G__15420;
i__15398_15402 = G__15421;
continue;
}
}
} else
{}
}
break;
}

//# sourceMappingURL=routing.js.map