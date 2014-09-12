// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
goog.require('dasha.routing');
goog.require('dasha.routing');
goog.require('taoensso.sente');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
dasha.core.log = (function log(data){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
dasha.core.route_receive = (function route_receive(p__22471){var vec__22487 = p__22471;var event = cljs.core.nth.call(null,vec__22487,(0),null);var map__22488 = cljs.core.nth.call(null,vec__22487,(1),null);var map__22488__$1 = ((cljs.core.seq_QMARK_.call(null,map__22488))?cljs.core.apply.call(null,cljs.core.hash_map,map__22488):map__22488);var all = map__22488__$1;var data = cljs.core.get.call(null,map__22488__$1,new cljs.core.Keyword(null,"data","data",-232669377));var widget = cljs.core.get.call(null,map__22488__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));dasha.core.log.call(null,("received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)+" with data: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(all)));
var temp__4220__auto__ = widget.call(null,dasha.routing.all);if(cljs.core.truth_(temp__4220__auto__))
{var w = temp__4220__auto__;var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__,w,temp__4220__auto__,vec__22487,event,map__22488,map__22488__$1,all,data,widget){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__,w,temp__4220__auto__,vec__22487,event,map__22488,map__22488__$1,all,data,widget){
return (function (state_22493){var state_val_22494 = (state_22493[(1)]);if((state_val_22494 === (2)))
{var inst_22491 = (state_22493[(2)]);var state_22493__$1 = state_22493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22493__$1,inst_22491);
} else
{if((state_val_22494 === (1)))
{var inst_22489 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(w);var state_22493__$1 = state_22493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22493__$1,(2),inst_22489,data);
} else
{return null;
}
}
});})(c__7452__auto__,w,temp__4220__auto__,vec__22487,event,map__22488,map__22488__$1,all,data,widget))
;return ((function (switch__7437__auto__,c__7452__auto__,w,temp__4220__auto__,vec__22487,event,map__22488,map__22488__$1,all,data,widget){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_22498 = [null,null,null,null,null,null,null];(statearr_22498[(0)] = state_machine__7438__auto__);
(statearr_22498[(1)] = (1));
return statearr_22498;
});
var state_machine__7438__auto____1 = (function (state_22493){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_22493);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e22499){if((e22499 instanceof Object))
{var ex__7441__auto__ = e22499;var statearr_22500_22502 = state_22493;(statearr_22500_22502[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22499;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22503 = state_22493;
state_22493 = G__22503;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_22493){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_22493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__,w,temp__4220__auto__,vec__22487,event,map__22488,map__22488__$1,all,data,widget))
})();var state__7454__auto__ = (function (){var statearr_22501 = f__7453__auto__.call(null);(statearr_22501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_22501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__,w,temp__4220__auto__,vec__22487,event,map__22488,map__22488__$1,all,data,widget))
);
return c__7452__auto__;
} else
{return null;
}
});
dasha.core.route_event = (function route_event(p__22504){var vec__22507 = p__22504;var event_id = cljs.core.nth.call(null,vec__22507,(0),null);var data = cljs.core.nth.call(null,vec__22507,(1),null);var all = vec__22507;var G__22508 = (((event_id instanceof cljs.core.Keyword))?event_id.fqn:null);switch (G__22508) {
case "chsk/recv":
return dasha.core.route_receive.call(null,data);

break;
case "chsk/state":
return dasha.core.log.call(null,("first open: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(data))));

break;
default:
return dasha.core.log.call(null,("undefined event: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(all)));

}
});
var map__22510_22511 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__22510_22512__$1 = ((cljs.core.seq_QMARK_.call(null,map__22510_22511))?cljs.core.apply.call(null,cljs.core.hash_map,map__22510_22511):map__22510_22511);var state_22513 = cljs.core.get.call(null,map__22510_22512__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_22514 = cljs.core.get.call(null,map__22510_22512__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_22515 = cljs.core.get.call(null,map__22510_22512__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_22516 = cljs.core.get.call(null,map__22510_22512__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));dasha.core.chsk = chsk_22516;
dasha.core.ch_chsk = ch_recv_22515;
dasha.core.chsk_send_BANG_ = send_fn_22514;
dasha.core.chsk_state = state_22513;
dasha.core.init_BANG_ = (function init_BANG_(){var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__){
return (function (state_22547){var state_val_22548 = (state_22547[(1)]);if((state_val_22548 === (4)))
{var inst_22540 = (state_22547[(2)]);var inst_22541 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_22540);var inst_22542 = dasha.core.route_event.call(null,inst_22541);var state_22547__$1 = (function (){var statearr_22549 = state_22547;(statearr_22549[(7)] = inst_22542);
return statearr_22549;
})();var statearr_22550_22559 = state_22547__$1;(statearr_22550_22559[(2)] = null);
(statearr_22550_22559[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22548 === (3)))
{var inst_22545 = (state_22547[(2)]);var state_22547__$1 = state_22547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22547__$1,inst_22545);
} else
{if((state_val_22548 === (2)))
{var state_22547__$1 = state_22547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22547__$1,(4),dasha.core.ch_chsk);
} else
{if((state_val_22548 === (1)))
{var state_22547__$1 = state_22547;var statearr_22551_22560 = state_22547__$1;(statearr_22551_22560[(2)] = null);
(statearr_22551_22560[(1)] = (2));
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
var state_machine__7438__auto____0 = (function (){var statearr_22555 = [null,null,null,null,null,null,null,null];(statearr_22555[(0)] = state_machine__7438__auto__);
(statearr_22555[(1)] = (1));
return statearr_22555;
});
var state_machine__7438__auto____1 = (function (state_22547){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_22547);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e22556){if((e22556 instanceof Object))
{var ex__7441__auto__ = e22556;var statearr_22557_22561 = state_22547;(statearr_22557_22561[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22547);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22556;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22562 = state_22547;
state_22547 = G__22562;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_22547){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_22547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__))
})();var state__7454__auto__ = (function (){var statearr_22558 = f__7453__auto__.call(null);(statearr_22558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_22558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__))
);
return c__7452__auto__;
});
dasha.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map