(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[774],{15196:function(J,A,e){"use strict";e.d(A,{UW:function(){return q},ZP:function(){return V}});var O=e(9715),h=e(55762),n=e(67294),f=e(49111),m=e(19650),D=e(84305),Z=e(26072),I=e(8812),L=e(66758),E=e(96138),F=e(56725),T=e(53621),_=e(94184),p=e.n(_);function x(){return x=Object.assign||function(l){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(l[c]=o[c])}return l},x.apply(this,arguments)}function d(l,u){return C(l)||y(l,u)||b(l,u)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(l,u){if(!!l){if(typeof l=="string")return v(l,u);var o=Object.prototype.toString.call(l).slice(8,-1);if(o==="Object"&&l.constructor&&(o=l.constructor.name),o==="Map"||o==="Set")return Array.from(l);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return v(l,u)}}function v(l,u){(u==null||u>l.length)&&(u=l.length);for(var o=0,c=new Array(u);o<u;o++)c[o]=l[o];return c}function y(l,u){var o=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(o!=null){var c=[],g=!0,Y=!1,$,X;try{for(o=o.call(l);!(g=($=o.next()).done)&&(c.push($.value),!(u&&c.length===u));g=!0);}catch(ee){Y=!0,X=ee}finally{try{!g&&o.return!=null&&o.return()}finally{if(Y)throw X}}return c}}function C(l){if(Array.isArray(l))return l}function t(l,u){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);u&&(c=c.filter(function(g){return Object.getOwnPropertyDescriptor(l,g).enumerable})),o.push.apply(o,c)}return o}function r(l){for(var u=1;u<arguments.length;u++){var o=arguments[u]!=null?arguments[u]:{};u%2?t(Object(o),!0).forEach(function(c){i(l,c,o[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(o,c))})}return l}function i(l,u,o){return u in l?Object.defineProperty(l,u,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[u]=o,l}var a=n.forwardRef(function(l,u){var o=n.useContext(L.Z),c=o.groupProps,g=r(r({},c),l),Y=g.children,$=g.collapsible,X=g.defaultCollapsed,ee=g.style,ae=g.labelLayout,te=g.title,H=te===void 0?l.label:te,z=g.tooltip,le=g.align,oe=le===void 0?"start":le,ye=g.direction,ue=g.size,ge=ue===void 0?32:ue,se=g.titleStyle,ie=g.titleRender,k=g.spaceProps,P=g.extra,he=(0,F.Z)(function(){return X||!1},{value:l.collapsed,onChange:l.onCollapse}),B=d(he,2),ne=B[0],ce=B[1],Pe=(0,n.useContext)(Z.ZP.ConfigContext),de=Pe.getPrefixCls,w=de("pro-form-group"),me=$&&n.createElement(I.Z,{style:{marginRight:8},rotate:ne?void 0:90}),ve=n.createElement(T.Z,{label:me?n.createElement("div",null,me,H):H,tooltip:z}),fe=ie?ie(ve,l):ve,re=[],Ee=n.Children.toArray(Y).map(function(N){var R;return n.isValidElement(N)&&(N==null||(R=N.props)===null||R===void 0?void 0:R.hidden)?(re.push(N),null):N});return n.createElement("div",{className:p()(w,i({},"".concat(w,"-twoLine"),ae==="twoLine")),style:ee,ref:u},re.length>0&&n.createElement("div",{style:{display:"none"}},re),(H||z||P)&&n.createElement("div",{className:"".concat(w,"-title"),style:se,onClick:function(){ce(!ne)}},P?n.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},fe,n.createElement("span",{onClick:function(R){return R.stopPropagation()}},P)):fe),$&&ne?null:n.createElement(m.Z,x({},k,{className:"".concat(w,"-container"),size:ge,align:oe,direction:ye,style:r({rowGap:0},k==null?void 0:k.style)}),Ee))});a.displayName="ProForm-Group";var s=a,G=e(52241),j=e(82785);function W(){return W=Object.assign||function(l){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(l[c]=o[c])}return l},W.apply(this,arguments)}function S(l){return n.createElement(G.Z,W({layout:"vertical",submitter:{render:function(o,c){return c.reverse()}},contentRender:function(o,c){return n.createElement(n.Fragment,null,o,c)}},l))}S.Group=s,S.useForm=h.Z.useForm,S.Item=j.Z;var U=S,K=e(56640),q=U.Group,V=U},53621:function(J,A,e){"use strict";var O=e(22385),h=e(69713),n=e(84305),f=e(26072),m=e(67294),D=e(68628),Z=e(47369),I=e.n(Z),L=function(F){var T=F.label,_=F.tooltip,p=F.subTitle,x=(0,m.useContext)(f.ZP.ConfigContext),d=x.getPrefixCls;if(!_&&!p)return m.createElement(m.Fragment,null,T);var M=d("pro-core-label-tip"),b=typeof _=="string"||m.isValidElement(_)?{title:_}:_,v=(b==null?void 0:b.icon)||m.createElement(D.Z,null);return m.createElement("div",{className:M,onMouseDown:function(C){return C.stopPropagation()},onMouseLeave:function(C){return C.stopPropagation()},onMouseMove:function(C){return C.stopPropagation()}},T,p&&m.createElement("div",{className:"".concat(M,"-subtitle")},p),_&&m.createElement(h.Z,b,m.createElement("span",{className:"".concat(M,"-icon")},v)))};A.Z=m.memo(L)},96138:function(){},56640:function(){},47369:function(){},70347:function(){},73039:function(J,A,e){"use strict";var O=e(47673),h=e(4107),n=e(43358),f=e(65),m=e(33565),D=e(15196),Z=e(67294),I=e(21010),L=e(74649),E=e(85893),F=function(){var _=(0,I.QT)(L.FH),p=_.data,x=_.loading,d=(0,Z.useState)(!1),M=(0,m.Z)(d,2),b=M[0],v=M[1],y=p==null?void 0:p.myDomain.map(function(r){return(0,E.jsx)(f.Z.Option,{value:r.value,children:r.name},r.value)}),C=p==null?void 0:p.publicDomain.map(function(r){return(0,E.jsx)(f.Z.Option,{value:r.value,children:r.name},r.value)}),t=function(i){v(i!=="0")};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("span",{children:"\u901A\u8FC7\u57DF\uFF0C\u53EF\u4EE5\u7B80\u5355\u7684\u4E3A\u60A8\u7684\u5E94\u7528\u8FDB\u884C\u5206\u7C7B\uFF0C\u66F4\u597D\u7684\u89C4\u8303\u5E94\u7528ID\u3002\u5982\u679C\u60A8\u5DF2\u7ECF\u4E86\u89E3\u5E94\u7528ID\u89C4\u8303\uFF0C\u5047\u8BBE\u60A8\u60F3\u8981\u521B\u5EFA\u7684\u5E94\u7528ID\u4E3Axpbox.news.app1\uFF0C\u5219\u7236\u57DF\u4E3Axpbox\uFF0C\u5B50\u57DF\u4E3Axpbox.news\uFF0C\u8BF7\u5148\u65B0\u5EFA\u7236\u57DF\u518D\u5EFA\u7ACB\u5B50\u57DF\u3002\u5047\u8BBE\u60A8\u60F3\u4F7F\u7528com.xpbox.new.app1\u7684\u5F62\u5F0F\uFF0C\u8BF7\u4EE5\u516C\u5171\u524D\u7F00\u521B\u5EFA\u7236\u57DFcom.xpbox\u3002"}),(0,E.jsx)(D.ZP.Item,{children:(0,E.jsxs)(h.Z.Group,{size:"large",compact:!0,style:{display:"flex",marginTop:20},children:[(0,E.jsx)(D.ZP.Item,{noStyle:!0,name:"domain",initialValue:0,children:(0,E.jsxs)(f.Z,{loading:x,showSearch:!0,style:{minWidth:100},placeholder:"\u9009\u62E9\u7236\u57DF",optionFilterProp:"children",filterOption:function(i,a){var s;return((s=a.children)===null||s===void 0?void 0:s.toLowerCase().indexOf(i.toLowerCase()))>=0},size:"large",dropdownStyle:{minWidth:200},defaultValue:0,onChange:t,children:[(0,E.jsx)(f.Z.Option,{value:0,children:"\u65B0\u5EFA\u7236\u57DF"}),(p==null?void 0:p.myDomain.length)>0&&(0,E.jsx)(f.Z.OptGroup,{label:"\u65B0\u5EFA\u5B50\u57DF",children:y}),(0,E.jsx)(f.Z.OptGroup,{label:"\u65B0\u5EFA\u516C\u5171\u524D\u7F00\u7236\u57DF",children:C})]})}),(0,E.jsx)(D.ZP.Item,{name:"name",noStyle:!0,rules:[{required:!0,message:"\u8FD9\u662F\u5FC5\u586B\u9879"},{max:100,message:"\u5E94\u7528Id\u957F\u5EA6\u4E0D\u5F97\u8D85\u8FC7100\u4E2A\u5B57\u7B26"}],children:(0,E.jsx)(h.Z,{addonBefore:b?".":"",style:{flex:"1 auto",width:"unset"}})})]})})]})};A.Z=F},44265:function(J,A,e){"use strict";e.r(A),e.d(A,{default:function(){return y}});var O=e(58024),h=e(39144),n=e(19797),f=e(49111),m=e(19650),D=e(57361),Z=e(34792),I=e(48086),L=e(9754),E=e.n(L),F=e(15196),T=e(73039),_=e(67294),p=e(21010),x=e(74649),d=e(85893),M=function(){var t=_.useRef(),r=(0,p.QT)(function(i){return(0,x.IH)(i)},{manual:!0,onSuccess:function(){I.default.success("\u57DF\u6DFB\u52A0\u6210\u529F\uFF01\u5BA1\u6838\u671F\u95F4\u57DF\u53EF\u6B63\u5E38\u4F7F\u7528\uFF01"),p.m8.push("/domain/list")},onError:function(a){if(!!a.data){var s=a.data.error;t.current.setFields([{name:s.field,errors:[s.message]}])}}});return(0,d.jsx)(F.ZP,{onFinish:function(){var i=(0,D.Z)(E().mark(function a(s){return E().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",r.run(s));case 1:case"end":return j.stop()}},a)}));return function(a){return i.apply(this,arguments)}}(),formRef:t,submitter:{render:function(a,s){return(0,d.jsx)("div",{style:{textAlign:"center"},children:(0,d.jsx)(m.Z,{children:s})})}},children:(0,d.jsx)("div",{style:{margin:"auto",marginTop:8,maxWidth:600},children:(0,d.jsx)(T.Z,{})})})},b=M,v=function(){return(0,d.jsx)(n.ZP,{content:"",children:(0,d.jsx)(h.Z,{bordered:!1,title:"\u65B0\u5EFA\u57DF",style:{maxWidth:800,margin:"0 auto"},headStyle:{textAlign:"center"},children:(0,d.jsx)(b,{})})})},y=v},74649:function(J,A,e){"use strict";e.d(A,{FH:function(){return Z},ht:function(){return L},go:function(){return F},i7:function(){return _},IH:function(){return x},IV:function(){return M}});var O=e(96132),h=e(57361),n=e(9754),f=e.n(n),m=e(18811),D=e(21010);function Z(v){return I.apply(this,arguments)}function I(){return I=(0,h.Z)(f().mark(function v(y){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,D.WY)(m.s3+"domain/getDomainInfo",{method:"GET",params:(0,O.Z)({},y),credentials:"include"}));case 1:case"end":return t.stop()}},v)})),I.apply(this,arguments)}function L(v){return E.apply(this,arguments)}function E(){return E=(0,h.Z)(f().mark(function v(y){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,D.WY)(m.s3+"domain/getMyDomain",{method:"GET",params:(0,O.Z)({},y),credentials:"include"}));case 1:case"end":return t.stop()}},v)})),E.apply(this,arguments)}function F(v){return T.apply(this,arguments)}function T(){return T=(0,h.Z)(f().mark(function v(y){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,D.WY)(m.s3+"domain/getAll",{method:"GET",params:(0,O.Z)({},y),credentials:"include"}));case 1:case"end":return t.stop()}},v)})),T.apply(this,arguments)}function _(v){return p.apply(this,arguments)}function p(){return p=(0,h.Z)(f().mark(function v(y){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,D.WY)(m.s3+"domain/getList",{method:"GET",params:(0,O.Z)({},y),credentials:"include"}));case 1:case"end":return t.stop()}},v)})),p.apply(this,arguments)}function x(v){return d.apply(this,arguments)}function d(){return d=(0,h.Z)(f().mark(function v(y){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,D.WY)(m.s3+"domain/add",{method:"POST",data:y,credentials:"include"}));case 1:case"end":return t.stop()}},v)})),d.apply(this,arguments)}function M(v){return b.apply(this,arguments)}function b(){return b=(0,h.Z)(f().mark(function v(y){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,D.WY)(m.s3+"domain/delete",{method:"POST",data:y,credentials:"include"}));case 1:case"end":return t.stop()}},v)})),b.apply(this,arguments)}},39144:function(J,A,e){"use strict";e.d(A,{Z:function(){return C}});var O=e(96156),h=e(22122),n=e(67294),f=e(94184),m=e.n(f),D=e(10366),Z=e(65632),I=function(t,r){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)r.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(i[a[s]]=t[a[s]]);return i},L=function(r){var i=r.prefixCls,a=r.className,s=r.hoverable,G=s===void 0?!0:s,j=I(r,["prefixCls","className","hoverable"]);return n.createElement(Z.C,null,function(W){var S=W.getPrefixCls,U=S("card",i),K=m()("".concat(U,"-grid"),a,(0,O.Z)({},"".concat(U,"-grid-hoverable"),G));return n.createElement("div",(0,h.Z)({},j,{className:K}))})},E=L,F=function(t,r){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)r.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(i[a[s]]=t[a[s]]);return i},T=function(r){return n.createElement(Z.C,null,function(i){var a=i.getPrefixCls,s=r.prefixCls,G=r.className,j=r.avatar,W=r.title,S=r.description,U=F(r,["prefixCls","className","avatar","title","description"]),K=a("card",s),q=m()("".concat(K,"-meta"),G),V=j?n.createElement("div",{className:"".concat(K,"-meta-avatar")},j):null,l=W?n.createElement("div",{className:"".concat(K,"-meta-title")},W):null,u=S?n.createElement("div",{className:"".concat(K,"-meta-description")},S):null,o=l||u?n.createElement("div",{className:"".concat(K,"-meta-detail")},l,u):null;return n.createElement("div",(0,h.Z)({},U,{className:q}),V,o)})},_=T,p=e(51752),x=e(71230),d=e(15746),M=e(97647),b=function(t,r){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)r.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(i[a[s]]=t[a[s]]);return i};function v(t){var r=t.map(function(i,a){return n.createElement("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(a)},n.createElement("span",null,i))});return r}var y=function(r){var i,a,s=n.useContext(Z.E_),G=s.getPrefixCls,j=s.direction,W=n.useContext(M.Z),S=function(pe){var Q;(Q=r.onTabChange)===null||Q===void 0||Q.call(r,pe)},U=function(){var pe;return n.Children.forEach(r.children,function(Q){Q&&Q.type&&Q.type===E&&(pe=!0)}),pe},K=r.prefixCls,q=r.className,V=r.extra,l=r.headStyle,u=l===void 0?{}:l,o=r.bodyStyle,c=o===void 0?{}:o,g=r.title,Y=r.loading,$=r.bordered,X=$===void 0?!0:$,ee=r.size,ae=r.type,te=r.cover,H=r.actions,z=r.tabList,le=r.children,oe=r.activeTabKey,ye=r.defaultActiveTabKey,ue=r.tabBarExtraContent,ge=r.hoverable,se=r.tabProps,ie=se===void 0?{}:se,k=b(r,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),P=G("card",K),he=c.padding===0||c.padding==="0px"?{padding:24}:void 0,B=n.createElement("div",{className:"".concat(P,"-loading-block")}),ne=n.createElement("div",{className:"".concat(P,"-loading-content"),style:he},n.createElement(x.Z,{gutter:8},n.createElement(d.Z,{span:22},B)),n.createElement(x.Z,{gutter:8},n.createElement(d.Z,{span:8},B),n.createElement(d.Z,{span:15},B)),n.createElement(x.Z,{gutter:8},n.createElement(d.Z,{span:6},B),n.createElement(d.Z,{span:18},B)),n.createElement(x.Z,{gutter:8},n.createElement(d.Z,{span:13},B),n.createElement(d.Z,{span:9},B)),n.createElement(x.Z,{gutter:8},n.createElement(d.Z,{span:4},B),n.createElement(d.Z,{span:3},B),n.createElement(d.Z,{span:16},B))),ce=oe!==void 0,Pe=(0,h.Z)((0,h.Z)({},ie),(i={},(0,O.Z)(i,ce?"activeKey":"defaultActiveKey",ce?oe:ye),(0,O.Z)(i,"tabBarExtraContent",ue),i)),de,w=z&&z.length?n.createElement(p.Z,(0,h.Z)({size:"large"},Pe,{className:"".concat(P,"-head-tabs"),onChange:S}),z.map(function(R){return n.createElement(p.Z.TabPane,{tab:R.tab,disabled:R.disabled,key:R.key})})):null;(g||V||w)&&(de=n.createElement("div",{className:"".concat(P,"-head"),style:u},n.createElement("div",{className:"".concat(P,"-head-wrapper")},g&&n.createElement("div",{className:"".concat(P,"-head-title")},g),V&&n.createElement("div",{className:"".concat(P,"-extra")},V)),w));var me=te?n.createElement("div",{className:"".concat(P,"-cover")},te):null,ve=n.createElement("div",{className:"".concat(P,"-body"),style:c},Y?ne:le),fe=H&&H.length?n.createElement("ul",{className:"".concat(P,"-actions")},v(H)):null,re=(0,D.Z)(k,["onTabChange"]),Ee=ee||W,N=m()(P,(a={},(0,O.Z)(a,"".concat(P,"-loading"),Y),(0,O.Z)(a,"".concat(P,"-bordered"),X),(0,O.Z)(a,"".concat(P,"-hoverable"),ge),(0,O.Z)(a,"".concat(P,"-contain-grid"),U()),(0,O.Z)(a,"".concat(P,"-contain-tabs"),z&&z.length),(0,O.Z)(a,"".concat(P,"-").concat(Ee),Ee),(0,O.Z)(a,"".concat(P,"-type-").concat(ae),!!ae),(0,O.Z)(a,"".concat(P,"-rtl"),j==="rtl"),a),q);return n.createElement("div",(0,h.Z)({},re,{className:N}),de,me,ve,fe)};y.Grid=E,y.Meta=_;var C=y},58024:function(J,A,e){"use strict";var O=e(38663),h=e.n(O),n=e(70347),f=e.n(n),m=e(18106),D=e(13062),Z=e(89032)}}]);
