(this.webpackJsonpthread=this.webpackJsonpthread||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),o=(a(104),a(11)),i=a(16),c=a(17),_=a(29),d=a(28),u=(a(105),a(106),a(30)),m=a(97),p=a(34),h=a(139),E=a(140),g=a(95),f=a(143),y=a(36),b=a(78),v=a(69),D=a(49),k=a(144),w=a(145),C=a(141),P=a(142),j=a(92),x=function(e){Object(_.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement("span",{style:{fontWeight:"bold",paddingRight:"10px"}},"Name"),r.a.createElement("span",null,this.props.meaning.name))),r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement("span",{style:{fontWeight:"bold",paddingRight:"10px"}},"Description"),r.a.createElement("span",null,this.props.meaning.description))))}}]),a}(n.Component),O=function(e){Object(_.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={newDefModal:!1,selectedDef:{name:"New Meaning",description:""}},n}return Object(c.a)(a,[{key:"saveCol",value:function(){var e=this,t="";null!=this.state.selectedDef.description&&(t=this.state.selectedDef.description);var a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:this.state.selectedDef.name,description:t,applied_to:[this.props.item.key],id:this.state.selectedDef.id})};fetch(window.getWebAppBackendUrl("update-desc"),a).then((function(e){return e.json()})).then((function(t){e.setState({newDefModal:!1,selectedDef:t.value}),e.forceUpdate()}))}},{key:"buildLineage",value:function(){return r.a.createElement(E.a,null,r.a.createElement(j.a,{deets:this.props.item,full_ds_name:this.props.item.name,type:this.props.type}))}},{key:"buildTagsString",value:function(e){var t=[r.a.createElement("span",null,r.a.createElement("b",null,"Tags: "))];return e.forEach((function(e){t[t.length]=r.a.createElement("span",null,e)})),t}},{key:"openExternalProject",value:function(e){alert(e)}},{key:"renderItemDetailsByType",value:function(){switch(this.props.type){case"dataset":return this.renderDataset();case"project":return this.renderProject();case"column":return this.renderColumn();case"dataset":return r.a.createElement(g.a,null,r.a.createElement("p",null,"No rendering has been setup for this item."))}}},{key:"newDef",value:function(){this.setState({selectedDef:{name:"New Definition",value:this.props.item.comment}}),this.setState({newDefModal:!0})}},{key:"editDef",value:function(){this.setState({selectedDef:{name:this.props.item.definition.name,value:this.props.item.definition.description,id:this.props.item.definition.id}}),this.setState({newDefModal:!0})}},{key:"openColumn",value:function(e){u.a.dispatch("columnSelected",e)}},{key:"openDataset",value:function(e){u.a.dispatch("datasetSelected",e)}},{key:"openProject",value:function(e){u.a.dispatch("projectSelected",e)}},{key:"renderColumn",value:function(){var e=this,t=this.buildLineage();return this.props.item.definition.id>-1?(this.state.selectedDef.name=this.props.item.definition.name,this.state.selectedDef.id=this.props.item.definition.id,this.state.selectedDef.description=this.props.item.definition.description):(this.state.selectedDef.name="New Meaning",this.state.selectedDef.description="",this.state.selectedDef.id=-1),r.a.createElement(g.a,null,r.a.createElement(k.a,{size:"lg",show:this.state.newDefModal,animation:!1,onHide:function(){return e.setState({newDefModal:!1})}},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,this.state.selectedDef.name)),r.a.createElement(k.a.Body,null,r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(w.a,{style:{paddingTop:"15px"}},r.a.createElement(w.a.Group,{className:"mb-3"},r.a.createElement(w.a.Label,null,"Description Name"),r.a.createElement(w.a.Control,{type:"text",defaultValue:this.state.selectedDef.name,onChange:function(t){return e.state.selectedDef.name=t.target.value}}),r.a.createElement(w.a.Label,null,"Description Value"),r.a.createElement(w.a.Control,{type:"text",defaultValue:this.state.selectedDef.value,onChange:function(t){return e.state.selectedDef.description=t.target.value}})))))),r.a.createElement(k.a.Footer,null,r.a.createElement(C.a,{variant:"secondary"},"Save all Lineage"),r.a.createElement(C.a,{variant:"primary",onClick:function(){return e.saveCol()}},"Save"))),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Project: "),r.a.createElement("span",{className:"app-link",onClick:function(){return e.openProject(e.props.item.project)}},this.props.item.project)),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Dataset: "),r.a.createElement("span",{className:"app-link",onClick:function(){return e.openDataset(e.props.item.project+"."+e.props.item.dataset)}},this.props.item.dataset)),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Column Name: "),this.props.item.name),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Type: "),this.props.item.type),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(v.a,{defaultActiveKey:"definition",className:"mb-3"},r.a.createElement(D.a,{eventKey:"definition",title:"Definition",def:!0},-1==this.props.item.definition.id&&r.a.createElement("div",null,r.a.createElement(C.a,{variant:"primary",onClick:function(){return e.newDef()}},"Add")," ",r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(x,{meaning:this.state.selectedDef}))),this.props.item.definition.id>0&&r.a.createElement("div",null,r.a.createElement(C.a,{variant:"primary",onClick:function(){return e.editDef()}},"Edit")," ",r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(x,{meaning:this.state.selectedDef})))),r.a.createElement(D.a,{eventKey:"lineage",title:"Lineage",def:!0},r.a.createElement("div",{class:"lineage"},t)))))}},{key:"renderDataset",value:function(){var e=this,t=this.buildTagsString(this.props.item.meta.tags),a=this.buildLineage(),n=this.props.item.schema.map((function(t){return r.a.createElement("tr",{onClick:function(){return e.openColumn(t.key)}},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.comment))}));return r.a.createElement(g.a,null,r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Name: "),this.props.item.name,r.a.createElement("span",{style:{paddingLeft:"4px"}},r.a.createElement("a",{href:y.a.createDatasetLink(this.props.item.project,this.props.item.id),target:"_blank"},r.a.createElement(P.a,{size:20})))),r.a.createElement("p",{class:"project"},r.a.createElement("b",null,"Project: "),r.a.createElement("span",{className:"app-link",onClick:function(){return e.openProject(e.props.item.project)}},this.props.item.project)),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Type: "),this.props.type),r.a.createElement("div",{class:"tags"},t),r.a.createElement(E.a,{style:{paddingTop:"20px"}},r.a.createElement(v.a,{defaultActiveKey:"lineage",id:"uncontrolled-tab-example",className:"mb-3"},r.a.createElement(D.a,{eventKey:"lineage",title:"Lineage"},r.a.createElement("div",{class:"lineage"},a)),r.a.createElement(D.a,{eventKey:"columns",title:"Columns",def:!0},r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,n))))))}},{key:"renderProject",value:function(){var e=this,t=this.buildTagsString(this.props.item.tags),a=this.props.item.datasets.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{onClick:function(){return e.openDataset(t)}},t))}));return r.a.createElement(g.a,null,r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Name: "),r.a.createElement("span",null,this.props.item.name),r.a.createElement("span",{style:{paddingLeft:"4px"}},r.a.createElement("a",{href:y.a.createProjectLink(this.props.item.projectKey),target:"_blank"},r.a.createElement(P.a,{size:20})))),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,"Type: "),this.props.type),r.a.createElement("div",{class:"tags"},t),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(v.a,{defaultActiveKey:"datasets",className:"mb-3"},r.a.createElement(D.a,{eventKey:"datasets",title:"Datasets",def:!0},r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"))),r.a.createElement("tbody",null,a))))))}},{key:"render",value:function(){var e,t=this.renderItemDetailsByType();return e=null!=this.props.item?r.a.createElement(E.a,{className:"align-items-start"},r.a.createElement(g.a,{xs:1},y.a.getIconForDataikuItemType(this.props.type,"100%")),t):r.a.createElement(E.a,null,r.a.createElement("p",null,"No Item to display...")),r.a.createElement("div",{class:"dataiku-item"},e)}}]),a}(n.Component),I=function(e){Object(_.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).filterDataikuItems=function(e){var t=n.formatQueryTypes(),a=[];return Object.keys(e).forEach((function(n){var r=e[n];t.indexOf(r.type.toString())>=0&&(a[a.length]=r)})),a},n.formatQueryTypes=function(){var e=[];return Object.entries(n.state.filters).map((function(t){var a=Object(o.a)(t,2),n=a[0];1==a[1]&&(e[e.length]=n.toString())})),e},n.handleOnChange=function(e){var t=n.state.filters;t[e]=!t[e],n.setState({filters:t})},n.loadItem=function(e){if(n.setState({loading:!0}),console.log("loadItem :: item == "),console.log(e),e.length>0){fetch(window.getWebAppBackendUrl("load-item")+"?key="+e[0].key,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log("response == "),console.log(t),n.setState({loading:!1,selectedItem:t,selectedItemType:e[0].type})}))}},n.search=function(e){var t=window.getWebAppBackendUrl("search")+"?term="+e;n.setState({loading:!0}),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=n.filterDataikuItems(e);n.setState({searchResults:t,loading:!1})}))},n.state={dataiku:void 0,dataikuItem:null,filters:{column:!0,dataset:!0,project:!0},loading:!0,openFilter:!0,selectedItem:null,selectedItemType:null,searchResults:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.$(document).ready((function(){e.setState({dataiku:window.dataiku}),e.setState({rendered:!0}),e.setState({loading:!1}),u.a.on("datasetSelected",(function(t){return e.loadItem([{key:t,type:"dataset"}])})),u.a.on("projectSelected",(function(t){return e.loadItem([{key:t,type:"project"}])})),u.a.on("columnSelected",(function(t){return e.loadItem([{key:t,type:"column"}])}))}))}},{key:"rescan",value:function(){var e=this;this.setState({loading:!0}),fetch(window.getWebAppBackendUrl("scan")).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1})}))}},{key:"renderMenuItemChildren",value:function(e,t){return r.a.createElement(n.Fragment,null,y.a.getIconForDataikuItemType(e.type),r.a.createElement("span",{style:{fontWeight:"bold",paddingLeft:"4px"}},"Name: ",e.name),r.a.createElement("span",{style:{padding:"3px"}},"|"),r.a.createElement("span",null,"Type: ",e.type),"dataset"==e.type||"column"==e.type&&r.a.createElement("span",null,r.a.createElement("span",{style:{padding:"3px"}},"|"),r.a.createElement("span",null,"Project: ",e.key.split(".")[0])))}},{key:"toggleFilter",value:function(){this.setState({openFilter:!this.state.openFilter})}},{key:"render",value:function(){var e=this,t=this.state,a=t.filters,n=(t.loading,t.openFilter),l=t.searchResults,s=t.selectedItem,i=t.selectedItemType;return this.dataikuItem=r.a.createElement(O,{item:s,type:i}),r.a.createElement(h.a,{style:{paddingTop:"20px"}},r.a.createElement(E.a,{style:{paddingBottom:"10px"}},r.a.createElement(g.a,null,r.a.createElement("h1",null,"Thread")),r.a.createElement(g.a,{style:{textAlign:"right"}},r.a.createElement(p.g,{onClick:function(){return e.rescan()},style:{width:"20px",height:"20px",cursor:"pointer"}}))),r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement("div",{className:"input-group",style:{width:"100%"}},r.a.createElement(m.a,{filterBy:function(){return!0},id:"async-search",delay:300,labelKey:"key",minLength:3,onChange:this.loadItem,onSearch:this.search,options:l,placeholder:"Search",renderMenuItemChildren:this.renderMenuItemChildren,style:{width:"97.5%"}}),r.a.createElement("div",{className:"input-group-btn"},r.a.createElement(p.c,{onClick:function(){return e.toggleFilter()},style:{backgroundColor:"#66a3ff",color:"#FFFFFF",cursor:"pointer",height:"34px",padding:"8px",width:"34px"}}))))),n?r.a.createElement(E.a,{className:"filter",style:{marginTop:"0.5em"}},r.a.createElement(g.a,{xs:1},r.a.createElement("h4",null,"Filter By: ")),Object.entries(a).map((function(t){var a=Object(o.a)(t,2),n=a[0],l=a[1];return r.a.createElement(g.a,{xs:1},r.a.createElement("div",{className:"filter-types",key:n},r.a.createElement("input",{type:"checkbox",id:"filter-".concat(n),name:n,value:n,checked:l,onChange:function(){return e.handleOnChange(n)},style:{marginRight:"1.0em"}}),r.a.createElement("label",{htmlFor:"filter-".concat(n)},n,"s")))}))):null,r.a.createElement(E.a,null,r.a.createElement("div",{style:{padding:"10px"}},this.state.loading?r.a.createElement(f.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")):null)),r.a.createElement(E.a,null,this.dataikuItem))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){"use strict";var n={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}};t.a=n},36:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(34);var s={createDatasetLink:function(e,t){return"/projects/"+e+"/datasets/"+t+"/explore/"},createProjectLink:function(e){return"/projects/"+e+"/flow/"},createDsLinkFull:function(e,t){return'<a href="'+this.createDsLink2(e,t)+'" target="_blank">'+e+"."+t+"</a>"},getIconForDataikuItemType:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"11px";switch(e){case"project":return r.a.createElement(l.e,{size:t});case"dataset":return r.a.createElement(l.b,{size:t});case"column":return r.a.createElement(l.a,{size:t});case"definition":return r.a.createElement(l.d,{size:t});default:return r.a.createElement(l.f,{size:t})}}};t.a=s},92:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(28),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(47),_customFlowNode_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(94),Lineage=function(_Component){Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Lineage,_Component);var _super=Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Lineage);function Lineage(props){var _this;return Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Lineage),_this=_super.call(this,props),_this.traverse=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=[];if(null!=t[a]&&t[a].length>0){n+=1;for(var l=0;l<t[a].length;l++)_this.traverse(e,t[a][l],a,n)}else e[e.length]={count:n-1,name:t.name};return r},_this.update=function(st,base_elem){var base_splits=base_elem.name.split("."),baseElementId="base",elements=[{id:baseElementId,type:"customFlowNode",data:{project:base_splits[0],dataset:base_splits[1]},position:{x:250,y:140},style:{backgroundColor:"#FFF",width:"200px",borderColor:"red",borderWidth:"2px",fontWeight:"bold"},sourcePosition:"right",targetPosition:"left",draggable:!1}],down_res=[];null!=base_elem.lineage_downstream&&""!=base_elem.lineage_downstream&&(null!=base_elem.lineage_downstream?_this.traverse(down_res,base_elem,"lineage_downstream"):down_res=eval(base_elem.lineage_downstream));var up_res=[];null!=base_elem.lineage_upstream&&""!=base_elem.lineage_upstream&&(null!=base_elem.lineage_upstream?_this.traverse(up_res,base_elem,"lineage_upstream"):up_res=eval(base_elem.lineage_upstream));for(var x=0;x<down_res.length;x++){var lbl=down_res[x];null!=lbl.name&&(lbl=down_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]);var elementId="down_"+x.toString(),downYPosition=300/(up_res.length+1)*(x+1);console.log("downYPosition == "),console.log(downYPosition),elements[elements.length]={id:elementId,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{backgroundColor:"#FFF",width:"200px"},targetPosition:"left",sourcePosition:"right",position:{x:500,y:200/(up_res.length+1)*(x+1)},draggable:!1};var edgeId="edge_down_"+x.toString(),edge={id:edgeId,source:baseElementId,target:elementId,arrowHeadType:"arrow"};down_res[x].count>0&&(edge.label="["+down_res[x].count+"]",edge.animated=!0),elements[elements.length]=edge}for(var x=0;x<up_res.length;x++){var lbl=up_res[x];null!=lbl.name&&(lbl=up_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]);var upYPosition=300/(up_res.length+1)*(x+1);console.log("upYPosition == "),console.log(upYPosition);var elementId="up_"+x.toString();elements[elements.length]={id:elementId,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{backgroundColor:"#FFF",width:"200px"},sourcePosition:"right",targetPosition:"left",position:{x:0,y:300/(up_res.length+1)*(x+1)},draggable:!1};var edgeId="edge_up_"+x.toString(),edge={id:edgeId,source:elementId,target:baseElementId,arrowHeadType:"arrow"};up_res[x].count>0&&(edge.animated=!0,edge.label="["+up_res[x].count+"]"),elements[elements.length]=edge}var new_state={};new_state[st]=elements,_this.setState(new_state)},_this.state={elements:[],last_ds:""},_this.nodeTypes={customFlowNode:_customFlowNode_js__WEBPACK_IMPORTED_MODULE_6__.a},_this}return Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Lineage,[{key:"onLoad",value:function(e){e.fitView()}},{key:"render",value:function(){return this.props.deets.name!=this.state.last_ds&&(this.state.last_ds=this.props.deets.name,this.update("elements",this.props.deets)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{backgroundColor:"#EEE",height:"500",width:"1030"}},this.state.elements&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__.c,{onLoad:this.onLoad,elements:this.state.elements,nodeTypes:this.nodeTypes,style:{height:"100%",width:"100%"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__.a,{showInteractive:"false"})))}}]),Lineage}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Lineage},94:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(30),s=a(47);a(36);t.a=Object(n.memo)((function(e){var t=e.data,a=e.isConnectable;return console.log("data == "),console.log(t),console.log("isConnectable == "),console.log(a),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{type:"target",position:"left",style:{background:"#555"},isConnectable:a}),r.a.createElement("div",{style:{border:"solid 1px #333",borderRadius:"3px",textAlign:"center",padding:"10px"}},r.a.createElement("div",{style:{fontWeight:"bold"}},t.project),r.a.createElement("div",null,r.a.createElement("a",{href:"javascript:void(0)",onClick:function(e){e.preventDefault(),l.a.dispatch("datasetSelected",t.project+"."+t.dataset)}},t.dataset)),r.a.createElement("div",null,t.column)),r.a.createElement(s.b,{type:"source",position:"right",isConnectable:a}))}))},99:function(e,t,a){e.exports=a(132)}},[[99,1,2]]]);
//# sourceMappingURL=main.77ea935a.chunk.js.map