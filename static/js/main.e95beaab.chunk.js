(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(12),n(3)),s=n(4),i=n(6),u=n(5),h=function(e){var t=e.name,n=e.email,a=e.id;return o.a.createElement("div",{className:"tc bg-green dib br3 pa3 ma2 grow bw3 shadow-5"},o.a.createElement("img",{alt:"robo",src:"https://robohash.org/".concat(a,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},m=function(e){var t=e.robots.map((function(e){return o.a.createElement(h,{key:e.id,id:e.id,name:e.name,email:e.email})}));return o.a.createElement("div",null,o.a.createElement("div",null,t))},d=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-green",type:"search",placeholder:"Search robots",onChange:t}))},g=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"600px",margin:"30px",paddingTop:"20px",paddingBottom:"20px"}},e.children)},p=(n(13),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){console.log(t.target.value),e.setState({searchfild:t.target.value})},e.state={robots:[],searchfild:""},console.log("constructor"),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this;console.log("render");var t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfild.toLowerCase())})),n="";return n=0===this.state.robots.length?o.a.createElement("h1",null," Loading... "):o.a.createElement(m,{robots:t}),o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f2"},"RoboFriends"),o.a.createElement(d,{searchChange:this.onSearchChange}),o.a.createElement(g,null,n))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.e95beaab.chunk.js.map