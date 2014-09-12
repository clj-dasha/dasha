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
dasha.core.route_receive = (function route_receive(p__15933){var vec__15949 = p__15933;var event = cljs.core.nth.call(null,vec__15949,(0),null);var map__15950 = cljs.core.nth.call(null,vec__15949,(1),null);var map__15950__$1 = ((cljs.core.seq_QMARK_.call(null,map__15950))?cljs.core.apply.call(null,cljs.core.hash_map,map__15950):map__15950);var all = map__15950__$1;var data = cljs.core.get.call(null,map__15950__$1,new cljs.core.Keyword(null,"data","data",-232669377));var widget = cljs.core.get.call(null,map__15950__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));var temp__4220__auto__ = widget.call(null,dasha.routing.all);if(cljs.core.truth_(temp__4220__auto__))
{var w = temp__4220__auto__;var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__,w,temp__4220__auto__,vec__15949,event,map__15950,map__15950__$1,all,data,widget){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__,w,temp__4220__auto__,vec__15949,event,map__15950,map__15950__$1,all,data,widget){
return (function (state_15955){var state_val_15956 = (state_15955[(1)]);if((state_val_15956 === (2)))
{var inst_15953 = (state_15955[(2)]);var state_15955__$1 = state_15955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15955__$1,inst_15953);
} else
{if((state_val_15956 === (1)))
{var inst_15951 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(w);var state_15955__$1 = state_15955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15955__$1,(2),inst_15951,data);
} else
{return null;
}
}
});})(c__6470__auto__,w,temp__4220__auto__,vec__15949,event,map__15950,map__15950__$1,all,data,widget))
;return ((function (switch__6455__auto__,c__6470__auto__,w,temp__4220__auto__,vec__15949,event,map__15950,map__15950__$1,all,data,widget){
return (function() {
var state_machine__6456__auto__ = null;
var state_machine__6456__auto____0 = (function (){var statearr_15960 = [null,null,null,null,null,null,null];(statearr_15960[(0)] = state_machine__6456__auto__);
(statearr_15960[(1)] = (1));
return statearr_15960;
});
var state_machine__6456__auto____1 = (function (state_15955){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_15955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e15961){if((e15961 instanceof Object))
{var ex__6459__auto__ = e15961;var statearr_15962_15964 = state_15955;(statearr_15962_15964[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15961;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15965 = state_15955;
state_15955 = G__15965;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_15955){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_15955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__,w,temp__4220__auto__,vec__15949,event,map__15950,map__15950__$1,all,data,widget))
})();var state__6472__auto__ = (function (){var statearr_15963 = f__6471__auto__.call(null);(statearr_15963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_15963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__,w,temp__4220__auto__,vec__15949,event,map__15950,map__15950__$1,all,data,widget))
);
return c__6470__auto__;
} else
{return null;
}
});
dasha.core.route_event = (function route_event(p__15966){var vec__15969 = p__15966;var event_id = cljs.core.nth.call(null,vec__15969,(0),null);var data = cljs.core.nth.call(null,vec__15969,(1),null);var all = vec__15969;var G__15970 = (((event_id instanceof cljs.core.Keyword))?event_id.fqn:null);switch (G__15970) {
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
var map__15972_15973 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__15972_15974__$1 = ((cljs.core.seq_QMARK_.call(null,map__15972_15973))?cljs.core.apply.call(null,cljs.core.hash_map,map__15972_15973):map__15972_15973);var state_15975 = cljs.core.get.call(null,map__15972_15974__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_15976 = cljs.core.get.call(null,map__15972_15974__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_15977 = cljs.core.get.call(null,map__15972_15974__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_15978 = cljs.core.get.call(null,map__15972_15974__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));dasha.core.chsk = chsk_15978;
dasha.core.ch_chsk = ch_recv_15977;
dasha.core.chsk_send_BANG_ = send_fn_15976;
dasha.core.chsk_state = state_15975;
dasha.core.init_BANG_ = (function init_BANG_(){var c__6470__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6470__auto__){
return (function (){var f__6471__auto__ = (function (){var switch__6455__auto__ = ((function (c__6470__auto__){
return (function (state_16009){var state_val_16010 = (state_16009[(1)]);if((state_val_16010 === (4)))
{var inst_16002 = (state_16009[(2)]);var inst_16003 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_16002);var inst_16004 = dasha.core.route_event.call(null,inst_16003);var state_16009__$1 = (function (){var statearr_16011 = state_16009;(statearr_16011[(7)] = inst_16004);
return statearr_16011;
})();var statearr_16012_16021 = state_16009__$1;(statearr_16012_16021[(2)] = null);
(statearr_16012_16021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16010 === (3)))
{var inst_16007 = (state_16009[(2)]);var state_16009__$1 = state_16009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16009__$1,inst_16007);
} else
{if((state_val_16010 === (2)))
{var state_16009__$1 = state_16009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16009__$1,(4),dasha.core.ch_chsk);
} else
{if((state_val_16010 === (1)))
{var state_16009__$1 = state_16009;var statearr_16013_16022 = state_16009__$1;(statearr_16013_16022[(2)] = null);
(statearr_16013_16022[(1)] = (2));
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
var state_machine__6456__auto____0 = (function (){var statearr_16017 = [null,null,null,null,null,null,null,null];(statearr_16017[(0)] = state_machine__6456__auto__);
(statearr_16017[(1)] = (1));
return statearr_16017;
});
var state_machine__6456__auto____1 = (function (state_16009){while(true){
var ret_value__6457__auto__ = (function (){try{while(true){
var result__6458__auto__ = switch__6455__auto__.call(null,state_16009);if(cljs.core.keyword_identical_QMARK_.call(null,result__6458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6458__auto__;
}
break;
}
}catch (e16018){if((e16018 instanceof Object))
{var ex__6459__auto__ = e16018;var statearr_16019_16023 = state_16009;(statearr_16019_16023[(5)] = ex__6459__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16018;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16024 = state_16009;
state_16009 = G__16024;
continue;
}
} else
{return ret_value__6457__auto__;
}
break;
}
});
state_machine__6456__auto__ = function(state_16009){
switch(arguments.length){
case 0:
return state_machine__6456__auto____0.call(this);
case 1:
return state_machine__6456__auto____1.call(this,state_16009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6456__auto____0;
state_machine__6456__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6456__auto____1;
return state_machine__6456__auto__;
})()
;})(switch__6455__auto__,c__6470__auto__))
})();var state__6472__auto__ = (function (){var statearr_16020 = f__6471__auto__.call(null);(statearr_16020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6470__auto__);
return statearr_16020;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6472__auto__);
});})(c__6470__auto__))
);
return c__6470__auto__;
});
dasha.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map