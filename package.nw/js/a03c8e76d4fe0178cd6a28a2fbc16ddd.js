'use strict';!function(require,directRequire){const a=require('redux'),b=require('./089c687a39311583a3ee9240261eb5c9.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:e}=require('react-redux');module.exports=e((a)=>{const b=a.simulator.chooseAddress,c=a.toolbar.deviceInfo;return{show:b.show,callbackID:b.callbackID,api:b.api,navigationbarHeight:c.navigationbarHeight,screenHeight:c.screenHeight,screenWidth:c.screenWidth,deviceScale:a.toolbar.deviceScale}},(a)=>({hideChooseAddress:d.bindActionCreators(c.hideChooseAddress,a)}))(b)}(require('lazyload'),require);