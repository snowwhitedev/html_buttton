/**
 * @preserve Copyright 1995, 2018, Oracle and/or its affiliates. All rights reserved.
 *
 * For information on libraries used by the Oracle Infinity Tag, please see
 * the following link: https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCHA/Help/explore.htm
 */
!function(){function _ORA(_window,_document){var version={Ci:1,Pi:0,Si:6},oraSelf=this,g_loaderAborted=!1,s_pollTimeoutCount=200,s_pollInterval=5,s_loaderConversionTimeoutDefault=2e3,s_pageProtocol=document.location.protocol,s_selector="sizzle",s_customSelector=null,g_Ready=!1,g_OnLoad=!1,accountRootUrl="//c.oracleinfinity.io/acs/account/we84aszwfj/js",tagId="jacopovallecorsa",LOADER="LOADER",eventEngine,products={},prodToContextMap={};this.getTagId=function(){return tagId},this.rt=function(){return"sizzle"!==s_selector?null!==s_customSelector?s_customSelector:(ORA.Debug.error("getSelector:  No Selector found","003"),!1):"undefined"!=typeof Sizzle&&ORA.M(Sizzle)?Sizzle:"undefined"!=typeof ORA.Sizzle&&ORA.Sizzle},this.$a=function(e,n){s_selector=e,s_customSelector=n},this.M=function(e){return null!=e};var ready=function(){g_Ready||(g_Ready=!0,ORA.fireEvent(new ORA.Event(ORA.Event.fc,ORA.Event.g),!0))},onload=function(){g_OnLoad||(g_OnLoad=!0,ORA.fireEvent(new ORA.Event(ORA.Event.pc,ORA.Event.g),!0))},searchForCookieName=function(e){for(var n=document.cookie.split(";"),t=0;t<n.length;t++){var o=[];for(o[0]=n[t].substring(0,n[t].indexOf("=")),o[1]=n[t].substring(n[t].indexOf("=")+1);" "===o[0].charAt(0);)o[0]=o[0].substring(1,o[0].length);if(o[0]===e)return o[1]}return null},searchMetatagsForName=function(e){for(var n=document.getElementsByTagName("meta"),t=0;t<n.length;t++)if(n[t].name===e)return n[t].content;return null};this.execute=function(e){var n={};n.params=e,n.arguments=Array.prototype.slice.call(arguments,1),fireEventName(ORA.Event.Qt,e),fireEventName(ORA.Event.qi,e)},this.loaderConversionTimeoutDefault=function(){return s_loaderConversionTimeoutDefault},this.setLoaderConversionTimeoutDefault=function(e){s_loaderConversionTimeoutDefault=e},this.reset=function(){for(var e in products)products.hasOwnProperty(e)&&products[e].reset();fireEventName(ORA.Event.Kt,null)},this.Rc=function(e,n,t){var i=s_pollTimeoutCount,a=function(e,n,t,o,r){setTimeout(function(){i--,e()?(oraSelf.Debug.trace("pollForCondition success result="+e(),LOADER),oraSelf.Debug.superfine("pollForCondition success condition="+e.toString(),LOADER),n&&(n(),oraSelf.Debug.trace("pollForCondition running callback",LOADER),oraSelf.Debug.superfine("pollForCondition callback="+n.toString(),LOADER))):0<i?(oraSelf.Debug.trace("LOADER:  pollForCondition timeoutCount="+i),a(e,n,t,i)):(oraSelf.Debug.error("pollForCondition Fail on "+e.toString(),"009"),t&&(t(),oraSelf.Debug.superfine("pollForCondition callbackFailure="+t.toString(),LOADER)))},r)};a(e,n,t,i,s_pollInterval)},this.gn=function(e,n,t){var o={};if(ORA.M(e))for(var r in e)e.hasOwnProperty(r)&&(o[r]=e[r]);for(var i in n)ORA.M(n[i])&&n.hasOwnProperty(i)&&(ORA.M(t)&&ORA.M(t[i])?o[i]=t[i]:o[i]=n[i]);return o},this.downloadLib=function(o,r,i,e,a,c){oraSelf.Debug.info("LOADER:  Start download: "+s_pageProtocol+c+" & attach to "+o+", async="+a),setTimeout(function(){var e=_document.getElementsByTagName(o)[0],n=_document.createElement("script");n.type="text/javascript",n.src=s_pageProtocol+c,n.setAttribute("async",a),n.setAttribute("defer",a),n.Oc=!1;var t=function(){!1===this.Oc?(r(),this.Oc=!0,oraSelf.Debug.info("Completed download: "+s_pageProtocol+c+", callback running oraHasRun="+this.Oc,LOADER),oraSelf.Debug.superfine("downloadLib: successCallback="+r.toString(),LOADER)):oraSelf.Debug.trace("downloadLib: not running successCallback, since oraHasRun="+this.Oc,LOADER)};r&&(n.onload=t,n.onreadystatechange=t),n.onerror=function(){oraSelf.Debug.error("FAILED download: "+s_pageProtocol+c+" & attach to "+o+", async="+a,"010"),i&&(i(),oraSelf.Debug.superfine("failCallback: "+i.toString(),LOADER))},e.appendChild(n)},e)},this.hc=function(e,n,t,o,r){if(void 0!==r){var i={},a=function(e){return function(){i[e]="complete",oraSelf.Debug.trace("LOADER:  downloadLibs is complete src:"+e+" = "+r[e])}};for(var c in r)r.hasOwnProperty(c)&&(i[c]="waiting",oraSelf.Debug.trace("LOADER:  downloadLibs is waiting on src:"+c+" = "+r[c]),oraSelf.downloadLib(e,a(c),null,t,o,r[c]));oraSelf.Rc(function(){for(var e in i)if(i.hasOwnProperty(e)&&"complete"!==i[e])return!1;return!0},function(){oraSelf.Debug.debug("LOADER:  downloadLibs completed on all downloads"),n()})}else oraSelf.Debug.info("LOADER:  downloadLibs srcs is empty")},this.vc=function(e){var n=e;oraSelf.M(e)&&oraSelf.M(e.location)&&oraSelf.M(e.location.search)||(n=document);var t=function(e){var n=e.split("&"),t={};if(null!==n&&0===n.length&&(n=e.split(";")),null===n)return t;var o=0;n&&(o=n.length-1);for(var r=0;r<=o;r++){var i=n[r].split("=");i[0]=unescape(i[0]),i[1]=unescape(i[1]),i[0]=i[0].replace(/\+/g," "),i[1]=i[1].replace(/\+/g," "),i[1]=i[1].replace(/<.*\?>/g,""),t[i[0]]=i[1]}return t};if(n.location.search)return t(n.location.search.substring(1,n.location.search.length));if(n.location.href){var o=n.location.href.split("?");return 2===o.length?t(o[1]):null}return null},this.abortModuleHelper=function(e,n){ORA.fireEvent(new ORA.Event(e+"_"+ORA.Event.gc,ORA.Event.g)),ORA.setExecuteState(e,ORA.Event.gc),ORA.Sc(e),ORA.Debug.error("Aborting product: "+e,"011"),ORA.Debug.error("LOADER Error","011",n)},this.Event=function(e,n,t,o){var r=e;r&&(r=r.toLowerCase()),this.name=r,this.handler=null,this.state=ORA.Event.Ec,n&&(this.state=n),this.target=t,this.params={},o&&(this.params=o)},this.Lc=function(){var r={},f={},A=function(e,n,t,o){g_loaderAborted&&!o&&oraSelf.Debug.error("fireEvent: Loader global abort, Aborted due to prior error","012",null,LOADER),n.handler=e,n.params.eventID=(new Date).getTime();var r="not set";t&&(r=t);var i,a,c="fireEvent: [name: "+n.name+"], state:"+n.state+"async["+r+"]";return oraSelf.Debug.trace(c,LOADER),oraSelf.Debug.superfine("function:"+n.handler.toString()+"]",LOADER),t?setTimeout((i=e,a=n,function(){i(a)}),0):n.handler(n),1},u=function(e,n,t,o,r){for(var i=t,a=0;a<f[e][r].length;a++)if(oraSelf.M(f[e][r][a])&&f[e][r][a].toString()===o.toString()&&!0!==n){i=!0;break}if(!i){f[e][r].push(o);var c="addEventHandler success handler"+f[e][r].length;c+=" for "+e+"\nhandler="+o.toString(),oraSelf.Debug.superfine(c,LOADER)}return i};r.Yt=function(e,n,t,o){var r,i=e,a=0,c=!1;return i&&(n||t)?(i=i.toLowerCase(),f[r=i]||(f[r]={}),f[r].success||(f[r].success=[]),f[r].fault||(f[r].fault=[]),n&&(c=u(i,o,c=!1,n,"success")),c||(a=1),t&&(c=u(i,o,c=!1,t,"fault")),c||(a+=1),function(e,n,t){if(f[e].queue&&0!==f[e].queue.length)for(var o=f[e].queue.length-1;0<=o;o--){var r=f[e].queue[o];n&&"success"===r.event.state?A(n,r.event,r.async,r.override):t&&"fault"===r.event.state&&A(t,r.event,r.async,r.override),f[e].queue.splice(o,1)}}(i,n,t),a):(oraSelf.Debug.debug("events: Can not add event handler, missing name or listeners. ",LOADER),-1)};var i=function(e,n,t){for(var o=0;o<f[e][t].length;o++)if(oraSelf.M(f[e][t][o])&&f[e][t][o].toString()===n.toString())return f[e][t].splice(o,1),1;return 0};return r.Dc=function(e,n,t){var o=e;if(!o)return oraSelf.Debug.trace("LOADER removeEventHandler:  events: Can not remove event handler, missing event name."),-1;if(o=o.toLowerCase(),!f[o])return 0;if(!n&&!t)return delete f[o],0;var r=0;return n&&(r+=i(o,n,"success")),t&&(r+=i(o,t,"fault")),r},r.fireEvent=function(e,n,t,o){if(g_loaderAborted&&!t)return oraSelf.Debug.error("fireEvent: Loader global abort, Aborted due to prior error","012",null,LOADER),e.name?oraSelf.Debug.error("fireEvent(event="+e.name+"): g_loaderAborted due to prior error","012",null,LOADER):oraSelf.Debug.error("fireEvent: Aborted due to prior error, check error message for details.","012"),-1;var r=e.name,i=e.state,a=function(e,n,t,o,r,i){var a=!!f[n],c=!(!a||!f[n][t]),u=!(!c||0===f[n][t].length),s=!(!a||!f[n].queue);if(u||!e)return a?c?1:(oraSelf.Debug.trace("fireEvent: [name:"+n+", state:"+t+"] no event handler was found",LOADER),-1):(oraSelf.Debug.trace("fireEvent: [name: "+n+"], no registered event was found",LOADER),-1);oraSelf.Debug.trace("fireEvent: [name: "+n+"], no registered event was found, enqueueing",LOADER),a||(f[n]={}),s||(f[n].queue=[]);var d={event:o,async:r,override:i};return f[n].queue.push(d),0}(o,r,i,e,n,t);if(a<=0)return a;for(var c=f[r][i],u=0,s=0;s<c.length;s++)if(c[s])try{A(c[s],e,n,t),u++}catch(l){var d="Unhandled Event Exception, [name: "+r+", state: "+i+", function: ";d+=e.handler.toString()+"]",oraSelf.Debug.error(d,"013",l)}return u},r.yc=function(){return f},r.length=function(){var e=0;for(var n in f)f.hasOwnProperty(n)&&e++;return e},r.addFireOnce=function(e,n,t){var o=function(){n(),r.Dc(e,o,t)};r.Yt(e,o,t)},r.bc=function(){f={}},r},eventEngine=new this.Lc,this.Yt=eventEngine.Yt,this.Dc=eventEngine.Dc,this.fireEvent=eventEngine.fireEvent,this.addFireOnce=eventEngine.addFireOnce,this.bc=eventEngine.bc,this.Event.xc="preinit",this.Event.Tc="init",this.Event.Cc="preload",this.Event.Mc="load",this.Event.Pc="postload",this.Event.Fc="loader_abort",this.Event.gc="loader_module_abort",this.Event.qc="debugger_clear_cookies",this.Event.Nc="debugger_dump_params",this.Event.zc="debug_error_out",this.Event.fc="dom_ready",this.Event.pc="dom_onload",this.Event.Ic="timer_expire",this.Event.Hc="timer_clear",this.Event.g="success",this.Event.Uc="fault",this.Event.Ec="unknown",this.Event.jc="pageview",this.Event.Gc="conversion",this.Event.Qc="debugger_check_mode",this.$c=function(){var i=-1;this.Kc=!1;var a=[],c=this,u=function(e,n,t){var o=n;if(t&&(o=t+":  "+o),this.Kc||a.push([e,o]),this.Kc)a=[];else if(!(i<e)&&"undefined"!=typeof console&&console){var r=!0;switch(e){case 0:console.error&&(console.error(o),r=!1);break;case 1:console.warn&&(console.warn(o),r=!1);break;case 2:console.info&&(console.info(o),r=!1);break;case 3:case 4:case 5:console.log&&(console.log(o),r=!1)}!0===r&&console.log&&console.log(o)}};c.superfine=function(e,n){u(5,e,n)},c.trace=function(e,n){u(4,e,n)},c.debug=function(e,n){u(3,e,n)},c.info=function(e,n){u(2,e,n)},c.error=function(e,n,t,o){var r=n;r?r+=": ":r="";var i="";t&&("string"==typeof t?i="\n"+t:t.toString?(i=t.toString(),t.stack&&(i+=", [stack]: "+t.stack)):i="\n"+(t.message?t.message:"")+(t.name?" ["+t.name+"]":"")+(t.fileName?"\n ("+t.fileName+":"+t.lineNumber+")\n"+t.stack:"")),u(0,r+e+i,o),ORA.fireEvent(new ORA.Event(ORA.Event.zc,ORA.Event.g,t))},c.dir=function(e,n,t){n&&u(2,n,t),console&&"function"==typeof console.dir?console.dir(e):c.Vc(e)},c.Vc=function(e,n){var t=e||{},o=n||"";for(var r in t)t.hasOwnProperty(r)&&"function"!=typeof t[r]&&c.debug("\t"+r+" : "+t[r],o)},c.setDebugLevel=function(e){i=e},c.getDebugLevel=function(){return i},c.dumpParams=function(){var e=c.getConfigParams();for(var n in e)e.hasOwnProperty(n)&&"object"==typeof e[n]&&c.dir(e[n],"Config parameters",n);return e},c.getConfigParams=function(){var e={};return e.Wc={version:version,Di:[version.Ci,version.Pi,version.Si].join(".")},e},c.checkMode=function(e){ORA.fireEvent(new ORA.Event(ORA.Event.Qc,ORA.Event.g,{resetFlag:e}))},c.getHistory=function(){return a}};var Dependency=function(e,n){this._name=e,this._state=n,this._met=!1},registerContext=function(e,n){prodToContextMap[e]=n},Product=function(e,n,t){var o=this,r={},i=[];this.prodId=e,this.plugin=new n,this.executeState=Product.Bc,this.timer=null,this.startTime=null,this.Jc=null,this.configName="default",void 0!==t&&(this.configName=t),this.Xc=function(e){r[e._name]=e},this.reset=function(){o.executeState=Product.Bc,r={},i=[]},this.Yc=function(){r={}},this.Zc=function(e){for(var n in r)if(r.hasOwnProperty(n)&&r[n]._name===e)return r[n];return null},this.tu=function(){return 0===i.length&&(i=ORA.tu(o.prodId)),i},this.eu=function(){i=ORA.tu(o.prodId)},this.ou=function(){return this.executeState},this.nu=function(){for(var e in r)if(r.hasOwnProperty(e)&&""!==e&&!0!==r[e]._met){if(products[e].ou()!==r[e]._state)return!1;r[e]._met=!0}return!0},this.ru=function(e,n){var t=o.Zc(e);null!==t&&t._state===n&&(t._met=!0)},this.iu=function(e){this.timer?oraSelf.Debug.info("LOADER:  "+this.prodId+" timer already started, using current timer."):(oraSelf.Debug.debug("LOADER:  starting timer for "+o.prodId),this.timer=setTimeout(function(){oraSelf.Debug.error("LOADER:  "+o.prodId+"module timer expired calling Abort","015"),oraSelf.fireEvent(new ORA.Event(o.prodId+"_"+ORA.Event.Ic,ORA.Event.g)),oraSelf.fireEvent(new ORA.Event(o.prodId+"_"+ORA.Event.gc,ORA.Event.g))},e),this.startTime=new Date,oraSelf.Debug.info("LOADER:  "+this.prodId+" timer started ["+this.startTime+"]."))},this.au=function(){this.Jc=new Date,this.timer&&(clearTimeout(this.timer),this.timer=null),oraSelf.Debug.info("LOADER:  "+this.prodId+" timer cleared ["+this.Jc+"]")},this.cu=function(){var e=o.ou()===Product.uu,n=o.nu(),t=o.plugin[ORA.Event.Pc]!==undefined;return n&&e&&t?(oraSelf.Debug.debug("setExecuteState:  "+o.prodId+" has met all dependencies && ready, running postload"),o.plugin[ORA.Event.Pc](),!0):n&&e?(ORA.Debug.superfine(o.prodId+", has no postLoad section"),!0):(ORA.Debug.superfine(o.prodId+", did not meet postload exec conditionals"),!1)}};Product.Bc="waiting",Product.DOWNLOADING="downloading",Product.uu="ready",Product.su="running",Product.du="aborted";var regPluginDependencies=function(e){if(ORA.M(e.prototype.oraConfigObj)&&ORA.M(e.prototype.oraConfigObj.s_dependencies))for(var n=e.prototype.oraConfigObj.s_dependencies.split(","),t=0;t<n.length;t++){var o=n[t].split(":");products[e.ProductName].Xc(new Dependency(o[0],o[1]))}for(var r in products)products.hasOwnProperty(r)&&products[r].eu()};this.registerPlugin=function(e,n){if(products[e.ProductName]=new Product(e.ProductName,e,n),products[e.ProductName].executeState=Product.Bc,ORA.M(e.prototype.abort)&&ORA.Yt(e.ProductName+"_"+ORA.Event.gc,e.prototype.abort),regPluginDependencies(e),e.prototype&&e.prototype.oraConfigObj&&e.prototype.oraConfigObj.s_useTrackingPipeline&&!0===e.prototype.oraConfigObj.s_useTrackingPipeline){products[e.ProductName].useTrackingPipeline=!0;var t=e.prototype.oraConfigObj;if(ORA.M(t.s_pageTimeout)&&ORA.M(t.s_TrackingPipelineTimeout)){var o=Math.max(t.s_pageTimeout,t.s_TrackingPipelineTimeout);products[e.ProductName].s_TrackingPipelineTimeout=o}else ORA.M(t.s_pageTimeout)?products[e.ProductName].s_TrackingPipelineTimeout=t.s_pageTimeout:ORA.M(t.s_TrackingPipelineTimeout)&&(products[e.ProductName].s_TrackingPipelineTimeout=t.s_TrackingPipelineTimeout)}},this.wt=function(){products={},prodToContextMap={}},this.nu=function(e){return products[e].nu()},this.tu=function(e){var n=[];for(var t in products)products.hasOwnProperty(t)&&null!==products[t].Zc(e)&&n.push(t);return n},this.fu=function(e,n){if(!e||!products[e])return null;if(!n)return products[e].Yc(),null;var t=n.split(",");if(!t||0===t.length)return null;products[e].Yc();for(var o=0;o<t.length;o++){var r=t[o].split(":");if(2!==r.length)return null;products[e].Xc(new Dependency(r[0],r[1]))}return null};var processDependents=function(e){var n=products[e];if(n.cu()){n.executeState="running";var t=n.tu(e);for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];processDependents(r)}}};this.setExecuteState=function(e,n){if(n!==ORA.Event.gc){if(oraSelf.ou(e)!==ORA.Event.gc){products[e].executeState=n,oraSelf.Debug.trace("setExecuteState:  "+e+" to "+n);var t=products[e].tu();for(var o in t)t.hasOwnProperty(o)&&products.hasOwnProperty(t[o])&&products[t[o]].ru(e,n);processDependents(e)}}else products[e].executeState=Product.du},this.ou=function(e){return ORA.M(products[e])?products[e].executeState===Product.du?ORA.Event.gc:products[e].executeState:null},this.lu=function(e){for(var n in products)if(products.hasOwnProperty(n)&&null!==products[n].Zc(e))return oraSelf.Debug.trace("isDependency:  "+e+" is dependency of "+n),!0;return oraSelf.Debug.trace("isDependency:  "+e+" is not a dependency of any product"),!1},this.fn=function(){var e=[];for(var n in products)if(products.hasOwnProperty(n)&&products[n].useTrackingPipeline){var t={};t.name=n,products[n].s_TrackingPipelineTimeout&&(t.timeout=products[n].s_TrackingPipelineTimeout),e.push(t)}return e},this.pu=function(e,n){return accountRootUrl+"/"+tagId+"/"+e+"-"+n+".js"},this.nn=function(e){for(var n in products)if(products.hasOwnProperty(n)&&e===products[n].prodId)return products[n];return null},this.pt=function(){return g_Ready},this.Au=function(){return g_OnLoad},this.qn=function(elm,event,func){try{return elm.addEventListener?elm.addEventListener(event,func,!1):elm.attachEvent?elm.attachEvent("on"+event,func):eval("elm."+event+"=func;"),0}catch(e){return-1}},this.ma=function(e,n,t){try{return e.removeEventListener?e.removeEventListener(n,t,!1):e.detachEvent&&e.detachEvent("on"+n,t),0}catch(o){return-1}},this.da=function(e,n){var t=n.substr(0,2);if(e.addEventListener){if("on"===t)return n.substring(2)}else if(e.attachEvent&&"on"!==t)return"on"+n;return n};var _attachEventListener=function(){if("complete"!==document.readyState&&"undefined"!=typeof document.readyState||ready(),document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),ready()},!1),/WebKit|Opera/i.test(navigator.userAgent))var e=setInterval(function(){/loaded|complete/.test(document.readyState)&&(clearInterval(e),ready())},10)},_attachEvent=function(){"complete"!==document.readyState&&"loading"!==document.readyState||ready(),document.attachEvent("onreadystatechange",function(){"complete"!==document.readyState&&"loading"!==document.readyState||(document.detachEvent("onreadystatechange",arguments.callee),ready())})},setDomEventListeners=function(){try{document.addEventListener&&_attachEventListener(),document.attachEvent&&_attachEvent(),window.addEventListener?window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,!1),ready()},!1):window.attachEvent&&window.attachEvent("onload",function(){window.detachEvent("onload",arguments.callee,!1),ready()}),g_OnLoad?onload():window.addEventListener?window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,!1),onload()},!1):window.attachEvent&&window.attachEvent("onload",function(){window.detachEvent("onload",arguments.callee,!1),onload()})}catch(e){ready(),onload()}};oraSelf.Debug=new oraSelf.$c;var qs=this.vc(_window),qsHelper=function(e,n){oraSelf.M(qs[e])&&oraSelf.M(n)&&n(qs[e])};oraSelf.M(qs)&&(qsHelper("_ora.accountRoot",function(e){accountRootUrl=e}),qsHelper("_ora.debug",function(e){oraSelf.Debug.setDebugLevel(e.length)}));var parseStrToMap=function(e){var n={},t=e.split(";");for(var o in t)if(t.hasOwnProperty(o)){var r=t[o].split(":");n[r[0]]=r[1]}return n},thisOrThat=function(e,n){return e||n||null},getContextMap=function(){var e=thisOrThat(searchForCookieName("_ora.context"),searchForCookieName("_ora.config")),n=thisOrThat(searchMetatagsForName("_ora.context"),searchMetatagsForName("_ora.config")),t=qs&&thisOrThat(qs["_ora.context"],qs["_ora.config"]),o=/_ora\.context=([^&]*)|_ora\.config=([^&]*)/g.exec(document.querySelector('script[src*="odc.js"]').src);return null!==t?parseStrToMap(t):null!=e?parseStrToMap(e):null!=n?parseStrToMap(n):o&&2<o.length?o[2]!==undefined?parseStrToMap(o[2]):parseStrToMap(o[1]):undefined},contextTriggerMap=getContextMap();if(void 0!==contextTriggerMap)for(var prodNam in oraSelf.Debug.info("LOADER:  Found one or more context(s)"),contextTriggerMap)contextTriggerMap.hasOwnProperty(prodNam)&&oraSelf.Debug.trace('LOADER:  triggers have set contextTriggerMap "'+prodNam+'":"'+contextTriggerMap[prodNam]+'"');var isContextTriggered=function(e){return void 0!==contextTriggerMap&&"undefined"!=typeof products[e].configName&&"undefined"!=typeof contextTriggerMap[e]&&contextTriggerMap[e]===products[e].configName?(oraSelf.Debug.trace('LOADER:  context "'+products[e].configName+'" triggered for '+e),!0):(void 0===contextTriggerMap||"undefined"==typeof contextTriggerMap[e])&&(oraSelf.Debug.trace("LOADER:  published context triggered for "+e),!0)},_preinit=function(){var e,n="unknown";try{for(n in products)if(products.hasOwnProperty(n)&&(e=n,ORA.M(products[e].plugin)&&ORA.M(products[e].plugin[ORA.Event.xc]))&&isContextTriggered(n)&&ORA.ou(n)!==ORA.Event.gc){var t='LOADER:  product "'+n+'" with context name "';t+=products[n].configName+'" _preinit phase start',oraSelf.Debug.trace(t),products[n].plugin[ORA.Event.xc](),t='LOADER:  product "'+n+'" with context name "',t+=products[n].configName+'" _preinit phase complete',oraSelf.Debug.trace(t)}}catch(o){ORA.abortModuleHelper(n,o)}},_init=function(){var e,n="unknown";try{for(n in products)if(products.hasOwnProperty(n)&&(e=n,ORA.M(products[e].plugin)&&ORA.M(products[e].plugin[ORA.Event.Tc]))&&isContextTriggered(n)&&ORA.ou(n)!==ORA.Event.gc){var t='LOADER:  product "'+n+'" with context name "';t+=products[n].configName+'" _init phase start',oraSelf.Debug.trace(t),products[n].plugin[ORA.Event.Tc](),t='LOADER:  product "'+n+'" with context name "',t+=products[n].configName+'" _init phase complete',oraSelf.Debug.trace(t)}}catch(o){ORA.abortModuleHelper(n,o)}},_preload=function(){var e,n="unknown";try{for(n in products)if(products.hasOwnProperty(n)&&(e=n,ORA.M(products[e].plugin)&&ORA.M(products[e].plugin[ORA.Event.Cc])&&ORA.M(products[e].plugin.oraConfigObj)&&!0===products[e].plugin.oraConfigObj.doLoad)&&isContextTriggered(n)&&ORA.ou(n)!==ORA.Event.gc){var t='LOADER:  product "'+n+'" with context name "';t+=products[n].configName+'" _preload phase start',oraSelf.Debug.trace(t),products[n].plugin[ORA.Event.Cc](),t='LOADER:  product "'+n+'" with context name "',t+=products[n].configName+'" _preload phase complete',oraSelf.Debug.trace(t)}}catch(o){ORA.abortModuleHelper(n,o)}},_load=function(){var e,n="unknown";try{var t=function(e){return function(){ORA.Debug.debug(e+" downloaded successfully")}};for(n in products)if(products.hasOwnProperty(n)&&(e=n,ORA.M(products[e].plugin)&&ORA.M(products[e].plugin[ORA.Event.Mc])&&ORA.M(products[e].plugin.oraConfigObj)&&!0===products[e].plugin.oraConfigObj.doLoad)&&isContextTriggered(n)&&ORA.ou(n)!==ORA.Event.gc){ORA.setExecuteState(n,Product.DOWNLOADING);var o='LOADER:  product "'+n+'" with context name "';o+=products[n].configName+'" _load phase start',oraSelf.Debug.trace(o),products[n].plugin[ORA.Event.Mc](t(n)),o='LOADER:  product "'+n+'" with context name "',o+=products[n].configName+'" _load phase complete',oraSelf.Debug.trace(o)}}catch(r){ORA.abortModuleHelper(n,r)}},_errorGeneral=function(e){oraSelf.Debug.error("Loader Error: "+e,"016")},_loaderAbort=function(){var e="unknown";g_loaderAborted=!0,oraSelf.Debug.error("Loader global abort event","017");try{for(e in products)products.hasOwnProperty(e)&&ORA.M(products[e].plugin)&&!0===products[e].plugin.oraConfigObj.doLoad&&(ORA.fireEvent(new ORA.Event(e+"_"+ORA.Event.gc,ORA.Event.g),!1,!0),ORA.setExecuteState(e,ORA.Event.gc),ORA.Sc(e),ORA.Debug.error("Aborting product: "+e,"018"))}catch(n){ORA.abortModuleHelper(e,n)}};oraSelf.Debug.info("LOADER:  Version "+[version.Ci,version.Pi,version.Si].join(".")),this.Yt(this.Event.xc,_preinit,function(){_errorGeneral("preinit fail")}),this.Yt(this.Event.Tc,_init,function(){_errorGeneral("init fail")}),this.Yt(this.Event.Cc,_preload,function(){_errorGeneral("preload fail")}),this.Yt(this.Event.Mc,_load,function(){_errorGeneral("load fail")}),this.Yt(this.Event.Fc,_loaderAbort,function(){_errorGeneral("abort fail")});var contextLibs=[];this.start=function(){var e=function(){oraSelf.fireEvent(new ORA.Event(ORA.Event.xc,ORA.Event.g)),oraSelf.fireEvent(new ORA.Event(ORA.Event.Tc,ORA.Event.g)),oraSelf.fireEvent(new ORA.Event(ORA.Event.Cc,ORA.Event.g)),oraSelf.fireEvent(new ORA.Event(ORA.Event.Mc,ORA.Event.g)),oraSelf.Debug.debug("LOADER:  Synchronous functionality has finished firing")};try{setDomEventListeners(),ORA.M(contextTriggerMap)?(oraSelf.Debug.debug("LOADER:  contextTriggerMap contains contexts"),function(){for(var e in contextTriggerMap)if(contextTriggerMap.hasOwnProperty(e)){var n=oraSelf.pu(e,contextTriggerMap[e]);registerContext(e,contextTriggerMap[e]),void 0!==n&&(oraSelf.Debug.debug("LOADER:  adding "+n+" to download"),contextLibs.push(n))}}(),oraSelf.hc("head",e,0,!0,contextLibs)):e()}catch(n){oraSelf.fireEvent(new ORA.Event(ORA.Event.Fc,ORA.Event.g))}},this.productReady=function(e,n,t){var o=products[e],r=t||"_product_ready";if(!o||o.executeState!==Product.uu&&o.executeState!==Product.su)o?(ORA.Yt(e+r,n),ORA.Debug.debug("attached lister for "+e+" "+r)):(ORA.Debug.debug("product was not found attaching to "+e+" "+r),ORA.Yt(e+r,n));else try{n()}catch(i){ORA.Debug.debug("User supplied product ready callback failed "+i.message)}},this.productReady.push=function(e){ORA.productReady.apply(this,e),ORA.Debug.debug("productReady pushing function for "+e[0],"LOADER")},oraSelf.Debug.debug("ORA object created",LOADER),oraSelf.Debug.info('To dump config params use: "ORA.Debug.dumpParams()"'),oraSelf.Debug.info('To check the mode use: "ORA.Debug.checkMode(false)" - Use true if you wish to reset the mode.')}var executeQueue=function(e){var n=[];try{for(;0<e.length;)n=e.shift(),ORA.Debug.debug("productReady queue found when loading for "+n[0],"LOADER"),ORA.productReady.apply(this,n)}catch(t){ORA.Debug.debug("Error processing ORA.productReady queue "+t.message,"LOADER")}};if("undefined"==typeof ORA||"undefined"!=typeof ORA&&!ORA.ready){var queue=[];"undefined"!=typeof ORA&&ORA.productReady&&(queue=ORA.productReady),ORA=new _ORA(window,window.document,window.navigator,window.location),executeQueue(queue),ORA.ready=!0}else console.error("ORA global namespace already in use, Infinity not loaded/setup")}(),function(){var n;"undefined"!=typeof ORA&&!0===ORA.ready&&(ORA.registerPlugin=ORA.registerPlugin,ORA.abortModuleHelper=ORA.abortModuleHelper,ORA.setLoaderConversionTimeoutDefault=ORA.setLoaderConversionTimeoutDefault,ORA.loaderConversionTimeoutDefault=ORA.loaderConversionTimeoutDefault,ORA.downloadLib=ORA.downloadLib,ORA.reset=ORA.reset,ORA.Ru=function(){//Define Products
    //---------------------------
    //
    //  analytics Module Code 0.0.3
    //
    //---------------------------
    ORA.analyticsModule = function(){};

    //Object to contain custom configs
    ORA.analyticsModule.prototype.oraConfigObj = {
  "s_disableSeed":false,
  "alwaysLoad":true,
  "ora-plugins":{
    "crossDomain":{
      "enable":true,
      "blockCollect":true,
      "whiteListSelector":"A",
      "blackListSelector":"A[href*='google.com'], A[href*='facebook.com']"
    },
    "cg":{
      "enable":true,
      "cgDefs":[
        "wt.cg_n",
        "wt.cg_s",
        "wt.cg_s2"
      ],
      "blockCollect":true
    },
    "html5Video":{
      "enable":false,
      "poll":false,
      "pctInc":25,
      "beraconType":"auto",
      "seek":true,
      "pollRate":250,
      "nameCallback":null,
      "beaconCurve":{
        "300":30,
        "60":10,
        "600":60,
        "130":30,
        "420":45,
        "1800":150
      },
      "pause":true,
      "load":false,
      "cued":false,
      "loadMeta":false,
      "screenMode":false,
      "beacon":true,
      "postMessage":false,
      "fixed":false,
      "quartile":true,
      "buffering":false,
      "bins":15,
      "beaconRate":60,
      "metaTags":true,
      "volume":false
    },
    "fingerprint":{
      "enable":false,
      "addTiming":true,
      "options":{
        "excludeOpenDatabase":false,
        "excludeDeviceMemory":false,
        "excludeHasLiedBrowser":false,
        "excludeColorDepth":false,
        "excludeJsFonts":true,
        "excludeHasLiedLanguages":false,
        "excludeAvailableScreenResolution":false,
        "excludeWebGLVendorAndRenderer":true,
        "excludeLanguage":false,
        "excludePixelRatio":false,
        "excludePlatform":false,
        "swfContainerId":"",
        "excludeCanvas":true,
        "excludeHasLiedOs":false,
        "excludeFlashFonts":true,
        "excludeUserAgent":false,
        "excludeAddBehavior":false,
        "excludeIEPlugins":false,
        "excludeSessionStorage":false,
        "excludeDoNotTrack":false,
        "excludeHasLiedResolution":false,
        "excludePlugins":false,
        "excludeScreenResolution":false,
        "excludeCpuClass":false,
        "excludeAdBlock":false,
        "excludeIndexedDB":false,
        "excludeAudioFP":false,
        "excludeTimezoneOffset":false,
        "excludeWebGL":true,
        "userDefinedFonts":[],
        "swfPath":"",
        "excludeHardwareConcurrency":false,
        "excludeTouchSupport":false
      }
    },
    "multitrack":{
      "enable":false
    },
    "bluekaiUid":{
      "enable":true,
      "blockCollect":true
    },
    "mobileBrowser":{
      "enable":false
    },
    "evtTrack":{
      "enable":true,
      "downloadtypes":"xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip,pptx",
      "standardEvents":{
        "anchor":true,
        "offsite":true,
        "rightclick":false,
        "download":true,
        "javascript":false,
        "scrollTracking":true
      },
      "eventList":{
        "myClick":{
          "eventTrigger":"mousedown",
          "selector":"BUTTON.btnTest",
          "eventCallback":"var el = e[\"element\"] || e[\"srcElement\"] || {},payload = {};payload[\"WT.ti\"] = \"Button:\" + el.textContent || el.innerText;payload[\"WT.dl\"] = \"99\";return {\"data\": payload};"
        }
      }
    },
    "yt":{
      "enable":false,
      "legacy":false,
      "pctInc":25,
      "seek":true,
      "pause":true,
      "load":false,
      "cued":false,
      "loadMeta":false,
      "beacon":true,
      "mode":"auto",
      "quartile":true,
      "buffering":false,
      "loadAPI":false,
      "bins":15,
      "beaconRate":60,
      "volume":false
    },
    "fragment":{
      "enable":false,
      "virtualPageView":false,
      "prefix":"anchor",
      "blockCollect":true,
      "virtialDl":26,
      "paramHandeling":"addPrefix",
      "addAnchorName":"name",
      "applyClickEventOnly":false
    },
    "bc":{
      "enable":false,
      "poll":false,
      "pctInc":25,
      "beraconType":"auto",
      "seek":true,
      "pollRate":250,
      "nameCallback":null,
      "beaconCurve":{
        "300":30,
        "60":10,
        "600":60,
        "130":30,
        "420":45,
        "1800":150
      },
      "pause":true,
      "load":false,
      "cued":false,
      "preProcess":null,
      "loadMeta":false,
      "screenMode":false,
      "beacon":true,
      "maxBinds":10,
      "postMessage":false,
      "fixed":false,
      "playerId":"div[id^='vjs_video']:not([id$='_api']):not([id*='_component'])",
      "quartile":true,
      "buffering":false,
      "bins":15,
      "beaconRate":60,
      "metaTags":true,
      "volume":false
    },
    "heatmap":{
      "enable":false,
      "blockCollect":true
    },
    "ds":{
      "enable":false,
      "domains":[
        "webtrends.com",
        "webtrends.co.uk"
      ]
    },
    "cookieCutter":{
      "readCookies":[
        {
          "cookie":{
            "TEST":"ora.cook_a"
          },
          "options":{
            "persist":true
          }
        },
        {
          "cookie":{
            "ORA_FPC":{
              "id":"ora.c_id",
              "ss":"ora.c_ss",
              "lv":"ora.c_lv"
            }
          },
          "options":{
            "parseOn":":",
            "parseLv":"="
          }
        },
        {
          "cookie":{
            "ELOQUA":{
              "GUID":"ora.eloqua"
            }
          }
        },
        {
          "cookie":{
            "utag_main":{
              "_ss":"ora.u_ss",
              "_st":"ora.u_st",
              "v_id":"ora.u_vid",
              "_sn":"ora.u_sn",
              "ses_id":"ora.u_ses_id"
            }
          },
          "options":{
            "parseOn":"$",
            "parseLv":":",
            "persist":false
          }
        }
      ],
      "enable":false
    },
    "msgListener":{
      "domains":[
        "http:/my.site.com",
        "https://mysite.com"
      ],
      "enable":false
    },
    "rdyEvt":{
      "enable":false,
      "blockCollect":true
    },
    "optOutFooter":{
      "enable":false,
      "autoOptIn":true,
      "optTime":15000,
      "optMsg":"This site uses cookies to analyze user activity in order to improve the Website.  See our <a href=#privacyPolicy>privacy policy</a> for more information. You may opt-out of tracking for this site <INPUT type=\"button\" id=\"OptOut\" style=\"background: gray; color: white;font-size:8pt\" value=\"Opt Out\" onclick=\"ORA.analytics.plugins.optOutFooter.optOut();\"></button>"
    },
    "fb":{
      "enable":false,
      "inTest":false,
      "iTimeoutLoginStatus":800,
      "pathBFAPICallbacks":"window.ORA.plugins.FB.callbacks",
      "iTimeoutWaitFBLoad":2000,
      "enableLegacy":false
    },
    "tw":{
      "enable":false,
      "widgetUrl":"//platform.twitter.com/widgets.js",
      "blockCollect":true,
      "inTest":false,
      "timeout":0,
      "dynamicLoad":true
    },
    "blocklist":{
      "enable":false,
      "blockCollect":true,
      "commerce":true,
      "video":true,
      "whitelist":{
        "wt.cg_n":true,
        "wt.cg_s":true
      }
    },
    "pp":{
      "enable":false,
      "cookieDays":365,
      "priority":100,
      "defPrefix":"DCSext",
      "params":[
        "dcsvid",
        "riid"
      ],
      "useMostRecent":true,
      "cookieName":"WTPERSIST"
    },
    "plt":{
      "enable":false,
      "sampleRate":100,
      "maxT":60000,
      "enablePerf":false
    }
  },
  "timezone":0,
  "DNTBehavior":"ignoreDNT",
  "s_dependencies":"common:running",
  "disableSSL":false,
  "defaultCollectionServer":"dc.oracleinfinity.io",
  "s_useTrackingPipeline":true,
  "libUrl":"analytics.js",
  "accountGuid":"we84aszwfj",
  "tagId":"jacopovallecorsa",
  "secureCookie":false,
  "destinations":[
    {
      "accountGuid":"we84aszwfj",
      "collectionServer":"dc.oracleinfinity.io"
    }
  ],
  "s_TrackingPipelineTimeout":4000
};

    ORA.analyticsModule.prototype.preinit = function() {
    };

    // run rules
    ORA.analyticsModule.prototype.init = function() {
        try {
                         if(true) {
                           //Rule - simple
                                    this.oraConfigObj.doLoad=true;
                
                                if (this.oraConfigObj.doLoad === undefined) {
                 this.oraConfigObj.doLoad=true;
                }
           }
                                else if (true) {
                                //Rule - ChromeInit
                                    this.oraConfigObj.key="value";
                
                                    try{ var j=document.querySelector('#tagCfg').getAttribute('data-cfg'); if(j&&j.length>0){ OraclePluginCfg=JSON.parse(j); for(var p in OraclePluginCfg){ if(OraclePluginCfg.hasOwnProperty(p)){ if(ORA.analyticsModule.prototype.oraConfigObj['ora-plugins'][p.replace('acs','')]){ ORA.analyticsModule.prototype.oraConfigObj['ora-plugins'][p.replace('acs','')].enable=OraclePluginCfg[p] } } } }}catch(ignore){}try{ j=document.querySelector('#expertTagCfg').getAttribute('data-cfg'); if(j&&j.length>0){ var pConf=JSON.parse(j)['ora-plugins']; for(var plugName in ORA.analyticsModule.prototype.oraConfigObj['ora-plugins']){ if(pConf[plugName]){ ORA.analyticsModule.prototype.oraConfigObj['ora-plugins'][plugName]=pConf[plugName] } } }}catch(ignore){};
                                if (this.oraConfigObj.doLoad === undefined) {
                 this.oraConfigObj.doLoad=true;
                }
           }
                    // handle case where it matches none of the rules
            this.oraConfigObj.doLoad = this.oraConfigObj.doLoad || this.oraConfigObj.alwaysLoad;

                    } catch(e) {
            ORA.abortModuleHelper("analytics", e);
        }
   };


    // run any preload scripts
    ORA.analyticsModule.prototype.preload = function() {
        try {
            // get the max conversion timeout from the products for click functionality
            var currTimeout = 0;
            if (ORA.analyticsModule.prototype.oraConfigObj["s_conversionTimeout"]) {
                currTimeout = ORA.analyticsModule.prototype.oraConfigObj["s_conversionTimeout"];
            }
            ORA.setLoaderConversionTimeoutDefault(Math.max(currTimeout, ORA.loaderConversionTimeoutDefault()));
            ORA.Debug.debug("PRELOAD:  Executing preload script");
            

        } catch(e) {
            ORA.abortModuleHelper("analytics", e);
        }
    };


    // load the analytics tag
    ORA.analyticsModule.prototype.load = function(callback){
        try {
            ORA.Debug.debug("LOAD:  Executing load phase");
            var productName="analytics";
            var attachId="head";
            //Load script
            
    var fail = function(){
        ORA.fireEvent(new ORA.Event(productName+"_"+ORA.Event.LOADER_MODULE_ABORT, ORA.Event.STATUS_SUCCESS));
    };
    ORA.downloadLib(attachId, callback, fail, 0, true, this.oraConfigObj.libUrl);

        } catch(e) {
            ORA.abortModuleHelper("analytics", e);
        }
    };


    ORA.analyticsModule.prototype.postload = function(){
        ORA.Debug.debug("POSTLOAD:  Executing postload analytics complete");
        try {
            ORA.Debug.info("LOADER:  ORA.analyticsModule.prototype: postload");
            //PostLoad script
            
        ORA.analytics.setup(ORA.analyticsModule.prototype.oraConfigObj);
    
        } catch(e) {
            ORA.abortModuleHelper("analytics", e);
        }
    };


    // abort gracefully on timer expire
    ORA.analyticsModule.prototype.abort = function(){
        try{
            ORA.Debug.debug("ABORT:  Executing analyticsModule abort");
            //Abort script
            

        } catch(e){
            ORA.abortModuleHelper("analytics", e);
        }
    };

    //  setup the product Name
    ORA.analyticsModule.ProductName = "analytics";

    // register plugin
    ORA.registerPlugin(ORA.analyticsModule, "default");
},ORA.Ou=function(){},ORA.Ou.prototype.oraConfigObj={hu:"//c.oracleinfinity.io/acs/common/js/lib/sizzle.min.js",doLoad:!0,s_dependencies:""},ORA.Ou.prototype.load=function(e){try{ORA.fu("sizzle",this.oraConfigObj.s_dependencies),"undefined"!=typeof Sizzle&&ORA.M(Sizzle)||!ORA.lu("sizzle")?ORA.setExecuteState("sizzle","ready"):ORA.downloadLib("head",e,function(){ORA.abortModuleHelper("sizzle","failed to download sizzle")},0,!0,this.oraConfigObj.hu)}catch(n){ORA.Debug.debug("Sizzle load error "+n.message)}},ORA.Ou.prototype.postload=function(){},ORA.Ou.ProductName="sizzle",ORA.registerPlugin(ORA.Ou,"default"),n=!0,ORA.vu=function(){},ORA.vu.prototype.oraConfigObj={hu:"//c.oracleinfinity.io/acs/common/js/lib/json2.js",doLoad:!0,s_dependencies:""},ORA.vu.gu=function(e){n=e},ORA.vu.mu=function(){return n},ORA.vu.prototype.load=function(e){try{ORA.fu("json",this.oraConfigObj.s_dependencies),"undefined"==typeof JSON&&ORA.lu("json")?(ORA.Debug.debug("JSON not detected"),ORA.vu.gu(!1),ORA.downloadLib("head",e,function(){ORA.abortModuleHelper("json","failed to download json"),ORA.abortModuleHelper("analytics","failed to download json")},0,!0,this.oraConfigObj.hu)):(ORA.vu.gu(!0),ORA.setExecuteState("json","ready"))}catch(n){ORA.abortModuleHelper("analytics",n)}},ORA.vu.prototype.postload=function(){},ORA.vu.ProductName="json",ORA.registerPlugin(ORA.vu,"default"),function(){ORA.Event.iA="bluekai_data_ready";var t="bluekai_uid_plugin",r={},o=function(){},i=function(e,n){var t=n||"";for(var o in e)e.hasOwnProperty(o)&&("object"==typeof e[o]?i(e[o],t+"_"+o):r["ora."+t+"_"+o]=e[o]);return null},e=function(e){if(e&&e.data&&"bluekai"===e.data.source){var n=e.data;i(n,"odc"),document.cookie=t+"="+JSON.stringify(r)+"; path=/"}o()},n=function(){window.addEventListener?window.addEventListener("message",e,!1):ORA.Debug.debug("bluekai reguires addEventListener support","LOADER-bluekai")};o=function(){ORA.Debug.debug("Removing postMessage lister for bluekai data","ANA-"+t),window.removeEventListener?window.removeEventListener("message",e):window._u?window._u("onmessage",e):ORA.Debug.debug("Browser does not support Removing messageListeners - exiting","ANA-"+t),ORA.fireEvent(new ORA.Event(ORA.Event.iA,ORA.Event.g))},ORA&&ORA.fireEvent&&ORA.Debug&&setTimeout(n,1),window.ORA.bkLoader=n}(),ORA.wu=function(){},ORA.Event.gi="common_load_complete",ORA.Event.Qi="common_ora_pluginmgr_ready",ORA.Event.ji="common_hosted_pluginmgr_ready",ORA.Event.un="common_tracking_flush",ORA.Event.p="common_com_exec_req",ORA.wu.prototype.oraConfigObj={hu:"common.js",doLoad:!0,s_dependencies:"json:running"},ORA.wu.prototype.load=function(e){try{(!ORA.M(ORA.t)||ORA.M(ORA.t)&&!ORA.M(ORA.t.Ot))&&ORA.lu("common")&&ORA.downloadLib("head",e,function(){ORA.fireEvent(new ORA.Event("common"+ORA.Event.gc,ORA.Event.g))},0,!0,this.oraConfigObj.hu)}catch(n){ORA.abortModuleHelper("common",n)}},ORA.wu.prototype.postload=function(){ORA.t.setup()},ORA.wu.ProductName="common",ORA.registerPlugin(ORA.wu,"default"),function(){ORA.Event.AA="analytics_load_complete",ORA.Event.jt="analytics_ora_plugins_loaded",ORA.Event.Jt="analytics_hosted_plugins_loaded",ORA.Event.Yi="analytics_ora_plugins_init",ORA.Event.Ui="analytics_hosted_plugins_init",ORA.Event.De="analytics_dcs_setup",ORA.Event.wi="analytics_product_ready",ORA.Event.Bi="analytics_setup_complete",ORA.Event.xe="analytics_before_page_analysis",ORA.Event.Le="analytics_after_page_analysis",ORA.Event.ve="analytics_before_getid",ORA.Event.de="analytics_after_getid",ORA.Event.ze="analytics_pv_mutate",ORA.Event.Su="analytics_data_send",ORA.Event.$t="loader_click",ORA.Event.Qt="loader_pre_execute",ORA.Event.qi="loader_execute",ORA.Event.Kt="loader_reset",ORA.Event.Gt="loader_collect",ORA.Event.Vt="loader_view",ORA.getContextName=function(){return ORA.nn("analytics")&&ORA.nn("analytics").configName||""},ORA.yu=function(){return ORA.nn("analytics")&&ORA.nn("analytics").configName||""};var n=function(e,n){ORA.fireEvent(new ORA.Event(e,ORA.Event.g,null,n),null,null,!0)};ORA.collect=function(e){return n(ORA.Event.Gt,e),1},ORA.view=function(e){return n(ORA.Event.Vt,e),1},ORA.click=ORA.sendEvent=function(e){return n(ORA.Event.$t,e),!0},ORA.regPlugin=function(e,n,t){var o=function(){ORA.Debug.debug("regPlugin - call of deferred register of "+e,"LOADER"),ORA.analytics.plugins[e]===undefined?(ORA.Debug.debug("Trying to init "+e+" however, it does not exist in the tag config, calling plugins init anyway"),ORA.t.Wt.Tt(e,n,t)):ORA.analytics.plugins[e]&&ORA.analytics.plugins[e].src?(ORA.analytics.plugins[e].loaded=!0,ORA.t.Bt.Tt(e,n,t,"hosted-plugins")):ORA.t.Wt.Tt(e,n,t)};ORA.t&&ORA.t.Wt&&ORA.t.Wt.pt&&!0===ORA.t.Wt.pt()?(ORA.Debug.debug("ORA.common.pluginMgr exists so register is possible"),o()):(ORA.Debug.debug("regPlugin - deferred register of "+e,"LOADER"),ORA.analytics.plugins[e]&&ORA.analytics.plugins[e].src?ORA.Yt(ORA.Event.ji,o,null,!0):ORA.Yt(ORA.Event.Qi,o,null,!0))}}(),ORA.Ru(),ORA.start())}();