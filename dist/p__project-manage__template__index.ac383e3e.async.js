(self["webpackChunk"]=self["webpackChunk"]||[]).push([[282],{75074:function(){},16981:function(e){e.exports={"project-template-task":"project-template-task___1uFL7","create-template":"create-template___ahvaH",list:"list___3Kh_5","item-list":"item-list___3-BW1","item-info":"item-info___24bga","item-tasks":"item-tasks___3K9Hc","item-control":"item-control___2i4q4",intro:"intro___N-xNI"}},78728:function(e){e.exports={"project-template":"project-template___KzbkC","create-template":"create-template___3UPwI",list:"list___2ozxs","item-list":"item-list___145N2","item-img":"item-img___h09JD","item-info":"item-info___MxeaF","item-tasks":"item-tasks___puRvH",task:"task___1M0-W","item-control":"item-control___2kd0-","color-light":"color-light___2f6MH"}},84687:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});n(25324);var r=n(45733),a=(n(13753),n(48429)),i=n(90636),c=(n(14643),n(92909)),l=n(3182),o=n(2824),s=(n(26780),n(86444)),u=(n(84786),n(45873)),d=n(67294),m=n(87588),f=n(93488),p=n(5405),h=n(47389),v=n(82061),w=n(51042),E=n(78728),Z=n.n(E),g=(n(68137),n(50532)),x=(n(83557),n(78840)),_=(n(67604),n(76592)),b=n(31795),k=n(75074),y=n.n(k),N=n(30155),S=e=>{var t=e.selectedTemplate,n=e.editVisible,r=e.handleEditSuccess,a=_.Z.useForm(),u=(0,o.Z)(a,1),m=u[0],f=t&&t.id?"\u7f16\u8f91\u6a21\u677f":"\u6dfb\u52a0\u6a21\u677f",p=(0,d.useState)(""),h=(0,o.Z)(p,2),v=h[0],E=h[1],Z=d.createElement("div",null,d.createElement(w.Z,null),d.createElement("div",{style:{marginTop:8}},"Upload")),k=()=>{m.resetFields(),E("")},S=()=>{k(),r("quit")},T=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var n,a,l,o,s;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.validateFields();case 2:if(n=e.sent,null===t||void 0===t||!t.id){e.next=13;break}return n.cover=v,n.id=null===t||void 0===t?void 0:t.id,e.next=8,(0,N.hV)(n);case 8:a=e.sent,l=a.code,200===l&&(c.default.success("\u7f16\u8f91\u6210\u529f"),k(),r("success")),e.next=19;break;case 13:return n.cover=v,e.next=16,(0,N.$p)(n);case 16:o=e.sent,s=o.code,200===s&&(c.default.success("\u6dfb\u52a0\u6210\u529f"),k(),r("success"));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=e=>{var t="image/jpeg"===e.type||"image/png"===e.type;if(!t)return c.default.error("\u4f60\u9700\u8981\u4e0a\u4f20jpeg\u6216\u8005png\u56fe\u7247\u683c\u5f0f!"),!1;var n=e.size/1024/1024<5;return n?(M(e),!1):(c.default.error("\u56fe\u7247\u5fc5\u987b\u5c0f\u4e8e5MB!"),!1)},M=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(t){var n,r,a;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("file",t),e.next=4,(0,N.cT)(n);case 4:r=e.sent,r.code,a=r.data,E(a.path);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.useEffect)((()=>{n&&null!==t&&void 0!==t&&t.id&&(m.setFieldsValue(t),E(null===t||void 0===t?void 0:t.cover))}),[t,n]),d.createElement("div",{className:y()["project-template-edit"]},d.createElement(s.Z,{title:f,open:n,onCancel:S,onOk:T},d.createElement(_.Z,{form:m,layout:"vertical"},d.createElement(_.Z.Item,{label:"\u5c01\u9762",name:"cover"},d.createElement(b.Z,{rotationSlider:!0},d.createElement(x.Z,{name:"image",listType:"picture-card",showUploadList:!1,beforeUpload:F},v?d.createElement("img",{src:v,alt:"image",style:{width:"100%"}}):Z))),d.createElement(_.Z.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u677f\u540d\u79f0"}]},d.createElement(g.Z,{placeholder:"\u6a21\u677f\u540d\u79f0\uff08\u5fc5\u987b\uff09"})),d.createElement(_.Z.Item,{label:"\u7b80\u4ecb",name:"intro"},d.createElement(g.Z.TextArea,{rows:2,placeholder:"\u6a21\u677f\u7b80\u4ecb"})))))},T=S,F=(n(58210),n(87240)),M=n(16981),W=n.n(M),O=(n(11826),n(76888));function j(e){var t=e.editVisible,n=e.selectedTemplate,r=e.selectedTask,a=e.handleEditSuccess,u=_.Z.useForm(),m=(0,o.Z)(u,1),f=m[0],p=(0,d.useState)(!1),h=(0,o.Z)(p,2),v=(h[0],h[1],r&&r.id?"\u7f16\u8f91\u6a21\u677f\u4efb\u52a1":"\u6dfb\u52a0\u6a21\u677f\u4efb\u52a1"),w=(0,d.useState)({id:"",name:"",project_template_id:"",sort:0}),E=(0,o.Z)(w,2),Z=(E[0],E[1],()=>{f.resetFields(),a("quit")}),x=()=>{f.validateFields().then(function(){var e=(0,l.Z)((0,i.Z)().mark((function e(t){var l,o,s,u;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("values",t),t.project_template_id=n.id,null===r||void 0===r||!r.id){e.next=11;break}return t.id=r.id,e.next=6,(0,N.r9)(t);case 6:l=e.sent,o=l.code,200===o&&(c.default.success("\u4fee\u6539\u6210\u529f"),a("success")),e.next=16;break;case 11:return e.next=13,(0,N.wl)(t);case 13:s=e.sent,u=s.code,200===u&&(c.default.success("\u6dfb\u52a0\u6210\u529f"),a("success"));case 16:f.resetFields();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((e=>!1))};return(0,d.useEffect)((()=>{t&&null!==r&&void 0!==r&&r.id&&f.setFieldsValue(r)}),[r,t]),d.createElement(s.Z,{title:v,open:t,width:300,onCancel:Z,onOk:x},d.createElement(_.Z,{form:f,layout:"vertical"},d.createElement(_.Z.Item,{label:"\u4efb\u52a1\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"},{min:2,max:30,message:"\u957f\u5ea6\u5728 2 \u5230 30 \u4e2a\u5b57\u7b26"}]},d.createElement(g.Z,{placeholder:"\u6a21\u677f\u4efb\u52a1\u540d\u79f0\uff08\u5fc5\u987b\uff09"})),d.createElement(_.Z.Item,{label:"\u6392\u5e8f",name:"sort"},d.createElement(O.Z,{defaultValue:0,style:{width:"100%"},placeholder:"\u6392\u5e8f"})),d.createElement("div",{style:{color:"#ccc"}},"\u6392\u5e8f\uff0c\u503c\u8d8a\u5927\u8d8a\u9760\u524d\uff0c\u9ed8\u8ba40")))}function C(e){var t=e.taskVisible,n=e.selectedTemplate,u=e.handleTaskEditSuccess,m=(0,d.useState)(!1),f=(0,o.Z)(m,2),p=f[0],E=f[1],Z=(0,d.useState)([]),g=(0,o.Z)(Z,2),x=g[0],_=g[1],b=(0,d.useState)(0),k=(0,o.Z)(b,2),y=k[0],S=k[1],T=(0,d.useState)(!1),M=(0,o.Z)(T,2),O=M[0],C=M[1],I=(0,d.useState)({}),H=(0,o.Z)(I,2),V=H[0],D=H[1],X=e=>{C(!1),"success"===e&&S(y+1)};(0,d.useEffect)((()=>{t&&null!==n&&void 0!==n&&n.id&&z()}),[t,y]);var z=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var t,r;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return E(!0),e.next=3,(0,N.Ye)({project_template_id:null===n||void 0===n?void 0:n.id,prop_order:"sort",order:"desc",limit:1e3,offset:0});case 3:t=e.sent,r=t.data.rows,E(!1),_(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=(e,t)=>{t&&t.currentTarget.blur(),C(!0),D(e)},L=(e,t)=>{t&&t.currentTarget.blur(),s.Z.confirm({title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u5f53\u524d\u9879\u5417",onOk:function(){var t=(0,l.Z)((0,i.Z)().mark((function t(){var n,r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,N.P2)({ids:[e.id]});case 2:n=t.sent,r=n.code,200===r&&(S(y+1),c.default.success("\u5220\u9664\u6210\u529f"));case 5:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()})},U=()=>{u("success")};return d.createElement(s.Z,{title:"\u300c".concat(null===n||void 0===n?void 0:n.name,"\u300d\u4efb\u52a1\u5217\u8868"),open:t,onCancel:U,footer:null},d.createElement("div",{className:W()["project-template-task"]},d.createElement(F.Z,{spinning:p},d.createElement("div",{className:W().list},x.map((e=>d.createElement("div",{key:e.id,className:W()["item-list"]},d.createElement("div",{className:W()["item-info"]},d.createElement("div",{className:W().name},e.name),d.createElement("div",{className:W().intro},"\u6392\u5e8f\uff1a",e.sort)),d.createElement(r.Z,{className:W()["item-control"]},d.createElement(a.Z,{icon:d.createElement(h.Z,null),shape:"circle",size:"small",onClick:t=>Y(e,t)}),d.createElement(a.Z,{icon:d.createElement(v.Z,null),shape:"circle",size:"small",onClick:t=>L(e,t)}))))))),d.createElement(a.Z,{className:W()["create-template"],type:"primary",icon:d.createElement(w.Z,null),onClick:Y},"\u6dfb\u52a0\u4efb\u52a1")),d.createElement(j,{editVisible:O,selectedTask:V,selectedTemplate:n,handleEditSuccess:X}))}var I=u.Z.TabPane,H=s.Z.confirm,V=()=>{var e=(0,d.useState)("0"),t=(0,o.Z)(e,2),n=t[0],s=t[1],E=(0,d.useState)(!1),g=(0,o.Z)(E,2),x=(g[0],g[1]),_=(0,d.useState)([]),b=(0,o.Z)(_,2),k=b[0],y=b[1],S=(0,d.useState)(!1),F=(0,o.Z)(S,2),M=F[0],W=F[1],O=(0,d.useState)(0),j=(0,o.Z)(O,2),V=j[0],D=j[1],X=(0,d.useState)({}),z=(0,o.Z)(X,2),Y=z[0],L=z[1],U=(0,d.useState)(!1),A=(0,o.Z)(U,2),P=A[0],B=A[1],R=["\u81ea\u5b9a\u4e49\u6a21\u677f","\u516c\u5171\u6a21\u677f"],q=e=>{B(!1),"success"===e&&D(V+1)},K=e=>{W(!1),D(V+1)};function $(){return G.apply(this,arguments)}function G(){return G=(0,l.Z)((0,i.Z)().mark((function e(){var t,r;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("\u83b7\u53d6\u5217\u8868",n),x(!0),e.prev=2,e.next=5,(0,N.Y7)({is_custom:"0"===n?1:0,limit:1e3,offset:0});case 5:t=e.sent,r=t.data.rows,y(r),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),c.default.error("\u83b7\u53d6\u5217\u8868\u5931\u8d25");case 13:return e.prev=13,x(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])}))),G.apply(this,arguments)}(0,d.useEffect)((()=>{$()}),[n,V]);var J=(e,t)=>{t&&t.currentTarget.blur(),L(e),W(!0)};function Q(e,t){t.currentTarget.blur(),L(e),B(!0)}function ee(e,t){t.currentTarget.blur(),H({title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u5f53\u524d\u9879\u5417?",icon:d.createElement(m.Z,null),onOk(){return(0,l.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,N.Fv)({ids:[e.id]});case 3:c.default.success("\u5220\u9664\u6210\u529f"),D(V+1),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),c.default.error("\u5220\u9664\u5931\u8d25");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}})}return d.createElement("div",{className:Z()["project-template"]},d.createElement(u.Z,{activeKey:n,onChange:s},R.map(((e,t)=>d.createElement(I,{tab:e,key:t.toString()},d.createElement("div",{className:Z().list},k.map((e=>d.createElement("div",{key:e.id,className:Z()["item-list"]},d.createElement("div",{className:Z()["item-img"]},d.createElement("img",{style:{width:"50px",height:"50px"},src:e.cover,alt:e.name})),d.createElement("div",{className:Z()["item-info"]},d.createElement("div",{className:Z().name},e.name),d.createElement("div",{className:"".concat(Z()["color-light"]," ").concat(Z().intro)},e.intro)),d.createElement("div",{className:"".concat(Z()["color-light"]," ").concat(Z()["item-tasks"])},e.project_template_tasks.map(((t,n)=>d.createElement("span",{key:t.id},t.name,n!==e.project_template_tasks.length-1&&d.createElement(f.Z,{style:{margin:"0 8px"}}))))),0===t&&d.createElement(r.Z,{className:Z()["item-control"]},d.createElement(a.Z,{icon:d.createElement(p.Z,null),shape:"circle",size:"small",onClick:t=>Q(e,t)}),d.createElement(a.Z,{icon:d.createElement(h.Z,null),shape:"circle",size:"small",onClick:t=>J(e,t)}),d.createElement(a.Z,{icon:d.createElement(v.Z,null),shape:"circle",size:"small",onClick:t=>ee(e,t)})))))))))),d.createElement(a.Z,{className:Z()["create-template"],type:"primary",icon:d.createElement(w.Z,null),onClick:()=>J(null)},"\u521b\u5efa\u9879\u76ee\u6a21\u677f"),d.createElement(T,{editVisible:M,selectedTemplate:Y,handleEditSuccess:K}),d.createElement(C,{taskVisible:P,selectedTemplate:Y,handleTaskEditSuccess:q}))};V.menu={name:"\u9879\u76ee\u6a21\u677f",icon:"SmileOutlined"},V.order=3;var D=V},17469:function(e,t,n){"use strict";n.d(t,{n:function(){return d}});var r=n(2824),a=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,i=function(e){if("string"!==typeof e)throw new TypeError("Invalid argument expected string");var t=e.match(a);if(!t)throw new Error("Invalid argument not valid semver ('".concat(e,"' received)"));return t.shift(),t},c=function(e){return"*"===e||"x"===e||"X"===e},l=function(e){var t=parseInt(e,10);return isNaN(t)?e:t},o=function(e,t){return typeof e!==typeof t?[String(e),String(t)]:[e,t]},s=function(e,t){if(c(e)||c(t))return 0;var n=o(l(e),l(t)),a=(0,r.Z)(n,2),i=a[0],s=a[1];return i>s?1:i<s?-1:0},u=function(e,t){for(var n=0;n<Math.max(e.length,t.length);n++){var r=s(e[n]||"0",t[n]||"0");if(0!==r)return r}return 0},d=function(e,t){var n=i(e),r=i(t),a=n.pop(),c=r.pop(),l=u(n,r);return 0!==l?l:a&&c?u(a.split("."),c.split(".")):a||c?a?-1:1:0}},88434:function(e,t,n){e.exports=n(24439)},71084:function(e){"use strict";var t=!("undefined"===typeof window||!window.document||!window.document.createElement),n={canUseDOM:t,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:t&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:t&&!!window.screen,isInWorker:!t};e.exports=n},74913:function(e){var t,n,r,a,i,c,l,o,s,u,d,m,f,p,h,v=!1;function w(){if(!v){v=!0;var e=navigator.userAgent,w=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),E=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(m=/\b(iPhone|iP[ao]d)/.exec(e),f=/\b(iP[ao]d)/.exec(e),u=/Android/i.exec(e),p=/FBAN\/\w+;/i.exec(e),h=/Mobile/i.exec(e),d=!!/Win64/.exec(e),w){t=w[1]?parseFloat(w[1]):w[5]?parseFloat(w[5]):NaN,t&&document&&document.documentMode&&(t=document.documentMode);var Z=/(?:Trident\/(\d+.\d+))/.exec(e);c=Z?parseFloat(Z[1])+4:t,n=w[2]?parseFloat(w[2]):NaN,r=w[3]?parseFloat(w[3]):NaN,a=w[4]?parseFloat(w[4]):NaN,a?(w=/(?:Chrome\/(\d+\.\d+))/.exec(e),i=w&&w[1]?parseFloat(w[1]):NaN):i=NaN}else t=n=r=i=a=NaN;if(E){if(E[1]){var g=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);l=!g||parseFloat(g[1].replace("_","."))}else l=!1;o=!!E[2],s=!!E[3]}else l=o=s=!1}}var E={ie:function(){return w()||t},ieCompatibilityMode:function(){return w()||c>t},ie64:function(){return E.ie()&&d},firefox:function(){return w()||n},opera:function(){return w()||r},webkit:function(){return w()||a},safari:function(){return E.webkit()},chrome:function(){return w()||i},windows:function(){return w()||o},osx:function(){return w()||l},linux:function(){return w()||s},iphone:function(){return w()||m},mobile:function(){return w()||m||f||u||h},nativeApp:function(){return w()||p},android:function(){return w()||u},ipad:function(){return w()||f}};e.exports=E},92092:function(e,t,n){"use strict";var r,a=n(71084);function i(e,t){if(!a.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,i=n in document;if(!i){var c=document.createElement("div");c.setAttribute(n,"return;"),i="function"===typeof c[n]}return!i&&r&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}a.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),e.exports=i},24439:function(e,t,n){"use strict";var r=n(74913),a=n(92092),i=10,c=40,l=800;function o(e){var t=0,n=0,r=0,a=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=t*i,a=n*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||a)&&e.deltaMode&&(1==e.deltaMode?(r*=c,a*=c):(r*=l,a*=l)),r&&!t&&(t=r<1?-1:1),a&&!n&&(n=a<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:a}}o.getEventType=function(){return r.firefox()?"DOMMouseScroll":a("wheel")?"wheel":"mousewheel"},e.exports=o},85713:function(e,t,n){"use strict";function r(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function a(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function i(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return a(n.overflowY,t)||a(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function c(e,t,n,r,a,i,c,l){return i<e&&c>t||i>e&&c<t?0:i<=e&&l<=n||c>=t&&l>=n?i-e-r:c>t&&l<n||i<e&&l>n?c-t+a:0}n.d(t,{Z:function(){return m}});var l=function(e,t){var n=window,a=t.scrollMode,l=t.block,o=t.inline,s=t.boundary,u=t.skipOverflowHiddenElements,d="function"==typeof s?s:function(e){return e!==s};if(!r(e))throw new TypeError("Invalid target");for(var m,f,p=document.scrollingElement||document.documentElement,h=[],v=e;r(v)&&d(v);){if((v=null==(f=(m=v).parentElement)?m.getRootNode().host||null:f)===p){h.push(v);break}null!=v&&v===document.body&&i(v)&&!i(document.documentElement)||null!=v&&i(v,u)&&h.push(v)}for(var w=n.visualViewport?n.visualViewport.width:innerWidth,E=n.visualViewport?n.visualViewport.height:innerHeight,Z=window.scrollX||pageXOffset,g=window.scrollY||pageYOffset,x=e.getBoundingClientRect(),_=x.height,b=x.width,k=x.top,y=x.right,N=x.bottom,S=x.left,T="start"===l||"nearest"===l?k:"end"===l?N:k+_/2,F="center"===o?S+b/2:"end"===o?y:S,M=[],W=0;W<h.length;W++){var O=h[W],j=O.getBoundingClientRect(),C=j.height,I=j.width,H=j.top,V=j.right,D=j.bottom,X=j.left;if("if-needed"===a&&k>=0&&S>=0&&N<=E&&y<=w&&k>=H&&N<=D&&S>=X&&y<=V)return M;var z=getComputedStyle(O),Y=parseInt(z.borderLeftWidth,10),L=parseInt(z.borderTopWidth,10),U=parseInt(z.borderRightWidth,10),A=parseInt(z.borderBottomWidth,10),P=0,B=0,R="offsetWidth"in O?O.offsetWidth-O.clientWidth-Y-U:0,q="offsetHeight"in O?O.offsetHeight-O.clientHeight-L-A:0,K="offsetWidth"in O?0===O.offsetWidth?0:I/O.offsetWidth:0,$="offsetHeight"in O?0===O.offsetHeight?0:C/O.offsetHeight:0;if(p===O)P="start"===l?T:"end"===l?T-E:"nearest"===l?c(g,g+E,E,L,A,g+T,g+T+_,_):T-E/2,B="start"===o?F:"center"===o?F-w/2:"end"===o?F-w:c(Z,Z+w,w,Y,U,Z+F,Z+F+b,b),P=Math.max(0,P+g),B=Math.max(0,B+Z);else{P="start"===l?T-H-L:"end"===l?T-D+A+q:"nearest"===l?c(H,D,C,L,A+q,T,T+_,_):T-(H+C/2)+q/2,B="start"===o?F-X-Y:"center"===o?F-(X+I/2)+R/2:"end"===o?F-V+U+R:c(X,V,I,Y,U+R,F,F+b,b);var G=O.scrollLeft,J=O.scrollTop;T+=J-(P=Math.max(0,Math.min(J+P/$,O.scrollHeight-C/$+q))),F+=G-(B=Math.max(0,Math.min(G+B/K,O.scrollWidth-I/K+R)))}M.push({el:O,top:P,left:B})}return M};function o(e){return e===Object(e)&&0!==Object.keys(e).length}function s(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,a=e.top,i=e.left;r.scroll&&n?r.scroll({top:a,left:i,behavior:t}):(r.scrollTop=a,r.scrollLeft=i)}))}function u(e){return!1===e?{block:"end",inline:"nearest"}:o(e)?e:{block:"start",inline:"nearest"}}function d(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(o(t)&&"function"===typeof t.behavior)return t.behavior(n?l(e,t):[]);if(n){var r=u(t);return s(l(e,r),r.behavior)}}var m=d},23270:function(e){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),c=Object.keys(t);if(i.length!==c.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),o=0;o<i.length;o++){var s=i[o];if(!l(s))return!1;var u=e[s],d=t[s];if(a=n?n.call(r,u,d,s):void 0,!1===a||void 0===a&&u!==d)return!1}return!0}}}]);