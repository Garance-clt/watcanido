import{L as b,M as E,N as V,O as R,P,Q as W,R as Y,S as H,T as S,V as $,W as j,X as q,Y as m,c as w,s as A,a as B,f as y,Z as C,_ as Q,$ as X,a0 as Z,a1 as z,a2 as F,a3 as G,e as J,y as K,j as U,h as L,A as x}from"./CJdSn8ZE.js";import{b as rr}from"./CMRrl75l.js";const tr=["touchstart","touchmove"];function er(r){return tr.includes(r)}function ar(r){var t=V,a=R;b(null),E(null);try{return r()}finally{b(t),E(a)}}const sr=new Set,D=new Set;function ir(r,t,a,o={}){function i(e){if(o.capture||p.call(t,e),!e.cancelBubble)return ar(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?W(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function fr(r,t,a,o,i){var e={capture:o,passive:i},u=ir(r,t,a,e);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(r,u,e)})}function p(r){var O;var t=this,a=t.ownerDocument,o=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],e=i[0]||r.target,u=0,_=r.__root;if(_){var l=i.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(e=i[u]||r.target,e!==t){Y(r,"currentTarget",{configurable:!0,get(){return e||a}});var T=V,f=R;b(null),E(null);try{for(var s,n=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var d=e["__"+o];if(d!==void 0&&(!e.disabled||r.target===e))if(H(d)){var[I,...M]=d;I.apply(e,[r,...M])}else d.call(e,r)}catch(g){s?n.push(g):s=g}if(r.cancelBubble||c===t||c===null)break;e=c}if(s){for(let g of n)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=t,delete r.currentTarget,b(T),E(f)}}}function cr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a+"")}function nr(r,t){return k(r,t)}function lr(r,t){S(),t.intro=t.intro??!1;const a=t.target,o=L,i=y;try{for(var e=$(a);e&&(e.nodeType!==8||e.data!==j);)e=q(e);if(!e)throw m;w(!0),A(e),B();const u=k(r,{...t,anchor:e});if(y===null||y.nodeType!==8||y.data!==C)throw Q(),m;return w(!1),u}catch(u){if(u===m)return t.recover===!1&&X(),S(),Z(a),w(!1),nr(r,t);throw u}finally{w(o),A(i)}}const v=new Map;function k(r,{target:t,anchor:a,props:o={},events:i,context:e,intro:u=!0}){S();var _=new Set,l=f=>{for(var s=0;s<f.length;s++){var n=f[s];if(!_.has(n)){_.add(n);var c=er(n);t.addEventListener(n,p,{passive:c});var d=v.get(n);d===void 0?(document.addEventListener(n,p,{passive:c}),v.set(n,1)):v.set(n,d+1)}}};l(z(sr)),D.add(l);var h=void 0,T=F(()=>{var f=a??t.appendChild(G());return J(()=>{if(e){K({});var s=U;s.c=e}i&&(o.$$events=i),L&&rr(f,null),h=r(f,o)||{},L&&(R.nodes_end=y),e&&x()}),()=>{var c;for(var s of _){t.removeEventListener(s,p);var n=v.get(s);--n===0?(document.removeEventListener(s,p),v.delete(s)):v.set(s,n)}D.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(h,T),h}let N=new WeakMap;function dr(r,t){const a=N.get(r);return a?(N.delete(r),a(t)):Promise.resolve()}export{fr as e,lr as h,nr as m,cr as s,dr as u};
