(this.webpackJsonpthread=this.webpackJsonpthread||[]).push([[0],{20:function(e,t,a){"use strict";var n={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}};t.a=n},207:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(23),_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40),_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(69),_customFlowNode_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(209),dagre__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(210),dagre__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(dagre__WEBPACK_IMPORTED_MODULE_7__),Lineage=function(_Component){Object(_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Lineage,_Component);var _super=Object(_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Lineage);function Lineage(props){var _this;return Object(_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Lineage),_this=_super.call(this,props),_this.traverse=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=[];if(null!=t[a]&&t[a].length>0){n+=1;for(var r=0;r<t[a].length;r++)_this.traverse(e,t[a][r],a,n)}else e[e.length]={count:n-1,name:t.name};return l},_this.update=function(st,base_elem){var base_splits=base_elem.name.split("."),basePositionX=0,basePositionY=0;console.log("basePositionX == "),console.log(basePositionX),console.log("basePositionY == "),console.log(basePositionY),Lineage.dagreGraph.setGraph({rankdir:"LR"});var baseElementId="base",baseNode={id:baseElementId,type:"customFlowNode",data:{project:base_splits[0],dataset:base_splits[1]},position:{x:basePositionX,y:basePositionY},style:{backgroundColor:"#FFF",borderColor:"red",borderWidth:"2px",fontWeight:"bold",height:Lineage.nodeHeight,width:Lineage.nodeWidth},sourcePosition:"right",targetPosition:"left",draggable:!1},elements=[baseNode],_nodes=[baseNode],_edges=[],down_res=[];null!=base_elem.lineage_downstream&&""!=base_elem.lineage_downstream&&(null!=base_elem.lineage_downstream?_this.traverse(down_res,base_elem,"lineage_downstream"):down_res=eval(base_elem.lineage_downstream));var up_res=[];null!=base_elem.lineage_upstream&&""!=base_elem.lineage_upstream&&(null!=base_elem.lineage_upstream?_this.traverse(up_res,base_elem,"lineage_upstream"):up_res=eval(base_elem.lineage_upstream));for(var x=0;x<down_res.length;x++){var lbl=down_res[x];null!=lbl.name&&(lbl=down_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]);var elementId="down_"+x.toString(),downYPosition=x+1-Math.ceil(.5*down_res.length);console.log("downYPosition == "),console.log(downYPosition);var node={id:elementId,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{backgroundColor:"#FFF",height:Lineage.nodeHeight,width:Lineage.nodeWidth},targetPosition:"left",sourcePosition:"right",position:{x:basePositionX,y:basePositionY},draggable:!1};elements[elements.length]=node,_nodes[_nodes.length]=node;var edgeId="edge_down_"+x.toString(),edge={id:edgeId,source:baseElementId,target:elementId,arrowHeadType:"arrow"};down_res[x].count>0&&(edge.label="["+down_res[x].count+"]",edge.animated=!0),elements[elements.length]=edge,_edges[_edges.length]=edge}for(var x=0;x<up_res.length;x++){var lbl=up_res[x];null!=lbl.name&&(lbl=up_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]);var elementId="up_"+x.toString(),node={id:elementId,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{backgroundColor:"#FFF",height:Lineage.nodeHeight,width:Lineage.nodeWidth},sourcePosition:"right",targetPosition:"left",position:{x:basePositionX,y:basePositionY},draggable:!1};elements[elements.length]=node,_nodes[_nodes.length]=node;var edgeId="edge_up_"+x.toString(),edge={id:edgeId,source:elementId,target:baseElementId,arrowHeadType:"arrow"};up_res[x].count>0&&(edge.animated=!0,edge.label="["+up_res[x].count+"]"),elements[elements.length]=edge,_edges[_edges.length]=edge}console.log("elements == "),console.log(elements),console.log("_nodes == "),console.log(_nodes),console.log("_edges == "),console.log(_edges),_this.setState({nodes:_nodes,edges:_edges,elements:elements})},_this.state={elements:[],last_ds:"",nodes:[],edges:[]},_this.nodeTypes={customFlowNode:_customFlowNode_js__WEBPACK_IMPORTED_MODULE_6__.a},Lineage.dagreGraph.setDefaultEdgeLabel((function(){return{}})),_this}return Object(_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Lineage,[{key:"onLoad",value:function(e){e.fitView()}},{key:"render",value:function(){return console.log("Render() :: this.state == "),console.log(this.state),this.props.deets.name!=this.state.last_ds&&(this.state.last_ds=this.props.deets.name,this.update("elements",this.props.deets)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{backgroundColor:"#EEE",height:Lineage.containerHeight,width:Lineage.containerWidth}},this.state.elements&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__.c,{connectionLineType:"smoothstep",elements:this.state.elements,nodeTypes:this.nodeTypes,onLoad:this.onLoad,style:{height:"100%",width:"100%"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_5__.a,{showInteractive:"false"})))}}]),Lineage}(react__WEBPACK_IMPORTED_MODULE_4__.Component);Lineage.containerHeight=500,Lineage.containerWidth=1030,Lineage.nodeWidth=200,Lineage.nodeHeight=60,Lineage.dagreGraph=new dagre__WEBPACK_IMPORTED_MODULE_7___default.a.graphlib.Graph,__webpack_exports__.a=Lineage},209:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(20),s=a(69);a(48);t.a=Object(n.memo)((function(e){var t=e.data,a=e.isConnectable;return console.log("data == "),console.log(t),console.log("isConnectable == "),console.log(a),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{type:"target",position:"left",style:{background:"#555"},isConnectable:a}),l.a.createElement("div",{style:{border:"solid 1px #333",borderRadius:"3px",height:"100%",padding:"10px",textAlign:"center",width:"100%"}},l.a.createElement("div",{style:{fontWeight:"bold"}},t.project),l.a.createElement("div",null,l.a.createElement("a",{href:"javascript:void(0)",onClick:function(e){e.preventDefault(),r.a.dispatch("datasetSelected",t.project+"."+t.dataset)}},t.dataset)),l.a.createElement("div",null,t.column)),l.a.createElement(s.b,{type:"source",position:"right",isConnectable:a,style:{background:"#555"}}))}))},215:function(e,t,a){e.exports=a(425)},220:function(e,t,a){},221:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),s=a.n(r),i=(a(220),a(11)),o=a(23),c=a(24),d=a(40),_=a(39),u=(a(221),a(222),a(20)),m=a(214),p=a(45),h=a(433),g=a(432),E=a(211),f=a(436),b=a(48),y=a(140),v=a(113),D=a(71),k=a(437),w=a(438),C=a(434),P=a(435),x=a(207),O=function(e){Object(d.a)(a,e);var t=Object(_.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{maxWidth:"300px",border:"solid 1px #999",borderRadius:"2px",padding:"10px"}},l.a.createElement(g.a,null,l.a.createElement(E.a,null,l.a.createElement("span",{style:{fontWeight:"bold",paddingRight:"10px"}},"ID"),l.a.createElement("span",null,this.props.definition.id))),l.a.createElement(g.a,null,l.a.createElement(E.a,null,l.a.createElement("span",{style:{fontWeight:"bold",paddingRight:"10px"}},"Name"),l.a.createElement("span",null,this.props.definition.name))),l.a.createElement(g.a,null,l.a.createElement(E.a,null,l.a.createElement("span",{style:{fontWeight:"bold",paddingRight:"10px"}},"Description"),l.a.createElement("span",null,this.props.definition.description))))}}]),a}(n.Component),L=a(212),j=(a(422),function(e){Object(d.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={newDefModal:!1,selectedDef:{name:"New Definition",description:""}},n}return Object(c.a)(a,[{key:"flattenArray",value:function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=0;n<e[t].length;n++){var l=e[t][n];a.push(l.name),l[t].length>0&&(a=this.flattenArray(l,t,a))}return a}},{key:"saveCol",value:function(e,t){var a=this,n=[this.props.item.key];e&&(n=n.concat(this.flattenArray(this.props.item,"lineage_upstream"))),t&&(n=n.concat(this.flattenArray(this.props.item,"lineage_downstream"))),Object(L.confirmAlert)({title:"Confirm Save",message:"Are you sure to apply this definition to "+n,buttons:[{label:"Apply",onClick:function(){var e="";null!=a.state.selectedDef.description&&(e=a.state.selectedDef.description);var t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:a.state.selectedDef.name,description:e,applied_to:n,id:a.state.selectedDef.id})};u.a.dispatch("loading",!0),fetch(window.getWebAppBackendUrl("update-desc"),t).then((function(e){return e.json()})).then((function(e){a.props.item.definition=e.value,a.setState({newDefModal:!1,selectedDef:e.value}),u.a.dispatch("loading",!1)}))}},{label:"Cancel",onClick:function(){}}]})}},{key:"buildLineage",value:function(){return l.a.createElement(g.a,null,l.a.createElement(x.a,{deets:this.props.item,full_ds_name:this.props.item.name,type:this.props.type}))}},{key:"buildTagsString",value:function(e){var t=[l.a.createElement("b",null,"Tags: ")];return e.forEach((function(e){t[t.length]=l.a.createElement("span",null,e)})),t}},{key:"openExternalProject",value:function(e){alert(e)}},{key:"renderItemDetailsByType",value:function(){switch(this.props.type){case"dataset":return this.renderDataset();case"project":return this.renderProject();case"column":return this.renderColumn();case"dataset":return l.a.createElement(E.a,null,l.a.createElement("p",null,"No rendering has been setup for this item."))}}},{key:"newDef",value:function(){this.setState({selectedDef:{name:"New Definition",value:this.props.item.comment}}),this.setState({newDefModal:!0})}},{key:"editDef",value:function(){this.setState({selectedDef:{name:this.props.item.definition.name,value:this.props.item.definition.description,id:this.props.item.definition.id}}),this.setState({newDefModal:!0})}},{key:"openColumn",value:function(e){u.a.dispatch("columnSelected",e)}},{key:"openDataset",value:function(e){u.a.dispatch("datasetSelected",e)}},{key:"openProject",value:function(e){u.a.dispatch("projectSelected",e)}},{key:"renderColumn",value:function(){var e=this,t=this.buildLineage();return this.props.item.definition.id>-1?(this.state.selectedDef.name=this.props.item.definition.name,this.state.selectedDef.id=this.props.item.definition.id,this.state.selectedDef.description=this.props.item.definition.description):(this.state.selectedDef.name="New Definition",this.state.selectedDef.description="",this.state.selectedDef.id=-1),l.a.createElement(E.a,null,l.a.createElement(k.a,{size:"lg",show:this.state.newDefModal,animation:!1,onHide:function(){return e.setState({newDefModal:!1})}},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Definition: ",this.state.selectedDef.name)),l.a.createElement(k.a.Body,null,l.a.createElement(h.a,null,l.a.createElement(g.a,null,l.a.createElement(w.a,{style:{paddingTop:"5px"}},l.a.createElement(w.a.Group,{className:"mb-3"},l.a.createElement(w.a.Label,null,"Definition Name"),l.a.createElement(w.a.Control,{type:"text",defaultValue:this.state.selectedDef.name,onChange:function(t){return e.state.selectedDef.name=t.target.value}}),l.a.createElement("div",{style:{height:"10px"}}),l.a.createElement(w.a.Label,null,"Definition Description"),l.a.createElement(w.a.Control,{type:"text",defaultValue:this.state.selectedDef.value,onChange:function(t){return e.state.selectedDef.description=t.target.value}}),l.a.createElement(w.a.Text,{className:"text-muted"},"Will appear in the Dataiku Dataset's column description.")))))),l.a.createElement(k.a.Footer,null,l.a.createElement(C.a,{variant:"secondary",onClick:function(){return e.saveCol(!0,!0)}},"Save all Lineage"),l.a.createElement(C.a,{variant:"primary",onClick:function(){return e.saveCol(!1,!1)}},"Save"))),l.a.createElement("p",{class:"name"},l.a.createElement("b",null,"Project: "),l.a.createElement("span",{className:"app-link",onClick:function(){return e.openProject(e.props.item.project)}},this.props.item.project)),l.a.createElement("p",{class:"name"},l.a.createElement("b",null,"Dataset: "),l.a.createElement("span",{className:"app-link",onClick:function(){return e.openDataset(e.props.item.project+"."+e.props.item.dataset)}},this.props.item.dataset)),l.a.createElement("p",{class:"name"},l.a.createElement("b",null,"Column Name: "),this.props.item.name),l.a.createElement("p",{class:"name"},l.a.createElement("b",null,"Type: "),this.props.item.type),l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(v.a,{defaultActiveKey:"definition",className:"mb-3"},l.a.createElement(D.a,{eventKey:"definition",title:"Definition",def:!0},-1==this.props.item.definition.id&&l.a.createElement("div",null,l.a.createElement(C.a,{variant:"primary",onClick:function(){return e.newDef()}},"Add Definition")," "),this.props.item.definition.id>0&&l.a.createElement("div",null,l.a.createElement(C.a,{variant:"primary",onClick:function(){return e.editDef()}},"Edit Definition")," ",l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement(O,{definition:this.state.selectedDef})))),l.a.createElement(D.a,{eventKey:"lineage",title:"Lineage",def:!0},l.a.createElement("div",{class:"lineage"},t)))))}},{key:"renderDataset",value:function(){var e=this,t=this.buildTagsString(this.props.item.meta.tags),a=this.buildLineage(),n=this.props.item.schema.map((function(t){return l.a.createElement("tr",{onClick:function(){return e.openColumn(t.key)}},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.type),l.a.createElement("td",null,t.comment))}));return l.a.createElement(E.a,null,l.a.createElement("p",{class:"name"},l.a.createElement("b",null,"Name: "),this.props.item.name,l.a.createElement("span",{style:{paddingLeft:"4px"}},l.a.createElement("a",{href:b.a.createDatasetLink(this.props.item.project,this.props.item.id),target:"_blank"},l.a.createElement(P.a,{size:20})))),l.a.createElement("p",{class:"project"},l.a.createElement("b",null,"Project: "),l.a.createElement("span",{className:"app-link",onClick:function(){return e.openProject(e.props.item.project)}},this.props.item.project)),l.a.createElement("p",{class:"name"},l.a.createElement("b",null,"Type: "),this.props.type),l.a.createElement("div",{class:"tags"},t),l.a.createElement(g.a,{style:{paddingTop:"20px"}},l.a.createElement(v.a,{defaultActiveKey:"lineage",id:"uncontrolled-tab-example",className:"mb-3"},l.a.createElement(D.a,{eventKey:"lineage",title:"Lineage"},l.a.createElement("div",{class:"lineage"},a)),l.a.createElement(D.a,{eventKey:"columns",title:"Columns",def:!0},l.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,n))))))}},{key:"renderProject",value:function(){var e=this,t=this.buildTagsString(this.props.item.tags),a=this.props.item.datasets.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",{onClick:function(){return e.openDataset(t)}},t))}));return l.a.createElement(E.a,null,l.a.createElement("p",{class:"name"},l.a.createElement("b",null,"Name: "),l.a.createElement("span",null,this.props.item.name),l.a.createElement("span",{style:{paddingLeft:"4px"}},l.a.createElement("a",{href:b.a.createProjectLink(this.props.item.projectKey),target:"_blank"},l.a.createElement(P.a,{size:20})))),l.a.createElement("p",{class:"name"},l.a.createElement("b",null,"Type: "),this.props.type),l.a.createElement("div",{class:"tags"},t),l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(v.a,{defaultActiveKey:"datasets",className:"mb-3"},l.a.createElement(D.a,{eventKey:"datasets",title:"Datasets",def:!0},l.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"))),l.a.createElement("tbody",null,a))))))}},{key:"render",value:function(){var e,t=this.renderItemDetailsByType();return e=null!=this.props.item?l.a.createElement(g.a,{className:"align-items-start"},l.a.createElement(E.a,{xs:1},b.a.getIconForDataikuItemType(this.props.type,"100%")),t):l.a.createElement(g.a,null,l.a.createElement("p",null,"No Item to display...")),l.a.createElement("div",{class:"dataiku-item"},e)}}]),a}(n.Component)),I=function(e){Object(d.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).filterDataikuItems=function(e){var t=n.formatQueryTypes(),a=[];return Object.keys(e).forEach((function(n){var l=e[n];t.indexOf(l.type.toString())>=0&&(a[a.length]=l)})),a},n.formatQueryTypes=function(){var e=[];return Object.entries(n.state.filters).map((function(t){var a=Object(i.a)(t,2),n=a[0];1==a[1]&&(e[e.length]=n.toString())})),e},n.handleOnChange=function(e){var t=n.state.filters;t[e]=!t[e],n.setState({filters:t})},n.loadItem=function(e){if(n.setState({loading:!0}),console.log("loadItem :: item == "),console.log(e),e.length>0){fetch(window.getWebAppBackendUrl("load-item")+"?key="+e[0].key,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log("response == "),console.log(t),n.setState({loading:!1,selectedItem:t,selectedItemType:e[0].type})}))}},n.search=function(e){var t=window.getWebAppBackendUrl("search")+"?term="+e;n.setState({loading:!0}),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=n.filterDataikuItems(e);n.setState({searchResults:t,loading:!1})}))},n.state={dataiku:void 0,dataikuItem:null,filters:{column:!0,dataset:!0,project:!0},loading:!0,openFilter:!0,selectedItem:null,selectedItemType:null,searchResults:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.$(document).ready((function(){e.setState({dataiku:window.dataiku}),e.setState({rendered:!0}),e.setState({loading:!1}),u.a.on("datasetSelected",(function(t){return e.loadItem([{key:t,type:"dataset"}])})),u.a.on("projectSelected",(function(t){return e.loadItem([{key:t,type:"project"}])})),u.a.on("columnSelected",(function(t){return e.loadItem([{key:t,type:"column"}])})),u.a.on("loading",(function(t){return e.setState({loading:t})}))}))}},{key:"rescan",value:function(){var e=this;this.setState({loading:!0}),fetch(window.getWebAppBackendUrl("scan")).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1})}))}},{key:"renderMenuItemChildren",value:function(e,t){return l.a.createElement(n.Fragment,null,b.a.getIconForDataikuItemType(e.type),l.a.createElement("span",{style:{fontWeight:"bold",paddingLeft:"4px"}},"Name: ",e.name),l.a.createElement("span",{style:{padding:"3px"}},"|"),l.a.createElement("span",null,"Type: ",e.type),"dataset"==e.type||"column"==e.type&&l.a.createElement("span",null,l.a.createElement("span",{style:{padding:"3px"}},"|"),l.a.createElement("span",null,"Project: ",e.key.split(".")[0])))}},{key:"toggleFilter",value:function(){this.setState({openFilter:!this.state.openFilter})}},{key:"render",value:function(){var e=this,t=this.state,a=t.filters,n=(t.loading,t.openFilter),r=t.searchResults,s=t.selectedItem,o=t.selectedItemType;return this.dataikuItem=l.a.createElement(j,{item:s,type:o}),l.a.createElement(h.a,{style:{paddingTop:"20px"}},l.a.createElement(g.a,{style:{paddingBottom:"10px"}},l.a.createElement(E.a,null,l.a.createElement("h1",null,"Thread")),l.a.createElement(E.a,{style:{textAlign:"right"}},l.a.createElement(p.g,{onClick:function(){return e.rescan()},style:{width:"20px",height:"20px",cursor:"pointer"}}))),l.a.createElement(g.a,null,l.a.createElement(E.a,null,l.a.createElement("div",{className:"input-group",style:{width:"100%"}},l.a.createElement(m.a,{filterBy:function(){return!0},id:"async-search",delay:300,labelKey:"key",minLength:3,onChange:this.loadItem,onSearch:this.search,options:r,placeholder:"Search",renderMenuItemChildren:this.renderMenuItemChildren,style:{width:"97.5%"}}),l.a.createElement("div",{className:"input-group-btn"},l.a.createElement(p.c,{onClick:function(){return e.toggleFilter()},style:{backgroundColor:"#66a3ff",color:"#FFFFFF",cursor:"pointer",height:"34px",padding:"8px",width:"34px"}}))))),n?l.a.createElement(g.a,{className:"filter",style:{marginTop:"0.5em"}},l.a.createElement(E.a,{xs:1},l.a.createElement("h4",null,"Filter By: ")),Object.entries(a).map((function(t){var a=Object(i.a)(t,2),n=a[0],r=a[1];return l.a.createElement(E.a,{xs:1},l.a.createElement("div",{className:"filter-types",key:n},l.a.createElement("input",{type:"checkbox",id:"filter-".concat(n),name:n,value:n,checked:r,onChange:function(){return e.handleOnChange(n)},style:{marginRight:"1.0em"}}),l.a.createElement("label",{htmlFor:"filter-".concat(n)},n,"s")))}))):null,l.a.createElement(g.a,null,l.a.createElement("div",{style:{padding:"10px"}},this.state.loading?l.a.createElement(f.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"visually-hidden"},"Loading...")):null)),l.a.createElement(g.a,null,this.dataikuItem))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(45);var s={createDatasetLink:function(e,t){return"/projects/"+e+"/datasets/"+t+"/explore/"},createProjectLink:function(e){return"/projects/"+e+"/flow/"},createDsLinkFull:function(e,t){return'<a href="'+this.createDsLink2(e,t)+'" target="_blank">'+e+"."+t+"</a>"},getIconForDataikuItemType:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"11px";switch(e){case"project":return l.a.createElement(r.e,{size:t});case"dataset":return l.a.createElement(r.b,{size:t});case"column":return l.a.createElement(r.a,{size:t});case"definition":return l.a.createElement(r.d,{size:t});default:return l.a.createElement(r.f,{size:t})}}};t.a=s}},[[215,1,2]]]);
//# sourceMappingURL=main.56c21336.chunk.js.map