'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('mkdir-p'),d=require('glob'),e=require('lodash'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./f171257bbcaef547a3cf27266ccb0db2.js'),h=require('./15ba1827c7f6564a45df6bd44da3a977.js'),i=require('./72653d4b93cdd7443296229431a7aa9a.js'),j=require('./3bfffbe88b3d923921f851c0697974fe.js'),k=require('./d28a711224425b00101635efe1034c99.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),m=require('./a8c87029da0fa06e986298d447ab0fe2.js'),n=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),o=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),p=require('./da7c31daaf542cf1796023d8e344b98a.js'),q=require('./common/locales/index.js'),r=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),s=require('./42191d95974f14b18961c9f2c730464e.js'),t=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),u=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),v=require('./84b183688a46c9e2626d3e6f83365e13.js'),w=require('./eb1fe4da47d7ed10884f8b039b058c5b.js'),x=require('./9ebfd1a4a241684455002e8c6d889fd7.js'),y=require('./881e653f19d837f2408386047cb8c38c.js'),z=require('./b543ae2da406cea63b3ad8951f17b6c0.js'),A=require('./3892cb9d0783075a973c350c41401370.js'),{default_weapp_header:B}=require('./5498e660c05c574f739a28bd5d202cfa.js'),C='darwin'===process.platform,D=(a,b)=>{if(!a)return!1;b=_extends({},b||{});const c=['setting','compileType','condiction','libVersion','appid','projectname','svr','client','qcloudRoot','miniprogramRoot','cloudfunctionRoot','jsserverRoot','pluginRoot','isGameTourist','packOptions','debugOptions','scripts'];for(const d in b)b.hasOwnProperty(d)&&0>c.findIndex((a)=>a===d)&&delete b[d];const d=s.generateConfigTemplate(),e=_extends({},d,{setting:_extends({},a.setting),compileType:a.compileType,condiction:a.condiction,libVersion:a.libVersion,appid:a.appid,projectname:a.projectname,svr:a.svr,client:a.client,qcloudRoot:a.qcloudRoot,miniprogramRoot:a.miniprogramRoot,cloudfunctionRoot:a.cloudfunctionRoot,jsserverRoot:a.jsserverRoot,pluginRoot:a.pluginRoot,packOptions:a.packOptions,debugOptions:a.debugOptions,scripts:a.scripts},b);delete e.setting.scriptsEnable;const f=s.writeObjectToConfigFile(a,e);return!f.error},E=(a,b,c)=>(d)=>{return'parseerror'===a?void d(t.setConfirmInfo({show:!0,showCancel:!0,title:'',content:q.config.RE_CREATE_PROJECT_CONFIG,callback(a){a&&D(b,c)}})):void D(b,c)},F=(a)=>(b,c)=>{const d=c();if(!a){if(a=d.project.current,!a||a.isTemp)return;a.accessTime=+new Date,n.updateProject(a.projectid,a),b({type:f.PROJECT_UPDATE_LIST,list:_extends({},d.project.list,{[a.projectid]:a})})}else a.accessTime=+new Date,n.updateProject(a.projectid,a),b({type:f.PROJECT_UPDATE_LIST,list:_extends({},d.project.list,{[a.projectid]:a})})},G=(a=!0)=>async(b)=>{const c=j.getCurrent();if(!(c&&c.isTourist))try{const d=await j.getLatestProjectAttr(c,a);d.appid===c.appid&&b({type:f.PROJECT_UPDATE_ATTR,data:d}),(a||!d.platform)&&(b({type:f.PROJECT_SET_RUMTIME_ATTR,data:d}),b({type:f.SIMULATOR_SET_GROUP_INFO,data:{list:d.share_info}})),b(F())}catch(a){const c=a.errcode;i.error(`requestProjectAttr catch error ${a}`),c===o.DEV_APP_NOT_BAND?b({type:f.PROJECT_UPDATE_ATTR,data:{userbanded:!1}}):(c===o.DEV_PLATFORM_INVALID_EXT_APPID||c===o.DEV_PLATFORM_EXT_APPID_NOT_AUTH)&&b({type:f.PROJECT_MERGE_RUMTIME_ATTR,data:{extAppIdErrMsg:a.message}})}},H=(a,b={needSaveProjectConfig:!0,needSaveProjectInfo:!0})=>async(c)=>{const{needSaveProjectConfig:d,needSaveProjectInfo:e}=b,g=j.getCurrent(),h=g.appid,i=g.projectid,k=i.replace(h,a),m=_extends({},g,{appid:a,projectid:k,isTourist:a===l.TOURIST_APPID});if(m&&m.isTourist)throw new Error('tourist appid');const o=await j.getLatestProjectAttr(m,!1);if(n.updateProjectId(i,k),c({type:f.PROJECT_CHANGE_APPID,data:{appid:a,projectid:k,attr:o}}),await G(!0)(c),d){const a=s.getConfigFileInfo(m);if(a.error)c(E(a.error.type,m,{appid:m.appid}));else{const b=_extends({},a.config,{appid:m.appid});s.writeObjectToConfigFile(m,b)}}e&&c(F(m))},I=(a)=>Object.prototype.toString.call(a).toLowerCase().slice(8,-1),J=(a,b,c,d)=>{return I(b)===c?d?0<=d.findIndex((a)=>a===b)?b:a:b:a},K=async(a,b)=>{try{await H(a,{needSaveProjectConfig:!1,needSaveProjectInfo:!1})(b)}catch(a){throw b(t.setConfirmInfo({show:!0,showCancel:!1,title:q.config.PROJECT_CONFIG_CHANGE_APPID_FAIL,content:a})),a}};module.exports={selectDevType:(a)=>(b,c)=>{if(a!==l.DEV_TYPE.MP_WEB)try{const a=c().project.list;0<Object.keys(a).length?b(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT)):b(m.setMainWindow(l.MAIN_WINDOW_TYPE.CREATE_PROJECT))}catch(a){b(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT))}else w.openWebDebugger(),n.lastSelect=l.MAIN_WINDOW_TYPE.WEB_DEBUGGER,p('url_open')},selectProjectRequest:(a)=>({type:f.PROJECT_SELECT_PROJECT_REQUEST,options:a}),selectProjectCancel:()=>({type:f.PROJECT_SELECT_PROJECT_CANCEL}),selectProjectOpen:(a)=>()=>{x.selectProjectOpen(a)},selectProjectClose:()=>({type:f.PROJECT_SELECT_PROJECT_CLOSE}),createProjectRequest:()=>({type:f.PROJECT_CREATE_PROJECT_REQUEST}),createProjectSuccess:(g,{initQuickStart:h=!1,quickstartHost:k=''}={})=>(m)=>{const n=e.merge(j.projectConfigDefault(g),g);if(h){const e=g.projectpath;let f=h===l.QUICKSTART_TYPE.WEAPP?'weapp':h===l.QUICKSTART_TYPE.WEAPP_TS?'weapp-ts':h===l.QUICKSTART_TYPE.WX_CLOUD?'wxcloud':h===l.QUICKSTART_TYPE.WX_CLOUD_GAME?'wxcloud-game':h===l.QUICKSTART_TYPE.QCLOUD_NODEJS?'node':h===l.QUICKSTART_TYPE.QCLOUD_PHP?'php':h===l.QUICKSTART_TYPE.QCLOUD_NODEJS_GAME?'node-game':h===l.QUICKSTART_TYPE.QCLOUD_PHP_GAME?'php-game':h===l.QUICKSTART_TYPE.PLUGIN?'plugin':h===l.QUICKSTART_TYPE.GAME?'game':h===l.QUICKSTART_TYPE.WEAPP_MINI?'weapp-mini':h===l.QUICKSTART_TYPE.GAME_MINI?'game-mini':h===l.QUICKSTART_TYPE.PLUGIN_MINI?'plugin-mini':'weapp';const j=global.appConfig.isDev?b.join(__dirname,'../../vendor/quickstart',f):b.join(__dirname,'./vendor/quickstart',f);try{const f=d.sync('./**/**',{cwd:j});if(f.forEach((d)=>{const f=b.join(j,d),h=b.join(e,d),i=a.lstatSync(f);if(i.isDirectory())c.sync(h);else{let c=a.readFileSync(f);g.compileType==r.plugin&&'app.json'==b.basename(d)&&(c=c.toString().replace('{{provider}}',g.appid)),a.writeFileSync(h,c)}}),h===l.QUICKSTART_TYPE.QCLOUD_NODEJS){const c=b.join(e,'./server/config.js'),d=a.readFileSync(c,'utf8');if(a.writeFileSync(c,d.replace('appId: \'\',',`appId: '${n.appid}',`).replace('pass: \'\',',`pass: '${n.appid}',`),'utf8'),k){const c=b.join(e,'./client/config.js'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace('host = \'https://123456.qcloud.la\'',`host = '${k}'`),'utf8')}}else if(h===l.QUICKSTART_TYPE.QCLOUD_PHP){const c=b.join(e,'./server/config.php'),d=a.readFileSync(c,'utf8');if(a.writeFileSync(c,d.replace('\'appId\' => \'\',',`'appId' => '${n.appid}',`).replace('\'pass\' => \'\',',`'pass' => '${n.appid}',`),'utf8'),k){const c=b.join(e,'./client/config.js'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace('host = \'https://123456.qcloud.la\'',`host = '${k}'`),'utf8')}}else if(h===l.QUICKSTART_TYPE.QCLOUD_NODEJS_GAME){const c=b.join(e,'./server/config.js'),d=a.readFileSync(c,'utf8');if(a.writeFileSync(c,d.replace('appId: \'\',',`appId: '${n.appid}',`).replace('pass: \'\',',`pass: '${n.appid}',`),'utf8'),k){const c=b.join(e,'./client/config.js'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace('host = \'https://123456.qcloud.la\'',`host = '${k}'`),'utf8')}}else if(h===l.QCLOUD_ACTION_TYPE.QCLOUD_PHP_GAME){const c=b.join(e,'./server/config.php'),d=a.readFileSync(c,'utf8');if(a.writeFileSync(c,d.replace('\'appId\' => \'\',',`'appId' => '${n.appid}',`).replace('\'pass\' => \'\',',`'pass' => '${n.appid}',`),'utf8'),k){const c=b.join(e,'./client/config.js'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace('host = \'https://123456.qcloud.la\'',`host = '${k}'`),'utf8')}}else if(h===l.QUICKSTART_TYPE.WX_CLOUD){let c=b.join(e,'./project.config.json'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace(`"appId": "",`,`"appId": "${n.appid}",`))}else if(h===l.QUICKSTART_TYPE.WX_CLOUD_GAME){let c=b.join(e,'./project.config.json'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace(`"appId": "",`,`"appId": "${n.appid}",`))}else if(h===l.QUICKSTART_TYPE.WEAPP_TS){let c=b.join(e,'./project.config.json'),d=JSON.parse(a.readFileSync(c,'utf8'));n.scripts=d.scripts={beforeCompile:'npm run compile',beforePreview:'npm run compile',beforeUpload:'npm run compile'},n.setting.scriptsEnable=!0,a.writeFileSync(c,JSON.stringify(d));const f=b.join(e,'$node_modules'),g=b.join(e,'node_modules');a.existsSync(f)&&!a.existsSync(g)&&a.renameSync(f,g)}}catch(a){i.error(`project.actions.js initProject error ${a.toString()}`)}}const o=s.getConfigFileInfo(g);if(!o.error){const a=_extends({},o.config,{appid:n.appid,projectname:n.projectname});g.isGameTourist&&(a.setting.urlCheck=!1),s.writeObjectToConfigFile(g,a)}else D(g,n);m({type:f.PROJECT_CREATE_PROJECT_SUCCESS,project:n}),m(F(n))},createProjectFail:(a)=>({type:f.PROJECT_CREATE_PROJECT_FAIL,err:a}),createProjectCancel:()=>(a,b)=>{b();try{const c=b().project.list;0<Object.keys(c).length?a(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT)):a(m.setMainWindow(l.MAIN_WINDOW_TYPE.ENTRANCE))}catch(b){a(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT))}},createProjectOpen:()=>()=>{x.createProjectOpen()},createProjectClose:()=>({type:f.PROJECT_CREATE_PROJECT_CLOSE}),createMiniCodeRequest:(a='create',b)=>({type:f.PROJECT_CREATE_MINICODE_REQUEST,createType:a,options:b}),createMiniCodeOpen:(a,b)=>()=>{x.createMiniCodeOpen(a,b)},createMiniCodeClose:()=>({type:f.PROJECT_CREATE_MINICODE_CLOSE}),removeProject:(a)=>(b)=>{n.removeProject(a),z.closeDevWindow(a),b({type:f.PROJECT_REMOVE_PROJECT,id:a})},openProject:(a)=>(b,c)=>new Promise(async(d,f)=>{try{const e=c(),f=e.project.list;f[a]||i.error(`open project with unknown projectid ${a}`);const g=f[a];g&&(g.storage={}),g.accessTime=+new Date;let{appid:h,projectname:j,projectpath:k}=g;k=encodeURIComponent(k),w.openMiniProgram({appid:h,projectname:j,projectpath:k}),d(),b(F()),n.lastSelect=a,p('project_open',g.appid)}catch(a){f(a)}}),closeProject:()=>(a,b)=>{const c=b();c.project.current&&c.window.remoteDebugWindow.debuggingProjectId===c.project.current.projectid&&a(m.setRemoteDebugWindow({show:!1,debuggingProjectId:null})),y.notifyCloseWindow(!0),global.windowMap.forEach((a)=>{try{a!==Win&&a.close(!0)}catch(a){}}),nw.Window.get().close(!0)},requestProjectAttr:G,setCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_SET_COMPILE_CONDICTION,data:a});const c=j.getCurrent(),d=c.compileType,e=s.getConfigFileInfo(c),g=[...c.condiction[d].list];if(e.error)b(E(e.error.type,c,{condiction:_extends({},c.condiction,{[d]:_extends({},c.condiction[d],{list:g})})}));else{const a=_extends({},e.config,{condiction:_extends({},c.condiction,e.config.condiction||{},{[d]:_extends({},c.condiction[d],{list:g})})});s.writeObjectToConfigFile(c,a)}b(F())},removeCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_REMOVE_COMPILE_CONDICTION,data:a});const c=j.getCurrent(),d=c.compileType,e=s.getConfigFileInfo(c),g=[...c.condiction[d].list];if(e.error)b(E(e.error.type,c,{condiction:_extends({},c.condiction,{[d]:_extends({},c.condiction[d],{list:g})})}));else{const a=_extends({},e.config,{condiction:_extends({},c.condiction,e.config.condiction||{},{[d]:_extends({},c.condiction[d],{list:g})})});s.writeObjectToConfigFile(c,a)}b(F())},setProjectSetting:(a)=>(b)=>{const c=j.getCurrent();b({type:f.PROJECT_SET_SETTING,data:a});const d=s.getConfigFileInfo(c);if(d.error){const e=_extends({},c.setting,a);delete e.scriptsEnable,b(E(d.error.type,c,{setting:e}))}else{const b=_extends({},d.config,{setting:_extends({},c.setting,d.config.setting||{},a)});delete b.setting.scriptsEnable,s.writeObjectToConfigFile(c,b)}b(F())},selectCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_SELECT_COMPILE_CONDICTION,current:a}),b({type:f.SIMULATOR_COMPILE,data:{}}),b(F())},setProjectLibVersion:(a)=>(b)=>{k.setVersionAsync(a),b({type:f.PROJECT_SET_LIBVERSION,data:a});const c=j.getCurrent(),d=s.getConfigFileInfo(c);if(d.error)b(E(d.error.type,c,{libVersion:a}));else{const b=_extends({},d.config,{libVersion:a});s.writeObjectToConfigFile(c,b)}b(F())},checkUploadStatus:()=>{const a=j.getCurrent();if(a.compileType==r.plugin){const a=q.config.UPLOAD_PLUG_IN_CONTINUE;return{type:f.INFO_SET_UPLOAD,data:{status:1,wording:a}}}if(a&&a.pluginInfo&&a.pluginInfo.length)try{for(const b of a.pluginInfo)if(b.current&&b.onlineVersion&&b.onlineVersion!==b.current.version&&0>v.compareSemVer(b.current.version,b.onlineVersion))return{type:f.INFO_SET_UPLOAD,data:{status:1,wording:q.config.PLUG_IN_VERSION_LOWER.format([b.name,b.current.version,b.onlineVersion])}}}catch(a){i.error(`project.actions.js check plugin info during checkUploadStatus failed with error: ${a.toString()}`)}return(b)=>{h({url:`${g.uploadQrCodeURL}?appid=${a.appid}`,method:'get',needToken:1}).then(({resp:a,body:c})=>{const d=1===c.is_experience?q.config.OVERWRITE_TRIAL_VERSION:q.config.SET_UPLOAD_TRIAL_VERSION;b({type:f.INFO_SET_UPLOAD,data:{status:1,wording:d}})}).catch((a)=>{b({type:f.INFO_SET_UPLOAD,data:{show:!1}}),b({type:f.INFO_SHOW_ERROR,data:{message:a.toString()}})})}},setProjectCompileType:(a)=>(b)=>{b({type:f.PROJECT_SET_COMPILE_TYPE,data:a});const c=j.getCurrent(),d=s.getConfigFileInfo(c);if(d.error)b(E(d.error.type,c,{compileType:a}));else{const b=_extends({},d.config,{compileType:a});s.writeObjectToConfigFile(c,b)}b(F())},setProjectQCloud:(a)=>({type:f.PROJECT_SET_QCLOUD,data:a}),setPkgSize:(a)=>(b)=>{b({type:f.PROJECT_SET_PKG_SIZE,data:a}),b(F())},setPluginInfo:(a)=>(b)=>{b({type:f.PROJECT_SET_PLUGIN_INFO,data:a}),b(F())},setProjectConfig:(a,b={needCheckAppid:!0,needConfirmToChangeAppid:!1})=>async(c)=>{const d=j.getCurrent();a.setting=a.setting||{},a.scripts=J({},a.scripts,'object'),a.condiction=a.condiction||{},a.condiction.weapp=a.condiction.weapp||{},a.condiction.weapp.list=J([...d.condiction.weapp.list],a.condiction.weapp.list,'array'),a.condiction.search=a.condiction.search||{},a.condiction.search.list=J([...d.condiction.search.list],a.condiction.search.list,'array'),a.condiction.conversation=a.condiction.conversation||{},a.condiction.conversation.list=J([...d.condiction.conversation.list],a.condiction.conversation.list,'array'),a.condiction.plugin=a.condiction.plugin||{},a.condiction.plugin.list=J([...d.condiction.plugin.list],a.condiction.plugin.list,'array'),a.condiction.game=a.condiction.game||{},a.condiction.game.list=J([...d.condiction.game.list],a.condiction.game.list,'array'),a.packOptions=a.packOptions||{},a.packOptions.ignore=J([],a.packOptions.ignore,'array'),a.debugOptions=a.debugOptions||{},a.debugOptions.hidedInDevtools=J([],a.debugOptions.hidedInDevtools,'array');const e=[],g=['folder','file','suffix','prefix','glob','regexp'];for(const b of a.packOptions.ignore)b&&'string'===I(b.value)&&0<=g.findIndex((a)=>a===b.type)&&e.push({value:b.value,type:b.type});const h=[],i=['folder','file','suffix','prefix','glob','regexp'];for(const b of a.debugOptions.hidedInDevtools)b&&'string'===I(b.value)&&0<=i.findIndex((a)=>a===b.type)&&h.push({value:b.value,type:b.type});const l=[];for(const b of a.condiction.weapp.list)b&&'number'===I(b.id)&&'string'===I(b.name)&&'string'===I(b.pathName)&&l.push({id:b.id,name:b.name,pathName:b.pathName,query:J('',b.query,'string'),scene:b.scene,shareInfo:J(void 0,b.shareInfo,'object'),referrerInfo:J(void 0,b.referrerInfo,'object')});const m=[];for(const b of a.condiction.plugin.list)b&&'number'===I(b.id)&&'string'===I(b.name)&&'string'===I(b.pathName)&&m.push({id:b.id,name:b.name,pathName:b.pathName,query:J('',b.query,'string'),scene:b.scene,shareInfo:J(void 0,b.shareInfo,'object'),referrerInfo:J(void 0,b.referrerInfo,'object')});const n=[];for(const b of a.condiction.search.list)b&&'number'===I(b.id)&&'string'===I(b.name)&&n.push({id:b.id,name:b.name,widgetData:J('',b.widgetData,'string'),service:J(void 0,b.service,'object'),query:J('',b.query,'string'),customQuery:J('',b.customQuery,'string'),boxQI:J('',b.boxQI,'string'),debugUrl:J('',b.debugUrl,'string')});const p=[];for(const b of a.condiction.conversation.list)b&&'number'===I(b.id)&&'string'===I(b.name)&&p.push({id:b.id,name:b.name,pathName:J(void 0,b.pathName,'string'),title:J(void 0,b.title,'string'),cachekey:J(void 0,b.cachekey,'string')});const r=[];for(const b of a.condiction.game.list)b&&'number'===I(b.id)&&'string'===I(b.name)&&r.push({id:b.id,name:b.name,query:J('',b.query,'string'),scene:b.scene,shareInfo:J(void 0,b.shareInfo,'object'),referrerInfo:J(void 0,b.referrerInfo,'object')});const o=k.getVendorConfig(),s=j.isGameApp(d)?['game','search']:['weapp','search','conversation','plugin'],u={setting:{urlCheck:J(d.setting.urlCheck,a.setting.urlCheck,'boolean'),es6:J(d.setting.es6,a.setting.es6,'boolean'),postcss:J(d.setting.postcss,a.setting.postcss,'boolean'),minified:J(d.setting.minified,a.setting.minified,'boolean'),newFeature:J(d.setting.newFeature,a.setting.newFeature,'boolean'),nodeModules:J(d.setting.nodeModules,a.setting.nodeModules,'boolean'),autoAudits:J(d.setting.autoAudits,a.setting.autoAudits,'boolean'),uglifyFileName:J(d.setting.uglifyFileName,a.setting.uglifyFileName,'boolean'),scriptsEnable:d.setting.scriptsEnable},scripts:{beforeCompile:J(d.scripts.beforeCompile,a.scripts.beforeCompile,'string'),beforePreview:J(d.scripts.beforePreview,a.scripts.beforePreview,'string'),beforeUpload:J(d.scripts.beforeUpload,a.scripts.beforeUpload,'string')},compileType:J(d.compileType,a.compileType,'string',['game','weapp','search','conversation','plugin']),condiction:{weapp:{current:d.condiction.weapp.current,list:[...l]},search:{current:d.condiction.search.current,list:[...n]},conversation:{current:d.condiction.conversation.current,list:[...p]},plugin:{current:d.condiction.plugin.current,list:[...m]},game:{current:d.condiction.game.current,list:[...r]}},appid:a.appid||'',projectid:(d.projectid||'').replace(d.appid,a.appid),libVersion:J(d.libVersion,a.libVersion,'string',Object.keys(o.libs)),svr:J(d.svr,a.svr||'','string'),client:J(d.client,a.client||'','string'),qcloudRoot:J(d.qcloudRoot,a.qcloudRoot||'','string'),miniprogramRoot:J(d.miniprogramRoot,a.miniprogramRoot||'','string'),cloudfunctionRoot:J(d.cloudfunctionRoot,a.cloudfunctionRoot||'','string'),jsserverRoot:J(d.jsserverRoot,a.jsserverRoot||'','string'),pluginRoot:J(d.pluginRoot,a.pluginRoot||'','string'),packOptions:{ignore:e},debugOptions:{hidedInDevtools:h}};if(!u.qcloudRoot&&u.svr&&(u.qcloudRoot=u.svr),!u.miniprogramRoot&&u.client&&(u.miniprogramRoot=u.client),u.libVersion!==d.libVersion&&k.setVersionAsync(u.libVersion),0>s.indexOf(u.compileType)&&(u.compileType=j.isGameApp(d)?'game':'weapp'),b.needCheckAppid&&u.appid&&u.appid!==d.appid){if(b.needConfirmToChangeAppid)return void c(t.setConfirmInfo({show:!0,showCancel:!0,title:'',content:q.config.PROJECT_CONFIG_CHANGE_APPID_CONFIRM.format([u.appid,d.appid,u.appid]),async callback(a){if(a)try{await K(u.appid,c)}catch(a){u.appid=d.appid,u.projectid=d.projectid}else u.appid=d.appid,u.projectid=d.projectid;c({type:f.PROJECT_SET_PROJECT_CONFIG,data:JSON.parse(JSON.stringify(u))}),c(F())}}));try{await K(u.appid,c)}catch(a){u.appid=d.appid,u.projectid=d.projectid}}c({type:f.PROJECT_SET_PROJECT_CONFIG,data:JSON.parse(JSON.stringify(u))}),c(F())},setProjectRuntimeAttr:(a)=>({type:f.PROJECT_SET_RUMTIME_ATTR,data:a}),saveUploadInfo:(a)=>(b)=>{b({type:f.PROJECT_SET_UPLOAD_INFO,data:a}),b(F())},saveShareInfo:(a)=>(b,c)=>{try{const d=c(),e=d.project.current;if(!e)return;let g=e.shareInfo||{};const h=g.history||[];h.unshift(a),g=_extends({},g,{history:h}),b({type:f.PROJECT_SET_SHARE_INFO,data:g}),b(F())}catch(a){}},updateProjectCover:(a)=>(b,c)=>{let d=a.project;if(!d){const b=c();if(d=b.project.current,!d)return;n.setProjectCover(d.projectid,a.image)}else n.setProjectCover(d.projectid,a.image)},openTempProject:(a)=>()=>{let{appid:b,projectname:c,projectpath:d}=a;c=encodeURIComponent(c),d=encodeURIComponent(d),w.openTempOnlineMiniProgram({appid:b,projectname:c,projectpath:d})},syncProject:(a,b)=>({type:f.PROJECT_SYNC_STORE,data:a,syncTime:b}),setProjectScripts:(a)=>(b)=>{const c=j.getCurrent();b({type:f.PROJECT_SET_SCRIPTS,data:a});const d=s.getConfigFileInfo(c);if(d.error)b(E(d.error.type,c,{scripts:_extends({},c.scripts,a)}));else{const b=_extends({},d.config,{scripts:_extends({},c.scripts,d.config.scripts||{},a)});s.writeObjectToConfigFile(c,b)}b(F())},setTimeRecords:(a)=>(b)=>{b({type:f.PROJECT_SET_TIME_RECORDS,data:a})},changeProjectAppId:H,setTcbFnRoot:(a)=>(b)=>{const c=j.getCurrent();b({type:f.PROJECT_SET_TCBFN_ROOT,data:a});const d=s.getConfigFileInfo(c);if(d.error)b(E(d.error.type,c,{cloudfunctionRoot:a}));else{const b=_extends({},d.config,{cloudfunctionRoot:a});s.writeObjectToConfigFile(c,b)}b(F())}}}(require('lazyload'),require);