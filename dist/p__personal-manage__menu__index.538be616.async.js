(self["webpackChunk"]=self["webpackChunk"]||[]).push([[559],{36814:function(e,t,n){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return a}})},69337:function(e){e.exports={"menu-management":"menu-management___3ZPK0",header:"header___WPgip",pagination:"pagination___LqOJu"}},43403:function(e,t,n){"use strict";n.r(t);n(91772);var a=n(12774),r=(n(36805),n(70236)),i=(n(25324),n(45733)),o=(n(13753),n(48429)),c=(n(14643),n(92909)),l=n(90636),u=n(3182),d=n(11849),s=n(2824),p=(n(26780),n(86444)),f=n(67294),m=n(87588),Z=n(88284),h=n(30155),k=n(69337),y=n.n(k),g=p.Z.confirm,x=()=>{var e=(0,f.useState)([]),t=(0,s.Z)(e,2),n=t[0],p=t[1],k=(0,f.useState)(!0),x=(0,s.Z)(k,2),w=x[0],v=x[1],S=(0,f.useState)(0),C=(0,s.Z)(S,2),E=C[0],_=C[1],I=(0,f.useState)([]),z=(0,s.Z)(I,2),b=z[0],N=z[1],O=(0,f.useState)({prop_order:"",order:"",pageNo:1,pageSize:5,keyword:""}),j=(0,s.Z)(O,2),A=j[0],D=j[1],F=(0,f.useState)(0),P=(0,s.Z)(F,2),K=P[0],R=P[1],q=(0,f.useState)({}),J=(0,s.Z)(q,2),L=(J[0],J[1]),T=(0,f.useState)(!1),W=(0,s.Z)(T,2),B=(W[0],W[1],(0,f.useState)(!1)),G=(0,s.Z)(B,2),H=(G[0],G[1],(e,t)=>{D((0,d.Z)((0,d.Z)({},A),{},{pageNo:e,pageSize:t}))}),M=(e,t)=>{D((0,d.Z)((0,d.Z)({},A),{},{pageNo:1,pageSize:t}))},Q=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(){var t,n,a,r,i,o;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return v(!0),t=A.pageSize,n=A.pageNo,e.next=4,(0,h.Af)((0,d.Z)((0,d.Z)({},A),{},{limit:t,offset:(n-1)*t}));case 4:a=e.sent,r=a.data,i=r.rows,o=r.count,p(i),_(o),v(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=e=>{e&&e.id&&L(e)},V=e=>{if(e.id)g({title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u5f53\u524d\u9879\u5417?",icon:f.createElement(m.Z,null),onOk:function(){var t=(0,u.Z)((0,l.Z)().mark((function t(){return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,h.RD)({ids:[e.id]});case 2:c.default.success("\u5220\u9664\u6210\u529f"),R(K+1);case 4:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()});else{if(!(b.length>0))return c.default.error("\u672a\u9009\u4e2d\u4efb\u4f55\u884c"),!1;var t=b.map((e=>e.id));g({title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u9009\u4e2d\u9879\u5417?",icon:f.createElement(m.Z,null),onOk:function(){var e=(0,u.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,h.RD)({ids:t});case 2:c.default.success("\u5220\u9664\u6210\u529f"),R(K+1);case 4:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()})}};(0,f.useEffect)((()=>{Q()}),[A,K]);var X=[{title:"\u8def\u7531title",dataIndex:"title",key:"title",width:"160px",fixed:"left"},{title:"\u8def\u7531\u540d",dataIndex:"name",key:"name"},{title:"\u7236ID",dataIndex:"parent_id",key:"parent_id"},{title:"\u56fe\u6807url",dataIndex:"icon",key:"icon"},{title:"\u8def\u7531\u8def\u5f84",dataIndex:"path",key:"path"},{title:"\u662f\u5426\u9690\u85cf",dataIndex:"hidden",key:"hidden",render:e=>f.createElement(Z.Z,{style:{color:1===e?"#67C23A":"#F56C6C",fontSize:"24px"}})},{title:"\u603b\u662f\u663e\u793a",dataIndex:"always_show",key:"always_show",render:e=>f.createElement(Z.Z,{style:{color:1===e?"#67C23A":"#F56C6C",fontSize:"24px"}})},{title:"\u7f13\u5b58",dataIndex:"keep_alive",key:"keep_alive",render:e=>f.createElement(Z.Z,{style:{color:1===e?"#67C23A":"#F56C6C",fontSize:"24px"}})},{title:"target",dataIndex:"target",key:"target",width:"80px"},{title:"\u5bf9\u5e94\u7ec4\u4ef6",dataIndex:"component",key:"component"},{title:"\u8def\u7531\u91cd\u5b9a\u5411",dataIndex:"redirect",key:"redirect",width:"130px"},{title:"\u6392\u5e8f",dataIndex:"sort",key:"sort"},{title:"\u64cd\u4f5c",key:"operation",fixed:"right",width:"200",render:(e,t)=>f.createElement(i.Z,{size:"middle"},f.createElement(o.Z,{type:"link",onClick:()=>U(t,!0)},"\u6dfb\u52a0\u4e0b\u7ea7\u83dc\u5355"),f.createElement(o.Z,{type:"link",onClick:()=>U(t)},"\u7f16\u8f91"),f.createElement(o.Z,{type:"link",onClick:()=>V(t)},"\u5220\u9664"))}];return f.createElement("div",{className:y()["menu-management"]},f.createElement("div",{className:y().header},f.createElement(i.Z,null,f.createElement(o.Z,{type:"primary",onClick:()=>U({},!0)},"\u65b0\u5efa\u83dc\u5355"),f.createElement(o.Z,{danger:!0,onClick:()=>V({})},"\u6279\u91cf\u5220\u9664"))),f.createElement(r.Z,{columns:X,rowSelection:{onChange:(e,t)=>{N(t)}},loading:w,dataSource:n,rowKey:"id",pagination:!1,scroll:{x:"max-content"}}),f.createElement(a.Z,{className:y().pagination,current:A.pageNo,pageSize:A.pageSize,total:E,onChange:H,onShowSizeChange:M}))};t["default"]=x},23270:function(e){e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!c(u))return!1;var d=e[u],s=t[u];if(r=n?n.call(a,d,s,u):void 0,!1===r||void 0===r&&d!==s)return!1}return!0}}}]);