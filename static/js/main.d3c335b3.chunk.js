(this.webpackJsonpcodexpodcast=this.webpackJsonpcodexpodcast||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(19),r=c.n(n),i=(c(54),c(21)),o=c(5),l=(c(55),c(56),c(80)),j=c(73),d=c(78),b=(c(57),c.p+"static/media/huglifeLogoSM.f106df2d.jpeg"),h=c(1);var u=function(){return Object(h.jsx)(l.a,{variant:"dark",className:"customNavbar",children:Object(h.jsxs)(j.a,{children:[Object(h.jsxs)(i.b,{to:"/",children:[Object(h.jsx)("img",{alt:"Codex Logo",src:b,width:"30",height:"30",className:"d-inline-block align-top navbarLogo"})," "]}),Object(h.jsx)(i.b,{to:"/",className:"huglifeBrand",children:"HugLife Podcast"}),Object(h.jsxs)(d.a,{align:"end",children:[Object(h.jsx)(i.b,{to:"/About",className:"navbarItem",children:"About"}),Object(h.jsx)("br",{}),Object(h.jsx)(i.b,{to:"/Contact",className:"navbarItem",children:"Contact"}),"."]})]})})},m=c(18),O=c(24),x=c(26),p=c(25),f=c(41),g=c.n(f),v=c(48),N=c(7),y=(c(63),c(74)),w=(c(64),function(e){var t=e.currentEpisodes;if(e.loading)return Object(h.jsx)("h1",{children:"Loading..."});function c(e){var t=e.replace(/-/g,"/");return new Date(t).toDateString()}return Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(h.jsx)(y.a,{children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("h5",{className:"card-title",children:e.title})}),Object(h.jsx)(y.a,{children:Object(h.jsx)("p",{children:c(e.pubDate)})}),Object(h.jsx)("div",{children:Object(h.jsx)("audio",{className:"customPlayer",controls:"controls",children:Object(h.jsx)("source",{src:e.enclosure.link})})})]})})},t)}))})}),C=c(42),k=(c(65),function(e){for(var t=e.episodesPerPage,c=e.totalEpisodes,a=e.paginate,s=[],n=1;n<=Math.ceil(c/t);n++)s.push(n);return Object(h.jsx)(C.a,{className:"paginationStyle",children:s.map((function(e){return Object(h.jsx)(C.a.Item,{onClick:function(){return a(e)},children:e},e)}))})}),E=c(81);var P=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(N.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(1),d=Object(N.a)(l,2),b=d[0],u=d[1],m=Object(a.useState)(5),O=Object(N.a)(m,1)[0],x="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.libsyn.com%2F100667%2Frss&api_key=".concat("wgzjjrugyghfteulyy4ocn2fhuecoznevqm4twws");function p(){return(p=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(x).then((function(e){return e.json()})).then((function(e){s(e.items)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=b*O,y=f-O,C=c.slice(y,f);return Object(a.useEffect)((function(){var e=!0;(function(){return p.apply(this,arguments)})().then((function(){return e&&o(!1),function(){e=!1}}))}),[]),Object(h.jsxs)(j.a,{className:"episodeContainer",children:[Object(h.jsx)("h3",{className:"recentHeading mt-1",children:"Recent Episodes"}),Object(h.jsxs)(E.a,{className:"episodeCard",children:[Object(h.jsx)(w,{loading:i,currentEpisodes:C}),Object(h.jsx)(k,{className:"paginationStyle",episodesPerPage:O,totalEpisodes:c.length,paginate:function(e){return u(e)}})]})]})};var S=function(){return Object(h.jsxs)(j.a,{className:"episodeContainer",children:[Object(h.jsx)("h3",{className:"recentHeading mt-1",children:"Support the Podcast"}),Object(h.jsx)(E.a,{className:"episodeCard",children:Object(h.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("div",{className:"card-body sourceCard",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("a",{className:"sourceAnchor",href:"https://amzn.to/3xlxYp8",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("h5",{className:"card-title",children:"Amazon"})})})})})})}),Object(h.jsx)(E.a,{className:"mt-3 episodeCard",children:Object(h.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("div",{className:"card-body sourceCard",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("a",{className:"sourceAnchor",href:"https://www.patreon.com/HugLifePodcast",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("h5",{className:"card-title",children:"Patreon"})})})})})})}),Object(h.jsx)(E.a,{className:"mt-3 episodeCard",children:Object(h.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("div",{className:"card-body sourceCard",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("a",{className:"sourceAnchor",href:"https://www.instagram.com/huglifepodcast/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("h5",{className:"card-title",children:"Instagram"})})})})})})}),Object(h.jsx)(E.a,{className:"mt-3 episodeCard",children:Object(h.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("div",{className:"card-body sourceCard",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("a",{className:"sourceAnchor",href:"https://www.monicanevi.com",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("h5",{className:"card-title",children:"Monica Nevi"})})})})})})}),Object(h.jsx)(E.a,{className:"mt-3 episodeCard",children:Object(h.jsx)("div",{className:"card mt-2 mb-2 singleEpisode",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("div",{className:"card-body sourceCard",children:Object(h.jsx)(y.a,{children:Object(h.jsx)("a",{className:"sourceAnchor",href:"https://www.colettacomedy.com",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("h5",{className:"card-title",children:"Mike Coletta"})})})})})})})]})},A=(c(66),c(75)),F=c(76),M=function(e){Object(x.a)(c,e);var t=Object(p.a)(c);function c(){return Object(m.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(j.a,{className:"bannerContainer",children:Object(h.jsx)(A.a,{className:"bannerImage",fluid:"true",rounded:"true",src:"https://ik.imagekit.io/4lalrpwz0sy/huglifeBanner_WhbnHwmOk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662427114907",alt:"Codex Podcast Banner"})}),Object(h.jsx)(j.a,{children:Object(h.jsxs)(y.a,{className:"mt-3",children:[Object(h.jsx)(F.a,{md:8,children:Object(h.jsx)(P,{})}),Object(h.jsx)(F.a,{md:4,children:Object(h.jsx)(S,{})})]})})]})}}]),c}(s.a.Component),_=M,H=function(e){Object(x.a)(c,e);var t=Object(p.a)(c);function c(){return Object(m.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("h3",{className:"recentHeading mt-1",children:"About the HugLife Podcast"})}),Object(h.jsx)(y.a,{className:"p-3",style:{color:"#FAF3DD"},children:Object(h.jsx)("h5",{children:"Monica Nevi and Mike Coletta are comedians originally from Seattle that want you to be positive. Each episode Monica, Mike, and sometimes a special guest positive spin something most people find daunting. Whether it's traffic, air travel, or being forced into an awkward social situation, Monica and Mike will tell you why it's great to be there! Each episode also features lexical embraces (shout outs), good news stories, and a charity we high light at the end of the episode. You're great!"})}),Object(h.jsx)(A.a,{className:"aboutImage",fluid:"true",rounded:"true",src:"https://ik.imagekit.io/4lalrpwz0sy/BadGirls_wcb_KxUKO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662427791179",alt:"Codex Podcast Banner"})]})})}}]),c}(s.a.Component),B=H,D=c(49),L=c(77),I=c(79);c(69);var q=function(){var e=Object(a.useState)(!1),t=Object(N.a)(e,2),c=t[0],s=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),D.a.sendForm("service_ilnu6lm","huglife_template",e.target,"MJP4N_QRxPEQTguRj").then((function(e){console.log(e.text),s(!0)}),(function(e){console.log(e.text)})),e.target.reset()},children:Object(h.jsxs)("div",{className:"row pt-5 mx-auto",children:[Object(h.jsx)("div",{className:"col-8 form-group mx-auto",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",required:!0})}),Object(h.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email",required:!0})}),Object(h.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Subject",name:"subject",required:!0})}),Object(h.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(h.jsx)("textarea",{className:"form-control",cols:"30",rows:"8",placeholder:"Your message",name:"message",required:!0})}),Object(h.jsx)("div",{className:"col-8 pt-2 mx-auto",children:Object(h.jsx)("input",{type:"submit",className:"btn sendButton",value:"Send"})})]})})}),c&&Object(h.jsx)(L.a,{position:"top-center",children:Object(h.jsxs)(I.a,{show:c,onClose:function(){return s(!c)},children:[Object(h.jsx)(I.a.Header,{children:Object(h.jsx)("strong",{className:"me-auto",children:"Huglife Podcast"})}),Object(h.jsx)(I.a.Body,{children:"Your message was sent. You're great!"})]})})]})},z=function(e){Object(x.a)(c,e);var t=Object(p.a)(c);function c(){return Object(m.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("h3",{className:"recentHeading mt-1",children:"Contact Us!"})}),Object(h.jsx)(y.a,{style:{color:"#FAF3DD",justifyContent:"center"},children:"Have a question for the show? Send us an email below or at codexhistorypodcast@gmail.com!"})]}),Object(h.jsx)(q,{})]})}}]),c}(s.a.Component),Y=z;c(70);var J=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{className:"customFooter",children:"\xa9 Copyright 2022 - Mike Coletta and Monica Nevi"})})};var R=function(){return Object(h.jsxs)(i.a,{basename:"/huglifepodcast",children:[Object(h.jsx)(u,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(_,{})}),Object(h.jsx)(o.a,{path:"/about",element:Object(h.jsx)(B,{})}),Object(h.jsx)(o.a,{path:"/contact",element:Object(h.jsx)(Y,{})})]}),Object(h.jsx)(J,{})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),T()}},[[71,1,2]]]);
//# sourceMappingURL=main.d3c335b3.chunk.js.map