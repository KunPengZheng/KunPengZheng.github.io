import{a1 as oe,a2 as Kr,c2 as ae,r as Ve,c3 as Qr,_ as Gr,D as Hr,aC as Xr,o as jr,h as Jr,w as Ye,b as ze,B as Zr,z as We,c4 as kr}from"./index-e280f67c.js";import{I as qr}from"./index-939bc1ad.js";var Ke={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(U,O){(function(E){U.exports=E()})(function(){return function E(B,F,b){function D(C,$){if(!F[C]){if(!B[C]){var d=typeof ae=="function"&&ae;if(!$&&d)return d(C,!0);if(p)return p(C,!0);var h=new Error("Cannot find module '"+C+"'");throw h.code="MODULE_NOT_FOUND",h}var R=F[C]={exports:{}};B[C][0].call(R.exports,function(N){var V=B[C][1][N];return D(V||N)},R,R.exports,E,B,F,b)}return F[C].exports}for(var p=typeof ae=="function"&&ae,P=0;P<b.length;P++)D(b[P]);return D}({1:[function(E,B,F){(function(b){var D=b.MutationObserver||b.WebKitMutationObserver,p;if(D){var P=0,C=new D(N),$=b.document.createTextNode("");C.observe($,{characterData:!0}),p=function(){$.data=P=++P%2}}else if(!b.setImmediate&&typeof b.MessageChannel<"u"){var d=new b.MessageChannel;d.port1.onmessage=N,p=function(){d.port2.postMessage(0)}}else"document"in b&&"onreadystatechange"in b.document.createElement("script")?p=function(){var T=b.document.createElement("script");T.onreadystatechange=function(){N(),T.onreadystatechange=null,T.parentNode.removeChild(T),T=null},b.document.documentElement.appendChild(T)}:p=function(){setTimeout(N,0)};var h,R=[];function N(){h=!0;for(var T,K,x=R.length;x;){for(K=R,R=[],T=-1;++T<x;)K[T]();x=R.length}h=!1}B.exports=V;function V(T){R.push(T)===1&&!h&&p()}}).call(this,typeof oe<"u"?oe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(E,B,F){var b=E(1);function D(){}var p={},P=["REJECTED"],C=["FULFILLED"],$=["PENDING"];B.exports=d;function d(l){if(typeof l!="function")throw new TypeError("resolver must be a function");this.state=$,this.queue=[],this.outcome=void 0,l!==D&&V(this,l)}d.prototype.catch=function(l){return this.then(null,l)},d.prototype.then=function(l,g){if(typeof l!="function"&&this.state===C||typeof g!="function"&&this.state===P)return this;var y=new this.constructor(D);if(this.state!==$){var I=this.state===C?l:g;R(y,I,this.outcome)}else this.queue.push(new h(y,l,g));return y};function h(l,g,y){this.promise=l,typeof g=="function"&&(this.onFulfilled=g,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}h.prototype.callFulfilled=function(l){p.resolve(this.promise,l)},h.prototype.otherCallFulfilled=function(l){R(this.promise,this.onFulfilled,l)},h.prototype.callRejected=function(l){p.reject(this.promise,l)},h.prototype.otherCallRejected=function(l){R(this.promise,this.onRejected,l)};function R(l,g,y){b(function(){var I;try{I=g(y)}catch(L){return p.reject(l,L)}I===l?p.reject(l,new TypeError("Cannot resolve promise with itself")):p.resolve(l,I)})}p.resolve=function(l,g){var y=T(N,g);if(y.status==="error")return p.reject(l,y.value);var I=y.value;if(I)V(l,I);else{l.state=C,l.outcome=g;for(var L=-1,M=l.queue.length;++L<M;)l.queue[L].callFulfilled(g)}return l},p.reject=function(l,g){l.state=P,l.outcome=g;for(var y=-1,I=l.queue.length;++y<I;)l.queue[y].callRejected(g);return l};function N(l){var g=l&&l.then;if(l&&(typeof l=="object"||typeof l=="function")&&typeof g=="function")return function(){g.apply(l,arguments)}}function V(l,g){var y=!1;function I(z){y||(y=!0,p.reject(l,z))}function L(z){y||(y=!0,p.resolve(l,z))}function M(){g(L,I)}var Y=T(M);Y.status==="error"&&I(Y.value)}function T(l,g){var y={};try{y.value=l(g),y.status="success"}catch(I){y.status="error",y.value=I}return y}d.resolve=K;function K(l){return l instanceof this?l:p.resolve(new this(D),l)}d.reject=x;function x(l){var g=new this(D);return p.reject(g,l)}d.all=ie;function ie(l){var g=this;if(Object.prototype.toString.call(l)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=l.length,I=!1;if(!y)return this.resolve([]);for(var L=new Array(y),M=0,Y=-1,z=new this(D);++Y<y;)Q(l[Y],Y);return z;function Q(k,re){g.resolve(k).then(fe,function(J){I||(I=!0,p.reject(z,J))});function fe(J){L[re]=J,++M===y&&!I&&(I=!0,p.resolve(z,L))}}}d.race=j;function j(l){var g=this;if(Object.prototype.toString.call(l)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=l.length,I=!1;if(!y)return this.resolve([]);for(var L=-1,M=new this(D);++L<y;)Y(l[L]);return M;function Y(z){g.resolve(z).then(function(Q){I||(I=!0,p.resolve(M,Q))},function(Q){I||(I=!0,p.reject(M,Q))})}}},{1:1}],3:[function(E,B,F){(function(b){typeof b.Promise!="function"&&(b.Promise=E(2))}).call(this,typeof oe<"u"?oe:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(E,B,F){var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var P=p();function C(){try{if(!P||!P.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function $(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(n){if(n.name!=="TypeError")throw n;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,o=new r,a=0;a<e.length;a+=1)o.append(e[a]);return o.getBlob(t.type)}}typeof Promise>"u"&&E(3);var d=Promise;function h(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function R(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function N(e){return typeof e!="string"&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function V(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var T="local-forage-detect-blob-support",K=void 0,x={},ie=Object.prototype.toString,j="readonly",l="readwrite";function g(e){for(var t=e.length,r=new ArrayBuffer(t),o=new Uint8Array(r),a=0;a<t;a++)o[a]=e.charCodeAt(a);return r}function y(e){return new d(function(t){var r=e.transaction(T,l),o=$([""]);r.objectStore(T).put(o,"key"),r.onabort=function(a){a.preventDefault(),a.stopPropagation(),t(!1)},r.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function I(e){return typeof K=="boolean"?d.resolve(K):y(e).then(function(t){return K=t,K})}function L(e){var t=x[e.name],r={};r.promise=new d(function(o,a){r.resolve=o,r.reject=a}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function M(e){var t=x[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Y(e,t){var r=x[e.name],o=r.deferredOperations.pop();if(o)return o.reject(t),o.promise}function z(e,t){return new d(function(r,o){if(x[e.name]=x[e.name]||_e(),e.db)if(t)L(e),e.db.close();else return r(e.db);var a=[e.name];t&&a.push(e.version);var n=P.open.apply(P,a);t&&(n.onupgradeneeded=function(i){var f=n.result;try{f.createObjectStore(e.storeName),i.oldVersion<=1&&f.createObjectStore(T)}catch(u){if(u.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+i.oldVersion+" to version "+i.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw u}}),n.onerror=function(i){i.preventDefault(),o(n.error)},n.onsuccess=function(){var i=n.result;i.onversionchange=function(f){f.target.close()},r(i),M(e)}})}function Q(e){return z(e,!1)}function k(e){return z(e,!0)}function re(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),o=e.version<e.db.version,a=e.version>e.db.version;if(o&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),a||r){if(r){var n=e.db.version+1;n>e.version&&(e.version=n)}return!0}return!1}function fe(e){return new d(function(t,r){var o=new FileReader;o.onerror=r,o.onloadend=function(a){var n=btoa(a.target.result||"");t({__local_forage_encoded_blob:!0,data:n,type:e.type})},o.readAsBinaryString(e)})}function J(e){var t=g(atob(e.data));return $([t],{type:e.type})}function ge(e){return e&&e.__local_forage_encoded_blob}function Qe(e){var t=this,r=t._initReady().then(function(){var o=x[t._dbInfo.name];if(o&&o.dbReady)return o.dbReady});return R(r,e,e),r}function Ge(e){L(e);for(var t=x[e.name],r=t.forages,o=0;o<r.length;o++){var a=r[o];a._dbInfo.db&&(a._dbInfo.db.close(),a._dbInfo.db=null)}return e.db=null,Q(e).then(function(n){return e.db=n,re(e)?k(e):n}).then(function(n){e.db=t.db=n;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=n}).catch(function(n){throw Y(e,n),n})}function G(e,t,r,o){o===void 0&&(o=1);try{var a=e.db.transaction(e.storeName,t);r(null,a)}catch(n){if(o>0&&(!e.db||n.name==="InvalidStateError"||n.name==="NotFoundError"))return d.resolve().then(function(){if(!e.db||n.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),k(e)}).then(function(){return Ge(e).then(function(){G(e,t,r,o-1)})}).catch(r);r(n)}}function _e(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function He(e){var t=this,r={db:null};if(e)for(var o in e)r[o]=e[o];var a=x[r.name];a||(a=_e(),x[r.name]=a),a.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Qe);var n=[];function i(){return d.resolve()}for(var f=0;f<a.forages.length;f++){var u=a.forages[f];u!==t&&n.push(u._initReady().catch(i))}var s=a.forages.slice(0);return d.all(n).then(function(){return r.db=a.db,Q(r)}).then(function(c){return r.db=c,re(r,t._defaultConfig.version)?k(r):c}).then(function(c){r.db=a.db=c,t._dbInfo=r;for(var v=0;v<s.length;v++){var m=s[v];m!==t&&(m._dbInfo.db=r.db,m._dbInfo.version=r.version)}})}function Xe(e,t){var r=this;e=N(e);var o=new d(function(a,n){r.ready().then(function(){G(r._dbInfo,j,function(i,f){if(i)return n(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.get(e);s.onsuccess=function(){var c=s.result;c===void 0&&(c=null),ge(c)&&(c=J(c)),a(c)},s.onerror=function(){n(s.error)}}catch(c){n(c)}})}).catch(n)});return h(o,t),o}function je(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){G(r._dbInfo,j,function(i,f){if(i)return n(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.openCursor(),c=1;s.onsuccess=function(){var v=s.result;if(v){var m=v.value;ge(m)&&(m=J(m));var _=e(m,v.key,c++);_!==void 0?a(_):v.continue()}else a()},s.onerror=function(){n(s.error)}}catch(v){n(v)}})}).catch(n)});return h(o,t),o}function Je(e,t,r){var o=this;e=N(e);var a=new d(function(n,i){var f;o.ready().then(function(){return f=o._dbInfo,ie.call(t)==="[object Blob]"?I(f.db).then(function(u){return u?t:fe(t)}):t}).then(function(u){G(o._dbInfo,l,function(s,c){if(s)return i(s);try{var v=c.objectStore(o._dbInfo.storeName);u===null&&(u=void 0);var m=v.put(u,e);c.oncomplete=function(){u===void 0&&(u=null),n(u)},c.onabort=c.onerror=function(){var _=m.error?m.error:m.transaction.error;i(_)}}catch(_){i(_)}})}).catch(i)});return h(a,r),a}function Ze(e,t){var r=this;e=N(e);var o=new d(function(a,n){r.ready().then(function(){G(r._dbInfo,l,function(i,f){if(i)return n(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.delete(e);f.oncomplete=function(){a()},f.onerror=function(){n(s.error)},f.onabort=function(){var c=s.error?s.error:s.transaction.error;n(c)}}catch(c){n(c)}})}).catch(n)});return h(o,t),o}function ke(e){var t=this,r=new d(function(o,a){t.ready().then(function(){G(t._dbInfo,l,function(n,i){if(n)return a(n);try{var f=i.objectStore(t._dbInfo.storeName),u=f.clear();i.oncomplete=function(){o()},i.onabort=i.onerror=function(){var s=u.error?u.error:u.transaction.error;a(s)}}catch(s){a(s)}})}).catch(a)});return h(r,e),r}function qe(e){var t=this,r=new d(function(o,a){t.ready().then(function(){G(t._dbInfo,j,function(n,i){if(n)return a(n);try{var f=i.objectStore(t._dbInfo.storeName),u=f.count();u.onsuccess=function(){o(u.result)},u.onerror=function(){a(u.error)}}catch(s){a(s)}})}).catch(a)});return h(r,e),r}function er(e,t){var r=this,o=new d(function(a,n){if(e<0){a(null);return}r.ready().then(function(){G(r._dbInfo,j,function(i,f){if(i)return n(i);try{var u=f.objectStore(r._dbInfo.storeName),s=!1,c=u.openKeyCursor();c.onsuccess=function(){var v=c.result;if(!v){a(null);return}e===0||s?a(v.key):(s=!0,v.advance(e))},c.onerror=function(){n(c.error)}}catch(v){n(v)}})}).catch(n)});return h(o,t),o}function rr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){G(t._dbInfo,j,function(n,i){if(n)return a(n);try{var f=i.objectStore(t._dbInfo.storeName),u=f.openKeyCursor(),s=[];u.onsuccess=function(){var c=u.result;if(!c){o(s);return}s.push(c.key),c.continue()},u.onerror=function(){a(u.error)}}catch(c){a(c)}})}).catch(a)});return h(r,e),r}function tr(e,t){t=V.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;if(!e.name)a=d.reject("Invalid arguments");else{var n=e.name===r.name&&o._dbInfo.db,i=n?d.resolve(o._dbInfo.db):Q(e).then(function(f){var u=x[e.name],s=u.forages;u.db=f;for(var c=0;c<s.length;c++)s[c]._dbInfo.db=f;return f});e.storeName?a=i.then(function(f){if(f.objectStoreNames.contains(e.storeName)){var u=f.version+1;L(e);var s=x[e.name],c=s.forages;f.close();for(var v=0;v<c.length;v++){var m=c[v];m._dbInfo.db=null,m._dbInfo.version=u}var _=new d(function(w,A){var S=P.open(e.name,u);S.onerror=function(W){var ee=S.result;ee.close(),A(W)},S.onupgradeneeded=function(){var W=S.result;W.deleteObjectStore(e.storeName)},S.onsuccess=function(){var W=S.result;W.close(),w(W)}});return _.then(function(w){s.db=w;for(var A=0;A<c.length;A++){var S=c[A];S._dbInfo.db=w,M(S._dbInfo)}}).catch(function(w){throw(Y(e,w)||d.resolve()).catch(function(){}),w})}}):a=i.then(function(f){L(e);var u=x[e.name],s=u.forages;f.close();for(var c=0;c<s.length;c++){var v=s[c];v._dbInfo.db=null}var m=new d(function(_,w){var A=P.deleteDatabase(e.name);A.onerror=function(){var S=A.result;S&&S.close(),w(A.error)},A.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},A.onsuccess=function(){var S=A.result;S&&S.close(),_(S)}});return m.then(function(_){u.db=_;for(var w=0;w<s.length;w++){var A=s[w];M(A._dbInfo)}}).catch(function(_){throw(Y(e,_)||d.resolve()).catch(function(){}),_})})}return h(a,t),a}var nr={_driver:"asyncStorage",_initStorage:He,_support:C(),iterate:je,getItem:Xe,setItem:Je,removeItem:Ze,clear:ke,length:qe,key:er,keys:rr,dropInstance:tr};function or(){return typeof openDatabase=="function"}var H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ar="~~local_forage_type~",be=/^~~local_forage_type~([^~]+)~/,te="__lfsc__:",ue=te.length,se="arbf",ce="blob",we="si08",Ie="ui08",Ee="uic8",Se="si16",Re="si32",Ae="ur16",De="ui32",Ne="fl32",Te="fl64",xe=ue+se.length,Be=Object.prototype.toString;function Ce(e){var t=e.length*.75,r=e.length,o,a=0,n,i,f,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var s=new ArrayBuffer(t),c=new Uint8Array(s);for(o=0;o<r;o+=4)n=H.indexOf(e[o]),i=H.indexOf(e[o+1]),f=H.indexOf(e[o+2]),u=H.indexOf(e[o+3]),c[a++]=n<<2|i>>4,c[a++]=(i&15)<<4|f>>2,c[a++]=(f&3)<<6|u&63;return s}function le(e){var t=new Uint8Array(e),r="",o;for(o=0;o<t.length;o+=3)r+=H[t[o]>>2],r+=H[(t[o]&3)<<4|t[o+1]>>4],r+=H[(t[o+1]&15)<<2|t[o+2]>>6],r+=H[t[o+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function ir(e,t){var r="";if(e&&(r=Be.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Be.call(e.buffer)==="[object ArrayBuffer]")){var o,a=te;e instanceof ArrayBuffer?(o=e,a+=se):(o=e.buffer,r==="[object Int8Array]"?a+=we:r==="[object Uint8Array]"?a+=Ie:r==="[object Uint8ClampedArray]"?a+=Ee:r==="[object Int16Array]"?a+=Se:r==="[object Uint16Array]"?a+=Ae:r==="[object Int32Array]"?a+=Re:r==="[object Uint32Array]"?a+=De:r==="[object Float32Array]"?a+=Ne:r==="[object Float64Array]"?a+=Te:t(new Error("Failed to get type for BinaryArray"))),t(a+le(o))}else if(r==="[object Blob]"){var n=new FileReader;n.onload=function(){var i=ar+e.type+"~"+le(this.result);t(te+ce+i)},n.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(i){console.error("Couldn't convert value into a JSON string: ",e),t(null,i)}}function fr(e){if(e.substring(0,ue)!==te)return JSON.parse(e);var t=e.substring(xe),r=e.substring(ue,xe),o;if(r===ce&&be.test(t)){var a=t.match(be);o=a[1],t=t.substring(a[0].length)}var n=Ce(t);switch(r){case se:return n;case ce:return $([n],{type:o});case we:return new Int8Array(n);case Ie:return new Uint8Array(n);case Ee:return new Uint8ClampedArray(n);case Se:return new Int16Array(n);case Ae:return new Uint16Array(n);case Re:return new Int32Array(n);case De:return new Uint32Array(n);case Ne:return new Float32Array(n);case Te:return new Float64Array(n);default:throw new Error("Unkown type: "+r)}}var de={serialize:ir,deserialize:fr,stringToBuffer:Ce,bufferToString:le};function Le(e,t,r,o){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,o)}function ur(e){var t=this,r={db:null};if(e)for(var o in e)r[o]=typeof e[o]!="string"?e[o].toString():e[o];var a=new d(function(n,i){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(f){return i(f)}r.db.transaction(function(f){Le(f,r,function(){t._dbInfo=r,n()},function(u,s){i(s)})},i)});return r.serializer=de,a}function X(e,t,r,o,a,n){e.executeSql(r,o,a,function(i,f){f.code===f.SYNTAX_ERR?i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(u,s){s.rows.length?n(u,f):Le(u,t,function(){u.executeSql(r,o,a,n)},n)},n):n(i,f)},n)}function sr(e,t){var r=this;e=N(e);var o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){X(f,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],function(u,s){var c=s.rows.length?s.rows.item(0).value:null;c&&(c=i.serializer.deserialize(c)),a(c)},function(u,s){n(s)})})}).catch(n)});return h(o,t),o}function cr(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){X(f,i,"SELECT * FROM "+i.storeName,[],function(u,s){for(var c=s.rows,v=c.length,m=0;m<v;m++){var _=c.item(m),w=_.value;if(w&&(w=i.serializer.deserialize(w)),w=e(w,_.key,m+1),w!==void 0){a(w);return}}a()},function(u,s){n(s)})})}).catch(n)});return h(o,t),o}function Oe(e,t,r,o){var a=this;e=N(e);var n=new d(function(i,f){a.ready().then(function(){t===void 0&&(t=null);var u=t,s=a._dbInfo;s.serializer.serialize(t,function(c,v){v?f(v):s.db.transaction(function(m){X(m,s,"INSERT OR REPLACE INTO "+s.storeName+" (key, value) VALUES (?, ?)",[e,c],function(){i(u)},function(_,w){f(w)})},function(m){if(m.code===m.QUOTA_ERR){if(o>0){i(Oe.apply(a,[e,u,r,o-1]));return}f(m)}})})}).catch(f)});return h(n,r),n}function lr(e,t,r){return Oe.apply(this,[e,t,r,1])}function dr(e,t){var r=this;e=N(e);var o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){X(f,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],function(){a()},function(u,s){n(s)})})}).catch(n)});return h(o,t),o}function vr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"DELETE FROM "+n.storeName,[],function(){o()},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function hr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],function(f,u){var s=u.rows.item(0).c;o(s)},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function mr(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){X(f,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],function(u,s){var c=s.rows.length?s.rows.item(0).key:null;a(c)},function(u,s){n(s)})})}).catch(n)});return h(o,t),o}function yr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"SELECT key FROM "+n.storeName,[],function(f,u){for(var s=[],c=0;c<u.rows.length;c++)s.push(u.rows.item(c).key);o(s)},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function pr(e){return new d(function(t,r){e.transaction(function(o){o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(a,n){for(var i=[],f=0;f<n.rows.length;f++)i.push(n.rows.item(f).name);t({db:e,storeNames:i})},function(a,n){r(n)})},function(o){r(o)})})}function gr(e,t){t=V.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;return e.name?a=new d(function(n){var i;e.name===r.name?i=o._dbInfo.db:i=openDatabase(e.name,"","",0),e.storeName?n({db:i,storeNames:[e.storeName]}):n(pr(i))}).then(function(n){return new d(function(i,f){n.db.transaction(function(u){function s(_){return new d(function(w,A){u.executeSql("DROP TABLE IF EXISTS "+_,[],function(){w()},function(S,W){A(W)})})}for(var c=[],v=0,m=n.storeNames.length;v<m;v++)c.push(s(n.storeNames[v]));d.all(c).then(function(){i()}).catch(function(_){f(_)})},function(u){f(u)})})}):a=d.reject("Invalid arguments"),h(a,t),a}var _r={_driver:"webSQLStorage",_initStorage:ur,_support:or(),iterate:cr,getItem:sr,setItem:lr,removeItem:dr,clear:vr,length:hr,key:mr,keys:yr,dropInstance:gr};function br(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Pe(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function wr(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Ir(){return!wr()||localStorage.length>0}function Er(e){var t=this,r={};if(e)for(var o in e)r[o]=e[o];return r.keyPrefix=Pe(e,t._defaultConfig),Ir()?(t._dbInfo=r,r.serializer=de,d.resolve()):d.reject()}function Sr(e){var t=this,r=t.ready().then(function(){for(var o=t._dbInfo.keyPrefix,a=localStorage.length-1;a>=0;a--){var n=localStorage.key(a);n.indexOf(o)===0&&localStorage.removeItem(n)}});return h(r,e),r}function Rr(e,t){var r=this;e=N(e);var o=r.ready().then(function(){var a=r._dbInfo,n=localStorage.getItem(a.keyPrefix+e);return n&&(n=a.serializer.deserialize(n)),n});return h(o,t),o}function Ar(e,t){var r=this,o=r.ready().then(function(){for(var a=r._dbInfo,n=a.keyPrefix,i=n.length,f=localStorage.length,u=1,s=0;s<f;s++){var c=localStorage.key(s);if(c.indexOf(n)===0){var v=localStorage.getItem(c);if(v&&(v=a.serializer.deserialize(v)),v=e(v,c.substring(i),u++),v!==void 0)return v}}});return h(o,t),o}function Dr(e,t){var r=this,o=r.ready().then(function(){var a=r._dbInfo,n;try{n=localStorage.key(e)}catch{n=null}return n&&(n=n.substring(a.keyPrefix.length)),n});return h(o,t),o}function Nr(e){var t=this,r=t.ready().then(function(){for(var o=t._dbInfo,a=localStorage.length,n=[],i=0;i<a;i++){var f=localStorage.key(i);f.indexOf(o.keyPrefix)===0&&n.push(f.substring(o.keyPrefix.length))}return n});return h(r,e),r}function Tr(e){var t=this,r=t.keys().then(function(o){return o.length});return h(r,e),r}function xr(e,t){var r=this;e=N(e);var o=r.ready().then(function(){var a=r._dbInfo;localStorage.removeItem(a.keyPrefix+e)});return h(o,t),o}function Br(e,t,r){var o=this;e=N(e);var a=o.ready().then(function(){t===void 0&&(t=null);var n=t;return new d(function(i,f){var u=o._dbInfo;u.serializer.serialize(t,function(s,c){if(c)f(c);else try{localStorage.setItem(u.keyPrefix+e,s),i(n)}catch(v){(v.name==="QuotaExceededError"||v.name==="NS_ERROR_DOM_QUOTA_REACHED")&&f(v),f(v)}})})});return h(a,r),a}function Cr(e,t){if(t=V.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var o=this,a;return e.name?a=new d(function(n){e.storeName?n(Pe(e,o._defaultConfig)):n(e.name+"/")}).then(function(n){for(var i=localStorage.length-1;i>=0;i--){var f=localStorage.key(i);f.indexOf(n)===0&&localStorage.removeItem(f)}}):a=d.reject("Invalid arguments"),h(a,t),a}var Lr={_driver:"localStorageWrapper",_initStorage:Er,_support:br(),iterate:Ar,getItem:Rr,setItem:Br,removeItem:xr,clear:Sr,length:Tr,key:Dr,keys:Nr,dropInstance:Cr},Or=function(t,r){return t===r||typeof t=="number"&&typeof r=="number"&&isNaN(t)&&isNaN(r)},Pr=function(t,r){for(var o=t.length,a=0;a<o;){if(Or(t[a],r))return!0;a++}return!1},Fe=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},q={},Ue={},Z={INDEXEDDB:nr,WEBSQL:_r,LOCALSTORAGE:Lr},Fr=[Z.INDEXEDDB._driver,Z.WEBSQL._driver,Z.LOCALSTORAGE._driver],ne=["dropInstance"],ve=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ne),Ur={description:"",driver:Fr.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Mr(e,t){e[t]=function(){var r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function he(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var r in t)t.hasOwnProperty(r)&&(Fe(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}var Yr=function(){function e(t){D(this,e);for(var r in Z)if(Z.hasOwnProperty(r)){var o=Z[r],a=o._driver;this[r]=a,q[a]||this.defineDriver(o)}this._defaultConfig=he({},Ur),this._config=he({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(r){if((typeof r>"u"?"undefined":b(r))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var o in r){if(o==="storeName"&&(r[o]=r[o].replace(/\W/g,"_")),o==="version"&&typeof r[o]!="number")return new Error("Database version must be a number.");this._config[o]=r[o]}return"driver"in r&&r.driver?this.setDriver(this._config.driver):!0}else return typeof r=="string"?this._config[r]:this._config},e.prototype.defineDriver=function(r,o,a){var n=new d(function(i,f){try{var u=r._driver,s=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!r._driver){f(s);return}for(var c=ve.concat("_initStorage"),v=0,m=c.length;v<m;v++){var _=c[v],w=!Pr(ne,_);if((w||r[_])&&typeof r[_]!="function"){f(s);return}}var A=function(){for(var ee=function($r){return function(){var Vr=new Error("Method "+$r+" is not implemented by the current driver"),Me=d.reject(Vr);return h(Me,arguments[arguments.length-1]),Me}},me=0,Wr=ne.length;me<Wr;me++){var ye=ne[me];r[ye]||(r[ye]=ee(ye))}};A();var S=function(ee){q[u]&&console.info("Redefining LocalForage driver: "+u),q[u]=r,Ue[u]=ee,i()};"_support"in r?r._support&&typeof r._support=="function"?r._support().then(S,f):S(!!r._support):S(!0)}catch(W){f(W)}});return R(n,o,a),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(r,o,a){var n=q[r]?d.resolve(q[r]):d.reject(new Error("Driver not found."));return R(n,o,a),n},e.prototype.getSerializer=function(r){var o=d.resolve(de);return R(o,r),o},e.prototype.ready=function(r){var o=this,a=o._driverSet.then(function(){return o._ready===null&&(o._ready=o._initDriver()),o._ready});return R(a,r,r),a},e.prototype.setDriver=function(r,o,a){var n=this;Fe(r)||(r=[r]);var i=this._getSupportedDrivers(r);function f(){n._config.driver=n.driver()}function u(v){return n._extend(v),f(),n._ready=n._initStorage(n._config),n._ready}function s(v){return function(){var m=0;function _(){for(;m<v.length;){var w=v[m];return m++,n._dbInfo=null,n._ready=null,n.getDriver(w).then(u).catch(_)}f();var A=new Error("No available storage method found.");return n._driverSet=d.reject(A),n._driverSet}return _()}}var c=this._driverSet!==null?this._driverSet.catch(function(){return d.resolve()}):d.resolve();return this._driverSet=c.then(function(){var v=i[0];return n._dbInfo=null,n._ready=null,n.getDriver(v).then(function(m){n._driver=m._driver,f(),n._wrapLibraryMethodsWithReady(),n._initDriver=s(i)})}).catch(function(){f();var v=new Error("No available storage method found.");return n._driverSet=d.reject(v),n._driverSet}),R(this._driverSet,o,a),this._driverSet},e.prototype.supports=function(r){return!!Ue[r]},e.prototype._extend=function(r){he(this,r)},e.prototype._getSupportedDrivers=function(r){for(var o=[],a=0,n=r.length;a<n;a++){var i=r[a];this.supports(i)&&o.push(i)}return o},e.prototype._wrapLibraryMethodsWithReady=function(){for(var r=0,o=ve.length;r<o;r++)Mr(this,ve[r])},e.prototype.createInstance=function(r){return new e(r)},e}(),zr=new Yr;B.exports=zr},{3:3}]},{},[4])(4)})})(Ke);var et=Ke.exports;const rt=Kr(et),pe=rt.createInstance({name:"imageCache",storeName:"images"}),tt=async(U,O)=>{try{await pe.getItem(U)||await pe.setItem(U,O)}catch{}},nt=async U=>{try{const O=await pe.getItem(U);return O?URL.createObjectURL(O):null}catch{return null}},$e=new Map,ot=async(U,O=null)=>{const E=Ve(null);if($e.has(U))return E.value="",E;try{let B=await nt(U);if(B)return E.value=B,E;const F=await Qr.get(U,{responseType:"arraybuffer"}),D=new Uint8Array(F.data).slice(8),p=new Blob([D],{type:F.headers.get("Content-Type")});await tt(U,p),E.value=URL.createObjectURL(p)}catch{O?E.value=O:E.value="",$e.set(U,"")}return E},at=""+new URL("../webp/name-1a519036.webp",import.meta.url).href;const it=["src"],ft=["src"],ut={__name:"DecryptImage",props:{url:{type:String,default:""},radius:{type:Number,default:0},isDecrypt:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingIcon:{type:String,default:at}},setup(U){const O=U;let E=Ve("");const B=Hr(()=>kr(O.radius));return Xr(()=>O.url,async F=>{if(O.isDecrypt){const b=await ot(F);E.value=b.value}else E.value=F},{immediate:!0}),(F,b)=>{const D=qr;return jr(),Jr(D,{src:Zr(E),"lazy-load":"",alt:"",radius:B.value,fit:"cover",onContextmenu:b[0]||(b[0]=We(()=>{},["prevent"])),onDragstart:b[1]||(b[1]=We(()=>{},["prevent"])),class:"wh_root","show-loading":O.showLoading},{loading:Ye(()=>[ze("img",{src:O.loadingIcon,alt:"",class:"wh"},null,8,it)]),error:Ye(()=>[ze("img",{src:O.loadingIcon,alt:"",class:"wh"},null,8,ft)]),_:1},8,["src","radius","show-loading"])}}},dt=Gr(ut,[["__scopeId","data-v-fde11975"]]);export{dt as _,at as i};