(this.webpackJsonpthread=this.webpackJsonpthread||[]).push([[0],{104:function(e,t,a){e.exports=a(140)},109:function(e,t,a){},110:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),i=(a(109),a(11)),o=a(18),c=a(19),d=a(32),_=a(31),u=(a(110),a(111),a(17)),p=a(67),m=a(37),h=a(149),E=a(147),f=a(101),g=a(152),y=a(34),b=a(81),v=a(73),D=a(52),k=a(148),w=a(153),j=a(150),T=a(154),x=a(151),I=a(59),O=function(e){Object(d.a)(a,e);var t=Object(_.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.definition.id>-1&&r.a.createElement("div",{style:{maxWidth:"300px",border:"solid 1px #999",borderRadius:"2px",padding:"10px"}},r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement("span",{style:{fontWeight:"bold",paddingRight:"10px"}},"ID"),r.a.createElement("span",null,this.props.definition.id))),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement("span",{style:{fontWeight:"bold",paddingRight:"10px"}},"Name"),r.a.createElement("span",null,this.props.definition.name))),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement("span",{style:{fontWeight:"bold",paddingRight:"10px"}},"Description"),r.a.createElement("span",null,this.props.definition.description)))))}}]),a}(n.Component),C=a(102),L=(a(137),function(e){Object(d.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).defSearch=function(e){var t=window.getWebAppBackendUrl("def-search")+"?term="+e;n.setState({loading:!0}),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n.state.defSearchResults=e}))},n.selectDef=function(e){n.setState({selectedDef:e})},n.toggleNew=function(e){n.setState({newDefSelected:e}),e?n.setState({selectedDef:{name:n.props.item.name,description:n.props.item.comment,id:-1}}):n.setState({selectedDef:{name:n.props.item.definition.name,description:n.props.item.definition.description,id:n.props.item.definition.id}})},n.state={newDefModal:!1,selectedDef:{name:"New Definition",description:"",id:-1},newDefSelected:!0,defSearchResults:[]},n}return Object(c.a)(a,[{key:"flattenArray",value:function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=0;n<e[t].length;n++){var r=e[t][n];a.push(r.name),r[t].length>0&&(a=this.flattenArray(r,t,a))}return a}},{key:"saveCol",value:function(e,t){var a=this,n=[this.props.item.key];e&&(n=n.concat(this.flattenArray(this.props.item,"lineage_upstream"))),t&&(n=n.concat(this.flattenArray(this.props.item,"lineage_downstream"))),Object(C.confirmAlert)({title:"Confirm Save",message:"Are you sure to apply this definition to "+n,buttons:[{label:"Apply",onClick:function(){var e="";null!=a.state.selectedDef.description&&(e=a.state.selectedDef.description);var t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:a.state.selectedDef.name,description:e,applied_to:n,id:a.state.selectedDef.id})};u.a.dispatch("loading",!0),fetch(window.getWebAppBackendUrl("update-desc"),t).then((function(e){return e.json()})).then((function(e){a.props.item.definition=e.value,a.setState({newDefModal:!1,selectedDef:e.value}),u.a.dispatch("loading",!1)}))}},{label:"Cancel",onClick:function(){}}]})}},{key:"buildLineage",value:function(){return r.a.createElement(E.a,null,r.a.createElement(I.a,{deets:this.props.item,full_ds_name:this.props.item.name,type:this.props.type}))}},{key:"buildTagsString",value:function(e){var t=[];return e.forEach((function(e){t[t.length]=r.a.createElement(k.a,{variant:"primary",size:"sm"},e)})),t}},{key:"openExternalProject",value:function(e){alert(e)}},{key:"renderItemDetailsByType",value:function(){switch(this.props.object_type){case"dataset":return this.renderDataset();case"project":return this.renderProject();case"column":return this.renderColumn();case"dataset":return r.a.createElement(f.a,null,r.a.createElement("p",null,"No rendering has been setup for this item."))}}},{key:"componentDidUpdate",value:function(e,t){"column"==this.props.object_type&&(null==e.item&&null!=this.props.item||null!=e.item&&null!=this.props.item&&e.item.id!==this.props.item.id)&&this.resetSelectedDef()}},{key:"newDef",value:function(){this.setState({newDefModal:!0})}},{key:"resetSelectedDef",value:function(){-1==this.props.item.definition.id?this.setState({selectedDef:{name:this.props.item.name,description:this.props.item.comment,id:-1}}):this.setState({selectedDef:{name:this.props.item.definition.name,description:this.props.item.definition.description,id:this.props.item.definition.id}})}},{key:"editDef",value:function(){this.setState({newDefModal:!0})}},{key:"openColumn",value:function(e){u.a.dispatch("columnSelected",e)}},{key:"openDataset",value:function(e){u.a.dispatch("datasetSelected",e)}},{key:"openProject",value:function(e){u.a.dispatch("projectSelected",e)}},{key:"renderDefSearchMenuItem",value:function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{fontWeight:"bold"}},e.name),r.a.createElement("div",null,e.description))}},{key:"renderColumn",value:function(){var e=this,t=this.state.defSearchResults,a=this.buildLineage();return r.a.createElement(f.a,null,r.a.createElement(w.a,{size:"lg",show:this.state.newDefModal,animation:!1,onHide:function(){return e.setState({newDefModal:!1})}},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Definition: ",this.state.selectedDef.name)),r.a.createElement(w.a.Body,null,r.a.createElement(h.a,null,r.a.createElement("row",null,r.a.createElement(j.a,null,r.a.createElement(k.a,{onClick:function(){return e.toggleNew(!0)},variant:this.state.newDefSelected?"primary":"secondary"},"Apply New Definition"),r.a.createElement(k.a,{onClick:function(){return e.toggleNew(!1)},variant:this.state.newDefSelected?"secondary":"primary"},"Apply Existing Definition"))),!this.state.newDefSelected&&r.a.createElement(E.a,{style:{paddingTop:"10px"}},r.a.createElement(p.a,{id:"def-search",delay:300,labelKey:"search_def",minLength:3,onChange:this.selectDef,onSearch:this.defSearch,options:t,placeholder:"Search",renderMenuItemChildren:this.renderDefSearchMenuItem,style:{width:"97.5%"}}),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(O,{definition:this.state.selectedDef}))),this.state.newDefSelected&&r.a.createElement(E.a,null,r.a.createElement(T.a,{style:{paddingTop:"10px"}},r.a.createElement(T.a.Group,{className:"mb-3"},r.a.createElement(T.a.Label,null,"Definition Name"),r.a.createElement(T.a.Control,{type:"text",defaultValue:this.state.selectedDef.name,onChange:function(t){return e.state.selectedDef.name=t.target.value}}),r.a.createElement("div",{style:{height:"10px"}}),r.a.createElement(T.a.Label,null,"Definition Description"),r.a.createElement(T.a.Control,{as:"textarea",rows:"3",defaultValue:this.state.selectedDef.description,onChange:function(t){return e.state.selectedDef.description=t.target.value}}),r.a.createElement(T.a.Text,{className:"text-muted"},"Will appear in the Dataiku Dataset's column description.")))))),r.a.createElement(w.a.Footer,null,r.a.createElement(k.a,{variant:"secondary",onClick:function(){return e.saveCol(!0,!0)}},"Save all Lineage"),r.a.createElement(k.a,{variant:"primary",onClick:function(){return e.saveCol(!1,!1)}},"Save"))),r.a.createElement(E.a,null,r.a.createElement(f.a,{xs:"auto"},r.a.createElement("div",{class:"icon"},y.a.getIconForDataikuItemType(this.props.object_type,"100%"))),r.a.createElement(f.a,null,r.a.createElement("h1",null,this.props.item.name),r.a.createElement("p",{class:"name"},r.a.createElement("b",null,this.props.item.type)," column in ",r.a.createElement("span",{className:"app-link",onClick:function(){return e.openProject(e.props.item.project)}},this.props.item.project),r.a.createElement("span",{style:{padding:"0px 3px"}},"|"),r.a.createElement("span",{className:"app-link",onClick:function(){return e.openDataset(e.props.item.project+"|"+e.props.item.dataset)}},this.props.item.dataset)))),r.a.createElement(E.a,null,r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(v.a,{defaultActiveKey:"definition",className:"mb-3"},r.a.createElement(D.a,{eventKey:"definition",title:"Definition",def:!0},-1==this.props.item.definition.id&&r.a.createElement("div",null,r.a.createElement(k.a,{variant:"primary",onClick:function(){return e.newDef()}},"Add Definition")," "),this.props.item.definition.id>0&&r.a.createElement("div",null,r.a.createElement(k.a,{variant:"primary",onClick:function(){return e.editDef()}},"Edit Definition")," ",r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(O,{definition:this.state.selectedDef})))),r.a.createElement(D.a,{eventKey:"lineage",title:"Lineage",def:!0},r.a.createElement("div",{class:"lineage"},a))))))}},{key:"renderDataset",value:function(){var e=this,t=this.buildTagsString(this.props.item.meta.tags),a=this.buildLineage(),n=this.props.item.schema.map((function(t){return r.a.createElement("tr",{onClick:function(){return e.openColumn(t.key)}},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.comment))}));return r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a,{xs:"auto"},r.a.createElement("div",{class:"icon"},y.a.getIconForDataikuItemType(this.props.object_type,"100%"))),r.a.createElement(f.a,null,r.a.createElement("h1",null,this.props.item.id),r.a.createElement("p",null,"Dataset in ",r.a.createElement("span",{className:"app-link",onClick:function(){return e.openProject(e.props.item.project)}},this.props.item.project)),r.a.createElement("div",{class:"tags"},t))),r.a.createElement(E.a,{style:{paddingTop:"20px"}},r.a.createElement(v.a,{defaultActiveKey:"lineage",id:"uncontrolled-tab-example",className:"mb-3"},r.a.createElement(D.a,{eventKey:"lineage",title:"Lineage"},r.a.createElement("div",{class:"lineage"},a)),r.a.createElement(D.a,{eventKey:"columns",title:"Columns",def:!0},r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Definition"))),r.a.createElement("tbody",null,n))))))}},{key:"renderProject",value:function(){var e=this,t=this.buildTagsString(this.props.item.tags),a=this.props.item.datasets.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{class:"cellLink",onClick:function(){return e.openDataset(t)}},t.split("|")[1]))}));return r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a,{xs:"auto"},r.a.createElement("div",{class:"icon"},y.a.getIconForDataikuItemType(this.props.object_type,"100%"))),r.a.createElement(f.a,null,r.a.createElement("h1",null,this.props.item.name),r.a.createElement("p",null,"Dataiku Project",r.a.createElement("span",{style:{paddingLeft:"4px"}},r.a.createElement("a",{href:y.a.createProjectLink(this.props.item.projectKey),target:"_blank"},r.a.createElement(x.a,{size:20})))),r.a.createElement("div",{class:"tags"},t))),r.a.createElement(E.a,null,r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(v.a,{defaultActiveKey:"datasets",className:"mb-3",id:"project-tabs"},r.a.createElement(D.a,{eventKey:"datasets",title:"Datasets",def:!0},r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"))),r.a.createElement("tbody",null,a)))))))}},{key:"render",value:function(){var e,t=this.renderItemDetailsByType();return e=null!=this.props.item?r.a.createElement(E.a,{className:"align-items-start"},t):r.a.createElement(E.a,null),r.a.createElement("div",{class:"dataiku-item"},e)}}]),a}(n.Component)),P=function(e){Object(d.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).filterDataikuItems=function(e){var t=n.formatQueryTypes(),a=[];return Object.keys(e).forEach((function(n){var r=e[n];t.indexOf(r.object_type.toString())>=0&&(a[a.length]=r)})),a},n.formatQueryTypes=function(){var e=[];return Object.entries(n.state.filters).sort().map((function(t){var a=Object(i.a)(t,2),n=a[0];1==a[1]&&(e[e.length]=n.toString())})),e},n.handleOnChange=function(e){var t=n.state.filters;t[e]=!t[e],n.setState({filters:t})},n.loadItem=function(e){n.setState({loading:!0}),e.length>0&&n.loadItemByKey(e[0].key)},n.loadItemByKey=function(e){var t="project",a=e.split("|").length-1;1==a?t="dataset":2==a&&(t="column"),fetch(window.getWebAppBackendUrl("load-item")+"?key="+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("response == "),console.log(e),n.setState({loading:!1,selectedItem:e,selectedItemType:t})}))},n.search=function(e){var t=window.getWebAppBackendUrl("search")+"?term="+e;n.setState({loading:!0}),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=n.filterDataikuItems(e);n.setState({searchResults:t,loading:!1})}))},n.state={dataiku:void 0,dataikuItem:null,filters:{column:!0,dataset:!0,project:!0},currentUser:"",loading:!0,openFilter:!0,selectedItem:null,selectedItemType:null,searchResults:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.$(document).ready((function(){fetch(window.getWebAppBackendUrl("get-user")).then((function(e){return e.json()})).then((function(t){e.setState({dataiku:window.dataiku,currentUser:t["you-are"]}),e.setState({rendered:!0}),e.setState({loading:!1}),e.navDeepLink(),u.a.on("datasetSelected",(function(t){e.loadItem([{key:t,object_type:"dataset"}]),e.navToObject(t)})),u.a.on("projectSelected",(function(t){e.loadItem([{key:t,object_type:"project"}]),e.navToObject(t)})),u.a.on("columnSelected",(function(t){e.loadItem([{key:t,object_type:"column"}]),e.navToObject(t)})),u.a.on("loading",(function(t){return e.setState({loading:t})}))}))}))}},{key:"navDeepLink",value:function(){var e=window.top.location.href.split("#o=");e.length>1&&this.loadItemByKey(e[1])}},{key:"navToObject",value:function(e){var t=window.top.location.href.split("#")[0];window.top.location.href=t+"#o="+e}},{key:"rescan",value:function(){var e=this;this.setState({loading:!0}),fetch(window.getWebAppBackendUrl("scan")).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1})}))}},{key:"renderMenuItemChildren",value:function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement("span",{style:{paddingRight:"5px"}},y.a.getIconForDataikuItemType(e.object_type,"13px")),"column"==e.object_type&&r.a.createElement("span",null,r.a.createElement("span",{style:{}},"Project:"),r.a.createElement("span",{style:{}},e.key.split("|")[0]),r.a.createElement("span",{style:{padding:"0px 4px"}},"|"),r.a.createElement("span",{style:{}},"Dataset:"),r.a.createElement("span",{style:{padding:"0px 4px"}},e.key.split("|")[1]),r.a.createElement("span",{style:{padding:"0px 4px"}},"|"),r.a.createElement("span",null,"Column:"),r.a.createElement("span",{style:{fontWeight:"bold",padding:"0px 4px"}},e.name)),"dataset"==e.object_type&&r.a.createElement("span",null,r.a.createElement("span",{style:{}},"Project:"),r.a.createElement("span",{style:{}},e.key.split("|")[0]),r.a.createElement("span",{style:{padding:"0px 4px"}},"|"),r.a.createElement("span",{style:{}},"Dataset:"),r.a.createElement("span",{style:{padding:"0px 4px",fontWeight:"bold"}},e.name)),"project"==e.object_type&&r.a.createElement("span",null,r.a.createElement("span",null,"Project: "),r.a.createElement("span",{style:{fontWeight:"bold",padding:"0px 4px"}},e.name)))}},{key:"toggleFilter",value:function(){this.setState({openFilter:!this.state.openFilter})}},{key:"render",value:function(){var e=this;this.searchRef=r.a.createRef();var t=this.state,a=t.filters,n=(t.loading,t.openFilter),l=t.searchResults,s=t.selectedItem,o=t.selectedItemType;return this.dataikuItem=r.a.createElement(L,{item:s,object_type:o}),r.a.createElement(h.a,{style:{paddingTop:"10px"}},r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement("div",{class:"title-row"},r.a.createElement("h1",null,"Thread"))),r.a.createElement(f.a,{style:{textAlign:"right",paddingTop:"16px",paddingRight:"16px"}},r.a.createElement("div",null,this.state.currentUser),r.a.createElement(m.g,{onClick:function(){return e.rescan()},style:{width:"20px",height:"20px",cursor:"pointer"}}))),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement("div",{className:"input-group",style:{width:"100%"}},r.a.createElement(p.a,{filterBy:function(){return!0},id:"async-search",delay:300,labelKey:function(e){return e.key.replaceAll("|"," | ")},ref:this.searchRef,minLength:3,onChange:this.loadItem,onSearch:this.search,options:l,placeholder:"Search",renderMenuItemChildren:this.renderMenuItemChildren,style:{width:"97.5%"}}),r.a.createElement("div",{className:"input-group-btn"},r.a.createElement(m.c,{onClick:function(){return e.toggleFilter()},style:{backgroundColor:"#66a3ff",color:"#FFFFFF",cursor:"pointer",height:"34px",padding:"8px",width:"34px"}}))))),n?r.a.createElement(E.a,{className:"filter",style:{marginTop:"0.5em"}},Object.entries(a).map((function(t){var a=Object(i.a)(t,2),n=a[0],l=a[1];return r.a.createElement(f.a,{xs:1},r.a.createElement("div",{className:"filter-types",key:n},r.a.createElement("input",{type:"checkbox",id:"filter-".concat(n),name:n,value:n,checked:l,onChange:function(){return e.handleOnChange(n)},style:{marginRight:"5px"}}),r.a.createElement("label",{htmlFor:"filter-".concat(n)},n,"s")))}))):null,r.a.createElement(E.a,null,r.a.createElement("div",{style:{padding:"10px"}},this.state.loading?r.a.createElement(g.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")):null)),r.a.createElement(E.a,null,this.dataikuItem))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){"use strict";var n={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}};t.a=n},34:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(37);var s={createDatasetLink:function(e,t){return"/projects/"+e+"/datasets/"+t+"/explore/"},createProjectLink:function(e){return"/projects/"+e+"/flow/"},createDatasetLinkTag:function(e,t){return'<a href="'+this.createDatasetLink(e,t)+'" target="_blank">'+e+"."+t+"</a>"},getIconForDataikuItemType:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"11px";switch(e){case"project":return r.a.createElement(l.e,{size:t});case"dataset":return r.a.createElement(l.b,{size:t});case"column":return r.a.createElement(l.a,{size:t});case"definition":return r.a.createElement(l.d,{size:t});default:return r.a.createElement(l.f,{size:t})}}};t.a=s},59:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(31),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(35),_customFlowNode_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(97),_common_layout_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(98),Lineage=function(_Component){Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Lineage,_Component);var _super=Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Lineage);function Lineage(props){var _this;return Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Lineage),_this=_super.call(this,props),_this.traverse=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=[];if(null!=t[a]&&t[a].length>0){n+=1;for(var l=0;l<t[a].length;l++)_this.traverse(e,t[a][l],a,n)}else e[e.length]={count:n-1,name:t.name};return r},_this.update=function(st,base_elem){var base_splits=base_elem.name.split("."),basePositionX=0,basePositionY=0,baseElementId="base",baseNode={id:baseElementId,type:"customFlowNode",data:{project:base_splits[0],dataset:base_splits[1]},position:{x:basePositionX,y:basePositionY},style:{backgroundColor:"#FFF",borderColor:"red",borderWidth:"2px",fontWeight:"bold",height:Lineage.DEFAULT_NODE_HEIGHT,width:Lineage.DEFAULT_NODE_WIDTH},sourcePosition:"right",targetPosition:"left",draggable:!1},elements=[baseNode],_nodes=[baseNode],_edges=[],down_res=[];null!=base_elem.lineage_downstream&&""!=base_elem.lineage_downstream&&(null!=base_elem.lineage_downstream?_this.traverse(down_res,base_elem,"lineage_downstream"):down_res=eval(base_elem.lineage_downstream));var up_res=[];null!=base_elem.lineage_upstream&&""!=base_elem.lineage_upstream&&(null!=base_elem.lineage_upstream?_this.traverse(up_res,base_elem,"lineage_upstream"):up_res=eval(base_elem.lineage_upstream));for(var x=0;x<down_res.length;x++){var lbl=down_res[x];null!=lbl.name&&(lbl=down_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]);var elementId="down_"+x.toString(),node={id:elementId,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{backgroundColor:"#FFF",height:Lineage.DEFAULT_NODE_HEIGHT,width:Lineage.DEFAULT_NODE_WIDTH},targetPosition:"left",sourcePosition:"right",position:{x:basePositionX,y:basePositionY},draggable:!1};elements[elements.length]=node,_nodes[_nodes.length]=node;var edgeId="edge_down_"+x.toString(),edge={id:edgeId,source:baseElementId,target:elementId,arrowHeadType:"arrow"};down_res[x].count>0&&(edge.label="["+down_res[x].count+"]",edge.animated=!0),elements[elements.length]=edge,_edges[_edges.length]=edge}for(var x=0;x<up_res.length;x++){var lbl=up_res[x];null!=lbl.name&&(lbl=up_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]);var elementId="up_"+x.toString(),node={id:elementId,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{backgroundColor:"#FFF",height:Lineage.DEFAULT_NODE_HEIGHT,width:Lineage.DEFAULT_NODE_WIDTH},sourcePosition:"right",targetPosition:"left",position:{x:basePositionX,y:basePositionY},draggable:!1};elements[elements.length]=node,_nodes[_nodes.length]=node;var edgeId="edge_up_"+x.toString(),edge={id:edgeId,source:elementId,target:baseElementId,arrowHeadType:"arrow"};up_res[x].count>0&&(edge.animated=!0,edge.label="["+up_res[x].count+"]"),elements[elements.length]=edge,_edges[_edges.length]=edge}_this.setState({edges:_edges,elements:elements,nodes:_nodes}),Object(_common_layout_js__WEBPACK_IMPORTED_MODULE_7__.a)(elements).then((function(e){return _this.setState({elements:e})})).catch((function(e){return console.error(e)}))},console.log("Lineage :: props == "),console.log(props),_this.state={elements:[],last_ds:"",nodes:[],edges:[]},_this.nodeTypes={customFlowNode:_customFlowNode_js__WEBPACK_IMPORTED_MODULE_6__.a},_this}return Object(_Users_ryan_Documents_Documents_Ryan_s_MacBook_Pro_source_code_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Lineage,[{key:"onLoad",value:function(e){e.fitView()}},{key:"render",value:function(){return console.log("Render() :: this.state == "),console.log(this.state),this.props.deets.name!=this.state.last_ds&&(this.state.last_ds=this.props.deets.name,this.update("elements",this.props.deets)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{backgroundColor:"#EEE",height:Lineage.DEFAULT_CONTAINER_HEIGHT,width:"100%"}},this.state.elements&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__.c,{onLoad:this.onLoad,elements:this.state.elements,nodeTypes:this.nodeTypes,style:{height:"100%",width:"100%"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__.a,{showInteractive:"false"})))}}]),Lineage}(react__WEBPACK_IMPORTED_MODULE_4__.Component);Lineage.DEFAULT_CONTAINER_HEIGHT=500,Lineage.DEFAULT_CONTAINER_WIDTH=1030,Lineage.DEFAULT_NODE_HEIGHT=60,Lineage.DEFAULT_NODE_WIDTH=200,__webpack_exports__.a=Lineage},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(17),s=a(35);a(34);t.a=Object(n.memo)((function(e){var t=e.data,a=e.isConnectable,n="",i="",o="";return function(e){var t=e.project.split("|");switch(t.length){case 1:n=e.project,i=e.dataset;break;case 2:n=t[0],i=t[1];break;case 3:n=t[0],i=t[1],o=t[2];break;default:n=e.project,i=e.dataset}}(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{type:"target",position:"left",style:{background:"#555"},isConnectable:a}),r.a.createElement("div",{style:{border:"solid 1px #333",borderRadius:"3px",height:"100%",padding:"10px",textAlign:"center",width:"100%"}},r.a.createElement("div",{style:{fontWeight:"bold"}},n),r.a.createElement("div",null,r.a.createElement("a",{href:"javascript:void(0)",onClick:function(e){e.preventDefault(),l.a.dispatch("datasetSelected",n+"|"+i)}},i)),r.a.createElement("div",null,o)),r.a.createElement(s.b,{type:"source",position:"right",isConnectable:a,style:{background:"#555"}}))}))},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(50),r=a.n(n),l=a(99),s=a(100),i=a.n(s),o=a(35),c=a(59),d=function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n,l,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],n=[],l=new i.a({defaultLayoutOptions:{"elk.algorithm":"layered","elk.contentAlignment":"V_CENTER","elk.direction":"RIGHT","elk.edgeRouting":"SPLINES","elk.layered.spacing.nodeNodeBetweenLayers":50,"elk.padding":"[top=50,left=150,bottom=25,right=25]","elk.spacing.nodeNode":25}}),t.forEach((function(e){var t,r,l,s;Object(o.d)(e)?a.push({id:e.id,width:null!==(t=null===(r=e.__rf)||void 0===r?void 0:r.width)&&void 0!==t?t:c.a.DEFAULT_NODE_WIDTH,height:null!==(l=null===(s=e.__rf)||void 0===s?void 0:s.height)&&void 0!==l?l:c.a.DEFAULT_NODE_HEIGHT}):n.push({id:e.id,target:e.target,source:e.source})})),e.next=6,l.layout({id:"root",children:a,edges:n});case 6:return s=e.sent,e.abrupt("return",t.map((function(e){if(Object(o.d)(e)){var t,a=null===s||void 0===s||null===(t=s.children)||void 0===t?void 0:t.find((function(t){return t.id===e.id}));e.sourcePosition="right",e.targetPosition="left",(null===a||void 0===a?void 0:a.x)&&(null===a||void 0===a?void 0:a.y)&&(null===a||void 0===a?void 0:a.width)&&(null===a||void 0===a?void 0:a.height)&&(e.position={x:a.x-a.width/2+Math.random()/1e3,y:a.y-a.height/2})}return e})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},[[104,1,2]]]);
//# sourceMappingURL=main.ea246c2c.chunk.js.map