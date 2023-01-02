import{d as he,f as pe,c as C,o as ve,l as Ie,g as p,i as b,b as m,a as $,e as A,s as M,S as P,r as j,t as y,m as be,P as Pe,n as ee,p as Te}from"./web.fe524d5d.js";import{c as me,a as Oe,d as ke}from"./download.d3c04f97.js";import{i as je,C as te,S as Me}from"./Scale.c4673c7e.js";import{t as ze}from"./utils.85802971.js";import{L as F}from"./Loader.085a7fa9.js";import{T as U}from"./Tooltip.e39dc9f4.js";import{I as Ue}from"./ImageCompareSlider.8aa9261a.js";import{c as Re,I as Le}from"./Icon.27390969.js";var G=function(r,t){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},G(r,t)};function I(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");G(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function J(r){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function T(r,t){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var n=e.call(r),i,s=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(o)throw o.error}}return s}function O(r,t,e){if(e||arguments.length===2)for(var n=0,i=t.length,s;n<i;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return r.concat(s||Array.prototype.slice.call(t))}function x(r){return typeof r=="function"}function ye(r){var t=function(n){Error.call(n),n.stack=new Error().stack},e=r(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var q=ye(function(r){return function(e){r(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function B(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var z=function(){function r(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var t,e,n,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=J(o),u=a.next();!u.done;u=a.next()){var l=u.value;l.remove(this)}}catch(d){t={error:d}}finally{try{u&&!u.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else o.remove(this);var c=this.initialTeardown;if(x(c))try{c()}catch(d){s=d instanceof q?d.errors:[d]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=J(h),v=f.next();!v.done;v=f.next()){var g=v.value;try{re(g)}catch(d){s=s??[],d instanceof q?s=O(O([],T(s)),T(d.errors)):s.push(d)}}}catch(d){n={error:d}}finally{try{v&&!v.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}if(s)throw new q(s)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)re(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},r.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},r.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},r.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&B(e,t)},r.prototype.remove=function(t){var e=this._finalizers;e&&B(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=function(){var t=new r;return t.closed=!0,t}(),r}(),ge=z.EMPTY;function _e(r){return r instanceof z||r&&"closed"in r&&x(r.remove)&&x(r.add)&&x(r.unsubscribe)}function re(r){x(r)?r():r.unsubscribe()}var X={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},K={setTimeout:function(r,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var i=K.delegate;return i?.setTimeout?i.setTimeout.apply(i,O([r,t],T(e))):setTimeout.apply(void 0,O([r,t],T(e)))},clearTimeout:function(r){var t=K.delegate;return(t?.clearTimeout||clearTimeout)(r)},delegate:void 0};function De(r){K.setTimeout(function(){throw r})}function ne(){}var R=null;function D(r){if(X.useDeprecatedSynchronousErrorHandling){var t=!R;if(t&&(R={errorThrown:!1,error:null}),r(),t){var e=R,n=e.errorThrown,i=e.error;if(R=null,n)throw i}}else r()}var Z=function(r){I(t,r);function t(e){var n=r.call(this)||this;return n.isStopped=!1,e?(n.destination=e,_e(e)&&e.add(n)):n.destination=Ye,n}return t.create=function(e,n,i){return new Q(e,n,i)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(z),Fe=Function.prototype.bind;function V(r,t){return Fe.call(r,t)}var Be=function(){function r(t){this.partialObserver=t}return r.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(n){L(n)}},r.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(n){L(n)}else L(t)},r.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){L(e)}},r}(),Q=function(r){I(t,r);function t(e,n,i){var s=r.call(this)||this,o;if(x(e)||!e)o={next:e??void 0,error:n??void 0,complete:i??void 0};else{var a;s&&X.useDeprecatedNextContext?(a=Object.create(e),a.unsubscribe=function(){return s.unsubscribe()},o={next:e.next&&V(e.next,a),error:e.error&&V(e.error,a),complete:e.complete&&V(e.complete,a)}):o=e}return s.destination=new Be(o),s}return t}(Z);function L(r){De(r)}function He(r){throw r}var Ye={closed:!0,next:ne,error:He,complete:ne},qe=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ve(r){return r}function We(r){return r.length===0?Ve:r.length===1?r[0]:function(e){return r.reduce(function(n,i){return i(n)},e)}}var ie=function(){function r(t){t&&(this._subscribe=t)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(t,e,n){var i=this,s=Je(t)?t:new Q(t,e,n);return D(function(){var o=i,a=o.operator,u=o.source;s.add(a?a.call(s,u):u?i._subscribe(s):i._trySubscribe(s))}),s},r.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},r.prototype.forEach=function(t,e){var n=this;return e=se(e),new e(function(i,s){var o=new Q({next:function(a){try{t(a)}catch(u){s(u),o.unsubscribe()}},error:s,complete:i});n.subscribe(o)})},r.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},r.prototype[qe]=function(){return this},r.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return We(t)(this)},r.prototype.toPromise=function(t){var e=this;return t=se(t),new t(function(n,i){var s;e.subscribe(function(o){return s=o},function(o){return i(o)},function(){return n(s)})})},r.create=function(t){return new r(t)},r}();function se(r){var t;return(t=r??X.Promise)!==null&&t!==void 0?t:Promise}function Ge(r){return r&&x(r.next)&&x(r.error)&&x(r.complete)}function Je(r){return r&&r instanceof Z||Ge(r)&&_e(r)}function Ke(r){return x(r?.lift)}function Qe(r){return function(t){if(Ke(t))return t.lift(function(e){try{return r(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function Xe(r,t,e,n,i){return new Ze(r,t,e,n,i)}var Ze=function(r){I(t,r);function t(e,n,i,s,o,a){var u=r.call(this,e)||this;return u.onFinalize=o,u.shouldUnsubscribe=a,u._next=n?function(l){try{n(l)}catch(c){e.error(c)}}:r.prototype._next,u._error=s?function(l){try{s(l)}catch(c){e.error(c)}finally{this.unsubscribe()}}:r.prototype._error,u._complete=i?function(){try{i()}catch(l){e.error(l)}finally{this.unsubscribe()}}:r.prototype._complete,u}return t.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;r.prototype.unsubscribe.call(this),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},t}(Z),Ne=ye(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),N=function(r){I(t,r);function t(){var e=r.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var n=new oe(this,this);return n.operator=e,n},t.prototype._throwIfClosed=function(){if(this.closed)throw new Ne},t.prototype.next=function(e){var n=this;D(function(){var i,s;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var o=J(n.currentObservers),a=o.next();!a.done;a=o.next()){var u=a.value;u.next(e)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},t.prototype.error=function(e){var n=this;D(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=e;for(var i=n.observers;i.length;)i.shift().error(e)}})},t.prototype.complete=function(){var e=this;D(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var n=e.observers;n.length;)n.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var n=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?ge:(this.currentObservers=null,a.push(e),new z(function(){n.currentObservers=null,B(a,e)}))},t.prototype._checkFinalizedStatuses=function(e){var n=this,i=n.hasError,s=n.thrownError,o=n.isStopped;i?e.error(s):o&&e.complete()},t.prototype.asObservable=function(){var e=new ie;return e.source=this,e},t.create=function(e,n){return new oe(e,n)},t}(ie),oe=function(r){I(t,r);function t(e,n){var i=r.call(this)||this;return i.destination=e,i.source=n,i}return t.prototype.next=function(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,e)},t.prototype.error=function(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,e)},t.prototype.complete=function(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)},t.prototype._subscribe=function(e){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&i!==void 0?i:ge},t}(N),Se={now:function(){return(Se.delegate||Date).now()},delegate:void 0},et=function(r){I(t,r);function t(e,n){return r.call(this)||this}return t.prototype.schedule=function(e,n){return this},t}(z),H={setInterval:function(r,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var i=H.delegate;return i?.setInterval?i.setInterval.apply(i,O([r,t],T(e))):setInterval.apply(void 0,O([r,t],T(e)))},clearInterval:function(r){var t=H.delegate;return(t?.clearInterval||clearInterval)(r)},delegate:void 0},tt=function(r){I(t,r);function t(e,n){var i=r.call(this,e,n)||this;return i.scheduler=e,i.work=n,i.pending=!1,i}return t.prototype.schedule=function(e,n){var i;if(n===void 0&&(n=0),this.closed)return this;this.state=e;var s=this.id,o=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(o,s,n)),this.pending=!0,this.delay=n,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,n),this},t.prototype.requestAsyncId=function(e,n,i){return i===void 0&&(i=0),H.setInterval(e.flush.bind(e,this),i)},t.prototype.recycleAsyncId=function(e,n,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return n;n!=null&&H.clearInterval(n)},t.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(e,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,n){var i=!1,s;try{this.work(e)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},t.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,i=e.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,B(s,this),n!=null&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,r.prototype.unsubscribe.call(this)}},t}(et),le=function(){function r(t,e){e===void 0&&(e=r.now),this.schedulerActionCtor=t,this.now=e}return r.prototype.schedule=function(t,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,t).schedule(n,e)},r.now=Se.now,r}(),rt=function(r){I(t,r);function t(e,n){n===void 0&&(n=le.now);var i=r.call(this,e,n)||this;return i.actions=[],i._active=!1,i}return t.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,i){for(;e=n.shift();)e.unsubscribe();throw i}},t}(le),nt=new rt(tt);function $e(r,t){return t===void 0&&(t=nt),Qe(function(e,n){var i=null,s=null,o=null,a=function(){if(i){i.unsubscribe(),i=null;var l=s;s=null,n.next(l)}};function u(){var l=o+r,c=t.now();if(c<l){i=this.schedule(void 0,l-c),n.add(i);return}a()}e.subscribe(Xe(n,function(l){s=l,o=t.now(),i||(i=t.schedule(u,r),n.add(i))},function(){a(),n.complete()},void 0,function(){s=i=null}))})}const we=new N,it={quality:.8},xe=new N,[E,k]=Re({images:new Set,settings:it,shouldRecompress$:xe.pipe($e(200))});function st(r){E.images.add(r),k("images",new Set(E.images))}function ot(r){const t=new Set(E.images);r.forEach(e=>t.add(e)),k("images",t)}function lt(r){const t=new Set(E.images);t.delete(r),k("images",t)}function ct(r){E.images.add(r),k("images",new Set(E.images))}function at(){k("images",new Set)}function Ee(r){k("settings",r),we.next(r)}function ut(r){const t=Object.assign({...E.settings},r);Ee(t)}function Ce(){xe.next({...E.settings})}we.pipe($e(300)).subscribe(()=>{Ce()});const ce=Object.assign({},{state:E,setImage:st,setImages:ot,removeImage:lt,compressImage:ct,reset:at,setSettings:Ee,mergeSettings:ut,recompressAll:Ce}),ft=y('<img class="w-full h-full object-cover">'),dt=y('<div class="w-64 h-64 flex items-center justify-center shadow-xl"></div>'),ht=y('<div class="font-bold opacity-75 overflow-hidden"><div class="flex gap-1 items-center w-full"><!#><!/><span class="truncate font-semibold"></span></div></div>'),pt=y('<div class="result-table-cell title"></div>'),vt=y('<div class="result-table-cell before"><div class="text-sm text-center font-bold text-error"><!#><!/> MB</div></div>'),bt=y('<div class="h-8 flex gap-1 items-center justify-center opacity-75 font-semibold"><span class="badge badge-success">-<!#><!/>%</span></div>'),mt=y('<div class="result-table-cell status"></div>'),yt=y('<div class="h-8 w-full flex justify-center items-center text-center"><span class="text-sm font-bold text-success"><!#><!/> MB</span></div>'),gt=y('<div class="result-table-cell after"></div>'),_t=y('<button class="btn btn-circle btn-ghost text-error btn-sm" type="button"><span class="material-symbols-outlined">backspace</span></button>'),St=y('<button class="btn btn-circle btn-ghost btn-sm" type="button"><span class="material-symbols-outlined text-info">compare</span></button>'),$t=y('<button class="btn btn-circle btn-ghost btn-sm" type="button"><span class="material-symbols-outlined">download</span></button>'),wt=y('<div class="result-table-cell actions"><div class="w-full flex justify-center"><!#><!/><!#><!/><!#><!/></div></div>'),ae=y('<div class="h-8 flex justify-center items-center"></div>'),ue=me.bytesToMb,xt=r=>{const[t,e]=C("");return ve(async()=>{r.image.previewSrc||await r.image.createPreviewSrc(),e(r.image.previewSrc)}),(()=>{const n=p(dt);return b(n,m(P,{get when(){return t()},get fallback(){return m(F,{})},get children(){const i=p(ft);return A(s=>{const o=t(),a=r.image.initial.name;return o!==s._v$&&M(i,"src",s._v$=o),a!==s._v$2&&M(i,"alt",s._v$2=a),s},{_v$:void 0,_v$2:void 0}),i}})),n})()},Lt=r=>{const t=ce,e=pe(()=>r.image),[n,i]=C(!1);let s;ve(async()=>{await o(),s=ce.state.shouldRecompress$.subscribe(()=>{o()})}),Ie(()=>{s&&s.unsubscribe()});async function o(){if(n())return;i(!0);const l=await Oe.image(r.image.initial,{...t.state.settings});e().compress=l,r.onCompressed?.(e()),i(!1)}async function a(){const l=e().compress;if(l){const c=je.addPrefixAndSuffix(l.name,t.state.settings.prefix,t.state.settings.suffix),h=new File([l],c);ke.file(h)}}function u(){r.onRemove?.(e())}return[(()=>{const l=p(pt);return b(l,m(U,{placement:"right",get content(){return m(xt,{get image(){return e()}})},class:"w-full",get children(){const c=p(ht),h=c.firstChild,f=h.firstChild,[v,g]=$(f.nextSibling),d=v.nextSibling;return b(h,m(Le,{code:"image",class:"text-success"}),v,g),b(d,()=>ze(e().initial.name,t.state.settings.prefix,t.state.settings.suffix)),A(()=>M(d,"title",e().initial.name)),c}})),l})(),(()=>{const l=p(vt),c=l.firstChild,h=c.firstChild,[f,v]=$(h.nextSibling);return f.nextSibling,b(c,()=>ue(e().initial.size),f,v),l})(),(()=>{const l=p(mt);return b(l,m(P,{get when(){return!n()},get fallback(){return(()=>{const c=p(ae);return b(c,m(F,{size:"sm"})),c})()},get children(){const c=p(bt),h=c.firstChild,f=h.firstChild,v=f.nextSibling,[g,d]=$(v.nextSibling);return g.nextSibling,b(h,()=>e().percentDif,g,d),c}})),l})(),(()=>{const l=p(gt);return b(l,m(P,{get when(){return!n()},get fallback(){return(()=>{const c=p(ae);return b(c,m(F,{size:"sm"})),c})()},get children(){const c=p(yt),h=c.firstChild,f=h.firstChild,[v,g]=$(f.nextSibling);return v.nextSibling,b(h,()=>ue(e().compress?.size||0),v,g),c}})),l})(),(()=>{const l=p(wt),c=l.firstChild,h=c.firstChild,[f,v]=$(h.nextSibling),g=f.nextSibling,[d,_]=$(g.nextSibling),w=d.nextSibling,[Y,Ae]=$(w.nextSibling);return b(c,m(U,{message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",placement:"top",get children(){const S=p(_t);return S.$$click=u,A(()=>S.classList.toggle("invisible",!!n())),j(),S}}),f,v),b(c,m(U,{message:"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C",placement:"top",get children(){const S=p(St);return S.$$click=()=>r.onCompare?.(r.image),A(()=>S.classList.toggle("invisible",!!n())),j(),S}}),d,_),b(c,m(U,{message:"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C",placement:"top",get children(){const S=p($t);return S.$$click=a,A(()=>S.classList.toggle("invisible",!!n())),j(),S}}),Y,Ae),l})()]};he(["click"]);const Et=y('<div class="w-full h-full overflow-hidden"></div>'),Ct=y('<div class="modal-box rounded p-2 max-w-screen-2xl"><!#><!/><div class="modal-action"><button type="button" class="btn">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button></div></div>'),At=y('<div class="modal"></div>'),It=y('<div class="max-h-[80vh] h-full p-10 flex justify-center items-center"></div>'),fe=y("<img>"),Dt=r=>{const[t,e]=C(!!r.show),[n,i]=C(!0);C(!1);const[s,o]=C(""),[a,u]=C("");return be(async()=>{if(r.show){e(!0);const{initial:l,compress:c}=r.image||{};if(l&&c){i(!0);const h=await te.createSrc(l),f=await te.createSrc(c);o(h),u(f),setTimeout(()=>{i(!1)},350)}}}),m(P,{get when(){return t()},get children(){return m(Pe,{get children(){const l=p(At);return ee(l,"click",r.onClose,!0),b(l,m(Me,{appear:!0,onExit:()=>{e(!1)},get children(){return m(P,{get when(){return r.show},get children(){const c=p(Ct),h=c.firstChild,[f,v]=$(h.nextSibling),g=f.nextSibling,d=g.firstChild;return c.$$click=_=>_.stopPropagation(),b(c,m(P,{get when(){return!n()},get fallback(){return(()=>{const _=p(It);return b(_,m(F,{})),_})()},get children(){const _=p(Et);return b(_,m(Ue,{class:"max-h-[80vh]",withLabels:!0,get before(){return(()=>{const w=p(fe);return A(()=>M(w,"src",s())),w})()},get after(){return(()=>{const w=p(fe);return A(()=>M(w,"src",a())),w})()}})),_}}),f,v),ee(d,"click",r.onClose,!0),j(),c}})}})),A(()=>l.classList.toggle("modal-open",!!t())),j(),l}})}})};he(["click"]);const Pt=y('<section class="flex flex-col items-center gap-1"><span class="text-4xl font-black opacity-90"><!#><!/>%</span><span><span class="text-error font-black"><!#><!/> MB</span> / <span class="text-success font-black"><!#><!/> MB</span></span></section>'),W={initialSize:0,compressedSize:0,percent:0,isDone:!1},de=me.bytesToMb,Ft=r=>{const t=pe(()=>r.images),[e,n]=C({...W});return be(Te(t,i=>{if(!i.length){n({...W});return}if([...i].every(o=>!!o.compress)){const o={...W};[...i].forEach(a=>{o.initialSize+=a.initial.size,o.compressedSize+=a.compress?.size||0}),o.percent=Math.ceil(100-100/o.initialSize*(o.compressedSize||0)),o.isDone=!0,n(o)}})),m(P,{get when(){return e().isDone},get children(){const i=p(Pt),s=i.firstChild,o=s.firstChild,[a,u]=$(o.nextSibling);a.nextSibling;const l=s.nextSibling,c=l.firstChild,h=c.firstChild,[f,v]=$(h.nextSibling);f.nextSibling;const g=c.nextSibling,d=g.nextSibling,_=d.firstChild,[w,Y]=$(_.nextSibling);return w.nextSibling,b(s,()=>e().percent,a,u),b(c,()=>de(e().initialSize),f,v),b(d,()=>de(e().compressedSize),w,Y),i}})};export{Dt as C,ce as I,Lt as R,Ft as a};
