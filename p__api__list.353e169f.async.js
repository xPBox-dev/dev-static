(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2226],{43046:function(S,P,t){"use strict";t.r(P);var p=t(62350),E=t(75443),s=t(57663),_=t(71577),L=t(34792),D=t(48086),T=t(49101),C=t(67294),M=t(21010),U=t(73727),A=t(19797),I=t(16894),m=t(21561),u=t(13718),r=t(85893),v="H8L0",l=function(){var N=(0,C.useRef)(),G=(0,M.QT)(m.IV,{manual:!0,onSuccess:function(){D.default.success({content:"\u5220\u9664\u6210\u529F",duration:3,key:"delete"}),N.current.reload()},onError:function(){D.default.error({content:"\u5220\u9664\u5931\u8D25",duration:3,key:"delete"})}}),j=[{title:"\u5907\u6CE8",dataIndex:"note",key:"note"},{title:"API ID",dataIndex:"apiId",key:"apiId",copyable:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",hideInSearch:!0},{title:"Token",dataIndex:"token",key:"token",copyable:!0,valueType:"password",hideInSearch:!0},{title:"\u64CD\u4F5C",key:"action",hideInSearch:!0,render:function(K,g){return(0,r.jsx)(E.Z,{placement:"top",title:"\u786E\u5B9A\u8981\u5220\u9664\uFF1F",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){D.default.loading({content:"\u6B63\u5728\u5904\u7406...",duration:0,key:"delete"}),G.run({id:g.apiId})},_nk:"".concat(v,"11"),children:(0,r.jsx)(_.Z,{danger:!0,size:"small",_nk:"".concat(v,"21"),children:"\u5220\u9664"})})}}];return(0,r.jsx)(A.ZP,{_nk:"".concat(v,"31"),children:(0,r.jsx)(I.ZP,{sticky:{offsetHeader:u.M},headerTitle:"API\u51ED\u8BC1\u5217\u8868",actionRef:N,rowKey:"apiId",search:{filterType:"light"},toolBarRender:function(){return(0,r.jsx)(U.rU,{to:"/api/add",_nk:"".concat(v,"51"),children:(0,r.jsxs)(_.Z,{type:"primary",_nk:"".concat(v,"22"),children:[(0,r.jsx)(T.Z,{_nk:"".concat(v,"61")})," \u65B0\u589E\u51ED\u8BC1"]})})},scroll:{x:600},request:m.gp,options:{fullScreen:!0,reload:!0,setting:!0},postData:function(K){return K.forEach(function(g){var H=Object.entries(g);g.inner=[],H.forEach(function(e,n){g.inner.push({param:e[0],value:e[1]})})}),K},columns:j,_nk:"".concat(v,"41")})})};P.default=l},13718:function(S,P,t){"use strict";t.d(P,{M:function(){return E}});var p="ojP7",E=60},21561:function(S,P,t){"use strict";t.d(P,{gp:function(){return C},IH:function(){return U},IV:function(){return I}});var p=t(96132),E=t(57361),s=t(9754),_=t.n(s),L=t(18811),D=t(21010),T="rjss";function C(u,r){return M.apply(this,arguments)}function M(){return M=(0,E.Z)(_().mark(function u(r,v){return _().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",(0,D.WY)(L.s3+"api/getList",{method:"GET",params:(0,p.Z)({},r),credentials:"include"}));case 1:case"end":return O.stop()}},u)})),M.apply(this,arguments)}function U(u){return A.apply(this,arguments)}function A(){return A=(0,E.Z)(_().mark(function u(r){return _().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,D.WY)(L.s3+"api/add",{method:"POST",data:r,credentials:"include"}));case 1:case"end":return l.stop()}},u)})),A.apply(this,arguments)}function I(u){return m.apply(this,arguments)}function m(){return m=(0,E.Z)(_().mark(function u(r){return _().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,D.WY)(L.s3+"api/delete",{method:"POST",data:r,credentials:"include"}));case 1:case"end":return l.stop()}},u)})),m.apply(this,arguments)}},73727:function(S,P,t){"use strict";t.d(P,{rU:function(){return O}});var p=t(51615),E=t(41788),s=t(67294),_=t(97175),L=t(45697),D=t.n(L),T=t(22122),C=t(19756),M=t(2177),U=function(e){(0,E.Z)(n,e);function n(){for(var o,c=arguments.length,d=new Array(c),i=0;i<c;i++)d[i]=arguments[i];return o=e.call.apply(e,[this].concat(d))||this,o.history=(0,_.lX)(o.props),o}var a=n.prototype;return a.render=function(){return s.createElement(p.F0,{history:this.history,children:this.props.children})},n}(s.Component),A=function(e){(0,E.Z)(n,e);function n(){for(var o,c=arguments.length,d=new Array(c),i=0;i<c;i++)d[i]=arguments[i];return o=e.call.apply(e,[this].concat(d))||this,o.history=(0,_.q_)(o.props),o}var a=n.prototype;return a.render=function(){return s.createElement(p.F0,{history:this.history,children:this.props.children})},n}(s.Component),I=function(n,a){return typeof n=="function"?n(a):n},m=function(n,a){return typeof n=="string"?(0,_.ob)(n,null,null,a):n},u=function(n){return n},r=s.forwardRef;typeof r=="undefined"&&(r=u);function v(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var l=r(function(e,n){var a=e.innerRef,o=e.navigate,c=e.onClick,d=(0,C.Z)(e,["innerRef","navigate","onClick"]),i=d.target,y=(0,T.Z)({},d,{onClick:function(f){try{c&&c(f)}catch(B){throw f.preventDefault(),B}!f.defaultPrevented&&f.button===0&&(!i||i==="_self")&&!v(f)&&(f.preventDefault(),o())}});return u!==r?y.ref=n||a:y.ref=a,s.createElement("a",y)}),O=r(function(e,n){var a=e.component,o=a===void 0?l:a,c=e.replace,d=e.to,i=e.innerRef,y=(0,C.Z)(e,["component","replace","to","innerRef"]);return s.createElement(p.s6.Consumer,null,function(R){R||(0,M.Z)(!1);var f=R.history,B=m(I(d,R.location),R.location),b=B?f.createHref(B):"",W=(0,T.Z)({},y,{href:b,navigate:function(){var $=I(d,R.location),Z=c?f.replace:f.push;Z($)}});return u!==r?W.ref=n||i:W.innerRef=i,s.createElement(o,W)})});if(!1)var N,G;var j=function(n){return n},h=s.forwardRef;typeof h=="undefined"&&(h=j);function K(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return n.filter(function(o){return o}).join(" ")}var g=h(function(e,n){var a=e["aria-current"],o=a===void 0?"page":a,c=e.activeClassName,d=c===void 0?"active":c,i=e.activeStyle,y=e.className,R=e.exact,f=e.isActive,B=e.location,b=e.sensitive,W=e.strict,V=e.style,$=e.to,Z=e.innerRef,k=(0,C.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return s.createElement(p.s6.Consumer,null,function(Y){Y||(0,M.Z)(!1);var x=B||Y.location,X=m(I($,x),x),w=X.pathname,Q=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),J=Q?(0,p.LX)(x.pathname,{path:Q,exact:R,sensitive:b,strict:W}):null,F=!!(f?f(J,x):J),q=F?K(y,d):y,ee=F?(0,T.Z)({},V,{},i):V,z=(0,T.Z)({"aria-current":F&&o||null,className:q,style:ee,to:X},k);return j!==h?z.ref=n||Z:z.innerRef=Z,s.createElement(O,z)})});if(!1)var H}}]);
