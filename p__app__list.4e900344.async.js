(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[316],{5966:function(U,C,t){"use strict";var f=t(67294),m=t(49085),R=["fieldProps","proFieldProps"],s=["fieldProps","proFieldProps"];function p(){return p=Object.assign||function(_){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(_[l]=c[l])}return _},p.apply(this,arguments)}function E(_,a){if(_==null)return{};var c=F(_,a),l,d;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(_);for(d=0;d<h.length;d++)l=h[d],!(a.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,l)||(c[l]=_[l]))}return c}function F(_,a){if(_==null)return{};var c={},l=Object.keys(_),d,h;for(h=0;h<l.length;h++)d=l[h],!(a.indexOf(d)>=0)&&(c[d]=_[d]);return c}var M="text",x=function(a){var c=a.fieldProps,l=a.proFieldProps,d=E(a,R);return f.createElement(m.Z,p({mode:"edit",valueType:M,fieldProps:c,filedConfig:{valueType:M},proFieldProps:l},d))},T=function(a){var c=a.fieldProps,l=a.proFieldProps,d=E(a,s);return f.createElement(m.Z,p({mode:"edit",valueType:"password",fieldProps:c,proFieldProps:l,filedConfig:{valueType:M}},d))},O=x;O.Password=T,O.displayName="ProFormComponent",C.Z=O},36728:function(U,C,t){"use strict";t.r(C);var f=t(71153),m=t(60331),R=t(84305),s=t(69224),p=t(57663),E=t(71577),F=t(13254),M=t(14277),x=t(59250),T=t(13013),O=t(37730),_=t(30887),a=t(99210),c=t(34792),l=t(48086),d=t(33565),h=t(57254),L=t(49101),g=t(67294),I=t(21010),A=t(19797),K=t(93660),y=t(84744),S=t(16514),B=t(5966),n=t(85893),W=function(r){var v,P,e,b=r.route.name==="all",Y=(0,g.useState)({lastBuild:{show:!1},pushBuild:{show:!1}}),w=(0,d.Z)(Y,2),G=w[0],k=w[1];function H(D){j.current=D,Z(!0)}var N=(0,g.useRef)(),Q=(0,g.useState)(!1),$=(0,d.Z)(Q,2),z=$[0],Z=$[1],j=g.useRef(null),V=g.useRef(),J=(0,I.QT)(y.IV,{manual:!0,onSuccess:function(){l.default.success("\u5220\u9664\u6210\u529F"),Z(!1),N.current.reload()},onError:function(i){var o=i.data.errorMessage;l.default.error(o),Z(!1)}}),X=function(i){return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(a.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){return I.m8.push("/app/edit/"+i.id)},children:"\u7F16\u8F91"})}),(0,n.jsx)(a.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){return I.m8.push("/app/update/"+i.id)},children:"\u66F4\u65B0\u9009\u9879"})}),(0,n.jsx)(a.Z.Divider,{}),(0,n.jsx)(a.Z.Item,{danger:!0,onClick:function(){return H(i)},children:"\u5220\u9664"})]})},q=[{title:"\u5E94\u7528\u540D",dataIndex:"appName",key:"appName",render:function(i,o){return(0,n.jsx)("a",{onClick:function(){return I.m8.push("/app/detail/"+o.id)},children:i})}}].concat((0,O.Z)(b?[{title:"\u7528\u6237",dataIndex:"userId",key:"userId",copyable:!0,render:function(i,o){return(0,n.jsxs)(n.Fragment,{children:[o.nick," (",o.email,")"]})}}]:[]),[{title:"\u5E94\u7528ID",dataIndex:"appId",key:"appId",copyable:!0},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5",status:"Warning"},1:{text:"\u6B63\u5E38",status:"Success"},2:{text:"\u5BA1\u6838\u4E2D",status:"Processing"},3:{text:"\u5BA1\u6838\u672A\u901A\u8FC7",status:"Error"},4:{text:"\u7981\u6B62",status:"Error"},5:{text:"\u7B49\u5F85\u5220\u9664",status:"Warning"},6:{text:"\u8FDD\u89C4\u5C01\u7981",status:"Error"},7:{text:"\u6B63\u5E38-\u5F85\u5BA1\u6838",status:"Processing"}}},{title:"\u7248\u672C\u6570",dataIndex:"versionCount",key:"versionCount",hideInSearch:!0,width:"70px"},{title:"\u6700\u65B0\u7248\u672C",dataIndex:"lastBuild",hideInSearch:!0,render:function(i,o){return i==="-"?i:(0,n.jsxs)(n.Fragment,{children:[o.lastBuildName," (",i,")"]})}},{title:"\u63A8\u9001\u7248\u672C",dataIndex:"pushBuild",hideInSearch:!0,render:function(i,o){return i==="-"?i:(0,n.jsxs)(n.Fragment,{children:[o.pushBuildName," (",i,")"]})}},{title:"\u53EF\u89C1",dataIndex:"visible",key:"visible",valueType:"switch",hideInSearch:!0},{title:"\u64CD\u4F5C",key:"action",hideInSearch:!0,render:function(i,o){return(0,n.jsx)(T.Z,{overlay:X(o),children:(0,n.jsxs)("a",{className:"ant-dropdown-link",onClick:function(te){return te.preventDefault()},children:["\u64CD\u4F5C",(0,n.jsx)(h.Z,{})]})})}}]);return(0,n.jsxs)(A.ZP,{children:[(0,n.jsx)(s.ZP,{renderEmpty:function(){return(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(M.Z,{image:M.Z.PRESENTED_IMAGE_SIMPLE,description:(0,n.jsxs)("span",{children:["\u6682\u65F6\u6CA1\u6709\u5E94\u7528\u54E6\uFF0C\u53EF\u4EE5\u53BB",(0,n.jsx)("a",{href:"#/app/add",children:"\u521B\u5EFA\u4E00\u4E2A"})]})})})},children:(0,n.jsx)(K.ZP,{sticky:{offsetHeader:47},headerTitle:"\u5E94\u7528\u5217\u8868",actionRef:N,rowKey:"id",search:{filterType:"light",labelWidth:120},toolBarRender:function(){return[(0,n.jsxs)(E.Z,{type:"primary",onClick:function(){I.m8.push("/app/add")},children:[(0,n.jsx)(L.Z,{})," \u65B0\u589E\u5E94\u7528"]},"primary")]},scroll:{x:600},request:b?y.aF:y.pb,options:{fullScreen:!0,reload:!0,setting:!0},columns:q,columnsState:{value:G,onChange:k}})}),(0,n.jsxs)(S.Z,{title:"\u786E\u8BA4\u5220\u9664",width:400,formRef:V,modalProps:{afterClose:function(){var i;(i=V.current)===null||i===void 0||i.resetFields()}},visible:z,onVisibleChange:Z,onFinish:function(i){var o;return J.run({id:(o=j.current)===null||o===void 0?void 0:o.id})},children:[(0,n.jsx)("p",{children:"\u5220\u9664\u540E\u5C06\u670930\u5929\u7684\u4FDD\u7559\u671F\uFF0C\u671F\u95F4\u65E0\u6CD5\u518D\u521B\u5EFA\u5E94\u7528ID\u76F8\u540C\u7684\u5E94\u7528\u3002"}),(0,n.jsxs)("p",{children:["\u8BF7\u8F93\u5165\xA0",(0,n.jsx)(m.Z,{children:(v=j.current)===null||v===void 0?void 0:v.appId}),"\u4EE5\u786E\u8BA4\u5220\u9664"]}),(0,n.jsx)(B.Z,{name:"confirm",placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528ID\u4EE5\u786E\u8BA4\u5220\u9664",style:{marginTop:5},rules:[{type:"enum",required:!0,enum:[(P=j.current)===null||P===void 0?void 0:P.appId],message:"\u8BF7\u8F93\u5165 "+((e=j.current)===null||e===void 0?void 0:e.appId)+" \u4EE5\u786E\u8BA4\u5220\u9664"}]})]})]})};C.default=W},84744:function(U,C,t){"use strict";t.d(C,{w$:function(){return F},pb:function(){return M},aF:function(){return T},Nm:function(){return _},rZ:function(){return c},yC:function(){return d},h$:function(){return L},wW:function(){return I},eP:function(){return K},IH:function(){return S},IV:function(){return n}});var f=t(96132),m=t(57361),R=t(9754),s=t.n(R),p=t(18811),E=t(21010),F={UNKNOWN:0,NORMAL:1,PENDING:2,FAILED:3,DISABLED:4,DELETED:5,BANNED:6,CHANGED:7,getText:function(r){return["\u672A\u77E5","\u6B63\u5E38","\u5BA1\u6838\u4E2D","\u5BA1\u6838\u672A\u901A\u8FC7","\u5DF2\u4E0B\u67B6","\u7B49\u5F85\u5220\u9664","\u8FDD\u89C4\u5C01\u7981","\u6B63\u5E38-\u5F85\u5BA1\u6838"][r]},getColor:function(r){return["#a8071a","#237804","#0050b3","#a8071a","#faad14","#a8071a","#a8071a","#0050b3"][r]}};function M(u,r){return x.apply(this,arguments)}function x(){return x=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/getList",{method:"POST",params:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),x.apply(this,arguments)}function T(u,r){return O.apply(this,arguments)}function O(){return O=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/getAll",{method:"POST",params:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),O.apply(this,arguments)}function _(u,r){return a.apply(this,arguments)}function a(){return a=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/getDetail",{method:"POST",params:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),a.apply(this,arguments)}function c(u,r){return l.apply(this,arguments)}function l(){return l=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/getStatistic",{method:"POST",params:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),l.apply(this,arguments)}function d(u,r){return h.apply(this,arguments)}function h(){return h=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/search",{method:"POST",params:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),h.apply(this,arguments)}function L(u,r){return g.apply(this,arguments)}function g(){return g=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/disable",{method:"POST",params:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),g.apply(this,arguments)}function I(u,r){return A.apply(this,arguments)}function A(){return A=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/edit",{method:"GET",params:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),A.apply(this,arguments)}function K(u,r){return y.apply(this,arguments)}function y(){return y=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/edit",{method:"POST",data:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),y.apply(this,arguments)}function S(u,r){return B.apply(this,arguments)}function B(){return B=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/add",{method:"POST",data:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),B.apply(this,arguments)}function n(u,r){return W.apply(this,arguments)}function W(){return W=(0,m.Z)(s().mark(function u(r,v){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,E.WY)(p.s3+"app/delete",{method:"POST",data:(0,f.Z)({},r),credentials:"include"}));case 1:case"end":return e.stop()}},u)})),W.apply(this,arguments)}}}]);
