(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1500],{78311:function(N,h,e){"use strict";e.r(h);var x=e(3515),A=e(86288),U=e(13254),i=e(14277),c=e(96132),W=e(22385),p=e(69713),j=e(37730),P=e(33565),I=e(21349),r=e(23723),u=e(67294),o=e(84787),E=e(53266),y=e.n(E),R=e(89901),_=e(88563),m=e(16894),l=e(63430),a=e(56905),b=e(27368),Z=e(13718),n=e(85893),t="OICq";function L(O){for(var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,s=O.indexOf("/"),d=0;d<D&&s!==-1;d++)s=O.indexOf("/",s+1);return s!==-1?O.substr(0,s):O}var B=function(D){var s,d,S,V,F,C=D.showAll,K=D.userId,z=u.useState("hour"),G=(0,P.Z)(z,2),g=G[0],Q=G[1];u.useEffect(function(){T.run(),g==="hour"?v.reset():v.run()},[K]);var T=(0,_.QT)(function(){return C?(0,a.Pf)({hour:!0,base:!0,userId:K}):(0,a.s8)({hour:!0,base:!0})},{manual:!0}),v=(0,_.QT)(function(){return C?(0,a.Pf)({month:!0,userId:K}):(0,a.s8)({month:!0})},{manual:!0}),k=[{title:"\u5E94\u7528\u540D",dataIndex:"appName",key:"appName",render:function(M,f){return(0,n.jsx)(p.Z,{placement:"top",title:f.appId,_nk:"".concat(t,"11"),children:(0,n.jsx)(R.rU,{to:L(_.m8.location.pathname)+"/"+f.id,_nk:"".concat(t,"21"),children:M})})}}].concat((0,j.Z)(C?[{title:"\u7528\u6237",dataIndex:"userId",key:"userId",copyable:!0,render:function(M,f){return(0,n.jsxs)(n.Fragment,{children:[f.nick," (",f.email,")"]})}}]:[]),[{title:"\u6D3B\u8DC3\u5EA6",dataIndex:"active",key:"active",hideInSearch:!0},{title:"\u5E73\u5747\u6D3B\u8DC3\u8BBE\u5907",dataIndex:"device",key:"device",hideInSearch:!0},{title:"\u542F\u52A8\u6B21\u6570",dataIndex:"count",key:"count",hideInSearch:!0}]),X={appendPadding:10,height:400,data:g==="hour"?((s=T.data)===null||s===void 0?void 0:s.hour.rank)||[]:((d=v.data)===null||d===void 0?void 0:d.month.rank)||[],angleField:"value",colorField:"type",radius:.8,loading:g==="hour"?T.loading:v.loading,label:{type:"outer",content:"{name} {percentage}"},onReady:function(M){M.on("element:click",function(f){_.m8.push(L(_.m8.location.pathname)+"/"+f.data.data.id)})},interactions:[{type:"pie-legend-active"},{type:"element-active"}]},Y=(0,n.jsxs)(o.ZP,{split:"horizontal",_nk:"".concat(t,"31"),children:[(0,n.jsx)(o.ZP,{bodyStyle:{padding:0},style:{marginTop:10},_nk:"".concat(t,"32"),children:(0,n.jsx)(m.ZP,{headerTitle:"\u6D3B\u8DC3\u5E94\u7528\u5217\u8868",params:(0,c.Z)((0,c.Z)({},g==="hour"?{type:1}:{type:2}),C?{userId:K}:{}),rowKey:"id",search:!1,request:C?a.Up:a.IX,scroll:{x:600},options:{fullScreen:!0,reload:!0,setting:!0},columns:k,_nk:"".concat(t,"41")})}),(0,n.jsx)(o.ZP,{title:"TOP10\u6D3B\u8DC3\u5E94\u7528",collapsible:!0,style:{position:"relative"},bodyStyle:{height:"auto"},_nk:"".concat(t,"33"),children:(g==="hour"?(((S=T.data)===null||S===void 0?void 0:S.hour.rank)||[]).length===0:(((V=v.data)===null||V===void 0?void 0:V.month.rank)||[]).length===0)?(0,n.jsx)(i.Z,{image:i.Z.PRESENTED_IMAGE_SIMPLE,_nk:"".concat(t,"51")}):(0,n.jsx)(l.Z,(0,c.Z)((0,c.Z)({},X),{},{_nk:"".concat(t,"61")}))})]});return(0,n.jsx)(I.Z,{_nk:"".concat(t,"71"),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(r.Z,{_nk:"".concat(t,"91")}),_nk:"".concat(t,"81"),children:(0,n.jsx)(b.Z,{loading:T.loading,active:(F=T.data)===null||F===void 0?void 0:F.base,_nk:"".concat(t,"a1")})}),(0,n.jsxs)(u.Suspense,{fallback:(0,n.jsx)(r.Z,{_nk:"".concat(t,"92")}),_nk:"".concat(t,"82"),children:[(0,n.jsx)(A.Z,{offsetTop:Z.M,style:{overflow:"hidden"},_nk:"".concat(t,"b1"),children:(0,n.jsxs)(o.ZP,{className:y().tabs,tabs:{tabPosition:"top",size:"large",activeKey:g,onChange:function(M){Q(M),M==="month"&&!v.data&&!v.loading&&v.run()}},style:{boxShadow:"0 0 5px #00000044"},_nk:"".concat(t,"34"),children:[(0,n.jsx)(o.ZP.TabPane,{tab:"24\u5C0F\u65F6\u62A5",cardProps:{bodyStyle:{padding:0}},_nk:"".concat(t,"83")},"hour"),(0,n.jsx)(o.ZP.TabPane,{tab:"\u6708\u62A5",cardProps:{bodyStyle:{padding:0}},_nk:"".concat(t,"84")},"month")]})}),(0,n.jsx)(o.ZP,{bodyStyle:{padding:0},_nk:"".concat(t,"35"),children:Y})]})]})})};h.default=B},26751:function(N,h,e){"use strict";e.r(h);var x=e(33565),A=e(57361),U=e(9754),i=e.n(U),c=e(19797),W=e(78311),p=e(67294),j=e(49466),P=e(65476),I=e(6637),r=e(88563),u=e(85893),o="+N0q";function E(_){return y.apply(this,arguments)}function y(){return y=(0,A.Z)(i().mark(function _(m){return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,I.y)({search:m}));case 1:case"end":return a.stop()}},_)})),y.apply(this,arguments)}function R(_){for(var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,l=_.indexOf("/"),a=0;a<m&&l!==-1;a++)l=_.indexOf("/",l+1);return l!==-1?_.substr(0,l):_}h.default=function(_){var m=_.route.name==="all-instance",l=(0,r.tT)("admin"),a=l.selectedUser,b=l.setData,Z=(0,p.useState)(a.value),n=(0,x.Z)(Z,2),t=n[0],L=n[1],B=p.useRef(""),O=function(s){B.current=s};return(0,u.jsx)(c.ZP,{tabList:[{tab:"\u6982\u89C8",key:"overview"},{tab:"\u8BE6\u7EC6\u8D8B\u52BF",key:"detail"}],tabActiveKey:_.location.pathname.substr(-8)==="instance"?"overview":"detail",content:m&&(0,u.jsxs)(u.Fragment,{children:["\u5F00\u53D1\u8005\uFF1A",(0,u.jsx)(P.Z,{showAll:!0,showSearch:!0,placeholder:"\u9009\u62E9\u7528\u6237",setMyOption:[a],fetchOptions:E,defaultValue:t,style:{width:"250px"},onChange:function(s,d){L(s),b({label:d.label,value:d.value})},_nk:"".concat(o,"21")})]}),onTabChange:function(s){s==="overview"?r.m8.push(R(r.m8.location.pathname)):r.m8.push(R(r.m8.location.pathname)+"/"+B.current)},_nk:"".concat(o,"11"),children:p.cloneElement(_.children,{showAll:m,userId:t,setAppId:O})})}},6637:function(N,h,e){"use strict";e.d(h,{y:function(){return j}});var x=e(96132),A=e(57361),U=e(9754),i=e.n(U),c=e(18811),W=e(88563),p="TBw+";function j(I,r){return P.apply(this,arguments)}function P(){return P=(0,A.Z)(i().mark(function I(r,u){return i().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,W.WY)(c.s3+"user/search",{method:"POST",params:(0,x.Z)({},r),credentials:"include"}));case 1:case"end":return E.stop()}},I)})),P.apply(this,arguments)}}}]);
