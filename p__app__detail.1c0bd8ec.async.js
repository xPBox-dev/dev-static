(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[967],{9056:function(k){k.exports={header:"header___3Y5Sz",wrap:"wrap___N0r8S"}},45572:function(k,K,e){"use strict";var w=e(68023),nt=e(99935),q=e(48579),st=e(46586),Q=e(17813),rt=e(19076),M=e(62842),it=e(68290),z=e(62604),lt=e(70012);w.D([Q.N,rt.N,M.N,q.N,lt.N,it.N,z.N,st.N]),K.Z=nt},77776:function(k,K,e){"use strict";e.r(K),e.d(K,{default:function(){return Kt}});var w=e(96132),nt=e(84305),q=e(69224),st=e(13254),Q=e(14277),rt=e(18106),M=e(51752),it=e(13062),z=e(71230),lt=e(95300),G=e(7277),ie=e(64896),gt=e(37744),le=e(22385),Et=e(69713),jt=e(57361),ue=e(59250),ut=e(13013),oe=e(6999),ot=e(75302),de=e(62350),dt=e(75443),ce=e(30887),f=e(99210),ve=e(34792),m=e(48086),he=e(20228),$=e(11382),xe=e(74379),b=e(38648),ct=e(33565),Zt=e(9754),vt=e.n(Zt),o=e(84787),Ct=e(48786),It=e(16894),At=e(57254),Bt=e(99165),Ft=e(7085),l=e(21010),d=e(84744),I=e(28030),H=e(96459),A=e(67294),ht=e(97221),xt=e(87155),pt=e(45572),Dt=e(65476),Pt=e(9056),ft=e.n(Pt),_=e(56837),St=e(18811),t=e(85893),Tt=function(c){var v=c.params,i=c.request,h=c.title,B=c.onFinished,y=c.children,g=A.useRef(Math.random().toString()),S=(0,l.QT)(i,{manual:!0,onSuccess:function(p){m.default.success({content:"\u64CD\u4F5C\u6210\u529F",duration:3,key:g.current}),B&&B(p)},onError:function(p){var D,s=p&&((D=p.data)===null||D===void 0?void 0:D.errorMessage);m.default.error({content:s||"\u64CD\u4F5C\u5931\u8D25",duration:3,key:g.current})}});return(0,t.jsx)(dt.Z,{placement:"top",title:h,okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){m.default.loading({content:"\u6B63\u5728\u5904\u7406...",duration:0,key:g.current}),S.run(v)},children:y})},V=Tt,Mt=e(13718),pe=e(89032),U=e(15746),fe=e(57663),Rt=e(71577),tt=e(73586),Ot=e(68628),$t=function(c){var v=c.appId,i=c.data,h=c.loading,B=c.onChanged,y=ot.ZP.useBreakpoint(),g=(0,l.QT)(_.wp,{manual:!0,onError:function(T){var E,P=T&&((E=T.data)===null||E===void 0?void 0:E.errorMessage);P?m.default.error("\u64CD\u4F5C\u5931\u8D25\uFF01"+P):m.default.error("\u64CD\u4F5C\u5931\u8D25\uFF01")}}),S=A.useRef(),F=A.useRef(),p=A.useRef(),D=(0,t.jsx)("div",{children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"\u5F53\u524D\u7248\u672C\u7BA1\u7406\u5668\u672A\u542F\u7528\uFF0C\u53EF\u70B9\u51FB\u4E0B\u65B9\u5F00\u5173\u5F00\u542F"}),(0,t.jsx)("br",{}),(0,t.jsx)(Rt.Z,{loading:g.loading,style:{marginTop:8},onClick:function(){return g.run({appId:v,enable:!0}).then(function(){return B&&B(!0).then(function(){var T,E,P;(T=F.current)===null||T===void 0||T.doPush(),(E=S.current)===null||E===void 0||E.doPush(),(P=p.current)===null||P===void 0||P.doPush()})})},children:"\u542F\u7528\u7248\u672C\u7BA1\u7406\u5668"})]})});return(0,t.jsx)($.Z,{spinning:(i==null?void 0:i.enabled)===!1,size:"large",indicator:(0,t.jsx)(Ot.Z,{}),tip:D,children:(0,t.jsxs)(z.Z,{justify:"space-between",children:[(0,t.jsx)(U.Z,{style:{width:0}}),(0,t.jsx)(U.Z,{span:7,lg:7,md:7,sm:24,xs:24,children:(0,t.jsx)(tt.Z,{channel:0,appId:v,title:"Stable",defaultData:i==null?void 0:i.stable,loading:h,actionRef:F})}),(0,t.jsx)(o.ZP.Divider,{style:y.md?{margin:"15px 0"}:{margin:0,width:"100%"},type:y.md?"vertical":"horizontal"}),(0,t.jsx)(U.Z,{span:7,lg:7,md:7,sm:24,xs:24,children:(0,t.jsx)(tt.Z,{channel:1,appId:v,title:"Beta",defaultData:i==null?void 0:i.beta,loading:h,actionRef:S})}),(0,t.jsx)(o.ZP.Divider,{style:y.md?{margin:"15px 0"}:{margin:0,width:"100%"},type:y.md?"vertical":"horizontal"}),(0,t.jsx)(U.Z,{span:7,lg:7,md:7,sm:24,xs:24,children:(0,t.jsx)(tt.Z,{channel:2,appId:v,title:"Alpha",defaultData:i==null?void 0:i.alpha,loading:h,actionRef:p})}),(0,t.jsx)(U.Z,{style:{width:0}})]})})},bt=$t,Lt=e(57845),Nt=e(20640),zt=e.n(Nt),Y=o.ZP.Divider;function Ut(L){if(L==null||L=="")return"0 Bytes";var c=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],v=0,i=parseFloat(L);v=Math.floor(Math.log(i)/Math.log(1024));var h=i/Math.pow(1024,v);return h=h.toFixed(2),h+c[v]}var Wt=function(c){var v,i,h,B,y,g,S,F,p,D,s=c.match.params.id,T=(0,A.useState)("info"),E=(0,ct.Z)(T,2),P=E[0],Qt=E[1],et=(0,l.QT)(function(){return(0,d.Nm)({id:s})}),a=et.data,Gt=et.loading,Ht=et.run,W=A.useRef(),N=A.useRef("install"),Vt=(0,l.QT)(function(n){return(0,_.VF)({appId:s,channel:n})},{manual:!0,throwOnError:!0}),J=function(r){b.default.open({message:"\u6B63\u5728\u5C1D\u8BD5\u63A8\u9001",description:"\u63A8\u9001\u9700\u8981\u4E00\u5B9A\u65F6\u95F4\uFF0C\u8BF7\u7A0D\u7B49\u3002",icon:(0,t.jsx)($.Z,{}),key:"push"}),Vt.run(r).then(function(C){b.default.close("push"),C.status===3?b.default.error({message:"\u63A8\u9001\u7248\u672C\u5931\u8D25",description:C.error,duration:5}):b.default.success({message:"\u63A8\u9001\u7248\u672C\u6210\u529F",description:"\u63A8\u9001\u7248\u672C\u6210\u529F\u3002"}),x.run()}).catch(function(C){b.default.close("push"),b.default.error({message:"\u63A8\u9001\u7248\u672C\u5931\u8D25",description:"\u63A8\u9001\u7248\u672C\u5931\u8D25\u4E86\u3002"}),x.run()})},Yt=A.useState([{value:s,label:(0,t.jsx)($.Z,{size:"small"})}]),mt=(0,ct.Z)(Yt,2),Jt=mt[0],Xt=mt[1],R=(0,l.QT)(function(){return(0,d.rZ)({id:s,type:"install"})}),j=(0,l.QT)(function(){return(0,d.rZ)({id:s,type:"instance"})},{manual:!0}),Z=(0,l.QT)(function(){return(0,d.rZ)({id:s,type:"device"})},{manual:!0}),O=(0,l.QT)(function(){return(0,d.rZ)({id:s,type:"count"})},{manual:!0}),x=(0,l.QT)(function(){return(0,_.lR)({appId:s})},{manual:!0}),yt=function(){Ht(),N.current==="count"?O.run():O.reset(),N.current==="device"?Z.run():Z.reset(),N.current==="instance"?j.run():j.reset(),N.current==="install"?R.run():R.reset(),P==="update"?x.run():x.reset()};(0,Lt.e)(function(){yt()},[s]),(0,A.useEffect)(function(){Xt([{value:a==null?void 0:a.id,label:(a==null?void 0:a.appName)+" - "+(a==null?void 0:a.appId)}])},[a]);var kt=(0,l.QT)(function(n){return(0,d.h$)({appId:s,disable:n})},{manual:!0,onSuccess:function(){m.default.success({content:"\u4FEE\u6539\u6210\u529F",duration:3,key:"status"}),yt()},onError:function(){m.default.error({content:"\u4FEE\u6539\u5931\u8D25",duration:3,key:"status"})}}),wt=(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(dt.Z,{placement:"top",title:"\u786E\u5B9A\u8981"+((a==null?void 0:a.status)!==d.w$.DISABLED?"\u4E0B\u67B6\u8BE5\u5E94\u7528\uFF1F\u4E0B\u67B6\u540E\u5C06\u5BFC\u81F4\u5DF2\u5B89\u88C5\u7528\u6237\u65E0\u6CD5\u7EE7\u7EED\u4F7F\u7528\uFF01":"\u4E0A\u67B6\u5E94\u7528"),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){m.default.loading({content:"\u6B63\u5728\u5904\u7406...",duration:0,key:"status"}),kt.run((a==null?void 0:a.status)===d.w$.NORMAL)},children:(0,t.jsx)(f.Z.Item,{disabled:!((a==null?void 0:a.status)===d.w$.NORMAL||(a==null?void 0:a.status)===d.w$.DISABLED),children:(a==null?void 0:a.status)!==d.w$.DISABLED?"\u4E0B\u67B6\u5E94\u7528":"\u4E0A\u67B6\u5E94\u7528"},"status")}),(0,t.jsx)(f.Z.Item,{onClick:function(){return l.m8.push("/app/edit/"+s)},children:"\u4FEE\u6539\u5E94\u7528"},"update"),(0,t.jsx)(f.Z.Item,{onClick:function(){return window.open(St.s3+"app/getInstaller?id="+s)},children:"\u751F\u6210\u5728\u7EBF\u5B89\u88C5\u5305"},"installer")]}),qt=function(r){return(0,t.jsxs)(f.Z,{children:[r.status===I.Ax.UNPUBLISHED&&(0,t.jsx)(V,{title:"\u786E\u5B9A\u8981\u53D1\u5E03\uFF1F",params:{appId:s,id:r.id,disable:!1},request:I.h$,onFinished:function(u){W.current.reload(),u.pushChannel?J(u.pushChannel):x.run()},children:(0,t.jsx)(f.Z.Item,{children:"\u53D1\u5E03"},"publish")},"publish"),r.status===I.Ax.DISABLED&&(0,t.jsx)(V,{title:"\u786E\u5B9A\u8981\u4E0A\u67B6\uFF1F",params:{appId:s,id:r.id,disable:!1},request:I.h$,onFinished:function(u){W.current.reload(),u.pushChannel?J(u.pushChannel):x.run()},children:(0,t.jsx)(f.Z.Item,{children:"\u4E0A\u67B6"},"enable")},"enable"),(r.status===I.Ax.NORMAL||r.status===I.Ax.CHANGED)&&(0,t.jsx)(V,{title:"\u786E\u5B9A\u8981\u4E0B\u67B6\uFF1F",params:{appId:s,id:r.id,disable:!0},request:I.h$,onFinished:function(u){W.current.reload(),u.pushChannel?J(u.pushChannel):x.run()},children:(0,t.jsx)(f.Z.Item,{children:"\u4E0B\u67B6"},"disable")},"disable"),(0,t.jsx)(f.Z.Divider,{}),(0,t.jsx)(V,{title:"\u786E\u5B9A\u8981\u5220\u9664\uFF1F",params:{appId:s,id:r.id},request:I.IV,onFinished:function(u){W.current.reload(),u.pushChannel?J(u.pushChannel):x.run()},children:(0,t.jsx)(f.Z.Item,{danger:!0,children:"\u5220\u9664"},"delete")},"delete")]})},X=ot.ZP.useBreakpoint(),_t={tooltip:{trigger:"axis"},legend:{data:["\u6D3B\u8DC3\u8BBE\u5907\u6570","\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4","\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907"]},grid:{top:"30px",left:"10px",right:"10px",bottom:"50px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:(v=Z.data)===null||v===void 0?void 0:v.x}],yAxis:[{name:"\u8BBE\u5907\u6570",type:"value",minInterval:1},{name:"\u6D3B\u8DC3\u65F6\u95F4(\u79D2)",type:"value",max:3600}],dataZoom:[{show:!0,xAxisIndex:0,start:66.666}],series:[{name:"\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907",type:"custom",stack:"\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907",renderItem:function(){},data:[(i=Z.data)===null||i===void 0?void 0:i.total],encode:{x:0,y:0,tooltip:0},markLine:{data:[{type:"max",name:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",label:{position:"insideStartTop",formatter:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"},tooltip:{trigger:"item"},yAxis:(h=Z.data)===null||h===void 0?void 0:h.total}]}},{name:"\u6D3B\u8DC3\u8BBE\u5907\u6570",type:"line",smooth:!0,stack:"\u8BBE\u5907\u6570",color:"#D23325",data:(B=Z.data)===null||B===void 0?void 0:B.instance},{name:"\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4",type:"line",yAxisIndex:1,smooth:!0,color:"#5888F3",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1890ff"},{offset:.5,color:"#7ec2f3"},{offset:1,color:"#ffffff"}],global:!1}},stack:"\u65F6\u95F4",data:(y=Z.data)===null||y===void 0?void 0:y.time}]},te={tooltip:{trigger:"axis"},legend:{data:["\u6D3B\u8DC3\u5B9E\u4F8B\u6570","\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4","\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"]},grid:{top:"30px",left:"10px",right:"10px",bottom:"50px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:(g=j.data)===null||g===void 0?void 0:g.x}],yAxis:[{name:"\u5B9E\u4F8B\u6570",type:"value",minInterval:1},{name:"\u6D3B\u8DC3\u65F6\u95F4(\u79D2)",type:"value",max:3600}],dataZoom:[{show:!0,xAxisIndex:0,start:66.666}],series:[{name:"\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",type:"custom",stack:"\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",renderItem:function(){},data:[(S=j.data)===null||S===void 0?void 0:S.total],encode:{x:0,y:0,tooltip:0},markLine:{data:[{type:"max",name:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",label:{position:"insideStartTop",formatter:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"},tooltip:{trigger:"item"},yAxis:(F=j.data)===null||F===void 0?void 0:F.total}]}},{name:"\u6D3B\u8DC3\u5B9E\u4F8B\u6570",type:"line",smooth:!0,stack:"\u5B9E\u4F8B\u6570",color:"#D23325",data:(p=j.data)===null||p===void 0?void 0:p.instance},{name:"\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4",type:"line",yAxisIndex:1,smooth:!0,color:"#5888F3",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1890ff"},{offset:.5,color:"#7ec2f3"},{offset:1,color:"#ffffff"}],global:!1}},stack:"\u65F6\u95F4",data:(D=j.data)===null||D===void 0?void 0:D.time}]},ee=[{title:"Build",dataIndex:"build",key:"build"},{title:"\u7248\u672C\u53F7",dataIndex:"versionName",key:"versionName",copyable:!0},{title:"\u7248\u672C\u7C7B\u578B",dataIndex:"channel",key:"channel",hideInSearch:!0,valueType:"select",filters:!0,onFilter:!0,valueEnum:{0:{text:"Stable"},1:{text:"Beta"},2:{text:"Alpha"}}},{title:"\u53D1\u5E03\u65F6\u95F4",dataIndex:"createTime",key:"createTime",hideInSearch:!0},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5",status:"Warning"},1:{text:"\u6B63\u5E38",status:"Success"},2:{text:"\u5BA1\u6838\u4E2D",status:"Processing"},3:{text:"\u5BA1\u6838\u672A\u901A\u8FC7",status:"Error"},4:{text:"\u5DF2\u4E0B\u67B6",status:"Warning"},5:{text:"\u7B49\u5F85\u5220\u9664",status:"Warning"},6:{text:"\u8FDD\u89C4\u5C01\u7981",status:"Error"},7:{text:"\u6B63\u5E38-\u5F85\u5BA1\u6838",status:"Processing"},8:{text:"\u672A\u53D1\u5E03",status:"Warning"}}},{title:"\u6587\u4EF6\u5927\u5C0F",dataIndex:"size",key:"size",hideInSearch:!0,render:function(r){return(0,t.jsx)("span",{children:Ut(r)})}},{title:"\u64CD\u4F5C",key:"action",hideInSearch:!0,render:function(r,C){return(0,t.jsx)(ut.Z,{overlay:qt(C),children:(0,t.jsxs)("a",{className:"ant-dropdown-link",onClick:function(re){return re.preventDefault()},children:["\u64CD\u4F5C",(0,t.jsx)(At.Z,{})]})})}}],ae=(0,l.md)();function ne(n){return at.apply(this,arguments)}function at(){return at=(0,jt.Z)(vt().mark(function n(r){return vt().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,d.yC)((0,w.Z)({search:r},ae.canAdmin?{all:!0}:{})));case 1:case"end":return u.stop()}},n)})),at.apply(this,arguments)}var se=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Dt.Z,{className:ft().headerSelect,showSearch:!0,value:s,placeholder:"\u9009\u62E9\u5E94\u7528",bordered:!1,fetchOptions:ne,size:"large",setMyOption:Jt,style:{minWidth:"200px",maxWidth:"350px",marginLeft:-11},onChange:function(r){l.m8.push("/app/detail/"+r)}}),(0,t.jsx)(Et.Z,{title:"\u590D\u5236\u5E94\u7528ID",children:(0,t.jsx)("a",{onClick:function(){return zt()(a.appId)?m.default.success("\u5DF2\u590D\u5236"):m.default.error("\u590D\u5236\u5931\u8D25")},children:(0,t.jsx)(Bt.Z,{style:{fontSize:"16px"}})})})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)($.Z,{spinning:Gt,indicator:(0,t.jsx)(Ft.Z,{spin:!0}),size:"large",tip:"\u52A0\u8F7D\u4E2D...",children:[(0,t.jsx)(gt.Z,{className:ft().header,onBack:function(){return l.m8.goBack()},title:se,ghost:!1,extra:(0,t.jsx)(Ct.Z,{children:(0,t.jsx)(ut.Z.Button,{overlay:wt,onClick:function(){return l.m8.push("/app/update/"+s)},children:"\u7248\u672C\u7BA1\u7406"})}),style:{borderBottom:"1px solid #EEEEEE"}}),(0,t.jsxs)(o.ZP,{headerBordered:!0,tabs:{tabPosition:"left",activeKey:P,onChange:function(r){Qt(r),r==="update"&&!x.data&&x.run()}},children:[(0,t.jsxs)(o.ZP.TabPane,{tab:"\u5E94\u7528\u7B80\u4ECB",cardProps:{bodyStyle:{padding:0}},children:[(0,t.jsx)(z.Z,{children:(0,t.jsxs)(o.ZP.Group,{direction:X.lg?"row":"column",children:[(0,t.jsx)(o.ZP,{children:(0,t.jsx)(G.Z,{title:"\u63A8\u9001\u7684\u7248\u672C",value:a==null?void 0:a.lastPush,precision:2})}),(0,t.jsx)(Y,{type:X.lg?"vertical":"horizontal"}),(0,t.jsx)(o.ZP,{children:(0,t.jsx)(G.Z,{title:"\u6700\u540E\u66F4\u65B0\u65F6\u95F4",value:a==null?void 0:a.lastUpdate,precision:2})}),(0,t.jsx)(Y,{type:X.lg?"vertical":"horizontal"}),(0,t.jsx)(o.ZP,{children:(0,t.jsx)(G.Z,{title:"\u72B6\u6001",value:d.w$.getText(a==null?void 0:a.status),valueStyle:{color:d.w$.getColor(a==null?void 0:a.status)}})}),(0,t.jsx)(Y,{type:X.lg?"vertical":"horizontal"}),(0,t.jsx)(o.ZP,{children:(0,t.jsx)(G.Z,{title:"\u62E5\u6709\u7248\u672C\u6570",value:a==null?void 0:a.versionCount})})]})}),(0,t.jsx)(Y,{type:"horizontal"}),(0,t.jsx)(z.Z,{children:(0,t.jsx)(o.ZP,{title:"\u5E94\u7528\u7B80\u4ECB",children:a==null?void 0:a.detail})})]},"info"),(0,t.jsx)(o.ZP.TabPane,{tab:"\u66F4\u65B0\u7BA1\u7406",cardProps:{bodyStyle:{padding:0}},children:(0,t.jsx)(bt,{appId:s,loading:x.loading,data:x.data,onChanged:function(){return x.run()}})},"update"),(0,t.jsxs)(o.ZP.TabPane,{tab:"\u5176\u4ED6\u4FE1\u606F",children:[(0,t.jsx)(H.Z,{title:"\u57FA\u7840\u4FE1\u606F",column:1,columns:[{label:"\u5E94\u7528\u67B6\u6784",dataIndex:"architecture",key:"architecture",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5"},1:{text:"\u6B63\u5E38"},2:{text:"\u5BA1\u6838\u4E2D"}}},{label:"\u5E94\u7528\u5206\u7C7B",dataIndex:"architecture",key:"architecture",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5"},1:{text:"\u6B63\u5E38"},2:{text:"\u5BA1\u6838\u4E2D"}}},{label:"\u4EA7\u54C1\u7F51\u7AD9",dataIndex:"web",key:"web"}],dataSource:a==null?void 0:a.base}),(0,t.jsxs)(H.Z,{title:"API\u4FE1\u606F",column:1,dataSource:a==null?void 0:a.api,children:[(0,t.jsx)(H.Z.Item,{dataIndex:"license",label:"\u6388\u6743\u4FE1\u606F\u56DE\u8C03"}),(0,t.jsx)(H.Z.Item,{dataIndex:"api",label:"\u5E94\u7528\u4FE1\u606F\u56DE\u8C03"})]})]},"other"),(0,t.jsx)(o.ZP.TabPane,{tab:"\u7EDF\u8BA1\u4FE1\u606F",cardProps:{bodyStyle:{padding:"0 10px 10px 10px"}},children:(0,t.jsxs)(M.Z,{size:"small",tabBarExtraContent:(0,t.jsx)("a",{onClick:function(){N.current==="install"?l.m8.push("/analysis/install/"+s):l.m8.push("/analysis/instance/"+s)},style:{paddingRight:"10px"},children:"\u66F4\u591A\u6570\u636E"}),tabBarStyle:{marginBottom:24},onChange:function(r){switch(N.current=r,r){case"install":!R.data&&R.run();break;case"instance":!j.data&&j.run();break;case"count":!O.data&&O.run();break;case"device":!Z.data&&Z.run();break}},children:[(0,t.jsx)(M.Z.TabPane,{tab:"\u65E5\u5B89\u88C5\u91CF",style:{position:"relative"},children:(0,t.jsx)(ht.Z,{loading:R.loading||!R.data,height:300,data:R.data||[],xField:"x",yField:"y",seriesField:"type",isStack:!0,xAxis:{visible:!0},yAxis:{visible:!0,title:{visible:!1}},slider:{start:0,end:1},title:{visible:!0,text:"\u6700\u8FD1\u4E00\u4E2A\u6708\u5B89\u88C5\u91CF\u8D8B\u52BF",style:{fontSize:14}},meta:{y:{alias:"\u5B89\u88C5\u91CF"}}})},"install"),(0,t.jsx)(M.Z.TabPane,{tab:"\u6D3B\u8DC3\u5B9E\u4F8B",style:{position:"relative"},children:(0,t.jsx)($.Z,{spinning:j.loading,children:(0,t.jsx)(xt.Z,{echarts:pt.Z,option:te,style:{height:300}})})},"instance"),(0,t.jsx)(M.Z.TabPane,{tab:"\u542F\u52A8\u6B21\u6570",style:{position:"relative"},children:(0,t.jsx)(ht.Z,{loading:O.loading||!O.data,height:300,data:O.data||[],xField:"x",yField:"y",xAxis:{visible:!0},yAxis:{visible:!0,title:{visible:!1}},slider:{start:.6666,end:1},title:{visible:!0,text:"\u542F\u52A8\u6B21\u6570\u8D8B\u52BF",style:{fontSize:14}},meta:{y:{alias:"\u542F\u52A8\u6B21\u6570"}}})},"count"),(0,t.jsx)(M.Z.TabPane,{tab:"\u6D3B\u8DC3\u8BBE\u5907",style:{position:"relative"},children:(0,t.jsx)($.Z,{spinning:Z.loading,children:(0,t.jsx)(xt.Z,{echarts:pt.Z,option:_t,style:{height:300}})})},"device")]})},"stat")]})]}),(0,t.jsx)(q.ZP,{renderEmpty:function(){return(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(Q.Z,{image:Q.Z.PRESENTED_IMAGE_SIMPLE,description:(0,t.jsxs)("span",{children:["\u6682\u65F6\u6CA1\u6709\u54E6\uFF0C\u53EF\u4EE5\u53BB",(0,t.jsx)("a",{href:"#API",children:"\u521B\u5EFA\u4E00\u4E2A"})]})})})},children:(0,t.jsx)(It.ZP,{params:{appId:s},request:I.gp,sticky:{offsetHeader:Mt.M},headerTitle:"\u7248\u672C\u5217\u8868",rowKey:"id",actionRef:W,search:{labelWidth:120,filterType:"light"},style:{marginTop:30},scroll:{x:600},options:{fullScreen:!0,reload:!0,setting:!0},columns:ee})})]})},Kt=Wt}}]);
