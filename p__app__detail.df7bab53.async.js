(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[967],{9056:function(G){G.exports={header:"header___3Y5Sz",wrap:"wrap___N0r8S"}},45572:function(G,R,e){"use strict";var H=e(68023),_=e(99935),Y=e(48579),tt=e(46586),N=e(17813),et=e(19076),E=e(62842),at=e(68290),g=e(62604),nt=e(70012);H.D([N.N,et.N,E.N,Y.N,nt.N,at.N,g.N,tt.N]),R.Z=_},52399:function(G,R,e){"use strict";e.r(R),e.d(R,{default:function(){return Ot}});var H=e(96132),_=e(84305),Y=e(69224),tt=e(13254),N=e(14277),et=e(18106),E=e(51752),at=e(89032),g=e(15746),nt=e(13062),V=e(71230),wt=e(95300),z=e(7277),qt=e(64896),ft=e(37744),yt=e(57361),_t=e(59250),st=e(13013),te=e(6999),Et=e(75302),ee=e(62350),it=e(75443),ae=e(30887),u=e(99210),ne=e(34792),I=e(48086),se=e(20228),W=e(11382),lt=e(33565),gt=e(9754),rt=e.n(gt),o=e(84787),jt=e(48786),Zt=e(93660),At=e(57254),It=e(7085),l=e(21010),r=e(84744),c=e(28030),U=e(96459),j=e(67294),ot=e(97221),ut=e(87155),dt=e(45572),Bt=e(65476),Ft=e(9056),ct=e.n(Ft),J=e(73586),Dt=e(56837),Ct=e(18811),t=e(85893),Pt=function(v){var x=v.params,f=v.request,h=v.title,F=v.onFinished,M=v.children,Z=j.useRef(Math.random().toString()),O=(0,l.QT)(f,{manual:!0,onSuccess:function(){I.default.success({content:"\u64CD\u4F5C\u6210\u529F",duration:3,key:Z.current}),F&&F()},onError:function(C){var A,$=C&&((A=C.data)===null||A===void 0?void 0:A.errorMessage);I.default.error({content:$||"\u64CD\u4F5C\u5931\u8D25",duration:3,key:Z.current})}});return(0,t.jsx)(it.Z,{placement:"top",title:h,okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){I.default.loading({content:"\u6B63\u5728\u5904\u7406...",duration:0,key:Z.current}),O.run(x)},children:M})},K=Pt,St=e(13718),B=o.ZP.Divider;function Tt(T){if(T==null||T=="")return"0 Bytes";var v=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],x=0,f=parseFloat(T);x=Math.floor(Math.log(f)/Math.log(1024));var h=f/Math.pow(1024,x);return h=h.toFixed(2),h+v[x]}var Mt=function(v){var x,f,h,F,M,Z,O,D,C,A,$,X,k,n=v.match.params.id,$t=(0,j.useState)("info"),vt=(0,lt.Z)($t,2),xt=vt[0],bt=vt[1],w=(0,l.QT)(function(){return(0,r.Nm)({id:n})}),a=w.data,Lt=w.loading,Rt=w.run,b=j.useRef(),ht=j.useRef("install"),Nt=j.useState([{value:n,label:(0,t.jsx)(W.Z,{size:"small"})}]),pt=(0,lt.Z)(Nt,2),zt=pt[0],Wt=pt[1],Q=(0,l.QT)(function(){return(0,r.rZ)({id:n,type:"install"})}),p=(0,l.QT)(function(){return(0,r.rZ)({id:n,type:"instance"})},{manual:!0}),m=(0,l.QT)(function(){return(0,r.rZ)({id:n,type:"device"})},{manual:!0}),P=(0,l.QT)(function(){return(0,r.rZ)({id:n,type:"count"})},{manual:!0}),d=(0,l.QT)(function(){return(0,Dt.lR)({appId:n})},{manual:!0}),mt=function(){Rt(),P.reset(),m.reset(),p.reset(),Q.run(),xt==="update"?d.run():d.reset()};(0,j.useEffect)(function(){mt()},[n]),(0,j.useEffect)(function(){Wt([{value:a==null?void 0:a.id,label:(a==null?void 0:a.appName)+" - "+(a==null?void 0:a.appId)}])},[a]);var Ut=(0,l.QT)(function(s){return(0,r.h$)({appId:n,disable:s})},{manual:!0,onSuccess:function(){I.default.success({content:"\u4FEE\u6539\u6210\u529F",duration:3,key:"status"}),mt()},onError:function(){I.default.error({content:"\u4FEE\u6539\u5931\u8D25",duration:3,key:"status"})}}),Kt=(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(it.Z,{placement:"top",title:"\u786E\u5B9A\u8981"+((a==null?void 0:a.status)!==r.w$.DISABLED?"\u4E0B\u67B6\u8BE5\u5E94\u7528\uFF1F\u4E0B\u67B6\u540E\u5C06\u5BFC\u81F4\u5DF2\u5B89\u88C5\u7528\u6237\u65E0\u6CD5\u7EE7\u7EED\u4F7F\u7528\uFF01":"\u4E0A\u67B6\u5E94\u7528"),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){I.default.loading({content:"\u6B63\u5728\u5904\u7406...",duration:0,key:"status"}),Ut.run((a==null?void 0:a.status)===r.w$.NORMAL)},children:(0,t.jsx)(u.Z.Item,{disabled:!((a==null?void 0:a.status)===r.w$.NORMAL||(a==null?void 0:a.status)===r.w$.DISABLED),children:(a==null?void 0:a.status)!==r.w$.DISABLED?"\u4E0B\u67B6\u5E94\u7528":"\u4E0A\u67B6\u5E94\u7528"},"status")}),(0,t.jsx)(u.Z.Item,{onClick:function(){return l.m8.push("/app/update/"+n)},children:"\u4FEE\u6539\u66F4\u65B0\u8BBE\u7F6E"},"update"),(0,t.jsx)(u.Z.Item,{onClick:function(){return window.open(Ct.s3+"app/getInstaller?id="+n)},children:"\u751F\u6210\u5728\u7EBF\u5B89\u88C5\u5305"},"installer")]}),Qt=function(i){return(0,t.jsxs)(u.Z,{children:[i.status===c.Ax.UNPUBLISHED&&(0,t.jsx)(K,{title:"\u786E\u5B9A\u8981\u53D1\u5E03\uFF1F",params:{appId:n,id:i.id,disable:!1},request:c.h$,onFinished:function(){return b.current.reload()},children:(0,t.jsx)(u.Z.Item,{children:"\u53D1\u5E03"},"publish")},"enable"),i.status===c.Ax.DISABLED&&(0,t.jsx)(K,{title:"\u786E\u5B9A\u8981\u4E0A\u67B6\uFF1F",params:{appId:n,id:i.id,disable:!1},request:c.h$,onFinished:function(){return b.current.reload()},children:(0,t.jsx)(u.Z.Item,{children:"\u4E0A\u67B6"},"enable")},"enable"),(i.status===c.Ax.NORMAL||i.status===c.Ax.CHANGED)&&(0,t.jsx)(K,{title:"\u786E\u5B9A\u8981\u4E0B\u67B6\uFF1F",params:{appId:n,id:i.id,disable:!0},request:c.h$,onFinished:function(){return b.current.reload()},children:(0,t.jsx)(u.Z.Item,{children:"\u4E0B\u67B6"},"disable")},"disable"),(0,t.jsx)(u.Z.Divider,{}),(0,t.jsx)(K,{title:"\u786E\u5B9A\u8981\u5220\u9664\uFF1F",params:{appId:n,id:i.id},request:c.IV,onFinished:function(){return b.current.reload()},children:(0,t.jsx)(u.Z.Item,{danger:!0,children:"\u5220\u9664"},"delete")},"disable")]})},y=Et.ZP.useBreakpoint(),Gt={tooltip:{trigger:"axis"},legend:{data:["\u6D3B\u8DC3\u8BBE\u5907\u6570","\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4","\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907"]},grid:{top:"30px",left:"10px",right:"10px",bottom:"50px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:(x=m.data)===null||x===void 0?void 0:x.x}],yAxis:[{name:"\u8BBE\u5907\u6570",type:"value",minInterval:1},{name:"\u6D3B\u8DC3\u65F6\u95F4(\u79D2)",type:"value",max:3600}],dataZoom:[{show:!0,xAxisIndex:0,start:66.666}],series:[{name:"\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907",type:"custom",stack:"\u7D2F\u8BA1\u6D3B\u8DC3\u8BBE\u5907",renderItem:function(){},data:[(f=m.data)===null||f===void 0?void 0:f.total],encode:{x:0,y:0,tooltip:0},markLine:{data:[{type:"max",name:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",label:{position:"insideStartTop",formatter:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"},tooltip:{trigger:"item"},yAxis:(h=m.data)===null||h===void 0?void 0:h.total}]}},{name:"\u6D3B\u8DC3\u8BBE\u5907\u6570",type:"line",smooth:!0,stack:"\u8BBE\u5907\u6570",color:"#D23325",data:(F=m.data)===null||F===void 0?void 0:F.instance},{name:"\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4",type:"line",yAxisIndex:1,smooth:!0,color:"#5888F3",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1890ff"},{offset:.5,color:"#7ec2f3"},{offset:1,color:"#ffffff"}],global:!1}},stack:"\u65F6\u95F4",data:(M=m.data)===null||M===void 0?void 0:M.time}]},Ht={tooltip:{trigger:"axis"},legend:{data:["\u6D3B\u8DC3\u5B9E\u4F8B\u6570","\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4","\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"]},grid:{top:"30px",left:"10px",right:"10px",bottom:"50px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:(Z=p.data)===null||Z===void 0?void 0:Z.x}],yAxis:[{name:"\u5B9E\u4F8B\u6570",type:"value",minInterval:1},{name:"\u6D3B\u8DC3\u65F6\u95F4(\u79D2)",type:"value",max:3600}],dataZoom:[{show:!0,xAxisIndex:0,start:66.666}],series:[{name:"\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",type:"custom",stack:"\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",renderItem:function(){},data:[(O=p.data)===null||O===void 0?void 0:O.total],encode:{x:0,y:0,tooltip:0},markLine:{data:[{type:"max",name:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B",label:{position:"insideStartTop",formatter:"\u672C\u65E5\u7D2F\u8BA1\u6D3B\u8DC3\u5B9E\u4F8B"},tooltip:{trigger:"item"},yAxis:(D=p.data)===null||D===void 0?void 0:D.total}]}},{name:"\u6D3B\u8DC3\u5B9E\u4F8B\u6570",type:"line",smooth:!0,stack:"\u5B9E\u4F8B\u6570",color:"#D23325",data:(C=p.data)===null||C===void 0?void 0:C.instance},{name:"\u5E73\u5747\u6D3B\u8DC3\u65F6\u95F4",type:"line",yAxisIndex:1,smooth:!0,color:"#5888F3",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1890ff"},{offset:.5,color:"#7ec2f3"},{offset:1,color:"#ffffff"}],global:!1}},stack:"\u65F6\u95F4",data:(A=p.data)===null||A===void 0?void 0:A.time}]},Yt=[{title:"Build",dataIndex:"build",key:"build"},{title:"\u7248\u672C\u53F7",dataIndex:"versionName",key:"versionName",copyable:!0},{title:"\u7248\u672C\u7C7B\u578B",dataIndex:"channel",key:"channel",hideInSearch:!0,valueType:"select",filters:!0,onFilter:!0,valueEnum:{0:{text:"Stable"},1:{text:"Beta"},2:{text:"Alpha"}}},{title:"\u53D1\u5E03\u65F6\u95F4",dataIndex:"createTime",key:"createTime",hideInSearch:!0},{title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5",status:"Warning"},1:{text:"\u6B63\u5E38",status:"Success"},2:{text:"\u5BA1\u6838\u4E2D",status:"Processing"},3:{text:"\u5BA1\u6838\u672A\u901A\u8FC7",status:"Error"},4:{text:"\u5DF2\u4E0B\u67B6",status:"Warning"},5:{text:"\u7B49\u5F85\u5220\u9664",status:"Warning"},6:{text:"\u8FDD\u89C4\u5C01\u7981",status:"Error"},7:{text:"\u6B63\u5E38-\u5F85\u5BA1\u6838",status:"Processing"},8:{text:"\u672A\u53D1\u5E03",status:"Warning"}}},{title:"\u6587\u4EF6\u5927\u5C0F",dataIndex:"size",key:"size",hideInSearch:!0,render:function(i){return(0,t.jsx)("span",{children:Tt(i)})}},{title:"\u64CD\u4F5C",key:"action",hideInSearch:!0,render:function(i,S){return(0,t.jsx)(st.Z,{overlay:Qt(S),children:(0,t.jsxs)("a",{className:"ant-dropdown-link",onClick:function(kt){return kt.preventDefault()},children:["\u64CD\u4F5C",(0,t.jsx)(At.Z,{})]})})}}],Vt=(0,l.md)();function Jt(s){return q.apply(this,arguments)}function q(){return q=(0,yt.Z)(rt().mark(function s(i){return rt().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",(0,r.yC)((0,H.Z)({search:i},Vt.canAdmin?{all:!0}:{})));case 1:case"end":return L.stop()}},s)})),q.apply(this,arguments)}var Xt=(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Bt.Z,{className:ct().headerSelect,showSearch:!0,value:n,placeholder:"\u9009\u62E9\u5E94\u7528",bordered:!1,fetchOptions:Jt,size:"large",setMyOption:zt,style:{minWidth:"200px",maxWidth:"350px",marginLeft:-11},onChange:function(i){l.m8.push("/app/detail/"+i)}})});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(W.Z,{spinning:Lt,indicator:(0,t.jsx)(It.Z,{spin:!0}),size:"large",tip:"\u52A0\u8F7D\u4E2D...",children:[(0,t.jsx)(ft.Z,{className:ct().header,onBack:function(){return l.m8.goBack()},title:Xt,ghost:!1,extra:(0,t.jsx)(jt.Z,{children:(0,t.jsx)(st.Z.Button,{overlay:Kt,onClick:function(){return l.m8.push("/app/edit/"+n)},children:"\u4FEE\u6539\u5E94\u7528"})}),style:{borderBottom:"1px solid #EEEEEE"}}),(0,t.jsxs)(o.ZP,{headerBordered:!0,tabs:{tabPosition:"left",activeKey:xt,onChange:function(i){bt(i),i==="update"&&!d.data&&d.run()}},children:[(0,t.jsxs)(o.ZP.TabPane,{tab:"\u5E94\u7528\u7B80\u4ECB",cardProps:{bodyStyle:{padding:0}},children:[(0,t.jsx)(V.Z,{children:(0,t.jsxs)(o.ZP.Group,{direction:y.lg?"row":"column",children:[(0,t.jsx)(o.ZP,{children:(0,t.jsx)(z.Z,{title:"\u63A8\u9001\u7684\u7248\u672C",value:a==null?void 0:a.lastPush,precision:2})}),(0,t.jsx)(B,{type:y.lg?"vertical":"horizontal"}),(0,t.jsx)(o.ZP,{children:(0,t.jsx)(z.Z,{title:"\u6700\u540E\u66F4\u65B0\u65F6\u95F4",value:a==null?void 0:a.lastUpdate,precision:2})}),(0,t.jsx)(B,{type:y.lg?"vertical":"horizontal"}),(0,t.jsx)(o.ZP,{children:(0,t.jsx)(z.Z,{title:"\u72B6\u6001",value:r.w$.getText(a==null?void 0:a.status),valueStyle:{color:r.w$.getColor(a==null?void 0:a.status)}})}),(0,t.jsx)(B,{type:y.lg?"vertical":"horizontal"}),(0,t.jsx)(o.ZP,{children:(0,t.jsx)(z.Z,{title:"\u62E5\u6709\u7248\u672C\u6570",value:a==null?void 0:a.versionCount})})]})}),(0,t.jsx)(B,{type:"horizontal"}),(0,t.jsx)(V.Z,{children:(0,t.jsx)(o.ZP,{title:"\u5E94\u7528\u7B80\u4ECB",children:a==null?void 0:a.detail})})]},"info"),(0,t.jsx)(o.ZP.TabPane,{tab:"\u66F4\u65B0\u7BA1\u7406",cardProps:{bodyStyle:{padding:0}},children:(0,t.jsxs)(V.Z,{justify:"space-between",children:[(0,t.jsx)(g.Z,{style:{width:0}}),(0,t.jsx)(g.Z,{span:7,lg:7,md:7,sm:24,xs:24,children:(0,t.jsx)(J.Z,{channel:0,appId:n,title:"Stable",defaultData:($=d.data)===null||$===void 0?void 0:$.stable,loading:d.loading})}),(0,t.jsx)(B,{style:y.md?{margin:"15px 0"}:{margin:0,width:"100%"},type:y.md?"vertical":"horizontal"}),(0,t.jsx)(g.Z,{span:7,lg:7,md:7,sm:24,xs:24,children:(0,t.jsx)(J.Z,{channel:1,appId:n,title:"Beta",defaultData:(X=d.data)===null||X===void 0?void 0:X.beta,loading:d.loading})}),(0,t.jsx)(B,{style:y.md?{margin:"15px 0"}:{margin:0,width:"100%"},type:y.md?"vertical":"horizontal"}),(0,t.jsx)(g.Z,{span:7,lg:7,md:7,sm:24,xs:24,children:(0,t.jsx)(J.Z,{channel:2,appId:n,title:"Alpha",defaultData:(k=d.data)===null||k===void 0?void 0:k.alpha,loading:d.loading})}),(0,t.jsx)(g.Z,{style:{width:0}})]})},"update"),(0,t.jsxs)(o.ZP.TabPane,{tab:"\u5176\u4ED6\u4FE1\u606F",children:[(0,t.jsx)(U.Z,{title:"\u57FA\u7840\u4FE1\u606F",column:1,columns:[{label:"\u5E94\u7528\u67B6\u6784",dataIndex:"architecture",key:"architecture",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5"},1:{text:"\u6B63\u5E38"},2:{text:"\u5BA1\u6838\u4E2D"}}},{label:"\u5E94\u7528\u5206\u7C7B",dataIndex:"architecture",key:"architecture",valueType:"select",valueEnum:{0:{text:"\u672A\u77E5"},1:{text:"\u6B63\u5E38"},2:{text:"\u5BA1\u6838\u4E2D"}}},{label:"\u4EA7\u54C1\u7F51\u7AD9",dataIndex:"web",key:"web"}],dataSource:a==null?void 0:a.base}),(0,t.jsxs)(U.Z,{title:"API\u4FE1\u606F",column:1,dataSource:a==null?void 0:a.api,children:[(0,t.jsx)(U.Z.Item,{dataIndex:"license",label:"\u6388\u6743\u4FE1\u606F\u56DE\u8C03"}),(0,t.jsx)(U.Z.Item,{dataIndex:"api",label:"\u5E94\u7528\u4FE1\u606F\u56DE\u8C03"})]})]},"other"),(0,t.jsx)(o.ZP.TabPane,{tab:"\u7EDF\u8BA1\u4FE1\u606F",cardProps:{bodyStyle:{padding:"0 10px 10px 10px"}},children:(0,t.jsxs)(E.Z,{size:"small",tabBarExtraContent:(0,t.jsx)("a",{onClick:function(){ht.current==="install"?l.m8.push("/analysis/install/"+n):l.m8.push("/analysis/instance/"+n)},style:{paddingRight:"10px"},children:"\u66F4\u591A\u6570\u636E"}),tabBarStyle:{marginBottom:24},onChange:function(i){switch(ht.current=i,i){case"instance":!p.data&&p.run();break;case"count":!P.data&&P.run();break;case"device":!m.data&&m.run();break}},children:[(0,t.jsx)(E.Z.TabPane,{tab:"\u65E5\u5B89\u88C5\u91CF",style:{position:"relative"},children:(0,t.jsx)(ot.Z,{loading:Q.loading||!Q.data,height:300,data:Q.data||[],xField:"x",yField:"y",seriesField:"type",isStack:!0,xAxis:{visible:!0},yAxis:{visible:!0,title:{visible:!1}},slider:{start:0,end:1},title:{visible:!0,text:"\u6700\u8FD1\u4E00\u4E2A\u6708\u5B89\u88C5\u91CF\u8D8B\u52BF",style:{fontSize:14}},meta:{y:{alias:"\u5B89\u88C5\u91CF"}}})},"install"),(0,t.jsx)(E.Z.TabPane,{tab:"\u6D3B\u8DC3\u5B9E\u4F8B",style:{position:"relative"},children:(0,t.jsx)(W.Z,{spinning:p.loading,children:(0,t.jsx)(ut.Z,{echarts:dt.Z,option:Ht,style:{height:300}})})},"instance"),(0,t.jsx)(E.Z.TabPane,{tab:"\u542F\u52A8\u6B21\u6570",style:{position:"relative"},children:(0,t.jsx)(ot.Z,{loading:P.loading||!P.data,height:300,data:P.data||[],xField:"x",yField:"y",xAxis:{visible:!0},yAxis:{visible:!0,title:{visible:!1}},slider:{start:.6666,end:1},title:{visible:!0,text:"\u542F\u52A8\u6B21\u6570\u8D8B\u52BF",style:{fontSize:14}},meta:{y:{alias:"\u542F\u52A8\u6B21\u6570"}}})},"count"),(0,t.jsx)(E.Z.TabPane,{tab:"\u6D3B\u8DC3\u8BBE\u5907",style:{position:"relative"},children:(0,t.jsx)(W.Z,{spinning:m.loading,children:(0,t.jsx)(ut.Z,{echarts:dt.Z,option:Gt,style:{height:300}})})},"device")]})},"stat")]})]}),(0,t.jsx)(Y.ZP,{renderEmpty:function(){return(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(N.Z,{image:N.Z.PRESENTED_IMAGE_SIMPLE,description:(0,t.jsxs)("span",{children:["\u6682\u65F6\u6CA1\u6709\u54E6\uFF0C\u53EF\u4EE5\u53BB",(0,t.jsx)("a",{href:"#API",children:"\u521B\u5EFA\u4E00\u4E2A"})]})})})},children:(0,t.jsx)(Zt.ZP,{params:{appId:n},request:c.gp,sticky:{offsetHeader:St.M},headerTitle:"\u7248\u672C\u5217\u8868",rowKey:"id",actionRef:b,search:{labelWidth:120,filterType:"light"},style:{marginTop:30},scroll:{x:600},options:{fullScreen:!0,reload:!0,setting:!0},columns:Yt})})]})},Ot=Mt}}]);
