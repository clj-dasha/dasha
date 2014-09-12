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
dasha.core.route_receive = (function route_receive(p__10665){var vec__10681 = p__10665;var event = cljs.core.nth.call(null,vec__10681,(0),null);var map__10682 = cljs.core.nth.call(null,vec__10681,(1),null);var map__10682__$1 = ((cljs.core.seq_QMARK_.call(null,map__10682))?cljs.core.apply.call(null,cljs.core.hash_map,map__10682):map__10682);var all = map__10682__$1;var data = cljs.core.get.call(null,map__10682__$1,new cljs.core.Keyword(null,"data","data",-232669377));var widget = cljs.core.get.call(null,map__10682__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));dasha.core.log.call(null,("received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)+" with data: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(all)));
var temp__4220__auto__ = widget.call(null,dasha.routing.all);if(cljs.core.truth_(temp__4220__auto__))
{var w = temp__4220__auto__;var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__,w,temp__4220__auto__,vec__10681,event,map__10682,map__10682__$1,all,data,widget){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__,w,temp__4220__auto__,vec__10681,event,map__10682,map__10682__$1,all,data,widget){
return (function (state_10687){var state_val_10688 = (state_10687[(1)]);if((state_val_10688 === (2)))
{var inst_10685 = (state_10687[(2)]);var state_10687__$1 = state_10687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10687__$1,inst_10685);
} else
{if((state_val_10688 === (1)))
{var inst_10683 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(w);var state_10687__$1 = state_10687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10687__$1,(2),inst_10683,data);
} else
{return null;
}
}
});})(c__6470__auto__,w,temp__4220__auto__,vec__10681,event,map__10682,map__10682__$1,all,data,widget))
;return ((function (switch__6455__auto__,c__6470__auto__,w,temp__4220__auto__,vec__10681,event,map__10682,map__10682__$1,all,data,widget){
return (function() {
var state_machine__6456__auto__ = null;
var state_machine__6456__auto____0 = (function (){var statearr_10692 = [null,null,null,null,null,null,null];(statearr_10692[(0)] = state_machine__6456__auto__);
(statearr_10692[(1)] = (1));
return statearr_10692;
});
var state_machine__6456__auto____1 = (function (state_10687){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_10687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e10693){if((e10693 instanceof Object))
{var ex__6459__auto__ = e10693;var statearr_10694_10696 = state_10687;(statearr_10694_10696[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10693;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10697 = state_10687;
state_10687 = G__10697;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_10687){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_10687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__,w,temp__4220__auto__,vec__10681,event,map__10682,map__10682__$1,all,data,widget))
})();var state__6472__auto__ = (function (){var statearr_10695 = f__6471__auto__.call(null);(statearr_10695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_10695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__,w,temp__4220__auto__,vec__10681,event,map__10682,map__10682__$1,all,data,widget))
);
return c__6470__auto__;
} else
{return null;
}
});
dasha.core.route_event = (function route_event(p__10698){var vec__10701 = p__10698;var event_id = cljs.core.nth.call(null,vec__10701,(0),null);var data = cljs.core.nth.call(null,vec__10701,(1),null);var all = vec__10701;var G__10702 = (((event_id instanceof cljs.core.Keyword))?event_id.fqn:null);switch (G__10702) {
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
var map__10704_10705 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__10704_10706__$1 = ((cljs.core.seq_QMARK_.call(null,map__10704_10705))?cljs.core.apply.call(null,cljs.core.hash_map,map__10704_10705):map__10704_10705);var state_10707 = cljs.core.get.call(null,map__10704_10706__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_10708 = cljs.core.get.call(null,map__10704_10706__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_10709 = cljs.core.get.call(null,map__10704_10706__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_10710 = cljs.core.get.call(null,map__10704_10706__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));dasha.core.chsk = chsk_10710;
dasha.core.ch_chsk = ch_recv_10709;
dasha.core.chsk_send_BANG_ = send_fn_10708;
dasha.core.chsk_state = state_10707;
dasha.core.init_BANG_ = (function init_BANG_(){var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__){
return (function (state_10741){var state_val_10742 = (state_10741[(1)]);if((state_val_10742 === (4)))
{var inst_10734 = (state_10741[(2)]);var inst_10735 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_10734);var inst_10736 = dasha.core.route_event.call(null,inst_10735);var state_10741__$1 = (function (){var statearr_10743 = state_10741;(statearr_10743[(7)] = inst_10736);
return statearr_10743;
})();var statearr_10744_10753 = state_10741__$1;(statearr_10744_10753[(2)] = null);
(statearr_10744_10753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10742 === (3)))
{var inst_10739 = (state_10741[(2)]);var state_10741__$1 = state_10741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10741__$1,inst_10739);
} else
{if((state_val_10742 === (2)))
{var state_10741__$1 = state_10741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10741__$1,(4),dasha.core.ch_chsk);
} else
{if((state_val_10742 === (1)))
{var state_10741__$1 = state_10741;var statearr_10745_10754 = state_10741__$1;(statearr_10745_10754[(2)] = null);
(statearr_10745_10754[(1)] = (2));
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
var state_machine__6456__auto____0 = (function (){var statearr_10749 = [null,null,null,null,null,null,null,null];(statearr_10749[(0)] = state_machine__6456__auto__);
(statearr_10749[(1)] = (1));
return statearr_10749;
});
var state_machine__6456__auto____1 = (function (state_10741){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_10741);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e10750){if((e10750 instanceof Object))
{var ex__6459__auto__ = e10750;var statearr_10751_10755 = state_10741;(statearr_10751_10755[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10741);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10750;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10756 = state_10741;
state_10741 = G__10756;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_10741){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_10741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__))
})();var state__6472__auto__ = (function (){var statearr_10752 = f__6471__auto__.call(null);(statearr_10752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_10752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__))
);
return c__6470__auto__;
});
dasha.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map