// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
goog.require('dasha.widgets');
goog.require('dasha.widgets');
goog.require('dasha.routing');
goog.require('dasha.routing');
goog.require('taoensso.sente');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
dasha.core.log = (function log(data){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
dasha.core.route_receive = (function route_receive(p__10573){var vec__10589 = p__10573;var event = cljs.core.nth.call(null,vec__10589,(0),null);var map__10590 = cljs.core.nth.call(null,vec__10589,(1),null);var map__10590__$1 = ((cljs.core.seq_QMARK_.call(null,map__10590))?cljs.core.apply.call(null,cljs.core.hash_map,map__10590):map__10590);var all = map__10590__$1;var data = cljs.core.get.call(null,map__10590__$1,new cljs.core.Keyword(null,"data","data",-232669377));var widget = cljs.core.get.call(null,map__10590__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));dasha.core.log.call(null,("received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)+" with data: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(all)));
var temp__4220__auto__ = widget.call(null,dasha.routing.all);if(cljs.core.truth_(temp__4220__auto__))
{var w = temp__4220__auto__;var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__,w,temp__4220__auto__,vec__10589,event,map__10590,map__10590__$1,all,data,widget){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__,w,temp__4220__auto__,vec__10589,event,map__10590,map__10590__$1,all,data,widget){
return (function (state_10595){var state_val_10596 = (state_10595[(1)]);if((state_val_10596 === (2)))
{var inst_10593 = (state_10595[(2)]);var state_10595__$1 = state_10595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10595__$1,inst_10593);
} else
{if((state_val_10596 === (1)))
{var inst_10591 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(w);var state_10595__$1 = state_10595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10595__$1,(2),inst_10591,data);
} else
{return null;
}
}
});})(c__6470__auto__,w,temp__4220__auto__,vec__10589,event,map__10590,map__10590__$1,all,data,widget))
;return ((function (switch__6455__auto__,c__6470__auto__,w,temp__4220__auto__,vec__10589,event,map__10590,map__10590__$1,all,data,widget){
return (function() {
var state_machine__6456__auto__ = null;
var state_machine__6456__auto____0 = (function (){var statearr_10600 = [null,null,null,null,null,null,null];(statearr_10600[(0)] = state_machine__6456__auto__);
(statearr_10600[(1)] = (1));
return statearr_10600;
});
var state_machine__6456__auto____1 = (function (state_10595){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_10595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e10601){if((e10601 instanceof Object))
{var ex__6459__auto__ = e10601;var statearr_10602_10604 = state_10595;(statearr_10602_10604[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10601;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10605 = state_10595;
state_10595 = G__10605;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_10595){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_10595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__,w,temp__4220__auto__,vec__10589,event,map__10590,map__10590__$1,all,data,widget))
})();var state__6472__auto__ = (function (){var statearr_10603 = f__6471__auto__.call(null);(statearr_10603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_10603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__,w,temp__4220__auto__,vec__10589,event,map__10590,map__10590__$1,all,data,widget))
);
return c__6470__auto__;
} else
{return null;
}
});
dasha.core.route_event = (function route_event(p__10606){var vec__10609 = p__10606;var event_id = cljs.core.nth.call(null,vec__10609,(0),null);var data = cljs.core.nth.call(null,vec__10609,(1),null);var all = vec__10609;var G__10610 = (((event_id instanceof cljs.core.Keyword))?event_id.fqn:null);switch (G__10610) {
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
var map__10612_10613 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__10612_10614__$1 = ((cljs.core.seq_QMARK_.call(null,map__10612_10613))?cljs.core.apply.call(null,cljs.core.hash_map,map__10612_10613):map__10612_10613);var state_10615 = cljs.core.get.call(null,map__10612_10614__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_10616 = cljs.core.get.call(null,map__10612_10614__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_10617 = cljs.core.get.call(null,map__10612_10614__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_10618 = cljs.core.get.call(null,map__10612_10614__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));dasha.core.chsk = chsk_10618;
dasha.core.ch_chsk = ch_recv_10617;
dasha.core.chsk_send_BANG_ = send_fn_10616;
dasha.core.chsk_state = state_10615;
dasha.core.init_BANG_ = (function init_BANG_(){var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__){
return (function (state_10649){var state_val_10650 = (state_10649[(1)]);if((state_val_10650 === (4)))
{var inst_10642 = (state_10649[(2)]);var inst_10643 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_10642);var inst_10644 = dasha.core.route_event.call(null,inst_10643);var state_10649__$1 = (function (){var statearr_10651 = state_10649;(statearr_10651[(7)] = inst_10644);
return statearr_10651;
})();var statearr_10652_10661 = state_10649__$1;(statearr_10652_10661[(2)] = null);
(statearr_10652_10661[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10650 === (3)))
{var inst_10647 = (state_10649[(2)]);var state_10649__$1 = state_10649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10649__$1,inst_10647);
} else
{if((state_val_10650 === (2)))
{var state_10649__$1 = state_10649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10649__$1,(4),dasha.core.ch_chsk);
} else
{if((state_val_10650 === (1)))
{var state_10649__$1 = state_10649;var statearr_10653_10662 = state_10649__$1;(statearr_10653_10662[(2)] = null);
(statearr_10653_10662[(1)] = (2));
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
var state_machine__6456__auto____0 = (function (){var statearr_10657 = [null,null,null,null,null,null,null,null];(statearr_10657[(0)] = state_machine__6456__auto__);
(statearr_10657[(1)] = (1));
return statearr_10657;
});
var state_machine__6456__auto____1 = (function (state_10649){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_10649);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e10658){if((e10658 instanceof Object))
{var ex__6459__auto__ = e10658;var statearr_10659_10663 = state_10649;(statearr_10659_10663[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10658;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10664 = state_10649;
state_10649 = G__10664;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_10649){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_10649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__))
})();var state__6472__auto__ = (function (){var statearr_10660 = f__6471__auto__.call(null);(statearr_10660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_10660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__))
);
return c__6470__auto__;
});
dasha.core.init_BANG_.call(null);
dasha.widgets.init_BANG_.call(null);

//# sourceMappingURL=core.js.map