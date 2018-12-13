'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('prop-types'),c=require('./d8460cd7eec9b5ac3077a1c3fc6a50d2.js'),d=require('./6893c66b236a52295ea5c35a8052630d.js'),e=require('./48ed383395967d737f11ebc42820b913.js'),f=require('./41c99b908d0cb118c2a6fcf3c306663c.js'),g=require('./3708d3f281e2f2a71c7feda26168f3dc.js'),h=require('./aa1f2a2e68329a3bbaa996a52b5ea65b.js'),i=require('./ff946754202ecf377034d29daac7c8d9.js'),j=require('./ca9102c5efe003cb9f99bcd8df78f429.js'),k=require('./c754d906e04f71224e14d49a89769678.js'),l=require('./8e89d5836133cac25c6aa23d785c63d9.js'),m=require('./e12e47cfa49959a6d49ea1936dc19380.js'),n=require('./10279410b7cf7ea9409d42a7eb37225c.js'),o=require('./b6dd6ba0b853899c69527eaf93a58f7b.js'),p=require('./413e1df0d2a135fa20cefc4c23f8e8e1.js'),q=require('./d03a90fbd796428c64e8c47eef5f4e71.js'),r=require('./8e7fed729e9f11f30d63365586719bf0.js'),s=require('./504ae46dc4a72502ee836b22913fbe81.js'),t=require('./9a1630c7db7597f338c9319bfc8571c5.js'),u=require('./a1b9e6fb17fda6e4b961ef97ab1371f8.js'),v=require('./6fc2d18cec70b19ca4d1e2defbdf43cd.js'),w=require('./72653d4b93cdd7443296229431a7aa9a.js'),x=require('./3bfffbe88b3d923921f851c0697974fe.js'),y=require('./1ca0b7713664710bff99ca9c6d29c43c.js'),z=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),A=require('./84eac15ddafa077aa832c98b6c2290bd.js'),B=require('./f094f1d16fffcac4d74949e4fc6b09ac.js'),C=require('./ea653f45dc25181ca4f1b108175009b7.js'),D=require('./dc4889188702c881b1432b490a2a4850.js'),E=require('./03f56b6c971ec6f7813234d685a2fa8c.js'),F=require('classnames'),G=require('./d3fc1d4b6cfd440a6300e62456252a06.js'),H=require('./137588fc97010af6b33c2be1d533447b.js'),I=require('./b6a2a0af8ea41ee5132948d45a0a6677.js'),J=require('./a03c8e76d4fe0178cd6a28a2fbc16ddd.js'),K=require('./195285e5284f78e12cb71042e95b9566.js'),L=require('./245e991bfa34036d0454bd1d61b4a3b2.js'),M=require('./b86cb96a5caed2b5ae72ef2e6a5d13ef.js'),N=require('./0cecfd7c413f06c788a4d6b7972cdf96.js'),O=require('./e452f0d072800b8203d233682d37d71a.js'),P=require('./c8af78c47c933020966663d8d52d77b4.js');class Q extends a.Component{constructor(a){super(a),this.onResizeStop=(a,b)=>{this.props.windowActions.setSimulator({width:b})},this.state={simulatorStyle:{}}}componentDidMount(){this.props.isPopup?this.adjustWindowSize():this.props.appLaunched&&this.props.simulatorActions.compile(),chrome.fontSettings.setMinimumFontSize({pixelSize:1}),global.online&&setTimeout(()=>{global.Win.resizeBy(5,5)},1e3)}componentWillReceiveProps(a){a.vibrate!=this.props.vibrate&&('short'==a.vibrate?this.vibrateAnimation(1):'long'==a.vibrate&&this.vibrateAnimation(3)),this.props.isPopup&&(a.screenWidth!==this.props.screenWidth||a.screenHeight!==this.props.screenHeight)&&this.adjustWindowSize()}getChildContext(){return{isPopup:this.props.isPopup,window:this.props.win?this.props.win:null}}async vibrateAnimation(a){if(0>=a)return void this.props.simulatorActions.setVibrate('none');var b=[`translate(1%,5px) scale(${this.props.deviceScale})`,`translate(-1%,5px) scale(${this.props.deviceScale})`];const c=async(a)=>{return 0>=a.length?void this.setState({simulatorStyle:{}}):(this.setState({simulatorStyle:{transition:'all linear 0.05s',transform:a[0]}}),a.splice(0,1),new Promise((b,d)=>{setTimeout(()=>{c(a).then(()=>{b()}).catch((a)=>{d(a)})},50)}))};await c(b),await this.vibrateAnimation(--a)}adjustWindowSize(){setTimeout(()=>{const a=this.props.win;if(a){let b=this.props.screenWidth,c=this.props.screenHeight;const d=document.getElementsByClassName('simulator-toolbar');c+=d[0]?d[0].offsetHeight:27,a.width=b-(a.window.innerWidth-a.width),a.height=c-(a.window.innerHeight-a.height)}})}getOptionsComponents(){let b=this.props,c=[];return b.switch.selectorPickerShow&&c.push(a.createElement(q,{key:'selectorpicker'})),b.switch.datePickerShow&&c.push(a.createElement(n,{key:'datepicker'})),b.switch.timePickerShow&&c.push(a.createElement(o,{key:'timepicker'})),b.switch.multiPickerShow&&c.push(a.createElement(p,{key:'multipicker'})),b.switch.paymentShow&&c.push(a.createElement(h,{key:'payment'})),b.switch.confirmShow&&c.push(a.createElement(u,{key:'confirm'})),b.switch.authorizeShow&&c.push(a.createElement(A,{key:'authorize'})),c}getWindowComponents(){let b=this.props,c=[];return b.window.groupShow&&c.push(a.createElement(s,{key:'grouplist'})),b.window.settingShow&&c.push(a.createElement(t,{key:'setting'})),b.window.addCardShow&&c.push(a.createElement(D,{key:'addcard'})),b.window.viewCardShow&&c.push(a.createElement(E,{key:'viewcard'})),b.window.h5AddCardShow&&c.push(a.createElement(M,{key:'h5addcard'})),b.window.h5ViewCardShow&&c.push(a.createElement(N,{key:'h5viewcard'})),b.window.h5ChooseCardShow&&c.push(a.createElement(O,{key:'h5choosecard'})),b.window.locationShow&&c.push(a.createElement(B,{key:'location'})),b.window.addPhoneContactShow&&c.push(a.createElement(I,{key:'addPhoneContact'})),b.window.chooseAddressShow&&c.push(a.createElement(J,{key:'chooseAddress'})),b.window.chooseInvoiceTitleShow&&c.push(a.createElement(K,{key:'chooseInvoiceTitle'})),c}isFullScreen(){return this.props.enableFullScreen||'custom'===this.props.navigationStyle&&this.props.libVersion&&170<=parseInt(this.props.libVersion.replace(/\./g,''))}getWebviewNodes(){const b=this.props;let c,d,g=[];for(let f in this.isFullScreen()?(c=b.screenHeight,d=0):(c=b.screenHeight-b.navigationbarHeight-b.statusbarHeight,d=b.navigationbarHeight+b.statusbarHeight),b.webviewInfos){let h=b.webviewInfos[f],i=c,j=d;b.tabbarShow&&-1!=h.tabbarIndex&&('top'==b.tabbarPosition?(i-=b.tabbarHeight,j+=b.tabbarHeight):i-=b.tabbarHeight),g.push(a.createElement(e,{key:f,show:b.currentWebviewID==f,info:h,top:j,height:i}))}if(b.anyHtmlWebviewInfo){const e=b.anyHtmlWebviewInfo;g.push(a.createElement(f,{webviewID:e.webviewID,nosupport:!0,url:e.url||'',cangoback:!0,width:b.screenWidth,height:c,left:0,top:d}))}return b.standbyWebview&&g.push(a.createElement(e,{key:b.standbyWebview.id,show:!1,info:b.standbyWebview,top:d,height:c,type:'standby'})),0>=g.length&&g.push(a.createElement(e,{key:-1,show:!0,info:{},top:d,height:c,type:'tip'})),g}getSimulatorInner(b){const e=this.props;let f=a.createElement(c,null);return e.anyHtmlWebviewInfo&&(f=a.createElement(c,{showLeftBtn:!0,onLeftBtnClick:()=>{e.simulatorActions.setAnyHtmlWebview()}})),a.createElement('div',{className:'simulator-shell'},a.createElement('div',{className:'simulator',style:b},a.createElement(G,null),a.createElement(L,null),f,this.getWebviewNodes(),a.createElement(d,null),a.createElement(g,null),a.createElement(j,null),a.createElement(k,null),a.createElement(l,null),a.createElement(m,null),this.getOptionsComponents(),a.createElement(r,null),a.createElement(P,null)),this.getWindowComponents())}render(){let b,c=this.props,d={width:c.width},e=F('simulator-container',{"ui-invisible":!c.show});return global.onlySimulator?(b=_extends({top:0,left:0,width:c.screenWidth,height:c.screenHeight,transform:`scale(${c.deviceScale})`,transformOrigin:'50% 0'},this.state.simulatorStyle),global.Win.width!==b.width&&(global.Win.width=b.width),global.Win.height!==b.height&&(global.Win.height=b.height+('darwin'===process.platform?0:26))):b=_extends({width:c.screenWidth,height:c.screenHeight,transform:`scale(${c.deviceScale})`,transformOrigin:'50% 0',marginLeft:-c.screenWidth/2},this.state.simulatorStyle),this.props.isPopup?(b.top='0',b.left='inherit',b.marginLeft='inherit',a.createElement('div',{style:{width:'100%',height:'100%'},className:e},a.createElement(y,null),this.getSimulatorInner(b),a.createElement(H,null))):a.createElement(C,{width:c.width,height:'100%',className:e,style:{minWidth:c.shellMinWidth},leftResizable:c.workbenchShow&&'right'===c.position,rightResizable:c.workbenchShow&&'left'===c.position,onResizeStop:this.onResizeStop},a.createElement(y,null),this.getSimulatorInner(b),a.createElement(v,null),a.createElement(H,null),a.createElement('div',{className:'ui-divider-vertical',style:{pointerEvents:'none'}}))}}Q.childContextTypes={isPopup:b.bool,window:b.object},module.exports=Q}(require('lazyload'),require);