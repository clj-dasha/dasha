// Compiled by ClojureScript 0.0-2322
goog.provide('dasha.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
goog.require('dasha.widgets');
goog.require('dasha.widgets');
goog.require('taoensso.sente');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
dasha.core.log = (function log(data){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)));
});
dasha.core.route_receive = (function route_receive(p__21564){var vec__21580 = p__21564;var event = cljs.core.nth.call(null,vec__21580,(0),null);var map__21581 = cljs.core.nth.call(null,vec__21580,(1),null);var map__21581__$1 = ((cljs.core.seq_QMARK_.call(null,map__21581))?cljs.core.apply.call(null,cljs.core.hash_map,map__21581):map__21581);var all = map__21581__$1;var data = cljs.core.get.call(null,map__21581__$1,new cljs.core.Keyword(null,"data","data",-232669377));var widget = cljs.core.get.call(null,map__21581__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));dasha.core.log.call(null,("received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)+" with data: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(all)));
var temp__4220__auto__ = widget.call(null,dasha.widgets.all);if(cljs.core.truth_(temp__4220__auto__))
{var w = temp__4220__auto__;var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__,w,temp__4220__auto__,vec__21580,event,map__21581,map__21581__$1,all,data,widget){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__,w,temp__4220__auto__,vec__21580,event,map__21581,map__21581__$1,all,data,widget){
return (function (state_21586){var state_val_21587 = (state_21586[(1)]);if((state_val_21587 === (2)))
{var inst_21584 = (state_21586[(2)]);var state_21586__$1 = state_21586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21586__$1,inst_21584);
} else
{if((state_val_21587 === (1)))
{var inst_21582 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(w);var state_21586__$1 = state_21586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21586__$1,(2),inst_21582,data);
} else
{return null;
}
}
});})(c__7452__auto__,w,temp__4220__auto__,vec__21580,event,map__21581,map__21581__$1,all,data,widget))
;return ((function (switch__7437__auto__,c__7452__auto__,w,temp__4220__auto__,vec__21580,event,map__21581,map__21581__$1,all,data,widget){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_21591 = [null,null,null,null,null,null,null];(statearr_21591[(0)] = state_machine__7438__auto__);
(statearr_21591[(1)] = (1));
return statearr_21591;
});
var state_machine__7438__auto____1 = (function (state_21586){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_21586);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e21592){if((e21592 instanceof Object))
{var ex__7441__auto__ = e21592;var statearr_21593_21595 = state_21586;(statearr_21593_21595[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21586);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21596 = state_21586;
state_21586 = G__21596;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_21586){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_21586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__,w,temp__4220__auto__,vec__21580,event,map__21581,map__21581__$1,all,data,widget))
})();var state__7454__auto__ = (function (){var statearr_21594 = f__7453__auto__.call(null);(statearr_21594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_21594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__,w,temp__4220__auto__,vec__21580,event,map__21581,map__21581__$1,all,data,widget))
);
return c__7452__auto__;
} else
{return null;
}
});
dasha.core.route_event = (function route_event(p__21597){var vec__21600 = p__21597;var event_id = cljs.core.nth.call(null,vec__21600,(0),null);var data = cljs.core.nth.call(null,vec__21600,(1),null);var all = vec__21600;var G__21601 = (((event_id instanceof cljs.core.Keyword))?event_id.fqn:null);switch (G__21601) {
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
var map__21603_21604 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__21603_21605__$1 = ((cljs.core.seq_QMARK_.call(null,map__21603_21604))?cljs.core.apply.call(null,cljs.core.hash_map,map__21603_21604):map__21603_21604);var state_21606 = cljs.core.get.call(null,map__21603_21605__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_21607 = cljs.core.get.call(null,map__21603_21605__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_21608 = cljs.core.get.call(null,map__21603_21605__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_21609 = cljs.core.get.call(null,map__21603_21605__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));dasha.core.chsk = chsk_21609;
dasha.core.ch_chsk = ch_recv_21608;
dasha.core.chsk_send_BANG_ = send_fn_21607;
dasha.core.chsk_state = state_21606;
dasha.core.init_BANG_ = (function init_BANG_(){var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__){
return (function (state_21640){var state_val_21641 = (state_21640[(1)]);if((state_val_21641 === (4)))
{var inst_21633 = (state_21640[(2)]);var inst_21634 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_21633);var inst_21635 = dasha.core.route_event.call(null,inst_21634);var state_21640__$1 = (function (){var statearr_21642 = state_21640;(statearr_21642[(7)] = inst_21635);
return statearr_21642;
})();var statearr_21643_21652 = state_21640__$1;(statearr_21643_21652[(2)] = null);
(statearr_21643_21652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21641 === (3)))
{var inst_21638 = (state_21640[(2)]);var state_21640__$1 = state_21640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21640__$1,inst_21638);
} else
{if((state_val_21641 === (2)))
{var state_21640__$1 = state_21640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21640__$1,(4),dasha.core.ch_chsk);
} else
{if((state_val_21641 === (1)))
{var state_21640__$1 = state_21640;var statearr_21644_21653 = state_21640__$1;(statearr_21644_21653[(2)] = null);
(statearr_21644_21653[(1)] = (2));
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
var state_machine__7438__auto____0 = (function (){var statearr_21648 = [null,null,null,null,null,null,null,null];(statearr_21648[(0)] = state_machine__7438__auto__);
(statearr_21648[(1)] = (1));
return statearr_21648;
});
var state_machine__7438__auto____1 = (function (state_21640){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_21640);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e21649){if((e21649 instanceof Object))
{var ex__7441__auto__ = e21649;var statearr_21650_21654 = state_21640;(statearr_21650_21654[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21655 = state_21640;
state_21640 = G__21655;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_21640){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_21640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__))
})();var state__7454__auto__ = (function (){var statearr_21651 = f__7453__auto__.call(null);(statearr_21651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_21651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__))
);
return c__7452__auto__;
});
dasha.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map