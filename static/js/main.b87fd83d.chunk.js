(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){},230:function(e,t,a){e.exports=a(495)},235:function(e,t,a){},243:function(e,t){},245:function(e,t){},265:function(e,t){},493:function(e,t,a){},494:function(e,t,a){},495:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(210),s=a.n(r),l=(a(235),a(124),a(29)),i=a(30),c=a(32),u=a(31),d=a(76),g=a(33),p=a(48),h=a.n(p),m=a(75),f=a.n(m),b=a(211),v=a.n(b),w=a(212),j=a(123),E=(a(493),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1},a.onShow=function(){a.setState({show:!0})},a.onHide=function(){a.setState({show:!1})},a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"component-header"},o.a.createElement("div",{className:"component-header-title"},"pdl2pdf ~ powered by ",o.a.createElement("a",{href:"http://panjabdigilib.org"},"Panjab Digital Library")),o.a.createElement("h2",null,"convert image galleries on panjabdigilib.org to a single PDF file ~  panjabdigilib.org \u0a30\u0a3e\u0a39\u0a40\u0a02 \u0a2a\u0a41\u0a38\u0a24\u0a15\u0a3e \u0a28\u0a42\u0a70 PDF file \u0a26\u0a47 \u0a30\u0a42\u0a2a \u0a35\u0a3f\u0a1a \u0a2c\u0a23\u0a4c\u0a28 \u0a35\u0a3e\u0a32\u0a40 website"),o.a.createElement("p",null,"Panjab Digital Library is an invaluable collection of old and new manuscripts that have been digitized and preserved. However, not all of the content is easily downloadable. This utility can be used to convert imaage galleries that are missing a download link. Simply paste the link of a manuscript or scripture that you would like to download and a PDF will be generated."),o.a.createElement("p",null,o.a.createElement("b",null,"The program may take several minutes to complete for large files, please be patient!")))}}]),t}(n.Component)),y=(a(494),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){a.props.textChange(e)},a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"component-pdl-input"},o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Paste manuscript URL link here, ex: http://panjabdigilib.org/webuser/searches/displayPage.jsp?ID=8497&page=1&CategoryID=1",onChange:this.handleChange})),o.a.createElement("div",{className:"component-pdl-user-message"},this.props.outputLink)))}}]),t}(o.a.PureComponent)),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=Object(d.a)(a),n=h.a.parse(e.target.value,!0).query.ID;if(null==n)a.setState({userMessage:"Please enter a valid URL from panjabdigilib.org"});else{var o="/webuser/searches/displayPage.jsp?ID=".concat(n,"&page=1&CategoryID=1"),r=null,s=1,l=0,i=[];f.a.get({host:"panjabdigilib.org",path:o,headers:{mode:"no-cors"}},function(e){var a="";e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),e.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type"),e.setHeader("Access-Control-Allow-Credentials",!0),e.on("data",function(e){a+=e}),e.on("end",function(){var e=v.a.load(a);r=e("td").filter(function(){return"Pages"===e(this).text().trim()}).next().text(),s=l=parseInt(r);for(var o=function(e){var a="http://panjabdigilib.org/images?ID=".concat(n,"&page=").concat(e,"&pagetype=null");j.a.read(a).then(function(a){a.getBase64(j.a.MIME_PNG,function(a,o){if(null!=a)console.log("error");else if(console.log("converted ".concat(e)),i[e]=o,l-=1,t.setState({userMessage:"Processing images... ".concat(l,"/").concat(s," \u0a2a\u0a28\u0a47 left")}),l<=0){t.setState({userMessage:"Finished processing. Generating PDF..."});for(var r=new w,c=1;c<=s;c++)r.addImage(i[c],"PNG",15,40,180,160),r.addPage(),t.setState({userMessage:"Generating PDF... ".concat(c,"/").concat(s," \u0a2a\u0a28\u0a47 completed")});t.setState({userMessage:"PDF Complete. Downloading..."}),r.save("".concat(n,".pdf")),t.setState({userMessage:"Download complete"})}})}).catch(function(e){console.log("error")})},c=1;c<=s;c++)o(c)})}).on("error",function(e){console.log("Error: "+e.message)}),a.setState({userMessage:"Processing images..."})}},a.state={url:"",userMessage:""},a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E,null),o.a.createElement(y,{textChange:this.handleInputChange,outputLink:this.state.userMessage}))}}]),t}(o.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement("div",{className:"guca"},o.a.createElement("header",{className:"guca-header"},o.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[230,1,2]]]);
//# sourceMappingURL=main.b87fd83d.chunk.js.map