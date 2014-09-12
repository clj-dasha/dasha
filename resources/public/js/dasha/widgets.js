// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.widgets');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
dasha.widgets.log = (function log(data){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
dasha.widgets.widgets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"random","random",-557811113),(function (p1__21656_SHARP_){return dasha.widgets.log.call(null,("Widget #1 received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21656_SHARP_)));
}),new cljs.core.Keyword(null,"widget2","widget2",-1634759239),(function (p1__21657_SHARP_){return dasha.widgets.log.call(null,("Widget #2 received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21657_SHARP_)));
})], null);
dasha.widgets.widget_keys = cljs.core.keys.call(null,dasha.widgets.widgets);
dasha.widgets.all = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null)], null)], null);
}),dasha.widgets.widget_keys));
dasha.widgets.bind_widget = (function bind_widget(widget_key){var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__){
return (function (state_21692){var state_val_21693 = (state_21692[(1)]);if((state_val_21693 === (4)))
{var inst_21685 = (state_21692[(2)]);var inst_21686 = widget_key.call(null,dasha.widgets.widgets);var inst_21687 = inst_21686.call(null,inst_21685);var state_21692__$1 = (function (){var statearr_21694 = state_21692;(statearr_21694[(7)] = inst_21687);
return statearr_21694;
})();var statearr_21695_21704 = state_21692__$1;(statearr_21695_21704[(2)] = null);
(statearr_21695_21704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21693 === (3)))
{var inst_21690 = (state_21692[(2)]);var state_21692__$1 = state_21692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21692__$1,inst_21690);
} else
{if((state_val_21693 === (2)))
{var inst_21682 = widget_key.call(null,dasha.widgets.all);var inst_21683 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(inst_21682);var state_21692__$1 = state_21692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21692__$1,(4),inst_21683);
} else
{if((state_val_21693 === (1)))
{var state_21692__$1 = state_21692;var statearr_21696_21705 = state_21692__$1;(statearr_21696_21705[(2)] = null);
(statearr_21696_21705[(1)] = (2));
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
var state_machine__7438__auto____0 = (function (){var statearr_21700 = [null,null,null,null,null,null,null,null];(statearr_21700[(0)] = state_machine__7438__auto__);
(statearr_21700[(1)] = (1));
return statearr_21700;
});
var state_machine__7438__auto____1 = (function (state_21692){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_21692);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e21701){if((e21701 instanceof Object))
{var ex__7441__auto__ = e21701;var statearr_21702_21706 = state_21692;(statearr_21702_21706[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21692);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21701;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21707 = state_21692;
state_21692 = G__21707;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_21692){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_21692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__))
})();var state__7454__auto__ = (function (){var statearr_21703 = f__7453__auto__.call(null);(statearr_21703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_21703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__))
);
return c__7452__auto__;
});
var seq__21708_21712 = cljs.core.seq.call(null,dasha.widgets.widget_keys);var chunk__21709_21713 = null;var count__21710_21714 = (0);var i__21711_21715 = (0);while(true){
if((i__21711_21715 < count__21710_21714))
{var w_21716 = cljs.core._nth.call(null,chunk__21709_21713,i__21711_21715);dasha.widgets.bind_widget.call(null,w_21716);
{
var G__21717 = seq__21708_21712;
var G__21718 = chunk__21709_21713;
var G__21719 = count__21710_21714;
var G__21720 = (i__21711_21715 + (1));
seq__21708_21712 = G__21717;
chunk__21709_21713 = G__21718;
count__21710_21714 = G__21719;
i__21711_21715 = G__21720;
continue;
}
} else
{var temp__4222__auto___21721 = cljs.core.seq.call(null,seq__21708_21712);if(temp__4222__auto___21721)
{var seq__21708_21722__$1 = temp__4222__auto___21721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21708_21722__$1))
{var c__4365__auto___21723 = cljs.core.chunk_first.call(null,seq__21708_21722__$1);{
var G__21724 = cljs.core.chunk_rest.call(null,seq__21708_21722__$1);
var G__21725 = c__4365__auto___21723;
var G__21726 = cljs.core.count.call(null,c__4365__auto___21723);
var G__21727 = (0);
seq__21708_21712 = G__21724;
chunk__21709_21713 = G__21725;
count__21710_21714 = G__21726;
i__21711_21715 = G__21727;
continue;
}
} else
{var w_21728 = cljs.core.first.call(null,seq__21708_21722__$1);dasha.widgets.bind_widget.call(null,w_21728);
{
var G__21729 = cljs.core.next.call(null,seq__21708_21722__$1);
var G__21730 = null;
var G__21731 = (0);
var G__21732 = (0);
seq__21708_21712 = G__21729;
chunk__21709_21713 = G__21730;
count__21710_21714 = G__21731;
i__21711_21715 = G__21732;
continue;
}
}
} else
{}
}
break;
}

//# sourceMappingURL=widgets.js.map