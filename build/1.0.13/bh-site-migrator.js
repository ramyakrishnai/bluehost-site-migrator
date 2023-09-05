!function(){"use strict";var e={n:function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,{a:a}),a},d:function(t,a){for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);var a,n=window.wp.element,r=window.wp.domReady,o=e.n(r),l=window.React;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const i="popstate";function c(e,t){if(!1===e||null==e)throw new Error(t)}function u(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function m(e,t,a,n){return void 0===a&&(a=null),s({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:a,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:a="",hash:n=""}=e;return a&&"?"!==a&&(t+="?"===a.charAt(0)?a:"?"+a),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function p(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var f;function g(e,t,a){void 0===a&&(a="/");let n=R(("string"==typeof t?p(t):t).pathname||"/",a);if(null==n)return null;let r=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,a)=>e===t[a]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(r);let o=null;for(let e=0;null==o&&e<r.length;++e)o=T(r[e],P(n));return o}function v(e,t,a,n){void 0===t&&(t=[]),void 0===a&&(a=[]),void 0===n&&(n="");let r=(e,r,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};l.relativePath.startsWith("/")&&(c(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(n.length));let s=O([n,l.relativePath]),i=a.concat(l);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,i,s)),(null!=e.path||e.index)&&t.push({path:s,score:S(s,e.index),routesMeta:i})};return e.forEach(((e,t)=>{var a;if(""!==e.path&&null!=(a=e.path)&&a.includes("?"))for(let a of y(e.path))r(e,t,a);else r(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[a,...n]=t,r=a.endsWith("?"),o=a.replace(/\?$/,"");if(0===n.length)return r?[o,""]:[o];let l=y(n.join("/")),s=[];return s.push(...l.map((e=>""===e?o:[o,e].join("/")))),r&&s.push(...l),s.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(f||(f={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const w=/^:\w+$/,b=3,E=2,x=1,k=10,C=-2,N=e=>"*"===e;function S(e,t){let a=e.split("/"),n=a.length;return a.some(N)&&(n+=C),t&&(n+=E),a.filter((e=>!N(e))).reduce(((e,t)=>e+(w.test(t)?b:""===t?x:k)),n)}function T(e,t){let{routesMeta:a}=e,n={},r="/",o=[];for(let e=0;e<a.length;++e){let l=a[e],s=e===a.length-1,i="/"===r?t:t.slice(r.length)||"/",c=U({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},i);if(!c)return null;Object.assign(n,c.params);let u=l.route;o.push({params:n,pathname:O([r,c.pathname]),pathnameBase:L(O([r,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(r=O([r,c.pathnameBase]))}return o}function U(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[a,n]=function(e,t,a){void 0===t&&(t=!1),void 0===a&&(a=!0),u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(n.push(t),"/([^\\/]+)")));return e.endsWith("*")?(n.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),r=t.match(a);if(!r)return null;let o=r[0],l=o.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:n.reduce(((e,t,a)=>{if("*"===t){let e=s[a]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(a){return u(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+a+")."),e}}(s[a]||"",t),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function P(e){try{return decodeURI(e)}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,n=e.charAt(a);return n&&"/"!==n?null:e.slice(a)||"/"}function j(e,t,a,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+a+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}const O=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;const B=["post","put","patch","delete"],D=(new Set(B),["get",...B]);function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},W.apply(this,arguments)}new Set(D),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred");const $=l.createContext(null),_=l.createContext(null),A=l.createContext(null),I=l.createContext(null),q=l.createContext({outlet:null,matches:[],isDataRoute:!1}),G=l.createContext(null);function H(){return null!=l.useContext(I)}function J(){return H()||c(!1),l.useContext(I).location}function V(e){l.useContext(A).static||l.useLayoutEffect(e)}function z(){let{isDataRoute:e}=l.useContext(q);return e?function(){let{router:e}=function(e){let t=l.useContext($);return t||c(!1),t}(ee.UseNavigateStable),t=ae(te.UseNavigateStable),a=l.useRef(!1);return V((()=>{a.current=!0})),l.useCallback((function(n,r){void 0===r&&(r={}),a.current&&("number"==typeof n?e.navigate(n):e.navigate(n,W({fromRouteId:t},r)))}),[e,t])}():function(){H()||c(!1);let e=l.useContext($),{basename:t,navigator:a}=l.useContext(A),{matches:n}=l.useContext(q),{pathname:r}=J(),o=JSON.stringify(function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(n).map((e=>e.pathnameBase))),i=l.useRef(!1);return V((()=>{i.current=!0})),l.useCallback((function(n,l){if(void 0===l&&(l={}),!i.current)return;if("number"==typeof n)return void a.go(n);let u=function(e,t,a,n){let r;void 0===n&&(n=!1),"string"==typeof e?r=p(e):(r=s({},e),c(!r.pathname||!r.pathname.includes("?"),j("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),j("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),j("#","search","hash",r)));let o,l=""===e||""===r.pathname,i=l?"/":r.pathname;if(n||null==i)o=a;else{let e=t.length-1;if(i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:a,search:n="",hash:r=""}="string"==typeof e?p(e):e,o=a?a.startsWith("/")?a:function(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?a.length>1&&a.pop():"."!==e&&a.push(e)})),a.length>1?a.join("/"):"/"}(a,t):t;return{pathname:o,search:F(n),hash:M(r)}}(r,o),d=i&&"/"!==i&&i.endsWith("/"),m=(l||"."===i)&&a.endsWith("/");return u.pathname.endsWith("/")||!d&&!m||(u.pathname+="/"),u}(n,JSON.parse(o),r,"path"===l.relative);null==e&&"/"!==t&&(u.pathname="/"===u.pathname?t:O([t,u.pathname])),(l.replace?a.replace:a.push)(u,l.state,l)}),[t,a,o,r,e])}()}function Q(e,t){return function(e,t,n){H()||c(!1);let{navigator:r}=l.useContext(A),{matches:o}=l.useContext(q),s=o[o.length-1],i=s?s.params:{},u=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let d,m=J();if(t){var h;let e="string"==typeof t?p(t):t;"/"===u||(null==(h=e.pathname)?void 0:h.startsWith(u))||c(!1),d=e}else d=m;let f=d.pathname||"/",v=g(e,{pathname:"/"===u?f:f.slice(u.length)||"/"}),y=function(e,t,a){var n;if(void 0===t&&(t=[]),void 0===a&&(a=null),null==e){var r;if(null==(r=a)||!r.errors)return null;e=a.matches}let o=e,s=null==(n=a)?void 0:n.errors;if(null!=s){let e=o.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||c(!1),o=o.slice(0,Math.min(o.length,e+1))}return o.reduceRight(((e,n,r)=>{let i=n.route.id?null==s?void 0:s[n.route.id]:null,c=null;a&&(c=n.route.errorElement||Z);let u=t.concat(o.slice(0,r+1)),d=()=>{let t;return t=i?c:n.route.Component?l.createElement(n.route.Component,null):n.route.element?n.route.element:e,l.createElement(X,{match:n,routeContext:{outlet:e,matches:u,isDataRoute:null!=a},children:t})};return a&&(n.route.ErrorBoundary||n.route.errorElement||0===r)?l.createElement(K,{location:a.location,revalidation:a.revalidation,component:c,error:i,children:d(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):d()}),null)}(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:O([u,r.encodeLocation?r.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:O([u,r.encodeLocation?r.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,n);return t&&y?l.createElement(I.Provider,{value:{location:W({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:a.Pop}},y):y}(e,t)}function Y(){let e=function(){var e;let t=l.useContext(G),a=function(e){let t=l.useContext(_);return t||c(!1),t}(te.UseRouteError),n=ae(te.UseRouteError);return t||(null==(e=a.errors)?void 0:e[n])}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),a?l.createElement("pre",{style:n},a):null,null)}const Z=l.createElement(Y,null);class K extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?l.createElement(q.Provider,{value:this.props.routeContext},l.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X(e){let{routeContext:t,match:a,children:n}=e,r=l.useContext($);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),l.createElement(q.Provider,{value:t},n)}var ee=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ee||{}),te=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(te||{});function ae(e){let t=function(e){let t=l.useContext(q);return t||c(!1),t}(),a=t.matches[t.matches.length-1];return a.route.id||c(!1),a.route.id}function ne(e){let{basename:t="/",children:n=null,location:r,navigationType:o=a.Pop,navigator:s,static:i=!1}=e;H()&&c(!1);let u=t.replace(/^\/*/,"/"),d=l.useMemo((()=>({basename:u,navigator:s,static:i})),[u,s,i]);"string"==typeof r&&(r=p(r));let{pathname:m="/",search:h="",hash:f="",state:g=null,key:v="default"}=r,y=l.useMemo((()=>{let e=R(m,u);return null==e?null:{location:{pathname:e,search:h,hash:f,state:g,key:v},navigationType:o}}),[u,m,h,f,g,v,o]);return null==y?null:l.createElement(A.Provider,{value:d},l.createElement(I.Provider,{children:n,value:y}))}l.startTransition,new Promise((()=>{})),l.Component,new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const re=l.startTransition;function oe(e){let{basename:t,children:n,future:r,window:o}=e,f=l.useRef();var g;null==f.current&&(f.current=(void 0===(g={window:o,v5Compat:!0})&&(g={}),function(e,t,n,r){void 0===r&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,p=a.Pop,f=null,g=v();function v(){return(u.state||{idx:null}).idx}function y(){p=a.Pop;let e=v(),t=null==e?null:e-g;g=e,f&&f({action:p,location:b.location,delta:t})}function w(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,a="string"==typeof e?e:h(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+a),new URL(a,t)}null==g&&(g=0,u.replaceState(s({},u.state,{idx:g}),""));let b={get action(){return p},get location(){return e(o,u)},listen(e){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(i,y),f=e,()=>{o.removeEventListener(i,y),f=null}},createHref(e){return t(o,e)},createURL:w,encodeLocation(e){let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p=a.Push;let r=m(b.location,e,t);n&&n(r,e),g=v()+1;let s=d(r,g),i=b.createHref(r);try{u.pushState(s,"",i)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;o.location.assign(i)}l&&f&&f({action:p,location:b.location,delta:1})},replace:function(e,t){p=a.Replace;let r=m(b.location,e,t);n&&n(r,e),g=v();let o=d(r,g),s=b.createHref(r);u.replaceState(o,"",s),l&&f&&f({action:p,location:b.location,delta:0})},go(e){return u.go(e)}};return b}((function(e,t){let{pathname:a="/",search:n="",hash:r=""}=p(e.location.hash.substr(1));return a.startsWith("/")||a.startsWith(".")||(a="/"+a),m("",{pathname:a,search:n,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let a=e.document.querySelector("base"),n="";if(a&&a.getAttribute("href")){let t=e.location.href,a=t.indexOf("#");n=-1===a?t:t.slice(0,a)}return n+"#"+("string"==typeof t?t:h(t))}),(function(e,t){u("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),g)));let v=f.current,[y,w]=l.useState({action:v.action,location:v.location}),{v7_startTransition:b}=r||{},E=l.useCallback((e=>{b&&re?re((()=>w(e))):w(e)}),[w,b]);return l.useLayoutEffect((()=>v.listen(E)),[v,E]),l.createElement(ne,{basename:t,children:n,location:y.location,navigationType:y.action,navigator:v})}var le,se;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"}(le||(le={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(se||(se={}));const ie=()=>(0,n.createElement)("div",{className:"grid h-full place-items-center"},(0,n.createElement)("div",{className:"inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status"},(0,n.createElement)("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"},"Loading..."))),ce=({loading:e,children:t,onSubmit:a,id:r})=>e?(0,n.createElement)("button",{type:"button",id:r,className:"inline-flex items-center mt-8 px-8 py-3 text-lg font-semibold leading-6 text-white transition duration-150 ease-in-out bg-[#3575D3] shadow cursor-not-allowed",disabled:!0},(0,n.createElement)("svg",{className:"w-5 h-5 mr-3 -ml-1 text-white animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},(0,n.createElement)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.createElement)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})),t):(0,n.createElement)("button",{id:r,className:"action-button",onClick:a},t),ue=async({apiCallFunc:e,apiCallParams:t})=>{try{return await e(t)}catch(e){return{error:e,failed:!0}}};var de=window.wp.apiFetch,me=e.n(de);const he="/bluehost-site-migrator/v1/",pe=he.concat("migration-check"),fe=he.concat("migration-tasks"),ge=he.concat("migration-data"),ve=()=>({migrationCheck:{checkCompatibility:async()=>await me()({path:pe.concat("/compatible"),method:"GET"}),runMigrationChecks:async()=>{let e=await async function(){return await ue({apiCallFunc:fetch,apiCallParams:"https://hiive.cloud/workers/geolocation/"})}();return e=await e.json(),await me()({path:pe.concat("/"),method:"POST",data:e})},getCurrentStep:async()=>await me()({path:pe.concat("/step"),method:"GET"})},migrationTasks:{queueMigrationTasks:async()=>await me()({path:fe.concat("/"),method:"POST"}),getTransferStatus:async()=>await me()({path:fe.concat("/status"),method:"GET"}),sendPackagedFilesDetails:async()=>await me()({path:fe.concat("/send-files"),method:"POST"}),reportFailed:async()=>await me()({path:fe.concat("/report-errors"),method:"POST"}),cancelTransfer:async()=>await me()({path:fe.concat("/cancel"),method:"POST"})},migrationData:{getMigrationData:async()=>await me()({path:ge,method:"GET"})}}),ye=()=>{const[e,t]=(0,n.useState)(!1),a=z();return(0,n.createElement)("div",{className:"h-full bg-white"},(0,n.createElement)("div",{className:"transfer-start-div"},(0,n.createElement)("div",{className:"pt-14 pl-12"},(0,n.createElement)("h1",{className:"text-5xl font-bold"},"Look's like we're compatible!"),(0,n.createElement)("p",{className:"text-lg mt-6 w-2/5"},"We need to make a clone of your Wordpress website next, which we can then use to transfer you to your desired account. ",(0,n.createElement)("br",null),(0,n.createElement)("br",null),"Please wait to make changes to your website until the transfer process has been completed. In addition, for now, leave your DNS and domain settings the same as well. ",(0,n.createElement)("br",null),(0,n.createElement)("br",null),"Once the cloning process is completed, you will be given a transfer key that can be copied and used to complete the WordPress website transfer process."),(0,n.createElement)(ce,{loading:e,id:"begin-transfer-button",onSubmit:async()=>{t(!0);const e=await ue({apiCallFunc:ve().migrationTasks.queueMigrationTasks});e.failed&&(t(!1),a("/error",{state:{error:e.error||"Unknown error",step:"queueTasks"}})),e.queued&&setTimeout((()=>{t(!1),window.location.reload()}),3e3)}},"Start Transfer"))))},we=()=>{const[e,t]=(0,n.useState)(!1),a=z();return(0,n.createElement)("div",{className:"h-full bg-white"},(0,n.createElement)("div",{className:"compatibility-div"},(0,n.createElement)("div",{className:"pt-14 pl-12"},(0,n.createElement)("h1",{className:"text-5xl font-bold"},"Bluehost Site Migrator"),(0,n.createElement)("p",{className:"font-bold text-lg mt-6"},"Let's get this truck rolling:"),(0,n.createElement)("p",{className:"text-lg mt-6 w-2/5"},"A website compatibility check needs to be performed before the transfer process can begin to verify that your website can be transferred"),(0,n.createElement)(ce,{id:"check-compatibility-button",onSubmit:async()=>{t(!0);const e=await ue({apiCallFunc:ve().migrationCheck.runMigrationChecks});t(!1),!e.failed&&e.can_migrate?e.can_migrate&&window.location.reload():a("/incompatible",{state:{error:e.error||"Unknown error",step:"migrationCheck"}})},loading:e},"Check Compatibility"))))},be=({progress:e,message:t})=>(0,n.createElement)("div",{className:"bg-white mt-5 rounded-xl pt-2 pb-8 py-4 w-2/4"},(0,n.createElement)("p",{className:"text-center text-xl mb-3 mt-3"},t),(0,n.createElement)("div",{className:"flex justify-center"},(0,n.createElement)("div",{className:"animate-pulse rounded-xl w-4/5 bg-neutral-200 dark:bg-neutral-600"},(0,n.createElement)("div",{className:"ease-in duration-300 rounded-xl bg-[#3575D3] h-5 p-0.5 text-center text-xs font-medium leading-none text-primary-100",style:{width:`${e}%`}})))),Ee="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,xe=()=>{const e={message:"Preparing environment for packaging",progress:2,stage:"initial",packagedFailed:!1,packagedSuccess:!1},[t,a]=(0,n.useState)(e),[r,o]=(0,n.useState)(!1),l=z();!function(e,t){const a=(0,n.useRef)(e);Ee((()=>{a.current=e}),[e]),(0,n.useEffect)((()=>{if(!t&&0!==t)return;const e=setInterval((()=>a.current()),t);return()=>clearInterval(e)}),[t])}((()=>{(async()=>{const t=await ue({apiCallFunc:ve().migrationTasks.getTransferStatus});t.status&&0!==t.status?.length?a({message:t?.status?.message,progress:t?.status?.progress,stage:t?.status?.stage,packagedFailed:t?.packaged_failed,packagedSuccess:t?.packaged_success}):a(e)})()}),t.packagedFailed||t.packagedSuccess?null:5e3);const s=async(e=!1)=>{if(e)return await ue({apiCallFunc:ve().migrationTasks.reportFailed}),void l("/error");const t=await ue({apiCallFunc:ve().migrationTasks.sendPackagedFilesDetails});!t.failed&&t.success?window.location.reload():l("/error")};return(0,n.useEffect)((()=>{t.packagedFailed&&s(!0),t.packagedSuccess&&s()}),[t]),(0,n.createElement)("div",{className:"transfer-status-div"},(0,n.createElement)("h1",{className:"text-5xl text-center font-bold pt-14",id:"transfer-status-heading"},"Cloning your website"),(0,n.createElement)("div",{className:"flex justify-center mt-4"},(0,n.createElement)("p",{className:"text-center text-lg mt-6 w-2/5"},"Please wait for the cloning process to complete, once completed, we will issue you your transfer key")),(0,n.createElement)("div",{className:"flex justify-center mt-4 px-10"},(0,n.createElement)(be,{progress:t.progress,message:t.message})),(0,n.createElement)("div",{className:"flex justify-center mt-1"},(0,n.createElement)(ce,{id:"cancel-transfer-button",onSubmit:async()=>{o(!0),await ue({apiCallFunc:ve().migrationTasks.cancelTransfer}),setTimeout((()=>{o(!1),window.location.reload()}),3e3)},loading:r},"Cancel Transfer")))},ke=({message:e,visible:t,setVisible:a})=>t?(0,n.createElement)("div",{id:"toast-success",className:"mt-[20%] flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert"},(0,n.createElement)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},(0,n.createElement)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},(0,n.createElement)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})),(0,n.createElement)("span",{className:"sr-only"},"Check icon")),(0,n.createElement)("div",{className:"ml-3 text-sm font-normal"},e),(0,n.createElement)("button",{type:"button",className:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700","data-dismiss-target":"#toast-success","aria-label":"Close",onClick:()=>{a(!1)}},(0,n.createElement)("span",{className:"sr-only"},"Close"),(0,n.createElement)("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},(0,n.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})))):(0,n.createElement)(n.Fragment,null),Ce=()=>{const e={signupUrl:"https://www.bluehost.com/hosting/shared#pricing-cards",loginUrl:"https://my.bluehost.com/web-hosting/cplogin"},[t,a]=(0,n.useState)("1KTY-60G5-6767-BH5H"),[r,o]=(0,n.useState)("US"),[l,s]=(0,n.useState)(!0),[i,c]=(0,n.useState)(!1),[u,d]=(0,n.useState)(!1),[m,h]=(0,n.useState)(e),[p,f]=(0,n.useState)({US:{countryName:"United States of America",...e}}),g=z(),v=e=>p.hasOwnProperty(e)?r:p.hasOwnProperty("")?"":Object.keys(p)[0],y=e=>{h({signupUrl:p[v(e)].signupUrl,loginUrl:p[v(e)].loginUrl})};return(0,n.useEffect)((()=>{(async()=>{const e=await ue({apiCallFunc:ve().migrationData.getMigrationData});s(!1),e.failed&&g("/error"),a(e.migrationId);const t={};for(const a of e.regions)t[a.countryCode]={countryName:a.countryName,signupUrl:a.signupUrl,loginUrl:a.loginUrl};f(t),o(e.countryCode),y(e.countryCode)})()}),[]),(0,n.useEffect)((()=>{y(r),d(!0),c(`Country updated to ${p[r].countryName}`)}),[r]),l?(0,n.createElement)(ie,null):(0,n.createElement)("div",{className:"transfer-success-div"},(0,n.createElement)("div",{className:"flex justify-center mt-3"},(0,n.createElement)("h1",{className:"text-5xl text-center font-bold  w-2/5"},"Great news, your website has been cloned successfully!")),(0,n.createElement)("div",{className:"flex justify-center mt-4"},(0,n.createElement)("p",{className:"text-center text-lg mt-6 w-2/5"},"Your site has been cloned and is now ready for transfer. To initiate the transfer, you need to copy the transfer key and paste it into the Migration Services page.")),(0,n.createElement)("div",{className:"flex justify-center mt-16"},(0,n.createElement)("h2",{id:"migration-id",className:"text-2xl text-center"},t)),(0,n.createElement)("div",{className:"flex justify-center mt-1"},(0,n.createElement)("button",{id:"copy-transfer-key-button",className:"action-button",onClick:async()=>{await navigator.clipboard.writeText(t),c("Copied transfer key successfully"),d(!0)}},"Copy transfer key")),(0,n.createElement)("div",{className:"flex justify-center mt-4"},(0,n.createElement)("a",{href:m.loginUrl,target:"_blank",className:"text-lg text-[#3575D3]",rel:"noreferrer"},"Login to Bluehost")),(0,n.createElement)("div",{className:"flex justify-center mt-4"},(0,n.createElement)("p",{className:"text-lg"},"Don't have an account ? ",(0,n.createElement)("a",{href:m.signupUrl,target:"_blank",className:"text-lg text-[#3575D3] underline ",rel:"noreferrer"},"Create account"))),(0,n.createElement)("div",{className:"flex justify-center mt-4"},(0,n.createElement)("p",{className:"text-lg"},"Choose your country:",(0,n.createElement)("select",{className:"ml-2",value:r,onChange:e=>{o(e.target.value)},id:"country-select"},Object.keys(p).map((e=>{const t=p[e];return(0,n.createElement)("option",{value:e,key:r},t.countryName)}))))),(0,n.createElement)(ke,{message:i,visible:u,setVisible:d}))},Ne=()=>{const[e,t]=(0,n.useState)({loading:!0,compatible:!1,checked:!1,failed:!1,error:"",transferQueued:!1}),a=z();return(0,n.useEffect)((()=>{(async()=>{const e=await ue({apiCallFunc:ve().migrationCheck.getCurrentStep});e.failed&&t({loading:!1,error:e.error,failed:!0}),t({loading:!1,compatible:e.compatible,checked:e.checked,transferQueued:e.transfer_queued,packagedSuccess:e.packaged_success,packagedFailed:e.packaged_failed})})()}),[]),e.loading?(0,n.createElement)(ie,null):(e.packagedFailed&&a("/error"),e.packagedSuccess?(0,n.createElement)(Ce,null):e.transferQueued?(0,n.createElement)(xe,null):e.compatible?(0,n.createElement)(ye,null):e.checked?void(e.compatible||a("/incompatible")):(0,n.createElement)(we,null))},Se=()=>{const[e,t]=(0,n.useState)(!1),a=z();return(0,n.createElement)("div",{className:"transfer-success-div"},(0,n.createElement)("div",{className:"flex justify-center mt-16"},(0,n.createElement)("h1",{className:"text-5xl text-center font-bold  w-3/5"},"It looks like your site didn't transfer.")),(0,n.createElement)("div",{className:"flex justify-center mt-4"},(0,n.createElement)("p",{className:"text-center text-lg mt-6 w-3/5"},"We might have gotten disconnected , or there could be something else going on. Let's figure it out.")),(0,n.createElement)("div",{className:"flex justify-center mt-4"},(0,n.createElement)("p",{className:"text-center text-lg mt-6 w-3/5"},"Call us at 888-401-4678")),(0,n.createElement)("div",{className:"flex justify-center mt-1"},(0,n.createElement)(ce,{id:"retry-transfer-button",onSubmit:async()=>{t(!0),await ue({apiCallFunc:ve().migrationTasks.cancelTransfer}),setTimeout((()=>{t(!1),a("/")}),3e3)},loading:e},"Try again")))},Te=()=>(0,n.createElement)("div",{className:"h-full bg-white"},(0,n.createElement)("div",{className:"incompatible-div"},(0,n.createElement)("div",{className:"pt-14 pl-12"},(0,n.createElement)("h1",{className:"text-5xl font-bold"},"That didn't work: Let's bring in the pros."),(0,n.createElement)("p",{className:"text-lg mt-6 w-2/5"},"This can happen if you have a multisite, alternate directory structures, or certain themes or plugins. The transfer might require some extra steps, or we might need to look at other options.",(0,n.createElement)("br",null),(0,n.createElement)("br",null),"Give us a call at 888-401-4678."))));function Ue(){return Q([{path:"/",element:(0,n.createElement)(Ne,null)},{path:"/error",element:(0,n.createElement)(Se,null)},{path:"/incompatible",element:(0,n.createElement)(Te,null)}])}var Pe=function(){return(0,n.createElement)(oe,null,(0,n.createElement)(Ue,null))};o()((()=>{const e=document.getElementById("bh-sm-app");null!==e&&(void 0!==n.createRoot?(0,n.createRoot)(e).render((0,n.createElement)(Pe,null)):void 0!==n.render&&(0,n.render)((0,n.createElement)(Pe,null),e))})),((window.newfold=window.newfold||{}).BluehostSiteMigrator=window.newfold.BluehostSiteMigrator||{})["bh-site-migrator"]=t}();