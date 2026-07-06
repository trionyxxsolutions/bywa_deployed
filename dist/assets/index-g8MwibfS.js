function Iu(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const l in n)if(l!=="default"&&!(l in e)){const s=Object.getOwnPropertyDescriptor(n,l);s&&Object.defineProperty(e,l,s.get?s:{enumerable:!0,get:()=>n[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}})();function $u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oc={exports:{}},Ma={},cc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn=Symbol.for("react.element"),Fu=Symbol.for("react.portal"),Wu=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),Gu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),Yu=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),Ku=Symbol.for("react.memo"),Qu=Symbol.for("react.lazy"),Pi=Symbol.iterator;function Xu(e){return e===null||typeof e!="object"?null:(e=Pi&&e[Pi]||e["@@iterator"],typeof e=="function"?e:null)}var dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uc=Object.assign,pc={};function Er(e,t,r){this.props=e,this.context=t,this.refs=pc,this.updater=r||dc}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fc(){}fc.prototype=Er.prototype;function Es(e,t,r){this.props=e,this.context=t,this.refs=pc,this.updater=r||dc}var zs=Es.prototype=new fc;zs.constructor=Es;uc(zs,Er.prototype);zs.isPureReactComponent=!0;var Li=Array.isArray,mc=Object.prototype.hasOwnProperty,Ps={current:null},hc={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,r){var n,l={},s=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)mc.call(t,n)&&!hc.hasOwnProperty(n)&&(l[n]=t[n]);var o=arguments.length-2;if(o===1)l.children=r;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)l[n]===void 0&&(l[n]=o[n]);return{$$typeof:Nn,type:e,key:s,ref:i,props:l,_owner:Ps.current}}function Zu(e,t){return{$$typeof:Nn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nn}function qu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ri=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qu(""+e.key):t.toString(36)}function Kn(e,t,r,n,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Nn:case Fu:i=!0}}if(i)return i=e,l=l(i),e=n===""?"."+Xa(i,0):n,Li(l)?(r="",e!=null&&(r=e.replace(Ri,"$&/")+"/"),Kn(l,t,r,"",function(d){return d})):l!=null&&(Ls(l)&&(l=Zu(l,r+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ri,"$&/")+"/")+e)),t.push(l)),1;if(i=0,n=n===""?".":n+":",Li(e))for(var o=0;o<e.length;o++){s=e[o];var c=n+Xa(s,o);i+=Kn(s,t,r,c,l)}else if(c=Xu(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=n+Xa(s,o++),i+=Kn(s,t,r,c,l);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Pn(e,t,r){if(e==null)return e;var n=[],l=0;return Kn(e,n,"","",function(s){return t.call(r,s,l++)}),n}function ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Qn={transition:null},tp={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Qn,ReactCurrentOwner:Ps};function vc(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Pn,forEach:function(e,t,r){Pn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Pn(e,function(){t++}),t},toArray:function(e){return Pn(e,function(t){return t})||[]},only:function(e){if(!Ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Er;F.Fragment=Wu;F.Profiler=Vu;F.PureComponent=Es;F.StrictMode=Uu;F.Suspense=Ju;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;F.act=vc;F.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=uc({},e.props),l=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Ps.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)mc.call(t,c)&&!hc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:Nn,type:e.type,key:l,ref:s,props:n,_owner:i}};F.createContext=function(e){return e={$$typeof:Hu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gu,_context:e},e.Consumer=e};F.createElement=gc;F.createFactory=function(e){var t=gc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Yu,render:e}};F.isValidElement=Ls;F.lazy=function(e){return{$$typeof:Qu,_payload:{_status:-1,_result:e},_init:ep}};F.memo=function(e,t){return{$$typeof:Ku,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Qn.transition;Qn.transition={};try{e()}finally{Qn.transition=t}};F.unstable_act=vc;F.useCallback=function(e,t){return ye.current.useCallback(e,t)};F.useContext=function(e){return ye.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};F.useEffect=function(e,t){return ye.current.useEffect(e,t)};F.useId=function(){return ye.current.useId()};F.useImperativeHandle=function(e,t,r){return ye.current.useImperativeHandle(e,t,r)};F.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ye.current.useMemo(e,t)};F.useReducer=function(e,t,r){return ye.current.useReducer(e,t,r)};F.useRef=function(e){return ye.current.useRef(e)};F.useState=function(e){return ye.current.useState(e)};F.useSyncExternalStore=function(e,t,r){return ye.current.useSyncExternalStore(e,t,r)};F.useTransition=function(){return ye.current.useTransition()};F.version="18.3.1";cc.exports=F;var x=cc.exports;const et=$u(x),rp=Iu({__proto__:null,default:et},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np=x,ap=Symbol.for("react.element"),lp=Symbol.for("react.fragment"),sp=Object.prototype.hasOwnProperty,ip=np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,op={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,r){var n,l={},s=null,i=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)sp.call(t,n)&&!op.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:ap,type:e,key:s,ref:i,props:l,_owner:ip.current}}Ma.Fragment=lp;Ma.jsx=xc;Ma.jsxs=xc;oc.exports=Ma;var a=oc.exports,zl={},_c={exports:{}},Re={},jc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,z){var S=j.length;j.push(z);e:for(;0<S;){var D=S-1>>>1,b=j[D];if(0<l(b,z))j[D]=z,j[S]=b,S=D;else break e}}function r(j){return j.length===0?null:j[0]}function n(j){if(j.length===0)return null;var z=j[0],S=j.pop();if(S!==z){j[0]=S;e:for(var D=0,b=j.length,L=b>>>1;D<L;){var T=2*(D+1)-1,O=j[T],W=T+1,G=j[W];if(0>l(O,S))W<b&&0>l(G,O)?(j[D]=G,j[W]=S,D=W):(j[D]=O,j[T]=S,D=T);else if(W<b&&0>l(G,S))j[D]=G,j[W]=S,D=W;else break e}}return z}function l(j,z){var S=j.sortIndex-z.sortIndex;return S!==0?S:j.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var c=[],d=[],p=1,f=null,m=3,_=!1,v=!1,k=!1,y=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var z=r(d);z!==null;){if(z.callback===null)n(d);else if(z.startTime<=j)n(d),z.sortIndex=z.expirationTime,t(c,z);else break;z=r(d)}}function w(j){if(k=!1,g(j),!v)if(r(c)!==null)v=!0,J(C);else{var z=r(d);z!==null&&A(w,z.startTime-j)}}function C(j,z){v=!1,k&&(k=!1,u(M),M=-1),_=!0;var S=m;try{for(g(z),f=r(c);f!==null&&(!(f.expirationTime>z)||j&&!B());){var D=f.callback;if(typeof D=="function"){f.callback=null,m=f.priorityLevel;var b=D(f.expirationTime<=z);z=e.unstable_now(),typeof b=="function"?f.callback=b:f===r(c)&&n(c),g(z)}else n(c);f=r(c)}if(f!==null)var L=!0;else{var T=r(d);T!==null&&A(w,T.startTime-z),L=!1}return L}finally{f=null,m=S,_=!1}}var P=!1,E=null,M=-1,U=5,I=-1;function B(){return!(e.unstable_now()-I<U)}function $(){if(E!==null){var j=e.unstable_now();I=j;var z=!0;try{z=E(!0,j)}finally{z?Y():(P=!1,E=null)}}else P=!1}var Y;if(typeof h=="function")Y=function(){h($)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=$,Y=function(){ie.postMessage(null)}}else Y=function(){y($,0)};function J(j){E=j,P||(P=!0,Y())}function A(j,z){M=y(function(){j(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||_||(v=!0,J(C))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var S=m;m=z;try{return j()}finally{m=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var S=m;m=j;try{return z()}finally{m=S}},e.unstable_scheduleCallback=function(j,z,S){var D=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?D+S:D):S=D,j){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=S+b,j={id:p++,callback:z,priorityLevel:j,startTime:S,expirationTime:b,sortIndex:-1},S>D?(j.sortIndex=S,t(d,j),r(c)===null&&j===r(d)&&(k?(u(M),M=-1):k=!0,A(w,S-D))):(j.sortIndex=b,t(c,j),v||_||(v=!0,J(C))),j},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(j){var z=m;return function(){var S=m;m=z;try{return j.apply(this,arguments)}finally{m=S}}}})(yc);jc.exports=yc;var cp=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=x,Le=cp;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bc=new Set,ln={};function Kt(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(ln[e]=t,e=0;e<t.length;e++)bc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=Object.prototype.hasOwnProperty,up=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mi={},Ti={};function pp(e){return Pl.call(Ti,e)?!0:Pl.call(Mi,e)?!1:up.test(e)?Ti[e]=!0:(Mi[e]=!0,!1)}function fp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mp(e,t,r,n){if(t===null||typeof t>"u"||fp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,r,n,l,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rs=/[\-:]([a-z])/g;function Ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rs,Ms);me[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rs,Ms);me[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rs,Ms);me[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ts(e,t,r,n){var l=me.hasOwnProperty(t)?me[t]:null;(l!==null?l.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mp(t,r,l,n)&&(r=null),n||l===null?pp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,n=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ot=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ln=Symbol.for("react.element"),rr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),Os=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Bs=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Nc=Symbol.for("react.offscreen"),Ai=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Za;function Gr(e){if(Za===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Za=t&&t[1]||""}return`
`+Za+e}var qa=!1;function el(e,t){if(!e||qa)return"";qa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),s=n.stack.split(`
`),i=l.length-1,o=s.length-1;1<=i&&0<=o&&l[i]!==s[o];)o--;for(;1<=i&&0<=o;i--,o--)if(l[i]!==s[o]){if(i!==1||o!==1)do if(i--,o--,0>o||l[i]!==s[o]){var c=`
`+l[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=o);break}}}finally{qa=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Gr(e):""}function hp(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=el(e.type,!1),e;case 11:return e=el(e.type.render,!1),e;case 1:return e=el(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case rr:return"Portal";case Ll:return"Profiler";case As:return"StrictMode";case Rl:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wc:return(e.displayName||"Context")+".Consumer";case kc:return(e._context.displayName||"Context")+".Provider";case Os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bs:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function gp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===As?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=Sc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){n=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rn(e){e._valueTracker||(e._valueTracker=vp(e))}function Cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Sc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var r=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Oi(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=St(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ec(e,t){t=t.checked,t!=null&&Ts(e,"checked",t,!1)}function Ol(e,t){Ec(e,t);var r=St(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bi(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Bl(e,t,r){(t!=="number"||oa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Hr=Array.isArray;function hr(e,t,r,n){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&n&&(e[r].defaultSelected=!0)}else{for(r=""+St(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Di(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(Hr(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:St(r)}}function zc(e,t){var r=St(t.value),n=St(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ii(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mn,Lc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mn=Mn||document.createElement("div"),Mn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xp=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){xp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Rc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Mc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,l=Rc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,l):e[r]=l}}var _p=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(_p[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,gr=null,vr=null;function $i(e){if(e=En(e)){if(typeof Ul!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Da(t),Ul(e.stateNode,e.type,t))}}function Tc(e){gr?vr?vr.push(e):vr=[e]:gr=e}function Ac(){if(gr){var e=gr,t=vr;if(vr=gr=null,$i(e),t)for(e=0;e<t.length;e++)$i(t[e])}}function Oc(e,t){return e(t)}function Bc(){}var tl=!1;function Dc(e,t,r){if(tl)return e(t,r);tl=!0;try{return Oc(e,t,r)}finally{tl=!1,(gr!==null||vr!==null)&&(Bc(),Ac())}}function on(e,t){var r=e.stateNode;if(r===null)return null;var n=Da(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Vl=!1;if(at)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Vl=!1}function jp(e,t,r,n,l,s,i,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(p){this.onError(p)}}var Qr=!1,ca=null,da=!1,Gl=null,yp={onError:function(e){Qr=!0,ca=e}};function bp(e,t,r,n,l,s,i,o,c){Qr=!1,ca=null,jp.apply(yp,arguments)}function kp(e,t,r,n,l,s,i,o,c){if(bp.apply(this,arguments),Qr){if(Qr){var d=ca;Qr=!1,ca=null}else throw Error(N(198));da||(da=!0,Gl=d)}}function Qt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ic(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fi(e){if(Qt(e)!==e)throw Error(N(188))}function wp(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var l=r.return;if(l===null)break;var s=l.alternate;if(s===null){if(n=l.return,n!==null){r=n;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===r)return Fi(l),e;if(s===n)return Fi(l),t;s=s.sibling}throw Error(N(188))}if(r.return!==n.return)r=l,n=s;else{for(var i=!1,o=l.child;o;){if(o===r){i=!0,r=l,n=s;break}if(o===n){i=!0,n=l,r=s;break}o=o.sibling}if(!i){for(o=s.child;o;){if(o===r){i=!0,r=s,n=l;break}if(o===n){i=!0,n=s,r=l;break}o=o.sibling}if(!i)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function $c(e){return e=wp(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var Wc=Le.unstable_scheduleCallback,Wi=Le.unstable_cancelCallback,Np=Le.unstable_shouldYield,Sp=Le.unstable_requestPaint,ae=Le.unstable_now,Cp=Le.unstable_getCurrentPriorityLevel,Is=Le.unstable_ImmediatePriority,Uc=Le.unstable_UserBlockingPriority,ua=Le.unstable_NormalPriority,Ep=Le.unstable_LowPriority,Vc=Le.unstable_IdlePriority,Ta=null,Qe=null;function zp(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Ta,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Rp,Pp=Math.log,Lp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Pp(e)/Lp|0)|0}var Tn=64,An=4194304;function Yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pa(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,l=e.suspendedLanes,s=e.pingedLanes,i=r&268435455;if(i!==0){var o=i&~l;o!==0?n=Yr(o):(s&=i,s!==0&&(n=Yr(s)))}else i=r&~l,i!==0?n=Yr(i):s!==0&&(n=Yr(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&l)&&(l=n&-n,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ve(t),l=1<<r,n|=e[r],t&=~l;return n}function Mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Ve(s),o=1<<i,c=l[i];c===-1?(!(o&r)||o&n)&&(l[i]=Mp(o,t)):c<=t&&(e.expiredLanes|=o),s&=~o}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gc(){var e=Tn;return Tn<<=1,!(Tn&4194240)&&(Tn=64),e}function rl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=r}function Ap(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Ve(r),s=1<<l;t[l]=0,n[l]=-1,e[l]=-1,r&=~s}}function $s(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ve(r),l=1<<n;l&t|e[n]&t&&(e[n]|=t),r&=~l}}var H=0;function Hc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yc,Fs,Jc,Kc,Qc,Yl=!1,On=[],vt=null,xt=null,_t=null,cn=new Map,dn=new Map,pt=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ui(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(t.pointerId)}}function Or(e,t,r,n,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[l]},t!==null&&(t=En(t),t!==null&&Fs(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Bp(e,t,r,n,l){switch(t){case"focusin":return vt=Or(vt,e,t,r,n,l),!0;case"dragenter":return xt=Or(xt,e,t,r,n,l),!0;case"mouseover":return _t=Or(_t,e,t,r,n,l),!0;case"pointerover":var s=l.pointerId;return cn.set(s,Or(cn.get(s)||null,e,t,r,n,l)),!0;case"gotpointercapture":return s=l.pointerId,dn.set(s,Or(dn.get(s)||null,e,t,r,n,l)),!0}return!1}function Xc(e){var t=It(e.target);if(t!==null){var r=Qt(t);if(r!==null){if(t=r.tag,t===13){if(t=Ic(r),t!==null){e.blockedOn=t,Qc(e.priority,function(){Jc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Wl=n,r.target.dispatchEvent(n),Wl=null}else return t=En(r),t!==null&&Fs(t),e.blockedOn=r,!1;t.shift()}return!0}function Vi(e,t,r){Xn(e)&&r.delete(t)}function Dp(){Yl=!1,vt!==null&&Xn(vt)&&(vt=null),xt!==null&&Xn(xt)&&(xt=null),_t!==null&&Xn(_t)&&(_t=null),cn.forEach(Vi),dn.forEach(Vi)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Dp)))}function un(e){function t(l){return Br(l,e)}if(0<On.length){Br(On[0],e);for(var r=1;r<On.length;r++){var n=On[r];n.blockedOn===e&&(n.blockedOn=null)}}for(vt!==null&&Br(vt,e),xt!==null&&Br(xt,e),_t!==null&&Br(_t,e),cn.forEach(t),dn.forEach(t),r=0;r<pt.length;r++)n=pt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(r=pt[0],r.blockedOn===null);)Xc(r),r.blockedOn===null&&pt.shift()}var xr=ot.ReactCurrentBatchConfig,fa=!0;function Ip(e,t,r,n){var l=H,s=xr.transition;xr.transition=null;try{H=1,Ws(e,t,r,n)}finally{H=l,xr.transition=s}}function $p(e,t,r,n){var l=H,s=xr.transition;xr.transition=null;try{H=4,Ws(e,t,r,n)}finally{H=l,xr.transition=s}}function Ws(e,t,r,n){if(fa){var l=Jl(e,t,r,n);if(l===null)pl(e,t,n,ma,r),Ui(e,n);else if(Bp(l,e,t,r,n))n.stopPropagation();else if(Ui(e,n),t&4&&-1<Op.indexOf(e)){for(;l!==null;){var s=En(l);if(s!==null&&Yc(s),s=Jl(e,t,r,n),s===null&&pl(e,t,n,ma,r),s===l)break;l=s}l!==null&&n.stopPropagation()}else pl(e,t,n,null,r)}}var ma=null;function Jl(e,t,r,n){if(ma=null,e=Ds(n),e=It(e),e!==null)if(t=Qt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ic(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ma=e,null}function Zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cp()){case Is:return 1;case Uc:return 4;case ua:case Ep:return 16;case Vc:return 536870912;default:return 16}default:return 16}}var mt=null,Us=null,Zn=null;function qc(){if(Zn)return Zn;var e,t=Us,r=t.length,n,l="value"in mt?mt.value:mt.textContent,s=l.length;for(e=0;e<r&&t[e]===l[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===l[s-n];n++);return Zn=l.slice(e,1<n?1-n:void 0)}function qn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Gi(){return!1}function Me(e){function t(r,n,l,s,i){this._reactName=r,this._targetInst=l,this.type=n,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bn:Gi,this.isPropagationStopped=Gi,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=Me(zr),Cn=te({},zr,{view:0,detail:0}),Fp=Me(Cn),nl,al,Dr,Aa=te({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(nl=e.screenX-Dr.screenX,al=e.screenY-Dr.screenY):al=nl=0,Dr=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:al}}),Hi=Me(Aa),Wp=te({},Aa,{dataTransfer:0}),Up=Me(Wp),Vp=te({},Cn,{relatedTarget:0}),ll=Me(Vp),Gp=te({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hp=Me(Gp),Yp=te({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=Me(Yp),Kp=te({},zr,{data:0}),Yi=Me(Kp),Qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function Gs(){return qp}var ef=te({},Cn,{key:function(e){if(e.key){var t=Qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?qn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tf=Me(ef),rf=te({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ji=Me(rf),nf=te({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),af=Me(nf),lf=te({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sf=Me(lf),of=te({},Aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=Me(of),df=[9,13,27,32],Hs=at&&"CompositionEvent"in window,Xr=null;at&&"documentMode"in document&&(Xr=document.documentMode);var uf=at&&"TextEvent"in window&&!Xr,ed=at&&(!Hs||Xr&&8<Xr&&11>=Xr),Ki=" ",Qi=!1;function td(e,t){switch(e){case"keyup":return df.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function pf(e,t){switch(e){case"compositionend":return rd(t);case"keypress":return t.which!==32?null:(Qi=!0,Ki);case"textInput":return e=t.data,e===Ki&&Qi?null:e;default:return null}}function ff(e,t){if(ar)return e==="compositionend"||!Hs&&td(e,t)?(e=qc(),Zn=Us=mt=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mf[e.type]:t==="textarea"}function nd(e,t,r,n){Tc(n),t=ha(t,"onChange"),0<t.length&&(r=new Vs("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Zr=null,pn=null;function hf(e){md(e,0)}function Oa(e){var t=ir(e);if(Cc(t))return e}function gf(e,t){if(e==="change")return t}var ad=!1;if(at){var sl;if(at){var il="oninput"in document;if(!il){var Zi=document.createElement("div");Zi.setAttribute("oninput","return;"),il=typeof Zi.oninput=="function"}sl=il}else sl=!1;ad=sl&&(!document.documentMode||9<document.documentMode)}function qi(){Zr&&(Zr.detachEvent("onpropertychange",ld),pn=Zr=null)}function ld(e){if(e.propertyName==="value"&&Oa(pn)){var t=[];nd(t,pn,e,Ds(e)),Dc(hf,t)}}function vf(e,t,r){e==="focusin"?(qi(),Zr=t,pn=r,Zr.attachEvent("onpropertychange",ld)):e==="focusout"&&qi()}function xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oa(pn)}function _f(e,t){if(e==="click")return Oa(t)}function jf(e,t){if(e==="input"||e==="change")return Oa(t)}function yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:yf;function fn(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var l=r[n];if(!Pl.call(t,l)||!He(e[l],t[l]))return!1}return!0}function eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function to(e,t){var r=eo(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=eo(r)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function id(){for(var e=window,t=oa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oa(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bf(e){var t=id(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&sd(r.ownerDocument.documentElement,r)){if(n!==null&&Ys(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,s=Math.min(n.start,l);n=n.end===void 0?s:Math.min(n.end,l),!e.extend&&s>n&&(l=n,n=s,s=l),l=to(r,s);var i=to(r,n);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kf=at&&"documentMode"in document&&11>=document.documentMode,lr=null,Kl=null,qr=null,Ql=!1;function ro(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ql||lr==null||lr!==oa(n)||(n=lr,"selectionStart"in n&&Ys(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qr&&fn(qr,n)||(qr=n,n=ha(Kl,"onSelect"),0<n.length&&(t=new Vs("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=lr)))}function Dn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var sr={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionend:Dn("Transition","TransitionEnd")},ol={},od={};at&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Ba(e){if(ol[e])return ol[e];if(!sr[e])return e;var t=sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in od)return ol[e]=t[r];return e}var cd=Ba("animationend"),dd=Ba("animationiteration"),ud=Ba("animationstart"),pd=Ba("transitionend"),fd=new Map,no="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){fd.set(e,t),Kt(t,[e])}for(var cl=0;cl<no.length;cl++){var dl=no[cl],wf=dl.toLowerCase(),Nf=dl[0].toUpperCase()+dl.slice(1);Et(wf,"on"+Nf)}Et(cd,"onAnimationEnd");Et(dd,"onAnimationIteration");Et(ud,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(pd,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function ao(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,kp(n,t,void 0,e),e.currentTarget=null}function md(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],l=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var i=n.length-1;0<=i;i--){var o=n[i],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==s&&l.isPropagationStopped())break e;ao(l,o,d),s=c}else for(i=0;i<n.length;i++){if(o=n[i],c=o.instance,d=o.currentTarget,o=o.listener,c!==s&&l.isPropagationStopped())break e;ao(l,o,d),s=c}}}if(da)throw e=Gl,da=!1,Gl=null,e}function Q(e,t){var r=t[ts];r===void 0&&(r=t[ts]=new Set);var n=e+"__bubble";r.has(n)||(hd(t,e,2,!1),r.add(n))}function ul(e,t,r){var n=0;t&&(n|=4),hd(r,e,n,t)}var In="_reactListening"+Math.random().toString(36).slice(2);function mn(e){if(!e[In]){e[In]=!0,bc.forEach(function(r){r!=="selectionchange"&&(Sf.has(r)||ul(r,!1,e),ul(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[In]||(t[In]=!0,ul("selectionchange",!1,t))}}function hd(e,t,r,n){switch(Zc(t)){case 1:var l=Ip;break;case 4:l=$p;break;default:l=Ws}r=l.bind(null,t,r,e),l=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function pl(e,t,r,n,l){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var o=n.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;i=i.return}for(;o!==null;){if(i=It(o),i===null)return;if(c=i.tag,c===5||c===6){n=s=i;continue e}o=o.parentNode}}n=n.return}Dc(function(){var d=s,p=Ds(r),f=[];e:{var m=fd.get(e);if(m!==void 0){var _=Vs,v=e;switch(e){case"keypress":if(qn(r)===0)break e;case"keydown":case"keyup":_=tf;break;case"focusin":v="focus",_=ll;break;case"focusout":v="blur",_=ll;break;case"beforeblur":case"afterblur":_=ll;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Hi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=af;break;case cd:case dd:case ud:_=Hp;break;case pd:_=sf;break;case"scroll":_=Fp;break;case"wheel":_=cf;break;case"copy":case"cut":case"paste":_=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ji}var k=(t&4)!==0,y=!k&&e==="scroll",u=k?m!==null?m+"Capture":null:m;k=[];for(var h=d,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,u!==null&&(w=on(h,u),w!=null&&k.push(hn(h,w,g)))),y)break;h=h.return}0<k.length&&(m=new _(m,v,null,r,p),f.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",m&&r!==Wl&&(v=r.relatedTarget||r.fromElement)&&(It(v)||v[lt]))break e;if((_||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,_?(v=r.relatedTarget||r.toElement,_=d,v=v?It(v):null,v!==null&&(y=Qt(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=d),_!==v)){if(k=Hi,w="onMouseLeave",u="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ji,w="onPointerLeave",u="onPointerEnter",h="pointer"),y=_==null?m:ir(_),g=v==null?m:ir(v),m=new k(w,h+"leave",_,r,p),m.target=y,m.relatedTarget=g,w=null,It(p)===d&&(k=new k(u,h+"enter",v,r,p),k.target=g,k.relatedTarget=y,w=k),y=w,_&&v)t:{for(k=_,u=v,h=0,g=k;g;g=Zt(g))h++;for(g=0,w=u;w;w=Zt(w))g++;for(;0<h-g;)k=Zt(k),h--;for(;0<g-h;)u=Zt(u),g--;for(;h--;){if(k===u||u!==null&&k===u.alternate)break t;k=Zt(k),u=Zt(u)}k=null}else k=null;_!==null&&lo(f,m,_,k,!1),v!==null&&y!==null&&lo(f,y,v,k,!0)}}e:{if(m=d?ir(d):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var C=gf;else if(Xi(m))if(ad)C=jf;else{C=xf;var P=vf}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=_f);if(C&&(C=C(e,d))){nd(f,C,r,p);break e}P&&P(e,m,d),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Bl(m,"number",m.value)}switch(P=d?ir(d):window,e){case"focusin":(Xi(P)||P.contentEditable==="true")&&(lr=P,Kl=d,qr=null);break;case"focusout":qr=Kl=lr=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,ro(f,r,p);break;case"selectionchange":if(kf)break;case"keydown":case"keyup":ro(f,r,p)}var E;if(Hs)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ar?td(e,r)&&(M="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(M="onCompositionStart");M&&(ed&&r.locale!=="ko"&&(ar||M!=="onCompositionStart"?M==="onCompositionEnd"&&ar&&(E=qc()):(mt=p,Us="value"in mt?mt.value:mt.textContent,ar=!0)),P=ha(d,M),0<P.length&&(M=new Yi(M,e,null,r,p),f.push({event:M,listeners:P}),E?M.data=E:(E=rd(r),E!==null&&(M.data=E)))),(E=uf?pf(e,r):ff(e,r))&&(d=ha(d,"onBeforeInput"),0<d.length&&(p=new Yi("onBeforeInput","beforeinput",null,r,p),f.push({event:p,listeners:d}),p.data=E))}md(f,t)})}function hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ha(e,t){for(var r=t+"Capture",n=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=on(e,r),s!=null&&n.unshift(hn(e,s,l)),s=on(e,t),s!=null&&n.push(hn(e,s,l))),e=e.return}return n}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lo(e,t,r,n,l){for(var s=t._reactName,i=[];r!==null&&r!==n;){var o=r,c=o.alternate,d=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&d!==null&&(o=d,l?(c=on(r,s),c!=null&&i.unshift(hn(r,c,o))):l||(c=on(r,s),c!=null&&i.push(hn(r,c,o)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Cf=/\r\n?/g,Ef=/\u0000|\uFFFD/g;function so(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(Ef,"")}function $n(e,t,r){if(t=so(t),so(e)!==t&&r)throw Error(N(425))}function ga(){}var Xl=null,Zl=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,zf=typeof clearTimeout=="function"?clearTimeout:void 0,io=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof io<"u"?function(e){return io.resolve(null).then(e).catch(Lf)}:es;function Lf(e){setTimeout(function(){throw e})}function fl(e,t){var r=t,n=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(n===0){e.removeChild(l),un(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=l}while(r);un(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function oo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Pr,gn="__reactProps$"+Pr,lt="__reactContainer$"+Pr,ts="__reactEvents$"+Pr,Rf="__reactListeners$"+Pr,Mf="__reactHandles$"+Pr;function It(e){var t=e[Ke];if(t)return t;for(var r=e.parentNode;r;){if(t=r[lt]||r[Ke]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=oo(e);e!==null;){if(r=e[Ke])return r;e=oo(e)}return t}e=r,r=e.parentNode}return null}function En(e){return e=e[Ke]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Da(e){return e[gn]||null}var rs=[],or=-1;function zt(e){return{current:e}}function X(e){0>or||(e.current=rs[or],rs[or]=null,or--)}function K(e,t){or++,rs[or]=e.current,e.current=t}var Ct={},xe=zt(Ct),Ne=zt(!1),Vt=Ct;function br(e,t){var r=e.type.contextTypes;if(!r)return Ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in r)l[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Se(e){return e=e.childContextTypes,e!=null}function va(){X(Ne),X(xe)}function co(e,t,r){if(xe.current!==Ct)throw Error(N(168));K(xe,t),K(Ne,r)}function gd(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var l in n)if(!(l in t))throw Error(N(108,gp(e)||"Unknown",l));return te({},r,n)}function xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Vt=xe.current,K(xe,e),K(Ne,Ne.current),!0}function uo(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=gd(e,t,Vt),n.__reactInternalMemoizedMergedChildContext=e,X(Ne),X(xe),K(xe,e)):X(Ne),K(Ne,r)}var qe=null,Ia=!1,ml=!1;function vd(e){qe===null?qe=[e]:qe.push(e)}function Tf(e){Ia=!0,vd(e)}function Pt(){if(!ml&&qe!==null){ml=!0;var e=0,t=H;try{var r=qe;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}qe=null,Ia=!1}catch(l){throw qe!==null&&(qe=qe.slice(e+1)),Wc(Is,Pt),l}finally{H=t,ml=!1}}return null}var cr=[],dr=0,_a=null,ja=0,Te=[],Ae=0,Gt=null,tt=1,rt="";function Ot(e,t){cr[dr++]=ja,cr[dr++]=_a,_a=e,ja=t}function xd(e,t,r){Te[Ae++]=tt,Te[Ae++]=rt,Te[Ae++]=Gt,Gt=e;var n=tt;e=rt;var l=32-Ve(n)-1;n&=~(1<<l),r+=1;var s=32-Ve(t)+l;if(30<s){var i=l-l%5;s=(n&(1<<i)-1).toString(32),n>>=i,l-=i,tt=1<<32-Ve(t)+l|r<<l|n,rt=s+e}else tt=1<<s|r<<l|n,rt=e}function Js(e){e.return!==null&&(Ot(e,1),xd(e,1,0))}function Ks(e){for(;e===_a;)_a=cr[--dr],cr[dr]=null,ja=cr[--dr],cr[dr]=null;for(;e===Gt;)Gt=Te[--Ae],Te[Ae]=null,rt=Te[--Ae],Te[Ae]=null,tt=Te[--Ae],Te[Ae]=null}var Pe=null,ze=null,Z=!1,Ue=null;function _d(e,t){var r=Oe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function po(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,ze=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Gt!==null?{id:tt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Oe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pe=e,ze=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(Z){var t=ze;if(t){var r=t;if(!po(e,t)){if(ns(e))throw Error(N(418));t=jt(r.nextSibling);var n=Pe;t&&po(e,t)?_d(n,r):(e.flags=e.flags&-4097|2,Z=!1,Pe=e)}}else{if(ns(e))throw Error(N(418));e.flags=e.flags&-4097|2,Z=!1,Pe=e}}}function fo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Fn(e){if(e!==Pe)return!1;if(!Z)return fo(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=ze)){if(ns(e))throw jd(),Error(N(418));for(;t;)_d(e,t),t=jt(t.nextSibling)}if(fo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ze=jt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Pe?jt(e.stateNode.nextSibling):null;return!0}function jd(){for(var e=ze;e;)e=jt(e.nextSibling)}function kr(){ze=Pe=null,Z=!1}function Qs(e){Ue===null?Ue=[e]:Ue.push(e)}var Af=ot.ReactCurrentBatchConfig;function Ir(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var l=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var o=l.refs;i===null?delete o[s]:o[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function Wn(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mo(e){var t=e._init;return t(e._payload)}function yd(e){function t(u,h){if(e){var g=u.deletions;g===null?(u.deletions=[h],u.flags|=16):g.push(h)}}function r(u,h){if(!e)return null;for(;h!==null;)t(u,h),h=h.sibling;return null}function n(u,h){for(u=new Map;h!==null;)h.key!==null?u.set(h.key,h):u.set(h.index,h),h=h.sibling;return u}function l(u,h){return u=wt(u,h),u.index=0,u.sibling=null,u}function s(u,h,g){return u.index=g,e?(g=u.alternate,g!==null?(g=g.index,g<h?(u.flags|=2,h):g):(u.flags|=2,h)):(u.flags|=1048576,h)}function i(u){return e&&u.alternate===null&&(u.flags|=2),u}function o(u,h,g,w){return h===null||h.tag!==6?(h=yl(g,u.mode,w),h.return=u,h):(h=l(h,g),h.return=u,h)}function c(u,h,g,w){var C=g.type;return C===nr?p(u,h,g.props.children,w,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&mo(C)===h.type)?(w=l(h,g.props),w.ref=Ir(u,h,g),w.return=u,w):(w=sa(g.type,g.key,g.props,null,u.mode,w),w.ref=Ir(u,h,g),w.return=u,w)}function d(u,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=bl(g,u.mode,w),h.return=u,h):(h=l(h,g.children||[]),h.return=u,h)}function p(u,h,g,w,C){return h===null||h.tag!==7?(h=Ut(g,u.mode,w,C),h.return=u,h):(h=l(h,g),h.return=u,h)}function f(u,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=yl(""+h,u.mode,g),h.return=u,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ln:return g=sa(h.type,h.key,h.props,null,u.mode,g),g.ref=Ir(u,null,h),g.return=u,g;case rr:return h=bl(h,u.mode,g),h.return=u,h;case dt:var w=h._init;return f(u,w(h._payload),g)}if(Hr(h)||Tr(h))return h=Ut(h,u.mode,g,null),h.return=u,h;Wn(u,h)}return null}function m(u,h,g,w){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:o(u,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ln:return g.key===C?c(u,h,g,w):null;case rr:return g.key===C?d(u,h,g,w):null;case dt:return C=g._init,m(u,h,C(g._payload),w)}if(Hr(g)||Tr(g))return C!==null?null:p(u,h,g,w,null);Wn(u,g)}return null}function _(u,h,g,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(g)||null,o(h,u,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ln:return u=u.get(w.key===null?g:w.key)||null,c(h,u,w,C);case rr:return u=u.get(w.key===null?g:w.key)||null,d(h,u,w,C);case dt:var P=w._init;return _(u,h,g,P(w._payload),C)}if(Hr(w)||Tr(w))return u=u.get(g)||null,p(h,u,w,C,null);Wn(h,w)}return null}function v(u,h,g,w){for(var C=null,P=null,E=h,M=h=0,U=null;E!==null&&M<g.length;M++){E.index>M?(U=E,E=null):U=E.sibling;var I=m(u,E,g[M],w);if(I===null){E===null&&(E=U);break}e&&E&&I.alternate===null&&t(u,E),h=s(I,h,M),P===null?C=I:P.sibling=I,P=I,E=U}if(M===g.length)return r(u,E),Z&&Ot(u,M),C;if(E===null){for(;M<g.length;M++)E=f(u,g[M],w),E!==null&&(h=s(E,h,M),P===null?C=E:P.sibling=E,P=E);return Z&&Ot(u,M),C}for(E=n(u,E);M<g.length;M++)U=_(E,u,M,g[M],w),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?M:U.key),h=s(U,h,M),P===null?C=U:P.sibling=U,P=U);return e&&E.forEach(function(B){return t(u,B)}),Z&&Ot(u,M),C}function k(u,h,g,w){var C=Tr(g);if(typeof C!="function")throw Error(N(150));if(g=C.call(g),g==null)throw Error(N(151));for(var P=C=null,E=h,M=h=0,U=null,I=g.next();E!==null&&!I.done;M++,I=g.next()){E.index>M?(U=E,E=null):U=E.sibling;var B=m(u,E,I.value,w);if(B===null){E===null&&(E=U);break}e&&E&&B.alternate===null&&t(u,E),h=s(B,h,M),P===null?C=B:P.sibling=B,P=B,E=U}if(I.done)return r(u,E),Z&&Ot(u,M),C;if(E===null){for(;!I.done;M++,I=g.next())I=f(u,I.value,w),I!==null&&(h=s(I,h,M),P===null?C=I:P.sibling=I,P=I);return Z&&Ot(u,M),C}for(E=n(u,E);!I.done;M++,I=g.next())I=_(E,u,M,I.value,w),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?M:I.key),h=s(I,h,M),P===null?C=I:P.sibling=I,P=I);return e&&E.forEach(function($){return t(u,$)}),Z&&Ot(u,M),C}function y(u,h,g,w){if(typeof g=="object"&&g!==null&&g.type===nr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ln:e:{for(var C=g.key,P=h;P!==null;){if(P.key===C){if(C=g.type,C===nr){if(P.tag===7){r(u,P.sibling),h=l(P,g.props.children),h.return=u,u=h;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&mo(C)===P.type){r(u,P.sibling),h=l(P,g.props),h.ref=Ir(u,P,g),h.return=u,u=h;break e}r(u,P);break}else t(u,P);P=P.sibling}g.type===nr?(h=Ut(g.props.children,u.mode,w,g.key),h.return=u,u=h):(w=sa(g.type,g.key,g.props,null,u.mode,w),w.ref=Ir(u,h,g),w.return=u,u=w)}return i(u);case rr:e:{for(P=g.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(u,h.sibling),h=l(h,g.children||[]),h.return=u,u=h;break e}else{r(u,h);break}else t(u,h);h=h.sibling}h=bl(g,u.mode,w),h.return=u,u=h}return i(u);case dt:return P=g._init,y(u,h,P(g._payload),w)}if(Hr(g))return v(u,h,g,w);if(Tr(g))return k(u,h,g,w);Wn(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(u,h.sibling),h=l(h,g),h.return=u,u=h):(r(u,h),h=yl(g,u.mode,w),h.return=u,u=h),i(u)):r(u,h)}return y}var wr=yd(!0),bd=yd(!1),ya=zt(null),ba=null,ur=null,Xs=null;function Zs(){Xs=ur=ba=null}function qs(e){var t=ya.current;X(ya),e._currentValue=t}function ls(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function _r(e,t){ba=e,Xs=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Xs!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(ba===null)throw Error(N(308));ur=e,ba.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var $t=null;function ei(e){$t===null?$t=[e]:$t.push(e)}function kd(e,t,r,n){var l=t.interleaved;return l===null?(r.next=r,ei(t)):(r.next=l.next,l.next=r),t.interleaved=r,st(e,n)}function st(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ut=!1;function ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,V&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,st(e,r)}return l=n.interleaved,l===null?(t.next=t,ei(n)):(t.next=l.next,l.next=t),n.interleaved=t,st(e,r)}function ea(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,$s(e,r)}}function ho(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var l=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?l=s=i:s=s.next=i,r=r.next}while(r!==null);s===null?l=s=t:s=s.next=t}else l=s=t;r={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ka(e,t,r,n){var l=e.updateQueue;ut=!1;var s=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var c=o,d=c.next;c.next=null,i===null?s=d:i.next=d,i=c;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==i&&(o===null?p.firstBaseUpdate=d:o.next=d,p.lastBaseUpdate=c))}if(s!==null){var f=l.baseState;i=0,p=d=c=null,o=s;do{var m=o.lane,_=o.eventTime;if((n&m)===m){p!==null&&(p=p.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,k=o;switch(m=t,_=r,k.tag){case 1:if(v=k.payload,typeof v=="function"){f=v.call(_,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,m=typeof v=="function"?v.call(_,f,m):v,m==null)break e;f=te({},f,m);break e;case 2:ut=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[o]:m.push(o))}else _={eventTime:_,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(d=p=_,c=f):p=p.next=_,i|=m;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;m=o,o=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(p===null&&(c=f),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);Yt|=i,e.lanes=i,e.memoizedState=f}}function go(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],l=n.callback;if(l!==null){if(n.callback=null,n=r,typeof l!="function")throw Error(N(191,l));l.call(n)}}}var zn={},Xe=zt(zn),vn=zt(zn),xn=zt(zn);function Ft(e){if(e===zn)throw Error(N(174));return e}function ri(e,t){switch(K(xn,t),K(vn,e),K(Xe,zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}X(Xe),K(Xe,t)}function Nr(){X(Xe),X(vn),X(xn)}function Nd(e){Ft(xn.current);var t=Ft(Xe.current),r=Il(t,e.type);t!==r&&(K(vn,e),K(Xe,r))}function ni(e){vn.current===e&&(X(Xe),X(vn))}var q=zt(0);function wa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=[];function ai(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var ta=ot.ReactCurrentDispatcher,gl=ot.ReactCurrentBatchConfig,Ht=0,ee=null,oe=null,de=null,Na=!1,en=!1,_n=0,Of=0;function he(){throw Error(N(321))}function li(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!He(e[r],t[r]))return!1;return!0}function si(e,t,r,n,l,s){if(Ht=s,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ta.current=e===null||e.memoizedState===null?$f:Ff,e=r(n,l),en){s=0;do{if(en=!1,_n=0,25<=s)throw Error(N(301));s+=1,de=oe=null,t.updateQueue=null,ta.current=Wf,e=r(n,l)}while(en)}if(ta.current=Sa,t=oe!==null&&oe.next!==null,Ht=0,de=oe=ee=null,Na=!1,t)throw Error(N(300));return e}function ii(){var e=_n!==0;return _n=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ee.memoizedState=de=e:de=de.next=e,de}function Ie(){if(oe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=de===null?ee.memoizedState:de.next;if(t!==null)de=t,oe=e;else{if(e===null)throw Error(N(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?ee.memoizedState=de=e:de=de.next=e}return de}function jn(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=Ie(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=oe,l=n.baseQueue,s=r.pending;if(s!==null){if(l!==null){var i=l.next;l.next=s.next,s.next=i}n.baseQueue=l=s,r.pending=null}if(l!==null){s=l.next,n=n.baseState;var o=i=null,c=null,d=s;do{var p=d.lane;if((Ht&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=f,i=n):c=c.next=f,ee.lanes|=p,Yt|=p}d=d.next}while(d!==null&&d!==s);c===null?i=n:c.next=o,He(n,t.memoizedState)||(we=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){l=e;do s=l.lane,ee.lanes|=s,Yt|=s,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function xl(e){var t=Ie(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,l=r.pending,s=t.memoizedState;if(l!==null){r.pending=null;var i=l=l.next;do s=e(s,i.action),i=i.next;while(i!==l);He(s,t.memoizedState)||(we=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Sd(){}function Cd(e,t){var r=ee,n=Ie(),l=t(),s=!He(n.memoizedState,l);if(s&&(n.memoizedState=l,we=!0),n=n.queue,oi(Pd.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||de!==null&&de.memoizedState.tag&1){if(r.flags|=2048,yn(9,zd.bind(null,r,n,l,t),void 0,null),ue===null)throw Error(N(349));Ht&30||Ed(r,t,l)}return l}function Ed(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function zd(e,t,r,n){t.value=r,t.getSnapshot=n,Ld(t)&&Rd(e)}function Pd(e,t,r){return r(function(){Ld(t)&&Rd(e)})}function Ld(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!He(e,r)}catch{return!0}}function Rd(e){var t=st(e,1);t!==null&&Ge(t,e,1,-1)}function vo(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t.queue=e,e=e.dispatch=If.bind(null,ee,e),[t.memoizedState,e]}function yn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Md(){return Ie().memoizedState}function ra(e,t,r,n){var l=Je();ee.flags|=e,l.memoizedState=yn(1|t,r,void 0,n===void 0?null:n)}function $a(e,t,r,n){var l=Ie();n=n===void 0?null:n;var s=void 0;if(oe!==null){var i=oe.memoizedState;if(s=i.destroy,n!==null&&li(n,i.deps)){l.memoizedState=yn(t,r,s,n);return}}ee.flags|=e,l.memoizedState=yn(1|t,r,s,n)}function xo(e,t){return ra(8390656,8,e,t)}function oi(e,t){return $a(2048,8,e,t)}function Td(e,t){return $a(4,2,e,t)}function Ad(e,t){return $a(4,4,e,t)}function Od(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bd(e,t,r){return r=r!=null?r.concat([e]):null,$a(4,4,Od.bind(null,t,e),r)}function ci(){}function Dd(e,t){var r=Ie();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&li(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Id(e,t){var r=Ie();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&li(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function $d(e,t,r){return Ht&21?(He(r,t)||(r=Gc(),ee.lanes|=r,Yt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=r)}function Bf(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=gl.transition;gl.transition={};try{e(!1),t()}finally{H=r,gl.transition=n}}function Fd(){return Ie().memoizedState}function Df(e,t,r){var n=kt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Wd(e))Ud(t,r);else if(r=kd(e,t,r,n),r!==null){var l=je();Ge(r,e,n,l),Vd(r,t,n)}}function If(e,t,r){var n=kt(e),l={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wd(e))Ud(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,o=s(i,r);if(l.hasEagerState=!0,l.eagerState=o,He(o,i)){var c=t.interleaved;c===null?(l.next=l,ei(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}r=kd(e,t,l,n),r!==null&&(l=je(),Ge(r,e,n,l),Vd(r,t,n))}}function Wd(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Ud(e,t){en=Na=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Vd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,$s(e,r)}}var Sa={readContext:De,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},$f={readContext:De,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:xo,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ra(4194308,4,Od.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var r=Je();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Je();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Df.bind(null,ee,e),[n.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:vo,useDebugValue:ci,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=vo(!1),t=e[0];return e=Bf.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ee,l=Je();if(Z){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),ue===null)throw Error(N(349));Ht&30||Ed(n,t,r)}l.memoizedState=r;var s={value:r,getSnapshot:t};return l.queue=s,xo(Pd.bind(null,n,s,e),[e]),n.flags|=2048,yn(9,zd.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Je(),t=ue.identifierPrefix;if(Z){var r=rt,n=tt;r=(n&~(1<<32-Ve(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=_n++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Of++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:De,useCallback:Dd,useContext:De,useEffect:oi,useImperativeHandle:Bd,useInsertionEffect:Td,useLayoutEffect:Ad,useMemo:Id,useReducer:vl,useRef:Md,useState:function(){return vl(jn)},useDebugValue:ci,useDeferredValue:function(e){var t=Ie();return $d(t,oe.memoizedState,e)},useTransition:function(){var e=vl(jn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Sd,useSyncExternalStore:Cd,useId:Fd,unstable_isNewReconciler:!1},Wf={readContext:De,useCallback:Dd,useContext:De,useEffect:oi,useImperativeHandle:Bd,useInsertionEffect:Td,useLayoutEffect:Ad,useMemo:Id,useReducer:xl,useRef:Md,useState:function(){return xl(jn)},useDebugValue:ci,useDeferredValue:function(e){var t=Ie();return oe===null?t.memoizedState=e:$d(t,oe.memoizedState,e)},useTransition:function(){var e=xl(jn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Sd,useSyncExternalStore:Cd,useId:Fd,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ss(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:te({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Fa={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=je(),l=kt(e),s=nt(n,l);s.payload=t,r!=null&&(s.callback=r),t=yt(e,s,l),t!==null&&(Ge(t,e,l,n),ea(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=je(),l=kt(e),s=nt(n,l);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=yt(e,s,l),t!==null&&(Ge(t,e,l,n),ea(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=je(),n=kt(e),l=nt(r,n);l.tag=2,t!=null&&(l.callback=t),t=yt(e,l,n),t!==null&&(Ge(t,e,n,r),ea(t,e,n))}};function _o(e,t,r,n,l,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,i):t.prototype&&t.prototype.isPureReactComponent?!fn(r,n)||!fn(l,s):!0}function Gd(e,t,r){var n=!1,l=Ct,s=t.contextType;return typeof s=="object"&&s!==null?s=De(s):(l=Se(t)?Vt:xe.current,n=t.contextTypes,s=(n=n!=null)?br(e,l):Ct),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fa,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function jo(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Fa.enqueueReplaceState(t,t.state,null)}function is(e,t,r,n){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},ti(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=De(s):(s=Se(t)?Vt:xe.current,l.context=br(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ss(e,t,s,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Fa.enqueueReplaceState(l,l.state,null),ka(e,r,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var r="",n=t;do r+=hp(n),n=n.return;while(n);var l=r}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function _l(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function os(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function Hd(e,t,r){r=nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ea||(Ea=!0,xs=n),os(e,t)},r}function Yd(e,t,r){r=nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;r.payload=function(){return n(l)},r.callback=function(){os(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){os(e,t),typeof n!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function yo(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Uf;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(r)||(l.add(r),e=nm.bind(null,e,t,r),t.then(e,e))}function bo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ko(e,t,r,n,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nt(-1,1),t.tag=2,yt(r,t,1))),r.lanes|=1),e)}var Vf=ot.ReactCurrentOwner,we=!1;function _e(e,t,r,n){t.child=e===null?bd(t,null,r,n):wr(t,e.child,r,n)}function wo(e,t,r,n,l){r=r.render;var s=t.ref;return _r(t,l),n=si(e,t,r,n,s,l),r=ii(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,it(e,t,l)):(Z&&r&&Js(t),t.flags|=1,_e(e,t,n,l),t.child)}function No(e,t,r,n,l){if(e===null){var s=r.type;return typeof s=="function"&&!vi(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Jd(e,t,s,n,l)):(e=sa(r.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&l)){var i=s.memoizedProps;if(r=r.compare,r=r!==null?r:fn,r(i,n)&&e.ref===t.ref)return it(e,t,l)}return t.flags|=1,e=wt(s,n),e.ref=t.ref,e.return=t,t.child=e}function Jd(e,t,r,n,l){if(e!==null){var s=e.memoizedProps;if(fn(s,n)&&e.ref===t.ref)if(we=!1,t.pendingProps=n=s,(e.lanes&l)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,it(e,t,l)}return cs(e,t,r,n,l)}function Kd(e,t,r){var n=t.pendingProps,l=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(fr,Ee),Ee|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(fr,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,K(fr,Ee),Ee|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,K(fr,Ee),Ee|=n;return _e(e,t,l,r),t.child}function Qd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,r,n,l){var s=Se(r)?Vt:xe.current;return s=br(t,s),_r(t,l),r=si(e,t,r,n,s,l),n=ii(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,it(e,t,l)):(Z&&n&&Js(t),t.flags|=1,_e(e,t,r,l),t.child)}function So(e,t,r,n,l){if(Se(r)){var s=!0;xa(t)}else s=!1;if(_r(t,l),t.stateNode===null)na(e,t),Gd(t,r,n),is(t,r,n,l),n=!0;else if(e===null){var i=t.stateNode,o=t.memoizedProps;i.props=o;var c=i.context,d=r.contextType;typeof d=="object"&&d!==null?d=De(d):(d=Se(r)?Vt:xe.current,d=br(t,d));var p=r.getDerivedStateFromProps,f=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==n||c!==d)&&jo(t,i,n,d),ut=!1;var m=t.memoizedState;i.state=m,ka(t,n,i,l),c=t.memoizedState,o!==n||m!==c||Ne.current||ut?(typeof p=="function"&&(ss(t,r,p,n),c=t.memoizedState),(o=ut||_o(t,r,o,n,m,c,d))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),i.props=n,i.state=c,i.context=d,n=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,wd(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Fe(t.type,o),i.props=d,f=t.pendingProps,m=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=De(c):(c=Se(r)?Vt:xe.current,c=br(t,c));var _=r.getDerivedStateFromProps;(p=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==f||m!==c)&&jo(t,i,n,c),ut=!1,m=t.memoizedState,i.state=m,ka(t,n,i,l);var v=t.memoizedState;o!==f||m!==v||Ne.current||ut?(typeof _=="function"&&(ss(t,r,_,n),v=t.memoizedState),(d=ut||_o(t,r,d,n,m,v,c)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),i.props=n,i.state=v,i.context=c,n=d):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return ds(e,t,r,n,s,l)}function ds(e,t,r,n,l,s){Qd(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return l&&uo(t,r,!1),it(e,t,s);n=t.stateNode,Vf.current=t;var o=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=wr(t,e.child,null,s),t.child=wr(t,null,o,s)):_e(e,t,o,s),t.memoizedState=n.state,l&&uo(t,r,!0),t.child}function Xd(e){var t=e.stateNode;t.pendingContext?co(e,t.pendingContext,t.pendingContext!==t.context):t.context&&co(e,t.context,!1),ri(e,t.containerInfo)}function Co(e,t,r,n,l){return kr(),Qs(l),t.flags|=256,_e(e,t,r,n),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,r){var n=t.pendingProps,l=q.current,s=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),K(q,l&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,s?(n=t.mode,s=t.child,i={mode:"hidden",children:i},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Va(i,n,0,null),e=Ut(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ps(r),t.memoizedState=us,e):di(t,i));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return Gf(e,t,i,n,o,l,r);if(s){s=n.fallback,i=t.mode,l=e.child,o=l.sibling;var c={mode:"hidden",children:n.children};return!(i&1)&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=wt(l,c),n.subtreeFlags=l.subtreeFlags&14680064),o!==null?s=wt(o,s):(s=Ut(s,i,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,i=e.child.memoizedState,i=i===null?ps(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~r,t.memoizedState=us,n}return s=e.child,e=s.sibling,n=wt(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function di(e,t){return t=Va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Un(e,t,r,n){return n!==null&&Qs(n),wr(t,e.child,null,r),e=di(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gf(e,t,r,n,l,s,i){if(r)return t.flags&256?(t.flags&=-257,n=_l(Error(N(422))),Un(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,l=t.mode,n=Va({mode:"visible",children:n.children},l,0,null),s=Ut(s,l,i,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&wr(t,e.child,null,i),t.child.memoizedState=ps(i),t.memoizedState=us,s);if(!(t.mode&1))return Un(e,t,i,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var o=n.dgst;return n=o,s=Error(N(419)),n=_l(s,n,void 0),Un(e,t,i,n)}if(o=(i&e.childLanes)!==0,we||o){if(n=ue,n!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(n.suspendedLanes|i)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,st(e,l),Ge(n,e,l,-1))}return gi(),n=_l(Error(N(421))),Un(e,t,i,n)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=am.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,ze=jt(l.nextSibling),Pe=t,Z=!0,Ue=null,e!==null&&(Te[Ae++]=tt,Te[Ae++]=rt,Te[Ae++]=Gt,tt=e.id,rt=e.overflow,Gt=t),t=di(t,n.children),t.flags|=4096,t)}function Eo(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ls(e.return,t,r)}function jl(e,t,r,n,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=l)}function qd(e,t,r){var n=t.pendingProps,l=n.revealOrder,s=n.tail;if(_e(e,t,n.children,r),n=q.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eo(e,r,t);else if(e.tag===19)Eo(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(K(q,n),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&wa(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),jl(t,!1,l,r,s);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wa(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}jl(t,!0,r,null,s);break;case"together":jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function na(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=wt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=wt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Hf(e,t,r){switch(t.tag){case 3:Xd(t),kr();break;case 5:Nd(t);break;case 1:Se(t.type)&&xa(t);break;case 4:ri(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,l=t.memoizedProps.value;K(ya,n._currentValue),n._currentValue=l;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(K(q,q.current&1),t.flags|=128,null):r&t.child.childLanes?Zd(e,t,r):(K(q,q.current&1),e=it(e,t,r),e!==null?e.sibling:null);K(q,q.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return qd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(q,q.current),n)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,r)}return it(e,t,r)}var eu,fs,tu,ru;eu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};fs=function(){};tu=function(e,t,r,n){var l=e.memoizedProps;if(l!==n){e=t.stateNode,Ft(Xe.current);var s=null;switch(r){case"input":l=Al(e,l),n=Al(e,n),s=[];break;case"select":l=te({},l,{value:void 0}),n=te({},n,{value:void 0}),s=[];break;case"textarea":l=Dl(e,l),n=Dl(e,n),s=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ga)}$l(r,n);var i;r=null;for(d in l)if(!n.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var o=l[d];for(i in o)o.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ln.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in n){var c=n[d];if(o=l!=null?l[d]:void 0,n.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(i in o)!o.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&o[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ln.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Q("scroll",e),s||o===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};ru=function(e,t,r,n){r!==n&&(t.flags|=4)};function $r(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Yf(e,t,r){var n=t.pendingProps;switch(Ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Se(t.type)&&va(),ge(t),null;case 3:return n=t.stateNode,Nr(),X(Ne),X(xe),ai(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(ys(Ue),Ue=null))),fs(e,t),ge(t),null;case 5:ni(t);var l=Ft(xn.current);if(r=t.type,e!==null&&t.stateNode!=null)tu(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return ge(t),null}if(e=Ft(Xe.current),Fn(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Ke]=t,n[gn]=s,e=(t.mode&1)!==0,r){case"dialog":Q("cancel",n),Q("close",n);break;case"iframe":case"object":case"embed":Q("load",n);break;case"video":case"audio":for(l=0;l<Jr.length;l++)Q(Jr[l],n);break;case"source":Q("error",n);break;case"img":case"image":case"link":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"input":Oi(n,s),Q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Q("invalid",n);break;case"textarea":Di(n,s),Q("invalid",n)}$l(r,s),l=null;for(var i in s)if(s.hasOwnProperty(i)){var o=s[i];i==="children"?typeof o=="string"?n.textContent!==o&&(s.suppressHydrationWarning!==!0&&$n(n.textContent,o,e),l=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&$n(n.textContent,o,e),l=["children",""+o]):ln.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&Q("scroll",n)}switch(r){case"input":Rn(n),Bi(n,s,!0);break;case"textarea":Rn(n),Ii(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=ga)}n=l,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[Ke]=t,e[gn]=n,eu(e,t,!1,!1),t.stateNode=e;e:{switch(i=Fl(r,n),r){case"dialog":Q("cancel",e),Q("close",e),l=n;break;case"iframe":case"object":case"embed":Q("load",e),l=n;break;case"video":case"audio":for(l=0;l<Jr.length;l++)Q(Jr[l],e);l=n;break;case"source":Q("error",e),l=n;break;case"img":case"image":case"link":Q("error",e),Q("load",e),l=n;break;case"details":Q("toggle",e),l=n;break;case"input":Oi(e,n),l=Al(e,n),Q("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=te({},n,{value:void 0}),Q("invalid",e);break;case"textarea":Di(e,n),l=Dl(e,n),Q("invalid",e);break;default:l=n}$l(r,l),o=l;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Mc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Lc(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&sn(e,c):typeof c=="number"&&sn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ln.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Q("scroll",e):c!=null&&Ts(e,s,c,i))}switch(r){case"input":Rn(e),Bi(e,n,!1);break;case"textarea":Rn(e),Ii(e);break;case"option":n.value!=null&&e.setAttribute("value",""+St(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?hr(e,!!n.multiple,s,!1):n.defaultValue!=null&&hr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ga)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)ru(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=Ft(xn.current),Ft(Xe.current),Fn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ke]=t,(s=n.nodeValue!==r)&&(e=Pe,e!==null))switch(e.tag){case 3:$n(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$n(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ke]=t,t.stateNode=n}return ge(t),null;case 13:if(X(q),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&ze!==null&&t.mode&1&&!(t.flags&128))jd(),kr(),t.flags|=98560,s=!1;else if(s=Fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Ke]=t}else kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else Ue!==null&&(ys(Ue),Ue=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ce===0&&(ce=3):gi())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Nr(),fs(e,t),e===null&&mn(t.stateNode.containerInfo),ge(t),null;case 10:return qs(t.type._context),ge(t),null;case 17:return Se(t.type)&&va(),ge(t),null;case 19:if(X(q),s=t.memoizedState,s===null)return ge(t),null;if(n=(t.flags&128)!==0,i=s.rendering,i===null)if(n)$r(s,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=wa(e),i!==null){for(t.flags|=128,$r(s,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return K(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&ae()>Cr&&(t.flags|=128,n=!0,$r(s,!1),t.lanes=4194304)}else{if(!n)if(e=wa(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),$r(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!Z)return ge(t),null}else 2*ae()-s.renderingStartTime>Cr&&r!==1073741824&&(t.flags|=128,n=!0,$r(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(r=s.last,r!==null?r.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ae(),t.sibling=null,r=q.current,K(q,n?r&1|2:r&1),t):(ge(t),null);case 22:case 23:return hi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ee&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Jf(e,t){switch(Ks(t),t.tag){case 1:return Se(t.type)&&va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),X(Ne),X(xe),ai(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ni(t),null;case 13:if(X(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(q),null;case 4:return Nr(),null;case 10:return qs(t.type._context),null;case 22:case 23:return hi(),null;case 24:return null;default:return null}}var Vn=!1,ve=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,R=null;function pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ne(e,t,n)}else r.current=null}function ms(e,t,r){try{r()}catch(n){ne(e,t,n)}}var zo=!1;function Qf(e,t){if(Xl=fa,e=id(),Ys(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var l=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var i=0,o=-1,c=-1,d=0,p=0,f=e,m=null;t:for(;;){for(var _;f!==r||l!==0&&f.nodeType!==3||(o=i+l),f!==s||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===e)break t;if(m===r&&++d===l&&(o=i),m===s&&++p===n&&(c=i),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Zl={focusedElem:e,selectionRange:r},fa=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,y=v.memoizedState,u=t.stateNode,h=u.getSnapshotBeforeUpdate(t.elementType===t.type?k:Fe(t.type,k),y);u.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=zo,zo=!1,v}function tn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&ms(t,r,s)}l=l.next}while(l!==n)}}function Wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function hs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function nu(e){var t=e.alternate;t!==null&&(e.alternate=null,nu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[gn],delete t[ts],delete t[Rf],delete t[Mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function au(e){return e.tag===5||e.tag===3||e.tag===4}function Po(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||au(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ga));else if(n!==4&&(e=e.child,e!==null))for(gs(e,t,r),e=e.sibling;e!==null;)gs(e,t,r),e=e.sibling}function vs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(vs(e,t,r),e=e.sibling;e!==null;)vs(e,t,r),e=e.sibling}var pe=null,We=!1;function ct(e,t,r){for(r=r.child;r!==null;)lu(e,t,r),r=r.sibling}function lu(e,t,r){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Ta,r)}catch{}switch(r.tag){case 5:ve||pr(r,t);case 6:var n=pe,l=We;pe=null,ct(e,t,r),pe=n,We=l,pe!==null&&(We?(e=pe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):pe.removeChild(r.stateNode));break;case 18:pe!==null&&(We?(e=pe,r=r.stateNode,e.nodeType===8?fl(e.parentNode,r):e.nodeType===1&&fl(e,r),un(e)):fl(pe,r.stateNode));break;case 4:n=pe,l=We,pe=r.stateNode.containerInfo,We=!0,ct(e,t,r),pe=n,We=l;break;case 0:case 11:case 14:case 15:if(!ve&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var s=l,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&ms(r,t,i),l=l.next}while(l!==n)}ct(e,t,r);break;case 1:if(!ve&&(pr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){ne(r,t,o)}ct(e,t,r);break;case 21:ct(e,t,r);break;case 22:r.mode&1?(ve=(n=ve)||r.memoizedState!==null,ct(e,t,r),ve=n):ct(e,t,r);break;default:ct(e,t,r)}}function Lo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Kf),t.forEach(function(n){var l=lm.bind(null,e,n);r.has(n)||(r.add(n),n.then(l,l))})}}function $e(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var l=r[n];try{var s=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 5:pe=o.stateNode,We=!1;break e;case 3:pe=o.stateNode.containerInfo,We=!0;break e;case 4:pe=o.stateNode.containerInfo,We=!0;break e}o=o.return}if(pe===null)throw Error(N(160));lu(s,i,l),pe=null,We=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){ne(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)su(t,e),t=t.sibling}function su(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),Ye(e),n&4){try{tn(3,e,e.return),Wa(3,e)}catch(k){ne(e,e.return,k)}try{tn(5,e,e.return)}catch(k){ne(e,e.return,k)}}break;case 1:$e(t,e),Ye(e),n&512&&r!==null&&pr(r,r.return);break;case 5:if($e(t,e),Ye(e),n&512&&r!==null&&pr(r,r.return),e.flags&32){var l=e.stateNode;try{sn(l,"")}catch(k){ne(e,e.return,k)}}if(n&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,i=r!==null?r.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ec(l,s),Fl(o,i);var d=Fl(o,s);for(i=0;i<c.length;i+=2){var p=c[i],f=c[i+1];p==="style"?Mc(l,f):p==="dangerouslySetInnerHTML"?Lc(l,f):p==="children"?sn(l,f):Ts(l,p,f,d)}switch(o){case"input":Ol(l,s);break;case"textarea":zc(l,s);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?hr(l,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?hr(l,!!s.multiple,s.defaultValue,!0):hr(l,!!s.multiple,s.multiple?[]:"",!1))}l[gn]=s}catch(k){ne(e,e.return,k)}}break;case 6:if($e(t,e),Ye(e),n&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(k){ne(e,e.return,k)}}break;case 3:if($e(t,e),Ye(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{un(t.containerInfo)}catch(k){ne(e,e.return,k)}break;case 4:$e(t,e),Ye(e);break;case 13:$e(t,e),Ye(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(fi=ae())),n&4&&Lo(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(ve=(d=ve)||p,$e(t,e),ve=d):$e(t,e),Ye(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(R=e,p=e.child;p!==null;){for(f=R=p;R!==null;){switch(m=R,_=m.child,m.tag){case 0:case 11:case 14:case 15:tn(4,m,m.return);break;case 1:pr(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){ne(n,r,k)}}break;case 5:pr(m,m.return);break;case 22:if(m.memoizedState!==null){Mo(f);continue}}_!==null?(_.return=m,R=_):Mo(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{l=f.stateNode,d?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,c=f.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Rc("display",i))}catch(k){ne(e,e.return,k)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(k){ne(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$e(t,e),Ye(e),n&4&&Lo(e);break;case 21:break;default:$e(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(au(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(sn(l,""),n.flags&=-33);var s=Po(e);vs(e,s,l);break;case 3:case 4:var i=n.stateNode.containerInfo,o=Po(e);gs(e,o,i);break;default:throw Error(N(161))}}catch(c){ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e,t,r){R=e,iu(e)}function iu(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var l=R,s=l.child;if(l.tag===22&&n){var i=l.memoizedState!==null||Vn;if(!i){var o=l.alternate,c=o!==null&&o.memoizedState!==null||ve;o=Vn;var d=ve;if(Vn=i,(ve=c)&&!d)for(R=l;R!==null;)i=R,c=i.child,i.tag===22&&i.memoizedState!==null?To(l):c!==null?(c.return=i,R=c):To(l);for(;s!==null;)R=s,iu(s),s=s.sibling;R=l,Vn=o,ve=d}Ro(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,R=s):Ro(e)}}function Ro(e){for(;R!==null;){var t=R;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Wa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ve)if(r===null)n.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Fe(t.type,r.memoizedProps);n.componentDidUpdate(l,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&go(t,s,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}go(t,i,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&un(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ve||t.flags&512&&hs(t)}catch(m){ne(t,t.return,m)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function Mo(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function To(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Wa(4,t)}catch(c){ne(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var l=t.return;try{n.componentDidMount()}catch(c){ne(t,l,c)}}var s=t.return;try{hs(t)}catch(c){ne(t,s,c)}break;case 5:var i=t.return;try{hs(t)}catch(c){ne(t,i,c)}}}catch(c){ne(t,t.return,c)}if(t===e){R=null;break}var o=t.sibling;if(o!==null){o.return=t.return,R=o;break}R=t.return}}var Zf=Math.ceil,Ca=ot.ReactCurrentDispatcher,ui=ot.ReactCurrentOwner,Be=ot.ReactCurrentBatchConfig,V=0,ue=null,se=null,fe=0,Ee=0,fr=zt(0),ce=0,bn=null,Yt=0,Ua=0,pi=0,rn=null,ke=null,fi=0,Cr=1/0,Ze=null,Ea=!1,xs=null,bt=null,Gn=!1,ht=null,za=0,nn=0,_s=null,aa=-1,la=0;function je(){return V&6?ae():aa!==-1?aa:aa=ae()}function kt(e){return e.mode&1?V&2&&fe!==0?fe&-fe:Af.transition!==null?(la===0&&(la=Gc()),la):(e=H,e!==0||(e=window.event,e=e===void 0?16:Zc(e.type)),e):1}function Ge(e,t,r,n){if(50<nn)throw nn=0,_s=null,Error(N(185));Sn(e,r,n),(!(V&2)||e!==ue)&&(e===ue&&(!(V&2)&&(Ua|=r),ce===4&&ft(e,fe)),Ce(e,n),r===1&&V===0&&!(t.mode&1)&&(Cr=ae()+500,Ia&&Pt()))}function Ce(e,t){var r=e.callbackNode;Tp(e,t);var n=pa(e,e===ue?fe:0);if(n===0)r!==null&&Wi(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Wi(r),t===1)e.tag===0?Tf(Ao.bind(null,e)):vd(Ao.bind(null,e)),Pf(function(){!(V&6)&&Pt()}),r=null;else{switch(Hc(n)){case 1:r=Is;break;case 4:r=Uc;break;case 16:r=ua;break;case 536870912:r=Vc;break;default:r=ua}r=hu(r,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ou(e,t){if(aa=-1,la=0,V&6)throw Error(N(327));var r=e.callbackNode;if(jr()&&e.callbackNode!==r)return null;var n=pa(e,e===ue?fe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Pa(e,n);else{t=n;var l=V;V|=2;var s=du();(ue!==e||fe!==t)&&(Ze=null,Cr=ae()+500,Wt(e,t));do try{tm();break}catch(o){cu(e,o)}while(!0);Zs(),Ca.current=s,V=l,se!==null?t=0:(ue=null,fe=0,t=ce)}if(t!==0){if(t===2&&(l=Hl(e),l!==0&&(n=l,t=js(e,l))),t===1)throw r=bn,Wt(e,0),ft(e,n),Ce(e,ae()),r;if(t===6)ft(e,n);else{if(l=e.current.alternate,!(n&30)&&!qf(l)&&(t=Pa(e,n),t===2&&(s=Hl(e),s!==0&&(n=s,t=js(e,s))),t===1))throw r=bn,Wt(e,0),ft(e,n),Ce(e,ae()),r;switch(e.finishedWork=l,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:Bt(e,ke,Ze);break;case 3:if(ft(e,n),(n&130023424)===n&&(t=fi+500-ae(),10<t)){if(pa(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){je(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=es(Bt.bind(null,e,ke,Ze),t);break}Bt(e,ke,Ze);break;case 4:if(ft(e,n),(n&4194240)===n)break;for(t=e.eventTimes,l=-1;0<n;){var i=31-Ve(n);s=1<<i,i=t[i],i>l&&(l=i),n&=~s}if(n=l,n=ae()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Zf(n/1960))-n,10<n){e.timeoutHandle=es(Bt.bind(null,e,ke,Ze),n);break}Bt(e,ke,Ze);break;case 5:Bt(e,ke,Ze);break;default:throw Error(N(329))}}}return Ce(e,ae()),e.callbackNode===r?ou.bind(null,e):null}function js(e,t){var r=rn;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Pa(e,t),e!==2&&(t=ke,ke=r,t!==null&&ys(t)),e}function ys(e){ke===null?ke=e:ke.push.apply(ke,e)}function qf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var l=r[n],s=l.getSnapshot;l=l.value;try{if(!He(s(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~pi,t&=~Ua,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ve(t),n=1<<r;e[r]=-1,t&=~n}}function Ao(e){if(V&6)throw Error(N(327));jr();var t=pa(e,0);if(!(t&1))return Ce(e,ae()),null;var r=Pa(e,t);if(e.tag!==0&&r===2){var n=Hl(e);n!==0&&(t=n,r=js(e,n))}if(r===1)throw r=bn,Wt(e,0),ft(e,t),Ce(e,ae()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e,ke,Ze),Ce(e,ae()),null}function mi(e,t){var r=V;V|=1;try{return e(t)}finally{V=r,V===0&&(Cr=ae()+500,Ia&&Pt())}}function Jt(e){ht!==null&&ht.tag===0&&!(V&6)&&jr();var t=V;V|=1;var r=Be.transition,n=H;try{if(Be.transition=null,H=1,e)return e()}finally{H=n,Be.transition=r,V=t,!(V&6)&&Pt()}}function hi(){Ee=fr.current,X(fr)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,zf(r)),se!==null)for(r=se.return;r!==null;){var n=r;switch(Ks(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&va();break;case 3:Nr(),X(Ne),X(xe),ai();break;case 5:ni(n);break;case 4:Nr();break;case 13:X(q);break;case 19:X(q);break;case 10:qs(n.type._context);break;case 22:case 23:hi()}r=r.return}if(ue=e,se=e=wt(e.current,null),fe=Ee=t,ce=0,bn=null,pi=Ua=Yt=0,ke=rn=null,$t!==null){for(t=0;t<$t.length;t++)if(r=$t[t],n=r.interleaved,n!==null){r.interleaved=null;var l=n.next,s=r.pending;if(s!==null){var i=s.next;s.next=l,n.next=i}r.pending=n}$t=null}return e}function cu(e,t){do{var r=se;try{if(Zs(),ta.current=Sa,Na){for(var n=ee.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Na=!1}if(Ht=0,de=oe=ee=null,en=!1,_n=0,ui.current=null,r===null||r.return===null){ce=1,bn=t,se=null;break}e:{var s=e,i=r.return,o=r,c=t;if(t=fe,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=o,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var _=bo(i);if(_!==null){_.flags&=-257,ko(_,i,o,s,t),_.mode&1&&yo(s,d,t),t=_,c=d;var v=t.updateQueue;if(v===null){var k=new Set;k.add(c),t.updateQueue=k}else v.add(c);break e}else{if(!(t&1)){yo(s,d,t),gi();break e}c=Error(N(426))}}else if(Z&&o.mode&1){var y=bo(i);if(y!==null){!(y.flags&65536)&&(y.flags|=256),ko(y,i,o,s,t),Qs(Sr(c,o));break e}}s=c=Sr(c,o),ce!==4&&(ce=2),rn===null?rn=[s]:rn.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var u=Hd(s,c,t);ho(s,u);break e;case 1:o=c;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bt===null||!bt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Yd(s,o,t);ho(s,w);break e}}s=s.return}while(s!==null)}pu(r)}catch(C){t=C,se===r&&r!==null&&(se=r=r.return);continue}break}while(!0)}function du(){var e=Ca.current;return Ca.current=Sa,e===null?Sa:e}function gi(){(ce===0||ce===3||ce===2)&&(ce=4),ue===null||!(Yt&268435455)&&!(Ua&268435455)||ft(ue,fe)}function Pa(e,t){var r=V;V|=2;var n=du();(ue!==e||fe!==t)&&(Ze=null,Wt(e,t));do try{em();break}catch(l){cu(e,l)}while(!0);if(Zs(),V=r,Ca.current=n,se!==null)throw Error(N(261));return ue=null,fe=0,ce}function em(){for(;se!==null;)uu(se)}function tm(){for(;se!==null&&!Np();)uu(se)}function uu(e){var t=mu(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?pu(e):se=t,ui.current=null}function pu(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Jf(r,t),r!==null){r.flags&=32767,se=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(r=Yf(r,t,Ee),r!==null){se=r;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function Bt(e,t,r){var n=H,l=Be.transition;try{Be.transition=null,H=1,rm(e,t,r,n)}finally{Be.transition=l,H=n}return null}function rm(e,t,r,n){do jr();while(ht!==null);if(V&6)throw Error(N(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Ap(e,s),e===ue&&(se=ue=null,fe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Gn||(Gn=!0,hu(ua,function(){return jr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Be.transition,Be.transition=null;var i=H;H=1;var o=V;V|=4,ui.current=null,Qf(e,r),su(r,e),bf(Zl),fa=!!Xl,Zl=Xl=null,e.current=r,Xf(r),Sp(),V=o,H=i,Be.transition=s}else e.current=r;if(Gn&&(Gn=!1,ht=e,za=l),s=e.pendingLanes,s===0&&(bt=null),zp(r.stateNode),Ce(e,ae()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],n(l.value,{componentStack:l.stack,digest:l.digest});if(Ea)throw Ea=!1,e=xs,xs=null,e;return za&1&&e.tag!==0&&jr(),s=e.pendingLanes,s&1?e===_s?nn++:(nn=0,_s=e):nn=0,Pt(),null}function jr(){if(ht!==null){var e=Hc(za),t=Be.transition,r=H;try{if(Be.transition=null,H=16>e?16:e,ht===null)var n=!1;else{if(e=ht,ht=null,za=0,V&6)throw Error(N(331));var l=V;for(V|=4,R=e.current;R!==null;){var s=R,i=s.child;if(R.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(R=d;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:tn(8,p,s)}var f=p.child;if(f!==null)f.return=p,R=f;else for(;R!==null;){p=R;var m=p.sibling,_=p.return;if(nu(p),p===d){R=null;break}if(m!==null){m.return=_,R=m;break}R=_}}}var v=s.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var y=k.sibling;k.sibling=null,k=y}while(k!==null)}}R=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,R=i;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:tn(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,R=u;break e}R=s.return}}var h=e.current;for(R=h;R!==null;){i=R;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,R=g;else e:for(i=h;R!==null;){if(o=R,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Wa(9,o)}}catch(C){ne(o,o.return,C)}if(o===i){R=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,R=w;break e}R=o.return}}if(V=l,Pt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Ta,e)}catch{}n=!0}return n}finally{H=r,Be.transition=t}}return!1}function Oo(e,t,r){t=Sr(r,t),t=Hd(e,t,1),e=yt(e,t,1),t=je(),e!==null&&(Sn(e,1,t),Ce(e,t))}function ne(e,t,r){if(e.tag===3)Oo(e,e,r);else for(;t!==null;){if(t.tag===3){Oo(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(bt===null||!bt.has(n))){e=Sr(r,e),e=Yd(t,e,1),t=yt(t,e,1),e=je(),t!==null&&(Sn(t,1,e),Ce(t,e));break}}t=t.return}}function nm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&r,ue===e&&(fe&r)===r&&(ce===4||ce===3&&(fe&130023424)===fe&&500>ae()-fi?Wt(e,0):pi|=r),Ce(e,t)}function fu(e,t){t===0&&(e.mode&1?(t=An,An<<=1,!(An&130023424)&&(An=4194304)):t=1);var r=je();e=st(e,t),e!==null&&(Sn(e,t,r),Ce(e,r))}function am(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),fu(e,r)}function lm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),fu(e,r)}var mu;mu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)we=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return we=!1,Hf(e,t,r);we=!!(e.flags&131072)}else we=!1,Z&&t.flags&1048576&&xd(t,ja,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;na(e,t),e=t.pendingProps;var l=br(t,xe.current);_r(t,r),l=si(null,t,n,e,l,r);var s=ii();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(n)?(s=!0,xa(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ti(t),l.updater=Fa,t.stateNode=l,l._reactInternals=t,is(t,n,e,r),t=ds(null,t,n,!0,s,r)):(t.tag=0,Z&&s&&Js(t),_e(null,t,l,r),t=t.child),t;case 16:n=t.elementType;e:{switch(na(e,t),e=t.pendingProps,l=n._init,n=l(n._payload),t.type=n,l=t.tag=im(n),e=Fe(n,e),l){case 0:t=cs(null,t,n,e,r);break e;case 1:t=So(null,t,n,e,r);break e;case 11:t=wo(null,t,n,e,r);break e;case 14:t=No(null,t,n,Fe(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Fe(n,l),cs(e,t,n,l,r);case 1:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Fe(n,l),So(e,t,n,l,r);case 3:e:{if(Xd(t),e===null)throw Error(N(387));n=t.pendingProps,s=t.memoizedState,l=s.element,wd(e,t),ka(t,n,null,r);var i=t.memoizedState;if(n=i.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=Sr(Error(N(423)),t),t=Co(e,t,n,r,l);break e}else if(n!==l){l=Sr(Error(N(424)),t),t=Co(e,t,n,r,l);break e}else for(ze=jt(t.stateNode.containerInfo.firstChild),Pe=t,Z=!0,Ue=null,r=bd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(kr(),n===l){t=it(e,t,r);break e}_e(e,t,n,r)}t=t.child}return t;case 5:return Nd(t),e===null&&as(t),n=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,i=l.children,ql(n,l)?i=null:s!==null&&ql(n,s)&&(t.flags|=32),Qd(e,t),_e(e,t,i,r),t.child;case 6:return e===null&&as(t),null;case 13:return Zd(e,t,r);case 4:return ri(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=wr(t,null,n,r):_e(e,t,n,r),t.child;case 11:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Fe(n,l),wo(e,t,n,l,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,l=t.pendingProps,s=t.memoizedProps,i=l.value,K(ya,n._currentValue),n._currentValue=i,s!==null)if(He(s.value,i)){if(s.children===l.children&&!Ne.current){t=it(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){i=s.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=nt(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),ls(s.return,r,t),o.lanes|=r;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(N(341));i.lanes|=r,o=i.alternate,o!==null&&(o.lanes|=r),ls(i,r,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}_e(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,n=t.pendingProps.children,_r(t,r),l=De(l),n=n(l),t.flags|=1,_e(e,t,n,r),t.child;case 14:return n=t.type,l=Fe(n,t.pendingProps),l=Fe(n.type,l),No(e,t,n,l,r);case 15:return Jd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Fe(n,l),na(e,t),t.tag=1,Se(n)?(e=!0,xa(t)):e=!1,_r(t,r),Gd(t,n,l),is(t,n,l,r),ds(null,t,n,!0,e,r);case 19:return qd(e,t,r);case 22:return Kd(e,t,r)}throw Error(N(156,t.tag))};function hu(e,t){return Wc(e,t)}function sm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,r,n){return new sm(e,t,r,n)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function im(e){if(typeof e=="function")return vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Os)return 11;if(e===Bs)return 14}return 2}function wt(e,t){var r=e.alternate;return r===null?(r=Oe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function sa(e,t,r,n,l,s){var i=2;if(n=e,typeof e=="function")vi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nr:return Ut(r.children,l,s,t);case As:i=8,l|=8;break;case Ll:return e=Oe(12,r,t,l|2),e.elementType=Ll,e.lanes=s,e;case Rl:return e=Oe(13,r,t,l),e.elementType=Rl,e.lanes=s,e;case Ml:return e=Oe(19,r,t,l),e.elementType=Ml,e.lanes=s,e;case Nc:return Va(r,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kc:i=10;break e;case wc:i=9;break e;case Os:i=11;break e;case Bs:i=14;break e;case dt:i=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Oe(i,r,t,l),t.elementType=e,t.type=n,t.lanes=s,t}function Ut(e,t,r,n){return e=Oe(7,e,n,t),e.lanes=r,e}function Va(e,t,r,n){return e=Oe(22,e,n,t),e.elementType=Nc,e.lanes=r,e.stateNode={isHidden:!1},e}function yl(e,t,r){return e=Oe(6,e,null,t),e.lanes=r,e}function bl(e,t,r){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function om(e,t,r,n,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function xi(e,t,r,n,l,s,i,o,c){return e=new om(e,t,r,o,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Oe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ti(s),e}function cm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function gu(e){if(!e)return Ct;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(Se(r))return gd(e,r,t)}return t}function vu(e,t,r,n,l,s,i,o,c){return e=xi(r,n,!0,e,l,s,i,o,c),e.context=gu(null),r=e.current,n=je(),l=kt(r),s=nt(n,l),s.callback=t??null,yt(r,s,l),e.current.lanes=l,Sn(e,l,n),Ce(e,n),e}function Ga(e,t,r,n){var l=t.current,s=je(),i=kt(l);return r=gu(r),t.context===null?t.context=r:t.pendingContext=r,t=nt(s,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=yt(l,t,i),e!==null&&(Ge(e,l,i,s),ea(e,l,i)),i}function La(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function _i(e,t){Bo(e,t),(e=e.alternate)&&Bo(e,t)}function dm(){return null}var xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ji(e){this._internalRoot=e}Ha.prototype.render=ji.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ga(e,t,null,null)};Ha.prototype.unmount=ji.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jt(function(){Ga(null,e,null,null)}),t[lt]=null}};function Ha(e){this._internalRoot=e}Ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pt.length&&t!==0&&t<pt[r].priority;r++);pt.splice(r,0,e),r===0&&Xc(e)}};function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Do(){}function um(e,t,r,n,l){if(l){if(typeof n=="function"){var s=n;n=function(){var d=La(i);s.call(d)}}var i=vu(t,n,e,0,null,!1,!1,"",Do);return e._reactRootContainer=i,e[lt]=i.current,mn(e.nodeType===8?e.parentNode:e),Jt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var o=n;n=function(){var d=La(c);o.call(d)}}var c=xi(e,0,!1,null,null,!1,!1,"",Do);return e._reactRootContainer=c,e[lt]=c.current,mn(e.nodeType===8?e.parentNode:e),Jt(function(){Ga(t,c,r,n)}),c}function Ja(e,t,r,n,l){var s=r._reactRootContainer;if(s){var i=s;if(typeof l=="function"){var o=l;l=function(){var c=La(i);o.call(c)}}Ga(t,i,e,l)}else i=um(r,t,e,l,n);return La(i)}Yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Yr(t.pendingLanes);r!==0&&($s(t,r|1),Ce(t,ae()),!(V&6)&&(Cr=ae()+500,Pt()))}break;case 13:Jt(function(){var n=st(e,1);if(n!==null){var l=je();Ge(n,e,1,l)}}),_i(e,1)}};Fs=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var r=je();Ge(t,e,134217728,r)}_i(e,134217728)}};Jc=function(e){if(e.tag===13){var t=kt(e),r=st(e,t);if(r!==null){var n=je();Ge(r,e,t,n)}_i(e,t)}};Kc=function(){return H};Qc=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};Ul=function(e,t,r){switch(t){case"input":if(Ol(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var l=Da(n);if(!l)throw Error(N(90));Cc(n),Ol(n,l)}}}break;case"textarea":zc(e,r);break;case"select":t=r.value,t!=null&&hr(e,!!r.multiple,t,!1)}};Oc=mi;Bc=Jt;var pm={usingClientEntryPoint:!1,Events:[En,ir,Da,Tc,Ac,mi]},Fr={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fm={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$c(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hn.isDisabled&&Hn.supportsFiber)try{Ta=Hn.inject(fm),Qe=Hn}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pm;Re.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yi(t))throw Error(N(200));return cm(e,t,null,r)};Re.createRoot=function(e,t){if(!yi(e))throw Error(N(299));var r=!1,n="",l=xu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=xi(e,1,!1,null,null,r,!1,n,l),e[lt]=t.current,mn(e.nodeType===8?e.parentNode:e),new ji(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=$c(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Jt(e)};Re.hydrate=function(e,t,r){if(!Ya(t))throw Error(N(200));return Ja(null,e,t,!0,r)};Re.hydrateRoot=function(e,t,r){if(!yi(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,l=!1,s="",i=xu;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=vu(t,null,e,1,r??null,l,!1,s,i),e[lt]=t.current,mn(e),n)for(e=0;e<n.length;e++)r=n[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Ha(t)};Re.render=function(e,t,r){if(!Ya(t))throw Error(N(200));return Ja(null,e,t,!1,r)};Re.unmountComponentAtNode=function(e){if(!Ya(e))throw Error(N(40));return e._reactRootContainer?(Jt(function(){Ja(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Re.unstable_batchedUpdates=mi;Re.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ya(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ja(e,t,r,!1,n)};Re.version="18.3.1-next-f1338f8080-20240426";function _u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_u)}catch(e){console.error(e)}}_u(),_c.exports=Re;var mm=_c.exports,Io=mm;zl.createRoot=Io.createRoot,zl.hydrateRoot=Io.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kn(){return kn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},kn.apply(null,arguments)}var gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gt||(gt={}));const $o="popstate";function hm(e){e===void 0&&(e={});function t(n,l){let{pathname:s,search:i,hash:o}=n.location;return bs("",{pathname:s,search:i,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(n,l){return typeof l=="string"?l:Ra(l)}return vm(t,r,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gm(){return Math.random().toString(36).substr(2,8)}function Fo(e,t){return{usr:e.state,key:e.key,idx:t}}function bs(e,t,r,n){return r===void 0&&(r=null),kn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Lr(t):t,{state:r,key:t&&t.key||n||gm()})}function Ra(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Lr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function vm(e,t,r,n){n===void 0&&(n={});let{window:l=document.defaultView,v5Compat:s=!1}=n,i=l.history,o=gt.Pop,c=null,d=p();d==null&&(d=0,i.replaceState(kn({},i.state,{idx:d}),""));function p(){return(i.state||{idx:null}).idx}function f(){o=gt.Pop;let y=p(),u=y==null?null:y-d;d=y,c&&c({action:o,location:k.location,delta:u})}function m(y,u){o=gt.Push;let h=bs(k.location,y,u);d=p()+1;let g=Fo(h,d),w=k.createHref(h);try{i.pushState(g,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(w)}s&&c&&c({action:o,location:k.location,delta:1})}function _(y,u){o=gt.Replace;let h=bs(k.location,y,u);d=p();let g=Fo(h,d),w=k.createHref(h);i.replaceState(g,"",w),s&&c&&c({action:o,location:k.location,delta:0})}function v(y){let u=l.location.origin!=="null"?l.location.origin:l.location.href,h=typeof y=="string"?y:Ra(y);return h=h.replace(/ $/,"%20"),le(u,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,u)}let k={get action(){return o},get location(){return e(l,i)},listen(y){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener($o,f),c=y,()=>{l.removeEventListener($o,f),c=null}},createHref(y){return t(l,y)},createURL:v,encodeLocation(y){let u=v(y);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:m,replace:_,go(y){return i.go(y)}};return k}var Wo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wo||(Wo={}));function xm(e,t,r){return r===void 0&&(r="/"),_m(e,t,r)}function _m(e,t,r,n){let l=typeof t=="string"?Lr(t):t,s=ki(l.pathname||"/",r);if(s==null)return null;let i=ju(e);jm(i);let o=null,c=Rm(s);for(let d=0;o==null&&d<i.length;++d)o=zm(i[d],c);return o}function ju(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let l=(s,i,o)=>{let c={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};c.relativePath.startsWith("/")&&(le(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=Nt([n,c.relativePath]),p=r.concat(c);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ju(s.children,t,p,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:Cm(d,s.index),routesMeta:p})};return e.forEach((s,i)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))l(s,i);else for(let c of yu(s.path))l(s,i,c)}),t}function yu(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,l=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return l?[s,""]:[s];let i=yu(n.join("/")),o=[];return o.push(...i.map(c=>c===""?s:[s,c].join("/"))),l&&o.push(...i),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function jm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Em(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const ym=/^:[\w-]+$/,bm=3,km=2,wm=1,Nm=10,Sm=-2,Uo=e=>e==="*";function Cm(e,t){let r=e.split("/"),n=r.length;return r.some(Uo)&&(n+=Sm),t&&(n+=km),r.filter(l=>!Uo(l)).reduce((l,s)=>l+(ym.test(s)?bm:s===""?wm:Nm),n)}function Em(e,t){return e.length===t.length&&e.slice(0,-1).every((n,l)=>n===t[l])?e[e.length-1]-t[t.length-1]:0}function zm(e,t,r){let{routesMeta:n}=e,l={},s="/",i=[];for(let o=0;o<n.length;++o){let c=n[o],d=o===n.length-1,p=s==="/"?t:t.slice(s.length)||"/",f=Pm({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),m=c.route;if(!f)return null;Object.assign(l,f.params),i.push({params:l,pathname:Nt([s,f.pathname]),pathnameBase:Bm(Nt([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Nt([s,f.pathnameBase]))}return i}function Pm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Lm(e.path,e.caseSensitive,e.end),l=t.match(r);if(!l)return null;let s=l[0],i=s.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:n.reduce((d,p,f)=>{let{paramName:m,isOptional:_}=p;if(m==="*"){let k=o[f]||"";i=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const v=o[f];return _&&!v?d[m]=void 0:d[m]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:i,pattern:e}}function Lm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),bi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,c)=>(n.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),n]}function Rm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ki(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tm=e=>Mm.test(e);function Am(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:l=""}=typeof e=="string"?Lr(e):e,s;if(r)if(Tm(r))s=r;else{if(r.includes("//")){let i=r;r=bu(r),bi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?s=Vo(r.substring(1),"/"):s=Vo(r,t)}else s=t;return{pathname:s,search:Dm(n),hash:Im(l)}}function Vo(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function kl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Om(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function wi(e,t){let r=Om(e);return t?r.map((n,l)=>l===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Ni(e,t,r,n){n===void 0&&(n=!1);let l;typeof e=="string"?l=Lr(e):(l=kn({},e),le(!l.pathname||!l.pathname.includes("?"),kl("?","pathname","search",l)),le(!l.pathname||!l.pathname.includes("#"),kl("#","pathname","hash",l)),le(!l.search||!l.search.includes("#"),kl("#","search","hash",l)));let s=e===""||l.pathname==="",i=s?"/":l.pathname,o;if(i==null)o=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;l.pathname=m.join("/")}o=f>=0?t[f]:"/"}let c=Am(l,o),d=i&&i!=="/"&&i.endsWith("/"),p=(s||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const bu=e=>e.replace(/\/\/+/g,"/"),Nt=e=>bu(e.join("/")),Bm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $m(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ku=["post","put","patch","delete"];new Set(ku);const Fm=["get",...ku];new Set(Fm);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wn(){return wn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wn.apply(null,arguments)}const Si=x.createContext(null),Wm=x.createContext(null),Lt=x.createContext(null),Ka=x.createContext(null),Rt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),wu=x.createContext(null);function Um(e,t){let{relative:r}=t===void 0?{}:t;Rr()||le(!1);let{basename:n,navigator:l}=x.useContext(Lt),{hash:s,pathname:i,search:o}=Su(e,{relative:r}),c=i;return n!=="/"&&(c=i==="/"?n:Nt([n,i])),l.createHref({pathname:c,search:o,hash:s})}function Rr(){return x.useContext(Ka)!=null}function Mt(){return Rr()||le(!1),x.useContext(Ka).location}function Nu(e){x.useContext(Lt).static||x.useLayoutEffect(e)}function Mr(){let{isDataRoute:e}=x.useContext(Rt);return e?rh():Vm()}function Vm(){Rr()||le(!1);let e=x.useContext(Si),{basename:t,future:r,navigator:n}=x.useContext(Lt),{matches:l}=x.useContext(Rt),{pathname:s}=Mt(),i=JSON.stringify(wi(l,r.v7_relativeSplatPath)),o=x.useRef(!1);return Nu(()=>{o.current=!0}),x.useCallback(function(d,p){if(p===void 0&&(p={}),!o.current)return;if(typeof d=="number"){n.go(d);return}let f=Ni(d,JSON.parse(i),s,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Nt([t,f.pathname])),(p.replace?n.replace:n.push)(f,p.state,p)},[t,n,i,s,e])}function Su(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=x.useContext(Lt),{matches:l}=x.useContext(Rt),{pathname:s}=Mt(),i=JSON.stringify(wi(l,n.v7_relativeSplatPath));return x.useMemo(()=>Ni(e,JSON.parse(i),s,r==="path"),[e,i,s,r])}function Gm(e,t){return Hm(e,t)}function Hm(e,t,r,n){Rr()||le(!1);let{navigator:l}=x.useContext(Lt),{matches:s}=x.useContext(Rt),i=s[s.length-1],o=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let d=Mt(),p;if(t){var f;let y=typeof t=="string"?Lr(t):t;c==="/"||(f=y.pathname)!=null&&f.startsWith(c)||le(!1),p=y}else p=d;let m=p.pathname||"/",_=m;if(c!=="/"){let y=c.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(y.length).join("/")}let v=xm(e,{pathname:_}),k=Xm(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Nt([c,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Nt([c,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,r,n);return t&&k?x.createElement(Ka.Provider,{value:{location:wn({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:gt.Pop}},k):k}function Ym(){let e=th(),t=$m(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),r?x.createElement("pre",{style:l},r):null,null)}const Jm=x.createElement(Ym,null);class Km extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?x.createElement(Rt.Provider,{value:this.props.routeContext},x.createElement(wu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qm(e){let{routeContext:t,match:r,children:n}=e,l=x.useContext(Si);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),x.createElement(Rt.Provider,{value:t},n)}function Xm(e,t,r,n){var l;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,o=(l=r)==null?void 0:l.errors;if(o!=null){let p=i.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);p>=0||le(!1),i=i.slice(0,Math.min(i.length,p+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let p=0;p<i.length;p++){let f=i[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=p),f.route.id){let{loaderData:m,errors:_}=r,v=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||v){c=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((p,f,m)=>{let _,v=!1,k=null,y=null;r&&(_=o&&f.route.id?o[f.route.id]:void 0,k=f.route.errorElement||Jm,c&&(d<0&&m===0?(nh("route-fallback"),v=!0,y=null):d===m&&(v=!0,y=f.route.hydrateFallbackElement||null)));let u=t.concat(i.slice(0,m+1)),h=()=>{let g;return _?g=k:v?g=y:f.route.Component?g=x.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=p,x.createElement(Qm,{match:f,routeContext:{outlet:p,matches:u,isDataRoute:r!=null},children:g})};return r&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?x.createElement(Km,{location:r.location,revalidation:r.revalidation,component:k,error:_,children:h(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):h()},null)}var Cu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cu||{}),Eu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Eu||{});function Zm(e){let t=x.useContext(Si);return t||le(!1),t}function qm(e){let t=x.useContext(Wm);return t||le(!1),t}function eh(e){let t=x.useContext(Rt);return t||le(!1),t}function zu(e){let t=eh(),r=t.matches[t.matches.length-1];return r.route.id||le(!1),r.route.id}function th(){var e;let t=x.useContext(wu),r=qm(),n=zu();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function rh(){let{router:e}=Zm(Cu.UseNavigateStable),t=zu(Eu.UseNavigateStable),r=x.useRef(!1);return Nu(()=>{r.current=!0}),x.useCallback(function(l,s){s===void 0&&(s={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,wn({fromRouteId:t},s)))},[e,t])}const Go={};function nh(e,t,r){Go[e]||(Go[e]=!0)}function ah(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ks(e){let{to:t,replace:r,state:n,relative:l}=e;Rr()||le(!1);let{future:s,static:i}=x.useContext(Lt),{matches:o}=x.useContext(Rt),{pathname:c}=Mt(),d=Mr(),p=Ni(t,wi(o,s.v7_relativeSplatPath),c,l==="path"),f=JSON.stringify(p);return x.useEffect(()=>d(JSON.parse(f),{replace:r,state:n,relative:l}),[d,f,l,r,n]),null}function tr(e){le(!1)}function lh(e){let{basename:t="/",children:r=null,location:n,navigationType:l=gt.Pop,navigator:s,static:i=!1,future:o}=e;Rr()&&le(!1);let c=t.replace(/^\/*/,"/"),d=x.useMemo(()=>({basename:c,navigator:s,static:i,future:wn({v7_relativeSplatPath:!1},o)}),[c,o,s,i]);typeof n=="string"&&(n=Lr(n));let{pathname:p="/",search:f="",hash:m="",state:_=null,key:v="default"}=n,k=x.useMemo(()=>{let y=ki(p,c);return y==null?null:{location:{pathname:y,search:f,hash:m,state:_,key:v},navigationType:l}},[c,p,f,m,_,v,l]);return k==null?null:x.createElement(Lt.Provider,{value:d},x.createElement(Ka.Provider,{children:r,value:k}))}function sh(e){let{children:t,location:r}=e;return Gm(ws(t),r)}new Promise(()=>{});function ws(e,t){t===void 0&&(t=[]);let r=[];return x.Children.forEach(e,(n,l)=>{if(!x.isValidElement(n))return;let s=[...t,l];if(n.type===x.Fragment){r.push.apply(r,ws(n.props.children,s));return}n.type!==tr&&le(!1),!n.props.index||!n.props.children||le(!1);let i={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=ws(n.props.children,s)),r.push(i)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ns.apply(null,arguments)}function ih(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function oh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ch(e,t){return e.button===0&&(!t||t==="_self")&&!oh(e)}const dh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],uh="6";try{window.__reactRouterVersion=uh}catch{}const ph="startTransition",Ho=rp[ph];function fh(e){let{basename:t,children:r,future:n,window:l}=e,s=x.useRef();s.current==null&&(s.current=hm({window:l,v5Compat:!0}));let i=s.current,[o,c]=x.useState({action:i.action,location:i.location}),{v7_startTransition:d}=n||{},p=x.useCallback(f=>{d&&Ho?Ho(()=>c(f)):c(f)},[c,d]);return x.useLayoutEffect(()=>i.listen(p),[i,p]),x.useEffect(()=>ah(n),[n]),x.createElement(lh,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:i,future:n})}const mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ci=x.forwardRef(function(t,r){let{onClick:n,relative:l,reloadDocument:s,replace:i,state:o,target:c,to:d,preventScrollReset:p,viewTransition:f}=t,m=ih(t,dh),{basename:_}=x.useContext(Lt),v,k=!1;if(typeof d=="string"&&hh.test(d)&&(v=d,mh))try{let g=new URL(window.location.href),w=d.startsWith("//")?new URL(g.protocol+d):new URL(d),C=ki(w.pathname,_);w.origin===g.origin&&C!=null?d=C+w.search+w.hash:k=!0}catch{}let y=Um(d,{relative:l}),u=gh(d,{replace:i,state:o,target:c,preventScrollReset:p,relative:l,viewTransition:f});function h(g){n&&n(g),g.defaultPrevented||u(g)}return x.createElement("a",Ns({},m,{href:v||y,onClick:k||s?n:h,ref:r,target:c}))});var Yo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yo||(Yo={}));var Jo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jo||(Jo={}));function gh(e,t){let{target:r,replace:n,state:l,preventScrollReset:s,relative:i,viewTransition:o}=t===void 0?{}:t,c=Mr(),d=Mt(),p=Su(e,{relative:i});return x.useCallback(f=>{if(ch(f,r)){f.preventDefault();let m=n!==void 0?n:Ra(d)===Ra(p);c(e,{replace:m,state:l,preventScrollReset:s,relative:i,viewTransition:o})}},[d,c,p,n,l,r,e,s,i,o])}function vh(){const[e,t]=x.useState(!1),[r,n]=x.useState(!1);x.useEffect(()=>{const s=()=>t(window.scrollY>30);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const l=[{label:"About",href:"#about"},{label:"Features",href:"#features"},{label:"Judging",href:"#judging"},{label:"Gallery",href:"#gallery"}];return a.jsxs("nav",{className:`navbar ${e?"navbar--scrolled":""}`,children:[a.jsxs("div",{className:"navbar__logo",children:["Bengal ",a.jsx("span",{children:"Yoga"})," Welfare Association"]}),a.jsxs("ul",{className:`navbar__links ${r?"navbar__links--open":""}`,children:[l.map(s=>a.jsx("li",{children:a.jsx("a",{href:s.href,onClick:()=>n(!1),children:s.label})},s.label)),a.jsx("li",{children:a.jsx("a",{href:"#contact",className:"navbar__cta",onClick:()=>n(!1),children:"Contact Us"})})]}),a.jsxs("div",{className:"navbar__right",children:[a.jsxs(Ci,{to:"/login",className:"navbar__admin-btn",children:[a.jsx("span",{className:"navbar__admin-icon",children:a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[a.jsx("rect",{x:"0.5",y:"0.5",width:"5",height:"5",rx:"1.2",fill:"currentColor"}),a.jsx("rect",{x:"7.5",y:"0.5",width:"5",height:"5",rx:"1.2",fill:"currentColor",opacity:"0.6"}),a.jsx("rect",{x:"0.5",y:"7.5",width:"5",height:"5",rx:"1.2",fill:"currentColor",opacity:"0.6"}),a.jsx("rect",{x:"7.5",y:"7.5",width:"5",height:"5",rx:"1.2",fill:"currentColor"})]})}),"Admin Panel"]}),a.jsxs("button",{className:"navbar__burger",onClick:()=>n(s=>!s),"aria-label":"Toggle menu",children:[a.jsx("span",{className:r?"navbar__burger-line--open":""}),a.jsx("span",{className:r?"navbar__burger-line--open navbar__burger-line--mid":""}),a.jsx("span",{className:r?"navbar__burger-line--open":""})]})]})]})}const Ko=[{name:"Warrior II",head:[210,122,23],segments:[[210,145,210,170],[210,170,210,268],[210,193,148,193],[148,193,118,193],[210,193,272,193],[272,193,304,193],[188,268,232,268],[195,268,155,345],[155,345,128,400],[228,268,272,345],[272,345,300,400]],joints:[[118,193],[304,193],[128,400],[300,400]]},{name:"Tree Pose",head:[210,106,22],segments:[[210,128,210,158],[210,158,210,290],[210,182,192,148],[192,148,180,120],[210,182,228,148],[228,148,240,120],[205,290,205,400],[215,290,260,335],[260,335,218,355]],joints:[[180,120],[240,120],[205,400],[218,355]]},{name:"Downward Dog",head:[144,285,19],segments:[[212,175,160,258],[160,258,146,282],[160,258,115,342],[160,258,148,350],[212,175,264,355],[212,175,298,340]],joints:[[115,342],[148,350],[264,355],[298,340]]},{name:"Warrior III",head:[115,248,19],segments:[[210,260,158,257],[158,257,128,252],[128,252,116,250],[158,257,154,215],[158,257,158,298],[210,260,210,365],[210,365,208,400],[210,260,278,260],[278,260,340,260]],joints:[[116,248],[154,210],[158,303],[208,400],[340,260]]},{name:"Meditation",head:[210,245,23],segments:[[210,268,210,290],[210,290,210,368],[210,320,172,352],[172,352,154,372],[210,320,248,352],[248,352,266,372],[200,368,158,393],[158,393,210,405],[210,405,262,393],[262,393,220,368]],joints:[[154,372],[266,372],[158,393],[262,393]]}];function xh(){const[e,t]=x.useState(0),[r,n]=x.useState(!1);x.useEffect(()=>{const s=setInterval(()=>{n(!0),setTimeout(()=>{t(i=>(i+1)%Ko.length),n(!1)},280)},1e3);return()=>clearInterval(s)},[]);const l=Ko[e];return a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"hero__left",children:[a.jsx("div",{className:"hero__eyebrow fade-up",children:"Est. Bally Ghat"}),a.jsxs("h1",{className:"hero__title fade-up stagger-1",children:["Where the body",a.jsx("br",{}),a.jsx("em",{children:"finds its"}),a.jsx("br",{}),"stillness."]}),a.jsx("p",{className:"hero__subtitle fade-up stagger-2",children:"A sanctuary of traditional yoga practice, competitive excellence, and community wellness — rooted in the heritage of Bally Ghat, Bengal."}),a.jsxs("div",{className:"hero__actions fade-up stagger-3",children:[a.jsx("a",{href:"#about",className:"btn-primary",children:"Discover More"}),a.jsx("a",{href:"#contact",className:"btn-ghost",children:"Get in Touch"})]}),a.jsx("div",{className:"hero__stats",children:[{num:"5",label:"Panel Judges"},{num:"3",label:"Core Scores"},{num:"∞",label:"Possibilities"}].map((s,i)=>a.jsxs("div",{className:`hero__stat fade-up stagger-${i+2}`,children:[a.jsx("div",{className:"hero__stat-num",children:s.num}),a.jsx("div",{className:"hero__stat-label",children:s.label})]},s.label))})]}),a.jsxs("div",{className:"hero__right",children:[a.jsxs("div",{className:"hero__illustration",children:[a.jsx("div",{style:{position:"absolute",top:"12px",left:"50%",transform:"translateX(-50%)",fontSize:"11px",letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",opacity:r?0:1,transition:"opacity 0.28s ease",whiteSpace:"nowrap"},children:l.name}),a.jsxs("svg",{width:"420",height:"520",viewBox:"0 0 420 520",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{opacity:r?0:1,transition:"opacity 0.28s ease"},children:[a.jsx("circle",{cx:"210",cy:"260",r:"190",fill:"rgba(255,255,255,0.06)"}),a.jsx("circle",{cx:"210",cy:"260",r:"140",fill:"rgba(255,255,255,0.04)"}),a.jsx("g",{opacity:"0.12",children:[0,45,90,135].map(s=>a.jsx("ellipse",{cx:"210",cy:"260",rx:"60",ry:"100",fill:"none",stroke:"white",strokeWidth:"1",transform:`rotate(${s} 210 260)`},s))}),a.jsx("line",{x1:"80",y1:"400",x2:"340",y2:"400",stroke:"rgba(255,255,255,0.18)",strokeWidth:"1",strokeDasharray:"4 6"}),a.jsx("circle",{cx:l.head[0],cy:l.head[1],r:l.head[2],fill:"none",stroke:"white",strokeWidth:"2",opacity:"0.9"}),l.segments.map(([s,i,o,c],d)=>a.jsx("line",{x1:s,y1:i,x2:o,y2:c,stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",opacity:"0.9"},d)),l.joints.map(([s,i],o)=>a.jsx("circle",{cx:s,cy:i,r:"5",fill:"rgba(196,149,106,0.85)"},o)),a.jsx("circle",{cx:"210",cy:"260",r:"8",fill:"rgba(196,149,106,0.35)"})]})]}),a.jsxs("div",{className:"hero__badge fade-up stagger-2",children:[a.jsx("div",{className:"hero__badge-sub",children:"Competition Season"}),a.jsx("div",{className:"hero__badge-year",children:"2026"})]})]})]})}const Qo=["Institute of Healthcare and Arts","Bally Rimpa Yoga Mandir","Siddheswari Yoga Siksha Kendra","Dishari Club","Kaity Ananda Tirtha Yoga Welfare Association","Belur Agami Yoga Kendra","Word Home English School","Shashpur Sadhana Yogtirtha 'O' Tapasili Loksanskriti Sarbosiksha Kendra","Painta Ananda Marga School","Amta Pally Kalyan Samity","Howrah Mangal Deep Sisu Kalyan Samity","Sri Aurobindo Yoga Kendra","Khalore Bidrohi Sangha","Ananda Mela","Maa Yoga Center","Vivekananda Yoga Kendra","Bengal Yoga Welfare Association"];function _h(){const e=[...Qo,...Qo];return a.jsx("div",{className:"marquee",children:a.jsx("div",{className:"marquee__inner",children:e.map((t,r)=>a.jsxs(et.Fragment,{children:[a.jsx("span",{children:t}),a.jsx("span",{className:"marquee__dot",children:"·"})]},r))})})}const jh=[{name:"Media Upload System",desc:"Showcase competition photos and videos in a curated, beautifully presented gallery — preserving every moment of excellence.",icon:a.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[a.jsx("rect",{x:"3",y:"3",width:"13",height:"13",rx:"1",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("rect",{x:"20",y:"3",width:"13",height:"13",rx:"1",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("rect",{x:"3",y:"20",width:"13",height:"13",rx:"1",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("rect",{x:"20",y:"20",width:"13",height:"13",rx:"1",stroke:"#7A8C74",strokeWidth:"1.5"})]})},{name:"Judging System",desc:"5 expert judges. The highest and lowest scores are excluded. The remaining 3 form the final — with a smart tie-breaking mechanism.",icon:a.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[a.jsx("circle",{cx:"18",cy:"18",r:"14",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("line",{x1:"18",y1:"4",x2:"18",y2:"32",stroke:"#C4956A",strokeWidth:"1",opacity:"0.4"}),a.jsx("line",{x1:"4",y1:"18",x2:"32",y2:"18",stroke:"#C4956A",strokeWidth:"1",opacity:"0.4"}),a.jsx("circle",{cx:"18",cy:"18",r:"5",fill:"rgba(196,149,106,0.25)",stroke:"#C4956A",strokeWidth:"1.5"})]})},{name:"Contact Page",desc:"An elegant contact section with association details and a live inquiry form — making it simple to reach our team anytime.",icon:a.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[a.jsx("rect",{x:"4",y:"8",width:"28",height:"20",rx:"2",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("path",{d:"M4 12 L18 22 L32 12",stroke:"#C4956A",strokeWidth:"1.5"})]})},{name:"About Section",desc:"Share the history, mission, and spirit of the yoga centre — connecting the community to its roots and vision.",icon:a.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[a.jsx("path",{d:"M18 5 L18 31",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("path",{d:"M12 10 Q18 5 24 10",stroke:"#C4956A",strokeWidth:"1.5",fill:"none"}),a.jsx("path",{d:"M9 18 Q18 10 27 18",stroke:"#7A8C74",strokeWidth:"1.5",fill:"none",opacity:"0.7"}),a.jsx("path",{d:"M6 26 Q18 15 30 26",stroke:"#C4956A",strokeWidth:"1",fill:"none",opacity:"0.5"})]})}];function yh(){return a.jsxs("section",{className:"features",id:"features",children:[a.jsxs("div",{className:"features__header",children:[a.jsx("div",{className:"section-label fade-up",children:"What We Offer"}),a.jsxs("h2",{className:"section-title fade-up stagger-1",children:["Built for ",a.jsx("em",{children:"excellence"})]})]}),a.jsx("div",{className:"features__grid",children:jh.map((e,t)=>a.jsxs("div",{className:`features__card fade-up stagger-${t+1}`,children:[a.jsx("div",{className:"features__icon",children:e.icon}),a.jsx("h3",{className:"features__name",children:e.name}),a.jsx("p",{className:"features__desc",children:e.desc})]},e.name))})]})}const bh=[{type:"photo",label:"Featured Competition",span:!0},{type:"video",label:"Finals Highlights"},{type:"photo",label:"Warm Up Session"},{type:"video",label:"Award Ceremony"},{type:"photo",label:"Practice Day"}];function kh(){x.useRef();const[e,t]=x.useState([]);return a.jsxs("section",{className:"gallery",id:"gallery",children:[a.jsxs("div",{className:"gallery__header",children:[a.jsx("div",{className:"section-label gallery__label fade-up",children:"Visual Archive"}),a.jsxs("h2",{className:"section-title fade-up stagger-1",style:{color:"var(--white)"},children:["Moments in ",a.jsx("em",{children:"motion"})]})]}),a.jsxs("div",{className:"gallery__grid",children:[bh.map((r,n)=>a.jsxs("div",{className:`gallery__card gallery__card--${n} ${r.span?"gallery__card--span":""} fade-up stagger-${n}`,children:[a.jsx("div",{className:"gallery__placeholder",children:r.type==="video"?a.jsx("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:a.jsx("polygon",{points:"13,8 28,18 13,28",stroke:"white",strokeWidth:"1.5",fill:"none",opacity:"0.4"})}):a.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[a.jsx("rect",{x:"4",y:"8",width:"28",height:"20",rx:"1",stroke:"white",strokeWidth:"1.5",opacity:"0.4"}),a.jsx("circle",{cx:"13",cy:"16",r:"3",stroke:"white",strokeWidth:"1.5",opacity:"0.4"}),a.jsx("path",{d:"M4 28 L12 18 L20 24 L26 16 L32 24",stroke:"white",strokeWidth:"1.5",opacity:"0.4"})]})}),a.jsx("div",{className:"gallery__card-label",children:r.label})]},n)),e.map((r,n)=>a.jsxs("div",{className:"gallery__card gallery__card--uploaded fade-up",children:[r.type.startsWith("video")?a.jsx("video",{src:r.url,className:"gallery__media",muted:!0}):a.jsx("img",{src:r.url,alt:r.name,className:"gallery__media"}),a.jsx("div",{className:"gallery__card-label",children:r.name})]},`up-${n}`))]})]})}const wh=[{title:"Tradition",desc:"Rooted in ancient yogic principles passed down through generations."},{title:"Excellence",desc:"Striving for the highest standard in every posture and every competition."},{title:"Community",desc:"Building a welcoming space for practitioners of all levels."},{title:"Integrity",desc:"Fair, transparent judging that honours every competitor."}];function Nh(){return a.jsx("section",{className:"about",id:"about",children:a.jsxs("div",{className:"about__inner",children:[a.jsxs("div",{className:"about__frame fade-up",children:[a.jsxs("div",{className:"about__frame-content",children:[a.jsxs("svg",{width:"80",height:"100",viewBox:"0 0 80 100",fill:"none",opacity:"0.3",children:[a.jsx("circle",{cx:"40",cy:"20",r:"12",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("line",{x1:"40",y1:"32",x2:"40",y2:"65",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("line",{x1:"40",y1:"48",x2:"20",y2:"58",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("line",{x1:"40",y1:"48",x2:"60",y2:"40",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("line",{x1:"40",y1:"65",x2:"25",y2:"90",stroke:"#C4956A",strokeWidth:"1.5"}),a.jsx("line",{x1:"40",y1:"65",x2:"55",y2:"90",stroke:"#C4956A",strokeWidth:"1.5"})]}),a.jsx("div",{className:"about__frame-place",children:"Bally Ghat, Bengal"})]}),a.jsx("div",{className:"about__frame-decoration"})]}),a.jsxs("div",{className:"about__text",children:[a.jsx("div",{className:"section-label fade-up",children:"Our Story"}),a.jsxs("h2",{className:"section-title fade-up stagger-1",children:["A legacy of ",a.jsx("em",{children:"practice"})]}),a.jsx("p",{className:"about__body fade-up stagger-2",children:"Bengal Yoga Welfare Association stands as a beacon of traditional yoga practice along the historic banks of Bally Ghat. Founded with the vision of bringing yogic discipline and wellness to the heart of Bengal, we have cultivated a community of practitioners, competitors, and seekers of the ancient art."}),a.jsx("p",{className:"about__body fade-up stagger-3",children:"Our competitions uphold the highest standards of fair judging, and our events celebrate both the precision of form and the spirit of practice — honouring every participant."}),a.jsx("div",{className:"about__values",children:wh.map((e,t)=>a.jsxs("div",{className:`about__value fade-up stagger-${t+1}`,children:[a.jsx("div",{className:"about__value-title",children:e.title}),a.jsx("div",{className:"about__value-desc",children:e.desc})]},e.title))})]})]})})}const Sh=[{label:"Location",value:`Bally Ghat, Howrah
West Bengal, India`},{label:"Email",value:"contact@bengalyoga.org"},{label:"Phone",value:"+91 XXXXX XXXXX"},{label:"Hours",value:"Mon – Sat, 6:00 AM – 8:00 PM"}];function Ch(){const[e,t]=x.useState({firstName:"",lastName:"",email:"",subject:"",message:""}),[r,n]=x.useState(!1),l=i=>t({...e,[i.target.name]:i.target.value}),s=i=>{i.preventDefault(),n(!0),setTimeout(()=>n(!1),4e3),t({firstName:"",lastName:"",email:"",subject:"",message:""})};return a.jsx("section",{className:"contact",id:"contact",children:a.jsxs("div",{className:"contact__inner",children:[a.jsxs("div",{className:"contact__info",children:[a.jsx("div",{className:"section-label fade-up",children:"Get in Touch"}),a.jsxs("h2",{className:"section-title fade-up stagger-1",children:["We'd love to ",a.jsx("em",{children:"hear"}),a.jsx("br",{}),"from you"]}),Sh.map((i,o)=>a.jsxs("div",{className:`contact__detail fade-up stagger-${o+1}`,children:[a.jsx("div",{className:"contact__detail-label",children:i.label}),a.jsx("div",{className:"contact__detail-val",children:i.value.split(`
`).map((c,d)=>a.jsxs("span",{children:[c,d<i.value.split(`
`).length-1&&a.jsx("br",{})]},d))})]},i.label))]}),a.jsxs("form",{className:"contact__form fade-up stagger-2",onSubmit:s,children:[a.jsxs("div",{className:"contact__form-row",children:[a.jsxs("div",{className:"contact__field",children:[a.jsx("label",{children:"First Name"}),a.jsx("input",{name:"firstName",placeholder:"Arjun",value:e.firstName,onChange:l})]}),a.jsxs("div",{className:"contact__field",children:[a.jsx("label",{children:"Last Name"}),a.jsx("input",{name:"lastName",placeholder:"Sharma",value:e.lastName,onChange:l})]})]}),a.jsxs("div",{className:"contact__field",children:[a.jsx("label",{children:"Email Address"}),a.jsx("input",{type:"email",name:"email",placeholder:"you@example.com",value:e.email,onChange:l})]}),a.jsxs("div",{className:"contact__field",children:[a.jsx("label",{children:"Subject"}),a.jsx("input",{name:"subject",placeholder:"Membership Inquiry",value:e.subject,onChange:l})]}),a.jsxs("div",{className:"contact__field",children:[a.jsx("label",{children:"Message"}),a.jsx("textarea",{name:"message",placeholder:"Tell us about yourself or your inquiry…",value:e.message,onChange:l,rows:5})]}),a.jsx("button",{type:"submit",className:`contact__submit ${r?"contact__submit--sent":""}`,children:r?"Message Sent ✓":"Send Message"})]})]})})}const Eh=[{label:"Features",href:"#features"},{label:"Judging",href:"#judging"},{label:"Gallery",href:"#gallery"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}];function zh(){return a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer__top",children:[a.jsxs("div",{className:"footer__brand",children:[a.jsxs("div",{className:"footer__logo",children:["Bengal ",a.jsx("span",{children:"Yoga"})," Welfare Association"]}),a.jsx("p",{className:"footer__tagline",children:"Rooted in tradition. Committed to excellence."})]}),a.jsxs("div",{className:"footer__nav",children:[a.jsx("div",{className:"footer__nav-label",children:"Navigation"}),a.jsx("ul",{children:Eh.map(e=>a.jsx("li",{children:a.jsx("a",{href:e.href,children:e.label})},e.label))})]}),a.jsxs("div",{className:"footer__nav",children:[a.jsx("div",{className:"footer__nav-label",children:"Contact"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("span",{children:"Bally Ghat, Howrah"})}),a.jsx("li",{children:a.jsx("span",{children:"West Bengal, India"})}),a.jsx("li",{children:a.jsx("a",{href:"mailto:contact@bengalyoga.org",children:"contact@bengalyoga.org"})}),a.jsx("li",{children:a.jsx("span",{children:"+91 XXXXX XXXXX"})})]})]})]}),a.jsxs("div",{className:"footer__bottom",children:[a.jsx("div",{className:"footer__copy",children:"© 2026 Bengal Yoga Welfare Association, Bally Ghat"}),a.jsxs("div",{className:"footer__credit",children:["Built by ",a.jsx("span",{children:"Trionyx Solutions"})]})]})]})}function Ph(){return x.useEffect(()=>{const e=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".fade-up").forEach(r=>e.observe(r)),()=>e.disconnect()},[]),a.jsxs(a.Fragment,{children:[a.jsx(vh,{}),a.jsxs("main",{children:[a.jsx(xh,{}),a.jsx(_h,{}),a.jsx(yh,{}),a.jsx(kh,{}),a.jsx(Nh,{}),a.jsx(Ch,{})]}),a.jsx(zh,{})]})}const Pu=x.createContext(null),Lh=4*60*1e3;function Rh({children:e}){const[t,r]=x.useState(null),[n,l]=x.useState(!1),s=x.useRef(null),i=x.useCallback(async()=>{if(localStorage.getItem("user"))try{await fetch("/api/auth/ping",{credentials:"include"})}catch{}},[]),o=x.useCallback(()=>{s.current&&(clearInterval(s.current),s.current=null)},[]),c=x.useCallback(()=>{o(),s.current=setInterval(i,Lh)},[i,o]);x.useEffect(()=>{try{const m=localStorage.getItem("user");m&&(r(JSON.parse(m)),c())}catch{localStorage.removeItem("user")}},[]),x.useEffect(()=>(t?c():o(),()=>o()),[t]),x.useEffect(()=>{const m=()=>{l(!0),o()};return window.addEventListener("session-expired",m),()=>window.removeEventListener("session-expired",m)},[o]);const d=x.useCallback(m=>{r(m),l(!1),localStorage.setItem("user",JSON.stringify(m)),c()},[c]),p=x.useCallback(async()=>{try{await fetch("/api/auth/logout",{method:"POST",credentials:"include"})}catch{}localStorage.removeItem("user"),localStorage.removeItem("bywa_last_path"),r(null),o()},[o]),f=x.useCallback(()=>l(!1),[]);return a.jsx(Pu.Provider,{value:{user:t,login:d,logout:p,isLoggedIn:!!t,sessionExpired:n,clearSessionExpired:f},children:e})}const Xt=()=>x.useContext(Pu),Mh=[{group:"Overview",items:[{id:"dashboard",label:"Dashboard",icon:a.jsx(Oh,{})}]},{group:"Manage",items:[{id:"judging",label:"Scrutiny Sheet",icon:a.jsx(Lu,{})},{id:"judgesheet",label:"Result Sheet",icon:a.jsx(Ru,{})},{id:"Participant",label:"Participant Entry",icon:a.jsx(Bh,{})},{id:"scoreentry",label:"Score Entry",icon:a.jsx(Ih,{})}]},{group:"System",items:[{id:"settings",label:"Settings",icon:a.jsx(Dh,{})}]}],Th=[{group:"Judging",items:[{id:"judgesheet",label:"Judge Sheet",icon:a.jsx(Ru,{})},{id:"judging",label:"Judging Panel",icon:a.jsx(Lu,{})}]}];function Ah({active:e,onNav:t,collapsed:r,onToggle:n,user:l,judgeOnly:s,mobileOpen:i,onMobileClose:o}){var d,p;const c=s?Th:Mh;return a.jsxs("aside",{className:`sidebar ${r?"sidebar--collapsed":""} ${i?"sidebar--open":""}`,children:[a.jsxs("div",{className:"sidebar__logo",children:[a.jsx("div",{className:"sidebar__logo-mark",children:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[a.jsx("circle",{cx:"14",cy:"8",r:"4",fill:"#C4956A"}),a.jsx("line",{x1:"14",y1:"12",x2:"14",y2:"22",stroke:"#C4956A",strokeWidth:"2"}),a.jsx("line",{x1:"14",y1:"16",x2:"8",y2:"20",stroke:"#C4956A",strokeWidth:"2"}),a.jsx("line",{x1:"14",y1:"16",x2:"20",y2:"13",stroke:"#C4956A",strokeWidth:"2"})]})}),!r&&a.jsxs("div",{className:"sidebar__logo-text",children:[a.jsx("span",{className:"sidebar__logo-name",children:"BYWA"}),a.jsx("span",{className:"sidebar__logo-sub",children:s?"Judge Panel":"Admin Portal"})]}),a.jsx("button",{className:"sidebar__toggle",onClick:n,"aria-label":"Toggle sidebar",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:a.jsx("path",{d:r?"M6 3l5 5-5 5":"M10 3L5 8l5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),a.jsx("nav",{className:"sidebar__nav",children:c.map(f=>a.jsxs("div",{className:"sidebar__group",children:[!r&&a.jsx("div",{className:"sidebar__group-label",children:f.group}),f.items.map(m=>a.jsxs("button",{className:`sidebar__item ${e===m.id?"sidebar__item--active":""}`,onClick:()=>t(m.id),title:r?m.label:void 0,children:[a.jsx("span",{className:"sidebar__icon",children:m.icon}),!r&&a.jsx("span",{className:"sidebar__item-label",children:m.label}),!r&&m.badge&&a.jsx("span",{className:"sidebar__badge",children:m.badge}),r&&m.badge&&a.jsx("span",{className:"sidebar__badge sidebar__badge--dot"})]},m.id))]},f.group))}),a.jsxs(Ci,{to:"/",className:`sidebar__back ${r?"sidebar__back--collapsed":""}`,title:"Back to site",children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:a.jsx("path",{d:"M9 2L4 7l5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),!r&&a.jsx("span",{children:"Back to Site"})]}),a.jsxs("div",{className:"sidebar__user",children:[a.jsx("div",{className:"sidebar__avatar",children:((p=(d=l==null?void 0:l.username)==null?void 0:d.charAt(0))==null?void 0:p.toUpperCase())||"A"}),!r&&a.jsxs("div",{className:"sidebar__user-info",children:[a.jsx("div",{className:"sidebar__user-name",children:(l==null?void 0:l.username)||"Admin"}),a.jsx("div",{className:"sidebar__user-role",children:s?"Judge":"Super Admin"})]})]})]})}function Oh(){return a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[a.jsx("rect",{x:"1",y:"1",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.4"}),a.jsx("rect",{x:"9",y:"1",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.4"}),a.jsx("rect",{x:"1",y:"9",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.4"}),a.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.4"})]})}function Lu(){return a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:a.jsx("path",{d:"M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"})})}function Ru(){return a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[a.jsx("rect",{x:"3",y:"2",width:"10",height:"12",rx:"1.5",stroke:"currentColor",strokeWidth:"1.4"}),a.jsx("path",{d:"M6 2.5h4",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"}),a.jsx("path",{d:"M5.5 6h5M5.5 9h5M5.5 12h3",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function Bh(){return a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[a.jsx("rect",{x:"1",y:"3",width:"14",height:"10",rx:"1.5",stroke:"currentColor",strokeWidth:"1.4"}),a.jsx("circle",{cx:"5.5",cy:"6.5",r:"1.5",stroke:"currentColor",strokeWidth:"1.2"}),a.jsx("path",{d:"M1 11l4-3 3 2.5 2.5-2 4.5 4",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})]})}function Dh(){return a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[a.jsx("circle",{cx:"8",cy:"8",r:"2.5",stroke:"currentColor",strokeWidth:"1.4"}),a.jsx("path",{d:"M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M3 13l1.4-1.4M11.6 4.4L13 3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})]})}function Ih(){return a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[a.jsx("path",{d:"M11.5 2.5l2 2-8.5 8.5-2.5.5.5-2.5 8.5-8.5z",stroke:"currentColor",strokeWidth:"1.3",strokeLinejoin:"round"}),a.jsx("path",{d:"M10 3l3 3",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]})}const $h={dashboard:"Dashboard",competitions:"Competitions",judging:"Judging Panel",judgesheet:"Judge Sheet",media:"Media Library",inbox:"Contact Inbox",settings:"Settings"};function Fh({activePage:e,user:t,onLogout:r,onMenuClick:n}){var d,p;const[l,s]=x.useState(""),i=(t==null?void 0:t.role)==="ROLE_ADMIN",o=i?"Admin":"Judge",c=i?"Administrator":"Judge Panel";return a.jsxs("header",{className:"topbar",children:[a.jsx("button",{className:"topbar__menu-btn",onClick:n,"aria-label":"Open menu",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:a.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}),a.jsx("div",{className:"topbar__left",children:a.jsxs("div",{className:"topbar__breadcrumb",children:[a.jsx("span",{className:"topbar__breadcrumb-root",children:o}),a.jsx("span",{className:"topbar__breadcrumb-sep",children:"/"}),a.jsx("span",{className:"topbar__breadcrumb-page",children:$h[e]??e})]})}),a.jsx("div",{className:"topbar__center",children:a.jsxs("div",{className:"topbar__search",children:[a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",className:"topbar__search-icon",children:[a.jsx("circle",{cx:"5.5",cy:"5.5",r:"4",stroke:"currentColor",strokeWidth:"1.3"}),a.jsx("path",{d:"M8.5 8.5L12 12",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]}),a.jsx("input",{className:"topbar__search-input",type:"text",placeholder:"Search…",value:l,onChange:f=>s(f.target.value)}),a.jsx("span",{className:"topbar__search-kbd",children:"⌘K"})]})}),a.jsxs("div",{className:"topbar__right",children:[a.jsx("div",{className:`topbar__role-badge topbar__role-badge--${i?"admin":"judge"}`,children:o}),a.jsx("div",{className:"topbar__divider"}),a.jsxs("div",{className:"topbar__profile",children:[a.jsx("div",{className:`topbar__avatar topbar__avatar--${i?"admin":"judge"}`,children:(((d=t==null?void 0:t.username)==null?void 0:d[0])||((p=t==null?void 0:t.name)==null?void 0:p[0])||"U").toUpperCase()}),a.jsxs("div",{className:"topbar__profile-info",children:[a.jsx("div",{className:"topbar__profile-name",children:(t==null?void 0:t.username)||(t==null?void 0:t.name)||"User"}),a.jsx("div",{className:"topbar__profile-role",children:c})]})]}),a.jsxs("button",{className:"topbar__logout",onClick:r,title:"Sign out",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[a.jsx("path",{d:"M6 3H4a1 1 0 00-1 1v8a1 1 0 001 1h2",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"}),a.jsx("path",{d:"M10 5l3 3-3 3M13 8H7",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Sign out"]})]})]})}const Wh=[{label:"Total Competitions",value:"24",delta:"+3 this month",color:"clay"},{label:"Active Judges",value:"5",delta:"All assigned",color:"sage"},{label:"Media Files",value:"318",delta:"+47 this week",color:"blue"},{label:"Pending Inquiries",value:"3",delta:"Needs reply",color:"red"}],Uh=[{name:"Bengal Open 2026",date:"Apr 18, 2026",status:"completed",participants:32},{name:"Bally Ghat Invitational",date:"Mar 29, 2026",status:"completed",participants:18},{name:"State Youth Championship",date:"May 10, 2026",status:"upcoming",participants:45},{name:"Inter-District Finals",date:"Jun 5, 2026",status:"upcoming",participants:24}],Vh=[{action:"New inquiry from Priya S.",time:"12 min ago",icon:"✉"},{action:"18 photos uploaded to gallery",time:"2 hrs ago",icon:"🖼"},{action:"Score sheet saved — Bengal Open",time:"5 hrs ago",icon:"⭐"},{action:"New competition added",time:"Yesterday",icon:"🏆"},{action:"Settings updated",time:"2 days ago",icon:"⚙"}];function Gh({onNav:e}){return a.jsxs("div",{className:"dashboard",children:[a.jsxs("div",{className:"dashboard__header",children:[a.jsxs("div",{children:[a.jsx("div",{className:"a-label",children:"Good morning"}),a.jsx("h1",{className:"a-title",style:{fontSize:"2rem",marginTop:"0.25rem"},children:"Welcome back, Admin"})]}),a.jsx("button",{className:"a-btn a-btn-primary",onClick:()=>e("competitions"),children:"+ New Competition"})]}),a.jsx("div",{className:"dashboard__stats",children:Wh.map(t=>a.jsxs("div",{className:`dashboard__stat-card dashboard__stat-card--${t.color} a-card`,children:[a.jsx("div",{className:"dashboard__stat-label a-label",children:t.label}),a.jsx("div",{className:"dashboard__stat-value",children:t.value}),a.jsx("div",{className:"dashboard__stat-delta",children:t.delta})]},t.label))}),a.jsxs("div",{className:"dashboard__grid",children:[a.jsxs("div",{className:"a-card",children:[a.jsxs("div",{className:"dashboard__card-head",children:[a.jsx("div",{className:"a-label",children:"Recent Competitions"}),a.jsx("button",{className:"dashboard__link",onClick:()=>e("competitions"),children:"View all →"})]}),a.jsxs("table",{className:"a-table",style:{marginTop:"1rem"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Competition"}),a.jsx("th",{children:"Date"}),a.jsx("th",{children:"Participants"}),a.jsx("th",{children:"Status"})]})}),a.jsx("tbody",{children:Uh.map(t=>a.jsxs("tr",{children:[a.jsx("td",{style:{fontWeight:500,color:"var(--a-ink)"},children:t.name}),a.jsx("td",{children:t.date}),a.jsx("td",{children:t.participants}),a.jsx("td",{children:a.jsx("span",{className:`a-badge ${t.status==="completed"?"a-badge-green":"a-badge-blue"}`,children:t.status})})]},t.name))})]})]}),a.jsxs("div",{className:"a-card",children:[a.jsx("div",{className:"dashboard__card-head",children:a.jsx("div",{className:"a-label",children:"Recent Activity"})}),a.jsx("ul",{className:"dashboard__activity",children:Vh.map((t,r)=>a.jsxs("li",{className:"dashboard__activity-item",children:[a.jsx("div",{className:"dashboard__activity-icon",children:t.icon}),a.jsxs("div",{className:"dashboard__activity-content",children:[a.jsx("div",{className:"dashboard__activity-action",children:t.action}),a.jsx("div",{className:"dashboard__activity-time",children:t.time})]})]},r))})]})]})]})}const Hh=[{id:1,name:"Bengal Open 2026",date:"Apr 18, 2026",venue:"Bally Ghat Main Hall",participants:32,status:"completed"},{id:2,name:"Bally Ghat Invitational",date:"Mar 29, 2026",venue:"Riverside Pavilion",participants:18,status:"completed"},{id:3,name:"State Youth Championship",date:"May 10, 2026",venue:"Kolkata Indoor Arena",participants:45,status:"upcoming"},{id:4,name:"Inter-District Finals",date:"Jun 5, 2026",venue:"Bally Ghat Main Hall",participants:24,status:"upcoming"},{id:5,name:"Summer Open",date:"Jul 20, 2026",venue:"TBD",participants:0,status:"draft"}],Yh=["All","upcoming","completed","draft"],Xo={name:"",date:"",venue:"",participants:"",status:"upcoming"};function Jh(){const[e,t]=x.useState(Hh),[r,n]=x.useState("All"),[l,s]=x.useState(!1),[i,o]=x.useState(null),[c,d]=x.useState(Xo),p=r==="All"?e:e.filter(y=>y.status===r),f=()=>{d(Xo),o(null),s(!0)},m=y=>{d({...y,participants:String(y.participants)}),o(y.id),s(!0)},_=()=>{c.name.trim()&&(t(i?y=>y.map(u=>u.id===i?{...c,id:i,participants:Number(c.participants)||0}:u):y=>[...y,{...c,id:Date.now(),participants:Number(c.participants)||0}]),s(!1))},v=y=>t(u=>u.filter(h=>h.id!==y)),k=y=>({completed:"a-badge-green",upcoming:"a-badge-blue",draft:"a-badge-orange"})[y]||"a-badge-orange";return a.jsxs("div",{className:"comps",children:[a.jsxs("div",{className:"comps__header",children:[a.jsxs("div",{children:[a.jsx("div",{className:"a-label",children:"Manage"}),a.jsx("h2",{className:"a-title",children:"Competitions"})]}),a.jsx("button",{className:"a-btn a-btn-primary",onClick:f,children:"+ Add Competition"})]}),a.jsx("div",{className:"comps__tabs",children:Yh.map(y=>a.jsx("button",{className:`comps__tab ${r===y?"comps__tab--active":""}`,onClick:()=>n(y),children:y.charAt(0).toUpperCase()+y.slice(1)},y))}),a.jsx("div",{className:"a-card comps__table-wrap",children:a.jsxs("table",{className:"a-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Competition Name"}),a.jsx("th",{children:"Date"}),a.jsx("th",{children:"Venue"}),a.jsx("th",{children:"Participants"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Actions"})]})}),a.jsxs("tbody",{children:[p.map(y=>a.jsxs("tr",{children:[a.jsx("td",{style:{fontWeight:500,color:"var(--a-ink)"},children:y.name}),a.jsx("td",{children:y.date}),a.jsx("td",{children:y.venue}),a.jsx("td",{children:y.participants}),a.jsx("td",{children:a.jsx("span",{className:`a-badge ${k(y.status)}`,children:y.status})}),a.jsx("td",{children:a.jsxs("div",{className:"comps__actions",children:[a.jsx("button",{className:"a-btn a-btn-ghost comps__action-btn",onClick:()=>m(y),children:"Edit"}),a.jsx("button",{className:"a-btn a-btn-danger comps__action-btn",onClick:()=>v(y.id),children:"Delete"})]})})]},y.id)),p.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:6,style:{textAlign:"center",color:"var(--a-ink-light)",padding:"2rem"},children:"No competitions found."})})]})]})}),l&&a.jsx("div",{className:"comps__modal-overlay",onClick:()=>s(!1),children:a.jsxs("div",{className:"comps__modal",onClick:y=>y.stopPropagation(),children:[a.jsxs("div",{className:"comps__modal-header",children:[a.jsx("h3",{className:"a-title",style:{fontSize:"1.3rem"},children:i?"Edit Competition":"Add Competition"}),a.jsx("button",{className:"comps__modal-close",onClick:()=>s(!1),children:"✕"})]}),a.jsxs("div",{className:"comps__modal-body",children:[[{label:"Competition Name",key:"name",placeholder:"Bengal Open 2027"},{label:"Date",key:"date",placeholder:"DD MMM YYYY"},{label:"Venue",key:"venue",placeholder:"Bally Ghat..."},{label:"Participants",key:"participants",placeholder:"0"}].map(y=>a.jsxs("div",{className:"comps__field",children:[a.jsx("label",{className:"a-label",children:y.label}),a.jsx("input",{className:"a-input",placeholder:y.placeholder,value:c[y.key],onChange:u=>d({...c,[y.key]:u.target.value})})]},y.key)),a.jsxs("div",{className:"comps__field",children:[a.jsx("label",{className:"a-label",children:"Status"}),a.jsxs("select",{className:"a-input",value:c.status,onChange:y=>d({...c,status:y.target.value}),children:[a.jsx("option",{value:"upcoming",children:"Upcoming"}),a.jsx("option",{value:"completed",children:"Completed"}),a.jsx("option",{value:"draft",children:"Draft"})]})]})]}),a.jsxs("div",{className:"comps__modal-footer",children:[a.jsx("button",{className:"a-btn a-btn-ghost",onClick:()=>s(!1),children:"Cancel"}),a.jsx("button",{className:"a-btn a-btn-primary",onClick:_,children:i?"Save Changes":"Add Competition"})]})]})})]})}const Zo={BASE:{text:"Base Score",color:"var(--green)",bg:"var(--green-soft)"},RULE2:{text:"Rule 2 – Full",color:"var(--gold)",bg:"var(--gold-soft)"},RULE3:{text:"Rule 3 – Asana ↓",color:"#7b5ea7",bg:"#f3eeff"},RULE4:{text:"Rule 4 – Judge ↓",color:"#b05c00",bg:"#fff3e0"},UNRESOLVED:{text:"Tied",color:"var(--red)",bg:"var(--red-soft)"}},Kh=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1714;
    --ink-2: #4a4540;
    --ink-3: #8a8480;
    --paper: #f9f6f0;
    --paper-2: #f0ece4;
    --paper-3: #e6e0d6;
    --accent: #c8440a;
    --gold: #d4a017;
    --gold-soft: #faf3e0;
    --silver: #7a8a99;
    --bronze: #a0673a;
    --green: #2d7a4f;
    --green-soft: #e8f5ee;
    --red: #c0392b;
    --red-soft: #fdecea;
    --shadow: 0 1px 3px rgba(26,23,20,0.08), 0 4px 12px rgba(26,23,20,0.06);
    --radius: 10px;
    --mono: 'DM Mono', monospace;
    --serif: 'Fraunces', Georgia, serif;
  }

  .jp { font-family: var(--mono); background: var(--paper); min-height: 100vh; padding: 2rem 1.5rem; color: var(--ink); }

  .jp__header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.75rem; gap: 1rem; flex-wrap: wrap; }
  .jp__label { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 0.3rem; }
  .jp__title { font-family: var(--serif); font-size: 1.9rem; font-weight: 600; color: var(--ink); letter-spacing: -0.02em; }

  .jp__legend { padding: 1rem 1.25rem; margin-bottom: 1.5rem; }
  .jp__judges { display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
  .jp__judge-chip { display: flex; align-items: center; gap: 0.4rem; background: var(--paper-2); border: 1px solid var(--paper-3); border-radius: 100px; padding: 0.3rem 0.7rem 0.3rem 0.3rem; font-size: 0.75rem; color: var(--ink-2); }
  .jp__judge-num { width: 20px; height: 20px; border-radius: 50%; background: var(--accent); color: #fff; font-size: 0.68rem; font-weight: 500; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .jp__judge-chip--rule { font-style: italic; color: var(--ink-3); font-size: 0.72rem; border-style: dashed; padding-left: 0.7rem; }

  .a-card { background: #fff; border: 1px solid var(--paper-3); border-radius: var(--radius); box-shadow: var(--shadow); }

  /* ── Loading / Error states ── */
  .jp__state-box { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.75rem; padding: 3rem 2rem; color: var(--ink-3); font-size: 0.85rem; text-align: center; }
  .jp__spinner { width: 28px; height: 28px; border: 2.5px solid var(--paper-3); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .jp__error-icon { font-size: 1.5rem; }
  .jp__retry-btn { font-family: var(--mono); font-size: 0.78rem; padding: 0.4rem 1rem; border: 1.5px solid var(--paper-3); border-radius: 6px; background: var(--paper-2); color: var(--ink-2); cursor: pointer; }
  .jp__retry-btn:hover { background: var(--paper-3); }

  /* ── Group toggle panel ── */
  .jp__group-panel {
    background: #fff;
    border: 1.5px solid var(--paper-3);
    border-radius: var(--radius);
    padding: 0.85rem 1.1rem;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .jp__group-panel-label {
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-3);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .jp__group-toggles { display: flex; flex-wrap: wrap; gap: 0.4rem; flex: 1; }
  .jp__group-toggle {
    font-family: var(--mono);
    font-size: 0.72rem;
    padding: 0.32rem 0.8rem;
    border-radius: 100px;
    border: 1.5px solid var(--paper-3);
    background: var(--paper-2);
    color: var(--ink-2);
    cursor: pointer;
    transition: all .15s;
    user-select: none;
    white-space: nowrap;
  }
  .jp__group-toggle:hover { background: var(--paper-3); }
  .jp__group-toggle--all-active {
    background: var(--ink);
    color: #fff;
    border-color: var(--ink);
    font-weight: 500;
  }
  .jp__group-toggle--male-active {
    background: #e8f2fb;
    color: #1a6fa8;
    border-color: #b3d4ef;
    font-weight: 600;
  }
  .jp__group-toggle--female-active {
    background: #fce8f3;
    color: #a3186e;
    border-color: #f0b3d9;
    font-weight: 600;
  }

  /* ── Scrutiny table ── */
  .jp__table-card {
    background: #fff;
    border: 1px solid var(--paper-3);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
    overflow: hidden;
  }
  .jp__table-wrap { overflow-x: auto; }
  .jp__table { width: 100%; border-collapse: collapse; font-size: 0.8rem; table-layout: auto; }
  .jp__table thead tr { background: var(--paper-2); border-bottom: 1.5px solid var(--paper-3); }
  .jp__table th {
    padding: 0.65rem 0.75rem;
    text-align: left;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-3);
    font-weight: 500;
    white-space: nowrap;
  }
  .jp__table th.th-center { text-align: center; }
  .jp__table th.th-calc { text-align: center; min-width: 80px; }
  .jp__table td { padding: 0.55rem 0.75rem; border-bottom: 1px solid var(--paper-2); vertical-align: middle; }
  .jp__table td.td-calc { text-align: center; min-width: 80px; }
  .jp__table tbody tr:hover { background: var(--paper); }
  .jp__row--gold { background: var(--gold-soft) !important; }

  .jp__rank { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; font-size: 0.72rem; font-weight: 500; background: var(--paper-2); color: var(--ink-2); }
  .jp__rank--1 { background: var(--gold); color: #fff; }
  .jp__rank--2 { background: var(--silver); color: #fff; }
  .jp__rank--3 { background: var(--bronze); color: #fff; }

  /* ── Per-asana score block ── */
  .jp__asana-block { display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 38px; }
  .jp__asana-scores { display: flex; gap: 2px; }
  .jp__score-pip {
    display: inline-flex; align-items: center; justify-content: center;
    width: 22px; height: 20px; border-radius: 3px;
    font-size: 0.68rem; font-weight: 500;
    background: var(--green-soft); color: var(--green);
    border: 1px solid #c3e6d4;
  }
  .jp__score-pip--excluded {
    background: var(--paper-2); color: var(--ink-3);
    border-color: var(--paper-3); opacity: 0.5;
    text-decoration: line-through;
  }
  .jp__score-pip--deciding { outline: 2px solid var(--gold); outline-offset: 1px; }
  .jp__asana-trim { font-size: 0.72rem; font-weight: 600; color: var(--accent); margin-top: 1px; }

  /* ── Tie-break badge ── */
  .jp__tie-badge {
    display: inline-flex; align-items: center;
    font-size: 0.65rem; font-weight: 500; padding: 0.2rem 0.5rem;
    border-radius: 4px; white-space: nowrap;
  }

  /* ── Expand button ── */
  .jp__expand-btn {
    background: none; border: 1px solid var(--paper-3); cursor: pointer;
    color: var(--ink-3); font-size: 0.7rem; padding: 0.2rem 0.5rem;
    border-radius: 4px; transition: background 0.12s, color 0.12s;
    font-family: var(--mono); display: inline-flex; align-items: center; gap: 0.2rem;
    white-space: nowrap;
  }
  .jp__expand-btn:hover { background: var(--paper-2); color: var(--accent); border-color: var(--accent); }
  .jp__expand-btn--open { color: var(--accent); background: var(--paper-2); border-color: var(--accent); }

  /* ── Breakdown drawer ── */
  .jp__breakdown-row td { padding: 0 !important; border-bottom: 2px solid var(--accent) !important; }
  .jp__breakdown { background: #fdfcf9; padding: 1.25rem 1.5rem; border-top: 1px solid var(--paper-3); }
  .jp__breakdown-title {
    font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--accent); font-weight: 600; margin-bottom: 1rem;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .jp__rule-section { margin-bottom: 1.1rem; }
  .jp__rule-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.65rem; flex-wrap: wrap; }
  .jp__rule-num {
    width: 20px; height: 20px; border-radius: 50%;
    font-size: 0.65rem; font-weight: 700;
    display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .jp__rule-name { font-size: 0.75rem; font-weight: 600; color: var(--ink); }
  .jp__rule-desc { font-size: 0.7rem; color: var(--ink-3); }
  .jp__rule-applied-badge {
    font-size: 0.62rem; padding: 0.12rem 0.45rem; border-radius: 3px;
    font-weight: 600; margin-left: auto; white-space: nowrap;
  }
  .jp__asana-calc { display: flex; flex-direction: column; gap: 0.55rem; }
  .jp__asana-calc-row {
    display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;
    padding: 0.5rem 0.75rem; background: #fff;
    border: 1px solid var(--paper-3); border-radius: 7px; font-size: 0.75rem;
  }
  .jp__asana-calc-label {
    font-size: 0.65rem; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--ink-3); min-width: 52px; font-weight: 500;
  }
  .jp__calc-scores { display: flex; gap: 3px; align-items: center; }
  .jp__calc-pip {
    display: inline-flex; align-items: center; justify-content: center;
    width: 24px; height: 22px; border-radius: 4px; font-size: 0.72rem; font-weight: 500;
  }
  .jp__calc-pip--kept   { background: var(--green-soft); color: var(--green); border: 1px solid #c3e6d4; }
  .jp__calc-pip--drop   { background: var(--paper-2); color: var(--ink-3); border: 1px solid var(--paper-3); text-decoration: line-through; opacity: 0.55; }
  .jp__calc-pip--full   { background: #fff8e1; color: #b8860b; border: 1px solid #f0d060; }
  .jp__calc-pip--active { outline: 2.5px solid var(--gold); outline-offset: 1px; }
  .jp__calc-arrow { color: var(--ink-3); font-size: 0.8rem; }
  .jp__calc-result { font-weight: 700; font-size: 0.85rem; margin-left: auto; min-width: 36px; text-align: right; }
  .jp__calc-result--trimmed { color: var(--accent); }
  .jp__calc-result--full    { color: #b8860b; }
  .jp__calc-totals {
    display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
    padding: 0.55rem 0.75rem; background: var(--paper-2);
    border: 1px solid var(--paper-3); border-radius: 7px; margin-top: 0.35rem;
  }
  .jp__calc-total-item { display: flex; flex-direction: column; gap: 2px; }
  .jp__calc-total-lbl { font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); }
  .jp__calc-total-val { font-size: 1rem; font-weight: 700; }
  .jp__calc-total-val--base { color: var(--accent); }
  .jp__calc-total-val--full { color: #b8860b; }
  .jp__formula-line {
    display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;
    font-size: 0.72rem; color: var(--ink-2); padding: 0.4rem 0;
  }
  .jp__formula-num { font-weight: 600; color: var(--ink); }
  .jp__formula-op { color: var(--ink-3); }
  .jp__formula-eq { font-weight: 700; color: var(--accent); font-size: 0.8rem; }
  .jp__tie-context {
    padding: 0.6rem 0.85rem; border-radius: 7px; font-size: 0.73rem;
    border: 1px solid; margin-bottom: 0.5rem; line-height: 1.55;
  }
  .jp__tie-context--info  { background: #f0f4ff; border-color: #c5d3f5; color: #2c3e8a; }
  .jp__tie-context--win   { background: var(--green-soft); border-color: #b2dfc5; color: var(--green); }
  .jp__tie-context--lose  { background: var(--red-soft); border-color: #f5c6c2; color: var(--red); }
  .jp__tie-context--none  { background: var(--paper-2); border-color: var(--paper-3); color: var(--ink-3); }
  .jp__cmp-table { width: 100%; border-collapse: collapse; font-size: 0.72rem; margin-top: 0.5rem; }
  .jp__cmp-table th { padding: 0.35rem 0.6rem; text-align: left; font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); border-bottom: 1px solid var(--paper-3); }
  .jp__cmp-table td { padding: 0.4rem 0.6rem; border-bottom: 1px solid var(--paper-2); }
  .jp__cmp-table tr:last-child td { border-bottom: none; }
  .jp__cmp-highlight { font-weight: 700; color: var(--accent); }
  .jp__cmp-winner { background: var(--green-soft); }
  .jp__cmp-loser  { background: var(--red-soft); }

  /* ── Refresh bar ── */
  .jp__refresh-bar { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 1rem; background: var(--paper-2); border-bottom: 1px solid var(--paper-3); font-size: 0.72rem; color: var(--ink-3); gap: 1rem; flex-wrap: wrap; }
  .jp__refresh-right { display: flex; align-items: center; gap: 0.6rem; }
  .jp__last-fetch { font-size: 0.68rem; color: var(--ink-3); }

  .a-btn { font-family: var(--mono); font-size: 0.8rem; font-weight: 500; border-radius: 7px; border: none; cursor: pointer; padding: 0.55rem 1rem; transition: all 0.15s; display: inline-flex; align-items: center; gap: 0.4rem; }
  .a-btn-primary { background: var(--accent); color: #fff; }
  .a-btn-primary:hover { background: #a83608; }
  .a-btn-ghost { background: var(--paper-2); color: var(--ink-2); border: 1px solid var(--paper-3); }
  .a-btn-ghost:hover { background: var(--paper-3); }
  .a-btn-sm { padding: 0.35rem 0.65rem; font-size: 0.72rem; }

  /* ── Group section header ── */
  .jp__group-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0.55rem 1rem;
    font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
    font-weight: 600;
  }
  .jp__group-header--male   { background: #e8f2fb; border-bottom: 1px solid #b3d4ef; color: #1a6fa8; }
  .jp__group-header--female { background: #fce8f3; border-bottom: 1px solid #f0b3d9; color: #a3186e; }

  .jp__tied-warn {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.45rem 1rem; font-size: 0.72rem;
    background: var(--gold-soft); color: #7a5a00;
    border-bottom: 1px solid #e8c84a;
  }

  /* ══════════════════════════════════════════════
     PRINT STYLES — Official Scrutiny Sheet format
  ══════════════════════════════════════════════ */
  @media print {
    body * { visibility: hidden !important; }
    .print-target, .print-target * { visibility: visible !important; }
    .print-target {
      position: fixed !important;
      top: 0 !important; left: 0 !important;
      width: 100% !important; height: auto !important;
      background: #fff !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    .no-print { display: none !important; }

    /* Official scrutiny sheet print styles */
    .prt-page {
      font-family: Arial, sans-serif;
      padding: 0.8cm 1cm;
      color: #000;
      max-width: 100%;
    }

    /* Letterhead */
    .prt-lh { text-align: center; border: 2px solid #000; padding: 0.5rem 1rem 0.4rem; margin-bottom: 0; }
    .prt-lh-inner { display: flex; align-items: center; justify-content: center; gap: 1rem; }
    .prt-lh-text { flex: 1; }
    .prt-org { font-size: 1.3rem; font-weight: 900; color: #c8440a; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1.2; }
    .prt-regd { font-size: 0.85rem; font-weight: 700; color: #c8440a; }
    .prt-addr { font-size: 0.72rem; color: #333; margin-top: 0.15rem; }

    /* Sheet title block */
    .prt-title-block { border: 2px solid #000; border-top: none; padding: 0.35rem 1rem; text-align: center; }
    .prt-sheet-title { font-size: 1.1rem; font-weight: 900; text-decoration: underline; color: #c8440a; text-transform: uppercase; letter-spacing: 0.05em; }
    .prt-comp-line { font-size: 0.85rem; font-weight: 700; color: #1a6fa8; text-decoration: underline; text-transform: uppercase; margin-top: 0.2rem; }

    /* Meta */
    .prt-meta { border: 2px solid #000; border-top: none; padding: 0.3rem 1rem; display: flex; gap: 2rem; }
    .prt-meta-field { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #c8440a; }
    .prt-meta-line { flex: 1; border-bottom: 1.5px solid #333; min-width: 120px; height: 16px; }
    .prt-group-row { border: 2px solid #000; border-top: none; padding: 0.3rem 1rem; display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #c8440a; }
    .prt-group-dots { flex: 1; border-bottom: 1.5px dotted #555; height: 16px; }

    /* Score grid */
    .prt-grid-wrap { border: 2px solid #000; border-top: none; overflow-x: auto; }
    .prt-grid { width: 100%; border-collapse: collapse; }
    .prt-grid th, .prt-grid td {
      border: 1px solid #1a6fa8;
      text-align: center;
      padding: 0.22rem 0.2rem;
      font-size: 0.7rem;
      min-width: 28px;
    }
    .prt-grid thead th {
      background: #fff;
      font-weight: 700;
      color: #c8440a;
      font-size: 0.68rem;
      white-space: nowrap;
    }
    .prt-grid thead th.th-row-label { background: #fff; min-width: 70px; text-align: left; padding-left: 0.4rem; }
    .prt-grid tbody tr.tr-tie td    { color: #c8440a; font-weight: 700; }
    .prt-grid tbody tr.tr-total td  { color: #1a6fa8; font-weight: 700; background: #f0f7ff; }
    .prt-grid tbody tr.tr-pos td    { color: #c8440a; font-weight: 700; background: #fff8f0; }
    .prt-grid tbody td.td-row-label { font-weight: 700; text-align: left; padding-left: 0.4rem; color: inherit; white-space: nowrap; }
    .prt-grid tbody td.td-data      { min-width: 30px; height: 20px; }

    /* Footer */
    .prt-footer-block {
      border: 2px solid #000; border-top: none;
      padding: 0.75rem 1rem;
      display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem;
    }
    .prt-sig-left { display: flex; flex-direction: column; gap: 1.2rem; }
    .prt-sig-line-wrap { display: flex; flex-direction: column; gap: 0.15rem; }
    .prt-sig-line-bar { border-bottom: 1.5px solid #333; width: 200px; height: 22px; }
    .prt-sig-label { font-size: 0.75rem; font-weight: 700; color: #c8440a; }
    .prt-judges-right { display: flex; flex-direction: column; gap: 0.2rem; }
    .prt-judges-title { font-size: 0.82rem; font-weight: 700; color: #1a6fa8; text-decoration: underline; text-align: right; margin-bottom: 0.2rem; }
    .prt-judge-row { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; }
    .prt-judge-num { font-weight: 700; min-width: 18px; }
    .prt-judge-line { border-bottom: 1px solid #333; width: 180px; height: 16px; }

    /* Hide all screen-only UI in print */
    .jp__group-panel,
    .jp__refresh-bar,
    .jp__group-header,
    .jp__tied-warn,
    .jp__breakdown,
    .jp__breakdown-row { display: none !important; }
  }
`,Tt=14;function Qh({cols:e}){return a.jsx("div",{className:"prt-grid-wrap",children:a.jsxs("table",{className:"prt-grid",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"th-row-label",children:" "}),e.map((t,r)=>a.jsx("th",{children:t.tno||""},r))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"td-row-label",children:"T. NO."}),e.map((t,r)=>a.jsx("td",{className:"td-data",children:t.tno},r))]}),[0,1,2,3,4].map(t=>a.jsxs("tr",{children:[a.jsxs("td",{className:"td-row-label",children:["JUDGE – ",t+1]}),e.map((r,n)=>a.jsx("td",{className:"td-data",children:r.judges[t]},n))]},t)),a.jsxs("tr",{className:"tr-tie",children:[a.jsxs("td",{className:"td-row-label",children:["TIE",(()=>{var r;const t=(r=e.find(n=>n.tieLabel))==null?void 0:r.tieLabel;return t?a.jsxs("span",{style:{fontWeight:400,fontSize:"0.58rem",color:"#a06000",marginLeft:3},children:["(",t,")"]}):null})()]}),e.map((t,r)=>a.jsx("td",{className:"td-data",style:t.tie==="TIED"?{color:"#c8440a",fontSize:"0.6rem"}:{},children:t.tie},r))]}),a.jsxs("tr",{className:"tr-total",children:[a.jsx("td",{className:"td-row-label",children:"TOTAL"}),e.map((t,r)=>a.jsx("td",{className:"td-data",children:t.total},r))]}),a.jsxs("tr",{className:"tr-pos",children:[a.jsx("td",{className:"td-row-label",children:"POSITION"}),e.map((t,r)=>a.jsx("td",{className:"td-data",children:t.pos},r))]})]})]})})}function Xh(){return a.jsxs("div",{className:"prt-footer-block",children:[a.jsxs("div",{className:"prt-sig-left",children:[a.jsxs("div",{className:"prt-sig-line-wrap",children:[a.jsx("div",{className:"prt-sig-line-bar"}),a.jsx("div",{className:"prt-sig-label",children:"Signature of the Scrutiniser & Date"})]}),a.jsxs("div",{className:"prt-sig-line-wrap",children:[a.jsx("div",{className:"prt-sig-line-bar"}),a.jsx("div",{className:"prt-sig-label",children:"Chief Judge Name"})]})]}),a.jsxs("div",{className:"prt-judges-right",children:[a.jsx("div",{className:"prt-judges-title",children:"Judges Name"}),[1,2,3,4,5].map(e=>a.jsxs("div",{className:"prt-judge-row",children:[a.jsxs("span",{className:"prt-judge-num",children:[e,"."]}),a.jsx("div",{className:"prt-judge-line"})]},e))]})]})}function Zh({group:e,yearSuffix:t}){const{ageGroup:r,gender:n,participants:l=[]}=e,s=[...l].sort((p,f)=>p.rank-f.rank),i=p=>{if(!p)return{tno:"",judges:["","","","",""],tie:"",tieLabel:"",total:"",pos:""};const f=[1,2,3,4,5].map(k=>p.asanas?p.asanas.reduce((y,u)=>{const h=(u.judgeScores??[])[k-1]??0;return y+h},0):"");let m="",_="";const v=p.tieBreakRule;if(v==="BASE"||!v)m="",_="";else if(v==="RULE2")m=p.fullScore??"",_="Full";else if(v==="RULE3"){const k=(p.decidingCells??[]).find(y=>y.includes("asana"));if(k){const y=k.match(/asana(\d+)/);if(y){const u=parseInt(y[1],10),h=(p.asanas??[]).find(g=>g.asanaNumber===u);m=h?h.trimmedTotal:p.fullScore??""}else m=p.fullScore??""}else m=p.fullScore??"";_="A↓Trim"}else if(v==="RULE4"){const k=(p.decidingCells??[]).find(y=>y.includes("asana"));if(k){const y=k.match(/asana(\d+)/);if(y){const u=parseInt(y[1],10),h=(p.asanas??[]).find(g=>g.asanaNumber===u);m=h?h.fullTotal:p.fullScore??""}else m=p.fullScore??""}else m=p.fullScore??"";_="A↓Full"}else v==="UNRESOLVED"&&(m="TIED",_="");return{tno:p.tagNo??"",judges:f,tie:m,tieLabel:_,total:p.baseScore??"",pos:p.rank?p.rank+(p.rank===1?"ST":p.rank===2?"ND":p.rank===3?"RD":"TH"):""}},o=s.length>0?s:Array(Tt).fill(null),c=[];for(let p=0;p<o.length;p+=Tt){const f=o.slice(p,p+Tt);for(;f.length<Tt;)f.push(null);c.push(f.map(m=>i(m)))}c.length===0&&c.push(Array(Tt).fill(null).map(()=>i(null)));const d=()=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"prt-lh",children:a.jsx("div",{className:"prt-lh-inner",children:a.jsxs("div",{className:"prt-lh-text",children:[a.jsx("div",{className:"prt-org",children:"Bengal Yoga Welfare Association"}),a.jsx("div",{className:"prt-regd",children:"(Govt. Regd.)"}),a.jsx("div",{className:"prt-addr",children:"149, Bireswar Chatterjee Street, B/G – 2, Chaital Para, P.O. – Bally, P.S. – Bally, Dist. – Howrah."})]})})}),a.jsxs("div",{className:"prt-title-block",children:[a.jsx("div",{className:"prt-sheet-title",children:"Scrutiny Sheet"}),a.jsxs("div",{className:"prt-comp-line",children:["National / Bengal / District Yogasana Competition – ",t||"20"]})]}),a.jsxs("div",{className:"prt-meta",children:[a.jsxs("div",{className:"prt-meta-field",children:["DATE :",a.jsx("div",{className:"prt-meta-line"})]}),a.jsxs("div",{className:"prt-meta-field",children:["PLACE :",a.jsx("div",{className:"prt-meta-line"})]})]}),a.jsxs("div",{className:"prt-group-row",children:["GROUP :",a.jsx("div",{className:"prt-group-dots"})]})]});return a.jsx("div",{children:c.map((p,f)=>a.jsxs("div",{className:"prt-page",style:f>0?{pageBreakBefore:"always"}:{},children:[a.jsx(d,{}),c.length>1&&a.jsxs("div",{style:{textAlign:"right",fontSize:"0.65rem",color:"#888",padding:"0.15rem 0.5rem",borderLeft:"2px solid #000",borderRight:"2px solid #000"},children:["Page ",f+1," of ",c.length," · ","Participants ",f*Tt+1,"–",Math.min((f+1)*Tt,s.length)]}),a.jsx(Qh,{cols:p}),f===c.length-1&&a.jsx(Xh,{})]},f))})}function qh({participant:e,allRows:t,colSpan:r}){const n=e,l=n.tieBreakRule,s=t.filter(d=>d.baseScore===n.baseScore&&d.serialNo!==n.serialNo),i=s.length>0,o=n.asanas.map(d=>{const p=new Set(d.excludedJudgeIndices),f=d.judgeScores.filter((m,_)=>!p.has(_));return{asana:d,excl:p,kept:f}}),c=n.asanas.map(d=>({asana:d,fullScores:d.judgeScores}));return a.jsx("tr",{className:"jp__breakdown-row",children:a.jsx("td",{colSpan:r,children:a.jsxs("div",{className:"jp__breakdown",children:[a.jsxs("div",{className:"jp__breakdown-title",children:["⟨ Calculation Breakdown — ",n.name," ⟩"]}),a.jsxs("div",{className:"jp__rule-section",children:[a.jsxs("div",{className:"jp__rule-header",children:[a.jsx("span",{className:"jp__rule-num",style:{background:"var(--green)",color:"#fff"},children:"1"}),a.jsx("span",{className:"jp__rule-name",children:"Base Score"}),a.jsx("span",{className:"jp__rule-desc",children:"— Drop highest & lowest per asana, sum middle 3"}),a.jsx("span",{className:"jp__rule-applied-badge",style:{background:"var(--green-soft)",color:"var(--green)"},children:"Always applied"})]}),a.jsxs("div",{className:"jp__asana-calc",children:[o.map(({asana:d,excl:p,kept:f})=>a.jsxs("div",{className:"jp__asana-calc-row",children:[a.jsxs("span",{className:"jp__asana-calc-label",children:["Asana ",d.asanaNumber]}),a.jsx("div",{className:"jp__calc-scores",children:d.judgeScores.map((m,_)=>a.jsx("span",{className:`jp__calc-pip ${p.has(_)?"jp__calc-pip--drop":"jp__calc-pip--kept"}`,title:p.has(_)?`J${_+1}: ${m} (excluded)`:`J${_+1}: ${m} (kept)`,children:m},_))}),a.jsx("span",{className:"jp__calc-arrow",children:"→"}),a.jsxs("div",{className:"jp__formula-line",children:[f.map((m,_)=>a.jsxs(et.Fragment,{children:[_>0&&a.jsx("span",{className:"jp__formula-op",children:"+"}),a.jsx("span",{className:"jp__formula-num",children:m})]},_)),a.jsx("span",{className:"jp__formula-op",children:"="})]}),a.jsx("span",{className:"jp__calc-result jp__calc-result--trimmed",children:d.trimmedTotal})]},d.asanaNumber)),a.jsx("div",{className:"jp__calc-totals",children:a.jsxs("div",{className:"jp__calc-total-item",children:[a.jsx("span",{className:"jp__calc-total-lbl",children:"Base Score"}),a.jsxs("div",{className:"jp__formula-line",style:{padding:0},children:[n.asanas.map((d,p)=>a.jsxs(et.Fragment,{children:[p>0&&a.jsx("span",{className:"jp__formula-op",children:"+"}),a.jsx("span",{className:"jp__formula-num",children:d.trimmedTotal})]},p)),a.jsx("span",{className:"jp__formula-op",children:"="}),a.jsx("span",{className:"jp__calc-total-val jp__calc-total-val--base",children:n.baseScore})]})]})})]})]}),i&&a.jsxs("div",{className:"jp__rule-section",children:[a.jsxs("div",{className:"jp__rule-header",children:[a.jsx("span",{className:"jp__rule-num",style:{background:"#d4a017",color:"#fff"},children:"2"}),a.jsx("span",{className:"jp__rule-name",children:"Tie-break Rule 1 — Full Score"}),a.jsx("span",{className:"jp__rule-desc",children:"— Include all 5 judge scores per asana"}),l==="RULE2"?a.jsx("span",{className:"jp__rule-applied-badge",style:{background:"#faf3e0",color:"#b8860b"},children:"Decisive"}):l==="BASE"?a.jsx("span",{className:"jp__rule-applied-badge",style:{background:"var(--green-soft)",color:"var(--green)"},children:"No tie — skipped"}):a.jsx("span",{className:"jp__rule-applied-badge",style:{background:"var(--paper-2)",color:"var(--ink-3)"},children:"Tied — continued"})]}),a.jsxs("div",{className:"jp__tie-context jp__tie-context--info",style:{marginBottom:"0.65rem"},children:["Base score ",a.jsx("strong",{children:n.baseScore})," is shared with:"," ",s.map(d=>a.jsxs("strong",{children:[d.name," (Tag ",d.tagNo,", Full: ",d.fullScore,")"]},d.serialNo)).reduce((d,p)=>[d,", ",p])]}),a.jsxs("div",{className:"jp__asana-calc",children:[c.map(({asana:d})=>a.jsxs("div",{className:"jp__asana-calc-row",children:[a.jsxs("span",{className:"jp__asana-calc-label",children:["Asana ",d.asanaNumber]}),a.jsx("div",{className:"jp__calc-scores",children:d.judgeScores.map((p,f)=>a.jsx("span",{className:`jp__calc-pip jp__calc-pip--full${l==="RULE2"?" jp__calc-pip--active":""}`,title:`Judge ${f+1}: ${p}`,children:p},f))}),a.jsx("span",{className:"jp__calc-arrow",children:"→"}),a.jsxs("div",{className:"jp__formula-line",children:[d.judgeScores.map((p,f)=>a.jsxs(et.Fragment,{children:[f>0&&a.jsx("span",{className:"jp__formula-op",children:"+"}),a.jsx("span",{className:"jp__formula-num",children:p})]},f)),a.jsx("span",{className:"jp__formula-op",children:"="})]}),a.jsx("span",{className:"jp__calc-result jp__calc-result--full",children:d.fullTotal})]},d.asanaNumber)),a.jsx("div",{className:"jp__calc-totals",children:a.jsxs("div",{className:"jp__calc-total-item",children:[a.jsx("span",{className:"jp__calc-total-lbl",children:"Full Score"}),a.jsxs("div",{className:"jp__formula-line",style:{padding:0},children:[n.asanas.map((d,p)=>a.jsxs(et.Fragment,{children:[p>0&&a.jsx("span",{className:"jp__formula-op",children:"+"}),a.jsx("span",{className:"jp__formula-num",children:d.fullTotal})]},p)),a.jsx("span",{className:"jp__formula-op",children:"="}),a.jsx("span",{className:"jp__calc-total-val jp__calc-total-val--full",children:n.fullScore})]})]})})]}),l==="RULE2"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{marginTop:"0.75rem",marginBottom:"0.3rem",fontSize:"0.68rem",color:"var(--ink-3)",letterSpacing:"0.08em",textTransform:"uppercase"},children:"Full score comparison"}),a.jsxs("table",{className:"jp__cmp-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Base"}),a.jsx("th",{children:"Full Score"}),n.asanas.map(d=>a.jsxs("th",{children:["A",d.asanaNumber," Full"]},d.asanaNumber)),a.jsx("th",{children:"Outcome"})]})}),a.jsx("tbody",{children:[n,...s].sort((d,p)=>p.fullScore-d.fullScore).map((d,p)=>{const f=d.serialNo===n.serialNo,m=p===0;return a.jsxs("tr",{className:f?m?"jp__cmp-winner":"jp__cmp-loser":"",children:[a.jsxs("td",{style:{fontWeight:f?600:400},children:[d.name,f?" ← you":""]}),a.jsx("td",{children:d.baseScore}),a.jsx("td",{className:f?"jp__cmp-highlight":"",children:d.fullScore}),d.asanas.map(_=>a.jsx("td",{children:_.fullTotal},_.asanaNumber)),a.jsx("td",{style:{fontWeight:600,color:m?"var(--green)":"var(--red)"},children:m?`Rank ${d.rank} ↑`:`Rank ${d.rank} ↓`})]},d.serialNo)})})]})]})]}),l==="RULE3"&&a.jsxs("div",{className:"jp__rule-section",children:[a.jsxs("div",{className:"jp__rule-header",children:[a.jsx("span",{className:"jp__rule-num",style:{background:"#7b5ea7",color:"#fff"},children:"3"}),a.jsx("span",{className:"jp__rule-name",children:"Tie-break Rule 2 — Asana-wise Trimmed"}),a.jsx("span",{className:"jp__rule-desc",children:"— Compare asana trimmed totals A1→A5 until first difference"}),a.jsx("span",{className:"jp__rule-applied-badge",style:{background:"#f3eeff",color:"#7b5ea7"},children:"Decisive"})]}),a.jsxs("table",{className:"jp__cmp-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),n.asanas.map(d=>a.jsxs("th",{children:["Asana ",d.asanaNumber]},d.asanaNumber)),a.jsx("th",{children:"Outcome"})]})}),a.jsx("tbody",{children:[n,...s].map(d=>a.jsxs("tr",{className:d.serialNo===n.serialNo?"jp__cmp-winner":"",children:[a.jsx("td",{style:{fontWeight:d.serialNo===n.serialNo?600:400},children:d.name}),d.asanas.map(p=>{const f=(d.decidingCells??[]).some(m=>m.startsWith(`asana${p.asanaNumber}`));return a.jsx("td",{className:f?"jp__cmp-highlight":"",children:p.trimmedTotal},p.asanaNumber)}),a.jsxs("td",{style:{fontWeight:600,color:"var(--green)"},children:["Rank ",d.rank]})]},d.serialNo))})]})]}),l==="RULE4"&&a.jsxs("div",{className:"jp__rule-section",children:[a.jsxs("div",{className:"jp__rule-header",children:[a.jsx("span",{className:"jp__rule-num",style:{background:"#b05c00",color:"#fff"},children:"4"}),a.jsx("span",{className:"jp__rule-name",children:"Tie-break Rule 3 — Asana-wise Full"}),a.jsx("span",{className:"jp__rule-desc",children:"— Compare all 5 judge totals per asana A1→A5"}),a.jsx("span",{className:"jp__rule-applied-badge",style:{background:"#fff3e0",color:"#b05c00"},children:"Decisive"})]}),a.jsxs("table",{className:"jp__cmp-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),n.asanas.map(d=>a.jsxs("th",{children:["Asana ",d.asanaNumber," Full"]},d.asanaNumber)),a.jsx("th",{children:"Outcome"})]})}),a.jsx("tbody",{children:[n,...s].map(d=>a.jsxs("tr",{className:d.serialNo===n.serialNo?"jp__cmp-winner":"",children:[a.jsx("td",{style:{fontWeight:d.serialNo===n.serialNo?600:400},children:d.name}),d.asanas.map(p=>{const f=(d.decidingCells??[]).some(m=>m.startsWith(`asana${p.asanaNumber}`));return a.jsx("td",{className:f?"jp__cmp-highlight":"",children:p.fullTotal},p.asanaNumber)}),a.jsxs("td",{style:{fontWeight:600,color:"var(--green)"},children:["Rank ",d.rank]})]},d.serialNo))})]})]}),l==="UNRESOLVED"&&a.jsxs("div",{className:"jp__tie-context jp__tie-context--none",children:["All four tie-breaking rules produced equal results. This participant shares Rank ",n.rank," with ",s.map(d=>d.name).join(", "),"."]}),!i&&a.jsxs("div",{className:"jp__tie-context jp__tie-context--win",style:{marginTop:"0.5rem"},children:["✓ No tie — ranked purely by base score (",n.baseScore,"). No tie-break rules needed."]})]})})})}function eg({yearSuffix:e}){const[t,r]=x.useState(null),[n,l]=x.useState(!0),[s,i]=x.useState(null),[o,c]=x.useState(null),[d,p]=x.useState(new Set),[f,m]=x.useState(null);x.useRef(null);const _=x.useCallback(async()=>{l(!0),i(null);try{const B=await fetch("/api/scrutiny");if(!B.ok)throw new Error(`Server returned ${B.status}`);const $=await B.json();r($),c(new Date)}catch(B){i(B.message||"Failed to load scrutiny data")}finally{l(!1)}},[]);x.useEffect(()=>{_()},[_]);const v=(t==null?void 0:t.groups)??[],k=v.length>0,y=(t==null?void 0:t.maleScrutiny)??(t==null?void 0:t.scrutiny)??[],u=(t==null?void 0:t.femaleScrutiny)??[],h=k?v.flatMap(B=>B.participants??[]):[...y,...u],g=h.length,w=f===null?v:v.filter(B=>B.groupKey===f),C=B=>p($=>{const Y=new Set($);return Y.has(B)?Y.delete(B):Y.add(B),Y}),P=B=>B===1?"jp__rank--1":B===2?"jp__rank--2":B===3?"jp__rank--3":"",E=13,M=B=>{const $=document.getElementById(`print-page-${B}`);if(!$)return;const Y=`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { margin: 0; padding: 0; background: #fff; }
      .prt-page {
        font-family: Arial, sans-serif;
        padding: 0.8cm 1cm;
        color: #000;
        max-width: 100%;
      }
      .prt-lh { text-align: center; border: 2px solid #000; padding: 0.5rem 1rem 0.4rem; margin-bottom: 0; }
      .prt-lh-inner { display: flex; align-items: center; justify-content: center; gap: 1rem; }
      .prt-lh-text { flex: 1; }
      .prt-org { font-size: 1.3rem; font-weight: 900; color: #c8440a; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1.2; }
      .prt-regd { font-size: 0.85rem; font-weight: 700; color: #c8440a; }
      .prt-addr { font-size: 0.72rem; color: #333; margin-top: 0.15rem; }
      .prt-title-block { border: 2px solid #000; border-top: none; padding: 0.35rem 1rem; text-align: center; }
      .prt-sheet-title { font-size: 1.1rem; font-weight: 900; text-decoration: underline; color: #c8440a; text-transform: uppercase; letter-spacing: 0.05em; }
      .prt-comp-line { font-size: 0.85rem; font-weight: 700; color: #1a6fa8; text-decoration: underline; text-transform: uppercase; margin-top: 0.2rem; }
      .prt-meta { border: 2px solid #000; border-top: none; padding: 0.3rem 1rem; display: flex; gap: 2rem; }
      .prt-meta-field { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #c8440a; }
      .prt-meta-line { flex: 1; border-bottom: 1.5px solid #333; min-width: 120px; height: 16px; }
      .prt-group-row { border: 2px solid #000; border-top: none; padding: 0.3rem 1rem; display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #c8440a; }
      .prt-group-dots { flex: 1; border-bottom: 1.5px dotted #555; height: 16px; }
      .prt-grid-wrap { border: 2px solid #000; border-top: none; overflow-x: auto; }
      .prt-grid { width: 100%; border-collapse: collapse; }
      .prt-grid th, .prt-grid td { border: 1px solid #1a6fa8; text-align: center; padding: 0.22rem 0.2rem; font-size: 0.7rem; min-width: 28px; }
      .prt-grid thead th { background: #fff; font-weight: 700; color: #c8440a; font-size: 0.68rem; white-space: nowrap; }
      .prt-grid thead th.th-row-label { background: #fff; min-width: 70px; text-align: left; padding-left: 0.4rem; }
      .prt-grid tbody tr.tr-tie td { color: #c8440a; font-weight: 700; }
      .prt-grid tbody tr.tr-total td { color: #1a6fa8; font-weight: 700; background: #f0f7ff; }
      .prt-grid tbody tr.tr-pos td { color: #c8440a; font-weight: 700; background: #fff8f0; }
      .prt-grid tbody td.td-row-label { font-weight: 700; text-align: left; padding-left: 0.4rem; color: inherit; white-space: nowrap; }
      .prt-grid tbody td.td-data { min-width: 30px; height: 20px; }
      .prt-footer-block { border: 2px solid #000; border-top: none; padding: 0.75rem 1rem; display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; }
      .prt-sig-left { display: flex; flex-direction: column; gap: 1.2rem; }
      .prt-sig-line-wrap { display: flex; flex-direction: column; gap: 0.15rem; }
      .prt-sig-line-bar { border-bottom: 1.5px solid #333; width: 200px; height: 22px; }
      .prt-sig-label { font-size: 0.75rem; font-weight: 700; color: #c8440a; }
      .prt-judges-right { display: flex; flex-direction: column; gap: 0.2rem; }
      .prt-judges-title { font-size: 0.82rem; font-weight: 700; color: #1a6fa8; text-decoration: underline; text-align: right; margin-bottom: 0.2rem; }
      .prt-judge-row { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; }
      .prt-judge-num { font-weight: 700; min-width: 18px; }
      .prt-judge-line { border-bottom: 1px solid #333; width: 180px; height: 16px; }
      @media print {
        body { margin: 0; }
        @page { margin: 0.5cm; size: A4 portrait; }
        .prt-page { page-break-after: always; }
        .prt-page:last-child { page-break-after: avoid; }
      }
    `,re=window.open("","_blank","width=900,height=700");re&&(re.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8"/>
      <title>Scrutiny Sheet</title>
      <style>${Y}</style>
    </head><body>${$.innerHTML}</body></html>`),re.document.close(),re.focus(),setTimeout(()=>{re.print(),re.close()},500))},U=a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"th-center",style:{width:36},children:"#"}),a.jsx("th",{style:{width:48},children:"Tag"}),a.jsx("th",{className:"th-center",style:{width:72},children:"Gender"}),a.jsx("th",{style:{minWidth:140},children:"Name"}),a.jsx("th",{children:"Asana 1"}),a.jsx("th",{children:"Asana 2"}),a.jsx("th",{children:"Asana 3"}),a.jsx("th",{children:"Asana 4"}),a.jsx("th",{children:"Asana 5"}),a.jsx("th",{style:{width:60},children:"Base"}),a.jsx("th",{style:{width:60},children:"Full"}),a.jsx("th",{style:{minWidth:120},children:"Tie-break"}),a.jsx("th",{className:"th-calc",children:"Calc"})]})}),I=B=>B.map($=>{const Y=new Set($.decidingCells??[]),re=Zo[$.tieBreakRule]??Zo.BASE,ie=d.has($.serialNo);return a.jsxs(et.Fragment,{children:[a.jsxs("tr",{className:$.rank===1?"jp__row--gold":"",children:[a.jsx("td",{style:{textAlign:"center"},children:a.jsx("span",{className:`jp__rank ${P($.rank)}`,children:$.rank})}),a.jsx("td",{style:{color:"var(--ink-3)",fontSize:"0.75rem"},children:$.tagNo}),a.jsx("td",{style:{textAlign:"center"},children:$.gender&&a.jsx("span",{style:{display:"inline-flex",alignItems:"center",padding:"0.1rem 0.4rem",borderRadius:4,fontSize:"0.62rem",fontWeight:500,...$.gender==="Male"?{background:"#e8f2fb",color:"#1a6fa8",border:"1px solid #b3d4ef"}:{background:"#fce8f3",color:"#a3186e",border:"1px solid #f0b3d9"}},children:$.gender})}),a.jsx("td",{style:{fontWeight:500,whiteSpace:"nowrap"},children:$.name}),($.asanas??[]).map(J=>{const A=new Set(J.excludedJudgeIndices??[]);return a.jsx("td",{style:{padding:"0.45rem 0.6rem"},children:a.jsxs("div",{className:"jp__asana-block",children:[a.jsx("div",{className:"jp__asana-scores",children:(J.judgeScores??[]).map((j,z)=>{const S=`asana${J.asanaNumber}_judge${z+1}`,D=A.has(z),b=Y.has(S);return a.jsx("span",{className:`jp__score-pip${D?" jp__score-pip--excluded":""}${b?" jp__score-pip--deciding":""}`,title:D?`J${z+1}: ${j} (excluded)`:b?`J${z+1}: ${j} (deciding)`:`J${z+1}: ${j}`,children:j},z)})}),a.jsx("div",{className:"jp__asana-trim",children:J.trimmedTotal})]})},J.asanaNumber)}),a.jsx("td",{children:a.jsx("span",{style:{fontSize:"0.9rem",fontWeight:700},children:$.baseScore})}),a.jsx("td",{children:a.jsx("span",{style:{fontSize:"0.8rem",color:"var(--ink-2)"},children:$.fullScore})}),a.jsx("td",{children:a.jsx("span",{className:"jp__tie-badge",style:{color:re.color,background:re.bg},children:re.text})}),a.jsx("td",{className:"td-calc",children:a.jsx("button",{className:`jp__expand-btn${ie?" jp__expand-btn--open":""}`,onClick:()=>C($.serialNo),title:ie?"Hide calculation":"Show calculation",children:ie?"▲ Hide":"▼ Show"})})]}),ie&&a.jsx(qh,{participant:$,allRows:h,colSpan:E})]},$.serialNo)});return a.jsxs("div",{children:[!n&&!s&&k&&a.jsxs("div",{className:"jp__group-panel no-print",children:[a.jsx("span",{className:"jp__group-panel-label",children:"Group"}),a.jsxs("div",{className:"jp__group-toggles",children:[a.jsx("button",{className:`jp__group-toggle ${f===null?"jp__group-toggle--all-active":""}`,onClick:()=>m(null),children:"All"}),v.map(B=>{const $=B.gender==="Male",Y=f===B.groupKey;return a.jsxs("button",{className:`jp__group-toggle ${Y?$?"jp__group-toggle--male-active":"jp__group-toggle--female-active":""}`,onClick:()=>m(Y?null:B.groupKey),children:[B.ageGroup," — ",B.gender,B.tiedCount>0&&" ⚠"]},B.groupKey)})]})]}),a.jsxs("div",{className:"jp__table-card",children:[a.jsxs("div",{className:"jp__refresh-bar no-print",children:[a.jsxs("span",{children:["results from ",a.jsx("code",{style:{fontSize:"0.7rem"},children:"/api/scrutiny"}),g>0&&` · ${g} participant${g!==1?"s":""}`]}),a.jsxs("div",{className:"jp__refresh-right",children:[o&&a.jsxs("span",{className:"jp__last-fetch",children:["Updated ",o.toLocaleTimeString()]}),a.jsx("button",{className:"jp__retry-btn",onClick:_,disabled:n,children:n?"…":"↻ Refresh"})]})]}),n&&a.jsxs("div",{className:"jp__state-box",children:[a.jsx("div",{className:"jp__spinner"}),a.jsx("span",{children:"Loading scrutiny data…"})]}),!n&&s&&a.jsxs("div",{className:"jp__state-box",children:[a.jsx("span",{className:"jp__error-icon",children:"⚠"}),a.jsx("span",{style:{color:"var(--red)"},children:s}),a.jsx("button",{className:"jp__retry-btn",onClick:_,children:"Retry"})]}),!n&&!s&&g===0&&a.jsx("div",{className:"jp__state-box",children:a.jsx("span",{children:"No scrutiny data available yet."})}),!n&&!s&&(k?w.map(B=>{const{groupKey:$,ageGroup:Y,gender:re,participants:ie=[],tiedCount:J=0}=B,A=re==="Male";return a.jsxs("div",{children:[a.jsxs("div",{className:`jp__group-header ${A?"jp__group-header--male":"jp__group-header--female"} no-print`,children:[a.jsxs("span",{children:["Group: ",Y," — ",re," — ",ie.length," Participant",ie.length!==1?"s":""]}),a.jsx("button",{className:"jp__retry-btn",onClick:()=>M($),style:{fontSize:"0.65rem",padding:"0.2rem 0.55rem"},children:"🖨 Print this group"})]}),J>0&&a.jsxs("div",{className:"jp__tied-warn no-print",children:["⚠ ",J," participant",J!==1?"s":""," share",J===1?"s":""," a tied rank in this group"]}),a.jsx("div",{className:"jp__table-wrap",children:a.jsxs("table",{className:"jp__table",children:[U,a.jsx("tbody",{children:I(ie)})]})})]},$)}):a.jsx("div",{className:"jp__table-wrap",children:a.jsxs("table",{className:"jp__table",children:[U,a.jsx("tbody",{children:I(h)})]})}))]}),k&&v.map(B=>a.jsx("div",{id:`print-page-${B.groupKey}`,style:{position:"absolute",left:"-9999px",top:0,width:"210mm",pointerEvents:"none",overflow:"hidden"},"aria-hidden":"true",children:a.jsx(Zh,{group:B,yearSuffix:e})},B.groupKey))]})}function qo(){const[e,t]=x.useState("");return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Kh}),a.jsxs("div",{className:"jp",children:[a.jsxs("div",{className:"jp__header",children:[a.jsxs("div",{children:[a.jsx("div",{className:"jp__label",children:"Judging"}),a.jsx("h2",{className:"jp__title",children:"Scrutiny Sheet"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[a.jsx("span",{style:{fontSize:"0.68rem",color:"var(--ink-3)",letterSpacing:"0.08em",textTransform:"uppercase"},children:"Year:"}),a.jsx("input",{value:e,onChange:r=>t(r.target.value),placeholder:"20__",style:{width:60,fontSize:"0.82rem",border:"none",borderBottom:"1.5px solid var(--paper-3)",background:"transparent",outline:"none",fontFamily:"var(--mono)",padding:"0.15rem 0.2rem",color:"var(--ink)"}})]})]}),a.jsxs("div",{className:"a-card jp__legend",children:[a.jsx("div",{className:"jp__label",style:{marginBottom:"0.75rem"},children:"Judge Assignments"}),a.jsxs("div",{className:"jp__judges",children:[["Judge 1","Judge 2","Judge 3","Judge 4","Judge 5"].map((r,n)=>a.jsxs("div",{className:"jp__judge-chip",children:[a.jsx("div",{className:"jp__judge-num",children:n+1}),a.jsx("span",{children:r})]},n)),a.jsx("div",{className:"jp__judge-chip jp__judge-chip--rule",children:a.jsx("span",{children:"Highest & Lowest excluded · Middle 3 counted"})})]})]}),a.jsx(eg,{yearSuffix:e})]})]})}const tg=[{id:1,name:"bengal-open-finals.jpg",type:"image",size:"2.4 MB",comp:"Bengal Open 2026",date:"Apr 18"},{id:2,name:"opening-ceremony.mp4",type:"video",size:"84 MB",comp:"Bengal Open 2026",date:"Apr 18"},{id:3,name:"warrior-pose-riya.jpg",type:"image",size:"1.8 MB",comp:"Bally Invitational",date:"Mar 29"},{id:4,name:"award-ceremony.jpg",type:"image",size:"3.1 MB",comp:"Bally Invitational",date:"Mar 29"},{id:5,name:"highlights-reel.mp4",type:"video",size:"210 MB",comp:"Bengal Open 2026",date:"Apr 20"},{id:6,name:"group-warmup.jpg",type:"image",size:"2.2 MB",comp:"State Championship",date:"May 10"}];function rg(){const[e,t]=x.useState(tg),[r,n]=x.useState("All"),[l,s]=x.useState(new Set),[i,o]=x.useState(!1),c=x.useRef(),d=r==="All"?e:e.filter(v=>v.type===r.toLowerCase()),p=v=>{s(k=>{const y=new Set(k);return y.has(v)?y.delete(v):y.add(v),y})},f=()=>{t(v=>v.filter(k=>!l.has(k.id))),s(new Set)},m=v=>{v.preventDefault(),o(!1);const k=Array.from(v.dataTransfer.files);_(k)},_=v=>{const k=v.map(y=>({id:Date.now()+Math.random(),name:y.name,type:y.type.startsWith("video")?"video":"image",size:(y.size/1048576).toFixed(1)+" MB",comp:"—",date:"Just now"}));t(y=>[...k,...y])};return a.jsxs("div",{className:"mm",children:[a.jsxs("div",{className:"mm__header",children:[a.jsxs("div",{children:[a.jsx("div",{className:"a-label",children:"Media"}),a.jsx("h2",{className:"a-title",children:"Media Library"})]}),a.jsxs("div",{className:"mm__header-actions",children:[l.size>0&&a.jsxs("button",{className:"a-btn a-btn-danger",onClick:f,children:["Delete ",l.size," selected"]}),a.jsx("button",{className:"a-btn a-btn-primary",onClick:()=>c.current.click(),children:"↑ Upload Files"}),a.jsx("input",{ref:c,type:"file",multiple:!0,accept:"image/*,video/*",style:{display:"none"},onChange:v=>_(Array.from(v.target.files))})]})]}),a.jsx("div",{className:"mm__stats",children:[{label:"Total Files",value:e.length},{label:"Images",value:e.filter(v=>v.type==="image").length},{label:"Videos",value:e.filter(v=>v.type==="video").length},{label:"Total Size",value:"~305 MB"}].map(v=>a.jsxs("div",{className:"a-card mm__stat",children:[a.jsx("div",{className:"a-label",children:v.label}),a.jsx("div",{className:"mm__stat-val",children:v.value})]},v.label))}),a.jsx("div",{className:"mm__filters",children:["All","Image","Video"].map(v=>a.jsx("button",{className:`comps__tab ${r===v?"comps__tab--active":""}`,onClick:()=>n(v),children:v},v))}),a.jsxs("div",{className:`mm__dropzone ${i?"mm__dropzone--active":""}`,onDragOver:v=>{v.preventDefault(),o(!0)},onDragLeave:()=>o(!1),onDrop:m,children:[a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[a.jsx("path",{d:"M16 4v18M8 12l8-8 8 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 24v2a2 2 0 002 2h20a2 2 0 002-2v-2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),a.jsx("span",{children:"Drag & drop photos or videos here"})]}),a.jsx("div",{className:"mm__grid",children:d.map(v=>a.jsxs("div",{className:`mm__file ${l.has(v.id)?"mm__file--selected":""}`,onClick:()=>p(v.id),children:[a.jsxs("div",{className:"mm__file-preview",children:[v.type==="image"?a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[a.jsx("rect",{x:"2",y:"5",width:"24",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),a.jsx("circle",{cx:"9",cy:"11",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"}),a.jsx("path",{d:"M2 20l6-5 5 4 4-3 9 7",stroke:"currentColor",strokeWidth:"1.5"})]}):a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[a.jsx("rect",{x:"2",y:"5",width:"24",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),a.jsx("polygon",{points:"11,10 20,14 11,18",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})]}),l.has(v.id)&&a.jsx("div",{className:"mm__file-check",children:"✓"})]}),a.jsxs("div",{className:"mm__file-info",children:[a.jsx("div",{className:"mm__file-name",title:v.name,children:v.name}),a.jsxs("div",{className:"mm__file-meta",children:[v.size," · ",v.comp," · ",v.date]})]})]},v.id))})]})}const ng=[{id:1,from:"Priya Sharma",email:"priya@gmail.com",subject:"Membership Inquiry",msg:"Hello, I am interested in joining the association. Could you please provide details about the membership process and fees?",date:"Apr 25",status:"unread"},{id:2,from:"Amit Bose",email:"amit@yahoo.com",subject:"Competition Registration",msg:"I would like to register for the State Youth Championship. My ward is 16 years old and has been practising for 3 years.",date:"Apr 24",status:"unread"},{id:3,from:"Sunita Pal",email:"sunita@gmail.com",subject:"Media Access",msg:"We covered the Bengal Open 2026 for our local newspaper. Could we get access to the official competition photos?",date:"Apr 24",status:"unread"},{id:4,from:"Rahul Dey",email:"rahul@outlook.com",subject:"Judge Application",msg:"I have 10 years of yoga experience and would like to apply as a judge for upcoming competitions. Please let me know the criteria.",date:"Apr 22",status:"read"},{id:5,from:"Monika Sen",email:"monika@gmail.com",subject:"General Inquiry",msg:"What are the timings for the practice sessions at Bally Ghat? I would like to visit with my family.",date:"Apr 20",status:"read"}];function ag(){const[e,t]=x.useState(ng),[r,n]=x.useState(null),[l,s]=x.useState(""),[i,o]=x.useState(!1),c=e.filter(m=>m.status==="unread").length,d=m=>{n(m),s(""),o(!1),t(_=>_.map(v=>v.id===m.id?{...v,status:"read"}:v))},p=()=>{l.trim()&&(o(!0),s(""),setTimeout(()=>o(!1),3e3))},f=m=>{t(_=>_.filter(v=>v.id!==m)),(r==null?void 0:r.id)===m&&n(null)};return a.jsxs("div",{className:"inbox",children:[a.jsx("div",{className:"inbox__header",children:a.jsxs("div",{children:[a.jsx("div",{className:"a-label",children:"Communication"}),a.jsxs("h2",{className:"a-title",children:["Contact Inbox",c>0&&a.jsxs("span",{className:"inbox__count",children:[c," unread"]})]})]})}),a.jsxs("div",{className:"inbox__layout",children:[a.jsx("div",{className:"inbox__list a-card",children:e.map(m=>a.jsxs("div",{className:`inbox__item ${(r==null?void 0:r.id)===m.id?"inbox__item--active":""} ${m.status==="unread"?"inbox__item--unread":""}`,onClick:()=>d(m),children:[a.jsxs("div",{className:"inbox__item-top",children:[a.jsx("div",{className:"inbox__avatar",children:m.from[0]}),a.jsxs("div",{className:"inbox__item-meta",children:[a.jsx("div",{className:"inbox__from",children:m.from}),a.jsx("div",{className:"inbox__date",children:m.date})]}),m.status==="unread"&&a.jsx("span",{className:"inbox__unread-dot"})]}),a.jsx("div",{className:"inbox__subject",children:m.subject}),a.jsxs("div",{className:"inbox__preview",children:[m.msg.slice(0,80),"…"]})]},m.id))}),a.jsx("div",{className:"inbox__detail a-card",children:r?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"inbox__detail-header",children:[a.jsxs("div",{children:[a.jsx("div",{className:"inbox__detail-subject",children:r.subject}),a.jsxs("div",{className:"inbox__detail-from",children:["From ",a.jsx("strong",{children:r.from})," <",r.email,"> · ",r.date]})]}),a.jsx("button",{className:"a-btn a-btn-danger",onClick:()=>f(r.id),children:"Delete"})]}),a.jsx("div",{className:"inbox__detail-body",children:r.msg}),a.jsxs("div",{className:"inbox__reply",children:[a.jsx("div",{className:"a-label",style:{marginBottom:"0.6rem"},children:"Reply"}),a.jsx("textarea",{className:"a-input inbox__reply-input",rows:4,placeholder:`Reply to ${r.from}…`,value:l,onChange:m=>s(m.target.value)}),a.jsxs("div",{className:"inbox__reply-actions",children:[i&&a.jsx("span",{className:"inbox__sent",children:"✓ Reply sent!"}),a.jsx("button",{className:"a-btn a-btn-primary",onClick:p,children:"Send Reply"})]})]})]}):a.jsxs("div",{className:"inbox__empty",children:[a.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",opacity:"0.25",children:[a.jsx("rect",{x:"4",y:"10",width:"40",height:"28",rx:"3",stroke:"currentColor",strokeWidth:"2"}),a.jsx("path",{d:"M4 16l20 14 20-14",stroke:"currentColor",strokeWidth:"2"})]}),a.jsx("p",{children:"Select a message to read"})]})})]})]})}function lg(){const[e,t]=x.useState({name:"Bengal Yoga Welfare Association",location:"Bally Ghat, Howrah, West Bengal",email:"contact@bengalyoga.org",phone:"+91 XXXXX XXXXX",hours:"Mon – Sat, 6:00 AM – 8:00 PM",about:"A sanctuary of traditional yoga practice rooted in the heritage of Bally Ghat, Bengal."}),[r,n]=x.useState({current:"",next:"",confirm:""}),[l,s]=x.useState(""),i=(d,p)=>t(f=>({...f,[d]:p})),o=()=>{s("org"),setTimeout(()=>s(""),2500)},c=()=>{!r.next||r.next!==r.confirm||(s("pwd"),n({current:"",next:"",confirm:""}),setTimeout(()=>s(""),2500))};return a.jsxs("div",{className:"settings",children:[a.jsxs("div",{className:"settings__header",children:[a.jsx("div",{className:"a-label",children:"System"}),a.jsx("h2",{className:"a-title",children:"Settings"})]}),a.jsxs("div",{className:"a-card settings__section",children:[a.jsx("div",{className:"settings__section-title",children:"Organisation Details"}),a.jsxs("div",{className:"settings__grid",children:[[{label:"Organisation Name",key:"name",type:"text"},{label:"Location",key:"location",type:"text"},{label:"Contact Email",key:"email",type:"email"},{label:"Phone",key:"phone",type:"text"},{label:"Opening Hours",key:"hours",type:"text"}].map(d=>a.jsxs("div",{className:"settings__field",children:[a.jsx("label",{className:"a-label",children:d.label}),a.jsx("input",{type:d.type,className:"a-input",value:e[d.key],onChange:p=>i(d.key,p.target.value)})]},d.key)),a.jsxs("div",{className:"settings__field settings__field--full",children:[a.jsx("label",{className:"a-label",children:"About Text"}),a.jsx("textarea",{className:"a-input",rows:3,value:e.about,onChange:d=>i("about",d.target.value)})]})]}),a.jsxs("div",{className:"settings__footer",children:[l==="org"&&a.jsx("span",{className:"settings__saved",children:"✓ Changes saved"}),a.jsx("button",{className:"a-btn a-btn-primary",onClick:o,children:"Save Changes"})]})]}),a.jsxs("div",{className:"a-card settings__section",children:[a.jsx("div",{className:"settings__section-title",children:"Change Password"}),a.jsx("div",{className:"settings__grid settings__grid--3",children:[{label:"Current Password",key:"current"},{label:"New Password",key:"next"},{label:"Confirm Password",key:"confirm"}].map(d=>a.jsxs("div",{className:"settings__field",children:[a.jsx("label",{className:"a-label",children:d.label}),a.jsx("input",{type:"password",className:"a-input",value:r[d.key],onChange:p=>n({...r,[d.key]:p.target.value}),placeholder:"••••••••"})]},d.key))}),r.next&&r.confirm&&r.next!==r.confirm&&a.jsx("p",{className:"settings__error",children:"Passwords do not match."}),a.jsxs("div",{className:"settings__footer",children:[l==="pwd"&&a.jsx("span",{className:"settings__saved",children:"✓ Password updated"}),a.jsx("button",{className:"a-btn a-btn-primary",onClick:c,children:"Update Password"})]})]}),a.jsxs("div",{className:"a-card settings__section",children:[a.jsx("div",{className:"settings__section-title",children:"Judging System Defaults"}),a.jsx("div",{className:"settings__info-grid",children:[{label:"Number of Judges",value:"5 judges per panel"},{label:"Exclusion Rule",value:"Highest + Lowest excluded"},{label:"Final Score",value:"Sum of middle 3 scores"},{label:"Tie-breaking",value:"Excluded scores included on tie"}].map(d=>a.jsxs("div",{className:"settings__info-row",children:[a.jsx("div",{className:"settings__info-label",children:d.label}),a.jsx("div",{className:"settings__info-val",children:d.value})]},d.label))}),a.jsx("p",{className:"settings__note",children:"Judging rules are defined by the association bylaws and cannot be changed here."})]})]})}const sg="/api";async function ig(e){const t=await fetch(`${sg}${e}`,{credentials:"include"});if(!t.ok)throw new Error(`${t.status} ${t.statusText}`);return t.json()}function og(){return a.jsx("span",{className:"js-spinner","aria-label":"Loading"})}function cg({message:e,onRetry:t}){return a.jsxs("div",{className:"js-error-banner",children:[a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:[a.jsx("circle",{cx:"7.5",cy:"7.5",r:"6.5",stroke:"currentColor",strokeWidth:"1.3"}),a.jsx("path",{d:"M7.5 4.5v3.5M7.5 10v.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]}),e,t&&a.jsx("button",{className:"js-error-retry",onClick:t,children:"Retry"})]})}function Ei(e){const t=["TH","ST","ND","RD"],r=e%100;return e+(t[(r-20)%10]||t[r]||t[0])}function Mu({gender:e}){if(!e)return null;const t=e==="Male"?{background:"#e8f2fb",color:"#1a6fa8",border:"1px solid #b3d4ef"}:{background:"#fce8f3",color:"#a3186e",border:"1px solid #f0b3d9"};return a.jsx("span",{style:{display:"inline-flex",alignItems:"center",padding:"0.1rem 0.4rem",borderRadius:4,fontSize:"0.65rem",fontWeight:500,...t},children:e})}const dg=`
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink:       #16120e;
  --ink-2:     #3d3630;
  --ink-3:     #8a7f76;
  --paper:     #faf7f2;
  --paper-2:   #f2ede4;
  --paper-3:   #e5ddd0;
  --paper-4:   #d9cfc0;
  --accent:    #8b1a1a;
  --accent-2:  #b84c4c;
  --gold:      #c9920a;
  --gold-soft: #fdf5e0;
  --silver:    #6b7a8d;
  --bronze:    #8a5c2e;
  --green:     #276345;
  --green-soft:#e8f3ed;
  --red:       #b01c1c;
  --red-soft:  #fbecec;
  --shadow-sm: 0 1px 3px rgba(22,18,14,.07), 0 2px 8px rgba(22,18,14,.05);
  --shadow:    0 2px 6px rgba(22,18,14,.08), 0 8px 24px rgba(22,18,14,.07);
  --radius:    10px;
  --mono:      'DM Mono', monospace;
  --serif:     'Crimson Pro', Georgia, serif;
  --print-border: 1px solid #bbb;
}

.js-shell {
  font-family: var(--mono);
  background: var(--paper);
  min-height: 100vh;
  color: var(--ink);
}

.js-topbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem 2rem 1.25rem;
  background: #fff;
  border-bottom: 1.5px solid var(--paper-3);
  position: sticky;
  top: 0;
  z-index: 20;
}
.js-section-label {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 0.25rem;
}
.js-page-title {
  font-family: var(--serif);
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
}
.js-topbar-actions {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.js-chip {
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  border: 1.5px solid var(--paper-3);
  background: var(--paper-2);
  color: var(--ink-2);
  cursor: pointer;
  transition: all .15s;
}
.js-chip:hover { background: var(--paper-3); }
.js-chip--active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.js-doc {
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1.5rem 3rem;
}

/* ── Org header ── */
.js-org {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid var(--ink);
}
.js-org-name {
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ink);
}
.js-org-reg {
  font-family: var(--serif);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--ink-2);
  margin: 0.1rem 0;
}
.js-org-addr {
  font-family: var(--serif);
  font-size: 0.85rem;
  color: var(--ink-3);
}

/* ── Sheet header ── */
.js-sheet-title {
  font-family: var(--serif);
  font-size: 1.45rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.08em;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.js-sheet-subtitle {
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--ink);
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

/* ── Meta fields (Date / Place / Group) ── */
.js-meta { margin-bottom: 1.25rem; }
.js-meta-row {
  display: flex;
  gap: 3rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}
.js-meta-field {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 140px;
}
.js-meta-field--wide { flex: 2; }
.js-meta-label {
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.js-meta-input {
  flex: 1;
  font-family: var(--serif);
  font-size: 0.95rem;
  border: none;
  border-bottom: 1.5px solid var(--ink-2);
  background: transparent;
  color: var(--ink);
  padding: 0.2rem 0.25rem;
  outline: none;
  min-width: 0;
}
.js-meta-input:focus { border-bottom-color: var(--accent); }

/* ── Group field with dotted line ── */
.js-group-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.js-group-label {
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  white-space: nowrap;
  letter-spacing: 0.04em;
}
.js-group-input {
  flex: 1;
  font-family: var(--serif);
  font-size: 0.95rem;
  border: none;
  border-bottom: 1.5px dotted var(--ink-2);
  background: transparent;
  color: var(--ink);
  padding: 0.2rem 0.25rem;
  outline: none;
}
.js-group-input:focus { border-bottom-color: var(--accent); }

/* ── Main result table ── */
.js-table-wrap { overflow-x: auto; margin-bottom: 0.75rem; }
.js-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.js-table th, .js-table td {
  border: var(--print-border);
  padding: 0.38rem 0.55rem;
  vertical-align: middle;
}
.js-table thead th {
  background: var(--paper-2);
  font-family: var(--serif);
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink);
  font-weight: 700;
  text-align: center;
}

/* column widths */
.col-tno    { width: 72px;  text-align: center; }
.col-gender { width: 80px;  text-align: center; }
.col-name   { min-width: 180px; text-align: left; }
.col-dob    { width: 100px; text-align: center; }
.col-pos    { width: 80px;  text-align: center; }
.col-centre { min-width: 130px; text-align: left; }

.js-table tbody td { vertical-align: middle; }

/* Position label cell */
.td-pos-label {
  font-family: var(--serif);
  font-size: 0.88rem;
  font-weight: 700;
  text-align: center;
  color: var(--ink);
}
.td-pos-label--gold   { color: var(--gold); }
.td-pos-label--silver { color: var(--silver); }
.td-pos-label--bronze { color: var(--bronze); }

/* editable cell */
.js-cell {
  width: 100%;
  font-family: var(--serif);
  font-size: 0.92rem;
  border: none;
  background: transparent;
  color: var(--ink);
  text-align: inherit;
  outline: none;
  padding: 0;
}

/* ── Live result table ── */
.js-live-row--gold   { background: var(--gold-soft); }
.js-live-cell { padding: 0.42rem 0.55rem; }

.js-rank-badge {
  display: inline-flex; align-items: center; justify-content: center;
  width: 26px; height: 26px; border-radius: 50%;
  font-size: 0.75rem; font-weight: 700;
  background: var(--paper-3); color: var(--ink-2);
}
.js-rank-badge--1 { background: var(--gold);   color: #fff; }
.js-rank-badge--2 { background: var(--silver); color: #fff; }
.js-rank-badge--3 { background: var(--bronze); color: #fff; }

.js-score-pill {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--ink-2);
}
.js-score-pill--final {
  font-weight: 600;
  color: var(--accent);
  font-size: 0.88rem;
}

/* ── Mode bar ── */
.js-mode-bar {
  display: flex; align-items: center; gap: 0.6rem;
  margin-bottom: 1rem; flex-wrap: wrap;
}
.js-mode-label { font-size: 0.7rem; color: var(--ink-3); }
.js-mode-btn {
  font-family: var(--mono); font-size: 0.72rem;
  padding: 0.28rem 0.75rem;
  border-radius: 100px;
  border: 1.5px solid var(--paper-3);
  background: var(--paper-2);
  color: var(--ink-2);
  cursor: pointer; transition: all .12s;
}
.js-mode-btn:hover { background: var(--paper-3); }
.js-mode-btn--active {
  background: var(--ink); color: #fff; border-color: var(--ink);
}

/* ── Add row bar ── */
.js-add-bar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}
.js-add-label { font-size: 0.72rem; color: var(--ink-3); }
.js-add-btn {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--paper-3);
  background: var(--paper-2);
  color: var(--ink-2);
  cursor: pointer;
  transition: background .12s;
}
.js-add-btn:hover { background: var(--paper-3); }

/* ── Tied warning ── */
.js-tied-banner {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.78rem; color: #7a5a00;
  padding: 0.65rem 1rem;
  background: #fdf5e0;
  border: 1px solid #e8c84a;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* ── Group selector panel ── */
.js-group-panel {
  background: #fff;
  border: 1.5px solid var(--paper-3);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
}
.js-group-panel-title {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 0.75rem;
  font-family: var(--mono);
}
.js-group-toggles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.js-group-toggle {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 0.35rem 0.85rem;
  border-radius: 100px;
  border: 1.5px solid var(--paper-3);
  background: var(--paper-2);
  color: var(--ink-2);
  cursor: pointer;
  transition: all .15s;
  user-select: none;
}
.js-group-toggle:hover { background: var(--paper-3); }
.js-group-toggle--male-active {
  background: #e8f2fb;
  color: #1a6fa8;
  border-color: #b3d4ef;
  font-weight: 600;
}
.js-group-toggle--female-active {
  background: #fce8f3;
  color: #a3186e;
  border-color: #f0b3d9;
  font-weight: 600;
}
.js-group-toggle--selected {
  outline: 2.5px solid var(--accent);
  outline-offset: 1px;
}

/* ── Print sheet container ── */
.js-print-sheet {
  background: #fff;
  border: 1px solid var(--paper-3);
  border-radius: var(--radius);
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
}
.js-print-sheet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 1rem;
  flex-wrap: wrap;
}
.js-print-sheet-label {
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink-2);
}

/* ── Print letterhead ── */
.prt-letterhead {
  text-align: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
}
.prt-letterhead-rule {
  border: none;
  border-top: 2.5px double var(--ink);
  margin: 0.5rem 0;
}
.prt-org-name {
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--ink);
  line-height: 1.2;
}
.prt-org-reg {
  font-family: var(--serif);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--ink-2);
  margin: 0.1rem 0;
}
.prt-org-addr {
  font-family: var(--serif);
  font-size: 0.82rem;
  color: var(--ink-3);
  margin-bottom: 0.25rem;
}
.prt-sheet-title {
  font-family: var(--serif);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 4px;
  color: var(--ink);
  margin-bottom: 0.3rem;
  margin-top: 0.75rem;
}
.prt-sheet-subtitle {
  font-family: var(--serif);
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--ink);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}
.prt-meta {
  margin-bottom: 0.75rem;
  font-family: var(--serif);
  font-size: 0.95rem;
}
.prt-meta-row {
  display: flex;
  gap: 2rem;
  margin-bottom: 0.4rem;
}
.prt-meta-field {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex: 1;
}
.prt-meta-label {
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 0.04em;
}
.prt-meta-input {
  flex: 1;
  font-family: var(--serif);
  font-size: 0.92rem;
  border: none;
  border-bottom: 1.5px solid var(--ink-2);
  background: transparent;
  color: var(--ink);
  padding: 0.15rem 0.2rem;
  outline: none;
  min-width: 0;
}
.prt-meta-input:focus { border-bottom-color: var(--accent); }
.prt-group-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}
.prt-group-input {
  flex: 1;
  font-family: var(--serif);
  font-size: 0.92rem;
  border: none;
  border-bottom: 1.5px dotted var(--ink-2);
  background: transparent;
  color: var(--ink);
  padding: 0.15rem 0.2rem;
  outline: none;
}
.prt-group-input:focus { border-bottom-color: var(--accent); }
.prt-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}
.prt-sig-block { text-align: center; min-width: 180px; }
.prt-sig-line {
  width: 180px;
  border-bottom: 1.5px solid var(--ink);
  margin-bottom: 0.3rem;
  height: 28px;
}
.prt-sig-label {
  font-family: var(--serif);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ink-2);
}

/* ── Footer ── */
.js-footer {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 2.5rem;
}
.js-sig-block { min-width: 200px; text-align: center; }
.js-sig-line {
  width: 200px;
  border-bottom: 1.5px solid var(--ink);
  margin-bottom: 0.3rem;
  height: 32px;
}
.js-sig-label {
  font-family: var(--serif);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink-2);
  text-align: center;
}

/* ── States ── */
.js-state {
  text-align: center;
  padding: 2.5rem 1rem;
  color: var(--ink-3);
  font-size: 0.82rem;
}
.js-spinner {
  display: inline-block;
  width: 16px; height: 16px;
  border: 2px solid var(--paper-3);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin .7s linear infinite;
  vertical-align: middle;
  margin-right: 0.5rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

.js-error-banner {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.78rem; color: var(--red);
  padding: 0.65rem 1rem;
  background: var(--red-soft);
  border: 1px solid #f3c0c0;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.js-error-retry {
  font-family: var(--mono);
  font-size: 0.72rem;
  margin-left: auto;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: 1px solid var(--red);
  background: transparent;
  color: var(--red);
  cursor: pointer;
}
.js-error-retry:hover { background: var(--red-soft); }

/* ══════════════════════════════════════════════
   PRINT STYLES
   Only the element with .print-target is shown.
   Everything else is hidden.
══════════════════════════════════════════════ */
@media print {
  /* Hide everything */
  body * { visibility: hidden !important; }

  /* Show only the selected sheet */
  .print-target,
  .print-target * { visibility: visible !important; }

  /* Position it at the top-left corner */
  .print-target {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    background: #fff !important;
    padding: 1.2cm 1.4cm !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 0 !important;
  }

  /* Remove screen-only elements inside target */
  .print-target .no-print { display: none !important; }

  /* Ensure table borders print */
  .print-target .js-table th,
  .print-target .js-table td { border: 1px solid #888 !important; }

  /* Remove background tints in print */
  .print-target .js-live-row--gold { background: #fff !important; }
  .print-target thead th { background: #f5f5f5 !important; }

  /* Input underlines in print */
  .print-target .prt-meta-input,
  .print-target .prt-group-input { border-bottom-color: #888 !important; }
}
`;function zi(e){return e===1?"td-pos-label td-pos-label--gold":e===2?"td-pos-label td-pos-label--silver":e===3?"td-pos-label td-pos-label--bronze":"td-pos-label"}function Tu({yearSuffix:e,ageGroup:t,gender:r,dateVal:n,placeVal:l,groupVal:s,onDateChange:i,onPlaceChange:o,onGroupChange:c}){return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"prt-letterhead",children:[a.jsx("div",{className:"prt-org-name",children:"Bengal Yoga Welfare Association"}),a.jsx("div",{className:"prt-org-reg",children:"(Govt. Regd.)"}),a.jsx("div",{className:"prt-org-addr",children:"149, Bireswar Chatterjee Street, Chaital Para, P.O. – Bally, P.S. – Bally, Dist. – Howrah."}),a.jsx("hr",{className:"prt-letterhead-rule"})]}),a.jsx("div",{className:"prt-sheet-title",children:"Result Sheet"}),a.jsxs("div",{className:"prt-sheet-subtitle",children:["National / Bengal / District Yogasana Competition – ",a.jsx("span",{style:{fontFamily:"var(--serif)",fontWeight:600},children:e||"20__"})]}),a.jsxs("div",{className:"prt-meta",children:[a.jsxs("div",{className:"prt-meta-row",children:[a.jsxs("div",{className:"prt-meta-field",children:[a.jsx("span",{className:"prt-meta-label",children:"DATE :"}),a.jsx("input",{className:"prt-meta-input",value:n,onChange:d=>i(d.target.value),placeholder:" "})]}),a.jsxs("div",{className:"prt-meta-field",children:[a.jsx("span",{className:"prt-meta-label",children:"PLACE :"}),a.jsx("input",{className:"prt-meta-input",value:l,onChange:d=>o(d.target.value),placeholder:" "})]})]}),a.jsxs("div",{className:"prt-group-row",children:[a.jsx("span",{className:"prt-meta-label",style:{fontFamily:"var(--serif)",fontWeight:700,letterSpacing:"0.04em"},children:"GROUP :"}),a.jsx("input",{className:"prt-group-input",value:s,onChange:d=>c(d.target.value),placeholder:`${t} — ${r}`})]})]})]})}function ug({group:e,yearSuffix:t,isSelected:r,onSelect:n}){const{groupKey:l,ageGroup:s,gender:i,participants:o=[],tiedCount:c=0}=e,[d,p]=x.useState(""),[f,m]=x.useState(""),[_,v]=x.useState(""),k=i==="Male",y=()=>{const u=document.getElementById(`prt-${l}`);if(!u)return;u.classList.add("print-target");const h=()=>{u.classList.remove("print-target"),window.removeEventListener("afterprint",h)};window.addEventListener("afterprint",h),window.print()};return a.jsxs("div",{className:"js-print-sheet",id:`prt-${l}`,style:{border:r?"2px solid var(--accent)":"1.5px solid var(--paper-3)",transition:"border-color .15s"},children:[a.jsxs("div",{className:"js-print-sheet-header no-print",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[a.jsxs("span",{className:"js-group-toggle",style:{background:k?"#e8f2fb":"#fce8f3",color:k?"#1a6fa8":"#a3186e",border:`1.5px solid ${k?"#b3d4ef":"#f0b3d9"}`,fontWeight:600,fontSize:"0.78rem"},children:[s," — ",i]}),c>0&&a.jsxs("span",{style:{fontSize:"0.72rem",color:"#7a5a00"},children:["⚠ ",c," tied"]})]}),a.jsx("button",{className:"js-add-btn",onClick:y,style:{fontSize:"0.72rem",display:"flex",alignItems:"center",gap:"0.3rem"},children:"🖨 Print this group"})]}),a.jsx(Tu,{yearSuffix:t,ageGroup:s,gender:i,dateVal:d,placeVal:f,groupVal:_,onDateChange:p,onPlaceChange:m,onGroupChange:v}),a.jsx("div",{className:"js-table-wrap",children:a.jsxs("table",{className:"js-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"col-tno",children:"T. NO."}),a.jsx("th",{className:"col-gender",children:"Gender"}),a.jsx("th",{className:"col-name",children:"Competitor's Name"}),a.jsx("th",{className:"col-dob",children:"D.O.B."}),a.jsx("th",{className:"col-pos",children:"Position"}),a.jsx("th",{className:"col-centre",children:"Centre Name"})]})}),a.jsx("tbody",{children:o.map(u=>a.jsxs("tr",{className:u.rank===1?"js-live-row--gold":"",children:[a.jsx("td",{className:"col-tno js-live-cell",children:a.jsx("span",{className:"js-score-pill",children:u.tagNo})}),a.jsx("td",{className:"col-gender js-live-cell",style:{textAlign:"center"},children:a.jsx(Mu,{gender:u.gender})}),a.jsx("td",{className:"col-name js-live-cell",children:u.name}),a.jsx("td",{className:"col-dob js-live-cell",children:a.jsx("input",{className:"js-cell",style:{textAlign:"center"}})}),a.jsx("td",{className:`col-pos js-live-cell ${zi(u.rank)}`,children:Ei(u.rank)}),a.jsx("td",{className:"col-centre js-live-cell",children:a.jsx("input",{className:"js-cell"})})]},u.serialNo))})]})}),a.jsx("div",{className:"prt-footer",children:a.jsxs("div",{className:"prt-sig-block",children:[a.jsx("div",{className:"prt-sig-line"}),a.jsx("div",{className:"prt-sig-label",children:"Signature & Date"})]})})]})}function pg({yearSuffix:e,onYearChange:t}){var y;const[r,n]=x.useState(null),[l,s]=x.useState(!1),[i,o]=x.useState(""),[c,d]=x.useState(null),p=x.useCallback(async()=>{s(!0),o("");try{const u=await ig("/leaderboard");n(u)}catch(u){o(u.message)}finally{s(!1)}},[]);x.useEffect(()=>{p()},[p]);const f=(r==null?void 0:r.groups)??[],m=f.length>0,_=m?f.reduce((u,h)=>u+(h.tiedCount??0),0):(r==null?void 0:r.tiedCount)??0,v=m?f.flatMap(u=>u.tiedSerialNos??[]):(r==null?void 0:r.tiedSerialNos)??(r==null?void 0:r.tiedTagNos)??[],k=c===null?f:f.filter(u=>u.groupKey===c);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"js-mode-bar no-print",children:[a.jsx("span",{className:"js-mode-label",children:"Source: Live from backend"}),a.jsx("button",{className:"js-add-btn",onClick:p,style:{marginLeft:"auto"},children:"↺ Refresh"})]}),l&&a.jsxs("div",{className:"js-state",children:[a.jsx(og,{}),"Loading results…"]}),i&&a.jsx(cg,{message:i,onRetry:p}),!l&&!i&&_>0&&a.jsxs("div",{className:"js-tied-banner no-print",children:["⚠ ",_," participant",_!==1?"s":""," share",_===1?"s":""," a tied rank.",v.length>0&&` Serial nos: ${v.join(", ")}.`," Resolve ties before finalising."]}),!l&&!i&&m&&a.jsxs("div",{className:"js-group-panel no-print",children:[a.jsx("div",{className:"js-group-panel-title",children:"Select group to view / print"}),a.jsxs("div",{className:"js-group-toggles",children:[a.jsx("button",{className:`js-group-toggle ${c===null?"js-group-toggle--selected":""}`,onClick:()=>d(null),children:"All Groups"}),f.map(u=>{const h=u.gender==="Male",g=c===u.groupKey;return a.jsxs("button",{className:`js-group-toggle ${h?"js-group-toggle--male-active":"js-group-toggle--female-active"} ${g?"js-group-toggle--selected":""}`,onClick:()=>d(g?null:u.groupKey),children:[u.ageGroup," — ",u.gender,u.tiedCount>0&&" ⚠"]},u.groupKey)})]})]}),!l&&!i&&m&&k.map(u=>a.jsx(ug,{group:u,yearSuffix:e,isSelected:c===u.groupKey,onSelect:d},u.groupKey)),!l&&!i&&!m&&((y=r==null?void 0:r.leaderboard)==null?void 0:y.length)>0&&a.jsx("div",{className:"js-table-wrap",children:a.jsxs("table",{className:"js-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"col-tno",children:"T. NO."}),a.jsx("th",{className:"col-gender",children:"Gender"}),a.jsx("th",{className:"col-name",children:"Competitor's Name"}),a.jsx("th",{className:"col-dob",children:"D.O.B."}),a.jsx("th",{className:"col-pos",children:"Position"}),a.jsx("th",{className:"col-centre",children:"Centre Name"})]})}),a.jsx("tbody",{children:r.leaderboard.map(u=>a.jsxs("tr",{className:u.rank===1?"js-live-row--gold":"",children:[a.jsx("td",{className:"col-tno js-live-cell",children:a.jsx("span",{className:"js-score-pill",children:u.tagNo})}),a.jsx("td",{className:"col-gender js-live-cell",style:{textAlign:"center"},children:a.jsx(Mu,{gender:u.gender})}),a.jsx("td",{className:"col-name js-live-cell",children:u.name}),a.jsx("td",{className:"col-dob js-live-cell",children:a.jsx("input",{className:"js-cell",style:{textAlign:"center"}})}),a.jsx("td",{className:`col-pos js-live-cell ${zi(u.rank)}`,children:Ei(u.rank)}),a.jsx("td",{className:"col-centre js-live-cell",children:a.jsx("input",{className:"js-cell"})})]},u.serialNo))})]})}),!l&&!i&&!r&&a.jsx("div",{className:"js-state",children:"No results available yet."})]})}function fg({yearSuffix:e,onYearChange:t}){const r=_=>({id:_}),[n,l]=x.useState(()=>Array.from({length:30},(_,v)=>r(v+1))),[s,i]=x.useState(""),[o,c]=x.useState(""),[d,p]=x.useState(""),f=_=>l(v=>[...v,...Array.from({length:_},(k,y)=>r(v.length+y+1))]),m=()=>{const _=document.getElementById("manual-print-sheet");if(!_)return;_.classList.add("print-target");const v=()=>{_.classList.remove("print-target"),window.removeEventListener("afterprint",v)};window.addEventListener("afterprint",v),window.print()};return a.jsxs("div",{className:"js-print-sheet",id:"manual-print-sheet",children:[a.jsxs("div",{className:"js-print-sheet-header no-print",children:[a.jsx("span",{className:"js-print-sheet-label",children:"Manual Entry Sheet"}),a.jsx("button",{className:"js-add-btn",onClick:m,style:{fontSize:"0.72rem",display:"flex",alignItems:"center",gap:"0.3rem"},children:"🖨 Print"})]}),a.jsx(Tu,{yearSuffix:e,ageGroup:"",gender:"",dateVal:s,placeVal:o,groupVal:d,onDateChange:i,onPlaceChange:c,onGroupChange:p}),a.jsx("div",{className:"js-table-wrap",children:a.jsxs("table",{className:"js-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"col-tno",children:"T. NO."}),a.jsx("th",{className:"col-gender",children:"Gender"}),a.jsx("th",{className:"col-name",children:"Competitor's Name"}),a.jsx("th",{className:"col-dob",children:"D.O.B."}),a.jsx("th",{className:"col-pos",children:"Position"}),a.jsx("th",{className:"col-centre",children:"Centre Name"})]})}),a.jsx("tbody",{children:n.map((_,v)=>a.jsxs("tr",{children:[a.jsx("td",{className:"col-tno",children:a.jsx("input",{className:"js-cell",style:{textAlign:"center"}})}),a.jsx("td",{className:"col-gender",children:a.jsx("input",{className:"js-cell",style:{textAlign:"center"},placeholder:"M/F"})}),a.jsx("td",{className:"col-name",children:a.jsx("input",{className:"js-cell"})}),a.jsx("td",{className:"col-dob",children:a.jsx("input",{className:"js-cell",style:{textAlign:"center"}})}),a.jsx("td",{className:`col-pos ${zi(v+1)}`,children:Ei(v+1)}),a.jsx("td",{className:"col-centre",children:a.jsx("input",{className:"js-cell"})})]},_.id))})]})}),a.jsxs("div",{className:"js-add-bar no-print",children:[a.jsxs("span",{className:"js-add-label",children:[n.length," rows"]}),a.jsx("button",{className:"js-add-btn",onClick:()=>f(1),children:"+ 1 Row"}),a.jsx("button",{className:"js-add-btn",onClick:()=>f(5),children:"+ 5 Rows"}),a.jsx("button",{className:"js-add-btn",onClick:()=>f(10),children:"+ 10 Rows"})]}),a.jsx("div",{className:"prt-footer",children:a.jsxs("div",{className:"prt-sig-block",children:[a.jsx("div",{className:"prt-sig-line"}),a.jsx("div",{className:"prt-sig-label",children:"Signature & Date"})]})})]})}function ec(){const[e,t]=x.useState("live"),[r,n]=x.useState("");return a.jsxs("div",{className:"js-shell",children:[a.jsx("style",{children:dg}),a.jsxs("div",{className:"js-topbar no-print",children:[a.jsxs("div",{className:"js-topbar-left",children:[a.jsx("div",{className:"js-section-label",children:"BYWA Documents"}),a.jsx("h1",{className:"js-page-title",children:"Result Sheet"})]}),a.jsxs("div",{className:"js-topbar-actions",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",marginRight:"0.25rem"},children:[a.jsx("span",{style:{fontSize:"0.7rem",color:"var(--ink-3)"},children:"Year:"}),a.jsx("input",{value:r,onChange:l=>n(l.target.value),placeholder:"20__",style:{width:52,fontSize:"0.8rem",border:"none",borderBottom:"1.5px solid var(--paper-3)",background:"transparent",outline:"none",fontFamily:"var(--mono)",padding:"0.15rem 0.2rem"}})]}),a.jsx("button",{className:`js-chip ${e==="live"?"js-chip--active":""}`,onClick:()=>t("live"),children:"⚡ Live"}),a.jsx("button",{className:`js-chip ${e==="manual"?"js-chip--active":""}`,onClick:()=>t("manual"),children:"✏ Manual"})]})]}),a.jsx("div",{className:"js-doc",children:e==="live"?a.jsx(pg,{yearSuffix:r,onYearChange:n}):a.jsx(fg,{yearSuffix:r,onYearChange:n})})]})}const Au=e=>`bywa_form_${e}`;function Wr(e,t){try{localStorage.setItem(Au(e),JSON.stringify(t))}catch(r){console.warn("saveFormState failed:",r)}}function Ou(e){try{const t=localStorage.getItem(Au(e));return t?JSON.parse(t):null}catch(t){return console.warn("loadFormState failed:",t),null}}const ia=["Male","Female"];function Bu(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function Ur(e){const t=new Date;return t.setFullYear(t.getFullYear()-e),Bu(t)}function mg(e){if(!e)return"Unknown";const t=Bu(new Date(e)),r=Ur(7),n=Ur(9),l=Ur(12),s=Ur(16),i=Ur(25);return t>=r?"0-7":t>=n?"7-9":t>=l?"9-12":t>=s?"12-16":t>=i?"16-25":"25+"}const hg=e=>{const t=document.getElementById(`group-${e}`);if(!t)return;t.classList.add("print-target");const r=()=>{t.classList.remove("print-target"),window.removeEventListener("afterprint",r)};window.addEventListener("afterprint",r),window.print()},gg=`
@media print {
  body * { visibility: hidden; }
  .print-target, .print-target * { visibility: visible; }
  .print-target { position: absolute; top: 0; left: 0; width: 100%; }
  .no-print { display: none !important; }
  .print-header { display: block !important; visibility: visible; }
}
.print-header { display: none; }
`;function an(e){if(!e)return null;const t=new Date(e),r=new Date;if(isNaN(t.getTime()))return null;let n=r.getFullYear()-t.getFullYear();const l=r.getMonth()-t.getMonth();return(l<0||l===0&&r.getDate()<t.getDate())&&n--,n}function Yn(e){const t=new Date;return t.setFullYear(t.getFullYear()-e),t.toISOString().split("T")[0]}const tc=[{key:"name",label:"Full Name",placeholder:"e.g. Ananya Roy",type:"text"},{key:"dateOfBirth",label:"Date of Birth",placeholder:"yyyy-MM-dd",type:"date"},{key:"gender",label:"Gender",placeholder:"Male / Female",type:"select"},{key:"club",label:"Club / Association",placeholder:"e.g. Howrah Yoga Club",type:"text"}],Ss=()=>({_id:Math.random(),name:"",dateOfBirth:"",gender:"",club:""}),Vr=()=>Array.from({length:5},Ss),Jn={name:"",dateOfBirth:"",gender:"",club:""};function rc(e){return!e.name&&!e.dateOfBirth&&!e.gender&&!e.club}function vg(e,t){const r=[];if(e.name.trim()?t.has(e.name.trim().toLowerCase())&&r.push("Duplicate name in batch"):r.push("Name required"),!e.dateOfBirth)r.push("Date of birth required");else{const n=an(e.dateOfBirth);n===null?r.push("Invalid date of birth"):n<0?r.push("Must be at least 5 years old"):n>100&&r.push("Must be 80 years old or younger")}return(!e.gender||!ia.includes(e.gender))&&r.push("Gender required (Male/Female)"),r}const xg=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1714; --ink-2: #4a4540; --ink-3: #8a8480;
    --paper: #f9f6f0; --paper-2: #f0ece4; --paper-3: #e6e0d6;
    --accent: #c8440a; --green: #2d7a4f; --green-soft: #e8f5ee;
    --red: #c0392b; --red-soft: #fdecea;
    --gold: #d4a017; --gold-soft: #faf3e0;
    --blue: #1a6fa8; --blue-soft: #e8f2fb;
    --shadow: 0 1px 3px rgba(26,23,20,0.08), 0 4px 12px rgba(26,23,20,0.06);
    --radius: 10px; --mono: 'DM Mono', monospace; --serif: 'Fraunces', Georgia, serif;
  }

  .pe { font-family: var(--mono); background: var(--paper); min-height: 100vh; padding: 2rem 1.5rem; color: var(--ink); }

  /* ── Header ── */
  .pe__header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.75rem; gap: 1rem; flex-wrap: wrap; }
  .pe__label  { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 0.3rem; }
  .pe__title  { font-family: var(--serif); font-size: 1.9rem; font-weight: 600; color: var(--ink); letter-spacing: -0.02em; }

  /* ── Stats bar ── */
  .pe__stats { display: flex; gap: 0.85rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .pe__stat  { flex: 1; min-width: 110px; background: #fff; border: 1px solid var(--paper-3); border-radius: var(--radius); box-shadow: var(--shadow); padding: 0.85rem 1.1rem; }
  .pe__stat-lbl { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 0.3rem; }
  .pe__stat-val { font-size: 1.5rem; font-weight: 700; color: var(--ink); }
  .pe__stat-val--accent { color: var(--accent); }
  .pe__stat-val--green  { color: var(--green);  }
  .pe__stat-val--blue   { color: var(--blue);   }

  /* ── Card ── */
  .a-card { background: #fff; border: 1px solid var(--paper-3); border-radius: var(--radius); box-shadow: var(--shadow); }

  /* ── Tabs ── */
  .pe__card-header { display: flex; align-items: flex-start; justify-content: space-between; padding: 1.25rem 1.5rem 0; gap: 1rem; flex-wrap: wrap; }
  .pe__card-title  { font-family: var(--serif); font-size: 1.1rem; font-weight: 600; }
  .pe__card-sub    { font-size: 0.75rem; color: var(--ink-3); margin-top: 0.2rem; }
  .pe__tabs { display: flex; border-bottom: 1.5px solid var(--paper-3); padding: 0 1.5rem; margin-top: 1rem; }
  .pe__tab  { font-family: var(--mono); font-size: 0.78rem; padding: 0.5rem 1rem; border: none; background: none;
              cursor: pointer; color: var(--ink-3); border-bottom: 2px solid transparent;
              margin-bottom: -1.5px; transition: all 0.15s; }
  .pe__tab:hover { color: var(--ink-2); }
  .pe__tab--active { color: var(--accent); border-bottom-color: var(--accent); font-weight: 500; }

  .pe__body { padding: 1.25rem 1.5rem; }

  /* ── Single form ── */
  .pe__form-grid { display: grid; grid-template-columns: 2fr 1.5fr 1fr 2fr; gap: 1rem; margin-bottom: 1rem; }
  @media (max-width: 768px) { .pe__form-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 480px) { .pe__form-grid { grid-template-columns: 1fr; } }
  .pe__form-label { display: block; font-size: 0.72rem; color: var(--ink-2); margin-bottom: 0.4rem; letter-spacing: 0.04em; }
  .pe__required   { color: var(--accent); }
  .pe__input-wrap { position: relative; }
  .pe__input-icon { position: absolute; left: 0.65rem; top: 50%; transform: translateY(-50%); color: var(--ink-3); pointer-events: none; display: flex; }
  .a-input { width: 100%; font-family: var(--mono); font-size: 0.82rem; padding: 0.55rem 0.75rem;
             background: var(--paper); border: 1.5px solid var(--paper-3); border-radius: 7px;
             color: var(--ink); transition: border-color 0.15s; }
  .a-input:focus { outline: none; border-color: var(--accent); background: #fff; }
  .a-input--icon { padding-left: 2.1rem; }
  input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.5; cursor: pointer; }
  .a-select { width: 100%; font-family: var(--mono); font-size: 0.82rem; padding: 0.55rem 0.75rem;
              background: var(--paper); border: 1.5px solid var(--paper-3); border-radius: 7px;
              color: var(--ink); transition: border-color 0.15s; appearance: none;
              background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238a8480' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
              background-repeat: no-repeat; background-position: right 0.75rem center; cursor: pointer; }
  .a-select:focus { outline: none; border-color: var(--accent); background-color: #fff; }

  /* ── Age preview pill ── */
  .pe__age-pill { display: inline-flex; align-items: center; gap: 0.3rem; margin-top: 0.4rem;
                  font-size: 0.7rem; color: var(--ink-3); }
  .pe__age-pill strong { color: var(--ink-2); }
  .pe__age-pill--warn  { color: var(--red); }

  .pe__form-notice { display: flex; align-items: center; gap: 0.45rem; font-size: 0.75rem; color: var(--ink-3);
                     margin-bottom: 1rem; padding: 0.6rem 0.85rem; background: var(--paper-2);
                     border-radius: 6px; border: 1px solid var(--paper-3); }
  .pe__form-error  { display: flex; align-items: center; gap: 0.45rem; font-size: 0.75rem; color: var(--red);
                     margin-bottom: 1rem; padding: 0.6rem 0.85rem; background: var(--red-soft);
                     border-radius: 6px; border: 1px solid #f5c6c2; }
  .pe__form-success{ display: flex; align-items: center; gap: 0.45rem; font-size: 0.75rem; color: var(--green);
                     margin-bottom: 1rem; padding: 0.6rem 0.85rem; background: var(--green-soft);
                     border-radius: 6px; border: 1px solid #b2dfc5; }
  .pe__form-actions{ display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap; }

  /* ── Restored banner ── */
  .pe__restored-banner {
    display: flex; align-items: center; gap: 0.5rem;
    margin-bottom: 1rem; padding: 0.65rem 1rem;
    background: var(--gold-soft); border: 1px solid #e8d07a;
    border-radius: 7px; font-size: 0.75rem; color: #7a5c00;
  }
  .pe__restored-banner button {
    margin-left: auto; background: none; border: none; cursor: pointer;
    color: #7a5c00; font-size: 0.75rem; font-family: var(--mono);
    padding: 0; opacity: 0.7;
  }
  .pe__restored-banner button:hover { opacity: 1; }

  /* ── Bulk hint ── */
  .pe__bulk-hint {
    display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;
    margin-bottom: 0.85rem; font-size: 0.72rem; color: var(--ink-3);
    padding: 0.5rem 0.75rem; background: var(--paper-2);
    border: 1px solid var(--paper-3); border-radius: 6px;
  }
  .pe__bulk-hint kbd {
    display: inline-flex; align-items: center; background: #fff;
    border: 1px solid var(--paper-3); border-bottom-width: 2px; border-radius: 4px;
    font-family: var(--mono); font-size: 0.65rem; padding: 0.05rem 0.4rem; color: var(--ink-2);
  }

  /* ── Grid ── */
  .pe__grid-wrap { border: 1.5px solid var(--paper-3); border-radius: 8px; overflow: hidden; overflow-x: auto; }
  .pe__grid { width: 100%; border-collapse: collapse; }
  .pe__grid thead tr { background: var(--paper-2); }
  .pe__grid th {
    padding: 0.55rem 0.7rem; text-align: left; font-size: 0.65rem;
    letter-spacing: 0.09em; text-transform: uppercase; color: var(--ink-3);
    font-weight: 500; border-bottom: 1.5px solid var(--paper-3); white-space: nowrap; user-select: none;
  }
  .pe__grid th.col-rownum { width: 36px; text-align: center; }
  .pe__grid th.col-status { width: 40px; text-align: center; }
  .pe__grid th.col-del    { width: 36px; }
  .pe__grid th.col-gender { width: 110px; }
  .pe__grid th.col-dob    { width: 150px; }
  .pe__grid tbody tr { border-bottom: 1px solid var(--paper-2); transition: background 0.08s; }
  .pe__grid tbody tr:last-child { border-bottom: none; }
  .pe__grid tbody tr:hover  { background: var(--paper) !important; }
  .pe__grid tbody tr.row--ok    { background: #f1fbf5; }
  .pe__grid tbody tr.row--err   { background: #fef6f5; }
  .pe__grid tbody tr.row--empty { background: #fff; }
  .pe__grid td { padding: 0; vertical-align: middle; }
  .pe__grid td.col-rownum { text-align: center; color: var(--ink-3); font-size: 0.68rem; padding: 0 0.5rem; border-right: 1px solid var(--paper-2); }
  .pe__grid td.col-status { text-align: center; padding: 0 0.4rem; }
  .pe__grid td.col-del    { padding: 0 0.3rem; }
  .pe__grid td:not(.col-rownum):not(.col-status):not(.col-del) { border-right: 1px solid var(--paper-2); }
  .pe__grid-cell {
    display: block; width: 100%; font-family: var(--mono); font-size: 0.8rem;
    padding: 0.52rem 0.65rem; background: transparent; border: none; color: var(--ink);
    outline: none; transition: background 0.1s, box-shadow 0.1s; min-width: 80px;
  }
  .pe__grid td.col-dob .pe__grid-cell    { min-width: 130px; }
  .pe__grid td.col-gender .pe__grid-cell { min-width: 90px; }
  .pe__grid-cell::placeholder { color: var(--paper-3); }
  .pe__grid-cell:focus { background: #fff; box-shadow: inset 0 0 0 2px var(--accent); position: relative; z-index: 2; border-radius: 2px; }
  .pe__grid-cell--err:not(:focus) { background: #fff3f2; }
  .pe__grid-select {
    display: block; width: 100%; font-family: var(--mono); font-size: 0.8rem;
    padding: 0.52rem 0.65rem; background: transparent; border: none; color: var(--ink);
    outline: none; cursor: pointer; appearance: none; min-width: 90px;
  }
  .pe__grid-select:focus { background: #fff; box-shadow: inset 0 0 0 2px var(--accent); }
  .pe__grid-select--err:not(:focus) { background: #fff3f2; }

  /* ── Row status dot + tooltip ── */
  .pe__row-status-wrap { position: relative; display: inline-flex; }
  .pe__row-dot { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 50%; font-size: 0.62rem; font-weight: 700; cursor: default; }
  .pe__row-dot--ok    { background: var(--green); color: #fff; }
  .pe__row-dot--err   { background: var(--red);   color: #fff; }
  .pe__row-dot--empty { background: var(--paper-3); color: var(--ink-3); font-size: 0.8rem; }
  .pe__err-tip { display: none; position: absolute; right: 26px; top: 50%; transform: translateY(-50%);
    background: #2a1f1a; color: #fff; font-size: 0.68rem; border-radius: 5px;
    padding: 0.4rem 0.65rem; white-space: nowrap; z-index: 20; line-height: 1.6;
    pointer-events: none; min-width: 180px; }
  .pe__row-status-wrap:hover .pe__err-tip { display: block; }

  /* ── Grid footer ── */
  .pe__grid-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 0.85rem; flex-wrap: wrap; gap: 0.6rem; }
  .pe__grid-footer-left { display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; }
  .pe__grid-stats { font-size: 0.72rem; color: var(--ink-3); }
  .pe__grid-stats .ok-count  { color: var(--green); font-weight: 500; }
  .pe__grid-stats .err-count { color: var(--red); }

  /* ── Alert banners ── */
  .pe__banner { margin-top: 0.85rem; padding: 0.65rem 1rem; border-radius: 7px; font-size: 0.75rem; display: flex; align-items: center; gap: 0.4rem; }
  .pe__banner--success { background: var(--green-soft); border: 1px solid #b2dfc5; color: var(--green); }
  .pe__banner--error   { background: var(--red-soft);   border: 1px solid #f5c6c2; color: var(--red);   }

  /* ── Spinner ── */
  .pe__spinner { width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.4); border-top-color: #fff; border-radius: 50%; animation: spin 0.6s linear infinite; flex-shrink: 0; }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Registered list ── */
  .pe__list-wrap { margin-top: 1.5rem; }
  .pe__list-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; gap: 1rem; }
  .pe__list-title  { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); }
  .pe__list { border: 1px solid var(--paper-3); border-radius: 8px; overflow: hidden; }
  .pe__list-table  { width: 100%; border-collapse: collapse; font-size: 0.78rem; }
  .pe__list-table thead tr { background: var(--paper-2); }
  .pe__list-table th { padding: 0.5rem 0.85rem; text-align: left; font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); border-bottom: 1px solid var(--paper-3); }
  .pe__list-table td { padding: 0.55rem 0.85rem; border-bottom: 1px solid var(--paper-2); }
  .pe__list-table tbody tr:last-child td { border-bottom: none; }
  .pe__list-table tbody tr:hover { background: var(--paper); }
  .pe__tag-chip { display: inline-flex; align-items: center; justify-content: center; min-width: 32px; padding: 0.1rem 0.4rem; background: var(--gold-soft); border: 1px solid #e8d07a; border-radius: 4px; font-size: 0.72rem; font-weight: 600; color: #7a5c00; }
  .pe__gender-badge { display: inline-flex; align-items: center; padding: 0.1rem 0.45rem; border-radius: 4px; font-size: 0.68rem; font-weight: 500; }
  .pe__gender-badge--male   { background: var(--blue-soft);  color: var(--blue);  border: 1px solid #b3d4ef; }
  .pe__gender-badge--female { background: #fce8f3;           color: #a3186e;      border: 1px solid #f0b3d9; }
  .pe__list-empty { padding: 2rem; text-align: center; color: var(--ink-3); font-size: 0.8rem; }

  /* ── Grouped list sections ── */
  .pe__group-section { margin-bottom: 1.5rem; }
  .pe__group-header { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 8px 8px 0 0; margin-bottom: -1px; }
  .pe__group-header--male   { background: var(--blue-soft);  border: 1px solid #b3d4ef; }
  .pe__group-header--female { background: #fce8f3;           border: 1px solid #f0b3d9; }
  .pe__group-title { font-family: var(--serif); font-size: 0.95rem; font-weight: 600; }
  .pe__group-header--male .pe__group-title   { color: var(--blue);  }
  .pe__group-header--female .pe__group-title { color: #a3186e; }
  .pe__group-table-wrap { border: 1px solid var(--paper-3); border-radius: 0 8px 8px 8px; overflow: hidden; }
  .pe__group-table { width: 100%; border-collapse: collapse; font-size: 0.78rem; }
  .pe__group-table thead tr { background: var(--paper-2); }
  .pe__group-table th { padding: 0.45rem 0.75rem; text-align: left; font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); border-bottom: 1px solid var(--paper-3); }
  .pe__group-table td { padding: 0.5rem 0.75rem; border-bottom: 1px solid var(--paper-2); }
  .pe__group-table tbody tr:last-child td { border-bottom: none; }
  .pe__group-table tbody tr:hover { background: var(--paper); }

  /* ── Buttons ── */
  .a-btn { font-family: var(--mono); font-size: 0.8rem; font-weight: 500; border-radius: 7px; border: none; cursor: pointer; padding: 0.55rem 1rem; transition: all 0.15s; display: inline-flex; align-items: center; gap: 0.4rem; }
  .a-btn:disabled { opacity: 0.45; cursor: not-allowed; }
  .a-btn-primary { background: var(--accent); color: #fff; }
  .a-btn-primary:hover:not(:disabled) { background: #a83608; transform: translateY(-1px); }
  .a-btn-ghost   { background: var(--paper-2); color: var(--ink-2); border: 1px solid var(--paper-3); }
  .a-btn-ghost:hover:not(:disabled)   { background: var(--paper-3); }
  .a-btn-green   { background: var(--green); color: #fff; }
  .a-btn-green:hover:not(:disabled)   { background: #215c3c; transform: translateY(-1px); }
  .a-btn-danger  { background: var(--red-soft); color: var(--red); border: none; font-size: 0.72rem; padding: 0.3rem 0.5rem; }
  .a-btn-danger:hover:not(:disabled)  { background: #fbd5d1; }
  .a-btn-sm { padding: 0.35rem 0.65rem; font-size: 0.72rem; }

  /* ── Print button ── */
  .pe__print-btn { font-family: var(--mono); font-size: 0.7rem; padding: 0.25rem 0.5rem; background: #fff; border: 1px solid var(--paper-3); border-radius: 5px; cursor: pointer; color: var(--ink-2); }
  .pe__print-btn:hover { background: var(--paper-2); }
`;async function nc(e){const t=await fetch("/api/Participants/Entry",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});if(!t.ok){const r=await t.text();throw new Error(`Server ${t.status}: ${r.slice(0,120)}`)}return t.json()}function _g({dobStr:e}){if(!e)return null;const t=an(e);return t===null?a.jsx("div",{className:"pe__age-pill pe__age-pill--warn",children:"Invalid date"}):t<5||t>80?a.jsxs("div",{className:"pe__age-pill pe__age-pill--warn",children:["Age ",t," — out of range (5–80)"]}):a.jsxs("div",{className:"pe__age-pill",children:["Age: ",a.jsx("strong",{children:t})]})}const qt="participant_entry";function jg(){const[e,t]=x.useState("single"),[r,n]=x.useState(Jn),[l,s]=x.useState(""),[i,o]=x.useState(""),[c,d]=x.useState(!1),[p,f]=x.useState(Vr),[m,_]=x.useState(null),[v,k]=x.useState(!1),[y,u]=x.useState([]),[h,g]=x.useState(!1),[w,C]=x.useState(!1),P=x.useRef(null);x.useEffect(()=>{fetch("/api/Participants/List",{credentials:"include"}).then(b=>b.ok?b.json():Promise.reject(b.status)).then(b=>u(b)).catch(()=>{})},[]),x.useEffect(()=>{if(!h){const b=Ou(qt);if(b){const L=b.form&&Object.values(b.form).some(O=>O),T=b.bulkRows&&b.bulkRows.some(O=>!rc(O));L&&n(b.form),T&&f(b.bulkRows),(L||T)&&C(!0)}g(!0)}},[h]);const E=(b,L)=>{const T={...r,[b]:L};n(T),s(""),o(""),Wr(qt,{form:T,bulkRows:p})},M=async()=>{if(!r.name.trim()){s("Full name is required.");return}if(!r.dateOfBirth){s("Date of birth is required.");return}const b=an(r.dateOfBirth);if(b===null){s("Invalid date of birth.");return}if(b<5||b>80){s(`Age must be between 5 and 80 (calculated age: ${b}).`);return}if(!r.gender||!ia.includes(r.gender)){s("Gender is required.");return}d(!0),s(""),o("");try{const L=await nc([{name:r.name.trim(),dateOfBirth:r.dateOfBirth,gender:r.gender,club:r.club.trim()||"Individual"}]);u(O=>[...O,...L]);const T=L[0];o(`✓ ${T.name} (${T.gender}, age ${T.age}) registered as Tag No. ${T.tagNo}`),n(Jn),Wr(qt,{form:Jn,bulkRows:p})}catch(L){s(L.message)}finally{d(!1)}},U=(b,L,T)=>{f(O=>{const W=O.map((G,Qa)=>Qa===b?{...G,[L]:T}:G);return Wr(qt,{form:r,bulkRows:W}),W}),_(null)},I=x.useCallback(()=>f(b=>[...b,Ss()]),[]),B=b=>f(L=>L.length>1?L.filter((T,O)=>O!==b):[Ss()]),$=()=>{f(Vr()),_(null),Wr(qt,{form:r,bulkRows:Vr()})},Y=(b,L)=>{var O;const T=(O=P.current)==null?void 0:O.querySelector(`[data-row="${b}"][data-col="${L}"]`);T==null||T.focus()},re=x.useCallback((b,L,T)=>{if(b.key==="Enter"||b.key==="ArrowDown"){b.preventDefault();const O=L+1;O>=p.length?(I(),setTimeout(()=>Y(O,T),40)):Y(O,T)}else b.key==="ArrowUp"&&(b.preventDefault(),Y(Math.max(0,L-1),T))},[p.length,I]),ie=(()=>{const b=new Set;return p.map(L=>{if(rc(L))return{...L,_status:"empty",_errors:[]};const T=vg(L,b);return T.length||b.add(L.name.trim().toLowerCase()),{...L,_status:T.length?"err":"ok",_errors:T}})})(),J=ie.filter(b=>b._status==="ok").length,A=ie.filter(b=>b._status==="err").length,j=async()=>{const b=ie.filter(L=>L._status==="ok").map(L=>({name:L.name.trim(),dateOfBirth:L.dateOfBirth,gender:L.gender,club:L.club.trim()||"Individual"}));if(b.length){k(!0),_(null);try{const L=await nc(b);u(T=>[...T,...L]),_({type:"success",text:`✓ ${L.length} participant${L.length!==1?"s":""} registered successfully.`}),f(Vr()),Wr(qt,{form:r,bulkRows:Vr()})}catch(L){_({type:"error",text:L.message})}finally{k(!1)}}},z=()=>{const b={};[...y].forEach(T=>{T.age??an(T.dateOfBirth);const O=mg(T.dateOfBirth),W=`${O}_${T.gender}`;b[W]||(b[W]={groupKey:W,ageGroup:O,gender:T.gender,participants:[]}),b[W].participants.push(T)}),Object.values(b).forEach(T=>{T.participants.sort((O,W)=>O.tagNo-W.tagNo)});const L=["0-7","7-9","9-12","12-16","16-25","25+"];return Object.values(b).sort((T,O)=>{const W=L.indexOf(T.ageGroup),G=L.indexOf(O.ageGroup);return W!==G?W-G:T.gender==="Male"?-1:1})},S=y.filter(b=>b.gender==="Male").length,D=y.filter(b=>b.gender==="Female").length;return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:xg}),a.jsx("style",{children:gg}),a.jsxs("div",{className:"pe",children:[a.jsx("div",{className:"pe__header",children:a.jsxs("div",{children:[a.jsx("div",{className:"pe__label",children:"Bengal Yoga Welfare Association"}),a.jsx("h1",{className:"pe__title",children:"Participant Registration"})]})}),a.jsxs("div",{className:"pe__stats",children:[a.jsxs("div",{className:"pe__stat",children:[a.jsx("div",{className:"pe__stat-lbl",children:"Total"}),a.jsx("div",{className:"pe__stat-val pe__stat-val--accent",children:y.length})]}),a.jsxs("div",{className:"pe__stat",children:[a.jsx("div",{className:"pe__stat-lbl",children:"Male"}),a.jsx("div",{className:"pe__stat-val pe__stat-val--blue",children:S})]}),a.jsxs("div",{className:"pe__stat",children:[a.jsx("div",{className:"pe__stat-lbl",children:"Female"}),a.jsx("div",{className:"pe__stat-val pe__stat-val--green",children:D})]})]}),a.jsxs("div",{className:"a-card",children:[a.jsx("div",{className:"pe__card-header",children:a.jsxs("div",{children:[a.jsx("div",{className:"pe__card-title",children:"Register Participants"}),a.jsx("div",{className:"pe__card-sub",children:"Use Single for one entry · Bulk for 50–100 entries at once"})]})}),a.jsxs("div",{className:"pe__tabs",children:[a.jsx("button",{className:`pe__tab${e==="single"?" pe__tab--active":""}`,onClick:()=>t("single"),children:"Single Entry"}),a.jsx("button",{className:`pe__tab${e==="bulk"?" pe__tab--active":""}`,onClick:()=>t("bulk"),children:"Bulk Entry"})]}),a.jsxs("div",{className:"pe__body",children:[w&&a.jsxs("div",{className:"pe__restored-banner",children:["⚠ Your previous unsaved form data has been restored after session re-login.",a.jsx("button",{onClick:()=>C(!1),children:"Dismiss ✕"})]}),e==="single"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"pe__form-grid",children:[a.jsxs("div",{children:[a.jsxs("label",{className:"pe__form-label",children:["Full Name ",a.jsx("span",{className:"pe__required",children:"*"})]}),a.jsx("input",{className:"a-input",type:"text",placeholder:"e.g. Ananya Roy",value:r.name,onChange:b=>E("name",b.target.value)})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"pe__form-label",children:["Date of Birth ",a.jsx("span",{className:"pe__required",children:"*"})]}),a.jsx("input",{className:"a-input",type:"date",value:r.dateOfBirth,max:Yn(5),min:Yn(80),onChange:b=>E("dateOfBirth",b.target.value)}),a.jsx(_g,{dobStr:r.dateOfBirth})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"pe__form-label",children:["Gender ",a.jsx("span",{className:"pe__required",children:"*"})]}),a.jsxs("select",{className:"a-select",value:r.gender,onChange:b=>E("gender",b.target.value),children:[a.jsx("option",{value:"",children:"—"}),ia.map(b=>a.jsx("option",{value:b,children:b},b))]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"pe__form-label",children:"Club / Association"}),a.jsx("input",{className:"a-input",type:"text",placeholder:"e.g. Howrah Yoga Club",value:r.club,onChange:b=>E("club",b.target.value)})]})]}),l&&a.jsxs("div",{className:"pe__form-error",children:["⚠ ",l]}),i&&a.jsx("div",{className:"pe__form-success",children:i}),a.jsxs("div",{className:"pe__form-actions",children:[a.jsx("button",{className:"a-btn a-btn-ghost",onClick:()=>{n(Jn),s(""),o("")},children:"Clear"}),a.jsx("button",{className:"a-btn a-btn-primary",onClick:M,disabled:c,children:c?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pe__spinner"})," Registering…"]}):"+ Register"})]})]}),e==="bulk"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"pe__bulk-hint",children:[a.jsx("kbd",{children:"Enter"})," or ",a.jsx("kbd",{children:"↓"})," to move down · ",a.jsx("kbd",{children:"↑"})," to move up · New row added automatically at the bottom"]}),a.jsx("div",{className:"pe__grid-wrap",ref:P,children:a.jsxs("table",{className:"pe__grid",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"col-rownum",children:"#"}),tc.map(b=>a.jsx("th",{className:b.key==="gender"?"col-gender":b.key==="dateOfBirth"?"col-dob":"",children:b.label},b.key)),a.jsx("th",{className:"col-status",children:"St."}),a.jsx("th",{className:"col-del"})]})}),a.jsx("tbody",{children:ie.map((b,L)=>{var T;return a.jsxs("tr",{className:`row--${b._status}`,children:[a.jsx("td",{className:"col-rownum",children:L+1}),tc.map((O,W)=>a.jsx("td",{className:O.key==="dateOfBirth"?"col-dob":O.key==="gender"?"col-gender":"",children:O.type==="select"?a.jsxs("select",{"data-row":L,"data-col":W,className:`pe__grid-select${ac(b,O.key)?" pe__grid-select--err":""}`,value:b[O.key],onChange:G=>U(L,O.key,G.target.value),children:[a.jsx("option",{value:"",children:"—"}),ia.map(G=>a.jsx("option",{value:G,children:G},G))]}):a.jsx("input",{"data-row":L,"data-col":W,className:`pe__grid-cell${ac(b,O.key)?" pe__grid-cell--err":""}`,type:O.type,placeholder:O.placeholder,value:b[O.key],max:O.type==="date"?Yn(5):void 0,min:O.type==="date"?Yn(80):void 0,onChange:G=>U(L,O.key,G.target.value),onKeyDown:G=>re(G,L,W)})},O.key)),a.jsx("td",{className:"col-status",children:a.jsxs("div",{className:"pe__row-status-wrap",children:[a.jsx("span",{className:`pe__row-dot pe__row-dot--${b._status}`,children:b._status==="ok"?"✓":b._status==="err"?"!":"·"}),((T=b._errors)==null?void 0:T.length)>0&&a.jsx("div",{className:"pe__err-tip",children:b._errors.map((O,W)=>a.jsxs("div",{children:["· ",O]},W))})]})}),a.jsx("td",{className:"col-del",children:a.jsx("button",{className:"a-btn a-btn-danger a-btn-sm",onClick:()=>B(L),title:"Remove row",children:"✕"})})]},b._id)})})]})}),m&&a.jsx("div",{className:`pe__banner pe__banner--${m.type}`,children:m.text}),a.jsxs("div",{className:"pe__grid-footer",children:[a.jsxs("div",{className:"pe__grid-footer-left",children:[a.jsx("button",{className:"a-btn a-btn-ghost a-btn-sm",onClick:I,children:"+ Add Row"}),a.jsx("button",{className:"a-btn a-btn-ghost a-btn-sm",onClick:$,children:"Clear All"}),(J>0||A>0)&&a.jsxs("span",{className:"pe__grid-stats",children:[a.jsxs("span",{className:"ok-count",children:[J," valid"]}),A>0&&a.jsxs(a.Fragment,{children:[" · ",a.jsxs("span",{className:"err-count",children:[A," error",A!==1?"s":""]})]})]})]}),a.jsx("button",{className:"a-btn a-btn-green",onClick:j,disabled:J===0||v,children:v?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pe__spinner"})," Registering…"]}):`+ Register ${J>0?J:""} Participant${J!==1?"s":""}`})]})]})]})]}),a.jsxs("div",{className:"pe__list-wrap",children:[a.jsx("div",{className:"pe__list-header",children:a.jsxs("span",{className:"pe__list-title",children:["Registered Participants — ",y.length," total"]})}),a.jsx("div",{className:"a-card pe__list",children:y.length===0?a.jsx("div",{className:"pe__list-empty",children:"No participants registered yet."}):z().map(b=>{const{groupKey:L,ageGroup:T,gender:O,participants:W}=b;return a.jsxs("div",{id:`group-${L}`,className:"pe__group-section",children:[a.jsxs("div",{className:"print-header",children:[a.jsx("h2",{children:"Bengal Yoga Welfare Association"}),a.jsxs("p",{children:["Age Group: ",T," — ",O]}),a.jsxs("p",{children:["Participant List — Printed on ",new Date().toLocaleDateString("en-IN")]})]}),a.jsxs("div",{className:`pe__group-header pe__group-header--${O.toLowerCase()}`,children:[a.jsxs("span",{className:"pe__group-title",children:["Age Group: ",T," — ",O," — ",W.length," Participant",W.length!==1?"s":""]}),a.jsx("button",{className:"pe__print-btn no-print",onClick:()=>hg(L),children:"🖨 Print this group"})]}),a.jsx("div",{className:"pe__group-table-wrap",children:a.jsxs("table",{className:"pe__group-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"50px"},children:"Tag No."}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"DOB"}),a.jsx("th",{children:"Age"}),a.jsx("th",{children:"Club / Association"})]})}),a.jsx("tbody",{children:W.map((G,Qa)=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:"pe__tag-chip",children:G.tagNo})}),a.jsx("td",{style:{fontWeight:500},children:G.name}),a.jsx("td",{style:{color:"var(--ink-3)"},children:G.dateOfBirth}),a.jsx("td",{style:{color:"var(--ink-3)"},children:G.age??an(G.dateOfBirth)}),a.jsx("td",{style:{color:"var(--ink-3)"},children:G.club||"Individual"})]},G.serialNo??Qa))})]})})]},L)})})]})]})]})}function ac(e,t){var r;return e._status==="err"&&((r=e._errors)==null?void 0:r.some(n=>n.toLowerCase().includes(t==="dateOfBirth"?"date":t==="gender"?"gender":"name")))}const wl="/api",Dt=[{num:1,name:"Asana 1"},{num:2,name:"Asana 2"},{num:3,name:"Asana 3"},{num:4,name:"Asana 4"},{num:5,name:"Asana 5"}],Nl=10,yg=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink:#1a1714;
  --ink-2:#4a4540;
  --ink-3:#8a8480;
  --paper:#faf7f2;
  --paper-2:#f0ece4;
  --paper-3:#e5ddd0;
  --accent:#8b1a1a;
  --green:#1e6b3c;
  --green-soft:#e6f4ec;
  --red:#b01c1c;
  --red-soft:#fbecec;
  --blue:#1a4fa8;
  --blue-soft:#e8eefb;
  --pink:#9b2a6b;
  --pink-soft:#fce8f4;
  --gold:#c9920a;
  --gold-soft:#fdf5e0;
  --shadow:0 2px 8px rgba(26,23,20,.08), 0 8px 24px rgba(26,23,20,.06);
  --mono:'DM Mono', monospace;
  --serif:'Cormorant Garamond', Georgia, serif;
}

.ase {
  font-family:var(--mono);
  background:var(--paper);
  min-height:100vh;
  color:var(--ink);
}

.ase__bar {
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:.9rem 1.5rem;
  background:#fff;
  border-bottom:1.5px solid var(--paper-3);
  position:sticky;
  top:0;
  z-index:20;
}

.ase__bar-sub {
  font-size:.6rem;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--ink-3);
}

.ase__bar-name {
  font-family:var(--serif);
  font-size:1.1rem;
  font-weight:700;
}

.ase__bar-right {
  display:flex;
  align-items:center;
  gap:.75rem;
}

.ase__admin-chip {
  display:flex;
  align-items:center;
  gap:.45rem;
  background:var(--paper-2);
  border:1px solid var(--paper-3);
  padding:.3rem .8rem .3rem .3rem;
  border-radius:100px;
  font-size:.75rem;
}

.ase__admin-avatar {
  width:24px;
  height:24px;
  border-radius:50%;
  background:var(--accent);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:.68rem;
  font-weight:700;
}

.ase__logout {
  font-family:var(--mono);
  font-size:.72rem;
  padding:.3rem .75rem;
  border-radius:8px;
  border:1px solid var(--paper-3);
  background:transparent;
  color:var(--ink-3);
  cursor:pointer;
}

.ase__logout:hover {
  background:var(--red-soft);
  color:var(--red);
  border-color:var(--red);
}

.ase__main {
  padding:2rem 1rem 4rem;
}

.ase__panel {
  max-width:1180px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:1.25rem;
}

.ase__card {
  background:#fff;
  border:1px solid var(--paper-3);
  border-radius:12px;
  box-shadow:var(--shadow);
  overflow:hidden;
}

.ase__card-head {
  padding:1rem 1.25rem .75rem;
  border-bottom:1px solid var(--paper-3);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
}

.ase__card-title {
  font-size:.86rem;
  font-weight:700;
}

.ase__card-sub {
  font-size:.68rem;
  color:var(--ink-3);
  margin-top:.15rem;
}

.ase__card-body {
  padding:1.25rem;
}

.ase__lookup-row {
  display:grid;
  grid-template-columns:1fr 1.1fr 1.1fr auto;
  gap:.6rem;
  align-items:end;
  padding:.8rem;
  border:1px solid var(--paper-3);
  border-radius:10px;
  background:var(--paper);
}

.ase__lookup-row--ok {
  background:var(--green-soft);
  border-color:#a8d8bb;
}

.ase__field {
  display:flex;
  flex-direction:column;
  gap:.35rem;
}

.ase__label {
  font-size:.68rem;
  color:var(--ink-2);
  letter-spacing:.06em;
  text-transform:uppercase;
}

.ase__input {
  font-family:var(--mono);
  font-size:.95rem;
  font-weight:600;
  padding:.65rem .8rem;
  border:2px solid var(--paper-3);
  border-radius:9px;
  background:#fff;
  outline:none;
}

.ase__input:focus {
  border-color:var(--accent);
}

.ase__input:disabled {
  background:var(--paper-2);
  color:var(--ink-3);
}

.ase__select {
  font-family:var(--mono);
  font-size:.95rem;
  font-weight:600;
  padding:.65rem .8rem;
  border:2px solid var(--paper-3);
  border-radius:9px;
  background:#fff;
  outline:none;
  cursor:pointer;
}

.ase__select:focus {
  border-color:var(--accent);
}

.ase__gender {
  display:flex;
  height:43px;
  border:2px solid var(--paper-3);
  border-radius:9px;
  overflow:hidden;
}

.ase__gender button {
  flex:1;
  border:none;
  font-family:var(--mono);
  font-weight:700;
  font-size:.72rem;
  background:var(--paper-2);
  color:var(--ink-3);
  cursor:pointer;
}

.ase__gender button:first-child {
  border-right:1px solid var(--paper-3);
}

.ase__gender button:disabled {
  cursor:not-allowed;
  opacity:.65;
}

.ase__gender .male-on {
  background:var(--blue-soft);
  color:var(--blue);
}

.ase__gender .female-on {
  background:var(--pink-soft);
  color:var(--pink);
}

.ase__btn {
  font-family:var(--mono);
  border:none;
  border-radius:9px;
  padding:.75rem 1rem;
  font-weight:700;
  cursor:pointer;
  transition:.15s;
  white-space:nowrap;
}

.ase__btn:disabled {
  opacity:.45;
  cursor:not-allowed;
}

.ase__btn--accent {
  background:var(--accent);
  color:#fff;
}

.ase__btn--green {
  background:var(--green);
  color:#fff;
}

.ase__btn--muted {
  background:var(--paper-2);
  color:var(--ink-2);
  border:1px solid var(--paper-3);
}

.ase__btn:hover:not(:disabled) {
  transform:translateY(-1px);
}

.ase__verified-meta {
  font-size:.72rem;
  color:var(--green);
  font-weight:700;
}

.ase__error {
  margin-top:.75rem;
  padding:.7rem .9rem;
  border-radius:9px;
  background:var(--red-soft);
  color:var(--red);
  border:1px solid #f3b8b8;
  font-size:.75rem;
}

.ase__notice {
  padding:.75rem .9rem;
  border-radius:9px;
  background:var(--green-soft);
  color:var(--green);
  border:1px solid #a8d8bb;
  font-size:.75rem;
}

.ase__score-grid {
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  gap:1rem;
  margin-top:1rem;
}

.ase__asana-col {
  display:flex;
  flex-direction:column;
  gap:.5rem;
}

.ase__asana-head {
  font-size:.72rem;
  font-weight:800;
  text-transform:uppercase;
  text-align:center;
  padding:.5rem;
  background:var(--paper-2);
  border-radius:8px;
}

.ase__score-input {
  display:flex;
  flex-direction:column;
  gap:.25rem;
}

.ase__score-label {
  font-size:.58rem;
  font-weight:900;
  text-transform:uppercase;
  color:var(--ink-2);
}

.ase__score-input input {
  width:100%;
  font-family:var(--mono);
  font-size:1rem;
  font-weight:700;
  text-align:center;
  padding:.5rem;
  border:2px solid var(--paper-3);
  border-radius:8px;
  background:#fff;
  outline:none;
}

.ase__score-input input:focus {
  border-color:var(--accent);
}

.ase__total-row {
  display:flex;
  justify-content:flex-end;
  gap:.5rem;
  margin-top:1rem;
  padding-top:1rem;
  border-top:1px solid var(--paper-3);
  font-size:.75rem;
  color:var(--ink-3);
}

.ase__total-row strong {
  color:var(--green);
}

.ase__success {
  padding:2rem 1.25rem;
  text-align:center;
}

.ase__success-icon {
  width:56px;
  height:56px;
  margin:0 auto 1rem;
  border-radius:50%;
  background:var(--green-soft);
  border:2px solid var(--green);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.6rem;
  color:var(--green);
}

.ase__success-title {
  font-family:var(--serif);
  font-size:1.45rem;
  font-weight:700;
  color:var(--green);
}

.ase__success-sub {
  margin-top:.35rem;
  font-size:.78rem;
  color:var(--ink-3);
}

@media (max-width:900px) {
  .ase__score-grid {
    grid-template-columns:repeat(3, 1fr);
  }
}

@media (max-width:600px) {
  .ase__lookup-row {
    grid-template-columns:1fr;
  }

  .ase__score-grid {
    grid-template-columns:1fr 1fr;
  }
}
`;function bg(e){return Dt.reduce((t,r)=>t+(Number(e[r.num])||0),0)}function kg(){var J;const{user:e,logout:t}=Xt(),r=x.useRef(null),[n,l]=x.useState(""),[s,i]=x.useState(""),[o,c]=x.useState(""),[d,p]=x.useState([]),[f,m]=x.useState(null),[_,v]=x.useState("idle"),[k,y]=x.useState(""),[u,h]=x.useState(Dt.reduce((A,j)=>(A[j.num]="",A),{})),[g,w]=x.useState("idle"),[C,P]=x.useState(""),E=((J=e==null?void 0:e.username)==null?void 0:J.slice(0,2).toUpperCase())??"A",M=bg(u);et.useEffect(()=>{fetch(`${wl}/admin/judges`,{credentials:"include"}).then(A=>A.json()).then(p).catch(console.error)},[]);const U=A=>{l(A),v("idle"),y("")},I=A=>{i(A),v("idle"),y(""),m(null)},B=async()=>{if(!s||Number.isNaN(Number(s))){y("Enter a valid tag number."),v("error");return}if(!n){y("Select gender first."),v("error");return}if(!o){y("Select a judge first."),v("error");return}v("loading"),y("");try{const A=await fetch(`${wl}/Participants/check?tagNo=${encodeURIComponent(s)}&gender=${encodeURIComponent(n)}`,{credentials:"include"});if(!A.ok)throw new Error(`${A.status} ${A.statusText}`);const j=await A.json();if(!j.exists){v("error"),y(j.message||`Tag #${s} (${n}) is not registered.`);return}m({serialNo:j.serialNo,tagNo:j.tagNo,gender:j.gender}),v("found")}catch(A){v("error"),y(A.message)}},$=(A,j)=>{const z=Number(j);(j===""||z>=0&&z<=Nl)&&h(S=>({...S,[A]:j}))},Y=async()=>{if(!f){P("Please verify a participant first.");return}if(!o){P("Please select a judge.");return}const A=Dt.filter(j=>!u[j.num]||u[j.num]==="");if(A.length>0){P(`Enter scores for all 5 asanas. Missing: ${A.map(j=>j.name).join(", ")}`);return}P(""),w("loading");try{for(const j of Dt){const z={participantSerialNo:f.serialNo,judgeUsername:o,asanaNo:j.num,score:Number(u[j.num])},S=await fetch(`${wl}/admin/update-score`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});if(!S.ok){const D=await S.text();throw new Error(D||`${S.status} ${S.statusText}`)}}w("success")}catch(j){w("error"),P(j.message)}},re=()=>{i(""),l(""),c(""),m(null),h(Dt.reduce((A,j)=>(A[j.num]="",A),{})),v("idle"),y(""),w("idle"),P(""),setTimeout(()=>{var A;return(A=r.current)==null?void 0:A.focus()},50)},ie=async()=>{await t()};return a.jsxs("div",{className:"ase",children:[a.jsx("style",{children:yg}),a.jsxs("div",{className:"ase__bar",children:[a.jsxs("div",{children:[a.jsx("div",{className:"ase__bar-sub",children:"BYWA · Admin Portal"}),a.jsx("div",{className:"ase__bar-name",children:"Bengal Yoga Welfare Association"})]}),a.jsxs("div",{className:"ase__bar-right",children:[a.jsxs("div",{className:"ase__admin-chip",children:[a.jsx("div",{className:"ase__admin-avatar",children:E}),a.jsx("span",{children:(e==null?void 0:e.username)??"Admin"})]}),a.jsx("button",{className:"ase__logout",onClick:ie,children:"Sign out"})]})]}),a.jsx("main",{className:"ase__main",children:a.jsxs("div",{className:"ase__panel",children:[g!=="success"&&a.jsxs("div",{className:"ase__card",children:[a.jsx("div",{className:"ase__card-head",children:a.jsxs("div",{children:[a.jsx("div",{className:"ase__card-title",children:"Admin Score Entry"}),a.jsx("div",{className:"ase__card-sub",children:"Enter scores for a participant on behalf of a specific judge. Used for corrections or manual entries."})]})}),a.jsxs("div",{className:"ase__card-body",children:[a.jsxs("div",{className:`ase__lookup-row ${_==="found"?"ase__lookup-row--ok":""}`,children:[a.jsxs("div",{className:"ase__field",children:[a.jsx("label",{className:"ase__label",children:"Tag Number"}),a.jsx("input",{ref:r,className:"ase__input",type:"number",min:"1",placeholder:"e.g. 4",value:s,disabled:_==="found",onChange:A=>I(A.target.value),onKeyDown:A=>{A.key==="Enter"&&B()}})]}),a.jsxs("div",{className:"ase__field",children:[a.jsx("label",{className:"ase__label",children:"Gender"}),a.jsxs("div",{className:"ase__gender",children:[a.jsx("button",{className:n==="Male"?"male-on":"",disabled:_==="found",onClick:()=>U("Male"),children:"♂ Male"}),a.jsx("button",{className:n==="Female"?"female-on":"",disabled:_==="found",onClick:()=>U("Female"),children:"♀ Female"})]})]}),a.jsxs("div",{className:"ase__field",children:[a.jsx("label",{className:"ase__label",children:"Judge"}),a.jsxs("select",{className:"ase__select",value:o,disabled:_==="found",onChange:A=>c(A.target.value),children:[a.jsx("option",{value:"",children:"Select judge..."}),d.map(A=>a.jsx("option",{value:A,children:A},A))]})]}),a.jsxs("div",{className:"ase__field",children:[a.jsx("label",{className:"ase__label",style:{visibility:"hidden"},children:"Action"}),_==="found"?a.jsxs("div",{className:"ase__verified-meta",children:["✓ Tag #",f.tagNo," Verified"]}):a.jsx("button",{className:"ase__btn ase__btn--accent",disabled:_==="loading",onClick:B,children:_==="loading"?"Checking…":"Verify →"})]}),_==="error"&&k&&a.jsx("div",{className:"ase__error",style:{gridColumn:"1 / -1"},children:k})]}),f&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"ase__notice",style:{marginTop:"1rem"},children:["Participant: Tag #",f.tagNo," (",f.gender,") · Serial No:"," ",f.serialNo," · Judge: ",o]}),a.jsx("div",{className:"ase__score-grid",children:Dt.map(A=>a.jsxs("div",{className:"ase__asana-col",children:[a.jsx("div",{className:"ase__asana-head",children:A.name}),a.jsxs("div",{className:"ase__score-input",children:[a.jsx("label",{className:"ase__score-label",children:"Score"}),a.jsx("input",{type:"number",min:"0",max:Nl,value:u[A.num],onChange:j=>$(A.num,j.target.value),placeholder:"0-10"})]})]},A.num))}),a.jsxs("div",{className:"ase__total-row",children:["Total Score: ",a.jsx("strong",{children:M})," / ",Dt.length*Nl]}),a.jsx("button",{className:"ase__btn ase__btn--green",style:{marginTop:"1rem",width:"100%"},disabled:g==="loading"||M===0,onClick:Y,children:g==="loading"?"Submitting...":"Submit All Scores →"})]}),C&&a.jsx("div",{className:"ase__error",children:C})]})]}),g==="success"&&a.jsx("div",{className:"ase__card",children:a.jsxs("div",{className:"ase__success",children:[a.jsx("div",{className:"ase__success-icon",children:"✓"}),a.jsx("div",{className:"ase__success-title",children:"Scores Updated"}),a.jsxs("div",{className:"ase__success-sub",children:["Updated scores for Tag #",f==null?void 0:f.tagNo," (",f==null?void 0:f.gender,") by judge"," ",o,". Total score: ",a.jsx("strong",{children:M})]}),a.jsx("button",{className:"ase__btn ase__btn--accent",style:{marginTop:"1rem"},onClick:re,children:"Enter Another Score →"})]})})]})})]})}function wg(){const{user:e,logout:t}=Xt(),r=Mr(),n=(e==null?void 0:e.role)==="ROLE_ADMIN",l=(e==null?void 0:e.role)==="ROLE_JUDGE",[s,i]=x.useState(!1),[o,c]=x.useState(!1),[d,p]=x.useState(l?"judgesheet":"dashboard");if(x.useEffect(()=>{if(!e||!n&&!l){r("/login");return}l&&!["judgesheet","judging"].includes(d)&&p("judgesheet")},[e,n,l,d,r]),!e||!n&&!l)return null;const f=()=>{t(),r("/login")},m=y=>{p(y),c(!1)},k=l?{judgesheet:a.jsx(ec,{}),judging:a.jsx(qo,{})}:{dashboard:a.jsx(Gh,{onNav:p}),competitions:a.jsx(Jh,{}),judging:a.jsx(qo,{}),judgesheet:a.jsx(ec,{}),media:a.jsx(rg,{}),inbox:a.jsx(ag,{}),settings:a.jsx(lg,{}),Participant:a.jsx(jg,{}),scoreentry:a.jsx(kg,{})};return a.jsxs("div",{className:"admin-root",children:[a.jsx("div",{className:`sidebar-overlay ${o?"sidebar-overlay--visible":""}`,onClick:()=>c(!1)}),a.jsx(Ah,{active:d,onNav:m,collapsed:s,onToggle:()=>i(y=>!y),user:e,onLogout:f,judgeOnly:l,mobileOpen:o,onMobileClose:()=>c(!1)}),a.jsxs("div",{className:"admin-main",children:[a.jsx(Fh,{activePage:d,user:e,onLogout:f,onMenuClick:()=>c(!0)}),a.jsx("div",{className:"admin-content",children:k[d]})]})]})}const Sl="/api",mr=[{num:1,name:"Asana 1"},{num:2,name:"Asana 2"},{num:3,name:"Asana 3"},{num:4,name:"Asana 4"},{num:5,name:"Asana 5"}],lc=2,sc=8,Cl=10,er=5,At=10,Ng=()=>mr.reduce((e,t)=>(e[t.num]={style:"",jkp:""},e),{}),El=()=>({id:crypto.randomUUID(),tagInput:"",gender:"",state:"idle",error:"",participant:null}),Sg=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink:#1a1714;
  --ink-2:#4a4540;
  --ink-3:#8a8480;
  --paper:#faf7f2;
  --paper-2:#f0ece4;
  --paper-3:#e5ddd0;
  --accent:#8b1a1a;
  --green:#1e6b3c;
  --green-soft:#e6f4ec;
  --red:#b01c1c;
  --red-soft:#fbecec;
  --blue:#1a4fa8;
  --blue-soft:#e8eefb;
  --pink:#9b2a6b;
  --pink-soft:#fce8f4;
  --gold:#c9920a;
  --gold-soft:#fdf5e0;
  --shadow:0 2px 8px rgba(26,23,20,.08), 0 8px 24px rgba(26,23,20,.06);
  --mono:'DM Mono', monospace;
  --serif:'Cormorant Garamond', Georgia, serif;
}

.jg {
  font-family:var(--mono);
  background:var(--paper);
  min-height:100vh;
  color:var(--ink);
}

.jg__bar {
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:.9rem 1.5rem;
  background:#fff;
  border-bottom:1.5px solid var(--paper-3);
  position:sticky;
  top:0;
  z-index:20;
}

.jg__bar-sub {
  font-size:.6rem;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--ink-3);
}

.jg__bar-name {
  font-family:var(--serif);
  font-size:1.1rem;
  font-weight:700;
}

.jg__bar-right {
  display:flex;
  align-items:center;
  gap:.75rem;
}

.jg__judge-chip {
  display:flex;
  align-items:center;
  gap:.45rem;
  background:var(--paper-2);
  border:1px solid var(--paper-3);
  padding:.3rem .8rem .3rem .3rem;
  border-radius:100px;
  font-size:.75rem;
}

.jg__judge-avatar {
  width:24px;
  height:24px;
  border-radius:50%;
  background:var(--accent);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:.68rem;
  font-weight:700;
}

.jg__logout {
  font-family:var(--mono);
  font-size:.72rem;
  padding:.3rem .75rem;
  border-radius:8px;
  border:1px solid var(--paper-3);
  background:transparent;
  color:var(--ink-3);
  cursor:pointer;
}

.jg__logout:hover {
  background:var(--red-soft);
  color:var(--red);
  border-color:var(--red);
}

.jg__main {
  padding:2rem 1rem 4rem;
}

.jg__panel {
  max-width:1180px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:1.25rem;
}

.jg__card {
  background:#fff;
  border:1px solid var(--paper-3);
  border-radius:12px;
  box-shadow:var(--shadow);
  overflow:hidden;
}

.jg__card-head {
  padding:1rem 1.25rem .75rem;
  border-bottom:1px solid var(--paper-3);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
}

.jg__card-title {
  font-size:.86rem;
  font-weight:700;
}

.jg__card-sub {
  font-size:.68rem;
  color:var(--ink-3);
  margin-top:.15rem;
}

.jg__card-body {
  padding:1.25rem;
}

.jg__lookup-list {
  display:flex;
  flex-direction:column;
  gap:.75rem;
}

.jg__lookup-row {
  display:grid;
  grid-template-columns:1fr 1.1fr auto;
  gap:.6rem;
  align-items:end;
  padding:.8rem;
  border:1px solid var(--paper-3);
  border-radius:10px;
  background:var(--paper);
}

.jg__lookup-row--ok {
  background:var(--green-soft);
  border-color:#a8d8bb;
}

.jg__field {
  display:flex;
  flex-direction:column;
  gap:.35rem;
}

.jg__label {
  font-size:.68rem;
  color:var(--ink-2);
  letter-spacing:.06em;
  text-transform:uppercase;
}

.jg__input {
  font-family:var(--mono);
  font-size:.95rem;
  font-weight:600;
  padding:.65rem .8rem;
  border:2px solid var(--paper-3);
  border-radius:9px;
  background:#fff;
  outline:none;
}

.jg__input:focus {
  border-color:var(--accent);
}

.jg__input:disabled {
  background:var(--paper-2);
  color:var(--ink-3);
}

.jg__gender {
  display:flex;
  height:43px;
  border:2px solid var(--paper-3);
  border-radius:9px;
  overflow:hidden;
}

.jg__gender button {
  flex:1;
  border:none;
  font-family:var(--mono);
  font-weight:700;
  font-size:.72rem;
  background:var(--paper-2);
  color:var(--ink-3);
  cursor:pointer;
}

.jg__gender button:first-child {
  border-right:1px solid var(--paper-3);
}

.jg__gender button:disabled {
  cursor:not-allowed;
  opacity:.65;
}

.jg__gender .male-on {
  background:var(--blue-soft);
  color:var(--blue);
}

.jg__gender .female-on {
  background:var(--pink-soft);
  color:var(--pink);
}

.jg__btn {
  font-family:var(--mono);
  border:none;
  border-radius:9px;
  padding:.75rem 1rem;
  font-weight:700;
  cursor:pointer;
  transition:.15s;
  white-space:nowrap;
}

.jg__btn:disabled {
  opacity:.45;
  cursor:not-allowed;
}

.jg__btn--accent {
  background:var(--accent);
  color:#fff;
}

.jg__btn--green {
  background:var(--green);
  color:#fff;
}

.jg__btn--muted {
  background:var(--paper-2);
  color:var(--ink-2);
  border:1px solid var(--paper-3);
}

.jg__btn:hover:not(:disabled) {
  transform:translateY(-1px);
}

.jg__verified-meta {
  font-size:.72rem;
  color:var(--green);
  font-weight:700;
}

.jg__error {
  margin-top:.75rem;
  padding:.7rem .9rem;
  border-radius:9px;
  background:var(--red-soft);
  color:var(--red);
  border:1px solid #f3b8b8;
  font-size:.75rem;
}

.jg__notice {
  padding:.75rem .9rem;
  border-radius:9px;
  background:var(--green-soft);
  color:var(--green);
  border:1px solid #a8d8bb;
  font-size:.75rem;
}

.jg__start-wrap {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
  margin-top:1rem;
  padding-top:1rem;
  border-top:1px solid var(--paper-3);
}

.jg__count {
  font-size:.75rem;
  color:var(--ink-3);
}

.jg__count strong {
  color:var(--green);
}

.jg__table-wrap {
  overflow-x:auto;
}

.jg__score-table {
  width:100%;
  min-width:900px;
  border-collapse:separate;
  border-spacing:0;
  border:1px solid var(--paper-3);
  border-radius:12px;
  overflow:hidden;
}

.jg__score-table th,
.jg__score-table td {
  border-right:1px solid var(--paper-3);
  border-bottom:1px solid var(--paper-3);
  padding:.75rem;
  vertical-align:top;
}

.jg__score-table th:last-child,
.jg__score-table td:last-child {
  border-right:none;
}

.jg__score-table tr:last-child td {
  border-bottom:none;
}

.jg__score-table th {
  background:var(--paper-2);
  font-size:.72rem;
  text-align:center;
  color:var(--ink-2);
}

.jg__asana-head-cell {
  width:150px;
  min-width:150px;
  background:var(--paper-2);
  font-weight:800;
  font-size:.76rem;
  text-transform:uppercase;
}

.jg__asana-row--disabled {
  opacity:.42;
  pointer-events:none;
}

.jg__asana-row--done {
  background:var(--green-soft);
}

.jg__participant-col {
  min-width:140px;
}

.jg__tag-title {
  font-size:.8rem;
  font-weight:800;
  color:var(--ink);
}

.jg__gender-badge {
  display:inline-block;
  margin-top:.25rem;
  font-size:.58rem;
  text-transform:uppercase;
  padding:.1rem .4rem;
  border-radius:999px;
  font-weight:800;
}

.jg__gender-badge--male {
  background:var(--blue-soft);
  color:var(--blue);
}

.jg__gender-badge--female {
  background:var(--pink-soft);
  color:var(--pink);
}

.jg__cell-score {
  display:flex;
  flex-direction:column;
  gap:.55rem;
}

.jg__score-block {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:.4rem;
}

.jg__score-label {
  font-size:.58rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.06em;
}

.jg__score-label--style {
  color:var(--gold);
}

.jg__score-label--jkp {
  color:var(--blue);
}

.jg__stepper {
  display:flex;
  align-items:center;
  gap:.35rem;
}

.jg__stepper button {
  width:24px;
  height:24px;
  border-radius:6px;
  border:1px solid var(--paper-3);
  background:var(--paper-2);
  font-weight:900;
  cursor:pointer;
}

.jg__stepper button:disabled {
  opacity:.3;
  cursor:not-allowed;
}

.jg__stepper span {
  min-width:24px;
  text-align:center;
  font-weight:900;
}

.jg__cell-total {
  text-align:center;
  font-size:.7rem;
  font-weight:900;
  padding:.25rem;
  border-radius:7px;
  background:var(--paper-2);
}

.jg__row-action {
  margin-top:.65rem;
}

.jg__success {
  padding:2rem 1.25rem;
  text-align:center;
}

.jg__success-icon {
  width:56px;
  height:56px;
  margin:0 auto 1rem;
  border-radius:50%;
  background:var(--green-soft);
  border:2px solid var(--green);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.6rem;
  color:var(--green);
}

.jg__success-title {
  font-family:var(--serif);
  font-size:1.45rem;
  font-weight:700;
  color:var(--green);
}

.jg__success-sub {
  margin-top:.35rem;
  font-size:.78rem;
  color:var(--ink-3);
}

@media (max-width:700px) {
  .jg__bar {
    flex-direction:column;
    align-items:flex-start;
    gap:.75rem;
  }

  .jg__lookup-row {
    grid-template-columns:1fr;
  }

  .jg__start-wrap {
    flex-direction:column;
    align-items:stretch;
  }
}
`;function Cg({gender:e}){return a.jsx("span",{className:`jg__gender-badge jg__gender-badge--${e==null?void 0:e.toLowerCase()}`,children:e})}function Cs(e,t){const r=e==null?void 0:e[t];return!r||r.style===""||r.jkp===""?null:Number(r.style)+Number(r.jkp)}function Eg(e){return mr.reduce((t,r)=>t+(Cs(e,r.num)??0),0)}function zg(){var A;const{user:e,logout:t}=Xt(),r=Mr(),n=x.useRef(null),[l,s]=x.useState([El()]),[i,o]=x.useState([]),[c,d]=x.useState({}),[p,f]=x.useState(!1),[m,_]=x.useState(1),[v,k]=x.useState(new Set),[y,u]=x.useState(""),[h,g]=x.useState("idle"),w=((A=e==null?void 0:e.username)==null?void 0:A.slice(0,2).toUpperCase())??"J",C=i.length>=er&&i.length<=At&&!p,P=x.useMemo(()=>i.reduce((j,z)=>j+Eg(c[z.key]),0),[i,c]),E=(j,z)=>{s(S=>S.map(D=>D.id===j?{...D,...z}:D))},M=(j,z)=>{E(j,{tagInput:z,state:"idle",error:"",participant:null})},U=(j,z)=>{E(j,{gender:z,state:"idle",error:"",participant:null})},I=async j=>{const z=l.find(b=>b.id===j);if(!z)return;const S=z.tagInput.trim();if(!S||Number.isNaN(Number(S))){E(j,{state:"error",error:"Enter a valid tag number."});return}if(!z.gender){E(j,{state:"error",error:"Select gender first."});return}if(i.some(b=>String(b.tagNo)===String(S)&&b.gender===z.gender)){E(j,{state:"error",error:`Tag #${S} (${z.gender}) is already added.`});return}if(i.length>=At){E(j,{state:"error",error:`Maximum ${At} tag numbers can be added.`});return}E(j,{state:"loading",error:""});try{const b=await fetch(`${Sl}/Participants/check?tagNo=${encodeURIComponent(S)}&gender=${encodeURIComponent(z.gender)}`,{credentials:"include"});if(!b.ok)throw new Error(`${b.status} ${b.statusText}`);const L=await b.json();if(!L.exists){E(j,{state:"error",error:L.message||`Tag #${S} (${z.gender}) is not registered.`});return}try{const O=await fetch(`${Sl}/judge/check-score?participantSerialNo=${L.serialNo}`,{credentials:"include"});if(O.ok&&await O.json()){E(j,{state:"error",error:`Tag #${L.tagNo} (${L.gender}) has already been scored by this judge.`});return}}catch(O){console.warn("Score check failed:",O)}const T={key:String(L.serialNo),serialNo:L.serialNo,tagNo:L.tagNo,gender:L.gender};E(j,{state:"found",error:"",participant:T}),o(O=>{const W=[...O,T];return d(G=>({...G,[T.key]:Ng()})),W.length<At&&s(G=>[...G,El()]),W})}catch(b){E(j,{state:"error",error:b.message})}},B=()=>{if(i.length<er){u(`Add at least ${er} verified tag numbers.`);return}u(""),f(!0),_(1),k(new Set)},$=(j,z,S,D)=>{d(b=>({...b,[j]:{...b[j],[z]:{...b[j][z],[S]:D}}}))},Y=j=>i.every(z=>{var D;const S=(D=c[z.key])==null?void 0:D[j];return(S==null?void 0:S.style)!==""&&(S==null?void 0:S.jkp)!==""}),re=async j=>{if(!Y(j)){u(`Complete scores for all tags in Asana ${j}.`);return}const z={asanaNo:j,scores:i.map(S=>({participantSerialNo:S.serialNo,score:Cs(c[S.key],j)}))};u(""),g("loading");try{const S=await fetch(`${Sl}/judge/asana-score`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});if(!S.ok){const D=await S.text();throw new Error(D||`${S.status} ${S.statusText}`)}k(D=>{const b=new Set(D);return b.add(j),b}),j<mr.length?(_(j+1),g("idle")):g("success")}catch(S){g("error"),u(S.message)}},ie=()=>{s([El()]),o([]),d({}),f(!1),_(1),k(new Set),u(""),g("idle"),setTimeout(()=>{var j;return(j=n.current)==null?void 0:j.focus()},50)},J=async()=>{await t(),r("/login")};return a.jsxs("div",{className:"jg",children:[a.jsx("style",{children:Sg}),a.jsxs("div",{className:"jg__bar",children:[a.jsxs("div",{children:[a.jsx("div",{className:"jg__bar-sub",children:"BYWA · Judge Portal"}),a.jsx("div",{className:"jg__bar-name",children:"Bengal Yoga Welfare Association"})]}),a.jsxs("div",{className:"jg__bar-right",children:[a.jsxs("div",{className:"jg__judge-chip",children:[a.jsx("div",{className:"jg__judge-avatar",children:w}),a.jsx("span",{children:(e==null?void 0:e.username)??"Judge"})]}),a.jsx("button",{className:"jg__logout",onClick:J,children:"Sign out"})]})]}),a.jsx("main",{className:"jg__main",children:a.jsxs("div",{className:"jg__panel",children:[h!=="success"&&a.jsxs("div",{className:"jg__card",children:[a.jsx("div",{className:"jg__card-head",children:a.jsxs("div",{children:[a.jsx("div",{className:"jg__card-title",children:"Participant Verification"}),a.jsxs("div",{className:"jg__card-sub",children:["Add minimum ",er," and maximum ",At," verified tag numbers. After each successful verification, a new row appears automatically."]})]})}),a.jsxs("div",{className:"jg__card-body",children:[a.jsx("div",{className:"jg__lookup-list",children:l.map((j,z)=>{const S=j.state==="found",D=p||S;return a.jsxs("div",{className:`jg__lookup-row ${S?"jg__lookup-row--ok":""}`,children:[a.jsxs("div",{className:"jg__field",children:[a.jsx("label",{className:"jg__label",children:"Tag Number"}),a.jsx("input",{ref:z===0?n:null,className:"jg__input",type:"number",min:"1",placeholder:"e.g. 4",value:j.tagInput,disabled:D,onChange:b=>M(j.id,b.target.value),onKeyDown:b=>{b.key==="Enter"&&I(j.id)}})]}),a.jsxs("div",{className:"jg__field",children:[a.jsx("label",{className:"jg__label",children:"Gender"}),a.jsxs("div",{className:"jg__gender",children:[a.jsx("button",{className:j.gender==="Male"?"male-on":"",disabled:D,onClick:()=>U(j.id,"Male"),children:"♂ Male"}),a.jsx("button",{className:j.gender==="Female"?"female-on":"",disabled:D,onClick:()=>U(j.id,"Female"),children:"♀ Female"})]})]}),a.jsxs("div",{className:"jg__field",children:[a.jsx("label",{className:"jg__label",style:{visibility:"hidden"},children:"Action"}),S?a.jsxs("div",{className:"jg__verified-meta",children:["✓ Tag #",j.participant.tagNo," Verified"]}):a.jsx("button",{className:"jg__btn jg__btn--accent",disabled:p||j.state==="loading"||i.length>=At,onClick:()=>I(j.id),children:j.state==="loading"?"Checking…":"Verify →"})]}),j.state==="error"&&j.error&&a.jsx("div",{className:"jg__error",style:{gridColumn:"1 / -1"},children:j.error})]},j.id)})}),a.jsxs("div",{className:"jg__start-wrap",children:[a.jsxs("div",{className:"jg__count",children:["Verified Tags: ",a.jsx("strong",{children:i.length})," /"," ",At,a.jsx("br",{}),i.length<er?`${er-i.length} more required to start judging.`:"Minimum requirement completed."]}),!p&&a.jsx("button",{className:"jg__btn jg__btn--green",disabled:!C,onClick:B,children:"Start Judging →"}),p&&a.jsxs("div",{className:"jg__notice",children:["Judging started. Complete Asana ",m," to unlock next row."]})]}),y&&a.jsx("div",{className:"jg__error",children:y})]})]}),p&&h!=="success"&&a.jsxs("div",{className:"jg__card",children:[a.jsx("div",{className:"jg__card-head",children:a.jsxs("div",{children:[a.jsx("div",{className:"jg__card-title",children:"Score Sheet"}),a.jsx("div",{className:"jg__card-sub",children:"Tags are arranged column-wise. Asanas are arranged row-wise. Only one asana row is enabled at a time."})]})}),a.jsxs("div",{className:"jg__card-body",children:[a.jsx("div",{className:"jg__table-wrap",children:a.jsxs("table",{className:"jg__score-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Asana"}),i.map(j=>a.jsxs("th",{className:"jg__participant-col",children:[a.jsxs("div",{className:"jg__tag-title",children:["Tag #",j.tagNo]}),a.jsx(Cg,{gender:j.gender})]},j.key)),a.jsx("th",{children:"Submit Row"})]})}),a.jsx("tbody",{children:mr.map(j=>{const z=v.has(j.num),S=m===j.num&&!z&&h!=="loading";return a.jsxs("tr",{className:z?"jg__asana-row--done":S?"":"jg__asana-row--disabled",children:[a.jsxs("td",{className:"jg__asana-head-cell",children:[j.name,a.jsx("br",{}),a.jsxs("span",{style:{fontSize:".62rem",color:"var(--ink-3)"},children:["Style ",lc," + JKP ",sc]})]}),i.map(D=>{var T;const b=(T=c[D.key])==null?void 0:T[j.num],L=Cs(c[D.key],j.num);return a.jsx("td",{children:a.jsxs("div",{className:"jg__cell-score",children:[a.jsxs("div",{className:"jg__score-block",children:[a.jsx("span",{className:"jg__score-label jg__score-label--style",children:"Style"}),a.jsxs("div",{className:"jg__stepper",children:[a.jsx("button",{disabled:!S||Number(b.style||0)<=0,onClick:()=>$(D.key,j.num,"style",Number(b.style||0)-1),children:"−"}),a.jsx("span",{children:b.style===""?"–":b.style}),a.jsx("button",{disabled:!S||Number(b.style||0)>=lc,onClick:()=>$(D.key,j.num,"style",Number(b.style||0)+1),children:"+"})]})]}),a.jsxs("div",{className:"jg__score-block",children:[a.jsx("span",{className:"jg__score-label jg__score-label--jkp",children:"J.K.P."}),a.jsxs("div",{className:"jg__stepper",children:[a.jsx("button",{disabled:!S||Number(b.jkp||0)<=0,onClick:()=>$(D.key,j.num,"jkp",Number(b.jkp||0)-1),children:"−"}),a.jsx("span",{children:b.jkp===""?"–":b.jkp}),a.jsx("button",{disabled:!S||Number(b.jkp||0)>=sc,onClick:()=>$(D.key,j.num,"jkp",Number(b.jkp||0)+1),children:"+"})]})]}),a.jsxs("div",{className:"jg__cell-total",children:[L===null?"–":L," / ",Cl]})]})},`${D.key}-${j.num}`)}),a.jsx("td",{children:z?a.jsx("div",{className:"jg__notice",children:"✓ Submitted"}):a.jsx("button",{className:"jg__btn jg__btn--green jg__row-action",disabled:!S||!Y(j.num),onClick:()=>re(j.num),children:h==="loading"?"Submitting...":j.num===5?"Submit Asana 5 Final":`Submit ${j.name}`})})]},j.num)})})]})}),a.jsxs("div",{className:"jg__notice",style:{marginTop:"1rem"},children:["Current Enabled Row: Asana ",m," · Total Tags:"," ",i.length," · Full Max:"," ",i.length*mr.length*Cl]})]})]}),h==="success"&&a.jsx("div",{className:"jg__card",children:a.jsxs("div",{className:"jg__success",children:[a.jsx("div",{className:"jg__success-icon",children:"✓"}),a.jsx("div",{className:"jg__success-title",children:"All Scores Submitted"}),a.jsxs("div",{className:"jg__success-sub",children:["Scores submitted for ",i.length," verified participants. Total score entered: ",a.jsx("strong",{children:P})," /"," ",i.length*mr.length*Cl]}),a.jsx("button",{className:"jg__btn jg__btn--accent",style:{marginTop:"1rem"},onClick:ie,children:"Start New Batch →"})]})})]})})]})}function Pg(){const{user:e,login:t}=Xt(),r=Mr(),[n,l]=x.useState(null),[s,i]=x.useState(""),[o,c]=x.useState(""),[d,p]=x.useState(!1),[f,m]=x.useState(""),[_,v]=x.useState(!1);x.useEffect(()=>{e!=null&&e.role&&(e.role.includes("ADMIN")?r("/admin",{replace:!0}):e.role.includes("JUDGE")?r("/judge",{replace:!0}):r("/",{replace:!0}))},[e,r]);const k=u=>{l(u),i(""),c(""),m("")},y=async u=>{var h,g,w,C;if(u.preventDefault(),m(""),!s.trim()||!o.trim()){m("Please enter username and password");return}if(!n){m("Please select a role");return}v(!0);try{const P=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({username:s.trim(),password:o})});if(!P.ok){m(await P.text()||"Invalid username or password"),v(!1);return}const E=await P.json();if(n==="admin"&&!((h=E.role)!=null&&h.includes("ADMIN"))){m("This account is not an administrator"),v(!1);return}if(n==="judge"&&!((g=E.role)!=null&&g.includes("JUDGE"))){m("This account is not a judge"),v(!1);return}t(E),(w=E.role)!=null&&w.includes("ADMIN")?r("/admin",{replace:!0}):(C=E.role)!=null&&C.includes("JUDGE")?r("/judge",{replace:!0}):r("/",{replace:!0})}catch{m("Unable to connect to server. Please try again.")}finally{v(!1)}};return a.jsxs("div",{className:"login",children:[a.jsxs("div",{className:"login__bg",children:[a.jsx("div",{className:"login__bg-circle login__bg-circle--1"}),a.jsx("div",{className:"login__bg-circle login__bg-circle--2"}),a.jsx("div",{className:"login__bg-circle login__bg-circle--3"})]}),a.jsxs("div",{className:"login__card",children:[a.jsxs("div",{className:"login__header",children:[a.jsxs(Ci,{to:"/",className:"login__back",children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:a.jsx("path",{d:"M9 2L4 7l5 5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})}),"Back to site"]}),a.jsxs("div",{className:"login__brand",children:[a.jsx("div",{className:"login__brand-logo",children:a.jsxs("svg",{width:"36",height:"44",viewBox:"0 0 36 44",fill:"none",children:[a.jsx("circle",{cx:"18",cy:"8",r:"6",fill:"none",stroke:"#C4956A",strokeWidth:"1.8"}),a.jsx("line",{x1:"18",y1:"14",x2:"18",y2:"30",stroke:"#C4956A",strokeWidth:"1.8"}),a.jsx("line",{x1:"18",y1:"20",x2:"8",y2:"26",stroke:"#C4956A",strokeWidth:"1.8"}),a.jsx("line",{x1:"18",y1:"20",x2:"28",y2:"16",stroke:"#C4956A",strokeWidth:"1.8"}),a.jsx("line",{x1:"18",y1:"30",x2:"10",y2:"42",stroke:"#C4956A",strokeWidth:"1.8"}),a.jsx("line",{x1:"18",y1:"30",x2:"26",y2:"42",stroke:"#C4956A",strokeWidth:"1.8"})]})}),a.jsxs("div",{children:[a.jsxs("div",{className:"login__brand-name",children:["Bengal ",a.jsx("span",{children:"Yoga"})," Welfare Association"]}),a.jsx("div",{className:"login__brand-sub",children:"Admin Portal · Bally Ghat"})]})]})]}),a.jsx("div",{className:`login__body ${n?"login__body--role-selected":""}`,children:n?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"login__role-selected-bar",children:[a.jsxs("div",{className:"login__role-selected-label",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M2 6l3.5 3.5L10 3",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})}),n==="admin"?"Administrator":"Judge"]}),a.jsx("button",{className:"login__change-role",onClick:()=>k(null),children:"Change role"})]}),a.jsx("div",{className:"login__step-title",children:n==="admin"?"Admin Login":"Judge Login"}),a.jsx("p",{className:"login__step-sub",children:n==="admin"?"Enter your admin credentials to access the full dashboard.":"Enter your assigned judge credentials to access the scoring panel."}),a.jsxs("form",{className:"login__form",onSubmit:y,children:[a.jsxs("div",{className:"login__field",children:[a.jsx("label",{className:"login__label",children:"Username"}),a.jsxs("div",{className:"login__input-wrap",children:[a.jsx("span",{className:"login__input-icon",children:a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:[a.jsx("circle",{cx:"7.5",cy:"5",r:"3",stroke:"currentColor",strokeWidth:"1.3"}),a.jsx("path",{d:"M2 14c0-3.314 2.686-5 5.5-5s5.5 1.686 5.5 5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]})}),a.jsx("input",{className:"login__input",type:"text",placeholder:n==="admin"?"admin":"judge1 … judge5",value:s,onChange:u=>{i(u.target.value),m("")},autoFocus:!0,autoComplete:"username"})]})]}),a.jsxs("div",{className:"login__field",children:[a.jsx("label",{className:"login__label",children:"Password"}),a.jsxs("div",{className:"login__input-wrap",children:[a.jsx("span",{className:"login__input-icon",children:a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:[a.jsx("rect",{x:"3",y:"6",width:"9",height:"7",rx:"1.5",stroke:"currentColor",strokeWidth:"1.3"}),a.jsx("path",{d:"M5 6V4.5a2.5 2.5 0 015 0V6",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"}),a.jsx("circle",{cx:"7.5",cy:"9.5",r:"1",fill:"currentColor"})]})}),a.jsx("input",{className:"login__input",type:d?"text":"password",placeholder:"Enter password",value:o,onChange:u=>{c(u.target.value),m("")},autoComplete:"current-password"}),a.jsx("button",{type:"button",className:"login__pwd-toggle",onClick:()=>p(u=>!u),tabIndex:-1,children:d?a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:[a.jsx("path",{d:"M1 8C2.5 5 4.8 3.5 7.5 3.5S12.5 5 14 8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"}),a.jsx("circle",{cx:"7.5",cy:"8",r:"2",stroke:"currentColor",strokeWidth:"1.3"}),a.jsx("path",{d:"M2 2l11 11",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]}):a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:[a.jsx("path",{d:"M1 7.5C2.5 4.5 4.8 3 7.5 3S12.5 4.5 14 7.5C12.5 10.5 10.2 12 7.5 12S2.5 10.5 1 7.5z",stroke:"currentColor",strokeWidth:"1.3"}),a.jsx("circle",{cx:"7.5",cy:"7.5",r:"2",stroke:"currentColor",strokeWidth:"1.3"})]})})]})]}),f&&a.jsxs("div",{className:"login__error",children:[a.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[a.jsx("circle",{cx:"6.5",cy:"6.5",r:"5.5",stroke:"currentColor",strokeWidth:"1.2"}),a.jsx("path",{d:"M6.5 4v3M6.5 9v.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]}),f]}),a.jsx("button",{type:"submit",className:`login__submit ${_?"login__submit--loading":""}`,disabled:_,children:_?a.jsx("span",{className:"login__spinner"}):a.jsxs(a.Fragment,{children:["Sign In",a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:a.jsx("path",{d:"M3 7h8M8 4l3 3-3 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),a.jsx("div",{className:"login__hint",children:n==="admin"?"Admin: admin / bywa@admin2026":"Judges: judge1–judge5 / judge@1–judge@5"})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"login__step-title",children:"Sign in as"}),a.jsxs("div",{className:"login__roles",children:[a.jsxs("button",{className:"login__role-card",onClick:()=>k("admin"),children:[a.jsx("div",{className:"login__role-icon login__role-icon--admin",children:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[a.jsx("circle",{cx:"14",cy:"9",r:"5",stroke:"currentColor",strokeWidth:"1.8"}),a.jsx("path",{d:"M4 25c0-5.523 4.477-9 10-9s10 3.477 10 9",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),a.jsx("div",{className:"login__role-name",children:"Administrator"}),a.jsx("div",{className:"login__role-desc",children:"Full dashboard access"})]}),a.jsxs("button",{className:"login__role-card",onClick:()=>k("judge"),children:[a.jsx("div",{className:"login__role-icon login__role-icon--judge",children:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[a.jsx("rect",{x:"4",y:"4",width:"20",height:"20",rx:"3",stroke:"currentColor",strokeWidth:"1.8"}),a.jsx("path",{d:"M9 14l3.5 3.5L19 10",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),a.jsx("div",{className:"login__role-name",children:"Judge"}),a.jsx("div",{className:"login__role-desc",children:"Score entry panel"})]})]})]})}),a.jsx("div",{className:"login__card-footer",children:"Bengal Yoga Welfare Association · Bally Ghat, Howrah"})]})]})}function ic({children:e,allowedRoles:t}){const{user:r,isLoggedIn:n}=Xt(),l=Mt();return n?t&&!t.includes(r.role)?a.jsx(ks,{to:"/unauthorized",replace:!0}):e:a.jsx(ks,{to:"/login",state:{from:l},replace:!0})}const Lg=`
.sem-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26, 23, 20, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.sem-modal {
  background: #fff;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(26, 23, 20, 0.2);
  text-align: center;
}

.sem-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1.25rem;
  background: #fef3f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sem-icon svg {
  color: #c0392b;
}

.sem-title {
  font-family: 'DM Mono', monospace;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1714;
  margin-bottom: 0.5rem;
}

.sem-message {
  font-family: 'DM Mono', monospace;
  font-size: 0.85rem;
  color: #4a4540;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.sem-restore {
  background: #e8f5ee;
  border: 1px solid #b2dfc5;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
  color: #2d7a4f;
}

.sem-btn {
  font-family: 'DM Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.15s;
  width: 100%;
}

.sem-btn-primary {
  background: #c8440a;
  color: #fff;
}

.sem-btn-primary:hover {
  background: #a83608;
  transform: translateY(-1px);
}
`;function Rg({show:e,savedFormKey:t,onClose:r}){const n=Mr(),[l,s]=x.useState(null);x.useEffect(()=>{if(e&&t){const c=Ou(t);c&&s(c)}},[e,t]);const i=x.useCallback(()=>{n("/login",{state:{from:window.location.pathname}})},[n]);x.useEffect(()=>{const c=d=>{d.key==="Escape"&&(d.preventDefault(),d.stopPropagation())};return window.addEventListener("keydown",c,!0),()=>window.removeEventListener("keydown",c,!0)},[]);const o=x.useCallback(c=>{c.preventDefault(),c.stopPropagation()},[]);return e?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Lg}),a.jsx("div",{className:"sem-overlay",onClick:o,children:a.jsxs("div",{className:"sem-modal",onClick:c=>c.stopPropagation(),children:[a.jsx("div",{className:"sem-icon",children:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[a.jsx("circle",{cx:"14",cy:"14",r:"11",stroke:"currentColor",strokeWidth:"2"}),a.jsx("path",{d:"M14 8v6M14 17v3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}),a.jsx("div",{className:"sem-title",children:"Session Expired"}),a.jsx("div",{className:"sem-message",children:"Your login session has expired. Please log in again to continue."}),l&&a.jsx("div",{className:"sem-restore",children:"✓ Your previous form data has been restored."}),a.jsx("button",{className:"sem-btn sem-btn-primary",onClick:i,children:"Go to Login"})]})})]}):null}const Du="bywa_last_path";function Mg(e){try{localStorage.setItem(Du,e)}catch{}}function Tg(){try{return localStorage.getItem(Du)}catch{return null}}function Ag(){const{user:e,isLoggedIn:t,sessionExpired:r,clearSessionExpired:n}=Xt(),l=Mt();return x.useEffect(()=>{(l.pathname==="/admin"||l.pathname==="/judge")&&Mg(l.pathname)},[l.pathname]),x.useEffect(()=>{r&&e&&n()},[r,e,n]),a.jsxs(a.Fragment,{children:[a.jsxs(sh,{children:[a.jsx(tr,{path:"/",element:a.jsx(Ph,{})}),a.jsx(tr,{path:"/login",element:a.jsx(Pg,{})}),a.jsx(tr,{path:"/admin",element:a.jsx(ic,{allowedRoles:["ROLE_ADMIN"],children:a.jsx(wg,{})})}),a.jsx(tr,{path:"/judge",element:a.jsx(ic,{allowedRoles:["ROLE_ADMIN","ROLE_JUDGE"],children:a.jsx(zg,{})})}),a.jsx(tr,{path:"*",element:a.jsx(ks,{to:"/",replace:!0})})]}),a.jsx(Rg,{show:r,savedFormKey:"participant_entry",onClose:n})]})}function Og(){const{isLoggedIn:e}=Xt(),t=Mt();return x.useEffect(()=>{e&&(t.pathname==="/"||t.pathname==="/login")&&Tg()},[]),null}function Bg(){return a.jsx(Rh,{children:a.jsxs(fh,{children:[a.jsx(Og,{}),a.jsx(Ag,{})]})})}zl.createRoot(document.getElementById("root")).render(a.jsx(et.StrictMode,{children:a.jsx(Bg,{})}));
