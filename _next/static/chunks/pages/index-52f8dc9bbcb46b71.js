(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3743)}])},8969:function(a,b,c){"use strict";var d=c(5893),e=c(9008),f=c.n(e);c(7294);var g=function(a){var b=a.title,c=a.description;return(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:b||"Baesta Map"}),(0,d.jsx)("meta",{name:"description",content:c||"後で書くよー"}),(0,d.jsx)("link",{rel:"icon",href:"/BaestaMap/favicon.ico"})]})};b.Z=g},3743:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return Y}});var d=c(603),e=c(5893),f=c(7294),g=c(8969),h=c(1799),i=c(9534),j=c(1664),k=c.n(j),l=c(2293),m=c(5333),n=c(155),o=c(3946),p=c(326),q=c(878),r=c(8462),s=c(891),t=f.forwardRef(function(a,b){var c=a.href,d=(0,i.Z)(a,["href"]);return c.startsWith("http")?(0,e.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#212121"},children:(0,e.jsx)(s.ZP,(0,h.Z)({component:"a",button:!0,ref:b},d))}):(0,e.jsx)(k(),{href:c,passHref:!0,children:(0,e.jsx)(s.ZP,(0,h.Z)({component:"a",button:!0,ref:b},d))})});function u(){var a=(0,d.Z)(f.useState(!1),2),b=a[0],c=a[1],g=function(){c(!b)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(m.Z,{sx:{flexGrow:1,width:"100%",height:"2em",margin:"0"},children:(0,e.jsx)(l.Z,{position:"static",children:(0,e.jsxs)(n.Z,{sx:{width:"100%",backgroundColor:"#2C2C2C"},children:[(0,e.jsx)(k(),{href:"/",passHref:!0,style:{margin:"auto auto auto 0"},children:(0,e.jsx)("a",{children:(0,e.jsx)("img",{alt:"logo",src:"/BaestaMap/imgs/logo.png",style:{height:"50px"}})})}),(0,e.jsx)(o.Z,{size:"large",edge:"start","aria-label":"menu",sx:{m:"auto 0 auto auto",color:"#EC9CFC"},onClick:g,children:(0,e.jsx)(p.Z,{})})]})})}),(0,e.jsx)(q.ZP,{anchor:"top",variant:"temporary",open:b,onClose:g,style:{transform:"translateY(56px)"},children:(0,e.jsxs)(r.Z,{sx:{backgroundColor:"#6B6B6B",color:"#FFFFFF"},children:[(0,e.jsx)(t,{sx:{color:"#FFFFFF"},href:"https://baestamap.notion.site/BaestaMap-45431cdb1eec46a0837b07437d985b64",children:"About BaestaMap"}),(0,e.jsx)(t,{sx:{color:"#FFFFFF"},href:"https://forms.gle/dAY5eGH4ZWyXhNJz8",children:"Contact"}),(0,e.jsx)(t,{sx:{color:"#FFFFFF"},href:"https://github.com/wanwan0622/BaestaMap",children:"GitHub"})]})})]})}var v=c(7568),w=c(9396),x=c(4051),y=c.n(x);function z(){return A.apply(this,arguments)}function A(){return(A=(0,v.Z)(y().mark(function a(){var b,c,d;return y().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=function(){return new Promise(function(a,b){navigator.geolocation.getCurrentPosition(a,function(){b(),alert("現在地が取得できませんでした")})})},a.next=3,b();case 3:return d={lat:(c=a.sent).coords.latitude,lng:c.coords.longitude},a.abrupt("return",d);case 6:case"end":return a.stop()}},a)}))).apply(this,arguments)}function B(a){return C.apply(this,arguments)}function C(){return(C=(0,v.Z)(y().mark(function a(b){var c,d,e;return y().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=[],console.log("inputPlace",b),"現在地"!==b){a.next=14;break}return a.next=5,z();case 5:if(d=a.sent,console.log("現在"),console.log(d),!(void 0===d.lat&& void 0===d.lng)){a.next=10;break}return a.abrupt("return",[]);case 10:return a.next=12,fetch("https://baestamap-qpz6p6e7bq-uc.a.run.app",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then(function(a){return a.json()}).then(function(a){a.success?c=a.posts:console.error("APIの取得に失敗しました")}).catch(function(a){console.error(a)});case 12:a.next=17;break;case 14:return e={query:b},a.next=17,fetch("https://baestamap-query-qpz6p6e7bq-uc.a.run.app",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(a){return a.json()}).then(function(a){a.success?c=a.posts:console.error("APIの取得に失敗しました")}).catch(function(a){console.error(a)});case 17:return console.log(c),a.abrupt("return",c);case 19:case"end":return a.stop()}},a)}))).apply(this,arguments)}var D=c(46),E=c(5545),F=c(4137),G=c(2761);function H(a){var b=(0,d.Z)(f.useState("現在地"),2),c=b[0],g=b[1];return(0,e.jsx)(E.Z,{disablePortal:!0,id:"combo-box-demo",options:[{label:"現在地"},{label:"サポーターズ本社"}],sx:{width:"80%",height:"20px",m:"auto auto 40px auto"},freeSolo:!0,disableClearable:!0,onInputChange:function(a,b){return g(b)},renderInput:function(b){return(0,e.jsx)(D.Z,(0,w.Z)((0,h.Z)({},b),{label:"どこでデートする？",placeholder:"東京駅",onChange:function(a){return g(a.target.value)},InputProps:(0,w.Z)((0,h.Z)({},b.InputProps),{endAdornment:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(F.Z,{position:"end",children:(0,e.jsx)(o.Z,{onClick:(0,v.Z)(y().mark(function b(){var d;return y().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,B(c);case 2:d=b.sent,a.setPlaces(d);case 4:case"end":return b.stop()}},b)})),children:(0,e.jsx)(G.Z,{sx:{color:"#FA45FA",fontSize:"large"}})})})})})}))}})}var I=c(6066),J=c(2019),K=c(4386),L=c(6616);function M(a){var b=a.place.permalink,c="https://www.instagram.com/p/".concat(b,"/");return(0,e.jsx)(L.IGEmbed,{url:c})}var N={width:"350px",height:"200px",border:"3px solid #FC9CFC",padding:"12px",margin:"12px auto 4px auto",fontSize:"12px",overflowY:"scroll"};function O(a){var b=(0,f.useState)(0),c=b[0],d=b[1],g=(0,f.useState)(void 0),i=g[0],j=g[1],k=(0,f.useState)(void 0),l=k[0],m=k[1];return(0,e.jsx)("div",{style:{width:"100%"},children:(0,e.jsxs)(I.Z,(0,w.Z)((0,h.Z)({},{dots:!0,arrows:!1,centerMode:!0,centerPadding:"10px",infinite:!1,draggable:!0,speed:500,customPaging:function(a){if(0===a){var b=0===c?"disabled":"action";return(0,e.jsx)(K.Z,{arrow:!0,title:"ページ1",children:(0,e.jsx)(J.Z,{color:b,sx:{fontSize:"80%"}})})}if(1===a){var d=1===c?"disabled":"action";return(0,e.jsx)(K.Z,{arrow:!0,title:"ページ2",children:(0,e.jsx)(J.Z,{color:d,sx:{fontSize:"80%"}})})}return(0,e.jsx)(K.Z,{arrow:!0,title:"ページ3",children:(0,e.jsx)(J.Z,{color:2===c?"disabled":"action",sx:{fontSize:"80%"}})})},beforeChange:function(a,b){return d(b)}}),{ref:function(a){a&&m(a)},children:[(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:N,children:0!==a.places.length?a.places.map(function(a,b){return(0,e.jsxs)("div",{style:{backgroundColor:"#FFCCFF",padding:"4px",margin:"4px",borderRadius:"4px"},onClick:function(){j(a),l&&l.slickGoTo(1)},children:[b+1," ",a.location.name]},b)}):(0,e.jsx)(e.Fragment,{children:"Now Loading..."})})}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:N,children:(0,e.jsx)("div",{style:{width:"80%"},children:0!==a.places.length?a.places.map(function(a,b){return(0,e.jsx)(M,{place:a},b)}):(0,e.jsx)(e.Fragment,{children:"Now Loading..."})})})}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:N,children:void 0!==i?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{style:{color:"#FA45FA",fontSize:"16px"},children:i.location.name}),(0,e.jsxs)("p",{children:["緯度: ",i.location.lat]}),(0,e.jsxs)("p",{children:["経度: ",i.location.lng]}),(0,e.jsxs)("p",{children:["最終更新日: ",i.timestamp]})]}):(0,e.jsx)(e.Fragment,{children:"Now Loading..."})})})]}))})}var P=c(7054),Q={width:"300px",height:"300px"},R={disableDefaultUI:!0,zoomControl:!0},S={lat:36,lng:136},T={lat:36,lng:136};function U(){var a=(0,f.useState)(void 0),b=a[0];return a[1],(0,e.jsx)(P.KJ,{googleMapsApiKey:"AIzaSyD0YxWS2l_jq0TWTNYAaNv-e7IZ1ILLAVQ",children:(0,e.jsxs)(P.b6,{mapContainerStyle:Q,center:S,zoom:10,options:R,children:[(0,e.jsx)(P.Jx,{position:T}),(0,e.jsx)(P.nx,{position:T,options:{pixelOffset:b},children:(0,e.jsx)("div",{style:{},children:(0,e.jsx)("h1",{children:"秋葉原オフィス"})})})]})})}var V=c(214),W=c.n(V);c(8322),c(2739);var X=function(){var a=(0,d.Z)(f.useState([]),2),b=a[0],c=a[1];return(0,e.jsxs)("div",{style:{padding:"0 0 0 0"},children:[(0,e.jsx)(u,{}),(0,e.jsx)(g.Z,{title:"Baesta Map",description:"簡単に近くの映えるデートスポットが探せる"}),(0,e.jsxs)("main",{style:{margin:"50px 0 0 0"},className:W().main,children:[(0,e.jsx)(H,{setPlaces:c}),(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,e.jsx)(U,{})}),(0,e.jsx)(O,{places:b})]})]})},Y=X},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(a){a.O(0,[255,191,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])