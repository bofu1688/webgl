var l=Object.defineProperty;var u=(a,e,t)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>(u(a,typeof e!="symbol"?e+"":e,t),t);import{D as f,b3 as h,b6 as r,a_ as d,ax as m,b7 as g,b8 as S,aY as w}from"./index.ca3d1873.js";import{l as p,a as D,L as b}from"./ILightBase.9cdcaa87.js";const R={...p},j={...D},x={...R,shadowDistance:Number},B={...j,shadowDistance:[void 0,2e3],shadowResolution:[void 0,1024]};class c extends b{constructor(){super(f);s(this,"defaultShadowResolution",1024);s(this,"shadowDistanceState",new w(void 0));this.createEffect(()=>{const t=this.lightState.get();if(!!t)return h.add(t.target),()=>{h.remove(t.target)}},[this.lightState.get]),this.createEffect(()=>{var o,n,i;const t=(o=this.lightState.get())==null?void 0:o.shadow.camera;!t||(t.zoom=500/((i=(n=this.shadowDistanceState.get())!=null?n:r())!=null?i:2e3),t.updateProjectionMatrix())},[this.lightState.get,this.shadowDistanceState.get,r]),this.createEffect(()=>{const t=this.lightState.get();if(!t)return;const o=d(),n=m(()=>{const i=g(o);t.position.copy(i).add(this.outerObject3d.position),t.target.position.copy(i).sub(this.outerObject3d.position)});return()=>{n.cancel()}},[d,this.lightState.get])}getWorldPosition(){return S(g(this.outerObject3d))}get shadowDistance(){return this.shadowDistanceState.get()}set shadowDistance(t){this.shadowDistanceState.set(t)}}s(c,"componentName","directionalLight"),s(c,"defaults",B),s(c,"schema",x);export{c as default};
