(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[785],{72285:function(K){K.exports={channelCard:"channelCard___1COW8",cardSelect:"cardSelect___1Xbdu"}},73586:function(K,R,e){"use strict";var i=e(58024),O=e(39144),f=e(43358),a=e(90290),_=e(59250),m=e(13013),P=e(22385),x=e(69713),D=e(20136),$=e(55241),W=e(30887),M=e(99210),L=e(63185),S=e(9676),g=e(71153),d=e(60331),h=e(34792),Z=e(48086),p=e(20228),A=e(11382),b=e(74379),I=e(38648),y=e(33565),o=e(72285),c=e.n(o),T=e(67294),t=e(21010),s=e(56837),l=e(57845),C=e(62298),j=e(68628),r=e(44545),u=e(85893),N=function(U){var V,Y,H,Q,w,B=U.appId,k=U.channel,oe=U.title,z=U.defaultData,re=U.loading,_e=U.disabled,ue=U.actionRef,de=T.useState(void 0),ae=(0,y.Z)(de,2),n=ae[0],q=ae[1],ce=T.useState(void 0),se=(0,y.Z)(ce,2),pe=se[0],le=se[1];(0,l.e)(function(){q(z),le(z==null?void 0:z.config)},[z]),(0,l.e)(function(){F.run()},[B]);var ee=(0,t.QT)(function(){return(0,s.VF)({appId:B,channel:k})},{manual:!0,throwOnError:!0,onSuccess:function(E){q(E)}}),ne=(0,t.QT)(function(v){return(0,s.qE)({appId:B,channel:k,options:v})},{manual:!0,onSuccess:function(E){q(E)},onError:function(E){var X,G=E&&((X=E.data)===null||X===void 0?void 0:X.errorMessage);G?I.default.error({message:"\u4FEE\u6539\u63A8\u9001\u6A21\u5F0F\u5931\u8D25",description:G}):I.default.error({message:"\u4FEE\u6539\u63A8\u9001\u6A21\u5F0F\u5931\u8D25",description:"\u4FEE\u6539\u63A8\u9001\u6A21\u5F0F\u5931\u8D25\u3002"})}});ue&&(ue.current={doPush:function(){return ee.run()}});var ie=function(){I.default.open({message:"\u6B63\u5728\u5C1D\u8BD5\u63A8\u9001",description:"\u63A8\u9001\u9700\u8981\u4E00\u5B9A\u65F6\u95F4\uFF0C\u8BF7\u7A0D\u7B49\u3002",icon:(0,u.jsx)(A.Z,{}),key:"push"}),ee.run().then(function(E){I.default.close("push"),E.status===3?I.default.error({message:"\u63A8\u9001\u7248\u672C\u5931\u8D25",description:E.error,duration:5}):I.default.success({message:"\u63A8\u9001\u7248\u672C\u6210\u529F",description:"\u63A8\u9001\u7248\u672C\u6210\u529F\u3002"})}).catch(function(E){I.default.close("push"),I.default.error({message:"\u63A8\u9001\u7248\u672C\u5931\u8D25",description:"\u63A8\u9001\u7248\u672C\u5931\u8D25\u4E86\u3002"})})},te=(0,t.QT)(function(v){return(0,s.Tf)({appId:B,channel:k,options:v})},{manual:!0,onSuccess:function(E){q(E),Z.default.info("\u4FEE\u6539\u63A8\u9001\u8BBE\u7F6E\u6210\u529F"),E.config!==-1&&ie()}}),F=(0,t.QT)(function(v){return(0,s.E4)({search:v,appId:B,channel:k})},{debounceInterval:500}),fe=function(E){le(E),te.run({config:E})},Ee=(0,u.jsx)(u.Fragment,{children:(n==null?void 0:n.status)>=0&&(n==null?void 0:n.status)<=3?[(0,u.jsx)(d.Z,{color:"orange",children:"\u672A\u63A8\u9001"},0),(0,u.jsx)(d.Z,{color:"green",children:"\u63A8\u9001\u6B63\u5E38"},1),(0,u.jsx)(d.Z,{color:"blue",children:"\u7B49\u5F85\u63A8\u9001"},2),(0,u.jsx)(d.Z,{color:"red",children:"\u63A8\u9001\u5931\u8D25"},3)][n.status]:(0,u.jsx)(d.Z,{color:"red",children:"\u672A\u77E5\u9519\u8BEF"},0)}),me=(0,u.jsx)(M.Z,{multiple:!0,children:(0,u.jsxs)(A.Z,{spinning:re||te.loading||ee.loading||ne.loading,children:[(0,u.jsxs)(M.Z.ItemGroup,{title:"\u7279\u6B8A\u9009\u9879",children:[(0,u.jsx)(M.Z.Item,{disabled:!0,children:(0,u.jsx)(S.Z,{style:{width:"100%"},checked:n==null?void 0:n.rollback,onChange:function(E){return ne.run({rollback:E.target.checked})},children:"\u542F\u7528\u64A4\u56DE\u6A21\u5F0F"})},"1"),(0,u.jsx)(M.Z.Item,{disabled:!0,children:(0,u.jsx)(S.Z,{style:{width:"100%"},checked:n==null?void 0:n.force,onChange:function(E){return ne.run({force:E.target.checked})},children:"\u542F\u7528\u5F3A\u5236\u901A\u9053\u6A21\u5F0F"})},"2")]}),(0,u.jsx)(M.Z.Divider,{}),(0,u.jsx)(M.Z.Item,{disabled:(n==null?void 0:n.status)<2,icon:(0,u.jsx)(C.Z,{}),onClick:ie,children:"\u63A8\u9001"},"3")]})}),he=(0,u.jsx)($.Z,{content:[(n==null?void 0:n.rollback)&&(0,u.jsx)(d.Z,{color:"orange",children:"\u64A4\u56DE\u6A21\u5F0F"}),(n==null?void 0:n.force)&&(0,u.jsx)(d.Z,{color:"orange",children:"\u5F3A\u5236\u6A21\u5F0F"})],title:"\u5F53\u524D\u901A\u9053\u542F\u7528\u7684\u7279\u6B8A\u9009\u9879",children:(0,u.jsx)(j.Z,{style:{color:"#faad14",marginRight:4}})}),ve=(0,u.jsx)(x.Z,{title:(0,u.jsxs)("b",{children:["\u63A8\u9001\u5931\u8D25\uFF1A",n==null?void 0:n.error]}),color:"#cf1322",children:(0,u.jsx)(j.Z,{style:{color:"#cf1322"}})});return(0,u.jsx)(A.Z,{spinning:re||te.loading||ee.loading||ne.loading,children:(0,u.jsxs)(O.Z,{title:(0,u.jsxs)(u.Fragment,{children:[oe," ",((n==null?void 0:n.rollback)||(n==null?void 0:n.force))&&he,(n==null?void 0:n.status)===3&&ve]}),extra:n&&Ee,bordered:!1,className:c().channelCard,actions:[(0,u.jsx)(m.Z,{arrow:!0,placement:"topCenter",overlay:me,children:(0,u.jsx)(r.Z,{})},"ellipsis")],children:[(0,u.jsx)("p",{children:"\u63A8\u9001\u9009\u9879"}),(0,u.jsx)(x.Z,{title:n!=null&&n.push?n.pushName+" ("+n.push+")":"\u6682\u65E0\u63A8\u9001\u7248\u672C",children:(0,u.jsx)(a.Z,{value:pe,loading:te.loading,bordered:!1,disabled:_e,size:"large",optionLabelProp:"title",className:c().cardSelect,dropdownMatchSelectWidth:!1,onChange:fe,showSearch:!0,filterOption:function(E,X){var G;return((G=X.title)===null||G===void 0?void 0:G.toLowerCase().indexOf(E.toLowerCase()))>=0},onSearch:function(E){E&&F.run(E)},children:F.loading?(0,u.jsx)(a.Z.Option,{value:-2,disabled:!0,children:(0,u.jsx)(A.Z,{size:"small"})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z.OptGroup,{label:"\u81EA\u52A8\u63A8\u9001",children:(0,u.jsxs)(a.Z.Option,{value:0,title:"\u6700\u65B0\u7248\u672C",children:["\u6700\u65B0\u7248\u672C",(0,u.jsx)("br",{}),(0,u.jsx)("span",{style:{color:"#AAAAAA"},children:(V=F.data)!==null&&V!==void 0&&V.last?((Y=F.data)===null||Y===void 0?void 0:Y.last.versionName)+" ("+((H=F.data)===null||H===void 0?void 0:H.last.build)+")":"\u6682\u65E0\u7248\u672C"})]})}),(0,u.jsxs)(a.Z.OptGroup,{label:"\u624B\u52A8\u9009\u62E9",children:[(0,u.jsx)(a.Z.Option,{value:-1,title:"\u4E0D\u63A8\u9001",children:"\u4E0D\u63A8\u9001"}),(n==null?void 0:n.config)>0&&(0,u.jsx)(a.Z.Option,{value:n.config,title:n.configName+" ("+n.config+")",children:n.configName+" ("+n.config+")"},n.config),(Q=F.data)===null||Q===void 0||(w=Q.list)===null||w===void 0?void 0:w.map(function(v){if(v.build!==(n==null?void 0:n.config))return(0,u.jsx)(a.Z.Option,{value:v.build,title:v.versionName+" ("+v.build+")",children:v.versionName+" ("+v.build+")"},v.build)})]})]})})}),(0,u.jsx)("p",{style:{marginTop:20},children:"\u5F53\u524D\u63A8\u9001\u7684\u7248\u672C"}),(0,u.jsx)("p",{children:n!=null&&n.push?n.pushName+" ("+n.push+")":"\u65E0"})]})})};R.Z=N},57845:function(K,R,e){"use strict";e.d(R,{e:function(){return O}});var i=e(67294),O=function(a,_){var m=i.useRef(!1);i.useEffect(function(){if(m.current){var P=a();return function(){return P&&P()}}else m.current=!0},_),i.useEffect(function(){return function(){return m.current=!1}},[])}},65476:function(K,R,e){"use strict";var i=e(96132),O=e(43358),f=e(90290),a=e(20228),_=e(11382),m=e(37730),P=e(33565),x=e(81211),D=e(67294),$=e(23279),W=e.n($),M=e(85893),L=function(g){var d=g.fetchOptions,h=g.debounceTimeout,Z=h===void 0?500:h,p=g.showAll,A=g.setMyFetching,b=g.setMyOption,I=(0,x.Z)(g,["fetchOptions","debounceTimeout","showAll","setMyFetching","setMyOption"]),y=D.useState(!1),o=(0,P.Z)(y,2),c=o[0],T=o[1],t=D.useState(!1),s=(0,P.Z)(t,2),l=s[0],C=s[1],j=D.useState(p?[{value:0,label:"\u663E\u793A\u603B\u8BA1"}]:[]),r=(0,P.Z)(j,2),u=r[0],N=r[1];D.useEffect(function(){c||N(b)},[b]),D.useEffect(function(){c||N(b)},[A]);var J=D.useRef(0),U=D.useMemo(function(){var V=function(H){J.current+=1;var Q=J.current;N([]),C(!0),d(H).then(function(w){Q===J.current&&(w.data.forEach(function(B){B.label=B.text,delete B.text,B.value=B.id,delete B.id}),N(p?[{value:0,label:"\u663E\u793A\u603B\u8BA1"}].concat((0,m.Z)(w.data)):w.data),C(!1))})};return W()(V,Z)},[d,Z]);return(0,M.jsx)(f.Z,(0,i.Z)((0,i.Z)({filterOption:!1,onSearch:U},I),{},{options:l?[{value:"",label:(0,M.jsx)(_.Z,{size:"small"}),disabled:!0}]:u,onDropdownVisibleChange:function(Y){Y&&!c&&(T(!0),C(!0),U())}}))};R.Z=L},13718:function(K,R,e){"use strict";e.d(R,{M:function(){return i}});var i=60},84744:function(K,R,e){"use strict";e.d(R,{w$:function(){return P},pb:function(){return x},aF:function(){return $},Nm:function(){return M},rZ:function(){return S},yC:function(){return d},h$:function(){return Z},wW:function(){return A},eP:function(){return I},IH:function(){return o},IV:function(){return T}});var i=e(96132),O=e(57361),f=e(9754),a=e.n(f),_=e(18811),m=e(21010),P={UNKNOWN:0,NORMAL:1,PENDING:2,FAILED:3,DISABLED:4,DELETED:5,BANNED:6,CHANGED:7,getText:function(l){return["\u672A\u77E5","\u6B63\u5E38","\u5BA1\u6838\u4E2D","\u5BA1\u6838\u672A\u901A\u8FC7","\u5DF2\u4E0B\u67B6","\u7B49\u5F85\u5220\u9664","\u8FDD\u89C4\u5C01\u7981","\u6B63\u5E38-\u5F85\u5BA1\u6838"][l]},getColor:function(l){return["#a8071a","#237804","#0050b3","#a8071a","#faad14","#a8071a","#a8071a","#0050b3"][l]}};function x(s,l){return D.apply(this,arguments)}function D(){return D=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/getList",{method:"POST",params:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),D.apply(this,arguments)}function $(s,l){return W.apply(this,arguments)}function W(){return W=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/getAll",{method:"POST",params:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),W.apply(this,arguments)}function M(s,l){return L.apply(this,arguments)}function L(){return L=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/getDetail",{method:"POST",params:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),L.apply(this,arguments)}function S(s,l){return g.apply(this,arguments)}function g(){return g=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/getStatistic",{method:"POST",params:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),g.apply(this,arguments)}function d(s,l){return h.apply(this,arguments)}function h(){return h=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/search",{method:"POST",params:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),h.apply(this,arguments)}function Z(s,l){return p.apply(this,arguments)}function p(){return p=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/disable",{method:"POST",params:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),p.apply(this,arguments)}function A(s,l){return b.apply(this,arguments)}function b(){return b=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/edit",{method:"GET",params:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),b.apply(this,arguments)}function I(s,l){return y.apply(this,arguments)}function y(){return y=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/edit",{method:"POST",data:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),y.apply(this,arguments)}function o(s,l){return c.apply(this,arguments)}function c(){return c=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/add",{method:"POST",data:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),c.apply(this,arguments)}function T(s,l){return t.apply(this,arguments)}function t(){return t=(0,O.Z)(a().mark(function s(l,C){return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,m.WY)(_.s3+"app/delete",{method:"POST",data:(0,i.Z)({},l),credentials:"include"}));case 1:case"end":return r.stop()}},s)})),t.apply(this,arguments)}},56837:function(K,R,e){"use strict";e.d(R,{E4:function(){return m},lR:function(){return x},Tf:function(){return $},FW:function(){return M},Ov:function(){return S},VF:function(){return d},wp:function(){return Z},m7:function(){return A},qE:function(){return I}});var i=e(57361),O=e(9754),f=e.n(O),a=e(18811),_=e(21010);function m(o){return P.apply(this,arguments)}function P(){return P=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/getVersionList",{method:"GET",params:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),P.apply(this,arguments)}function x(o){return D.apply(this,arguments)}function D(){return D=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/getStatus",{method:"GET",params:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),D.apply(this,arguments)}function $(o){return W.apply(this,arguments)}function W(){return W=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/set",{method:"POST",data:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),W.apply(this,arguments)}function M(o){return L.apply(this,arguments)}function L(){return L=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/getOptions",{method:"GET",params:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),L.apply(this,arguments)}function S(o){return g.apply(this,arguments)}function g(){return g=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/setOptions",{method:"POST",data:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),g.apply(this,arguments)}function d(o){return h.apply(this,arguments)}function h(){return h=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/push",{method:"POST",data:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),h.apply(this,arguments)}function Z(o){return p.apply(this,arguments)}function p(){return p=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/enable",{method:"GET",params:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),p.apply(this,arguments)}function A(o){return b.apply(this,arguments)}function b(){return b=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/simulate",{method:"POST",data:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),b.apply(this,arguments)}function I(o){return y.apply(this,arguments)}function y(){return y=(0,i.Z)(f().mark(function o(c){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,_.WY)(a.s3+"update/setChannelOptions",{method:"POST",data:c,credentials:"include"}));case 1:case"end":return t.stop()}},o)})),y.apply(this,arguments)}},28030:function(K,R,e){"use strict";e.d(R,{Ax:function(){return P},gp:function(){return x},IV:function(){return M},h$:function(){return S}});var i=e(96132),O=e(57361),f=e(9754),a=e.n(f),_=e(18811),m=e(21010),P={UNKNOWN:0,NORMAL:1,PENDING:2,FAILED:3,DISABLED:4,DELETED:5,BANNED:6,CHANGED:7,UNPUBLISHED:8,getText:function(h){return["\u672A\u77E5","\u6B63\u5E38","\u5BA1\u6838\u4E2D","\u5BA1\u6838\u672A\u901A\u8FC7","\u5DF2\u4E0B\u67B6","\u7B49\u5F85\u5220\u9664","\u8FDD\u89C4\u5C01\u7981","\u6B63\u5E38-\u5F85\u5BA1\u6838","\u672A\u53D1\u5E03"][h]},getColor:function(h){return["#a8071a","#237804","#0050b3","#a8071a","#faad14","#a8071a","#a8071a","#0050b3","#faad14"][h]}};function x(d,h){return D.apply(this,arguments)}function D(){return D=(0,O.Z)(a().mark(function d(h,Z){return a().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",(0,m.WY)(_.s3+"version/getList",{method:"GET",params:(0,i.Z)({},h),credentials:"include"}));case 1:case"end":return A.stop()}},d)})),D.apply(this,arguments)}function $(d){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime.mark(function d(h){return _regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",request(dev_url+"version/push",{method:"POST",data:h,credentials:"include"}));case 1:case"end":return p.stop()}},d)})),W.apply(this,arguments)}function M(d){return L.apply(this,arguments)}function L(){return L=(0,O.Z)(a().mark(function d(h){return a().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,m.WY)(_.s3+"version/delete",{method:"POST",data:h,credentials:"include"}));case 1:case"end":return p.stop()}},d)})),L.apply(this,arguments)}function S(d){return g.apply(this,arguments)}function g(){return g=(0,O.Z)(a().mark(function d(h){return a().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,m.WY)(_.s3+"version/disable",{method:"POST",params:(0,i.Z)({},h),credentials:"include"}));case 1:case"end":return p.stop()}},d)})),g.apply(this,arguments)}}}]);
