(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[779],{5966:function(G,T,e){"use strict";var _=e(67294),i=e(49085),N=["fieldProps","proFieldProps"],n=["fieldProps","proFieldProps"];function O(){return O=Object.assign||function(o){for(var E=1;E<arguments.length;E++){var a=arguments[E];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(o[l]=a[l])}return o},O.apply(this,arguments)}function d(o,E){if(o==null)return{};var a=V(o,E),l,v;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(o);for(v=0;v<M.length;v++)l=M[v],!(E.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,l)||(a[l]=o[l]))}return a}function V(o,E){if(o==null)return{};var a={},l=Object.keys(o),v,M;for(M=0;M<l.length;M++)v=l[M],!(E.indexOf(v)>=0)&&(a[v]=o[v]);return a}var Z="text",w=function(E){var a=E.fieldProps,l=E.proFieldProps,v=d(E,N);return _.createElement(i.Z,O({mode:"edit",valueType:Z,fieldProps:a,filedConfig:{valueType:Z},proFieldProps:l},v))},m=function(E){var a=E.fieldProps,l=E.proFieldProps,v=d(E,n);return _.createElement(i.Z,O({mode:"edit",valueType:"password",fieldProps:a,proFieldProps:l,filedConfig:{valueType:Z}},v))},W=w;W.Password=m,W.displayName="ProFormComponent",T.Z=W},18067:function(){},13718:function(G,T,e){"use strict";e.d(T,{M:function(){return _}});var _=60},73039:function(G,T,e){"use strict";var _=e(47673),i=e(4107),N=e(43358),n=e(90290),O=e(33565),d=e(15196),V=e(67294),Z=e(21010),w=e(74649),m=e(85893),W=function(){var E=(0,Z.QT)(w.FH),a=E.data,l=E.loading,v=(0,V.useState)(!1),M=(0,O.Z)(v,2),j=M[0],f=M[1],s=a==null?void 0:a.myDomain.map(function(L){return(0,m.jsx)(n.Z.Option,{value:L.value,children:L.name},L.value)}),p=a==null?void 0:a.publicDomain.map(function(L){return(0,m.jsx)(n.Z.Option,{value:L.value,children:L.name},L.value)}),r=function(K){f(K!=="0")};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{children:"\u901A\u8FC7\u57DF\uFF0C\u53EF\u4EE5\u7B80\u5355\u7684\u4E3A\u60A8\u7684\u5E94\u7528\u8FDB\u884C\u5206\u7C7B\uFF0C\u66F4\u597D\u7684\u89C4\u8303\u5E94\u7528ID\u3002\u5982\u679C\u60A8\u5DF2\u7ECF\u4E86\u89E3\u5E94\u7528ID\u89C4\u8303\uFF0C\u5047\u8BBE\u60A8\u60F3\u8981\u521B\u5EFA\u7684\u5E94\u7528ID\u4E3Axpbox.news.app1\uFF0C\u5219\u7236\u57DF\u4E3Axpbox\uFF0C\u5B50\u57DF\u4E3Axpbox.news\uFF0C\u8BF7\u5148\u65B0\u5EFA\u7236\u57DF\u518D\u5EFA\u7ACB\u5B50\u57DF\u3002\u5047\u8BBE\u60A8\u60F3\u4F7F\u7528com.xpbox.new.app1\u7684\u5F62\u5F0F\uFF0C\u8BF7\u4EE5\u516C\u5171\u524D\u7F00\u521B\u5EFA\u7236\u57DFcom.xpbox\u3002"}),(0,m.jsx)(d.ZP.Item,{children:(0,m.jsxs)(i.Z.Group,{size:"large",compact:!0,style:{display:"flex",marginTop:20},children:[(0,m.jsx)(d.ZP.Item,{noStyle:!0,name:"domain",initialValue:0,children:(0,m.jsxs)(n.Z,{loading:l,showSearch:!0,style:{minWidth:100},placeholder:"\u9009\u62E9\u7236\u57DF",optionFilterProp:"children",filterOption:function(K,H){var Y;return((Y=H.children)===null||Y===void 0?void 0:Y.toLowerCase().indexOf(K.toLowerCase()))>=0},size:"large",dropdownStyle:{minWidth:200},defaultValue:0,onChange:r,children:[(0,m.jsx)(n.Z.Option,{value:0,children:"\u65B0\u5EFA\u7236\u57DF"}),(0,m.jsx)(n.Z.OptGroup,{label:"\u65B0\u5EFA\u5B50\u57DF",children:s}),(0,m.jsx)(n.Z.OptGroup,{label:"\u65B0\u5EFA\u516C\u5171\u524D\u7F00\u7236\u57DF",children:p})]})}),(0,m.jsx)(d.ZP.Item,{name:"name",noStyle:!0,rules:[{required:!0,message:"\u8FD9\u662F\u5FC5\u586B\u9879"},{max:100,message:"\u5E94\u7528Id\u957F\u5EA6\u4E0D\u5F97\u8D85\u8FC7100\u4E2A\u5B57\u7B26"}],children:(0,m.jsx)(i.Z,{addonBefore:j?".":"",style:{flex:"1 auto",width:"unset"}})})]})})]})};T.Z=W},83707:function(G,T,e){"use strict";var _=e(57361),i=e(34792),N=e(48086),n=e(9754),O=e.n(n),d=e(16514),V=e(73039),Z=e(67294),w=e(21010),m=e(74649),W=e(85893),o=function(a){var l=a.visible,v=a.onVisibleChange,M=a.onSuccess,j=Z.useRef(),f=(0,w.QT)(function(s){return(0,m.IH)(s)},{manual:!0,onSuccess:function(){N.default.success("\u57DF\u6DFB\u52A0\u6210\u529F\uFF01\u5BA1\u6838\u671F\u95F4\u57DF\u53EF\u6B63\u5E38\u4F7F\u7528\uFF01"),M()},onError:function(p){if(!!p.data){var r=p.data.error;j.current.setFields([{name:r.field,errors:[r.message]}])}}});return(0,W.jsx)(d.Z,{title:"\u65B0\u5EFA\u57DF",width:"800px",visible:l,modalProps:{afterClose:function(){var p;(p=j.current)===null||p===void 0||p.resetFields()}},onVisibleChange:v,onFinish:function(){var s=(0,_.Z)(O().mark(function p(r){return O().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.abrupt("return",f.run(r));case 1:case"end":return K.stop()}},p)}));return function(p){return s.apply(this,arguments)}}(),formRef:j,children:(0,W.jsx)("div",{style:{margin:"auto",marginTop:8,maxWidth:600},children:(0,W.jsx)(V.Z,{})})})};T.Z=o},51239:function(G,T,e){"use strict";e.r(T);var _=e(71153),i=e(60331),N=e(57338),n=e(25084),O=e(57361),d=e(57663),V=e(71577),Z=e(59250),w=e(13013),m=e(37730),W=e(30887),o=e(99210),E=e(34792),a=e(48086),l=e(33565),v=e(9754),M=e.n(v),j=e(57254),f=e(49101),s=e(67294),p=e(19797),r=e(93660),L=e(96459),K=e(74649),H=e(83707),Y=e(16514),le=e(5966),se=e(21010),z=e(13718),D=e(85893),oe=function(t){var c,g,P,x=t.route.name==="all",R=(0,s.useState)(!1),C=(0,l.Z)(R,2),A=C[0],u=C[1],I=(0,s.useState)(!1),y=(0,l.Z)(I,2),k=y[0],ne=y[1],ee=(0,s.useRef)(),ie=(0,s.useState)(),b=(0,l.Z)(ie,2),B=b[0],J=b[1],X=(0,s.useState)(!1),Q=(0,l.Z)(X,2),re=Q[0],q=Q[1],$=s.useRef(null),te=s.useRef(),_e=(0,se.QT)(K.IV,{manual:!0,onSuccess:function(){a.default.success("\u5220\u9664\u6210\u529F"),q(!1),ee.current.reload()},onError:function(S){var F=S.data.errorMessage;a.default.error(F),q(!1)}}),ae=function(S){return(0,D.jsx)(o.Z,{children:(0,D.jsx)(o.Z.Item,{danger:!0,onClick:function(){return de(S)},children:"\u5220\u9664"},"delete")})};function de(U){$.current=U,q(!0)}var ue=[{title:"\u57DF",dataIndex:"domain",key:"domain",render:function(S){return(0,D.jsx)("a",{href:"#",children:S})}}].concat((0,m.Z)(x?[{title:"\u7528\u6237",dataIndex:"userId",key:"userId",copyable:!0,render:function(S,F){return(0,D.jsxs)(D.Fragment,{children:[F.nick," (",F.email,")"]})}}]:[]),[{title:"\u7C7B\u578B",dataIndex:"parent",key:"parent",valueType:"select",valueEnum:{0:{text:"\u5B50\u57DF"},1:{text:"\u7236\u57DF"}}},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5",status:"Warning"},1:{text:"\u6B63\u5E38",status:"Success"},2:{text:"\u5BA1\u6838\u4E2D",status:"Processing"},3:{text:"\u5BA1\u6838\u672A\u901A\u8FC7",status:"Error"},4:{text:"\u7981\u6B62",status:"Error"},5:{text:"\u7B49\u5F85\u5220\u9664",status:"Warning"},6:{text:"\u8FDD\u89C4\u5C01\u7981",status:"Error"},7:{text:"\u6B63\u5E38-\u5F85\u5BA1\u6838",status:"Processing"}}},{title:"\u5E94\u7528\u6570",dataIndex:"appCount",key:"appCount",hideInSearch:!0},{title:"\u5B50\u57DF\u6570",dataIndex:"subDomainCount",key:"subDomainCount",hideInSearch:!0},{title:"\u64CD\u4F5C",key:"action",hideInSearch:!0,render:function(S,F){return(0,D.jsx)(w.Z,{overlay:ae(F),children:(0,D.jsxs)("a",{className:"ant-dropdown-link",onClick:function(ce){return ce.preventDefault()},children:["\u64CD\u4F5C",(0,D.jsx)(j.Z,{})]})})}}]);return(0,D.jsxs)(p.ZP,{children:[(0,D.jsx)(r.ZP,{sticky:{offsetHeader:z.M},headerTitle:"\u6211\u7684\u57DF",actionRef:ee,rowKey:"id",search:{filterType:"light"},toolbar:{multipleLine:!1},toolBarRender:function(){return[(0,D.jsxs)(V.Z,{type:"primary",onClick:function(){u(!0)},children:[(0,D.jsx)(f.Z,{})," \u65B0\u5EFA\u57DF"]},"primary")]},scroll:{x:600},request:x?K.go:K.i7,options:{fullScreen:!0,reload:!0,setting:!0},columns:ue}),(0,D.jsx)(n.Z,{width:600,visible:k,onClose:function(){J(void 0),ne(!1)},closable:!1,children:(B==null?void 0:B.name)&&(0,D.jsx)(L.Z,{column:2,title:B==null?void 0:B.name,request:(0,O.Z)(M().mark(function U(){return M().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.abrupt("return",{data:B||{}});case 1:case"end":return F.stop()}},U)})),params:{id:B==null?void 0:B.name},columns:ue})}),(0,D.jsx)(H.Z,{visible:A,onVisibleChange:u,onSuccess:function(){ee.current.reload(),u(!1)}}),(0,D.jsxs)(Y.Z,{title:"\u786E\u8BA4\u5220\u9664",width:400,formRef:te,modalProps:{afterClose:function(){var S;(S=te.current)===null||S===void 0||S.resetFields()}},visible:re,onVisibleChange:q,onFinish:function(S){var F;return _e.run({id:(F=$.current)===null||F===void 0?void 0:F.id})},children:[(0,D.jsx)("p",{children:"\u5220\u9664\u540E\u5C06\u670930\u5929\u7684\u4FDD\u7559\u671F\uFF0C\u671F\u95F4\u65E0\u6CD5\u518D\u521B\u5EFA\u76F8\u540C\u7684\u57DF\u3002"}),(0,D.jsxs)("p",{children:["\u8BF7\u8F93\u5165\xA0",(0,D.jsx)(i.Z,{children:(c=$.current)===null||c===void 0?void 0:c.domain}),"\u4EE5\u786E\u8BA4\u5220\u9664"]}),(0,D.jsx)(le.Z,{name:"confirm",placeholder:"\u8BF7\u8F93\u5165\u57DF\u4EE5\u786E\u8BA4\u5220\u9664",style:{marginTop:5},rules:[{type:"enum",required:!0,enum:[(g=$.current)===null||g===void 0?void 0:g.domain],message:"\u8BF7\u8F93\u5165 "+((P=$.current)===null||P===void 0?void 0:P.domain)+" \u4EE5\u786E\u8BA4\u5220\u9664"}]})]})]})};T.default=oe},74649:function(G,T,e){"use strict";e.d(T,{FH:function(){return V},ht:function(){return w},go:function(){return W},i7:function(){return E},IH:function(){return l},IV:function(){return M}});var _=e(96132),i=e(57361),N=e(9754),n=e.n(N),O=e(18811),d=e(21010);function V(f){return Z.apply(this,arguments)}function Z(){return Z=(0,i.Z)(n().mark(function f(s){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.WY)(O.s3+"domain/getDomainInfo",{method:"GET",params:(0,_.Z)({},s),credentials:"include"}));case 1:case"end":return r.stop()}},f)})),Z.apply(this,arguments)}function w(f){return m.apply(this,arguments)}function m(){return m=(0,i.Z)(n().mark(function f(s){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.WY)(O.s3+"domain/getMyDomain",{method:"GET",params:(0,_.Z)({},s),credentials:"include"}));case 1:case"end":return r.stop()}},f)})),m.apply(this,arguments)}function W(f){return o.apply(this,arguments)}function o(){return o=(0,i.Z)(n().mark(function f(s){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.WY)(O.s3+"domain/getAll",{method:"GET",params:(0,_.Z)({},s),credentials:"include"}));case 1:case"end":return r.stop()}},f)})),o.apply(this,arguments)}function E(f){return a.apply(this,arguments)}function a(){return a=(0,i.Z)(n().mark(function f(s){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.WY)(O.s3+"domain/getList",{method:"GET",params:(0,_.Z)({},s),credentials:"include"}));case 1:case"end":return r.stop()}},f)})),a.apply(this,arguments)}function l(f){return v.apply(this,arguments)}function v(){return v=(0,i.Z)(n().mark(function f(s){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.WY)(O.s3+"domain/add",{method:"POST",data:s,credentials:"include"}));case 1:case"end":return r.stop()}},f)})),v.apply(this,arguments)}function M(f){return j.apply(this,arguments)}function j(){return j=(0,i.Z)(n().mark(function f(s){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,d.WY)(O.s3+"domain/delete",{method:"POST",data:s,credentials:"include"}));case 1:case"end":return r.stop()}},f)})),j.apply(this,arguments)}},33860:function(G,T,e){"use strict";e.d(T,{Z:function(){return oe}});var _=e(96156),i=e(22122),N=e(90484),n=e(67294),O=e(94184),d=e.n(O),V=function(t){var c=t.prefixCls,g=t.className,P=t.width,x=t.style;return n.createElement("h3",{className:d()(c,g),style:(0,i.Z)({width:P},x)})},Z=V,w=e(85061),m=function(t){var c=function(u){var I=t.width,y=t.rows,k=y===void 0?2:y;if(Array.isArray(I))return I[u];if(k-1===u)return I},g=t.prefixCls,P=t.className,x=t.style,R=t.rows,C=(0,w.Z)(Array(R)).map(function(A,u){return n.createElement("li",{key:u,style:{width:c(u)}})});return n.createElement("ul",{className:d()(g,P),style:x},C)},W=m,o=e(65632),E=function(t){var c,g,P=t.prefixCls,x=t.className,R=t.style,C=t.size,A=t.shape,u=d()((c={},(0,_.Z)(c,"".concat(P,"-lg"),C==="large"),(0,_.Z)(c,"".concat(P,"-sm"),C==="small"),c)),I=d()((g={},(0,_.Z)(g,"".concat(P,"-circle"),A==="circle"),(0,_.Z)(g,"".concat(P,"-square"),A==="square"),(0,_.Z)(g,"".concat(P,"-round"),A==="round"),g)),y=typeof C=="number"?{width:C,height:C,lineHeight:"".concat(C,"px")}:{};return n.createElement("span",{className:d()(P,u,I,x),style:(0,i.Z)((0,i.Z)({},y),R)})},a=E,l=e(98423),v=function(t){var c=function(P){var x=P.getPrefixCls,R=t.prefixCls,C=t.className,A=t.active,u=x("skeleton",R),I=(0,l.Z)(t,["prefixCls","className"]),y=d()(u,"".concat(u,"-element"),(0,_.Z)({},"".concat(u,"-active"),A),C);return n.createElement("div",{className:y},n.createElement(a,(0,i.Z)({prefixCls:"".concat(u,"-avatar")},I)))};return n.createElement(o.C,null,c)};v.defaultProps={size:"default",shape:"circle"};var M=v,j=function(t){var c=function(P){var x=P.getPrefixCls,R=t.prefixCls,C=t.className,A=t.active,u=x("skeleton",R),I=(0,l.Z)(t,["prefixCls"]),y=d()(u,"".concat(u,"-element"),(0,_.Z)({},"".concat(u,"-active"),A),C);return n.createElement("div",{className:y},n.createElement(a,(0,i.Z)({prefixCls:"".concat(u,"-button")},I)))};return n.createElement(o.C,null,c)};j.defaultProps={size:"default"};var f=j,s=function(t){var c=function(P){var x=P.getPrefixCls,R=t.prefixCls,C=t.className,A=t.active,u=x("skeleton",R),I=(0,l.Z)(t,["prefixCls"]),y=d()(u,"".concat(u,"-element"),(0,_.Z)({},"".concat(u,"-active"),A),C);return n.createElement("div",{className:y},n.createElement(a,(0,i.Z)({prefixCls:"".concat(u,"-input")},I)))};return n.createElement(o.C,null,c)};s.defaultProps={size:"default"};var p=s,r="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",L=function(t){var c=function(P){var x=P.getPrefixCls,R=t.prefixCls,C=t.className,A=t.style,u=x("skeleton",R),I=d()(u,"".concat(u,"-element"),C);return n.createElement("div",{className:I},n.createElement("div",{className:d()("".concat(u,"-image"),C),style:A},n.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(u,"-image-svg")},n.createElement("path",{d:r,className:"".concat(u,"-image-path")}))))};return n.createElement(o.C,null,c)},K=L;function H(h){return h&&(0,N.Z)(h)==="object"?h:{}}function Y(h,t){return h&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function le(h,t){return!h&&t?{width:"38%"}:h&&t?{width:"50%"}:{}}function se(h,t){var c={};return(!h||!t)&&(c.width="61%"),!h&&t?c.rows=3:c.rows=2,c}var z=function(t){var c=function(P){var x=P.getPrefixCls,R=P.direction,C=t.prefixCls,A=t.loading,u=t.className,I=t.children,y=t.avatar,k=t.title,ne=t.paragraph,ee=t.active,ie=t.round,b=x("skeleton",C);if(A||!("loading"in t)){var B,J=!!y,X=!!k,Q=!!ne,re;if(J){var q=(0,i.Z)((0,i.Z)({prefixCls:"".concat(b,"-avatar")},Y(X,Q)),H(y));re=n.createElement("div",{className:"".concat(b,"-header")},n.createElement(a,q))}var $;if(X||Q){var te;if(X){var _e=(0,i.Z)((0,i.Z)({prefixCls:"".concat(b,"-title")},le(J,Q)),H(k));te=n.createElement(Z,_e)}var ae;if(Q){var de=(0,i.Z)((0,i.Z)({prefixCls:"".concat(b,"-paragraph")},se(J,X)),H(ne));ae=n.createElement(W,de)}$=n.createElement("div",{className:"".concat(b,"-content")},te,ae)}var ue=d()(b,(B={},(0,_.Z)(B,"".concat(b,"-with-avatar"),J),(0,_.Z)(B,"".concat(b,"-active"),ee),(0,_.Z)(B,"".concat(b,"-rtl"),R==="rtl"),(0,_.Z)(B,"".concat(b,"-round"),ie),B),u);return n.createElement("div",{className:ue},re,$)}return I};return n.createElement(o.C,null,c)};z.defaultProps={avatar:!1,title:!0,paragraph:!0},z.Button=f,z.Avatar=M,z.Input=p,z.Image=K;var D=z,oe=D},71748:function(G,T,e){"use strict";var _=e(65056),i=e.n(_),N=e(18067),n=e.n(N)}}]);
