(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4316],{5966:function(Z,O,t){"use strict";var f=t(67294),c=t(45514),j=["fieldProps","proFieldProps"],s=["fieldProps","proFieldProps"];function p(){return p=Object.assign||function(_){for(var o=1;o<arguments.length;o++){var d=arguments[o];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(_[l]=d[l])}return _},p.apply(this,arguments)}function m(_,o){if(_==null)return{};var d=S(_,o),l,i;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(_);for(i=0;i<P.length;i++)l=P[i],!(o.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,l)||(d[l]=_[l]))}return d}function S(_,o){if(_==null)return{};var d={},l=Object.keys(_),i,P;for(P=0;P<l.length;P++)i=l[P],!(o.indexOf(i)>=0)&&(d[i]=_[i]);return d}var g="text",L=function(o){var d=o.fieldProps,l=o.proFieldProps,i=m(o,j);return f.createElement(c.Z,p({mode:"edit",valueType:g,fieldProps:d,filedConfig:{valueType:g},proFieldProps:l},i))},M=function(o){var d=o.fieldProps,l=o.proFieldProps,i=m(o,s);return f.createElement(c.Z,p({mode:"edit",valueType:"password",fieldProps:d,proFieldProps:l,filedConfig:{valueType:g}},i))},I=L;I.Password=M,I.displayName="ProFormComponent",O.Z=I},36728:function(Z,O,t){"use strict";t.r(O);var f=t(71153),c=t(60331),j=t(84305),s=t(26072),p=t(57663),m=t(71577),S=t(13254),g=t(14277),L=t(59250),M=t(13013),I=t(37730),_=t(30887),o=t(14289),d=t(34792),l=t(48086),i=t(33565),P=t(57254),x=t(49101),D=t(67294),y=t(21010),C=t(73727),A=t(19797),K=t(16894),T=t(84744),b=t(8890),B=t(5966),k=t(13718),W=t(74865),a=t.n(W),e=t(85893),r="MIV4",v=function(z){var w,$,N,Y=z.route.name==="all",J=(0,D.useState)({lastBuild:{show:!1},pushBuild:{show:!1}}),G=(0,i.Z)(J,2),q=G[0],ee=G[1];function ne(E){R.current=E,U(!0)}var H=(0,D.useRef)(),F=(0,D.useRef)(),te=(0,D.useState)(!1),Q=(0,i.Z)(te,2),re=Q[0],U=Q[1],R=D.useRef(null),V=D.useRef(!0),X=D.useRef(),ae=(0,y.QT)(T.IV,{manual:!0,onSuccess:function(){l.default.success("\u5220\u9664\u6210\u529F"),U(!1),F.current.reload()},onError:function(u){var h=u.data.errorMessage;l.default.error(h),U(!1)}});(0,y.Gs)(function(){y.m8.action==="PUSH"&&F.current.reload()});var ue=function(u){return(0,e.jsxs)(o.Z,{_nk:"".concat(r,"11"),children:[(0,e.jsx)(o.Z.Item,{_nk:"".concat(r,"21"),children:(0,e.jsx)(C.rU,{to:"/app/edit/"+u.id,_nk:"".concat(r,"31"),children:"\u7F16\u8F91"})},"edit"),(0,e.jsx)(o.Z.Item,{_nk:"".concat(r,"22"),children:(0,e.jsx)(C.rU,{to:"/app/update/"+u.id,_nk:"".concat(r,"32"),children:"\u66F4\u65B0\u9009\u9879"})},"update"),(0,e.jsx)(o.Z.Divider,{_nk:"".concat(r,"23")}),(0,e.jsx)(o.Z.Item,{danger:!0,onClick:function(){return ne(u)},_nk:"".concat(r,"24"),children:"\u5220\u9664"},"delete")]})},se=[{title:"\u5E94\u7528\u540D",dataIndex:"appName",key:"appName",render:function(u,h){return(0,e.jsx)(C.rU,{to:"/app/detail/"+h.id,_nk:"".concat(r,"33"),children:u})},hideInSearch:!0}].concat((0,I.Z)(Y?[{title:"\u7528\u6237",dataIndex:"userId",key:"userId",copyable:!0,render:function(u,h){return(0,e.jsxs)(e.Fragment,{children:[h.nick," (",h.email,")"]})},hideInSearch:!0}]:[]),[{title:"\u5E94\u7528ID",dataIndex:"appId",key:"appId",copyable:!0,hideInSearch:!0},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5",status:"Warning"},1:{text:"\u6B63\u5E38",status:"Success"},2:{text:"\u5BA1\u6838\u4E2D",status:"Processing"},3:{text:"\u5BA1\u6838\u672A\u901A\u8FC7",status:"Error"},4:{text:"\u5DF2\u4E0B\u67B6",status:"Warning"},5:{text:"\u7B49\u5F85\u5220\u9664",status:"Warning"},6:{text:"\u8FDD\u89C4\u5C01\u7981",status:"Error"},7:{text:"\u6B63\u5E38-\u5F85\u5BA1\u6838",status:"Processing"}}},{title:"\u7248\u672C\u6570",dataIndex:"versionCount",key:"versionCount",hideInSearch:!0,width:"70px"},{title:"\u6700\u65B0\u7248\u672C",dataIndex:"lastBuild",hideInSearch:!0,render:function(u,h){return u==="-"?u:(0,e.jsxs)(e.Fragment,{children:[h.lastBuildName," (",u,")"]})}},{title:"\u53EF\u89C1",dataIndex:"visible",key:"visible",valueType:"switch",hideInSearch:!0},{title:"\u64CD\u4F5C",key:"action",hideInSearch:!0,render:function(u,h){return(0,e.jsx)(M.Z,{overlay:ue(h),_nk:"".concat(r,"41"),children:(0,e.jsxs)("a",{className:"ant-dropdown-link",onClick:function(oe){return oe.preventDefault()},_nk:"".concat(r,"51"),children:["\u64CD\u4F5C",(0,e.jsx)(P.Z,{_nk:"".concat(r,"61")})]})})}}]);return(0,e.jsxs)(A.ZP,{_nk:"".concat(r,"71"),children:[(0,e.jsx)(s.ZP,{renderEmpty:function(){return(0,e.jsx)("div",{style:{textAlign:"center"},_nk:"".concat(r,"91"),children:V.current?(0,e.jsx)("span",{_nk:"".concat(r,"a1"),children:"\u6B63\u5728\u52A0\u8F7D..."}):(0,e.jsx)(g.Z,{image:g.Z.PRESENTED_IMAGE_SIMPLE,description:(0,e.jsxs)("span",{_nk:"".concat(r,"a2"),children:["\u6682\u65F6\u6CA1\u6709\u5E94\u7528\u54E6\uFF0C\u53EF\u4EE5\u53BB",(0,e.jsx)(C.rU,{to:"/app/add",_nk:"".concat(r,"34"),children:"\u521B\u5EFA\u4E00\u4E2A"})]}),_nk:"".concat(r,"b1")})})},_nk:"".concat(r,"81"),children:(0,e.jsx)(K.ZP,{sticky:{offsetHeader:k.M},headerTitle:"\u5E94\u7528\u5217\u8868",actionRef:F,rowKey:"id",loading:!1,search:{filterType:"light",labelWidth:120},onLoad:function(){V.current=!1,a().done()},onLoadingChange:function(u){V.current=!0,a().start()},toolbar:{search:{onSearch:function(u){H.current=u,F.current.reload()},placeholder:"\u901A\u8FC7\u5E94\u7528\u540D\u6216id\u641C\u7D22",allowClear:!0}},toolBarRender:function(){return[(0,e.jsx)(C.rU,{to:"/app/add",_nk:"".concat(r,"35"),children:(0,e.jsxs)(m.Z,{type:"primary",_nk:"".concat(r,"d1"),children:[(0,e.jsx)(x.Z,{_nk:"".concat(r,"e1")})," \u65B0\u589E\u5E94\u7528"]})},"primary")]},scroll:{x:600},request:function(u){return u.search=H.current,Y?(0,T.aF)(u):(0,T.pb)(u)},options:{fullScreen:!0,reload:!0,setting:!0},columns:se,columnsState:{value:q,onChange:ee},_nk:"".concat(r,"c1")})}),(0,e.jsxs)(b.Z,{title:"\u786E\u8BA4\u5220\u9664",width:400,formRef:X,modalProps:{afterClose:function(){var u;(u=X.current)===null||u===void 0||u.resetFields()}},visible:re,onVisibleChange:U,onFinish:function(u){var h;return ae.run({id:(h=R.current)===null||h===void 0?void 0:h.id})},_nk:"".concat(r,"f1"),children:[(0,e.jsx)("p",{_nk:"".concat(r,"g1"),children:"\u5220\u9664\u540E\u5C06\u670930\u5929\u7684\u4FDD\u7559\u671F\uFF0C\u671F\u95F4\u65E0\u6CD5\u518D\u521B\u5EFA\u5E94\u7528ID\u76F8\u540C\u7684\u5E94\u7528\u3002"}),(0,e.jsxs)("p",{_nk:"".concat(r,"g2"),children:["\u8BF7\u8F93\u5165\xA0",(0,e.jsx)(c.Z,{_nk:"".concat(r,"h1"),children:(w=R.current)===null||w===void 0?void 0:w.appId}),"\u4EE5\u786E\u8BA4\u5220\u9664"]}),(0,e.jsx)(B.Z,{name:"confirm",placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528ID\u4EE5\u786E\u8BA4\u5220\u9664",style:{marginTop:5},rules:[{type:"enum",required:!0,enum:[($=R.current)===null||$===void 0?void 0:$.appId],message:"\u8BF7\u8F93\u5165 "+((N=R.current)===null||N===void 0?void 0:N.appId)+" \u4EE5\u786E\u8BA4\u5220\u9664"}],_nk:"".concat(r,"i1")})]})]})};O.default=v},13718:function(Z,O,t){"use strict";t.d(O,{M:function(){return c}});var f="ojP7",c=60},84744:function(Z,O,t){"use strict";t.d(O,{w$:function(){return g},pb:function(){return L},aF:function(){return I},Nm:function(){return o},rZ:function(){return l},yC:function(){return P},h$:function(){return D},wW:function(){return C},eP:function(){return K},IH:function(){return b},IV:function(){return k}});var f=t(96132),c=t(57361),j=t(9754),s=t.n(j),p=t(18811),m=t(21010),S="7PXW",g={UNKNOWN:0,NORMAL:1,PENDING:2,FAILED:3,DISABLED:4,DELETED:5,BANNED:6,CHANGED:7,getText:function(e){return["\u672A\u77E5","\u6B63\u5E38","\u5BA1\u6838\u4E2D","\u5BA1\u6838\u672A\u901A\u8FC7","\u5DF2\u4E0B\u67B6","\u7B49\u5F85\u5220\u9664","\u8FDD\u89C4\u5C01\u7981","\u6B63\u5E38-\u5F85\u5BA1\u6838"][e]},getColor:function(e){return["#a8071a","#237804","#0050b3","#a8071a","#faad14","#a8071a","#a8071a","#0050b3"][e]}};function L(a,e){return M.apply(this,arguments)}function M(){return M=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/getList",{method:"POST",params:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),M.apply(this,arguments)}function I(a,e){return _.apply(this,arguments)}function _(){return _=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/getAll",{method:"POST",params:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),_.apply(this,arguments)}function o(a,e){return d.apply(this,arguments)}function d(){return d=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/getDetail",{method:"POST",params:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),d.apply(this,arguments)}function l(a,e){return i.apply(this,arguments)}function i(){return i=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/getStatistic",{method:"POST",params:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),i.apply(this,arguments)}function P(a,e){return x.apply(this,arguments)}function x(){return x=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/search",{method:"POST",params:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),x.apply(this,arguments)}function D(a,e){return y.apply(this,arguments)}function y(){return y=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/disable",{method:"POST",params:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),y.apply(this,arguments)}function C(a,e){return A.apply(this,arguments)}function A(){return A=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/edit",{method:"GET",params:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),A.apply(this,arguments)}function K(a,e){return T.apply(this,arguments)}function T(){return T=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/edit",{method:"POST",data:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),T.apply(this,arguments)}function b(a,e){return B.apply(this,arguments)}function B(){return B=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/add",{method:"POST",data:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),B.apply(this,arguments)}function k(a,e){return W.apply(this,arguments)}function W(){return W=(0,c.Z)(s().mark(function a(e,r){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.WY)(p.s3+"app/delete",{method:"POST",data:(0,f.Z)({},e),credentials:"include"}));case 1:case"end":return n.stop()}},a)})),W.apply(this,arguments)}}}]);
