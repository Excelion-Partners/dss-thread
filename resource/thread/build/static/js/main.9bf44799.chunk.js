(this.webpackJsonpthread=this.webpackJsonpthread||[]).push([[0],{54:function(e,t,n){e.exports=n(84)},59:function(e,t,n){},60:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),l=n.n(o),c=(n(59),n(22)),i=n(23),s=n(27),u=n(26),m=(n(60),n(61),n(52)),d=n(88),h=n(87),p=n(16);var f={getIconForObjectType:function(e){switch(e){case"project":return r.a.createElement(p.d,null);case"dataset":return r.a.createElement(p.b,null);case"column":return r.a.createElement(p.a,null);case"definition":return r.a.createElement(p.c,null);default:return r.a.createElement(p.e,null)}}},g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(i.a)(n,[{key:"render",value:function(){var e;return console.log("render() :: this.props == "),console.log(this.props),e=null!=this.props.item?r.a.createElement(h.a,null,r.a.createElement("p",null,r.a.createElement("b",null,"Name: "),this.props.item.name),r.a.createElement("p",null,r.a.createElement("b",null,"Project: "),this.props.item.project)):r.a.createElement(h.a,null,r.a.createElement("p",null,"No Item to display...")),r.a.createElement("div",{style:{paddingTop:"20px"}},e)}}]),n}(a.Component),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).loadItem=function(e){if(console.log("loadItem :: item == "),console.log(e),e.length>0){fetch(window.getWebAppBackendUrl("load-item")+"?key="+e[0].key,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("response == "),console.log(e),a.setState({selectedItem:e})}))}else a.setState({selectedItem:null})},a.search=function(e){fetch(window.getWebAppBackendUrl("search")+"?term="+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=[];Object.keys(e).forEach((function(n){t[t.length]=e[n]})),a.setState({searchResults:t})}))},a.state={dataiku:void 0,dataikuItem:null,isLoading:!1,selectedItem:null,searchResults:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.$(document).ready((function(){e.setState({dataiku:window.dataiku}),e.setState({rendered:!0})}))}},{key:"renderMenuItemChildren",value:function(e,t){return r.a.createElement(a.Fragment,null,f.getIconForObjectType(e.type),r.a.createElement("span",{style:{marginLeft:".5rem",marginRight:".5rem"}},"Type: ",e.type,"; "),r.a.createElement("span",null,"Name: ",e.name,"; "))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.searchResults,a=e.selectedItem;return this.dataikuItem=r.a.createElement(g,{item:a}),r.a.createElement(d.a,{style:{paddingTop:"20px"}},r.a.createElement(h.a,null,r.a.createElement(m.a,{filterBy:function(){return!0},id:"async-search",isLoading:t,labelKey:"name",minLength:3,onChange:this.loadItem,onSearch:this.search,options:n,placeholder:"Search for Datase",renderMenuItemChildren:this.renderMenuItemChildren})),this.dataikuItem)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.9bf44799.chunk.js.map