'use strict';!function(require,directRequire){function a(a,b){return function(){return b(a(...arguments))}}function b(a,b){let c;if(a.subPackages)for(let d=0,e=a.subPackages.length;d<e;d++){const e=a.subPackages[d];if(0==b.indexOf(e.root)){c=e;break}}return c}function c(a,b){if(!d.existsSync(a))return 0;const f=d.statSync(a);if(f.isDirectory()){const f=d.readdirSync(a);return f.reduce((d,f)=>d+c(e.join(a,f),b),0)}const g=e.extname(a);return!b||b[g]?f.size:0}const d=require('fs'),e=require('path'),f=require('url'),g=require('querystring'),h=require('redux'),i=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),j=require('./common/locales/index.js'),k=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),l=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),m=require('./84b183688a46c9e2626d3e6f83365e13.js');module.exports={parseCgiErrorCode:function(a,b){const c=j.config;switch(a){case i.NOT_LOGIN:case i.INVALID_LOGIN:case i.INVALID_TOKEN:case i.DEV_INVALID_SIGNATURE:case i.DEV_NEED_RELOGIN:return c.CGI_ERR_NEED_RELOGIN;case i.NOT_LIMITS_CARD:return c.CGI_ERR_NO_PERMISSION;case i.DEV_APP_NOT_BAND:return c.CGI_ERR_NOT_BAND;case i.DEV_NEED_ADMIN:return c.CGI_ERR_NEED_ADMIN;case i.DEV_NEED_UPDATE:return c.CGI_ERR_NEED_UPDATE;case i.DEV_NEED_SCAN_CODE:return c.CGI_ERR_NEED_SCAN_CODE;case i.DEV_COMPILE_EMPTY_SOURCE:return c.CGI_ERR_EMPTY_SOURCE;case i.DEV_COMPILE_SOURCE_MAX_LIMIT:return c.CGI_ERR_SOURCE_MAX_LIMIT;case i.DEV_COMPILE_WXPKG_MAX_LIMIT:return c.CGI_ERR_WXPKG_MAX_LIMIT;case i.DEV_COMPILE_INVALID_WXPKG:return c.CGI_ERR_INVALID_WXPKG;case i.DEV_COMPILE_WXML_FAIL:return c.CGI_ERR_WXML_FAIL.format(b);case i.DEV_COMPILE_WXSS_FAIL:return c.CGI_ERR_WXSS_FAIL.format(b);case i.DEV_COMPILE_INVALID_FILE:return c.CGI_ERR_INVALID_FILE.format(b);case i.DEV_COMPILE_INVALID_JSON_FILE:return c.CGI_ERR_INVALID_JSON.format(b);case i.DEV_COMPILE_LACK_OF_FILE:return c.CGI_ERR_LACK_OF_FILE.format(b);case i.DEV_BIND_NOT_24H:return c.CGI_ERR_BIND_NOT_24H;case i.DEV_PLATFORM_NOT_BAND_DEV:return c.CGI_ERR_PLATFORM_NOT_BAND;case i.DEV_PLATFORM_INVALID_EXT_APPID:return c.CGI_ERR_PLATFORM_INVALID_EXT_APPID;case i.DEV_PLATFORM_EXT_APPID_NOT_AUTH:return c.CGI_ERR_PLATFORM_EXT_APPID_NOT_AUTH;case i.NOT_LIMITS:return c.CGI_ERR_NOT_LIMITS;case i.NOT_LIMITS_QY:return c.CGI_ERR_NOT_LIMITS_QY;case i.DEV_INVALID_APPID:return c.CGI_ERR_DEV_INVALID_APPID;case i.DEV_CLOUD_NO_PERMISSION:return c.CGI_ERR_DEV_CLOUD_NO_PERMISSION;case i.DEV_CLOUD_NO_PRODUCT_ENV:return c.CGI_ERR_DEV_CLOUD_NO_PRODUCT_ENV;case i.DEV_CLOUD_INVALID_RESP_DATA:return c.CGI_ERR_DEV_CLOUD_INVALID_RESP_DATA;case i.DEV_CLOUD_SYNC_CALLBACK_ERR:case i.DEV_CLOUD_ASYNC_CALLBACK_ERR:return c.CGI_ERR_DEV_CLOUD_CALLBACK_ERR.format(a);case i.DEV_CLOUD_NO_CLOUD_ACCOUNT:return c.CGI_ERR_DEV_CLOUD_NO_CLOUD_ACCOUNT;case i.DEV_CLOUD_EVENT_EXPIRED:return c.CGI_ERR_DEV_CLOUD_EVENT_EXPIRED;case i.DEV_CLOUD_INVALID_ACTION:return c.CGI_ERR_DEV_CLOUD_INVALID_ACTION;case i.CGI_ERR_USER_CAN_NOT_ACCESS_APP:return c.CGI_ERR_USER_CAN_NOT_ACCESS_APP;case i.CGI_ERR_APP_NOT_EXIST:return c.CGI_ERR_APP_NOT_EXIST;case i.CGI_ERR_APP_VERSION_NOT_EXIST:return c.CGI_ERR_APP_VERSION_NOT_EXIST;case i.DEV_CLOUD_NO_DEVELOP_ENV:return c.CGI_ERR_DEV_CLOUD_NO_DEVELOP_ENV;case i.DEV_CLOUD_NO_AUTH:{try{nw.Shell.openExternal('https://cloud.tencent.com/developer/ask/24861/answer/27432')}catch(a){}return c.CGI_ERR_DEV_CLOUD_NO_AUTH}case i.DEV_LIMIT:return c.CGI_ERR_NOT_DEV_LIMIT||b;case i.DEV_INVALID_PLUGIN_VERSION:return c.CGI_ERR_DEV_INVALID_PLUGIN_VERSION+','+b;case i.DEV_PLUGIN_NOT_FOUND:return c.CGI_ERR_DEV_PLUGIN_NOT_FOUND+','+b;case i.DEV_DEVPLUGIN_NOT_DEFINED:return c.CGI_ERR_DEV_DEVPLUGIN_NOT_DEFINED;case i.DEV_PLUGIN_ROOT_NOT_DEFINED:return c.CGI_ERR_DEV_PLUGIN_ROOT_NOT_DEFINED;case i.DEV_TWO_SAME_PLUGIN_FOUND:return c.CGI_ERR_DEV_TWO_SAME_PLUGIN_FOUND+','+b;case i.DEV_COMPILE_SOURCE_MAX_LIMIT_SUBPKG:return c.CGI_ERR_DEV_COMPILE_SOURCE_MAX_LIMIT_SUBPKG+','+b;case i.DEV_PLUGIN_NOT_INITTED:return c.CGI_ERR_DEV_PLUGIN_NOT_INITTED+','+b;case i.DEV_CLOUD_NO_TGIT_PROJECT:return c.CGI_ERR_DEV_CLOUD_NO_TGIT_PROJECT;default:return b||c.CGI_ERR_SYSTEM_ERROR.format(a);}},parseUrl:function(a){const b=a.split('?');return{pathName:b[0].replace(/\.html$/,''),query:g.parse(b[1])}},getProjectHashFromURL:function(a){const b=a.replace(/https?:\/\//,'').split('.');return b[0]},bindActionCreators:function(b,c){if('[object Function]'==Object.prototype.toString.call(b))return a(b,c);const d=Object.keys(b),e={};for(let f=0;f<d.length;f++){const g=d[f],h=b[g];'[object Function]'==Object.prototype.toString.call(h)&&(e[g]=a(h,c))}return e},getWidgetOffset:function(a,b){if(a==l.search)return{width:b.screenWidth-30,height:(b.screenWidth-30)*k.default_search_widget_radio};if(a==l.conversation){let a=0.6*b.screenWidth;return('iPhone 6'==b.title||'iPhone 6 Plus'==b.title)&&(a=0.56*b.screenWidth),{height:a*k.default_conversation_widget_radio,width:a}}},getWidgetDirectory:function(a,b){try{for(let c=0,d=b.widgets.length;c<d;c++){const d=b.widgets[c];if(d.type==a)return d.path}}catch(a){}return''},strToHash:function(a){let b,c,d,e=0;if(0===a.length)return e;for(b=0,d=a.length;b<d;b++)c=a.charCodeAt(b),e=(e<<5)-e+c,e|=0;return 0<e?e:0-e},checkIsInSubPackage:b,checkInGameSubPackage:function(a,b=''){b.startsWith('/')||(b='/'+b),b=m.normalizePath(b);let c;if(a.subPackages)for(let d=0,e=a.subPackages.length;d<e;d++){const e=a.subPackages[d];if(/\.js$/.test(e.root)){if(b==e.root){c=e;break}}else if(0==b.indexOf(e.root)){c=e;break}}return c},getLibVersionNumber:function(a){try{let b=a.split('.').reduce(function(a,b,c,d){return a+b*Math.pow(1e3,d.length-c-1)},0);return isNaN(b)&&(b=999999999),b}catch(a){return 999999999}},calculatePathSize:c,checkIsIndependentSubpackage:function(a,c){const d=b(a,c);if(d&&!0===d.independent)return d},canSimulatorRotate:function(a,b={pathName:'',appConfig:null}){let{pathName:c,appConfig:d}=b;const e=a.toolbar,f=a.simulator;if(d=d||f.appConfig||{},!c){const a=f.currentWebviewID,b=f.webviewInfos,d=b&&b[a]||{};c=d.pathName||''}let g='';try{g=d.page[`${c}.html`].window.pageOrientation||d.global.window.pageOrientation}catch(a){}return e.deviceInfo.isPad&&d.resizable||!e.deviceInfo.isPad&&'auto'===g}}}(require('lazyload'),require);