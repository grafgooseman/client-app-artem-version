(this["webpackJsonpclient-app-artem-version"]=this["webpackJsonpclient-app-artem-version"]||[]).push([[0],{247:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"value","type":"string"}],"name":"setHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"value","type":"string"}],"name":"hasValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')},273:function(e,t,n){},276:function(e,t){},284:function(e,t,n){},286:function(e,t,n){},287:function(e,t){},316:function(e,t){},318:function(e,t){},328:function(e,t){},330:function(e,t){},355:function(e,t){},357:function(e,t){},358:function(e,t){},364:function(e,t){},377:function(e,t){},389:function(e,t){},392:function(e,t){},421:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(244),o=n.n(s),i=(n(273),n(274),n(275),n(180)),r=n(36),l=n(17),u=n(57),d=n(19),j=n(254),b=n(255),f=(n(284),n(1)),p=n(11),h=n(6),m=n(7),O=n(9),y=n(10),x=n(247),v=n(60),g=n(73),N=n(26),k=function(e){Object(O.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).state={},c}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.connectToMetamask()}},{key:"connectToMetamask",value:function(){var e=Object(p.a)(Object(f.a)().mark((function e(){var t,n,c,a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.a.providers.AlchemyProvider("rinkeby","jr7geQ17FBFpcrTepaQ1kGaNqsXzE9wL"),"3288b2fce8563381ff2e07a779a032616a674e4cdc11e9ef408c3e2a77c16449",n=new g.Wallet("3288b2fce8563381ff2e07a779a032616a674e4cdc11e9ef408c3e2a77c16449",t),c=new v.a.Contract("0x5E6D299Ef573812cb456BAf45c08f35970BCAA46",x,n),e.next=6,c.hasValue("b7f4239c5495959e23fc1ff80bb95db0d5a14b28ea307e2fd03b3ecf6426b532");case 6:a=e.sent,localStorage.setItem("result",a),console.log(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"renderMetamask",value:function(){}},{key:"render",value:function(){return Object(N.jsx)("div",{children:this.renderMetamask()})}}]),n}(c.Component),w=k,T=(n(286),n(182)),E=(n(312),n.p+"static/media/oc.648af548.png"),B=n.p+"static/media/Success.a90ce728.svg",A=(n.p,n(429)),M=(n(51),n(68),Object(l.a)([u.a.localhost,u.a.rinkeby,u.a.ropsten],[Object(j.a)({apiKey:"jr7geQ17FBFpcrTepaQ1kGaNqsXzE9wL"}),Object(b.a)()])),C=M.chains,F=M.provider,S=Object(i.a)({appName:"My RainbowKit App",chains:C}).connectors,I=Object(d.b)({autoConnect:!0,connectors:S,provider:F});var D=function(){return Object(c.useEffect)((function(){console.log("OnLoad"),console.log(Object(T.SHA256)(E.toString()).toString(T.enc.Hex));setTimeout((function(){console.log(document.getElementById("loading")),console.log(document.getElementById("loading")),document.getElementById("loading").style.display="none",document.getElementById("secondary").style.display="block"}),2e3)}),[]),Object(N.jsx)(d.a,{client:I,children:Object(N.jsx)(r.c,{chains:C,children:Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("header",{className:"App-header",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"jumbotron",children:[Object(N.jsx)("h1",{className:"display-4",children:"Hello, lawyer!"}),Object(N.jsx)("p",{className:"lead",children:"The DAPP to verify the ownership"}),Object(N.jsx)("hr",{className:"my-4"}),Object(N.jsx)("p",{children:"We make life easier"})]}),Object(N.jsx)(w,{}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"row justify-content-around",children:Object(N.jsx)("div",{id:"loading",className:"col",children:Object(N.jsx)(A.a,{src:"./807.gif"})})}),Object(N.jsx)("div",{className:"row justify-content-around",children:Object(N.jsxs)("div",{id:"secondary",className:"col",children:[Object(N.jsx)(A.a,{src:B}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("p",{children:"Document validation successful"})]})})]}),Object(N.jsx)("div",{id:"footer",className:"row",children:Object(N.jsx)("footer",{className:"bg-light text-center text-lg-start",children:Object(N.jsx)("div",{className:"text-center p-3",children:Object(N.jsx)("a",{className:"text-dark",href:"https://ethtoronto.ca",children:"ETHToronto Competition"})})})})]})})})})})},H=function(e){e&&e instanceof Function&&n.e(26).then(n.bind(null,740)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(D,{})})),H()}},[[421,1,2]]]);
//# sourceMappingURL=main.644c9ebe.chunk.js.map