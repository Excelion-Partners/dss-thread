(this.webpackJsonpthread=this.webpackJsonpthread||[]).push([[0],{100:function(e,_,t){"use strict";var a=t(0),r=t.n(a),l=t(41),n=t(37);_.a=Object(a.memo)((function(e){var _=e.data,t=e.isConnectable;return r.a.createElement(r.a.Fragment,null,r.a.createElement(n.b,{type:"target",position:"left",style:{background:"#555"},isConnectable:t}),r.a.createElement("div",{style:{border:"solid 1px #333",borderRadius:"3px",textAlign:"center",padding:"10px"}},r.a.createElement("div",{style:{fontWeight:"bold"}},_.project),r.a.createElement("div",null,r.a.createElement("a",{href:"javascript:void(0)",onClick:function(e){e.preventDefault(),l.a.dispatch("datasetSelected",_.project+"."+_.dataset)}},_.dataset)),r.a.createElement("div",null,_.column)),r.a.createElement(n.b,{type:"source",position:"right",isConnectable:t}))}))},104:function(e,_,t){e.exports=t(138)},109:function(e,_,t){},110:function(e,_,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},111:function(e,_,t){},138:function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),l=t(15),n=t.n(l),s=(t(109),t(31)),o=t(32),c=t(48),E=t(47),d=(t(110),t(111),t(49)),u=t(17),i=(t(112),t(82)),m=(t(41),t(98)),D=function(e){Object(c.a)(t,e);var _=Object(E.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=_.call(this,e)).findDataset=function(e){var _=e.split(".")[0],t=e.split(".")[1];console.log(t);var r=a.state.full_tree[_].datasets.find((function(e){return e.name==t}));a.setState({selectedDataset:r,full_ds_name:t})},a.search=function(e){fetch(window.getWebAppBackendUrl("search")+"?term="+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("result :: "),console.log(e)}))},a.state={rendered:!1,dataiku:void 0,isLoaded:!1,project_list:[],full_ds_name:"",full_tree:{},selectedDataset:null},a.project_list=[],a}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.$(document).ready((function(){e.setState({dataiku:window.dataiku}),e.setState({rendered:!0}),e.search("thread")}))}},{key:"render",value:function(){var e=this,_=this.state,t=_.isLoaded,a=_.project_list,l=(_.full_tree,_.showDetail,_.selectedDataset),n=_.full_ds_name,s=r.a.createRef();return t?null==l?r.a.createElement(d.a,{style:{paddingTop:"20px"}},r.a.createElement(u.a,null,r.a.createElement(i.a,{ref:s,placeholder:"Search for Dataset",onChange:function(_){_.length>0&&(e.findDataset(_[0].id),s.current.clear())},options:a}))):r.a.createElement(d.a,{style:{paddingTop:"20px"}},r.a.createElement(u.a,null,r.a.createElement(i.a,{ref:s,placeholder:"Search for Dataset",onChange:function(_){_.length>0&&(e.findDataset(_[0].id),s.current.clear())},options:a})),r.a.createElement(u.a,null,r.a.createElement(m.a,{deets:l,full_ds_name:n}))):r.a.createElement("div",null,"Scanning DSS...")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,_,t){"use strict";var a={on:function(e,_){document.addEventListener(e,(function(e){return _(e.detail)}))},dispatch:function(e,_){document.dispatchEvent(new CustomEvent(e,{detail:_}))},remove:function(e,_){document.removeEventListener(e,_)}};_.a=a},98:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(31),_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32),_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(48),_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(47),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(49),react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(102),react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(103),react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(83),react_bootstrap__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(57),react_bootstrap__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(51),react_bootstrap__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(81),react_bootstrap__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(84),_eventBus__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(41),react_flow_renderer__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(37),_customFlowNode_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(100),Dataset=function(_Component){Object(_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Dataset,_Component);var _super=Object(_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Dataset);function Dataset(props){var _this;return Object(_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Dataset),_this=_super.call(this,props),_this.traverse=function(e,_,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=[];if(null!=_[t]&&_[t].length>0){a+=1;for(var l=0;l<_[t].length;l++)_this.traverse(e,_[t][l],t,a)}else e[e.length]={count:a-1,name:_.name};return r},_this.update=function(st,base_elem){var elements=[{id:"-1",data:{label:base_elem.name},position:{x:250,y:140},style:{width:"200px",borderColor:"red",borderWidth:"2px",fontWeight:"bold"},sourcePosition:"right",targetPosition:"left",draggable:!1}],down_res=[];null!=base_elem.lineage_downstream&&""!=base_elem.lineage_downstream&&(null!=base_elem.lineage_downstream_full?_this.traverse(down_res,base_elem,"lineage_downstream_full"):down_res=eval(base_elem.lineage_downstream));var up_res=[];null!=base_elem.lineage_upstream&&""!=base_elem.lineage_upstream&&(null!=base_elem.lineage_upstream_full?_this.traverse(up_res,base_elem,"lineage_upstream_full"):up_res=eval(base_elem.lineage_upstream));for(var x=0;x<down_res.length;x++){var lbl=down_res[x];null!=lbl.name&&(lbl=down_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]),elements[elements.length]={id:"down_"+x,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{width:"200px"},targetPosition:"left",sourcePosition:"right",position:{x:500,y:300/(down_res.length+1)*(x+1)},draggable:!1};var edge={id:"-1-down_"+x,source:"-1",target:"down_"+x,arrowHeadType:"arrow"};down_res[x].count>0&&(edge.label="["+down_res[x].count+"]",edge.animated=!0),elements[elements.length]=edge}for(var x=0;x<up_res.length;x++){var lbl=up_res[x];null!=lbl.name&&(lbl=up_res[x].name);var splits=lbl.split("."),project=splits[0],dataset="",col="";splits.length>1&&(dataset=splits[1]),splits.length>2&&(col=splits[2]),elements[elements.length]={id:"up_"+x,type:"customFlowNode",data:{project:project,dataset:dataset,column:col},style:{width:"200px"},sourcePosition:"right",targetPosition:"left",position:{x:0,y:300/(up_res.length+1)*(x+1)},draggable:!1};var edge={id:"-1-up_"+x,source:"up_"+x,target:"-1",arrowHeadType:"arrow"};up_res[x].count>0&&(edge.animated=!0,edge.label="["+up_res[x].count+"]"),elements[elements.length]=edge}var new_state={};new_state[st]=elements,_this.setState(new_state)},_this.closeColumn=function(){_this.modalClosed()},_this.state={modalDialog:!1,selectedCol:{name:"",comment:""},elements:[],col_elements:[],last_ds:"",showA:!1},_this.nodeTypes={customFlowNode:_customFlowNode_js__WEBPACK_IMPORTED_MODULE_16__.a},_this}return Object(_Users_dudac_Documents_source_excellion_dss_thread_resource_thread_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Dataset,[{key:"openColumn",value:function(e){var _=this;fetch(window.getWebAppBackendUrl("column-lineage"),{method:"POST",body:JSON.stringify({column:this.createColName(e.name)})}).then((function(e){return e.json()})).then((function(t){e.lineage_downstream=t.downs,e.lineage_upstream=t.ups,_.update("col_elements",e),_.setState({modalDialog:!0,selectedCol:e})}))}},{key:"createColName",value:function(e){return this.props.full_ds_name+"."+e}},{key:"formatLineage",value:function(e){return null!=e?e.join(", "):""}},{key:"modalClosed",value:function(){this.update("elements",this.props.deets),this.setState({modalDialog:!1})}},{key:"saveColLineage",value:function(){for(var e=[this.createColName(this.state.selectedCol.name)],_=0;_<this.state.selectedCol.lineage_upstream.length;_++)e[e.length]=this.state.selectedCol.lineage_upstream[_];for(_=0;_<this.state.selectedCol.lineage_downstream.length;_++)e[e.length]=this.state.selectedCol.lineage_downstream[_];this.modalClosed(),fetch(window.getWebAppBackendUrl("update-col-desc"),{method:"POST",body:JSON.stringify({cols:e,desc:this.state.selectedCol.comment})}).then((function(e){return e.json()})).then((function(e){_eventBus__WEBPACK_IMPORTED_MODULE_14__.a.dispatch("dataRefresh",{})}))}},{key:"saveCol",value:function(){for(var e=0;e<this.props.deets.schema.columns.length;e++)if(this.props.deets.schema.columns[e].name==this.state.selectedCol.name){this.props.deets.schema.columns[e].comment=this.state.selectedCol.comment;break}this.modalClosed(),fetch(window.getWebAppBackendUrl("update-col-desc"),{method:"POST",body:JSON.stringify({cols:[this.createColName(this.state.selectedCol.name)],desc:this.state.selectedCol.comment,upstream:!1,downstream:!1})}).then((function(e){return e.json()})).then((function(e){_eventBus__WEBPACK_IMPORTED_MODULE_14__.a.dispatch("dataRefresh",{})}))}},{key:"createDsLink",value:function(e){return this.createDsLink2(e.projectKey,e.name)}},{key:"createDsLink2",value:function(e,_){return"/projects/"+e+"/datasets/"+_+"/explore/"}},{key:"createDsLinkFull",value:function(e,_){return'<a href="'+this.createDsLink2(e,_)+'" target="_blank">'+e+"."+_+"</a>"}},{key:"onLoad",value:function(e){e.fitView()}},{key:"render",value:function(){var e=this;this.props.deets.name!=this.state.last_ds&&(this.state.last_ds=this.props.deets.name,this.update("elements",this.props.deets));var _=this.props.deets.schema.columns.map((function(_){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",{onClick:function(){return e.openColumn(_)}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",null,_.name),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",null,_.type),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",null,_.comment))}));return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{size:"lg",show:this.state.modalDialog,onHide:this.closeColumn,animation:!1},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a.Header,{closeButton:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a.Title,null,this.state.selectedCol.name)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a.Body,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{height:300}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_15__.c,{onLoad:this.onLoad,elements:this.state.col_elements,nodeTypes:this.nodeTypes},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_15__.a,{showInteractive:"false"})))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.a,{style:{paddingTop:"15px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.a.Group,{className:"mb-3"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.a.Label,null,"Description"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.a.Control,{type:"text",defaultValue:this.state.selectedCol.comment,onChange:function(_){return e.state.selectedCol.comment=_.target.value}}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.a.Text,{className:"text-muted"},"Will be saved to the DSS Column name")))))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a.Footer,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.a,{variant:"secondary",onClick:function(){return e.saveColLineage()}},"Save all Lineage"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.a,{variant:"primary",onClick:function(){return e.saveCol()}},"Save"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__.a,{style:{paddingTop:"20px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a",{href:this.createDsLink(this.props.deets),target:"_blank"},this.props.deets.name," (",this.props.deets.projectKey,")"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b",null,"Type:")," ",this.props.deets.type)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b",null,"Last Modified:")," ",this.props.deets.versionTag.lastModifiedBy.login," @ ",this.props.deets.versionTag.lastModifiedOn)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b",null,"Short Desc:")," ",this.props.deets.shortDesc)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.a,{show:this.state.showA,delay:3e3,autohide:!0,animation:!1},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.a.Header,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong",{className:"me-auto"},"Bootstrap"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small",null,"11 mins ago")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.a.Body,null,"Woohoo, you're reading this text in a Toast!"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,{style:{paddingTop:"20px"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_8__.a,{defaultActiveKey:"lineage",id:"uncontrolled-tab-example",className:"mb-3"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__.a,{eventKey:"lineage",title:"Lineage"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{height:300}},this.state.elements&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_15__.c,{onLoad:this.onLoad,elements:this.state.elements,nodeTypes:this.nodeTypes},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_flow_renderer__WEBPACK_IMPORTED_MODULE_15__.a,{showInteractive:"false"}))))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__.a,{eventKey:"columns",title:"Columns",def:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_7__.a,{striped:!0,bordered:!0,hover:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th",null,"Name"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th",null,"Type"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th",null,"Description"))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody",null,_)))))))}}]),Dataset}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Dataset}},[[104,1,2]]]);
//# sourceMappingURL=main.3426bcc7.chunk.js.map