(this.webpackJsonpthread=this.webpackJsonpthread||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),o=(a(104),a(25)),_=a(26),c=a(34),i=a(33),u=(a(105),a(106),a(22)),m=a(38),d=a(97),p=a(131),h=a(129),E=a(95),g=a(140),b=a(142),y=a(40),f=a(67),v=a(55),k=a(42),w=a(143),D=a(144),P=a(141),C=a(92),M=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={newDefModal:!1},n}return Object(_.a)(a,[{key:"buildLineage",value:function(){return r.a.createElement(h.a,null,r.a.createElement(C.a,{deets:this.props.item,full_ds_name:this.props.item.name,type:this.props.type}))}},{key:"buildTagsString",value:function(e){var t=[r.a.createElement("span",null,r.a.createElement("b",null,"Tags: "))];return e.forEach((function(e){t[t.length]=r.a.createElement("span",null,e)})),t}},{key:"openExternalProject",value:function(e){alert(e)}},{key:"renderItemDetailsByType",value:function(){switch(this.props.type){case"dataset":return this.renderDataset();case"project":return this.renderProject();case"column":return this.renderColumn();case"dataset":return r.a.createElement(E.a,null,r.a.createElement("p",null,"No rendering has been setup for this item."))}}},{key:"newDef",value:function(){this.setState({newDefModal:!0})}},{key:"openColumn",value:function(e){u.a.dispatch("columnSelected",e)}},{key:"openDataset",value:function(e){u.a.dispatch("datasetSelected",e)}},{key:"openProject",value:function(e){u.a.dispatch("projectSelected",e)}},{key:"renderColumn",value:function(){var e=this,t=this.buildLineage();return r.a.createElement(E.a,null,r.a.createElement(w.a,{size:"lg",show:this.state.newDefModal,animation:!1},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"test")),r.a.createElement(w.a.Body,null,r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(D.a,{style:{paddingTop:"15px"}},r.a.createElement(D.a.Group,{className:"mb-3"},r.a.createElement(D.a.Label,null,"Description")))))),r.a.createElement(w.a.Footer,null)),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Project: "),r.a.createElement("span",{className:"app-link",onClick:function(){return e.openProject(e.props.item.project)}},this.props.item.project)),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Dataset: "),r.a.createElement("span",{className:"app-link",onClick:function(){return e.openDataset(e.props.item.project+"."+e.props.item.dataset)}},this.props.item.dataset)),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Column Name: "),this.props.item.name),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Type: "),this.props.item.type),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(v.a,{defaultActiveKey:"definition",className:"mb-3"},r.a.createElement(k.a,{eventKey:"definition",title:"Definition",def:!0},r.a.createElement(g.a,{variant:"primary",onClick:function(){return e.newDef()}},"Add")," ",this.props.item.comment),r.a.createElement(k.a,{eventKey:"lineage",title:"Lineage",def:!0},r.a.createElement("div",{class:"lineage"},t)))))}},{key:"renderDataset",value:function(){var e=this,t=this.buildTagsString(this.props.item.meta.tags),a=this.buildLineage(),n=this.props.item.schema.map((function(t){return r.a.createElement("tr",{onClick:function(){return e.openColumn(t.key)}},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.comment))}));return r.a.createElement(E.a,null,r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Name: "),this.props.item.name,r.a.createElement("span",{style:{paddingLeft:"4px"}},r.a.createElement("a",{href:y.a.createDatasetLink(this.props.item.project,this.props.item.id),target:"_blank"},r.a.createElement(P.a,{size:20})))),r.a.createElement("p",{class:"project"},r.a.createElement("b",null,"Project: "),r.a.createElement("span",{className:"app-link",onClick:function(){return e.openProject(e.props.item.project)}},this.props.item.project)),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Type: "),this.props.type),r.a.createElement("div",{class:"tags"},t),r.a.createElement(h.a,{style:{paddingTop:"20px"}},r.a.createElement(v.a,{defaultActiveKey:"lineage",id:"uncontrolled-tab-example",className:"mb-3"},r.a.createElement(k.a,{eventKey:"lineage",title:"Lineage"},r.a.createElement("div",{class:"lineage"},a)),r.a.createElement(k.a,{eventKey:"columns",title:"Columns",def:!0},r.a.createElement(f.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,n))))))}},{key:"renderProject",value:function(){var e=this,t=this.buildTagsString(this.props.item.tags),a=this.props.item.datasets.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{onClick:function(){return e.openDataset(t)}},t))}));return r.a.createElement(E.a,null,r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Name: "),r.a.createElement("span",null,this.props.item.name),r.a.createElement("span",{style:{paddingLeft:"4px"}},r.a.createElement("a",{href:y.a.createProjectLink(this.props.item.projectKey),target:"_blank"},r.a.createElement(P.a,{size:20})))),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Type: "),this.props.type),r.a.createElement("div",{class:"tags"},t),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(v.a,{defaultActiveKey:"datasets",className:"mb-3"},r.a.createElement(k.a,{eventKey:"datasets",title:"Datasets",def:!0},r.a.createElement(f.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"))),r.a.createElement("tbody",null,a))))))}},{key:"render",value:function(){var e,t=this.renderItemDetailsByType();return e=null!=this.props.item?r.a.createElement(h.a,{className:"align-items-start"},r.a.createElement(E.a,{xs:1},y.a.getIconForDataikuItemType(this.props.type,"100%")),t):r.a.createElement(h.a,null,r.a.createElement("p",null,"No Item to display...")),r.a.createElement("div",{class:"dataiku-item",style:{paddingTop:"20px"}},e)}}]),a}(n.Component),j=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loadItem=function(e){if(n.setState({loading:!0}),console.log("loadItem :: item == "),console.log(e),e.length>0){fetch(window.getWebAppBackendUrl("load-item")+"?key="+e[0].key,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log("response == "),console.log(t),n.setState({selectedItem:t,selectedItemType:e[0].type}),n.setState({loading:!1})}))}},n.search=function(e){n.setState({loading:!0}),fetch(window.getWebAppBackendUrl("search")+"?term="+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=[];Object.keys(e).forEach((function(a){t[t.length]=e[a]})),n.setState({searchResults:t}),n.setState({loading:!1})}))},n.state={dataiku:void 0,dataikuItem:null,isLoading:!1,selectedItem:null,selectedItemType:null,searchResults:[],loading:!0},n}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.$(document).ready((function(){e.setState({dataiku:window.dataiku}),e.setState({rendered:!0}),e.setState({loading:!1}),u.a.on("datasetSelected",(function(t){return e.loadItem([{key:t,type:"dataset"}])})),u.a.on("projectSelected",(function(t){return e.loadItem([{key:t,type:"project"}])})),u.a.on("columnSelected",(function(t){return e.loadItem([{key:t,type:"column"}])}))}))}},{key:"rescan",value:function(){var e=this;this.setState({loading:!0}),fetch(window.getWebAppBackendUrl("scan")).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1})}))}},{key:"renderMenuItemChildren",value:function(e,t){return r.a.createElement(n.Fragment,null,y.a.getIconForDataikuItemType(e.type),r.a.createElement("span",{style:{fontWeight:"bold",paddingLeft:"4px"}},"Name: ",e.name),r.a.createElement("span",{style:{padding:"3px"}},"|"),r.a.createElement("span",null,"Type: ",e.type),"dataset"==e.type||"column"==e.type&&r.a.createElement("span",null,r.a.createElement("span",{style:{padding:"3px"}},"|"),r.a.createElement("span",null,"Project: ",e.key.split(".")[0])))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.searchResults,l=t.selectedItem,s=t.selectedItemType;return this.dataikuItem=r.a.createElement(M,{item:l,type:s}),r.a.createElement(p.a,{style:{paddingTop:"20px"}},r.a.createElement(h.a,{style:{paddingBottom:"10px"}},r.a.createElement(E.a,null,r.a.createElement("h1",null,"Thread")),r.a.createElement(E.a,{style:{textAlign:"right"}},r.a.createElement(g.a,{variant:"primary",style:{width:"22px",height:"22px"},onClick:function(){return e.rescan()}},r.a.createElement(m.f,null)))),r.a.createElement(h.a,null,r.a.createElement(d.a,{filterBy:function(){return!0},id:"async-search",isLoading:a,labelKey:"key",minLength:3,onChange:this.loadItem,onSearch:this.search,options:n,placeholder:"Search",renderMenuItemChildren:this.renderMenuItemChildren})),r.a.createElement(h.a,null,r.a.createElement("div",{style:{padding:"10px"}},this.state.loading?r.a.createElement(b.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")):null)),this.dataikuItem)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,a){"use strict";var n={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}};t.a=n},40:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(38);var s={createDatasetLink:function(e,t){return"/projects/"+e+"/datasets/"+t+"/explore/"},createProjectLink:function(e){return"/projects/"+e+"/flow/"},createDsLinkFull:function(e,t){return'<a href="'+this.createDsLink2(e,t)+'" target="_blank">'+e+"."+t+"</a>"},getIconForDataikuItemType:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"11px";switch(e){case"project":return r.a.createElement(l.d,{size:t});case"dataset":return r.a.createElement(l.b,{size:t});case"column":return r.a.createElement(l.a,{size:t});case"definition":return r.a.createElement(l.c,{size:t});default:return r.a.createElement(l.e,{size:t})}}};t.a=s},92:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(25),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(33),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_eventBus__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(22),react_flow_renderer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(48),_customFlowNode_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(94),Lineage=function(_Component){Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Lineage,_Component);var _super=Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Lineage);function Lineage(props){var _this;return Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Lineage),_this=_super.call(this,props),_this.traverse=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=[];if(null!=t[a]&&t[a].length>0){n+=1;for(var l=0;l<t[a].length;l++)_this.traverse(e,t[a][l],a,n)}else e[e.length]={count:n-1,name:t.name};return r},_this.update=function(st,base_elem){var base_splits=base_elem.name.split("."),elements=[{id:"-1",type:"customFlowNode",data:{project:base_splits[0],dataset:base_splits[1]},position:{x:250,y:140},style:{backgroundColor:"#FFF",width:"200px",borderColor:"red",borderWidth:"2px",fontWeight:"bold"},sourcePosition:"right",targetPosition:"left",draggable:!1}],down_res=[],up_res=[];"column"==_this.props.type?(null!=base_elem.lineage_downstream&&""!=base_elem.lineage_downstream&&(null!=base_elem.lineage_downstream?_this.traverse(down_res,base_elem,"lineage_downstream"):down_res=eval(base_elem.lineage_downstream)),null!=base_elem.lineage_upstream&&""!=base_elem.lineage_upstream&&(null!=base_elem.lineage_upstream?_this.traverse(up_res,base_elem,"lineage_upstream"):up_res=eval(base_elem.lineage_upstream))):(null!=base_elem["lineage-downstream"]&&""!=base_elem["lineage-downstream"]&&(null!=base_elem["lineage-downstream"]?_this.traverse(down_res,base_elem,"lineage-downstream"):down_res=eval(base_elem["lineage-downstream"])),null!=base_elem["lineage-upstream"]&&""!=base_elem["lineage-upstream"]&&(null!=base_elem["lineage-upstream"]?_this.traverse(up_res,base_elem,"lineage-upstream"):up_res=eval(base_elem["lineage-upstream"]))),console.log("down_res == "),console.log(down_res),console.log("up_res == "),console.log(up_res);for(var x=0;x<down_res.length;x++){var lbl=down_res[x];null!=lbl.name&&(lbl=down_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]),elements[elements.length]={id:"down_"+x,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{backgroundColor:"#FFF",width:"200px"},targetPosition:"left",sourcePosition:"right",position:{x:500,y:300/(down_res.length+1)*(x+1)},draggable:!1};var edge={id:"-1-down_"+x,source:"-1",target:"down_"+x,arrowHeadType:"arrow"};down_res[x].count>0&&(edge.label="["+down_res[x].count+"]",edge.animated=!0),elements[elements.length]=edge}for(var x=0;x<up_res.length;x++){var lbl=up_res[x];null!=lbl.name&&(lbl=up_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]),elements[elements.length]={id:"up_"+x,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{backgroundColor:"#FFF",width:"200px"},sourcePosition:"right",targetPosition:"left",position:{x:0,y:300/(up_res.length+1)*(x+1)},draggable:!1};var edge={id:"-1-up_"+x,source:"up_"+x,target:"-1",arrowHeadType:"arrow"};up_res[x].count>0&&(edge.animated=!0,edge.label="["+up_res[x].count+"]"),elements[elements.length]=edge}var new_state={};new_state[st]=elements,_this.setState(new_state)},_this.state={elements:[],last_ds:""},_this.nodeTypes={customFlowNode:_customFlowNode_js__WEBPACK_IMPORTED_MODULE_7__.a},_this}return Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Lineage,[{key:"onLoad",value:function(e){e.fitView()}},{key:"render",value:function(){return this.props.deets.name!=this.state.last_ds&&(this.state.last_ds=this.props.deets.name,this.update("elements",this.props.deets)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{backgroundColor:"#EEE",height:500}},this.state.elements&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_6__.c,{onLoad:this.onLoad,elements:this.state.elements,nodeTypes:this.nodeTypes},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_6__.a,{showInteractive:"false"})))}}]),Lineage}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Lineage},94:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(22),s=a(48);a(40);t.a=Object(n.memo)((function(e){var t=e.data,a=e.isConnectable;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{type:"target",position:"left",style:{background:"#555"},isConnectable:a}),r.a.createElement("div",{style:{border:"solid 1px #333",borderRadius:"3px",textAlign:"center",padding:"10px"}},r.a.createElement("div",{style:{fontWeight:"bold"}},t.project),r.a.createElement("div",null,r.a.createElement("a",{href:"javascript:void(0)",onClick:function(e){e.preventDefault(),l.a.dispatch("datasetSelected",t.project+"."+t.dataset)}},t.dataset)),r.a.createElement("div",null,t.column)),r.a.createElement(s.b,{type:"source",position:"right",isConnectable:a}))}))},99:function(e,t,a){e.exports=a(134)}},[[99,1,2]]]);
//# sourceMappingURL=main.dee57b61.chunk.js.map