'use strict';!function(require,directRequire){function a(){l.remove(l.CACHE_KEYS.JS_APPSERVICE_GAME)}function b(a){const b=c.posix.join('game',a);return`<script>\n// ${a} has been hided by project.config.json\n//# sourceURL=http://127.0.0.1:${global.proxyPort}/${b}\n</script>`}const c=require('path'),d=require('./d28a711224425b00101635efe1034c99.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),f=require('./162bf2ee28b76d3b3d95b685cede4146.js'),g=require('./1bd2563d13db26950ae47494b2c34454.js'),h=require('./dbf59194122bf3d143456959d86d6213.js'),i=require('./be8599cf60139a20dca47b3e43647454.js'),j=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),k=require('./common/locales/index.js'),l=require('./2e9637e8a0816a626f7db9a0dee5efe8.js'),m=require('./1c8a8c710417d102ab574145dc51b4b0.js'),{asDebug:n,subAsDebug:o,vendorList:p,devVendorList:q,devSubContextList:r,devWorkerList:s,appservicejslistPlaceholder:t,subvendorList:u,workerVendorList:v,htmlTpl:w,asdebugPlaceholder:x,devtoolsConfigPlaceholder:y,wxConfigPlaceholder:z,vendorPlaceholder:A,subVendorPlaceholder:B,subAppservicejslistPlaceholder:C,canvasPlaceholder:D,subAsdebugPlaceholder:E,workerjslistPlaceholder:F,workerVendorPlaceholder:G,workerAsdebugPlaceholder:H,workerAsDebug:I,alphaVendorPlaceholder:J}=require('./d9ce5316cc172b6017fdd2399a91117a.js'),K=global.appConfig.isDev,L=K&&!nw.App.manifest.forceVendor?q:p,M=K&&!nw.App.manifest.forceVendor?r:u,N=K&&!nw.App.manifest.forceVendor?s:v;let O='';d.on('VENDOR_CONFIG_CHANGE',a),d.on('VENDOR_VERSION_CHANGE',a),module.exports=async function(a,d={}){await l.init(a);const e=l.CACHE_KEYS.JS_APPSERVICE_GAME,h=await f(a),k=(a.debugOptions||{}).hidedInDevtools||[];let p=!1;const q=i(),r=JSON.stringify({setting:a.setting,condiction:a.condiction,devtoolsConfig:q,debugOptions:a.debugOptions});r!==O&&(p=!0,O=r);let s=l.get(e);if(p||!s||d.force){let d=w;d=d.replace(y,()=>`<script charset="UTF-8">var __devtoolsConfig=${JSON.stringify(q)}</script>`),d=d.replace(x,()=>K?'<script src="__asdebug__/asdebug.js" charset="UTF-8"></script>':`<script charset="UTF-8">${n}</script>`),d=d.replace(A,()=>{const a=[];for(let d=0,e=L.length;d<e;d++){const e=L[d],f=c.extname(e);'.js'===f?(a.push(`<script src="__dev__/${e}" charset="UTF-8"></script>`),m.isFileHidedInDevtools(e,k)&&a.push(b(`__dev__/${e}`))):'.css'===f&&a.push(`<link rel="stylesheet" type="text/css" href="__dev__/${e}" />`)}return a.join('\n')});const f=await g(a),h=f.openDataContext||f.subContext;h&&(d=d.replace(E,()=>K?'<script src="__subasdebug__/subasdebug.js" charset="UTF-8"></script>':`<script charset="UTF-8">${o}</script>`));const i=f.workers;i&&(d=d.replace(H,()=>K?'<script src="__workerasdebug__/workerasdebug.js" charset="UTF-8"></script>':`<script charset="UTF-8">${I}</script>`),d=d.replace(G,()=>{const a=[];for(let b=0,d=N.length;b<d;b++){const d=N[b],e=c.extname(d);'.js'===e&&a.push(`<script src="__workerdev__/${d}" charset="UTF-8"></script>`)}const b=`<script charset="UTF-8">var __workerVendors__ = ${JSON.stringify(N)}</script>`;return b+'\n'+a.join('\n')})),f.cloud&&(d=d.replace(J,()=>{const a=[J,`<script src="__alphadev__/WACloud.js" charset="UTF-8"></script>`];return a.join('\n')})),d=d.replace(D,()=>{const a=j.getState(),b=a.toolbar.deviceInfo,{screenHeight:c,screenWidth:d}=b;return`<canvas id="myCanvas" width="${d}" height="${c}" ></canvas>`}),s=d,l.set(e,s)}return s}}(require('lazyload'),require);