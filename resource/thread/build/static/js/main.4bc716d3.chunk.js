(this.webpackJsonpthread=this.webpackJsonpthread||[]).push([[0],{53:function(e,t,n){e.exports=n(83)},58:function(e,t,n){},59:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),l=(n(58),n(44)),i=n(45),s=n(52),u=n(51),d=(n(59),n(60),n(50)),h=n(87),m=n(88),f=n(16);var p={getIconForObjectType:function(e){switch(e){case"project":return r.a.createElement(f.d,null);case"dataset":return r.a.createElement(f.b,null);case"column":return r.a.createElement(f.a,null);case"definition":return r.a.createElement(f.c,null);default:return r.a.createElement(f.e,null)}}},g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).search=function(e){fetch(window.getWebAppBackendUrl("search")+"?term="+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=[];Object.keys(e).forEach((function(n){t[t.length]=e[n]})),a.setState({searchResults:t})}))},a.state={rendered:!1,dataiku:void 0,isLoaded:!1,isLoading:!1,project_list:[],full_ds_name:"",full_tree:{},selectedDataset:null,searchResults:[]},a.project_list=[],a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.$(document).ready((function(){e.setState({dataiku:window.dataiku}),e.setState({rendered:!0})}))}},{key:"renderMenuItemChildren",value:function(e,t){return r.a.createElement(a.Fragment,null,p.getIconForObjectType(e.type),r.a.createElement("span",{style:{marginLeft:".5rem",marginRight:".5rem"}},"Type: ",e.type,"; "),r.a.createElement("span",null,"Name: ",e.name,"; "))}},{key:"render",value:function(){var e=this.state,t=(e.isLoaded,e.isLoading),n=(e.project_list,e.full_tree,e.showDetail,e.selectedDataset,e.full_ds_name,e.searchResults);r.a.createRef();return r.a.createElement(h.a,{style:{paddingTop:"20px"}},r.a.createElement(m.a,null,r.a.createElement(d.a,{filterBy:function(){return!0},id:"async-search",isLoading:t,labelKey:"name",minLength:3,onSearch:this.search,options:n,placeholder:"Search for Dataset",renderMenuItemChildren:this.renderMenuItemChildren})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.4bc716d3.chunk.js.map