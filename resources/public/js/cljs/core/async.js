// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11433 = (function (f,fn_handler,meta11434){
this.f = f;
this.fn_handler = fn_handler;
this.meta11434 = meta11434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11433.cljs$lang$type = true;
cljs.core.async.t11433.cljs$lang$ctorStr = "cljs.core.async/t11433";
cljs.core.async.t11433.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t11433");
});
cljs.core.async.t11433.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11435){var self__ = this;
var _11435__$1 = this;return self__.meta11434;
});
cljs.core.async.t11433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11435,meta11434__$1){var self__ = this;
var _11435__$1 = this;return (new cljs.core.async.t11433(self__.f,self__.fn_handler,meta11434__$1));
});
cljs.core.async.__GT_t11433 = (function __GT_t11433(f__$1,fn_handler__$1,meta11434){return (new cljs.core.async.t11433(f__$1,fn_handler__$1,meta11434));
});
}
return (new cljs.core.async.t11433(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11437 = buff;if(G__11437)
{var bit__4259__auto__ = null;if(cljs.core.truth_((function (){var or__3609__auto__ = bit__4259__auto__;if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return G__11437.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11437.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11437);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11437);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11438 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11438);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11438,ret){
return (function (){return fn1.call(null,val_11438);
});})(val_11438,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4220__auto__))
{var ret = temp__4220__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4220__auto__))
{var retb = temp__4220__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4220__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4220__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4465__auto___11439 = n;var x_11440 = (0);while(true){
if((x_11440 < n__4465__auto___11439))
{(a[x_11440] = (0));
{
var G__11441 = (x_11440 + (1));
x_11440 = G__11441;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11442 = (i + (1));
i = G__11442;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11446 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11446 = (function (flag,alt_flag,meta11447){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11447 = meta11447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11446.cljs$lang$type = true;
cljs.core.async.t11446.cljs$lang$ctorStr = "cljs.core.async/t11446";
cljs.core.async.t11446.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t11446");
});})(flag))
;
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11448){var self__ = this;
var _11448__$1 = this;return self__.meta11447;
});})(flag))
;
cljs.core.async.t11446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11448,meta11447__$1){var self__ = this;
var _11448__$1 = this;return (new cljs.core.async.t11446(self__.flag,self__.alt_flag,meta11447__$1));
});})(flag))
;
cljs.core.async.__GT_t11446 = ((function (flag){
return (function __GT_t11446(flag__$1,alt_flag__$1,meta11447){return (new cljs.core.async.t11446(flag__$1,alt_flag__$1,meta11447));
});})(flag))
;
}
return (new cljs.core.async.t11446(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11452 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11452 = (function (cb,flag,alt_handler,meta11453){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11453 = meta11453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11452.cljs$lang$type = true;
cljs.core.async.t11452.cljs$lang$ctorStr = "cljs.core.async/t11452";
cljs.core.async.t11452.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t11452");
});
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11454){var self__ = this;
var _11454__$1 = this;return self__.meta11453;
});
cljs.core.async.t11452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11454,meta11453__$1){var self__ = this;
var _11454__$1 = this;return (new cljs.core.async.t11452(self__.cb,self__.flag,self__.alt_handler,meta11453__$1));
});
cljs.core.async.__GT_t11452 = (function __GT_t11452(cb__$1,flag__$1,alt_handler__$1,meta11453){return (new cljs.core.async.t11452(cb__$1,flag__$1,alt_handler__$1,meta11453));
});
}
return (new cljs.core.async.t11452(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11455_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11455_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11456_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11456_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3609__auto__ = wport;if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11457 = (i + (1));
i = G__11457;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3609__auto__ = ret;if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4222__auto__ = (function (){var and__3597__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3597__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3597__auto__;
}
})();if(cljs.core.truth_(temp__4222__auto__))
{var got = temp__4222__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11458){var map__11460 = p__11458;var map__11460__$1 = ((cljs.core.seq_QMARK_.call(null,map__11460))?cljs.core.apply.call(null,cljs.core.hash_map,map__11460):map__11460);var opts = map__11460__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11458 = null;if (arguments.length > 1) {
  p__11458 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11458);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11461){
var ports = cljs.core.first(arglist__11461);
var p__11458 = cljs.core.rest(arglist__11461);
return alts_BANG___delegate(ports,p__11458);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7452__auto___11556 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___11556){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___11556){
return (function (state_11532){var state_val_11533 = (state_11532[(1)]);if((state_val_11533 === (7)))
{var inst_11528 = (state_11532[(2)]);var state_11532__$1 = state_11532;var statearr_11534_11557 = state_11532__$1;(statearr_11534_11557[(2)] = inst_11528);
(statearr_11534_11557[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (1)))
{var state_11532__$1 = state_11532;var statearr_11535_11558 = state_11532__$1;(statearr_11535_11558[(2)] = null);
(statearr_11535_11558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (4)))
{var inst_11511 = (state_11532[(7)]);var inst_11511__$1 = (state_11532[(2)]);var inst_11512 = (inst_11511__$1 == null);var state_11532__$1 = (function (){var statearr_11536 = state_11532;(statearr_11536[(7)] = inst_11511__$1);
return statearr_11536;
})();if(cljs.core.truth_(inst_11512))
{var statearr_11537_11559 = state_11532__$1;(statearr_11537_11559[(1)] = (5));
} else
{var statearr_11538_11560 = state_11532__$1;(statearr_11538_11560[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (13)))
{var state_11532__$1 = state_11532;var statearr_11539_11561 = state_11532__$1;(statearr_11539_11561[(2)] = null);
(statearr_11539_11561[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (6)))
{var inst_11511 = (state_11532[(7)]);var state_11532__$1 = state_11532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11532__$1,(11),to,inst_11511);
} else
{if((state_val_11533 === (3)))
{var inst_11530 = (state_11532[(2)]);var state_11532__$1 = state_11532;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11532__$1,inst_11530);
} else
{if((state_val_11533 === (12)))
{var state_11532__$1 = state_11532;var statearr_11540_11562 = state_11532__$1;(statearr_11540_11562[(2)] = null);
(statearr_11540_11562[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (2)))
{var state_11532__$1 = state_11532;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11532__$1,(4),from);
} else
{if((state_val_11533 === (11)))
{var inst_11521 = (state_11532[(2)]);var state_11532__$1 = state_11532;if(cljs.core.truth_(inst_11521))
{var statearr_11541_11563 = state_11532__$1;(statearr_11541_11563[(1)] = (12));
} else
{var statearr_11542_11564 = state_11532__$1;(statearr_11542_11564[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (9)))
{var state_11532__$1 = state_11532;var statearr_11543_11565 = state_11532__$1;(statearr_11543_11565[(2)] = null);
(statearr_11543_11565[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (5)))
{var state_11532__$1 = state_11532;if(cljs.core.truth_(close_QMARK_))
{var statearr_11544_11566 = state_11532__$1;(statearr_11544_11566[(1)] = (8));
} else
{var statearr_11545_11567 = state_11532__$1;(statearr_11545_11567[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (14)))
{var inst_11526 = (state_11532[(2)]);var state_11532__$1 = state_11532;var statearr_11546_11568 = state_11532__$1;(statearr_11546_11568[(2)] = inst_11526);
(statearr_11546_11568[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (10)))
{var inst_11518 = (state_11532[(2)]);var state_11532__$1 = state_11532;var statearr_11547_11569 = state_11532__$1;(statearr_11547_11569[(2)] = inst_11518);
(statearr_11547_11569[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11533 === (8)))
{var inst_11515 = cljs.core.async.close_BANG_.call(null,to);var state_11532__$1 = state_11532;var statearr_11548_11570 = state_11532__$1;(statearr_11548_11570[(2)] = inst_11515);
(statearr_11548_11570[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___11556))
;return ((function (switch__7437__auto__,c__7452__auto___11556){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_11552 = [null,null,null,null,null,null,null,null];(statearr_11552[(0)] = state_machine__7438__auto__);
(statearr_11552[(1)] = (1));
return statearr_11552;
});
var state_machine__7438__auto____1 = (function (state_11532){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_11532);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e11553){if((e11553 instanceof Object))
{var ex__7441__auto__ = e11553;var statearr_11554_11571 = state_11532;(statearr_11554_11571[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11553;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11572 = state_11532;
state_11532 = G__11572;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_11532){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_11532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___11556))
})();var state__7454__auto__ = (function (){var statearr_11555 = f__7453__auto__.call(null);(statearr_11555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___11556);
return statearr_11555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___11556))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__11756){var vec__11757 = p__11756;var v = cljs.core.nth.call(null,vec__11757,(0),null);var p = cljs.core.nth.call(null,vec__11757,(1),null);var job = vec__11757;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__7452__auto___11939 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___11939,res,vec__11757,v,p,job,jobs,results){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___11939,res,vec__11757,v,p,job,jobs,results){
return (function (state_11762){var state_val_11763 = (state_11762[(1)]);if((state_val_11763 === (2)))
{var inst_11759 = (state_11762[(2)]);var inst_11760 = cljs.core.async.close_BANG_.call(null,res);var state_11762__$1 = (function (){var statearr_11764 = state_11762;(statearr_11764[(7)] = inst_11759);
return statearr_11764;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11762__$1,inst_11760);
} else
{if((state_val_11763 === (1)))
{var state_11762__$1 = state_11762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11762__$1,(2),res,v);
} else
{return null;
}
}
});})(c__7452__auto___11939,res,vec__11757,v,p,job,jobs,results))
;return ((function (switch__7437__auto__,c__7452__auto___11939,res,vec__11757,v,p,job,jobs,results){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_11768 = [null,null,null,null,null,null,null,null];(statearr_11768[(0)] = state_machine__7438__auto__);
(statearr_11768[(1)] = (1));
return statearr_11768;
});
var state_machine__7438__auto____1 = (function (state_11762){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_11762);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e11769){if((e11769 instanceof Object))
{var ex__7441__auto__ = e11769;var statearr_11770_11940 = state_11762;(statearr_11770_11940[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11769;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11941 = state_11762;
state_11762 = G__11941;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_11762){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_11762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___11939,res,vec__11757,v,p,job,jobs,results))
})();var state__7454__auto__ = (function (){var statearr_11771 = f__7453__auto__.call(null);(statearr_11771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___11939);
return statearr_11771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___11939,res,vec__11757,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11772){var vec__11773 = p__11772;var v = cljs.core.nth.call(null,vec__11773,(0),null);var p = cljs.core.nth.call(null,vec__11773,(1),null);var job = vec__11773;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4465__auto___11942 = n;var __11943 = (0);while(true){
if((__11943 < n__4465__auto___11942))
{var G__11774_11944 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11774_11944) {
case "async":
var c__7452__auto___11946 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11943,c__7452__auto___11946,G__11774_11944,n__4465__auto___11942,jobs,results,process,async){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (__11943,c__7452__auto___11946,G__11774_11944,n__4465__auto___11942,jobs,results,process,async){
return (function (state_11787){var state_val_11788 = (state_11787[(1)]);if((state_val_11788 === (7)))
{var inst_11783 = (state_11787[(2)]);var state_11787__$1 = state_11787;var statearr_11789_11947 = state_11787__$1;(statearr_11789_11947[(2)] = inst_11783);
(statearr_11789_11947[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11788 === (6)))
{var state_11787__$1 = state_11787;var statearr_11790_11948 = state_11787__$1;(statearr_11790_11948[(2)] = null);
(statearr_11790_11948[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11788 === (5)))
{var state_11787__$1 = state_11787;var statearr_11791_11949 = state_11787__$1;(statearr_11791_11949[(2)] = null);
(statearr_11791_11949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11788 === (4)))
{var inst_11777 = (state_11787[(2)]);var inst_11778 = async.call(null,inst_11777);var state_11787__$1 = state_11787;if(cljs.core.truth_(inst_11778))
{var statearr_11792_11950 = state_11787__$1;(statearr_11792_11950[(1)] = (5));
} else
{var statearr_11793_11951 = state_11787__$1;(statearr_11793_11951[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11788 === (3)))
{var inst_11785 = (state_11787[(2)]);var state_11787__$1 = state_11787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11787__$1,inst_11785);
} else
{if((state_val_11788 === (2)))
{var state_11787__$1 = state_11787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11787__$1,(4),jobs);
} else
{if((state_val_11788 === (1)))
{var state_11787__$1 = state_11787;var statearr_11794_11952 = state_11787__$1;(statearr_11794_11952[(2)] = null);
(statearr_11794_11952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__11943,c__7452__auto___11946,G__11774_11944,n__4465__auto___11942,jobs,results,process,async))
;return ((function (__11943,switch__7437__auto__,c__7452__auto___11946,G__11774_11944,n__4465__auto___11942,jobs,results,process,async){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_11798 = [null,null,null,null,null,null,null];(statearr_11798[(0)] = state_machine__7438__auto__);
(statearr_11798[(1)] = (1));
return statearr_11798;
});
var state_machine__7438__auto____1 = (function (state_11787){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_11787);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e11799){if((e11799 instanceof Object))
{var ex__7441__auto__ = e11799;var statearr_11800_11953 = state_11787;(statearr_11800_11953[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11787);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11799;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11954 = state_11787;
state_11787 = G__11954;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_11787){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_11787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(__11943,switch__7437__auto__,c__7452__auto___11946,G__11774_11944,n__4465__auto___11942,jobs,results,process,async))
})();var state__7454__auto__ = (function (){var statearr_11801 = f__7453__auto__.call(null);(statearr_11801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___11946);
return statearr_11801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(__11943,c__7452__auto___11946,G__11774_11944,n__4465__auto___11942,jobs,results,process,async))
);

break;
case "compute":
var c__7452__auto___11955 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11943,c__7452__auto___11955,G__11774_11944,n__4465__auto___11942,jobs,results,process,async){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (__11943,c__7452__auto___11955,G__11774_11944,n__4465__auto___11942,jobs,results,process,async){
return (function (state_11814){var state_val_11815 = (state_11814[(1)]);if((state_val_11815 === (7)))
{var inst_11810 = (state_11814[(2)]);var state_11814__$1 = state_11814;var statearr_11816_11956 = state_11814__$1;(statearr_11816_11956[(2)] = inst_11810);
(statearr_11816_11956[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11815 === (6)))
{var state_11814__$1 = state_11814;var statearr_11817_11957 = state_11814__$1;(statearr_11817_11957[(2)] = null);
(statearr_11817_11957[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11815 === (5)))
{var state_11814__$1 = state_11814;var statearr_11818_11958 = state_11814__$1;(statearr_11818_11958[(2)] = null);
(statearr_11818_11958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11815 === (4)))
{var inst_11804 = (state_11814[(2)]);var inst_11805 = process.call(null,inst_11804);var state_11814__$1 = state_11814;if(cljs.core.truth_(inst_11805))
{var statearr_11819_11959 = state_11814__$1;(statearr_11819_11959[(1)] = (5));
} else
{var statearr_11820_11960 = state_11814__$1;(statearr_11820_11960[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11815 === (3)))
{var inst_11812 = (state_11814[(2)]);var state_11814__$1 = state_11814;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11814__$1,inst_11812);
} else
{if((state_val_11815 === (2)))
{var state_11814__$1 = state_11814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11814__$1,(4),jobs);
} else
{if((state_val_11815 === (1)))
{var state_11814__$1 = state_11814;var statearr_11821_11961 = state_11814__$1;(statearr_11821_11961[(2)] = null);
(statearr_11821_11961[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__11943,c__7452__auto___11955,G__11774_11944,n__4465__auto___11942,jobs,results,process,async))
;return ((function (__11943,switch__7437__auto__,c__7452__auto___11955,G__11774_11944,n__4465__auto___11942,jobs,results,process,async){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_11825 = [null,null,null,null,null,null,null];(statearr_11825[(0)] = state_machine__7438__auto__);
(statearr_11825[(1)] = (1));
return statearr_11825;
});
var state_machine__7438__auto____1 = (function (state_11814){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_11814);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e11826){if((e11826 instanceof Object))
{var ex__7441__auto__ = e11826;var statearr_11827_11962 = state_11814;(statearr_11827_11962[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11814);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11826;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11963 = state_11814;
state_11814 = G__11963;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_11814){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_11814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(__11943,switch__7437__auto__,c__7452__auto___11955,G__11774_11944,n__4465__auto___11942,jobs,results,process,async))
})();var state__7454__auto__ = (function (){var statearr_11828 = f__7453__auto__.call(null);(statearr_11828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___11955);
return statearr_11828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(__11943,c__7452__auto___11955,G__11774_11944,n__4465__auto___11942,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__11964 = (__11943 + (1));
__11943 = G__11964;
continue;
}
} else
{}
break;
}
var c__7452__auto___11965 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___11965,jobs,results,process,async){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___11965,jobs,results,process,async){
return (function (state_11850){var state_val_11851 = (state_11850[(1)]);if((state_val_11851 === (9)))
{var inst_11843 = (state_11850[(2)]);var state_11850__$1 = (function (){var statearr_11852 = state_11850;(statearr_11852[(7)] = inst_11843);
return statearr_11852;
})();var statearr_11853_11966 = state_11850__$1;(statearr_11853_11966[(2)] = null);
(statearr_11853_11966[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11851 === (8)))
{var inst_11836 = (state_11850[(8)]);var inst_11841 = (state_11850[(2)]);var state_11850__$1 = (function (){var statearr_11854 = state_11850;(statearr_11854[(9)] = inst_11841);
return statearr_11854;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11850__$1,(9),results,inst_11836);
} else
{if((state_val_11851 === (7)))
{var inst_11846 = (state_11850[(2)]);var state_11850__$1 = state_11850;var statearr_11855_11967 = state_11850__$1;(statearr_11855_11967[(2)] = inst_11846);
(statearr_11855_11967[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11851 === (6)))
{var inst_11836 = (state_11850[(8)]);var inst_11831 = (state_11850[(10)]);var inst_11836__$1 = cljs.core.async.chan.call(null,(1));var inst_11837 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11838 = [inst_11831,inst_11836__$1];var inst_11839 = (new cljs.core.PersistentVector(null,2,(5),inst_11837,inst_11838,null));var state_11850__$1 = (function (){var statearr_11856 = state_11850;(statearr_11856[(8)] = inst_11836__$1);
return statearr_11856;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11850__$1,(8),jobs,inst_11839);
} else
{if((state_val_11851 === (5)))
{var inst_11834 = cljs.core.async.close_BANG_.call(null,jobs);var state_11850__$1 = state_11850;var statearr_11857_11968 = state_11850__$1;(statearr_11857_11968[(2)] = inst_11834);
(statearr_11857_11968[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11851 === (4)))
{var inst_11831 = (state_11850[(10)]);var inst_11831__$1 = (state_11850[(2)]);var inst_11832 = (inst_11831__$1 == null);var state_11850__$1 = (function (){var statearr_11858 = state_11850;(statearr_11858[(10)] = inst_11831__$1);
return statearr_11858;
})();if(cljs.core.truth_(inst_11832))
{var statearr_11859_11969 = state_11850__$1;(statearr_11859_11969[(1)] = (5));
} else
{var statearr_11860_11970 = state_11850__$1;(statearr_11860_11970[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11851 === (3)))
{var inst_11848 = (state_11850[(2)]);var state_11850__$1 = state_11850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11850__$1,inst_11848);
} else
{if((state_val_11851 === (2)))
{var state_11850__$1 = state_11850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11850__$1,(4),from);
} else
{if((state_val_11851 === (1)))
{var state_11850__$1 = state_11850;var statearr_11861_11971 = state_11850__$1;(statearr_11861_11971[(2)] = null);
(statearr_11861_11971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___11965,jobs,results,process,async))
;return ((function (switch__7437__auto__,c__7452__auto___11965,jobs,results,process,async){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_11865 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11865[(0)] = state_machine__7438__auto__);
(statearr_11865[(1)] = (1));
return statearr_11865;
});
var state_machine__7438__auto____1 = (function (state_11850){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_11850);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e11866){if((e11866 instanceof Object))
{var ex__7441__auto__ = e11866;var statearr_11867_11972 = state_11850;(statearr_11867_11972[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11850);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11866;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11973 = state_11850;
state_11850 = G__11973;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_11850){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_11850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___11965,jobs,results,process,async))
})();var state__7454__auto__ = (function (){var statearr_11868 = f__7453__auto__.call(null);(statearr_11868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___11965);
return statearr_11868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___11965,jobs,results,process,async))
);
var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__,jobs,results,process,async){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__,jobs,results,process,async){
return (function (state_11906){var state_val_11907 = (state_11906[(1)]);if((state_val_11907 === (7)))
{var inst_11902 = (state_11906[(2)]);var state_11906__$1 = state_11906;var statearr_11908_11974 = state_11906__$1;(statearr_11908_11974[(2)] = inst_11902);
(statearr_11908_11974[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (20)))
{var state_11906__$1 = state_11906;var statearr_11909_11975 = state_11906__$1;(statearr_11909_11975[(2)] = null);
(statearr_11909_11975[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (1)))
{var state_11906__$1 = state_11906;var statearr_11910_11976 = state_11906__$1;(statearr_11910_11976[(2)] = null);
(statearr_11910_11976[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (4)))
{var inst_11871 = (state_11906[(7)]);var inst_11871__$1 = (state_11906[(2)]);var inst_11872 = (inst_11871__$1 == null);var state_11906__$1 = (function (){var statearr_11911 = state_11906;(statearr_11911[(7)] = inst_11871__$1);
return statearr_11911;
})();if(cljs.core.truth_(inst_11872))
{var statearr_11912_11977 = state_11906__$1;(statearr_11912_11977[(1)] = (5));
} else
{var statearr_11913_11978 = state_11906__$1;(statearr_11913_11978[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (15)))
{var inst_11884 = (state_11906[(8)]);var state_11906__$1 = state_11906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11906__$1,(18),to,inst_11884);
} else
{if((state_val_11907 === (21)))
{var inst_11897 = (state_11906[(2)]);var state_11906__$1 = state_11906;var statearr_11914_11979 = state_11906__$1;(statearr_11914_11979[(2)] = inst_11897);
(statearr_11914_11979[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (13)))
{var inst_11899 = (state_11906[(2)]);var state_11906__$1 = (function (){var statearr_11915 = state_11906;(statearr_11915[(9)] = inst_11899);
return statearr_11915;
})();var statearr_11916_11980 = state_11906__$1;(statearr_11916_11980[(2)] = null);
(statearr_11916_11980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (6)))
{var inst_11871 = (state_11906[(7)]);var state_11906__$1 = state_11906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(11),inst_11871);
} else
{if((state_val_11907 === (17)))
{var inst_11892 = (state_11906[(2)]);var state_11906__$1 = state_11906;if(cljs.core.truth_(inst_11892))
{var statearr_11917_11981 = state_11906__$1;(statearr_11917_11981[(1)] = (19));
} else
{var statearr_11918_11982 = state_11906__$1;(statearr_11918_11982[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (3)))
{var inst_11904 = (state_11906[(2)]);var state_11906__$1 = state_11906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11906__$1,inst_11904);
} else
{if((state_val_11907 === (12)))
{var inst_11881 = (state_11906[(10)]);var state_11906__$1 = state_11906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(14),inst_11881);
} else
{if((state_val_11907 === (2)))
{var state_11906__$1 = state_11906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11906__$1,(4),results);
} else
{if((state_val_11907 === (19)))
{var state_11906__$1 = state_11906;var statearr_11919_11983 = state_11906__$1;(statearr_11919_11983[(2)] = null);
(statearr_11919_11983[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (11)))
{var inst_11881 = (state_11906[(2)]);var state_11906__$1 = (function (){var statearr_11920 = state_11906;(statearr_11920[(10)] = inst_11881);
return statearr_11920;
})();var statearr_11921_11984 = state_11906__$1;(statearr_11921_11984[(2)] = null);
(statearr_11921_11984[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (9)))
{var state_11906__$1 = state_11906;var statearr_11922_11985 = state_11906__$1;(statearr_11922_11985[(2)] = null);
(statearr_11922_11985[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (5)))
{var state_11906__$1 = state_11906;if(cljs.core.truth_(close_QMARK_))
{var statearr_11923_11986 = state_11906__$1;(statearr_11923_11986[(1)] = (8));
} else
{var statearr_11924_11987 = state_11906__$1;(statearr_11924_11987[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (14)))
{var inst_11884 = (state_11906[(8)]);var inst_11886 = (state_11906[(11)]);var inst_11884__$1 = (state_11906[(2)]);var inst_11885 = (inst_11884__$1 == null);var inst_11886__$1 = cljs.core.not.call(null,inst_11885);var state_11906__$1 = (function (){var statearr_11925 = state_11906;(statearr_11925[(8)] = inst_11884__$1);
(statearr_11925[(11)] = inst_11886__$1);
return statearr_11925;
})();if(inst_11886__$1)
{var statearr_11926_11988 = state_11906__$1;(statearr_11926_11988[(1)] = (15));
} else
{var statearr_11927_11989 = state_11906__$1;(statearr_11927_11989[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (16)))
{var inst_11886 = (state_11906[(11)]);var state_11906__$1 = state_11906;var statearr_11928_11990 = state_11906__$1;(statearr_11928_11990[(2)] = inst_11886);
(statearr_11928_11990[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (10)))
{var inst_11878 = (state_11906[(2)]);var state_11906__$1 = state_11906;var statearr_11929_11991 = state_11906__$1;(statearr_11929_11991[(2)] = inst_11878);
(statearr_11929_11991[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (18)))
{var inst_11889 = (state_11906[(2)]);var state_11906__$1 = state_11906;var statearr_11930_11992 = state_11906__$1;(statearr_11930_11992[(2)] = inst_11889);
(statearr_11930_11992[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11907 === (8)))
{var inst_11875 = cljs.core.async.close_BANG_.call(null,to);var state_11906__$1 = state_11906;var statearr_11931_11993 = state_11906__$1;(statearr_11931_11993[(2)] = inst_11875);
(statearr_11931_11993[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto__,jobs,results,process,async))
;return ((function (switch__7437__auto__,c__7452__auto__,jobs,results,process,async){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_11935 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11935[(0)] = state_machine__7438__auto__);
(statearr_11935[(1)] = (1));
return statearr_11935;
});
var state_machine__7438__auto____1 = (function (state_11906){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_11906);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e11936){if((e11936 instanceof Object))
{var ex__7441__auto__ = e11936;var statearr_11937_11994 = state_11906;(statearr_11937_11994[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11936;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11995 = state_11906;
state_11906 = G__11995;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_11906){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_11906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__,jobs,results,process,async))
})();var state__7454__auto__ = (function (){var statearr_11938 = f__7453__auto__.call(null);(statearr_11938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_11938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__,jobs,results,process,async))
);
return c__7452__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7452__auto___12096 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___12096,tc,fc){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___12096,tc,fc){
return (function (state_12071){var state_val_12072 = (state_12071[(1)]);if((state_val_12072 === (7)))
{var inst_12067 = (state_12071[(2)]);var state_12071__$1 = state_12071;var statearr_12073_12097 = state_12071__$1;(statearr_12073_12097[(2)] = inst_12067);
(statearr_12073_12097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (1)))
{var state_12071__$1 = state_12071;var statearr_12074_12098 = state_12071__$1;(statearr_12074_12098[(2)] = null);
(statearr_12074_12098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (4)))
{var inst_12048 = (state_12071[(7)]);var inst_12048__$1 = (state_12071[(2)]);var inst_12049 = (inst_12048__$1 == null);var state_12071__$1 = (function (){var statearr_12075 = state_12071;(statearr_12075[(7)] = inst_12048__$1);
return statearr_12075;
})();if(cljs.core.truth_(inst_12049))
{var statearr_12076_12099 = state_12071__$1;(statearr_12076_12099[(1)] = (5));
} else
{var statearr_12077_12100 = state_12071__$1;(statearr_12077_12100[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (13)))
{var state_12071__$1 = state_12071;var statearr_12078_12101 = state_12071__$1;(statearr_12078_12101[(2)] = null);
(statearr_12078_12101[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (6)))
{var inst_12048 = (state_12071[(7)]);var inst_12054 = p.call(null,inst_12048);var state_12071__$1 = state_12071;if(cljs.core.truth_(inst_12054))
{var statearr_12079_12102 = state_12071__$1;(statearr_12079_12102[(1)] = (9));
} else
{var statearr_12080_12103 = state_12071__$1;(statearr_12080_12103[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (3)))
{var inst_12069 = (state_12071[(2)]);var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12071__$1,inst_12069);
} else
{if((state_val_12072 === (12)))
{var state_12071__$1 = state_12071;var statearr_12081_12104 = state_12071__$1;(statearr_12081_12104[(2)] = null);
(statearr_12081_12104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (2)))
{var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12071__$1,(4),ch);
} else
{if((state_val_12072 === (11)))
{var inst_12048 = (state_12071[(7)]);var inst_12058 = (state_12071[(2)]);var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12071__$1,(8),inst_12058,inst_12048);
} else
{if((state_val_12072 === (9)))
{var state_12071__$1 = state_12071;var statearr_12082_12105 = state_12071__$1;(statearr_12082_12105[(2)] = tc);
(statearr_12082_12105[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (5)))
{var inst_12051 = cljs.core.async.close_BANG_.call(null,tc);var inst_12052 = cljs.core.async.close_BANG_.call(null,fc);var state_12071__$1 = (function (){var statearr_12083 = state_12071;(statearr_12083[(8)] = inst_12051);
return statearr_12083;
})();var statearr_12084_12106 = state_12071__$1;(statearr_12084_12106[(2)] = inst_12052);
(statearr_12084_12106[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (14)))
{var inst_12065 = (state_12071[(2)]);var state_12071__$1 = state_12071;var statearr_12085_12107 = state_12071__$1;(statearr_12085_12107[(2)] = inst_12065);
(statearr_12085_12107[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (10)))
{var state_12071__$1 = state_12071;var statearr_12086_12108 = state_12071__$1;(statearr_12086_12108[(2)] = fc);
(statearr_12086_12108[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12072 === (8)))
{var inst_12060 = (state_12071[(2)]);var state_12071__$1 = state_12071;if(cljs.core.truth_(inst_12060))
{var statearr_12087_12109 = state_12071__$1;(statearr_12087_12109[(1)] = (12));
} else
{var statearr_12088_12110 = state_12071__$1;(statearr_12088_12110[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___12096,tc,fc))
;return ((function (switch__7437__auto__,c__7452__auto___12096,tc,fc){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_12092 = [null,null,null,null,null,null,null,null,null];(statearr_12092[(0)] = state_machine__7438__auto__);
(statearr_12092[(1)] = (1));
return statearr_12092;
});
var state_machine__7438__auto____1 = (function (state_12071){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_12071);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e12093){if((e12093 instanceof Object))
{var ex__7441__auto__ = e12093;var statearr_12094_12111 = state_12071;(statearr_12094_12111[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12093;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12112 = state_12071;
state_12071 = G__12112;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_12071){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_12071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___12096,tc,fc))
})();var state__7454__auto__ = (function (){var statearr_12095 = f__7453__auto__.call(null);(statearr_12095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___12096);
return statearr_12095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___12096,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__){
return (function (state_12159){var state_val_12160 = (state_12159[(1)]);if((state_val_12160 === (7)))
{var inst_12155 = (state_12159[(2)]);var state_12159__$1 = state_12159;var statearr_12161_12177 = state_12159__$1;(statearr_12161_12177[(2)] = inst_12155);
(statearr_12161_12177[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12160 === (6)))
{var inst_12148 = (state_12159[(7)]);var inst_12145 = (state_12159[(8)]);var inst_12152 = f.call(null,inst_12145,inst_12148);var inst_12145__$1 = inst_12152;var state_12159__$1 = (function (){var statearr_12162 = state_12159;(statearr_12162[(8)] = inst_12145__$1);
return statearr_12162;
})();var statearr_12163_12178 = state_12159__$1;(statearr_12163_12178[(2)] = null);
(statearr_12163_12178[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12160 === (5)))
{var inst_12145 = (state_12159[(8)]);var state_12159__$1 = state_12159;var statearr_12164_12179 = state_12159__$1;(statearr_12164_12179[(2)] = inst_12145);
(statearr_12164_12179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12160 === (4)))
{var inst_12148 = (state_12159[(7)]);var inst_12148__$1 = (state_12159[(2)]);var inst_12149 = (inst_12148__$1 == null);var state_12159__$1 = (function (){var statearr_12165 = state_12159;(statearr_12165[(7)] = inst_12148__$1);
return statearr_12165;
})();if(cljs.core.truth_(inst_12149))
{var statearr_12166_12180 = state_12159__$1;(statearr_12166_12180[(1)] = (5));
} else
{var statearr_12167_12181 = state_12159__$1;(statearr_12167_12181[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12160 === (3)))
{var inst_12157 = (state_12159[(2)]);var state_12159__$1 = state_12159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12159__$1,inst_12157);
} else
{if((state_val_12160 === (2)))
{var state_12159__$1 = state_12159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12159__$1,(4),ch);
} else
{if((state_val_12160 === (1)))
{var inst_12145 = init;var state_12159__$1 = (function (){var statearr_12168 = state_12159;(statearr_12168[(8)] = inst_12145);
return statearr_12168;
})();var statearr_12169_12182 = state_12159__$1;(statearr_12169_12182[(2)] = null);
(statearr_12169_12182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7452__auto__))
;return ((function (switch__7437__auto__,c__7452__auto__){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_12173 = [null,null,null,null,null,null,null,null,null];(statearr_12173[(0)] = state_machine__7438__auto__);
(statearr_12173[(1)] = (1));
return statearr_12173;
});
var state_machine__7438__auto____1 = (function (state_12159){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_12159);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e12174){if((e12174 instanceof Object))
{var ex__7441__auto__ = e12174;var statearr_12175_12183 = state_12159;(statearr_12175_12183[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12174;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12184 = state_12159;
state_12159 = G__12184;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_12159){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_12159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__))
})();var state__7454__auto__ = (function (){var statearr_12176 = f__7453__auto__.call(null);(statearr_12176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_12176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__))
);
return c__7452__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__){
return (function (state_12258){var state_val_12259 = (state_12258[(1)]);if((state_val_12259 === (7)))
{var inst_12240 = (state_12258[(2)]);var state_12258__$1 = state_12258;var statearr_12260_12283 = state_12258__$1;(statearr_12260_12283[(2)] = inst_12240);
(statearr_12260_12283[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (1)))
{var inst_12234 = cljs.core.seq.call(null,coll);var inst_12235 = inst_12234;var state_12258__$1 = (function (){var statearr_12261 = state_12258;(statearr_12261[(7)] = inst_12235);
return statearr_12261;
})();var statearr_12262_12284 = state_12258__$1;(statearr_12262_12284[(2)] = null);
(statearr_12262_12284[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (4)))
{var inst_12235 = (state_12258[(7)]);var inst_12238 = cljs.core.first.call(null,inst_12235);var state_12258__$1 = state_12258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12258__$1,(7),ch,inst_12238);
} else
{if((state_val_12259 === (13)))
{var inst_12252 = (state_12258[(2)]);var state_12258__$1 = state_12258;var statearr_12263_12285 = state_12258__$1;(statearr_12263_12285[(2)] = inst_12252);
(statearr_12263_12285[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (6)))
{var inst_12243 = (state_12258[(2)]);var state_12258__$1 = state_12258;if(cljs.core.truth_(inst_12243))
{var statearr_12264_12286 = state_12258__$1;(statearr_12264_12286[(1)] = (8));
} else
{var statearr_12265_12287 = state_12258__$1;(statearr_12265_12287[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (3)))
{var inst_12256 = (state_12258[(2)]);var state_12258__$1 = state_12258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12258__$1,inst_12256);
} else
{if((state_val_12259 === (12)))
{var state_12258__$1 = state_12258;var statearr_12266_12288 = state_12258__$1;(statearr_12266_12288[(2)] = null);
(statearr_12266_12288[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (2)))
{var inst_12235 = (state_12258[(7)]);var state_12258__$1 = state_12258;if(cljs.core.truth_(inst_12235))
{var statearr_12267_12289 = state_12258__$1;(statearr_12267_12289[(1)] = (4));
} else
{var statearr_12268_12290 = state_12258__$1;(statearr_12268_12290[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (11)))
{var inst_12249 = cljs.core.async.close_BANG_.call(null,ch);var state_12258__$1 = state_12258;var statearr_12269_12291 = state_12258__$1;(statearr_12269_12291[(2)] = inst_12249);
(statearr_12269_12291[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (9)))
{var state_12258__$1 = state_12258;if(cljs.core.truth_(close_QMARK_))
{var statearr_12270_12292 = state_12258__$1;(statearr_12270_12292[(1)] = (11));
} else
{var statearr_12271_12293 = state_12258__$1;(statearr_12271_12293[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (5)))
{var inst_12235 = (state_12258[(7)]);var state_12258__$1 = state_12258;var statearr_12272_12294 = state_12258__$1;(statearr_12272_12294[(2)] = inst_12235);
(statearr_12272_12294[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (10)))
{var inst_12254 = (state_12258[(2)]);var state_12258__$1 = state_12258;var statearr_12273_12295 = state_12258__$1;(statearr_12273_12295[(2)] = inst_12254);
(statearr_12273_12295[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12259 === (8)))
{var inst_12235 = (state_12258[(7)]);var inst_12245 = cljs.core.next.call(null,inst_12235);var inst_12235__$1 = inst_12245;var state_12258__$1 = (function (){var statearr_12274 = state_12258;(statearr_12274[(7)] = inst_12235__$1);
return statearr_12274;
})();var statearr_12275_12296 = state_12258__$1;(statearr_12275_12296[(2)] = null);
(statearr_12275_12296[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto__))
;return ((function (switch__7437__auto__,c__7452__auto__){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_12279 = [null,null,null,null,null,null,null,null];(statearr_12279[(0)] = state_machine__7438__auto__);
(statearr_12279[(1)] = (1));
return statearr_12279;
});
var state_machine__7438__auto____1 = (function (state_12258){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_12258);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e12280){if((e12280 instanceof Object))
{var ex__7441__auto__ = e12280;var statearr_12281_12297 = state_12258;(statearr_12281_12297[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12280;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12298 = state_12258;
state_12258 = G__12298;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_12258){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_12258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__))
})();var state__7454__auto__ = (function (){var statearr_12282 = f__7453__auto__.call(null);(statearr_12282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_12282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__))
);
return c__7452__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12300 = {};return obj12300;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3597__auto__ = _;if(and__3597__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3597__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4236__auto__ = (((_ == null))?null:_);return (function (){var or__3609__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12302 = {};return obj12302;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3597__auto__ = m;if(and__3597__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3597__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3609__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3597__auto__ = m;if(and__3597__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3597__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3609__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3597__auto__ = m;if(and__3597__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3597__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3609__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12524 = (function (cs,ch,mult,meta12525){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12525 = meta12525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12524.cljs$lang$type = true;
cljs.core.async.t12524.cljs$lang$ctorStr = "cljs.core.async/t12524";
cljs.core.async.t12524.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t12524");
});})(cs))
;
cljs.core.async.t12524.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12524.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12524.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12524.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12524.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12526){var self__ = this;
var _12526__$1 = this;return self__.meta12525;
});})(cs))
;
cljs.core.async.t12524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12526,meta12525__$1){var self__ = this;
var _12526__$1 = this;return (new cljs.core.async.t12524(self__.cs,self__.ch,self__.mult,meta12525__$1));
});})(cs))
;
cljs.core.async.__GT_t12524 = ((function (cs){
return (function __GT_t12524(cs__$1,ch__$1,mult__$1,meta12525){return (new cljs.core.async.t12524(cs__$1,ch__$1,mult__$1,meta12525));
});})(cs))
;
}
return (new cljs.core.async.t12524(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7452__auto___12745 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___12745,cs,m,dchan,dctr,done){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___12745,cs,m,dchan,dctr,done){
return (function (state_12657){var state_val_12658 = (state_12657[(1)]);if((state_val_12658 === (7)))
{var inst_12653 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12659_12746 = state_12657__$1;(statearr_12659_12746[(2)] = inst_12653);
(statearr_12659_12746[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (20)))
{var inst_12558 = (state_12657[(7)]);var inst_12568 = cljs.core.first.call(null,inst_12558);var inst_12569 = cljs.core.nth.call(null,inst_12568,(0),null);var inst_12570 = cljs.core.nth.call(null,inst_12568,(1),null);var state_12657__$1 = (function (){var statearr_12660 = state_12657;(statearr_12660[(8)] = inst_12569);
return statearr_12660;
})();if(cljs.core.truth_(inst_12570))
{var statearr_12661_12747 = state_12657__$1;(statearr_12661_12747[(1)] = (22));
} else
{var statearr_12662_12748 = state_12657__$1;(statearr_12662_12748[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (27)))
{var inst_12598 = (state_12657[(9)]);var inst_12600 = (state_12657[(10)]);var inst_12605 = (state_12657[(11)]);var inst_12529 = (state_12657[(12)]);var inst_12605__$1 = cljs.core._nth.call(null,inst_12598,inst_12600);var inst_12606 = cljs.core.async.put_BANG_.call(null,inst_12605__$1,inst_12529,done);var state_12657__$1 = (function (){var statearr_12663 = state_12657;(statearr_12663[(11)] = inst_12605__$1);
return statearr_12663;
})();if(cljs.core.truth_(inst_12606))
{var statearr_12664_12749 = state_12657__$1;(statearr_12664_12749[(1)] = (30));
} else
{var statearr_12665_12750 = state_12657__$1;(statearr_12665_12750[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (1)))
{var state_12657__$1 = state_12657;var statearr_12666_12751 = state_12657__$1;(statearr_12666_12751[(2)] = null);
(statearr_12666_12751[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (24)))
{var inst_12558 = (state_12657[(7)]);var inst_12575 = (state_12657[(2)]);var inst_12576 = cljs.core.next.call(null,inst_12558);var inst_12538 = inst_12576;var inst_12539 = null;var inst_12540 = (0);var inst_12541 = (0);var state_12657__$1 = (function (){var statearr_12667 = state_12657;(statearr_12667[(13)] = inst_12538);
(statearr_12667[(14)] = inst_12541);
(statearr_12667[(15)] = inst_12539);
(statearr_12667[(16)] = inst_12575);
(statearr_12667[(17)] = inst_12540);
return statearr_12667;
})();var statearr_12668_12752 = state_12657__$1;(statearr_12668_12752[(2)] = null);
(statearr_12668_12752[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (39)))
{var state_12657__$1 = state_12657;var statearr_12672_12753 = state_12657__$1;(statearr_12672_12753[(2)] = null);
(statearr_12672_12753[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (4)))
{var inst_12529 = (state_12657[(12)]);var inst_12529__$1 = (state_12657[(2)]);var inst_12530 = (inst_12529__$1 == null);var state_12657__$1 = (function (){var statearr_12673 = state_12657;(statearr_12673[(12)] = inst_12529__$1);
return statearr_12673;
})();if(cljs.core.truth_(inst_12530))
{var statearr_12674_12754 = state_12657__$1;(statearr_12674_12754[(1)] = (5));
} else
{var statearr_12675_12755 = state_12657__$1;(statearr_12675_12755[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (15)))
{var inst_12538 = (state_12657[(13)]);var inst_12541 = (state_12657[(14)]);var inst_12539 = (state_12657[(15)]);var inst_12540 = (state_12657[(17)]);var inst_12554 = (state_12657[(2)]);var inst_12555 = (inst_12541 + (1));var tmp12669 = inst_12538;var tmp12670 = inst_12539;var tmp12671 = inst_12540;var inst_12538__$1 = tmp12669;var inst_12539__$1 = tmp12670;var inst_12540__$1 = tmp12671;var inst_12541__$1 = inst_12555;var state_12657__$1 = (function (){var statearr_12676 = state_12657;(statearr_12676[(13)] = inst_12538__$1);
(statearr_12676[(14)] = inst_12541__$1);
(statearr_12676[(15)] = inst_12539__$1);
(statearr_12676[(18)] = inst_12554);
(statearr_12676[(17)] = inst_12540__$1);
return statearr_12676;
})();var statearr_12677_12756 = state_12657__$1;(statearr_12677_12756[(2)] = null);
(statearr_12677_12756[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (21)))
{var inst_12579 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12681_12757 = state_12657__$1;(statearr_12681_12757[(2)] = inst_12579);
(statearr_12681_12757[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (31)))
{var inst_12605 = (state_12657[(11)]);var inst_12609 = done.call(null,null);var inst_12610 = cljs.core.async.untap_STAR_.call(null,m,inst_12605);var state_12657__$1 = (function (){var statearr_12682 = state_12657;(statearr_12682[(19)] = inst_12609);
return statearr_12682;
})();var statearr_12683_12758 = state_12657__$1;(statearr_12683_12758[(2)] = inst_12610);
(statearr_12683_12758[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (32)))
{var inst_12597 = (state_12657[(20)]);var inst_12598 = (state_12657[(9)]);var inst_12600 = (state_12657[(10)]);var inst_12599 = (state_12657[(21)]);var inst_12612 = (state_12657[(2)]);var inst_12613 = (inst_12600 + (1));var tmp12678 = inst_12597;var tmp12679 = inst_12598;var tmp12680 = inst_12599;var inst_12597__$1 = tmp12678;var inst_12598__$1 = tmp12679;var inst_12599__$1 = tmp12680;var inst_12600__$1 = inst_12613;var state_12657__$1 = (function (){var statearr_12684 = state_12657;(statearr_12684[(20)] = inst_12597__$1);
(statearr_12684[(9)] = inst_12598__$1);
(statearr_12684[(10)] = inst_12600__$1);
(statearr_12684[(21)] = inst_12599__$1);
(statearr_12684[(22)] = inst_12612);
return statearr_12684;
})();var statearr_12685_12759 = state_12657__$1;(statearr_12685_12759[(2)] = null);
(statearr_12685_12759[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (40)))
{var inst_12625 = (state_12657[(23)]);var inst_12629 = done.call(null,null);var inst_12630 = cljs.core.async.untap_STAR_.call(null,m,inst_12625);var state_12657__$1 = (function (){var statearr_12686 = state_12657;(statearr_12686[(24)] = inst_12629);
return statearr_12686;
})();var statearr_12687_12760 = state_12657__$1;(statearr_12687_12760[(2)] = inst_12630);
(statearr_12687_12760[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (33)))
{var inst_12616 = (state_12657[(25)]);var inst_12618 = cljs.core.chunked_seq_QMARK_.call(null,inst_12616);var state_12657__$1 = state_12657;if(inst_12618)
{var statearr_12688_12761 = state_12657__$1;(statearr_12688_12761[(1)] = (36));
} else
{var statearr_12689_12762 = state_12657__$1;(statearr_12689_12762[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (13)))
{var inst_12548 = (state_12657[(26)]);var inst_12551 = cljs.core.async.close_BANG_.call(null,inst_12548);var state_12657__$1 = state_12657;var statearr_12690_12763 = state_12657__$1;(statearr_12690_12763[(2)] = inst_12551);
(statearr_12690_12763[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (22)))
{var inst_12569 = (state_12657[(8)]);var inst_12572 = cljs.core.async.close_BANG_.call(null,inst_12569);var state_12657__$1 = state_12657;var statearr_12691_12764 = state_12657__$1;(statearr_12691_12764[(2)] = inst_12572);
(statearr_12691_12764[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (36)))
{var inst_12616 = (state_12657[(25)]);var inst_12620 = cljs.core.chunk_first.call(null,inst_12616);var inst_12621 = cljs.core.chunk_rest.call(null,inst_12616);var inst_12622 = cljs.core.count.call(null,inst_12620);var inst_12597 = inst_12621;var inst_12598 = inst_12620;var inst_12599 = inst_12622;var inst_12600 = (0);var state_12657__$1 = (function (){var statearr_12692 = state_12657;(statearr_12692[(20)] = inst_12597);
(statearr_12692[(9)] = inst_12598);
(statearr_12692[(10)] = inst_12600);
(statearr_12692[(21)] = inst_12599);
return statearr_12692;
})();var statearr_12693_12765 = state_12657__$1;(statearr_12693_12765[(2)] = null);
(statearr_12693_12765[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (41)))
{var inst_12616 = (state_12657[(25)]);var inst_12632 = (state_12657[(2)]);var inst_12633 = cljs.core.next.call(null,inst_12616);var inst_12597 = inst_12633;var inst_12598 = null;var inst_12599 = (0);var inst_12600 = (0);var state_12657__$1 = (function (){var statearr_12694 = state_12657;(statearr_12694[(20)] = inst_12597);
(statearr_12694[(9)] = inst_12598);
(statearr_12694[(10)] = inst_12600);
(statearr_12694[(21)] = inst_12599);
(statearr_12694[(27)] = inst_12632);
return statearr_12694;
})();var statearr_12695_12766 = state_12657__$1;(statearr_12695_12766[(2)] = null);
(statearr_12695_12766[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (43)))
{var state_12657__$1 = state_12657;var statearr_12696_12767 = state_12657__$1;(statearr_12696_12767[(2)] = null);
(statearr_12696_12767[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (29)))
{var inst_12641 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12697_12768 = state_12657__$1;(statearr_12697_12768[(2)] = inst_12641);
(statearr_12697_12768[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (44)))
{var inst_12650 = (state_12657[(2)]);var state_12657__$1 = (function (){var statearr_12698 = state_12657;(statearr_12698[(28)] = inst_12650);
return statearr_12698;
})();var statearr_12699_12769 = state_12657__$1;(statearr_12699_12769[(2)] = null);
(statearr_12699_12769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (6)))
{var inst_12589 = (state_12657[(29)]);var inst_12588 = cljs.core.deref.call(null,cs);var inst_12589__$1 = cljs.core.keys.call(null,inst_12588);var inst_12590 = cljs.core.count.call(null,inst_12589__$1);var inst_12591 = cljs.core.reset_BANG_.call(null,dctr,inst_12590);var inst_12596 = cljs.core.seq.call(null,inst_12589__$1);var inst_12597 = inst_12596;var inst_12598 = null;var inst_12599 = (0);var inst_12600 = (0);var state_12657__$1 = (function (){var statearr_12700 = state_12657;(statearr_12700[(30)] = inst_12591);
(statearr_12700[(20)] = inst_12597);
(statearr_12700[(9)] = inst_12598);
(statearr_12700[(10)] = inst_12600);
(statearr_12700[(21)] = inst_12599);
(statearr_12700[(29)] = inst_12589__$1);
return statearr_12700;
})();var statearr_12701_12770 = state_12657__$1;(statearr_12701_12770[(2)] = null);
(statearr_12701_12770[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (28)))
{var inst_12597 = (state_12657[(20)]);var inst_12616 = (state_12657[(25)]);var inst_12616__$1 = cljs.core.seq.call(null,inst_12597);var state_12657__$1 = (function (){var statearr_12702 = state_12657;(statearr_12702[(25)] = inst_12616__$1);
return statearr_12702;
})();if(inst_12616__$1)
{var statearr_12703_12771 = state_12657__$1;(statearr_12703_12771[(1)] = (33));
} else
{var statearr_12704_12772 = state_12657__$1;(statearr_12704_12772[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (25)))
{var inst_12600 = (state_12657[(10)]);var inst_12599 = (state_12657[(21)]);var inst_12602 = (inst_12600 < inst_12599);var inst_12603 = inst_12602;var state_12657__$1 = state_12657;if(cljs.core.truth_(inst_12603))
{var statearr_12705_12773 = state_12657__$1;(statearr_12705_12773[(1)] = (27));
} else
{var statearr_12706_12774 = state_12657__$1;(statearr_12706_12774[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (34)))
{var state_12657__$1 = state_12657;var statearr_12707_12775 = state_12657__$1;(statearr_12707_12775[(2)] = null);
(statearr_12707_12775[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (17)))
{var state_12657__$1 = state_12657;var statearr_12708_12776 = state_12657__$1;(statearr_12708_12776[(2)] = null);
(statearr_12708_12776[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (3)))
{var inst_12655 = (state_12657[(2)]);var state_12657__$1 = state_12657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12657__$1,inst_12655);
} else
{if((state_val_12658 === (12)))
{var inst_12584 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12709_12777 = state_12657__$1;(statearr_12709_12777[(2)] = inst_12584);
(statearr_12709_12777[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (2)))
{var state_12657__$1 = state_12657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12657__$1,(4),ch);
} else
{if((state_val_12658 === (23)))
{var state_12657__$1 = state_12657;var statearr_12710_12778 = state_12657__$1;(statearr_12710_12778[(2)] = null);
(statearr_12710_12778[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (35)))
{var inst_12639 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12711_12779 = state_12657__$1;(statearr_12711_12779[(2)] = inst_12639);
(statearr_12711_12779[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (19)))
{var inst_12558 = (state_12657[(7)]);var inst_12562 = cljs.core.chunk_first.call(null,inst_12558);var inst_12563 = cljs.core.chunk_rest.call(null,inst_12558);var inst_12564 = cljs.core.count.call(null,inst_12562);var inst_12538 = inst_12563;var inst_12539 = inst_12562;var inst_12540 = inst_12564;var inst_12541 = (0);var state_12657__$1 = (function (){var statearr_12712 = state_12657;(statearr_12712[(13)] = inst_12538);
(statearr_12712[(14)] = inst_12541);
(statearr_12712[(15)] = inst_12539);
(statearr_12712[(17)] = inst_12540);
return statearr_12712;
})();var statearr_12713_12780 = state_12657__$1;(statearr_12713_12780[(2)] = null);
(statearr_12713_12780[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (11)))
{var inst_12538 = (state_12657[(13)]);var inst_12558 = (state_12657[(7)]);var inst_12558__$1 = cljs.core.seq.call(null,inst_12538);var state_12657__$1 = (function (){var statearr_12714 = state_12657;(statearr_12714[(7)] = inst_12558__$1);
return statearr_12714;
})();if(inst_12558__$1)
{var statearr_12715_12781 = state_12657__$1;(statearr_12715_12781[(1)] = (16));
} else
{var statearr_12716_12782 = state_12657__$1;(statearr_12716_12782[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (9)))
{var inst_12586 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12717_12783 = state_12657__$1;(statearr_12717_12783[(2)] = inst_12586);
(statearr_12717_12783[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (5)))
{var inst_12536 = cljs.core.deref.call(null,cs);var inst_12537 = cljs.core.seq.call(null,inst_12536);var inst_12538 = inst_12537;var inst_12539 = null;var inst_12540 = (0);var inst_12541 = (0);var state_12657__$1 = (function (){var statearr_12718 = state_12657;(statearr_12718[(13)] = inst_12538);
(statearr_12718[(14)] = inst_12541);
(statearr_12718[(15)] = inst_12539);
(statearr_12718[(17)] = inst_12540);
return statearr_12718;
})();var statearr_12719_12784 = state_12657__$1;(statearr_12719_12784[(2)] = null);
(statearr_12719_12784[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (14)))
{var state_12657__$1 = state_12657;var statearr_12720_12785 = state_12657__$1;(statearr_12720_12785[(2)] = null);
(statearr_12720_12785[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (45)))
{var inst_12647 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12721_12786 = state_12657__$1;(statearr_12721_12786[(2)] = inst_12647);
(statearr_12721_12786[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (26)))
{var inst_12589 = (state_12657[(29)]);var inst_12643 = (state_12657[(2)]);var inst_12644 = cljs.core.seq.call(null,inst_12589);var state_12657__$1 = (function (){var statearr_12722 = state_12657;(statearr_12722[(31)] = inst_12643);
return statearr_12722;
})();if(inst_12644)
{var statearr_12723_12787 = state_12657__$1;(statearr_12723_12787[(1)] = (42));
} else
{var statearr_12724_12788 = state_12657__$1;(statearr_12724_12788[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (16)))
{var inst_12558 = (state_12657[(7)]);var inst_12560 = cljs.core.chunked_seq_QMARK_.call(null,inst_12558);var state_12657__$1 = state_12657;if(inst_12560)
{var statearr_12725_12789 = state_12657__$1;(statearr_12725_12789[(1)] = (19));
} else
{var statearr_12726_12790 = state_12657__$1;(statearr_12726_12790[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (38)))
{var inst_12636 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12727_12791 = state_12657__$1;(statearr_12727_12791[(2)] = inst_12636);
(statearr_12727_12791[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (30)))
{var state_12657__$1 = state_12657;var statearr_12728_12792 = state_12657__$1;(statearr_12728_12792[(2)] = null);
(statearr_12728_12792[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (10)))
{var inst_12541 = (state_12657[(14)]);var inst_12539 = (state_12657[(15)]);var inst_12547 = cljs.core._nth.call(null,inst_12539,inst_12541);var inst_12548 = cljs.core.nth.call(null,inst_12547,(0),null);var inst_12549 = cljs.core.nth.call(null,inst_12547,(1),null);var state_12657__$1 = (function (){var statearr_12729 = state_12657;(statearr_12729[(26)] = inst_12548);
return statearr_12729;
})();if(cljs.core.truth_(inst_12549))
{var statearr_12730_12793 = state_12657__$1;(statearr_12730_12793[(1)] = (13));
} else
{var statearr_12731_12794 = state_12657__$1;(statearr_12731_12794[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (18)))
{var inst_12582 = (state_12657[(2)]);var state_12657__$1 = state_12657;var statearr_12732_12795 = state_12657__$1;(statearr_12732_12795[(2)] = inst_12582);
(statearr_12732_12795[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (42)))
{var state_12657__$1 = state_12657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12657__$1,(45),dchan);
} else
{if((state_val_12658 === (37)))
{var inst_12625 = (state_12657[(23)]);var inst_12529 = (state_12657[(12)]);var inst_12616 = (state_12657[(25)]);var inst_12625__$1 = cljs.core.first.call(null,inst_12616);var inst_12626 = cljs.core.async.put_BANG_.call(null,inst_12625__$1,inst_12529,done);var state_12657__$1 = (function (){var statearr_12733 = state_12657;(statearr_12733[(23)] = inst_12625__$1);
return statearr_12733;
})();if(cljs.core.truth_(inst_12626))
{var statearr_12734_12796 = state_12657__$1;(statearr_12734_12796[(1)] = (39));
} else
{var statearr_12735_12797 = state_12657__$1;(statearr_12735_12797[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12658 === (8)))
{var inst_12541 = (state_12657[(14)]);var inst_12540 = (state_12657[(17)]);var inst_12543 = (inst_12541 < inst_12540);var inst_12544 = inst_12543;var state_12657__$1 = state_12657;if(cljs.core.truth_(inst_12544))
{var statearr_12736_12798 = state_12657__$1;(statearr_12736_12798[(1)] = (10));
} else
{var statearr_12737_12799 = state_12657__$1;(statearr_12737_12799[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___12745,cs,m,dchan,dctr,done))
;return ((function (switch__7437__auto__,c__7452__auto___12745,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_12741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12741[(0)] = state_machine__7438__auto__);
(statearr_12741[(1)] = (1));
return statearr_12741;
});
var state_machine__7438__auto____1 = (function (state_12657){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_12657);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e12742){if((e12742 instanceof Object))
{var ex__7441__auto__ = e12742;var statearr_12743_12800 = state_12657;(statearr_12743_12800[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12657);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12742;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12801 = state_12657;
state_12657 = G__12801;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_12657){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_12657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___12745,cs,m,dchan,dctr,done))
})();var state__7454__auto__ = (function (){var statearr_12744 = f__7453__auto__.call(null);(statearr_12744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___12745);
return statearr_12744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___12745,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12803 = {};return obj12803;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3597__auto__ = m;if(and__3597__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3597__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3609__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3597__auto__ = m;if(and__3597__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3597__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3609__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3597__auto__ = m;if(and__3597__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3597__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3609__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3597__auto__ = m;if(and__3597__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3597__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3609__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3597__auto__ = m;if(and__3597__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3597__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3609__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12923 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12924){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12924 = meta12924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12923.cljs$lang$type = true;
cljs.core.async.t12923.cljs$lang$ctorStr = "cljs.core.async/t12923";
cljs.core.async.t12923.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t12923");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12923.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12923.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12923.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12923.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12923.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12923.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12923.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12925){var self__ = this;
var _12925__$1 = this;return self__.meta12924;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12925,meta12924__$1){var self__ = this;
var _12925__$1 = this;return (new cljs.core.async.t12923(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12924__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12923 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12923(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12924){return (new cljs.core.async.t12923(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12924));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12923(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__7452__auto___13042 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___13042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___13042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12995){var state_val_12996 = (state_12995[(1)]);if((state_val_12996 === (7)))
{var inst_12939 = (state_12995[(7)]);var inst_12944 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12939);var state_12995__$1 = state_12995;var statearr_12997_13043 = state_12995__$1;(statearr_12997_13043[(2)] = inst_12944);
(statearr_12997_13043[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (20)))
{var inst_12954 = (state_12995[(8)]);var state_12995__$1 = state_12995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12995__$1,(23),out,inst_12954);
} else
{if((state_val_12996 === (1)))
{var inst_12929 = (state_12995[(9)]);var inst_12929__$1 = calc_state.call(null);var inst_12930 = cljs.core.seq_QMARK_.call(null,inst_12929__$1);var state_12995__$1 = (function (){var statearr_12998 = state_12995;(statearr_12998[(9)] = inst_12929__$1);
return statearr_12998;
})();if(inst_12930)
{var statearr_12999_13044 = state_12995__$1;(statearr_12999_13044[(1)] = (2));
} else
{var statearr_13000_13045 = state_12995__$1;(statearr_13000_13045[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (24)))
{var inst_12947 = (state_12995[(10)]);var inst_12939 = inst_12947;var state_12995__$1 = (function (){var statearr_13001 = state_12995;(statearr_13001[(7)] = inst_12939);
return statearr_13001;
})();var statearr_13002_13046 = state_12995__$1;(statearr_13002_13046[(2)] = null);
(statearr_13002_13046[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (4)))
{var inst_12929 = (state_12995[(9)]);var inst_12935 = (state_12995[(2)]);var inst_12936 = cljs.core.get.call(null,inst_12935,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12937 = cljs.core.get.call(null,inst_12935,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12938 = cljs.core.get.call(null,inst_12935,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12939 = inst_12929;var state_12995__$1 = (function (){var statearr_13003 = state_12995;(statearr_13003[(11)] = inst_12938);
(statearr_13003[(7)] = inst_12939);
(statearr_13003[(12)] = inst_12937);
(statearr_13003[(13)] = inst_12936);
return statearr_13003;
})();var statearr_13004_13047 = state_12995__$1;(statearr_13004_13047[(2)] = null);
(statearr_13004_13047[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (15)))
{var state_12995__$1 = state_12995;var statearr_13005_13048 = state_12995__$1;(statearr_13005_13048[(2)] = null);
(statearr_13005_13048[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (21)))
{var inst_12947 = (state_12995[(10)]);var inst_12939 = inst_12947;var state_12995__$1 = (function (){var statearr_13006 = state_12995;(statearr_13006[(7)] = inst_12939);
return statearr_13006;
})();var statearr_13007_13049 = state_12995__$1;(statearr_13007_13049[(2)] = null);
(statearr_13007_13049[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (13)))
{var inst_12991 = (state_12995[(2)]);var state_12995__$1 = state_12995;var statearr_13008_13050 = state_12995__$1;(statearr_13008_13050[(2)] = inst_12991);
(statearr_13008_13050[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (22)))
{var inst_12989 = (state_12995[(2)]);var state_12995__$1 = state_12995;var statearr_13009_13051 = state_12995__$1;(statearr_13009_13051[(2)] = inst_12989);
(statearr_13009_13051[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (6)))
{var inst_12993 = (state_12995[(2)]);var state_12995__$1 = state_12995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12995__$1,inst_12993);
} else
{if((state_val_12996 === (25)))
{var state_12995__$1 = state_12995;var statearr_13010_13052 = state_12995__$1;(statearr_13010_13052[(2)] = null);
(statearr_13010_13052[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (17)))
{var inst_12969 = (state_12995[(14)]);var state_12995__$1 = state_12995;var statearr_13011_13053 = state_12995__$1;(statearr_13011_13053[(2)] = inst_12969);
(statearr_13011_13053[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (3)))
{var inst_12929 = (state_12995[(9)]);var state_12995__$1 = state_12995;var statearr_13012_13054 = state_12995__$1;(statearr_13012_13054[(2)] = inst_12929);
(statearr_13012_13054[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (12)))
{var inst_12950 = (state_12995[(15)]);var inst_12969 = (state_12995[(14)]);var inst_12955 = (state_12995[(16)]);var inst_12969__$1 = inst_12950.call(null,inst_12955);var state_12995__$1 = (function (){var statearr_13013 = state_12995;(statearr_13013[(14)] = inst_12969__$1);
return statearr_13013;
})();if(cljs.core.truth_(inst_12969__$1))
{var statearr_13014_13055 = state_12995__$1;(statearr_13014_13055[(1)] = (17));
} else
{var statearr_13015_13056 = state_12995__$1;(statearr_13015_13056[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (2)))
{var inst_12929 = (state_12995[(9)]);var inst_12932 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12929);var state_12995__$1 = state_12995;var statearr_13016_13057 = state_12995__$1;(statearr_13016_13057[(2)] = inst_12932);
(statearr_13016_13057[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (23)))
{var inst_12980 = (state_12995[(2)]);var state_12995__$1 = state_12995;if(cljs.core.truth_(inst_12980))
{var statearr_13017_13058 = state_12995__$1;(statearr_13017_13058[(1)] = (24));
} else
{var statearr_13018_13059 = state_12995__$1;(statearr_13018_13059[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (19)))
{var inst_12977 = (state_12995[(2)]);var state_12995__$1 = state_12995;if(cljs.core.truth_(inst_12977))
{var statearr_13019_13060 = state_12995__$1;(statearr_13019_13060[(1)] = (20));
} else
{var statearr_13020_13061 = state_12995__$1;(statearr_13020_13061[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (11)))
{var inst_12954 = (state_12995[(8)]);var inst_12960 = (inst_12954 == null);var state_12995__$1 = state_12995;if(cljs.core.truth_(inst_12960))
{var statearr_13021_13062 = state_12995__$1;(statearr_13021_13062[(1)] = (14));
} else
{var statearr_13022_13063 = state_12995__$1;(statearr_13022_13063[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (9)))
{var inst_12947 = (state_12995[(10)]);var inst_12947__$1 = (state_12995[(2)]);var inst_12948 = cljs.core.get.call(null,inst_12947__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12949 = cljs.core.get.call(null,inst_12947__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12950 = cljs.core.get.call(null,inst_12947__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12995__$1 = (function (){var statearr_13023 = state_12995;(statearr_13023[(15)] = inst_12950);
(statearr_13023[(10)] = inst_12947__$1);
(statearr_13023[(17)] = inst_12949);
return statearr_13023;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12995__$1,(10),inst_12948);
} else
{if((state_val_12996 === (5)))
{var inst_12939 = (state_12995[(7)]);var inst_12942 = cljs.core.seq_QMARK_.call(null,inst_12939);var state_12995__$1 = state_12995;if(inst_12942)
{var statearr_13024_13064 = state_12995__$1;(statearr_13024_13064[(1)] = (7));
} else
{var statearr_13025_13065 = state_12995__$1;(statearr_13025_13065[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (14)))
{var inst_12955 = (state_12995[(16)]);var inst_12962 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12955);var state_12995__$1 = state_12995;var statearr_13026_13066 = state_12995__$1;(statearr_13026_13066[(2)] = inst_12962);
(statearr_13026_13066[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (26)))
{var inst_12985 = (state_12995[(2)]);var state_12995__$1 = state_12995;var statearr_13027_13067 = state_12995__$1;(statearr_13027_13067[(2)] = inst_12985);
(statearr_13027_13067[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (16)))
{var inst_12965 = (state_12995[(2)]);var inst_12966 = calc_state.call(null);var inst_12939 = inst_12966;var state_12995__$1 = (function (){var statearr_13028 = state_12995;(statearr_13028[(7)] = inst_12939);
(statearr_13028[(18)] = inst_12965);
return statearr_13028;
})();var statearr_13029_13068 = state_12995__$1;(statearr_13029_13068[(2)] = null);
(statearr_13029_13068[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (10)))
{var inst_12954 = (state_12995[(8)]);var inst_12955 = (state_12995[(16)]);var inst_12953 = (state_12995[(2)]);var inst_12954__$1 = cljs.core.nth.call(null,inst_12953,(0),null);var inst_12955__$1 = cljs.core.nth.call(null,inst_12953,(1),null);var inst_12956 = (inst_12954__$1 == null);var inst_12957 = cljs.core._EQ_.call(null,inst_12955__$1,change);var inst_12958 = (inst_12956) || (inst_12957);var state_12995__$1 = (function (){var statearr_13030 = state_12995;(statearr_13030[(8)] = inst_12954__$1);
(statearr_13030[(16)] = inst_12955__$1);
return statearr_13030;
})();if(cljs.core.truth_(inst_12958))
{var statearr_13031_13069 = state_12995__$1;(statearr_13031_13069[(1)] = (11));
} else
{var statearr_13032_13070 = state_12995__$1;(statearr_13032_13070[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (18)))
{var inst_12950 = (state_12995[(15)]);var inst_12955 = (state_12995[(16)]);var inst_12949 = (state_12995[(17)]);var inst_12972 = cljs.core.empty_QMARK_.call(null,inst_12950);var inst_12973 = inst_12949.call(null,inst_12955);var inst_12974 = cljs.core.not.call(null,inst_12973);var inst_12975 = (inst_12972) && (inst_12974);var state_12995__$1 = state_12995;var statearr_13033_13071 = state_12995__$1;(statearr_13033_13071[(2)] = inst_12975);
(statearr_13033_13071[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (8)))
{var inst_12939 = (state_12995[(7)]);var state_12995__$1 = state_12995;var statearr_13034_13072 = state_12995__$1;(statearr_13034_13072[(2)] = inst_12939);
(statearr_13034_13072[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___13042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7437__auto__,c__7452__auto___13042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_13038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13038[(0)] = state_machine__7438__auto__);
(statearr_13038[(1)] = (1));
return statearr_13038;
});
var state_machine__7438__auto____1 = (function (state_12995){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_12995);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e13039){if((e13039 instanceof Object))
{var ex__7441__auto__ = e13039;var statearr_13040_13073 = state_12995;(statearr_13040_13073[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12995);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13039;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13074 = state_12995;
state_12995 = G__13074;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_12995){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_12995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___13042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7454__auto__ = (function (){var statearr_13041 = f__7453__auto__.call(null);(statearr_13041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___13042);
return statearr_13041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___13042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13076 = {};return obj13076;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3597__auto__ = p;if(and__3597__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3597__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3609__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3597__auto__ = p;if(and__3597__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3597__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3609__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3597__auto__ = p;if(and__3597__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3597__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3609__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3597__auto__ = p;if(and__3597__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3597__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3609__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3609__auto__)
{return or__3609__auto__;
} else
{var or__3609__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3609__auto____$1)
{return or__3609__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3609__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3609__auto__))
{return or__3609__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3609__auto__,mults){
return (function (p1__13077_SHARP_){if(cljs.core.truth_(p1__13077_SHARP_.call(null,topic)))
{return p1__13077_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13077_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3609__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13200 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13200 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13201){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13201 = meta13201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13200.cljs$lang$type = true;
cljs.core.async.t13200.cljs$lang$ctorStr = "cljs.core.async/t13200";
cljs.core.async.t13200.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13200");
});})(mults,ensure_mult))
;
cljs.core.async.t13200.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13200.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13200.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13200.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13202){var self__ = this;
var _13202__$1 = this;return self__.meta13201;
});})(mults,ensure_mult))
;
cljs.core.async.t13200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13202,meta13201__$1){var self__ = this;
var _13202__$1 = this;return (new cljs.core.async.t13200(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13201__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13200 = ((function (mults,ensure_mult){
return (function __GT_t13200(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13201){return (new cljs.core.async.t13200(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13201));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13200(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7452__auto___13322 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___13322,mults,ensure_mult,p){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___13322,mults,ensure_mult,p){
return (function (state_13274){var state_val_13275 = (state_13274[(1)]);if((state_val_13275 === (7)))
{var inst_13270 = (state_13274[(2)]);var state_13274__$1 = state_13274;var statearr_13276_13323 = state_13274__$1;(statearr_13276_13323[(2)] = inst_13270);
(statearr_13276_13323[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (20)))
{var state_13274__$1 = state_13274;var statearr_13277_13324 = state_13274__$1;(statearr_13277_13324[(2)] = null);
(statearr_13277_13324[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (1)))
{var state_13274__$1 = state_13274;var statearr_13278_13325 = state_13274__$1;(statearr_13278_13325[(2)] = null);
(statearr_13278_13325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (24)))
{var inst_13253 = (state_13274[(7)]);var inst_13262 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13253);var state_13274__$1 = state_13274;var statearr_13279_13326 = state_13274__$1;(statearr_13279_13326[(2)] = inst_13262);
(statearr_13279_13326[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (4)))
{var inst_13205 = (state_13274[(8)]);var inst_13205__$1 = (state_13274[(2)]);var inst_13206 = (inst_13205__$1 == null);var state_13274__$1 = (function (){var statearr_13280 = state_13274;(statearr_13280[(8)] = inst_13205__$1);
return statearr_13280;
})();if(cljs.core.truth_(inst_13206))
{var statearr_13281_13327 = state_13274__$1;(statearr_13281_13327[(1)] = (5));
} else
{var statearr_13282_13328 = state_13274__$1;(statearr_13282_13328[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (15)))
{var inst_13247 = (state_13274[(2)]);var state_13274__$1 = state_13274;var statearr_13283_13329 = state_13274__$1;(statearr_13283_13329[(2)] = inst_13247);
(statearr_13283_13329[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (21)))
{var inst_13267 = (state_13274[(2)]);var state_13274__$1 = (function (){var statearr_13284 = state_13274;(statearr_13284[(9)] = inst_13267);
return statearr_13284;
})();var statearr_13285_13330 = state_13274__$1;(statearr_13285_13330[(2)] = null);
(statearr_13285_13330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (13)))
{var inst_13229 = (state_13274[(10)]);var inst_13231 = cljs.core.chunked_seq_QMARK_.call(null,inst_13229);var state_13274__$1 = state_13274;if(inst_13231)
{var statearr_13286_13331 = state_13274__$1;(statearr_13286_13331[(1)] = (16));
} else
{var statearr_13287_13332 = state_13274__$1;(statearr_13287_13332[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (22)))
{var inst_13259 = (state_13274[(2)]);var state_13274__$1 = state_13274;if(cljs.core.truth_(inst_13259))
{var statearr_13288_13333 = state_13274__$1;(statearr_13288_13333[(1)] = (23));
} else
{var statearr_13289_13334 = state_13274__$1;(statearr_13289_13334[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (6)))
{var inst_13253 = (state_13274[(7)]);var inst_13205 = (state_13274[(8)]);var inst_13255 = (state_13274[(11)]);var inst_13253__$1 = topic_fn.call(null,inst_13205);var inst_13254 = cljs.core.deref.call(null,mults);var inst_13255__$1 = cljs.core.get.call(null,inst_13254,inst_13253__$1);var state_13274__$1 = (function (){var statearr_13290 = state_13274;(statearr_13290[(7)] = inst_13253__$1);
(statearr_13290[(11)] = inst_13255__$1);
return statearr_13290;
})();if(cljs.core.truth_(inst_13255__$1))
{var statearr_13291_13335 = state_13274__$1;(statearr_13291_13335[(1)] = (19));
} else
{var statearr_13292_13336 = state_13274__$1;(statearr_13292_13336[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (25)))
{var inst_13264 = (state_13274[(2)]);var state_13274__$1 = state_13274;var statearr_13293_13337 = state_13274__$1;(statearr_13293_13337[(2)] = inst_13264);
(statearr_13293_13337[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (17)))
{var inst_13229 = (state_13274[(10)]);var inst_13238 = cljs.core.first.call(null,inst_13229);var inst_13239 = cljs.core.async.muxch_STAR_.call(null,inst_13238);var inst_13240 = cljs.core.async.close_BANG_.call(null,inst_13239);var inst_13241 = cljs.core.next.call(null,inst_13229);var inst_13215 = inst_13241;var inst_13216 = null;var inst_13217 = (0);var inst_13218 = (0);var state_13274__$1 = (function (){var statearr_13294 = state_13274;(statearr_13294[(12)] = inst_13216);
(statearr_13294[(13)] = inst_13218);
(statearr_13294[(14)] = inst_13240);
(statearr_13294[(15)] = inst_13215);
(statearr_13294[(16)] = inst_13217);
return statearr_13294;
})();var statearr_13295_13338 = state_13274__$1;(statearr_13295_13338[(2)] = null);
(statearr_13295_13338[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (3)))
{var inst_13272 = (state_13274[(2)]);var state_13274__$1 = state_13274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13274__$1,inst_13272);
} else
{if((state_val_13275 === (12)))
{var inst_13249 = (state_13274[(2)]);var state_13274__$1 = state_13274;var statearr_13296_13339 = state_13274__$1;(statearr_13296_13339[(2)] = inst_13249);
(statearr_13296_13339[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (2)))
{var state_13274__$1 = state_13274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13274__$1,(4),ch);
} else
{if((state_val_13275 === (23)))
{var state_13274__$1 = state_13274;var statearr_13297_13340 = state_13274__$1;(statearr_13297_13340[(2)] = null);
(statearr_13297_13340[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (19)))
{var inst_13205 = (state_13274[(8)]);var inst_13255 = (state_13274[(11)]);var inst_13257 = cljs.core.async.muxch_STAR_.call(null,inst_13255);var state_13274__$1 = state_13274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13274__$1,(22),inst_13257,inst_13205);
} else
{if((state_val_13275 === (11)))
{var inst_13229 = (state_13274[(10)]);var inst_13215 = (state_13274[(15)]);var inst_13229__$1 = cljs.core.seq.call(null,inst_13215);var state_13274__$1 = (function (){var statearr_13298 = state_13274;(statearr_13298[(10)] = inst_13229__$1);
return statearr_13298;
})();if(inst_13229__$1)
{var statearr_13299_13341 = state_13274__$1;(statearr_13299_13341[(1)] = (13));
} else
{var statearr_13300_13342 = state_13274__$1;(statearr_13300_13342[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (9)))
{var inst_13251 = (state_13274[(2)]);var state_13274__$1 = state_13274;var statearr_13301_13343 = state_13274__$1;(statearr_13301_13343[(2)] = inst_13251);
(statearr_13301_13343[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (5)))
{var inst_13212 = cljs.core.deref.call(null,mults);var inst_13213 = cljs.core.vals.call(null,inst_13212);var inst_13214 = cljs.core.seq.call(null,inst_13213);var inst_13215 = inst_13214;var inst_13216 = null;var inst_13217 = (0);var inst_13218 = (0);var state_13274__$1 = (function (){var statearr_13302 = state_13274;(statearr_13302[(12)] = inst_13216);
(statearr_13302[(13)] = inst_13218);
(statearr_13302[(15)] = inst_13215);
(statearr_13302[(16)] = inst_13217);
return statearr_13302;
})();var statearr_13303_13344 = state_13274__$1;(statearr_13303_13344[(2)] = null);
(statearr_13303_13344[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (14)))
{var state_13274__$1 = state_13274;var statearr_13307_13345 = state_13274__$1;(statearr_13307_13345[(2)] = null);
(statearr_13307_13345[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (16)))
{var inst_13229 = (state_13274[(10)]);var inst_13233 = cljs.core.chunk_first.call(null,inst_13229);var inst_13234 = cljs.core.chunk_rest.call(null,inst_13229);var inst_13235 = cljs.core.count.call(null,inst_13233);var inst_13215 = inst_13234;var inst_13216 = inst_13233;var inst_13217 = inst_13235;var inst_13218 = (0);var state_13274__$1 = (function (){var statearr_13308 = state_13274;(statearr_13308[(12)] = inst_13216);
(statearr_13308[(13)] = inst_13218);
(statearr_13308[(15)] = inst_13215);
(statearr_13308[(16)] = inst_13217);
return statearr_13308;
})();var statearr_13309_13346 = state_13274__$1;(statearr_13309_13346[(2)] = null);
(statearr_13309_13346[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (10)))
{var inst_13216 = (state_13274[(12)]);var inst_13218 = (state_13274[(13)]);var inst_13215 = (state_13274[(15)]);var inst_13217 = (state_13274[(16)]);var inst_13223 = cljs.core._nth.call(null,inst_13216,inst_13218);var inst_13224 = cljs.core.async.muxch_STAR_.call(null,inst_13223);var inst_13225 = cljs.core.async.close_BANG_.call(null,inst_13224);var inst_13226 = (inst_13218 + (1));var tmp13304 = inst_13216;var tmp13305 = inst_13215;var tmp13306 = inst_13217;var inst_13215__$1 = tmp13305;var inst_13216__$1 = tmp13304;var inst_13217__$1 = tmp13306;var inst_13218__$1 = inst_13226;var state_13274__$1 = (function (){var statearr_13310 = state_13274;(statearr_13310[(12)] = inst_13216__$1);
(statearr_13310[(17)] = inst_13225);
(statearr_13310[(13)] = inst_13218__$1);
(statearr_13310[(15)] = inst_13215__$1);
(statearr_13310[(16)] = inst_13217__$1);
return statearr_13310;
})();var statearr_13311_13347 = state_13274__$1;(statearr_13311_13347[(2)] = null);
(statearr_13311_13347[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (18)))
{var inst_13244 = (state_13274[(2)]);var state_13274__$1 = state_13274;var statearr_13312_13348 = state_13274__$1;(statearr_13312_13348[(2)] = inst_13244);
(statearr_13312_13348[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13275 === (8)))
{var inst_13218 = (state_13274[(13)]);var inst_13217 = (state_13274[(16)]);var inst_13220 = (inst_13218 < inst_13217);var inst_13221 = inst_13220;var state_13274__$1 = state_13274;if(cljs.core.truth_(inst_13221))
{var statearr_13313_13349 = state_13274__$1;(statearr_13313_13349[(1)] = (10));
} else
{var statearr_13314_13350 = state_13274__$1;(statearr_13314_13350[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___13322,mults,ensure_mult,p))
;return ((function (switch__7437__auto__,c__7452__auto___13322,mults,ensure_mult,p){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_13318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13318[(0)] = state_machine__7438__auto__);
(statearr_13318[(1)] = (1));
return statearr_13318;
});
var state_machine__7438__auto____1 = (function (state_13274){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_13274);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e13319){if((e13319 instanceof Object))
{var ex__7441__auto__ = e13319;var statearr_13320_13351 = state_13274;(statearr_13320_13351[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13319;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13352 = state_13274;
state_13274 = G__13352;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_13274){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_13274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___13322,mults,ensure_mult,p))
})();var state__7454__auto__ = (function (){var statearr_13321 = f__7453__auto__.call(null);(statearr_13321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___13322);
return statearr_13321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___13322,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7452__auto___13489 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___13489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___13489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13459){var state_val_13460 = (state_13459[(1)]);if((state_val_13460 === (7)))
{var state_13459__$1 = state_13459;var statearr_13461_13490 = state_13459__$1;(statearr_13461_13490[(2)] = null);
(statearr_13461_13490[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (1)))
{var state_13459__$1 = state_13459;var statearr_13462_13491 = state_13459__$1;(statearr_13462_13491[(2)] = null);
(statearr_13462_13491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (4)))
{var inst_13423 = (state_13459[(7)]);var inst_13425 = (inst_13423 < cnt);var state_13459__$1 = state_13459;if(cljs.core.truth_(inst_13425))
{var statearr_13463_13492 = state_13459__$1;(statearr_13463_13492[(1)] = (6));
} else
{var statearr_13464_13493 = state_13459__$1;(statearr_13464_13493[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (15)))
{var inst_13455 = (state_13459[(2)]);var state_13459__$1 = state_13459;var statearr_13465_13494 = state_13459__$1;(statearr_13465_13494[(2)] = inst_13455);
(statearr_13465_13494[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (13)))
{var inst_13448 = cljs.core.async.close_BANG_.call(null,out);var state_13459__$1 = state_13459;var statearr_13466_13495 = state_13459__$1;(statearr_13466_13495[(2)] = inst_13448);
(statearr_13466_13495[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (6)))
{var state_13459__$1 = state_13459;var statearr_13467_13496 = state_13459__$1;(statearr_13467_13496[(2)] = null);
(statearr_13467_13496[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (3)))
{var inst_13457 = (state_13459[(2)]);var state_13459__$1 = state_13459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13459__$1,inst_13457);
} else
{if((state_val_13460 === (12)))
{var inst_13445 = (state_13459[(8)]);var inst_13445__$1 = (state_13459[(2)]);var inst_13446 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13445__$1);var state_13459__$1 = (function (){var statearr_13468 = state_13459;(statearr_13468[(8)] = inst_13445__$1);
return statearr_13468;
})();if(cljs.core.truth_(inst_13446))
{var statearr_13469_13497 = state_13459__$1;(statearr_13469_13497[(1)] = (13));
} else
{var statearr_13470_13498 = state_13459__$1;(statearr_13470_13498[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (2)))
{var inst_13422 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13423 = (0);var state_13459__$1 = (function (){var statearr_13471 = state_13459;(statearr_13471[(7)] = inst_13423);
(statearr_13471[(9)] = inst_13422);
return statearr_13471;
})();var statearr_13472_13499 = state_13459__$1;(statearr_13472_13499[(2)] = null);
(statearr_13472_13499[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (11)))
{var inst_13423 = (state_13459[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13459,(10),Object,null,(9));var inst_13432 = chs__$1.call(null,inst_13423);var inst_13433 = done.call(null,inst_13423);var inst_13434 = cljs.core.async.take_BANG_.call(null,inst_13432,inst_13433);var state_13459__$1 = state_13459;var statearr_13473_13500 = state_13459__$1;(statearr_13473_13500[(2)] = inst_13434);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13459__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (9)))
{var inst_13423 = (state_13459[(7)]);var inst_13436 = (state_13459[(2)]);var inst_13437 = (inst_13423 + (1));var inst_13423__$1 = inst_13437;var state_13459__$1 = (function (){var statearr_13474 = state_13459;(statearr_13474[(7)] = inst_13423__$1);
(statearr_13474[(10)] = inst_13436);
return statearr_13474;
})();var statearr_13475_13501 = state_13459__$1;(statearr_13475_13501[(2)] = null);
(statearr_13475_13501[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (5)))
{var inst_13443 = (state_13459[(2)]);var state_13459__$1 = (function (){var statearr_13476 = state_13459;(statearr_13476[(11)] = inst_13443);
return statearr_13476;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13459__$1,(12),dchan);
} else
{if((state_val_13460 === (14)))
{var inst_13445 = (state_13459[(8)]);var inst_13450 = cljs.core.apply.call(null,f,inst_13445);var state_13459__$1 = state_13459;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13459__$1,(16),out,inst_13450);
} else
{if((state_val_13460 === (16)))
{var inst_13452 = (state_13459[(2)]);var state_13459__$1 = (function (){var statearr_13477 = state_13459;(statearr_13477[(12)] = inst_13452);
return statearr_13477;
})();var statearr_13478_13502 = state_13459__$1;(statearr_13478_13502[(2)] = null);
(statearr_13478_13502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (10)))
{var inst_13427 = (state_13459[(2)]);var inst_13428 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13459__$1 = (function (){var statearr_13479 = state_13459;(statearr_13479[(13)] = inst_13427);
return statearr_13479;
})();var statearr_13480_13503 = state_13459__$1;(statearr_13480_13503[(2)] = inst_13428);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13459__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13460 === (8)))
{var inst_13441 = (state_13459[(2)]);var state_13459__$1 = state_13459;var statearr_13481_13504 = state_13459__$1;(statearr_13481_13504[(2)] = inst_13441);
(statearr_13481_13504[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___13489,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7437__auto__,c__7452__auto___13489,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_13485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13485[(0)] = state_machine__7438__auto__);
(statearr_13485[(1)] = (1));
return statearr_13485;
});
var state_machine__7438__auto____1 = (function (state_13459){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_13459);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e13486){if((e13486 instanceof Object))
{var ex__7441__auto__ = e13486;var statearr_13487_13505 = state_13459;(statearr_13487_13505[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13459);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13486;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13506 = state_13459;
state_13459 = G__13506;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_13459){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_13459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___13489,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7454__auto__ = (function (){var statearr_13488 = f__7453__auto__.call(null);(statearr_13488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___13489);
return statearr_13488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___13489,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7452__auto___13614 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___13614,out){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___13614,out){
return (function (state_13590){var state_val_13591 = (state_13590[(1)]);if((state_val_13591 === (7)))
{var inst_13569 = (state_13590[(7)]);var inst_13570 = (state_13590[(8)]);var inst_13569__$1 = (state_13590[(2)]);var inst_13570__$1 = cljs.core.nth.call(null,inst_13569__$1,(0),null);var inst_13571 = cljs.core.nth.call(null,inst_13569__$1,(1),null);var inst_13572 = (inst_13570__$1 == null);var state_13590__$1 = (function (){var statearr_13592 = state_13590;(statearr_13592[(7)] = inst_13569__$1);
(statearr_13592[(9)] = inst_13571);
(statearr_13592[(8)] = inst_13570__$1);
return statearr_13592;
})();if(cljs.core.truth_(inst_13572))
{var statearr_13593_13615 = state_13590__$1;(statearr_13593_13615[(1)] = (8));
} else
{var statearr_13594_13616 = state_13590__$1;(statearr_13594_13616[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13591 === (1)))
{var inst_13561 = cljs.core.vec.call(null,chs);var inst_13562 = inst_13561;var state_13590__$1 = (function (){var statearr_13595 = state_13590;(statearr_13595[(10)] = inst_13562);
return statearr_13595;
})();var statearr_13596_13617 = state_13590__$1;(statearr_13596_13617[(2)] = null);
(statearr_13596_13617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13591 === (4)))
{var inst_13562 = (state_13590[(10)]);var state_13590__$1 = state_13590;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13590__$1,(7),inst_13562);
} else
{if((state_val_13591 === (6)))
{var inst_13586 = (state_13590[(2)]);var state_13590__$1 = state_13590;var statearr_13597_13618 = state_13590__$1;(statearr_13597_13618[(2)] = inst_13586);
(statearr_13597_13618[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13591 === (3)))
{var inst_13588 = (state_13590[(2)]);var state_13590__$1 = state_13590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13590__$1,inst_13588);
} else
{if((state_val_13591 === (2)))
{var inst_13562 = (state_13590[(10)]);var inst_13564 = cljs.core.count.call(null,inst_13562);var inst_13565 = (inst_13564 > (0));var state_13590__$1 = state_13590;if(cljs.core.truth_(inst_13565))
{var statearr_13599_13619 = state_13590__$1;(statearr_13599_13619[(1)] = (4));
} else
{var statearr_13600_13620 = state_13590__$1;(statearr_13600_13620[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13591 === (11)))
{var inst_13562 = (state_13590[(10)]);var inst_13579 = (state_13590[(2)]);var tmp13598 = inst_13562;var inst_13562__$1 = tmp13598;var state_13590__$1 = (function (){var statearr_13601 = state_13590;(statearr_13601[(11)] = inst_13579);
(statearr_13601[(10)] = inst_13562__$1);
return statearr_13601;
})();var statearr_13602_13621 = state_13590__$1;(statearr_13602_13621[(2)] = null);
(statearr_13602_13621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13591 === (9)))
{var inst_13570 = (state_13590[(8)]);var state_13590__$1 = state_13590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13590__$1,(11),out,inst_13570);
} else
{if((state_val_13591 === (5)))
{var inst_13584 = cljs.core.async.close_BANG_.call(null,out);var state_13590__$1 = state_13590;var statearr_13603_13622 = state_13590__$1;(statearr_13603_13622[(2)] = inst_13584);
(statearr_13603_13622[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13591 === (10)))
{var inst_13582 = (state_13590[(2)]);var state_13590__$1 = state_13590;var statearr_13604_13623 = state_13590__$1;(statearr_13604_13623[(2)] = inst_13582);
(statearr_13604_13623[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13591 === (8)))
{var inst_13569 = (state_13590[(7)]);var inst_13571 = (state_13590[(9)]);var inst_13562 = (state_13590[(10)]);var inst_13570 = (state_13590[(8)]);var inst_13574 = (function (){var c = inst_13571;var v = inst_13570;var vec__13567 = inst_13569;var cs = inst_13562;return ((function (c,v,vec__13567,cs,inst_13569,inst_13571,inst_13562,inst_13570,state_val_13591,c__7452__auto___13614,out){
return (function (p1__13507_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13507_SHARP_);
});
;})(c,v,vec__13567,cs,inst_13569,inst_13571,inst_13562,inst_13570,state_val_13591,c__7452__auto___13614,out))
})();var inst_13575 = cljs.core.filterv.call(null,inst_13574,inst_13562);var inst_13562__$1 = inst_13575;var state_13590__$1 = (function (){var statearr_13605 = state_13590;(statearr_13605[(10)] = inst_13562__$1);
return statearr_13605;
})();var statearr_13606_13624 = state_13590__$1;(statearr_13606_13624[(2)] = null);
(statearr_13606_13624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___13614,out))
;return ((function (switch__7437__auto__,c__7452__auto___13614,out){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_13610 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13610[(0)] = state_machine__7438__auto__);
(statearr_13610[(1)] = (1));
return statearr_13610;
});
var state_machine__7438__auto____1 = (function (state_13590){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_13590);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e13611){if((e13611 instanceof Object))
{var ex__7441__auto__ = e13611;var statearr_13612_13625 = state_13590;(statearr_13612_13625[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13611;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13626 = state_13590;
state_13590 = G__13626;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_13590){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_13590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___13614,out))
})();var state__7454__auto__ = (function (){var statearr_13613 = f__7453__auto__.call(null);(statearr_13613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___13614);
return statearr_13613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___13614,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7452__auto___13719 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___13719,out){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___13719,out){
return (function (state_13696){var state_val_13697 = (state_13696[(1)]);if((state_val_13697 === (7)))
{var inst_13678 = (state_13696[(7)]);var inst_13678__$1 = (state_13696[(2)]);var inst_13679 = (inst_13678__$1 == null);var inst_13680 = cljs.core.not.call(null,inst_13679);var state_13696__$1 = (function (){var statearr_13698 = state_13696;(statearr_13698[(7)] = inst_13678__$1);
return statearr_13698;
})();if(inst_13680)
{var statearr_13699_13720 = state_13696__$1;(statearr_13699_13720[(1)] = (8));
} else
{var statearr_13700_13721 = state_13696__$1;(statearr_13700_13721[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (1)))
{var inst_13673 = (0);var state_13696__$1 = (function (){var statearr_13701 = state_13696;(statearr_13701[(8)] = inst_13673);
return statearr_13701;
})();var statearr_13702_13722 = state_13696__$1;(statearr_13702_13722[(2)] = null);
(statearr_13702_13722[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (4)))
{var state_13696__$1 = state_13696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13696__$1,(7),ch);
} else
{if((state_val_13697 === (6)))
{var inst_13691 = (state_13696[(2)]);var state_13696__$1 = state_13696;var statearr_13703_13723 = state_13696__$1;(statearr_13703_13723[(2)] = inst_13691);
(statearr_13703_13723[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (3)))
{var inst_13693 = (state_13696[(2)]);var inst_13694 = cljs.core.async.close_BANG_.call(null,out);var state_13696__$1 = (function (){var statearr_13704 = state_13696;(statearr_13704[(9)] = inst_13693);
return statearr_13704;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13696__$1,inst_13694);
} else
{if((state_val_13697 === (2)))
{var inst_13673 = (state_13696[(8)]);var inst_13675 = (inst_13673 < n);var state_13696__$1 = state_13696;if(cljs.core.truth_(inst_13675))
{var statearr_13705_13724 = state_13696__$1;(statearr_13705_13724[(1)] = (4));
} else
{var statearr_13706_13725 = state_13696__$1;(statearr_13706_13725[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (11)))
{var inst_13673 = (state_13696[(8)]);var inst_13683 = (state_13696[(2)]);var inst_13684 = (inst_13673 + (1));var inst_13673__$1 = inst_13684;var state_13696__$1 = (function (){var statearr_13707 = state_13696;(statearr_13707[(10)] = inst_13683);
(statearr_13707[(8)] = inst_13673__$1);
return statearr_13707;
})();var statearr_13708_13726 = state_13696__$1;(statearr_13708_13726[(2)] = null);
(statearr_13708_13726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (9)))
{var state_13696__$1 = state_13696;var statearr_13709_13727 = state_13696__$1;(statearr_13709_13727[(2)] = null);
(statearr_13709_13727[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (5)))
{var state_13696__$1 = state_13696;var statearr_13710_13728 = state_13696__$1;(statearr_13710_13728[(2)] = null);
(statearr_13710_13728[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (10)))
{var inst_13688 = (state_13696[(2)]);var state_13696__$1 = state_13696;var statearr_13711_13729 = state_13696__$1;(statearr_13711_13729[(2)] = inst_13688);
(statearr_13711_13729[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (8)))
{var inst_13678 = (state_13696[(7)]);var state_13696__$1 = state_13696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13696__$1,(11),out,inst_13678);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___13719,out))
;return ((function (switch__7437__auto__,c__7452__auto___13719,out){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_13715 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13715[(0)] = state_machine__7438__auto__);
(statearr_13715[(1)] = (1));
return statearr_13715;
});
var state_machine__7438__auto____1 = (function (state_13696){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_13696);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e13716){if((e13716 instanceof Object))
{var ex__7441__auto__ = e13716;var statearr_13717_13730 = state_13696;(statearr_13717_13730[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13716;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13731 = state_13696;
state_13696 = G__13731;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_13696){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_13696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___13719,out))
})();var state__7454__auto__ = (function (){var statearr_13718 = f__7453__auto__.call(null);(statearr_13718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___13719);
return statearr_13718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___13719,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13739 = (function (ch,f,map_LT_,meta13740){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13740 = meta13740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13739.cljs$lang$type = true;
cljs.core.async.t13739.cljs$lang$ctorStr = "cljs.core.async/t13739";
cljs.core.async.t13739.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13739");
});
cljs.core.async.t13739.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13739.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13742 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13742 = (function (fn1,_,meta13740,ch,f,map_LT_,meta13743){
this.fn1 = fn1;
this._ = _;
this.meta13740 = meta13740;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13743 = meta13743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13742.cljs$lang$type = true;
cljs.core.async.t13742.cljs$lang$ctorStr = "cljs.core.async/t13742";
cljs.core.async.t13742.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13742");
});})(___$1))
;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13732_SHARP_){return f1.call(null,(((p1__13732_SHARP_ == null))?null:self__.f.call(null,p1__13732_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13744){var self__ = this;
var _13744__$1 = this;return self__.meta13743;
});})(___$1))
;
cljs.core.async.t13742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13744,meta13743__$1){var self__ = this;
var _13744__$1 = this;return (new cljs.core.async.t13742(self__.fn1,self__._,self__.meta13740,self__.ch,self__.f,self__.map_LT_,meta13743__$1));
});})(___$1))
;
cljs.core.async.__GT_t13742 = ((function (___$1){
return (function __GT_t13742(fn1__$1,___$2,meta13740__$1,ch__$2,f__$2,map_LT___$2,meta13743){return (new cljs.core.async.t13742(fn1__$1,___$2,meta13740__$1,ch__$2,f__$2,map_LT___$2,meta13743));
});})(___$1))
;
}
return (new cljs.core.async.t13742(fn1,___$1,self__.meta13740,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3597__auto__ = ret;if(cljs.core.truth_(and__3597__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3597__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13739.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13739.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13741){var self__ = this;
var _13741__$1 = this;return self__.meta13740;
});
cljs.core.async.t13739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13741,meta13740__$1){var self__ = this;
var _13741__$1 = this;return (new cljs.core.async.t13739(self__.ch,self__.f,self__.map_LT_,meta13740__$1));
});
cljs.core.async.__GT_t13739 = (function __GT_t13739(ch__$1,f__$1,map_LT___$1,meta13740){return (new cljs.core.async.t13739(ch__$1,f__$1,map_LT___$1,meta13740));
});
}
return (new cljs.core.async.t13739(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13748 = (function (ch,f,map_GT_,meta13749){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13749 = meta13749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13748.cljs$lang$type = true;
cljs.core.async.t13748.cljs$lang$ctorStr = "cljs.core.async/t13748";
cljs.core.async.t13748.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13748");
});
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13750){var self__ = this;
var _13750__$1 = this;return self__.meta13749;
});
cljs.core.async.t13748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13750,meta13749__$1){var self__ = this;
var _13750__$1 = this;return (new cljs.core.async.t13748(self__.ch,self__.f,self__.map_GT_,meta13749__$1));
});
cljs.core.async.__GT_t13748 = (function __GT_t13748(ch__$1,f__$1,map_GT___$1,meta13749){return (new cljs.core.async.t13748(ch__$1,f__$1,map_GT___$1,meta13749));
});
}
return (new cljs.core.async.t13748(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13754 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13754 = (function (ch,p,filter_GT_,meta13755){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13755 = meta13755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13754.cljs$lang$type = true;
cljs.core.async.t13754.cljs$lang$ctorStr = "cljs.core.async/t13754";
cljs.core.async.t13754.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13754");
});
cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13756){var self__ = this;
var _13756__$1 = this;return self__.meta13755;
});
cljs.core.async.t13754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13756,meta13755__$1){var self__ = this;
var _13756__$1 = this;return (new cljs.core.async.t13754(self__.ch,self__.p,self__.filter_GT_,meta13755__$1));
});
cljs.core.async.__GT_t13754 = (function __GT_t13754(ch__$1,p__$1,filter_GT___$1,meta13755){return (new cljs.core.async.t13754(ch__$1,p__$1,filter_GT___$1,meta13755));
});
}
return (new cljs.core.async.t13754(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7452__auto___13839 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___13839,out){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___13839,out){
return (function (state_13818){var state_val_13819 = (state_13818[(1)]);if((state_val_13819 === (7)))
{var inst_13814 = (state_13818[(2)]);var state_13818__$1 = state_13818;var statearr_13820_13840 = state_13818__$1;(statearr_13820_13840[(2)] = inst_13814);
(statearr_13820_13840[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (1)))
{var state_13818__$1 = state_13818;var statearr_13821_13841 = state_13818__$1;(statearr_13821_13841[(2)] = null);
(statearr_13821_13841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (4)))
{var inst_13800 = (state_13818[(7)]);var inst_13800__$1 = (state_13818[(2)]);var inst_13801 = (inst_13800__$1 == null);var state_13818__$1 = (function (){var statearr_13822 = state_13818;(statearr_13822[(7)] = inst_13800__$1);
return statearr_13822;
})();if(cljs.core.truth_(inst_13801))
{var statearr_13823_13842 = state_13818__$1;(statearr_13823_13842[(1)] = (5));
} else
{var statearr_13824_13843 = state_13818__$1;(statearr_13824_13843[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (6)))
{var inst_13800 = (state_13818[(7)]);var inst_13805 = p.call(null,inst_13800);var state_13818__$1 = state_13818;if(cljs.core.truth_(inst_13805))
{var statearr_13825_13844 = state_13818__$1;(statearr_13825_13844[(1)] = (8));
} else
{var statearr_13826_13845 = state_13818__$1;(statearr_13826_13845[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (3)))
{var inst_13816 = (state_13818[(2)]);var state_13818__$1 = state_13818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13818__$1,inst_13816);
} else
{if((state_val_13819 === (2)))
{var state_13818__$1 = state_13818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13818__$1,(4),ch);
} else
{if((state_val_13819 === (11)))
{var inst_13808 = (state_13818[(2)]);var state_13818__$1 = state_13818;var statearr_13827_13846 = state_13818__$1;(statearr_13827_13846[(2)] = inst_13808);
(statearr_13827_13846[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (9)))
{var state_13818__$1 = state_13818;var statearr_13828_13847 = state_13818__$1;(statearr_13828_13847[(2)] = null);
(statearr_13828_13847[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (5)))
{var inst_13803 = cljs.core.async.close_BANG_.call(null,out);var state_13818__$1 = state_13818;var statearr_13829_13848 = state_13818__$1;(statearr_13829_13848[(2)] = inst_13803);
(statearr_13829_13848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (10)))
{var inst_13811 = (state_13818[(2)]);var state_13818__$1 = (function (){var statearr_13830 = state_13818;(statearr_13830[(8)] = inst_13811);
return statearr_13830;
})();var statearr_13831_13849 = state_13818__$1;(statearr_13831_13849[(2)] = null);
(statearr_13831_13849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (8)))
{var inst_13800 = (state_13818[(7)]);var state_13818__$1 = state_13818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13818__$1,(11),out,inst_13800);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___13839,out))
;return ((function (switch__7437__auto__,c__7452__auto___13839,out){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_13835 = [null,null,null,null,null,null,null,null,null];(statearr_13835[(0)] = state_machine__7438__auto__);
(statearr_13835[(1)] = (1));
return statearr_13835;
});
var state_machine__7438__auto____1 = (function (state_13818){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_13818);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e13836){if((e13836 instanceof Object))
{var ex__7441__auto__ = e13836;var statearr_13837_13850 = state_13818;(statearr_13837_13850[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13836;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13851 = state_13818;
state_13818 = G__13851;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_13818){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_13818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___13839,out))
})();var state__7454__auto__ = (function (){var statearr_13838 = f__7453__auto__.call(null);(statearr_13838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___13839);
return statearr_13838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___13839,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto__){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto__){
return (function (state_14017){var state_val_14018 = (state_14017[(1)]);if((state_val_14018 === (7)))
{var inst_14013 = (state_14017[(2)]);var state_14017__$1 = state_14017;var statearr_14019_14060 = state_14017__$1;(statearr_14019_14060[(2)] = inst_14013);
(statearr_14019_14060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (20)))
{var inst_13983 = (state_14017[(7)]);var inst_13994 = (state_14017[(2)]);var inst_13995 = cljs.core.next.call(null,inst_13983);var inst_13969 = inst_13995;var inst_13970 = null;var inst_13971 = (0);var inst_13972 = (0);var state_14017__$1 = (function (){var statearr_14020 = state_14017;(statearr_14020[(8)] = inst_13994);
(statearr_14020[(9)] = inst_13970);
(statearr_14020[(10)] = inst_13972);
(statearr_14020[(11)] = inst_13969);
(statearr_14020[(12)] = inst_13971);
return statearr_14020;
})();var statearr_14021_14061 = state_14017__$1;(statearr_14021_14061[(2)] = null);
(statearr_14021_14061[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (1)))
{var state_14017__$1 = state_14017;var statearr_14022_14062 = state_14017__$1;(statearr_14022_14062[(2)] = null);
(statearr_14022_14062[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (4)))
{var inst_13958 = (state_14017[(13)]);var inst_13958__$1 = (state_14017[(2)]);var inst_13959 = (inst_13958__$1 == null);var state_14017__$1 = (function (){var statearr_14023 = state_14017;(statearr_14023[(13)] = inst_13958__$1);
return statearr_14023;
})();if(cljs.core.truth_(inst_13959))
{var statearr_14024_14063 = state_14017__$1;(statearr_14024_14063[(1)] = (5));
} else
{var statearr_14025_14064 = state_14017__$1;(statearr_14025_14064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (15)))
{var state_14017__$1 = state_14017;var statearr_14029_14065 = state_14017__$1;(statearr_14029_14065[(2)] = null);
(statearr_14029_14065[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (21)))
{var state_14017__$1 = state_14017;var statearr_14030_14066 = state_14017__$1;(statearr_14030_14066[(2)] = null);
(statearr_14030_14066[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (13)))
{var inst_13970 = (state_14017[(9)]);var inst_13972 = (state_14017[(10)]);var inst_13969 = (state_14017[(11)]);var inst_13971 = (state_14017[(12)]);var inst_13979 = (state_14017[(2)]);var inst_13980 = (inst_13972 + (1));var tmp14026 = inst_13970;var tmp14027 = inst_13969;var tmp14028 = inst_13971;var inst_13969__$1 = tmp14027;var inst_13970__$1 = tmp14026;var inst_13971__$1 = tmp14028;var inst_13972__$1 = inst_13980;var state_14017__$1 = (function (){var statearr_14031 = state_14017;(statearr_14031[(9)] = inst_13970__$1);
(statearr_14031[(10)] = inst_13972__$1);
(statearr_14031[(11)] = inst_13969__$1);
(statearr_14031[(14)] = inst_13979);
(statearr_14031[(12)] = inst_13971__$1);
return statearr_14031;
})();var statearr_14032_14067 = state_14017__$1;(statearr_14032_14067[(2)] = null);
(statearr_14032_14067[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (22)))
{var state_14017__$1 = state_14017;var statearr_14033_14068 = state_14017__$1;(statearr_14033_14068[(2)] = null);
(statearr_14033_14068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (6)))
{var inst_13958 = (state_14017[(13)]);var inst_13967 = f.call(null,inst_13958);var inst_13968 = cljs.core.seq.call(null,inst_13967);var inst_13969 = inst_13968;var inst_13970 = null;var inst_13971 = (0);var inst_13972 = (0);var state_14017__$1 = (function (){var statearr_14034 = state_14017;(statearr_14034[(9)] = inst_13970);
(statearr_14034[(10)] = inst_13972);
(statearr_14034[(11)] = inst_13969);
(statearr_14034[(12)] = inst_13971);
return statearr_14034;
})();var statearr_14035_14069 = state_14017__$1;(statearr_14035_14069[(2)] = null);
(statearr_14035_14069[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (17)))
{var inst_13983 = (state_14017[(7)]);var inst_13987 = cljs.core.chunk_first.call(null,inst_13983);var inst_13988 = cljs.core.chunk_rest.call(null,inst_13983);var inst_13989 = cljs.core.count.call(null,inst_13987);var inst_13969 = inst_13988;var inst_13970 = inst_13987;var inst_13971 = inst_13989;var inst_13972 = (0);var state_14017__$1 = (function (){var statearr_14036 = state_14017;(statearr_14036[(9)] = inst_13970);
(statearr_14036[(10)] = inst_13972);
(statearr_14036[(11)] = inst_13969);
(statearr_14036[(12)] = inst_13971);
return statearr_14036;
})();var statearr_14037_14070 = state_14017__$1;(statearr_14037_14070[(2)] = null);
(statearr_14037_14070[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (3)))
{var inst_14015 = (state_14017[(2)]);var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14017__$1,inst_14015);
} else
{if((state_val_14018 === (12)))
{var inst_14003 = (state_14017[(2)]);var state_14017__$1 = state_14017;var statearr_14038_14071 = state_14017__$1;(statearr_14038_14071[(2)] = inst_14003);
(statearr_14038_14071[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (2)))
{var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14017__$1,(4),in$);
} else
{if((state_val_14018 === (23)))
{var inst_14011 = (state_14017[(2)]);var state_14017__$1 = state_14017;var statearr_14039_14072 = state_14017__$1;(statearr_14039_14072[(2)] = inst_14011);
(statearr_14039_14072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (19)))
{var inst_13998 = (state_14017[(2)]);var state_14017__$1 = state_14017;var statearr_14040_14073 = state_14017__$1;(statearr_14040_14073[(2)] = inst_13998);
(statearr_14040_14073[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (11)))
{var inst_13969 = (state_14017[(11)]);var inst_13983 = (state_14017[(7)]);var inst_13983__$1 = cljs.core.seq.call(null,inst_13969);var state_14017__$1 = (function (){var statearr_14041 = state_14017;(statearr_14041[(7)] = inst_13983__$1);
return statearr_14041;
})();if(inst_13983__$1)
{var statearr_14042_14074 = state_14017__$1;(statearr_14042_14074[(1)] = (14));
} else
{var statearr_14043_14075 = state_14017__$1;(statearr_14043_14075[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (9)))
{var inst_14005 = (state_14017[(2)]);var inst_14006 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14017__$1 = (function (){var statearr_14044 = state_14017;(statearr_14044[(15)] = inst_14005);
return statearr_14044;
})();if(cljs.core.truth_(inst_14006))
{var statearr_14045_14076 = state_14017__$1;(statearr_14045_14076[(1)] = (21));
} else
{var statearr_14046_14077 = state_14017__$1;(statearr_14046_14077[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (5)))
{var inst_13961 = cljs.core.async.close_BANG_.call(null,out);var state_14017__$1 = state_14017;var statearr_14047_14078 = state_14017__$1;(statearr_14047_14078[(2)] = inst_13961);
(statearr_14047_14078[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (14)))
{var inst_13983 = (state_14017[(7)]);var inst_13985 = cljs.core.chunked_seq_QMARK_.call(null,inst_13983);var state_14017__$1 = state_14017;if(inst_13985)
{var statearr_14048_14079 = state_14017__$1;(statearr_14048_14079[(1)] = (17));
} else
{var statearr_14049_14080 = state_14017__$1;(statearr_14049_14080[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (16)))
{var inst_14001 = (state_14017[(2)]);var state_14017__$1 = state_14017;var statearr_14050_14081 = state_14017__$1;(statearr_14050_14081[(2)] = inst_14001);
(statearr_14050_14081[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14018 === (10)))
{var inst_13970 = (state_14017[(9)]);var inst_13972 = (state_14017[(10)]);var inst_13977 = cljs.core._nth.call(null,inst_13970,inst_13972);var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14017__$1,(13),out,inst_13977);
} else
{if((state_val_14018 === (18)))
{var inst_13983 = (state_14017[(7)]);var inst_13992 = cljs.core.first.call(null,inst_13983);var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14017__$1,(20),out,inst_13992);
} else
{if((state_val_14018 === (8)))
{var inst_13972 = (state_14017[(10)]);var inst_13971 = (state_14017[(12)]);var inst_13974 = (inst_13972 < inst_13971);var inst_13975 = inst_13974;var state_14017__$1 = state_14017;if(cljs.core.truth_(inst_13975))
{var statearr_14051_14082 = state_14017__$1;(statearr_14051_14082[(1)] = (10));
} else
{var statearr_14052_14083 = state_14017__$1;(statearr_14052_14083[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto__))
;return ((function (switch__7437__auto__,c__7452__auto__){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_14056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14056[(0)] = state_machine__7438__auto__);
(statearr_14056[(1)] = (1));
return statearr_14056;
});
var state_machine__7438__auto____1 = (function (state_14017){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_14017);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e14057){if((e14057 instanceof Object))
{var ex__7441__auto__ = e14057;var statearr_14058_14084 = state_14017;(statearr_14058_14084[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14057;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14085 = state_14017;
state_14017 = G__14085;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_14017){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_14017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto__))
})();var state__7454__auto__ = (function (){var statearr_14059 = f__7453__auto__.call(null);(statearr_14059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto__);
return statearr_14059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto__))
);
return c__7452__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7452__auto___14182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___14182,out){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___14182,out){
return (function (state_14157){var state_val_14158 = (state_14157[(1)]);if((state_val_14158 === (7)))
{var inst_14152 = (state_14157[(2)]);var state_14157__$1 = state_14157;var statearr_14159_14183 = state_14157__$1;(statearr_14159_14183[(2)] = inst_14152);
(statearr_14159_14183[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14158 === (1)))
{var inst_14134 = null;var state_14157__$1 = (function (){var statearr_14160 = state_14157;(statearr_14160[(7)] = inst_14134);
return statearr_14160;
})();var statearr_14161_14184 = state_14157__$1;(statearr_14161_14184[(2)] = null);
(statearr_14161_14184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14158 === (4)))
{var inst_14137 = (state_14157[(8)]);var inst_14137__$1 = (state_14157[(2)]);var inst_14138 = (inst_14137__$1 == null);var inst_14139 = cljs.core.not.call(null,inst_14138);var state_14157__$1 = (function (){var statearr_14162 = state_14157;(statearr_14162[(8)] = inst_14137__$1);
return statearr_14162;
})();if(inst_14139)
{var statearr_14163_14185 = state_14157__$1;(statearr_14163_14185[(1)] = (5));
} else
{var statearr_14164_14186 = state_14157__$1;(statearr_14164_14186[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14158 === (6)))
{var state_14157__$1 = state_14157;var statearr_14165_14187 = state_14157__$1;(statearr_14165_14187[(2)] = null);
(statearr_14165_14187[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14158 === (3)))
{var inst_14154 = (state_14157[(2)]);var inst_14155 = cljs.core.async.close_BANG_.call(null,out);var state_14157__$1 = (function (){var statearr_14166 = state_14157;(statearr_14166[(9)] = inst_14154);
return statearr_14166;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14157__$1,inst_14155);
} else
{if((state_val_14158 === (2)))
{var state_14157__$1 = state_14157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14157__$1,(4),ch);
} else
{if((state_val_14158 === (11)))
{var inst_14137 = (state_14157[(8)]);var inst_14146 = (state_14157[(2)]);var inst_14134 = inst_14137;var state_14157__$1 = (function (){var statearr_14167 = state_14157;(statearr_14167[(10)] = inst_14146);
(statearr_14167[(7)] = inst_14134);
return statearr_14167;
})();var statearr_14168_14188 = state_14157__$1;(statearr_14168_14188[(2)] = null);
(statearr_14168_14188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14158 === (9)))
{var inst_14137 = (state_14157[(8)]);var state_14157__$1 = state_14157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14157__$1,(11),out,inst_14137);
} else
{if((state_val_14158 === (5)))
{var inst_14137 = (state_14157[(8)]);var inst_14134 = (state_14157[(7)]);var inst_14141 = cljs.core._EQ_.call(null,inst_14137,inst_14134);var state_14157__$1 = state_14157;if(inst_14141)
{var statearr_14170_14189 = state_14157__$1;(statearr_14170_14189[(1)] = (8));
} else
{var statearr_14171_14190 = state_14157__$1;(statearr_14171_14190[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14158 === (10)))
{var inst_14149 = (state_14157[(2)]);var state_14157__$1 = state_14157;var statearr_14172_14191 = state_14157__$1;(statearr_14172_14191[(2)] = inst_14149);
(statearr_14172_14191[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14158 === (8)))
{var inst_14134 = (state_14157[(7)]);var tmp14169 = inst_14134;var inst_14134__$1 = tmp14169;var state_14157__$1 = (function (){var statearr_14173 = state_14157;(statearr_14173[(7)] = inst_14134__$1);
return statearr_14173;
})();var statearr_14174_14192 = state_14157__$1;(statearr_14174_14192[(2)] = null);
(statearr_14174_14192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___14182,out))
;return ((function (switch__7437__auto__,c__7452__auto___14182,out){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_14178 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14178[(0)] = state_machine__7438__auto__);
(statearr_14178[(1)] = (1));
return statearr_14178;
});
var state_machine__7438__auto____1 = (function (state_14157){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_14157);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e14179){if((e14179 instanceof Object))
{var ex__7441__auto__ = e14179;var statearr_14180_14193 = state_14157;(statearr_14180_14193[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14194 = state_14157;
state_14157 = G__14194;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_14157){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_14157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___14182,out))
})();var state__7454__auto__ = (function (){var statearr_14181 = f__7453__auto__.call(null);(statearr_14181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___14182);
return statearr_14181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___14182,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7452__auto___14329 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___14329,out){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___14329,out){
return (function (state_14299){var state_val_14300 = (state_14299[(1)]);if((state_val_14300 === (7)))
{var inst_14295 = (state_14299[(2)]);var state_14299__$1 = state_14299;var statearr_14301_14330 = state_14299__$1;(statearr_14301_14330[(2)] = inst_14295);
(statearr_14301_14330[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (1)))
{var inst_14262 = (new Array(n));var inst_14263 = inst_14262;var inst_14264 = (0);var state_14299__$1 = (function (){var statearr_14302 = state_14299;(statearr_14302[(7)] = inst_14264);
(statearr_14302[(8)] = inst_14263);
return statearr_14302;
})();var statearr_14303_14331 = state_14299__$1;(statearr_14303_14331[(2)] = null);
(statearr_14303_14331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (4)))
{var inst_14267 = (state_14299[(9)]);var inst_14267__$1 = (state_14299[(2)]);var inst_14268 = (inst_14267__$1 == null);var inst_14269 = cljs.core.not.call(null,inst_14268);var state_14299__$1 = (function (){var statearr_14304 = state_14299;(statearr_14304[(9)] = inst_14267__$1);
return statearr_14304;
})();if(inst_14269)
{var statearr_14305_14332 = state_14299__$1;(statearr_14305_14332[(1)] = (5));
} else
{var statearr_14306_14333 = state_14299__$1;(statearr_14306_14333[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (15)))
{var inst_14289 = (state_14299[(2)]);var state_14299__$1 = state_14299;var statearr_14307_14334 = state_14299__$1;(statearr_14307_14334[(2)] = inst_14289);
(statearr_14307_14334[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (13)))
{var state_14299__$1 = state_14299;var statearr_14308_14335 = state_14299__$1;(statearr_14308_14335[(2)] = null);
(statearr_14308_14335[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (6)))
{var inst_14264 = (state_14299[(7)]);var inst_14285 = (inst_14264 > (0));var state_14299__$1 = state_14299;if(cljs.core.truth_(inst_14285))
{var statearr_14309_14336 = state_14299__$1;(statearr_14309_14336[(1)] = (12));
} else
{var statearr_14310_14337 = state_14299__$1;(statearr_14310_14337[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (3)))
{var inst_14297 = (state_14299[(2)]);var state_14299__$1 = state_14299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14299__$1,inst_14297);
} else
{if((state_val_14300 === (12)))
{var inst_14263 = (state_14299[(8)]);var inst_14287 = cljs.core.vec.call(null,inst_14263);var state_14299__$1 = state_14299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14299__$1,(15),out,inst_14287);
} else
{if((state_val_14300 === (2)))
{var state_14299__$1 = state_14299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14299__$1,(4),ch);
} else
{if((state_val_14300 === (11)))
{var inst_14279 = (state_14299[(2)]);var inst_14280 = (new Array(n));var inst_14263 = inst_14280;var inst_14264 = (0);var state_14299__$1 = (function (){var statearr_14311 = state_14299;(statearr_14311[(7)] = inst_14264);
(statearr_14311[(10)] = inst_14279);
(statearr_14311[(8)] = inst_14263);
return statearr_14311;
})();var statearr_14312_14338 = state_14299__$1;(statearr_14312_14338[(2)] = null);
(statearr_14312_14338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (9)))
{var inst_14263 = (state_14299[(8)]);var inst_14277 = cljs.core.vec.call(null,inst_14263);var state_14299__$1 = state_14299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14299__$1,(11),out,inst_14277);
} else
{if((state_val_14300 === (5)))
{var inst_14272 = (state_14299[(11)]);var inst_14264 = (state_14299[(7)]);var inst_14263 = (state_14299[(8)]);var inst_14267 = (state_14299[(9)]);var inst_14271 = (inst_14263[inst_14264] = inst_14267);var inst_14272__$1 = (inst_14264 + (1));var inst_14273 = (inst_14272__$1 < n);var state_14299__$1 = (function (){var statearr_14313 = state_14299;(statearr_14313[(11)] = inst_14272__$1);
(statearr_14313[(12)] = inst_14271);
return statearr_14313;
})();if(cljs.core.truth_(inst_14273))
{var statearr_14314_14339 = state_14299__$1;(statearr_14314_14339[(1)] = (8));
} else
{var statearr_14315_14340 = state_14299__$1;(statearr_14315_14340[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (14)))
{var inst_14292 = (state_14299[(2)]);var inst_14293 = cljs.core.async.close_BANG_.call(null,out);var state_14299__$1 = (function (){var statearr_14317 = state_14299;(statearr_14317[(13)] = inst_14292);
return statearr_14317;
})();var statearr_14318_14341 = state_14299__$1;(statearr_14318_14341[(2)] = inst_14293);
(statearr_14318_14341[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (10)))
{var inst_14283 = (state_14299[(2)]);var state_14299__$1 = state_14299;var statearr_14319_14342 = state_14299__$1;(statearr_14319_14342[(2)] = inst_14283);
(statearr_14319_14342[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14300 === (8)))
{var inst_14272 = (state_14299[(11)]);var inst_14263 = (state_14299[(8)]);var tmp14316 = inst_14263;var inst_14263__$1 = tmp14316;var inst_14264 = inst_14272;var state_14299__$1 = (function (){var statearr_14320 = state_14299;(statearr_14320[(7)] = inst_14264);
(statearr_14320[(8)] = inst_14263__$1);
return statearr_14320;
})();var statearr_14321_14343 = state_14299__$1;(statearr_14321_14343[(2)] = null);
(statearr_14321_14343[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___14329,out))
;return ((function (switch__7437__auto__,c__7452__auto___14329,out){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_14325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14325[(0)] = state_machine__7438__auto__);
(statearr_14325[(1)] = (1));
return statearr_14325;
});
var state_machine__7438__auto____1 = (function (state_14299){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_14299);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e14326){if((e14326 instanceof Object))
{var ex__7441__auto__ = e14326;var statearr_14327_14344 = state_14299;(statearr_14327_14344[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14299);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14326;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14345 = state_14299;
state_14299 = G__14345;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_14299){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_14299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___14329,out))
})();var state__7454__auto__ = (function (){var statearr_14328 = f__7453__auto__.call(null);(statearr_14328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___14329);
return statearr_14328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___14329,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7452__auto___14488 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7452__auto___14488,out){
return (function (){var f__7453__auto__ = (function (){var switch__7437__auto__ = ((function (c__7452__auto___14488,out){
return (function (state_14458){var state_val_14459 = (state_14458[(1)]);if((state_val_14459 === (7)))
{var inst_14454 = (state_14458[(2)]);var state_14458__$1 = state_14458;var statearr_14460_14489 = state_14458__$1;(statearr_14460_14489[(2)] = inst_14454);
(statearr_14460_14489[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (1)))
{var inst_14417 = [];var inst_14418 = inst_14417;var inst_14419 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14458__$1 = (function (){var statearr_14461 = state_14458;(statearr_14461[(7)] = inst_14419);
(statearr_14461[(8)] = inst_14418);
return statearr_14461;
})();var statearr_14462_14490 = state_14458__$1;(statearr_14462_14490[(2)] = null);
(statearr_14462_14490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (4)))
{var inst_14422 = (state_14458[(9)]);var inst_14422__$1 = (state_14458[(2)]);var inst_14423 = (inst_14422__$1 == null);var inst_14424 = cljs.core.not.call(null,inst_14423);var state_14458__$1 = (function (){var statearr_14463 = state_14458;(statearr_14463[(9)] = inst_14422__$1);
return statearr_14463;
})();if(inst_14424)
{var statearr_14464_14491 = state_14458__$1;(statearr_14464_14491[(1)] = (5));
} else
{var statearr_14465_14492 = state_14458__$1;(statearr_14465_14492[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (15)))
{var inst_14448 = (state_14458[(2)]);var state_14458__$1 = state_14458;var statearr_14466_14493 = state_14458__$1;(statearr_14466_14493[(2)] = inst_14448);
(statearr_14466_14493[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (13)))
{var state_14458__$1 = state_14458;var statearr_14467_14494 = state_14458__$1;(statearr_14467_14494[(2)] = null);
(statearr_14467_14494[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (6)))
{var inst_14418 = (state_14458[(8)]);var inst_14443 = inst_14418.length;var inst_14444 = (inst_14443 > (0));var state_14458__$1 = state_14458;if(cljs.core.truth_(inst_14444))
{var statearr_14468_14495 = state_14458__$1;(statearr_14468_14495[(1)] = (12));
} else
{var statearr_14469_14496 = state_14458__$1;(statearr_14469_14496[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (3)))
{var inst_14456 = (state_14458[(2)]);var state_14458__$1 = state_14458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14458__$1,inst_14456);
} else
{if((state_val_14459 === (12)))
{var inst_14418 = (state_14458[(8)]);var inst_14446 = cljs.core.vec.call(null,inst_14418);var state_14458__$1 = state_14458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14458__$1,(15),out,inst_14446);
} else
{if((state_val_14459 === (2)))
{var state_14458__$1 = state_14458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14458__$1,(4),ch);
} else
{if((state_val_14459 === (11)))
{var inst_14426 = (state_14458[(10)]);var inst_14422 = (state_14458[(9)]);var inst_14436 = (state_14458[(2)]);var inst_14437 = [];var inst_14438 = inst_14437.push(inst_14422);var inst_14418 = inst_14437;var inst_14419 = inst_14426;var state_14458__$1 = (function (){var statearr_14470 = state_14458;(statearr_14470[(11)] = inst_14436);
(statearr_14470[(7)] = inst_14419);
(statearr_14470[(12)] = inst_14438);
(statearr_14470[(8)] = inst_14418);
return statearr_14470;
})();var statearr_14471_14497 = state_14458__$1;(statearr_14471_14497[(2)] = null);
(statearr_14471_14497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (9)))
{var inst_14418 = (state_14458[(8)]);var inst_14434 = cljs.core.vec.call(null,inst_14418);var state_14458__$1 = state_14458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14458__$1,(11),out,inst_14434);
} else
{if((state_val_14459 === (5)))
{var inst_14426 = (state_14458[(10)]);var inst_14422 = (state_14458[(9)]);var inst_14419 = (state_14458[(7)]);var inst_14426__$1 = f.call(null,inst_14422);var inst_14427 = cljs.core._EQ_.call(null,inst_14426__$1,inst_14419);var inst_14428 = cljs.core.keyword_identical_QMARK_.call(null,inst_14419,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14429 = (inst_14427) || (inst_14428);var state_14458__$1 = (function (){var statearr_14472 = state_14458;(statearr_14472[(10)] = inst_14426__$1);
return statearr_14472;
})();if(cljs.core.truth_(inst_14429))
{var statearr_14473_14498 = state_14458__$1;(statearr_14473_14498[(1)] = (8));
} else
{var statearr_14474_14499 = state_14458__$1;(statearr_14474_14499[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (14)))
{var inst_14451 = (state_14458[(2)]);var inst_14452 = cljs.core.async.close_BANG_.call(null,out);var state_14458__$1 = (function (){var statearr_14476 = state_14458;(statearr_14476[(13)] = inst_14451);
return statearr_14476;
})();var statearr_14477_14500 = state_14458__$1;(statearr_14477_14500[(2)] = inst_14452);
(statearr_14477_14500[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (10)))
{var inst_14441 = (state_14458[(2)]);var state_14458__$1 = state_14458;var statearr_14478_14501 = state_14458__$1;(statearr_14478_14501[(2)] = inst_14441);
(statearr_14478_14501[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14459 === (8)))
{var inst_14426 = (state_14458[(10)]);var inst_14422 = (state_14458[(9)]);var inst_14418 = (state_14458[(8)]);var inst_14431 = inst_14418.push(inst_14422);var tmp14475 = inst_14418;var inst_14418__$1 = tmp14475;var inst_14419 = inst_14426;var state_14458__$1 = (function (){var statearr_14479 = state_14458;(statearr_14479[(7)] = inst_14419);
(statearr_14479[(14)] = inst_14431);
(statearr_14479[(8)] = inst_14418__$1);
return statearr_14479;
})();var statearr_14480_14502 = state_14458__$1;(statearr_14480_14502[(2)] = null);
(statearr_14480_14502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7452__auto___14488,out))
;return ((function (switch__7437__auto__,c__7452__auto___14488,out){
return (function() {
var state_machine__7438__auto__ = null;
var state_machine__7438__auto____0 = (function (){var statearr_14484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14484[(0)] = state_machine__7438__auto__);
(statearr_14484[(1)] = (1));
return statearr_14484;
});
var state_machine__7438__auto____1 = (function (state_14458){while(true){
var ret_value__7439__auto__ = (function (){try{while(true){
var result__7440__auto__ = switch__7437__auto__.call(null,state_14458);if(cljs.core.keyword_identical_QMARK_.call(null,result__7440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7440__auto__;
}
break;
}
}catch (e14485){if((e14485 instanceof Object))
{var ex__7441__auto__ = e14485;var statearr_14486_14503 = state_14458;(statearr_14486_14503[(5)] = ex__7441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14458);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14485;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14504 = state_14458;
state_14458 = G__14504;
continue;
}
} else
{return ret_value__7439__auto__;
}
break;
}
});
state_machine__7438__auto__ = function(state_14458){
switch(arguments.length){
case 0:
return state_machine__7438__auto____0.call(this);
case 1:
return state_machine__7438__auto____1.call(this,state_14458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7438__auto____0;
state_machine__7438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7438__auto____1;
return state_machine__7438__auto__;
})()
;})(switch__7437__auto__,c__7452__auto___14488,out))
})();var state__7454__auto__ = (function (){var statearr_14487 = f__7453__auto__.call(null);(statearr_14487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7452__auto___14488);
return statearr_14487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7454__auto__);
});})(c__7452__auto___14488,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map