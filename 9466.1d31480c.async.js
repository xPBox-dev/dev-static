(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9466],{46360:function(S){S.exports={header:"header___1YsBZ"}},53266:function(S){S.exports={tabs:"tabs___YEat-"}},45572:function(S,P,e){"use strict";var c=e(68023),d=e(99935),E=e(48579),n=e(46586),_=e(17813),s=e(19076),I=e(62842),x=e(68290),D=e(62604),R=e(70012),B="kdU2";c.D([_.N,s.N,I.N,E.N,R.N,x.N,D.N,n.N]),P.Z=d},49466:function(S,P,e){"use strict";e.r(P);var c=e(3515),d=e(85461),E=e(14965),n=e(14072),_=e(64896),s=e(37744),I=e(57663),x=e(71577),D=e(58024),R=e(39144),B=e(37730),b=e(96132),l=e(57361),Y=e(20228),j=e(11382),h=e(33565),U=e(9754),K=e.n(U),$=e(65476),T=e(67294),G=e(84744),F=e(23723),z=e(27368),X=e(21349),g=e(21010),L=e(56905),y=e(84787),H=e(53266),o=e.n(H),i=e(46360),O=e.n(i),a=e(97221),t=e(57845),C=e(45572),p=e(87155),r=e(30381),v=e.n(r),se=e(13718),u=e(85893),f="dYjG";function le(w){for(var ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,Q=w.indexOf("/"),te=0;te<ee&&Q!==-1;te++)Q=w.indexOf("/",Q+1);return Q!==-1?w.substr(0,Q):w}var re=function(ee){var Q,te,ue,_e,oe,ie,ce,de,pe,fe,me,A=ee.match.params.appId||"",Oe=ee.showAll,ve=ee.userId;A&&ee.setAppId(A);var Me=T.useState("current"),Pe=(0,h.Z)(Me,2),Z=Pe[0],ye=Pe[1],Ae=T.useState(A===""?[]:[{value:A,label:(0,u.jsx)(j.Z,{size:"small",_nk:"".concat(f,"11")}),disabled:!0}]),De=(0,h.Z)(Ae,2),Ie=De[0],xe=De[1],J=T.useRef({instance:!0,device:!1,count:!1}),Te=T.useState({start:0,end:0}),ge=(0,h.Z)(Te,2),W=ge[0],Ce=ge[1];function Be(M){return Ee.apply(this,arguments)}function Ee(){return Ee=(0,l.Z)(K().mark(function M(m){return K().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.abrupt("return",(0,G.yC)((0,b.Z)((0,b.Z)({search:m},Oe?{all:Oe}:{}),ve!==0?{userId:ve}:{})));case 2:case"end":return k.stop()}},M)})),Ee.apply(this,arguments)}var ne=(0,g.QT)(function(){return(0,L.CF)({current:!0,base:!0,appId:A})},{manual:A===""}),V=(0,g.QT)(function(){return(0,L.Xf)({appId:A,stat:"instance",type:Z,start:W.start,end:W.end})},{manual:A===""}),N=(0,g.QT)(function(){return(0,L.Xf)({appId:A,stat:"device",type:Z,start:W.start,end:W.end})},{manual:!0}),q=(0,g.QT)(function(){return(0,L.Xf)({appId:A,stat:"count",type:Z,start:W.start,end:W.end})},{manual:!0}),he=function(m){J.current.instance?V.run():V.reset(),J.current.device?N.run():N.reset(),J.current.count?q.run():q.reset(),m&&ne.run()},be=function(m){var ae=W.start!==0&&m.format("X")/86400-W.start/24>365,k=W.end!==0&&W.end/24-m.format("X")/86400>365;return m&&m>v()().endOf("day")||k||ae};(0,t.e)(function(){he(!0)},[A]),(0,t.e)(function(){he(!1)},[Z]),(0,t.e)(function(){!(Z==="custom"&&(W.start===0||W.end===0))&&he(!1)},[W]),(0,T.useEffect)(function(){var M,m;xe([{value:(M=ne.data)===null||M===void 0?void 0:M.id,label:(m=ne.data)===null||m===void 0?void 0:m.title}])},[ne.data]);var Ze=(0,u.jsx)(u.Fragment,{children:(0,u.jsx)($.Z,(0,b.Z)((0,b.Z)({showSearch:!0},A===""?{}:{value:A}),{},{placeholder:"\u9009\u62E9\u5E94\u7528",fetchOptions:Be,setMyOption:Ie,style:{minWidth:"200px",maxWidth:"350px"},onChange:function(m){g.m8.push(le(g.m8.location.pathname)+"/"+m)},_nk:"".concat(f,"21")}))}),We={tooltip:{trigger:"axis"},legend:{data:["\u6D3B\u8DC3\u8BBE\u5907\u6570","\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4"].concat((0,B.Z)(Z==="current"?["\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907"]:[]))},grid:{top:"30px",left:"10px",right:"10px",bottom:"50px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:(Q=N.data)===null||Q===void 0?void 0:Q.x}],yAxis:[{name:"\u8BBE\u5907\u6570",type:"value",minInterval:1},{name:"\u6D3B\u8DC3\u65F6\u95F4(\u79D2)",type:"value",max:Z==="current"?3600:86400}],dataZoom:[{show:!0,xAxisIndex:0,start:Z==="current"?66.666:0}],series:[].concat((0,B.Z)(Z==="current"?[{name:"\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907",type:"custom",stack:"\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907",renderItem:function(){},data:[(te=N.data)===null||te===void 0?void 0:te.total],encode:{x:0,y:0,tooltip:0},markLine:{data:[{type:"max",name:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",label:{position:"insideStartTop",formatter:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"},tooltip:{trigger:"item"},yAxis:(ue=N.data)===null||ue===void 0?void 0:ue.total}]}}]:[]),[{name:"\u6D3B\u8DC3\u8BBE\u5907\u6570",type:"line",showSymbol:!1,stack:"\u8BBE\u5907\u6570",itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.3,color:"#ff8566"},{offset:0,color:"#ce2910"},{offset:1,color:"#ffd15e"}],global:!1}},data:(_e=N.data)===null||_e===void 0?void 0:_e.instance},{name:"\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4",type:"line",yAxisIndex:1,showSymbol:!1,color:"#5888F3",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1890ff"},{offset:.5,color:"#7ec2f3"},{offset:1,color:"#ffffff"}],global:!1}},stack:"\u65F6\u95F4",data:(oe=N.data)===null||oe===void 0?void 0:oe.time}])},Le={tooltip:{trigger:"axis"},legend:{data:["\u6D3B\u8DC3\u5B9E\u4F8B\u6570","\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4","\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"]},grid:{top:"30px",left:"10px",right:"10px",bottom:"50px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:(ie=V.data)===null||ie===void 0?void 0:ie.x}],yAxis:[{name:"\u5B9E\u4F8B\u6570",type:"value",minInterval:1},{name:"\u6D3B\u8DC3\u65F6\u95F4(\u79D2)",type:"value",max:Z==="current"?3600:86400}],dataZoom:[{show:!0,xAxisIndex:0,start:Z==="current"?66.666:0}],series:[].concat((0,B.Z)(Z==="current"?[{name:"\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",type:"custom",stack:"\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",renderItem:function(){},data:[(ce=V.data)===null||ce===void 0?void 0:ce.total],encode:{x:0,y:0,tooltip:0},markLine:{data:[{type:"max",name:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",label:{position:"insideStartTop",formatter:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"},tooltip:{trigger:"item"},yAxis:(de=V.data)===null||de===void 0?void 0:de.total}]}}]:[]),[{name:"\u6D3B\u8DC3\u5B9E\u4F8B\u6570",type:"line",showSymbol:!1,stack:"\u5B9E\u4F8B\u6570",itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.3,color:"#ff8566"},{offset:0,color:"#ce2910"},{offset:1,color:"#ffd15e"}],global:!1}},data:(pe=V.data)===null||pe===void 0?void 0:pe.instance},{name:"\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4",type:"line",showSymbol:!1,yAxisIndex:1,color:"#5888F3",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1890ff"},{offset:.5,color:"#7ec2f3"},{offset:1,color:"#ffffff"}],global:!1}},stack:"\u65F6\u95F4",data:(fe=V.data)===null||fe===void 0?void 0:fe.time}])},Re=Z==="custom"&&(W.start===0||W.end===0)?(0,u.jsx)(R.Z,{bordered:!1,_nk:"".concat(f,"31"),children:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u65F6\u95F4\u6BB5"}):(0,u.jsxs)(y.ZP,{split:"horizontal",_nk:"".concat(f,"41"),children:[(0,u.jsx)(y.ZP,{collapsible:!0,defaultCollapsed:!J.current.instance,title:"\u6D3B\u8DC3\u5B9E\u4F8B\u8D8B\u52BF",style:{position:"relative"},onCollapse:function(m){J.current.instance=!m,!V.data&&V.run()},_nk:"".concat(f,"42"),children:(0,u.jsx)(j.Z,{spinning:V.loading,_nk:"".concat(f,"12"),children:(0,u.jsx)(p.Z,{notMerge:!0,echarts:C.Z,option:Le,style:{height:300},_nk:"".concat(f,"51")})})}),(0,u.jsx)(y.ZP,{collapsible:!0,defaultCollapsed:!J.current.device,title:"\u6D3B\u8DC3\u8BBE\u5907\u8D8B\u52BF",style:{position:"relative"},onCollapse:function(m){J.current.device=!m,!N.data&&N.run()},_nk:"".concat(f,"43"),children:(0,u.jsx)(j.Z,{spinning:N.loading,_nk:"".concat(f,"13"),children:(0,u.jsx)(p.Z,{notMerge:!0,echarts:C.Z,option:We,style:{height:300},_nk:"".concat(f,"52")})})}),(0,u.jsx)(y.ZP,{collapsible:!0,defaultCollapsed:!J.current.count,title:"\u542F\u52A8\u6B21\u6570\u8D8B\u52BF",style:{position:"relative"},bodyStyle:{height:"auto"},onCollapse:function(m){J.current.count=!m,!q.data&&q.run()},_nk:"".concat(f,"44"),children:(0,u.jsx)(a.Z,{loading:q.loading||!q.data,height:300,data:q.data||[],xField:"x",yField:"y",xAxis:{visible:!0},yAxis:{visible:!0,title:{visible:!1}},slider:{start:Z==="current"?.6666:0,end:1},title:{visible:!0,text:"\u542F\u52A8\u6B21\u6570\u8D8B\u52BF",style:{fontSize:14}},meta:{y:{alias:"\u542F\u52A8\u6B21\u6570"}},_nk:"".concat(f,"61")})})]});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Z,{className:O().header,title:Ze,subTitle:"\u7684\u7EDF\u8BA1\u4FE1\u606F",extra:A&&(0,u.jsxs)(x.Z.Group,{_nk:"".concat(f,"81"),children:[(0,u.jsx)(x.Z,{onClick:function(){g.m8.push(le(g.m8.location.pathname,1)+"/install/"+A)},_nk:"".concat(f,"91"),children:"\u5B89\u88C5\u7EDF\u8BA1"}),(0,u.jsx)(x.Z,{onClick:function(){g.m8.push("/app/detail/"+A)},_nk:"".concat(f,"92"),children:"\u5E94\u7528\u8BE6\u60C5"})]}),style:{padding:0,marginBottom:20},_nk:"".concat(f,"71")}),A?(0,u.jsx)(X.Z,{_nk:"".concat(f,"a1"),children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(T.Suspense,{fallback:(0,u.jsx)(F.Z,{_nk:"".concat(f,"b1")}),_nk:"".concat(f,"82"),children:(0,u.jsx)(z.Z,{loading:ne.loading,active:(me=ne.data)===null||me===void 0?void 0:me.base,_nk:"".concat(f,"c1")})}),(0,u.jsxs)(T.Suspense,{fallback:(0,u.jsx)(F.Z,{_nk:"".concat(f,"b2")}),_nk:"".concat(f,"83"),children:[(0,u.jsx)(d.Z,{offsetTop:se.M,style:{overflow:"hidden"},_nk:"".concat(f,"d1"),children:(0,u.jsxs)(y.ZP,{className:o().tabs,tabs:{tabPosition:"top",size:"middle",activeKey:Z,onChange:function(m){ye(m)}},style:{boxShadow:"0 0 5px #00000044"},_nk:"".concat(f,"45"),children:[(0,u.jsx)(y.ZP.TabPane,{tab:"\u8FD124\u5C0F\u65F6",cardProps:{bodyStyle:{padding:0}},_nk:"".concat(f,"84")},"current"),(0,u.jsx)(y.ZP.TabPane,{tab:"\u8FD1\u4E00\u4E2A\u6708",cardProps:{bodyStyle:{padding:0}},_nk:"".concat(f,"85")},"month"),(0,u.jsx)(y.ZP.TabPane,{tab:(0,u.jsxs)(u.Fragment,{children:["\u81EA\u5B9A\u4E49:",(0,u.jsx)(n.Z.RangePicker,{bordered:!1,disabledDate:be,ranges:{\u4ECA\u65E5:[v()(),v()()],\u672C\u5468:[v()().startOf("week"),v()()],\u672C\u6708:[v()().startOf("month"),v()()],\u8FC7\u53BB7\u5929:[v()().subtract(7,"day"),v()()],\u8FC7\u53BB30\u5929:[v()().subtract(30,"day"),v()()],\u8FC7\u53BB60\u5929:[v()().subtract(60,"day"),v()()],\u8FC7\u53BB90\u5929:[v()().subtract(90,"day"),v()()],\u8FC7\u53BB120\u5929:[v()().subtract(120,"day"),v()()],\u8FC7\u53BB180\u5929:[v()().subtract(180,"day"),v()()],\u8FC7\u53BB360\u5929:[v()().subtract(360,"day"),v()()]},onCalendarChange:function(m){var ae,k;return Ce(m?{start:parseInt(((ae=m[0])===null||ae===void 0?void 0:ae.startOf("day").format("X"))/3600)|0,end:parseInt(((k=m[1])===null||k===void 0?void 0:k.startOf("day").format("X"))/3600)|0}:{start:0,end:0})},_nk:"".concat(f,"87")})]}),cardProps:{bodyStyle:{padding:0}},_nk:"".concat(f,"86")},"custom")]})}),(0,u.jsx)(y.ZP,{bodyStyle:{padding:0},_nk:"".concat(f,"46"),children:Re})]})]})}):(0,u.jsx)(R.Z,{bodyStyle:{textAlign:"center"},_nk:"".concat(f,"32"),children:"\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u5E94\u7528"})]})};P.default=re},27368:function(S,P,e){"use strict";var c=e(33565),d=e(67294),E=e(52778),n=e(4084),_=e(85893),s="ODlp",I=E.Z.Statistic,x=E.Z.Divider,D=function(B){var b=B.loading,l=B.active,Y=(0,d.useState)(!1),j=(0,c.Z)(Y,2),h=j[0],U=j[1];return(0,_.jsx)(n.Z,{onResize:function($){U($.width<696)},_nk:"".concat(s,"11"),children:(0,_.jsxs)(E.Z.Group,{loading:b,direction:h?"column":"row",style:{marginBottom:24},_nk:"".concat(s,"21"),children:[(0,_.jsx)(E.Z,{statistic:{title:"\u5F53\u524D\u5B9E\u4F8B\u6570",value:(l==null?void 0:l.current)||0,description:(0,_.jsx)(I,{title:"\u6628\u65E5\u5CF0\u503C",value:(l==null?void 0:l.max)||0,_nk:"".concat(s,"41")})},_nk:"".concat(s,"31")}),(0,_.jsx)(x,{type:h?"horizontal":"vertical",_nk:"".concat(s,"51")}),(0,_.jsx)(E.Z,{statistic:{title:"24\u5C0F\u65F6\u6D3B\u8DC3\u5EA6",value:l==null?void 0:l.h24,description:(0,_.jsx)(I,{title:"\u6628\u65E5\u540C\u6BD4",value:(l==null?void 0:l.hc)==="-"?"-":(l==null?void 0:l.hc)+"%",trend:(l==null?void 0:l.hc)<0?"down":"up",_nk:"".concat(s,"42")})},chartPlacement:"left",_nk:"".concat(s,"32")}),(0,_.jsx)(E.Z,{statistic:{title:"\u672C\u6708\u6D3B\u8DC3\u5EA6",value:l==null?void 0:l.month,description:(0,_.jsx)(I,{title:"\u4E0A\u6708\u540C\u6BD4",value:(l==null?void 0:l.mc)==="-"?"-":(l==null?void 0:l.mc)+"%",trend:(l==null?void 0:l.mc)<0?"down":"up",_nk:"".concat(s,"43")})},chartPlacement:"left",_nk:"".concat(s,"33")})]})},"resize-observer")};P.Z=D},57845:function(S,P,e){"use strict";e.d(P,{e:function(){return E}});var c=e(67294),d="vLX0",E=function(_,s){var I=c.useRef(!1);c.useEffect(function(){if(I.current){var x=_();return function(){return x&&x()}}else I.current=!0},s),c.useEffect(function(){return function(){return I.current=!1}},[])}},65476:function(S,P,e){"use strict";var c=e(96132),d=e(43358),E=e(65),n=e(20228),_=e(11382),s=e(37730),I=e(33565),x=e(81211),D=e(67294),R=e(23279),B=e.n(R),b=e(85893),l="smFY",Y=function(h){var U=h.fetchOptions,K=h.debounceTimeout,$=K===void 0?500:K,T=h.showAll,G=h.setMyFetching,F=h.setMyOption,z=(0,x.Z)(h,["fetchOptions","debounceTimeout","showAll","setMyFetching","setMyOption"]),X=D.useState(!1),g=(0,I.Z)(X,2),L=g[0],y=g[1],H=D.useState(!1),o=(0,I.Z)(H,2),i=o[0],O=o[1],a=D.useState(T?[{value:0,label:"\u663E\u793A\u603B\u8BA1"}]:[]),t=(0,I.Z)(a,2),C=t[0],p=t[1];D.useEffect(function(){L||p(F)},[F]),D.useEffect(function(){L||p(F)},[G]);var r=D.useRef(0),v=D.useMemo(function(){var se=function(f){r.current+=1;var le=r.current;p([]),O(!0),U(f).then(function(re){le===r.current&&(re.data.forEach(function(w){w.label=w.text,delete w.text,w.value=w.id,delete w.id}),p(T?[{value:0,label:"\u663E\u793A\u603B\u8BA1"}].concat((0,s.Z)(re.data)):re.data),O(!1))})};return B()(se,$)},[U,$]);return(0,b.jsx)(E.Z,(0,c.Z)((0,c.Z)({filterOption:!1,onSearch:v},z),{},{options:i?[{value:"",label:(0,b.jsx)(_.Z,{size:"small",_nk:"".concat(l,"21")}),disabled:!0}]:C,onDropdownVisibleChange:function(u){u&&!L&&(y(!0),O(!0),v())},_nk:"".concat(l,"11")}))};P.Z=Y},13718:function(S,P,e){"use strict";e.d(P,{M:function(){return d}});var c="ojP7",d=60},23723:function(S,P,e){"use strict";var c=e(20228),d=e(11382),E=e(85893),n="1E61";P.Z=function(){return(0,E.jsx)("div",{style:{paddingTop:100,textAlign:"center"},_nk:"".concat(n,"11"),children:(0,E.jsx)(d.Z,{size:"large",_nk:"".concat(n,"21")})})}},84744:function(S,P,e){"use strict";e.d(P,{w$:function(){return x},pb:function(){return D},aF:function(){return B},Nm:function(){return l},rZ:function(){return j},yC:function(){return U},h$:function(){return $},wW:function(){return G},eP:function(){return z},IH:function(){return g},IV:function(){return y}});var c=e(96132),d=e(57361),E=e(9754),n=e.n(E),_=e(18811),s=e(21010),I="7PXW",x={UNKNOWN:0,NORMAL:1,PENDING:2,FAILED:3,DISABLED:4,DELETED:5,BANNED:6,CHANGED:7,getText:function(i){return["\u672A\u77E5","\u6B63\u5E38","\u5BA1\u6838\u4E2D","\u5BA1\u6838\u672A\u901A\u8FC7","\u5DF2\u4E0B\u67B6","\u7B49\u5F85\u5220\u9664","\u8FDD\u89C4\u5C01\u7981","\u6B63\u5E38-\u5F85\u5BA1\u6838"][i]},getColor:function(i){return["#a8071a","#237804","#0050b3","#a8071a","#faad14","#a8071a","#a8071a","#0050b3"][i]}};function D(o,i){return R.apply(this,arguments)}function R(){return R=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/getList",{method:"POST",params:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),R.apply(this,arguments)}function B(o,i){return b.apply(this,arguments)}function b(){return b=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/getAll",{method:"POST",params:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),b.apply(this,arguments)}function l(o,i){return Y.apply(this,arguments)}function Y(){return Y=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/getDetail",{method:"POST",params:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),Y.apply(this,arguments)}function j(o,i){return h.apply(this,arguments)}function h(){return h=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/getStatistic",{method:"POST",params:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),h.apply(this,arguments)}function U(o,i){return K.apply(this,arguments)}function K(){return K=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/search",{method:"POST",params:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),K.apply(this,arguments)}function $(o,i){return T.apply(this,arguments)}function T(){return T=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/disable",{method:"POST",params:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),T.apply(this,arguments)}function G(o,i){return F.apply(this,arguments)}function F(){return F=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/edit",{method:"GET",params:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),F.apply(this,arguments)}function z(o,i){return X.apply(this,arguments)}function X(){return X=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/edit",{method:"POST",data:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),X.apply(this,arguments)}function g(o,i){return L.apply(this,arguments)}function L(){return L=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/add",{method:"POST",data:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),L.apply(this,arguments)}function y(o,i){return H.apply(this,arguments)}function H(){return H=(0,d.Z)(n().mark(function o(i,O){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.WY)(_.s3+"app/delete",{method:"POST",data:(0,c.Z)({},i),credentials:"include"}));case 1:case"end":return t.stop()}},o)})),H.apply(this,arguments)}},56905:function(S,P,e){"use strict";e.d(P,{s8:function(){return x},IX:function(){return R},Pf:function(){return b},Up:function(){return Y},CF:function(){return h},Xf:function(){return K},P:function(){return T},Dz:function(){return F},K1:function(){return X},Yd:function(){return L},sg:function(){return H},oQ:function(){return i}});var c=e(96132),d=e(57361),E=e(9754),n=e.n(E),_=e(18811),s=e(21010),I="BRui";function x(a,t){return D.apply(this,arguments)}function D(){return D=(0,d.Z)(n().mark(function a(t,C){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.WY)(_.s3+"analysis/getInstance",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return r.stop()}},a)})),D.apply(this,arguments)}function R(a,t){return B.apply(this,arguments)}function B(){return B=(0,d.Z)(n().mark(function a(t,C){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.WY)(_.s3+"analysis/getInstanceList",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return r.stop()}},a)})),B.apply(this,arguments)}function b(a,t){return l.apply(this,arguments)}function l(){return l=(0,d.Z)(n().mark(function a(t,C){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.WY)(_.s3+"analysis/getAllInstance",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return r.stop()}},a)})),l.apply(this,arguments)}function Y(a,t){return j.apply(this,arguments)}function j(){return j=(0,d.Z)(n().mark(function a(t,C){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.WY)(_.s3+"analysis/getAllInstanceList",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return r.stop()}},a)})),j.apply(this,arguments)}function h(a,t){return U.apply(this,arguments)}function U(){return U=(0,d.Z)(n().mark(function a(t,C){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.WY)(_.s3+"analysis/getAppActive",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return r.stop()}},a)})),U.apply(this,arguments)}function K(a,t){return $.apply(this,arguments)}function $(){return $=(0,d.Z)(n().mark(function a(t,C){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.WY)(_.s3+"analysis/getAppActiveStat",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return r.stop()}},a)})),$.apply(this,arguments)}function T(a){return G.apply(this,arguments)}function G(){return G=(0,d.Z)(n().mark(function a(t){return n().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,s.WY)(_.s3+"analysis/getInstall",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return p.stop()}},a)})),G.apply(this,arguments)}function F(a){return z.apply(this,arguments)}function z(){return z=(0,d.Z)(n().mark(function a(t){return n().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,s.WY)(_.s3+"analysis/getInstallList",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return p.stop()}},a)})),z.apply(this,arguments)}function X(a){return g.apply(this,arguments)}function g(){return g=(0,d.Z)(n().mark(function a(t){return n().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,s.WY)(_.s3+"analysis/getAllInstall",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return p.stop()}},a)})),g.apply(this,arguments)}function L(a){return y.apply(this,arguments)}function y(){return y=(0,d.Z)(n().mark(function a(t){return n().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,s.WY)(_.s3+"analysis/getAllInstallList",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return p.stop()}},a)})),y.apply(this,arguments)}function H(a,t){return o.apply(this,arguments)}function o(){return o=(0,d.Z)(n().mark(function a(t,C){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.WY)(_.s3+"analysis/getAppInstall",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return r.stop()}},a)})),o.apply(this,arguments)}function i(a,t){return O.apply(this,arguments)}function O(){return O=(0,d.Z)(n().mark(function a(t,C){return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,s.WY)(_.s3+"analysis/getAppInstallStat",{method:"POST",params:(0,c.Z)({},t),credentials:"include"}));case 1:case"end":return r.stop()}},a)})),O.apply(this,arguments)}}}]);
