// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.routing');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
dasha.routing.log = (function log(data){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
dasha.routing.widgets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"random","random",-557811113),(function (p1__22655_SHARP_){return dasha.routing.log.call(null,("Widget #1 received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22655_SHARP_)));
}),new cljs.core.Keyword(null,"widget2","widget2",-1634759239),(function (p1__22656_SHARP_){return dasha.routing.log.call(null,("Widget #2 received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22656_SHARP_)));
})], null);
dasha.routing.widget_keys = cljs.core.keys.call(null,dasha.routing.widgets);
dasha.routing.all = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null)], null)], null);
}),dasha.routing.widget_keys));
dasha.routing.bind_widget = (function bind_widget(widget_key){var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__){
return (function (state_22691){var state_val_22692 = (state_22691[(1)]);if((state_val_22692 === (4)))
{var inst_22684 = (state_22691[(2)]);var inst_22685 = widget_key.call(null,dasha.routing.widgets);var inst_22686 = inst_22685.call(null,inst_22684);var state_22691__$1 = (function (){var statearr_22693 = state_22691;(statearr_22693[(7)] = inst_22686);
return statearr_22693;
})();var statearr_22694_22703 = state_22691__$1;(statearr_22694_22703[(2)] = null);
(statearr_22694_22703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22692 === (3)))
{var inst_22689 = (state_22691[(2)]);var state_22691__$1 = state_22691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22691__$1,inst_22689);
} else
{if((state_val_22692 === (2)))
{var inst_22681 = widget_key.call(null,dasha.routing.all);var inst_22682 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(inst_22681);var state_22691__$1 = state_22691;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22691__$1,(4),inst_22682);
} else
{if((state_val_22692 === (1)))
{var state_22691__$1 = state_22691;var statearr_22695_22704 = state_22691__$1;(statearr_22695_22704[(2)] = null);
(statearr_22695_22704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__7452__auto__))
;return ((function (switch__7437__auto__,c__7452__auto__){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_22699 = [null,null,null,null,null,null,null,null];(statearr_22699[(0)] = state_machine__7438__auto__);
(statearr_22699[(1)] = (1));
return statearr_22699;
});
var state_machine__7438__auto____1 = (function (state_22691){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_22691);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e22700){if((e22700 instanceof Object))
{var ex__7441__auto__ = e22700;var statearr_22701_22705 = state_22691;(statearr_22701_22705[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22691);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22700;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22706 = state_22691;
state_22691 = G__22706;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_22691){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_22691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__))
})();var state__7454__auto__ = (function (){var statearr_22702 = f__7453__auto__.call(null);(statearr_22702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_22702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__))
);
return c__7452__auto__;
});
var seq__22707_22711 = cljs.core.seq.call(null,dasha.routing.widget_keys);var chunk__22708_22712 = null;var count__22709_22713 = (0);var i__22710_22714 = (0);while(true){
if((i__22710_22714 < count__22709_22713))
{var w_22715 = cljs.core._nth.call(null,chunk__22708_22712,i__22710_22714);dasha.routing.bind_widget.call(null,w_22715);
{
var G__22716 = seq__22707_22711;
var G__22717 = chunk__22708_22712;
var G__22718 = count__22709_22713;
var G__22719 = (i__22710_22714 + (1));
seq__22707_22711 = G__22716;
chunk__22708_22712 = G__22717;
count__22709_22713 = G__22718;
i__22710_22714 = G__22719;
continue;
}
} else
{var temp__4222__auto___22720 = cljs.core.seq.call(null,seq__22707_22711);if(temp__4222__auto___22720)
{var seq__22707_22721__$1 = temp__4222__auto___22720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22707_22721__$1))
{var c__4365__auto___22722 = cljs.core.chunk_first.call(null,seq__22707_22721__$1);{
var G__22723 = cljs.core.chunk_rest.call(null,seq__22707_22721__$1);
var G__22724 = c__4365__auto___22722;
var G__22725 = cljs.core.count.call(null,c__4365__auto___22722);
var G__22726 = (0);
seq__22707_22711 = G__22723;
chunk__22708_22712 = G__22724;
count__22709_22713 = G__22725;
i__22710_22714 = G__22726;
continue;
}
} else
{var w_22727 = cljs.core.first.call(null,seq__22707_22721__$1);dasha.routing.bind_widget.call(null,w_22727);
{
var G__22728 = cljs.core.next.call(null,seq__22707_22721__$1);
var G__22729 = null;
var G__22730 = (0);
var G__22731 = (0);
seq__22707_22711 = G__22728;
chunk__22708_22712 = G__22729;
count__22709_22713 = G__22730;
i__22710_22714 = G__22731;
continue;
}
}
} else
{}
}
break;
}

//# sourceMappingURL=routing.js.map