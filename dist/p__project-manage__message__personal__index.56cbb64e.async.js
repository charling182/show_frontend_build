(self["webpackChunk"]=self["webpackChunk"]||[]).push([[157],{36814:function(e,t,n){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return a}})},440:function(e){e.exports={"b-image":"b-image___3MLKV",image:"image___OEWpO"}},11158:function(e){e.exports={"message-management-container":"message-management-container___2dObn","search-box":"search-box___2DLqX","search-input":"search-input___OS_KS","content-column":"content-column___3zRt3","content-username":"content-username___3Gv2q","wrap-content":"wrap-content___2-j3n","user-avatar":"user-avatar___lFtxO",username:"username___1jduW",content:"content___2ZjCi","project-name":"project-name___1msHV","task-name":"task-name___TwGIH",state:"state___1dBkm",redo:"redo___3KeP0",done:"done___3mOCB",pagination:"pagination___2Nyi7"}},48465:function(e,t,n){"use strict";n(90577);var a=n(31580),r=n(67294),c=n(440),i=n.n(c),o=e=>{var t=e.src,n=e.width,c=void 0===n?50:n,o=e.height,s=void 0===o?50:o,u=e.borderRadius,l=void 0===u?3:u;return r.createElement("div",{className:i()["b-image"]},r.createElement(a.Z,{src:t,className:i().image,style:{width:"".concat(c,"px"),height:"".concat(s,"px"),borderRadius:"".concat(l,"px")}}))};t["Z"]=o},73261:function(e,t,n){"use strict";n(91772);var a=n(12774),r=n(91896),c=(n(36805),n(70236)),i=(n(68137),n(50532)),o=(n(13753),n(48429)),s=(n(14643),n(92909)),u=n(11849),l=n(90636),d=n(3182),m=n(2824),_=n(67294),p=n(11158),v=n.n(p),f=n(30155),h=n(7511),Z=n(48465),g=e=>{var t=e.type,n=void 0===t?"mention":t,p=(0,h.tT)("@@initialState"),g=p.initialState,y=g||{},w=(0,_.useState)([]),k=(0,m.Z)(w,2),b=k[0],E=k[1],S=(0,_.useState)(!1),x=(0,m.Z)(S,2),C=x[0],O=x[1],j=(0,_.useState)({current:1,pageSize:10}),N=(0,m.Z)(j,2),z=N[0],K=N[1],L=(0,_.useState)(0),R=(0,m.Z)(L,2),T=R[0],B=R[1],H=(0,_.useState)(""),I=(0,m.Z)(H,2),q=I[0],G=I[1],M=(0,_.useState)(0),P=(0,m.Z)(M,2),V=P[0],W=P[1],D=(0,_.useState)({receiver_id:y.id,prop_order:"id",order:"desc",limit:z.pageSize,offset:(z.current-1)*z.pageSize,type:n,keyword:""}),F=(0,m.Z)(D,2),X=F[0],A=F[1],J=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){var t,n,a,r;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return O(!0),e.next=3,(0,f.xm)(X);case 3:t=e.sent,n=t.data,a=n.rows,r=n.count,B(r),E(a),O(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=e=>{K((0,u.Z)((0,u.Z)({},z),{},{current:e})),A((0,u.Z)((0,u.Z)({},X),{},{offset:(e-1)*z.pageSize}))},U=e=>{G(e.target.value),e.target.value||A((0,u.Z)((0,u.Z)({},X),{},{keyword:""}))},Y=e=>{G(e),A((0,u.Z)((0,u.Z)({},X),{},{keyword:e}))},$=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){var n,a;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,f.o6)((0,u.Z)((0,u.Z)({},t),{},{is_read:1}));case 2:n=e.sent,a=n.code,200===a&&(s.default.success("\u64cd\u4f5c\u6210\u529f"),W(V+1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=[{title:"\u5185\u5bb9",key:"content",render:(e,t)=>{var n;return _.createElement("div",{className:v()["content-column"]},_.createElement(Z.Z,{src:t.actor&&t.actor.avatar||"",width:32,height:32,borderRadius:32}),_.createElement("span",{className:v()["content-username"]},null===t||void 0===t||null===(n=t.actor)||void 0===n?void 0:n.username),_.createElement("span",{dangerouslySetInnerHTML:{__html:t.content}}))}},{title:"\u65f6\u95f4",dataIndex:"created_at",key:"created_at"},{title:"\u64cd\u4f5c",key:"action",render:(e,t)=>_.createElement("div",null,_.createElement(o.Z,{type:"link",onClick:()=>h.m8.push(t.url)},"\u67e5\u770b"),_.createElement(o.Z,{type:"link",disabled:1===t.is_read,onClick:()=>$(t)},1===t.is_read?"\u5df2\u8bfb":"\u6807\u8bb0\u4e3a\u5df2\u8bfb"))}];return(0,_.useEffect)((()=>{J()}),[V,X]),_.createElement("div",{className:v()["message-management-container"]},_.createElement("div",{className:v()["search-box"]},_.createElement(i.Z.Search,{className:v()["search-input"],value:q,onChange:U,placeholder:"\u8f93\u5165\u641c\u7d22\u5185\u5bb9",allowClear:!0,enterButton:"\u641c\u7d22",size:"middle",onSearch:Y})),_.createElement(c.Z,{dataSource:b,columns:ee,rowKey:"id",loading:C,pagination:!1}),_.createElement("div",{className:v().pagination},_.createElement(a.Z,(0,r.Z)({},z,{total:T,onChange:Q}))))};t["Z"]=g},90347:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(73261),c=()=>a.createElement(r.Z,{type:"personal"});c.menu={name:"\u79c1\u4fe1",icon:"LineChartOutlined"},c.order=3,t["default"]=c},23270:function(e){e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var c=Object.keys(e),i=Object.keys(t);if(c.length!==i.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),s=0;s<c.length;s++){var u=c[s];if(!o(u))return!1;var l=e[u],d=t[u];if(r=n?n.call(a,l,d,u):void 0,!1===r||void 0===r&&l!==d)return!1}return!0}}}]);