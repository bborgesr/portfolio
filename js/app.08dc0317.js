(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"22c8":function(t,e,a){"use strict";a("4873")},"27ea":function(t,e,a){"use strict";a("4af4")},"3c49":function(t,e,a){"use strict";a("4c8d")},"3dd8":function(t,e,a){"use strict";a("42f4")},"42f4":function(t,e,a){},"452c":function(t,e,a){},4873:function(t,e,a){},"4af4":function(t,e,a){},"4c8d":function(t,e,a){},"54fd":function(t,e,a){"use strict";a("cc01")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar",{attrs:{scrolledDown:!t.scrolledDown}}),a("div",{staticClass:"splash"},[a("div",{staticClass:"gradient-overlay"}),a("Sketch")],1),a("MainView",{attrs:{scrolledDown:!t.scrolledDown}})],1)},n=[],r=(a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:{scrolled:!t.scrolledDown},attrs:{id:"header"}},[a("div",{staticClass:"mid"},[a("div",{staticClass:"logo-holder"},[a("button",{staticClass:"bar"},[a("fa",{attrs:{fas:"bars"}})],1),t._m(0)]),t._m(1)])])])}),o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[a("img",{staticClass:"logo",attrs:{src:"/portfolio/images/transparent-logo.png",alt:"Barbara"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"logo-mobile",attrs:{href:"#"}},[a("img",{staticClass:"logo",attrs:{src:"/portfolio/images/transparent-logo.png",alt:"Barbara"}})])}],c={props:{scrolledDown:Boolean}},l=c,d=(a("8de8"),a("2877")),u=Object(d["a"])(l,r,o,!1,null,"ef511afa",null),f=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-p5",{on:{sketch:t.sketch}})},h=[],p=a("b85c"),v=a("d4ec"),b=a("bee2"),g=(a("cb29"),a("4c53"),a("e25d")),w=a.n(g),_={components:{VueP5:w.a},methods:{sketch:function(t){var e=function(){function e(a,s,i){Object(v["a"])(this,e),this.pos=t.createVector(a,s),this.vel=t.constructor.Vector.random2D(),this.vel.mult(5),this.acc=t.createVector(0,0),this.mass=i,this.r=t.sqrt(2*this.mass)}return Object(b["a"])(e,[{key:"applyForce",value:function(e){var a=t.constructor.Vector.div(e,this.mass);this.acc.add(a)}},{key:"update",value:function(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc.set(0,0)}},{key:"show",value:function(){t.fill("#212225"),t.ellipse(this.pos.x,this.pos.y,2*this.r)}}]),e}(),a=function(){function e(a,s,i){Object(v["a"])(this,e),this.pos=t.createVector(a,s),this.mass=i,this.r=2*t.sqrt(this.mass)}return Object(b["a"])(e,[{key:"attract",value:function(e){var a=t.constructor.Vector.sub(this.pos,e.pos),s=t.constrain(a.magSq(),100,1e3),i=10,n=i*(this.mass*e.mass)/s;a.setMag(.01*n),e.applyForce(a)}},{key:"show",value:function(){t.noStroke(),t.fill("#2e2f31"),t.ellipse(this.pos.x,this.pos.y,2*this.r)}}]),e}(),s=[],i=[],n=document.body.clientWidth,r=window.innerHeight;t.setup=function(){t.createCanvas(n,r);for(var o=0;o<8;o++){var c=t.random(n),l=t.random(r),d=t.random(150,350);s.push(new e(c,l,d)),o<3&&i.push(new a(t.random(r),t.random(r),t.random(150,350)))}},t.draw=function(){t.background("#1d1e21");var e,a=Object(p["a"])(s);try{for(a.s();!(e=a.n()).done;){var n=e.value;n.update(),n.show();var r,o=Object(p["a"])(i);try{for(o.s();!(r=o.n()).done;){var c=r.value;c.attract(n)}}catch(f){o.e(f)}finally{o.f()}}}catch(f){a.e(f)}finally{a.f()}var l,d=Object(p["a"])(i);try{for(d.s();!(l=d.n()).done;){var u=l.value;u.show()}}catch(f){d.e(f)}finally{d.f()}},t.windowResized=function(){t.resizeCanvas(document.body.clientWidth,window.innerHeight)},t.mouseClicked=function(){s.push(new e(t.mouseX,t.mouseY,t.random(150,350))),s.length>13&&s.shift()},t.keyPressed=function(e){"a"===e.key&&i.push(new a(t.mouseX,t.mouseY,t.random(150,350)))}}}},y=_,C=Object(d["a"])(y,m,h,!1,null,"4d322a2c",null),x=C.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main-view",class:{hidden:t.scrolledDown}},[t._m(0),a("div",{staticClass:"main"},[a("section",{attrs:{id:"intro"}},[a("div",{staticClass:"txt"},[t._m(1),a("br"),a("a",{attrs:{href:"#about"}},[t._v("About me "),a("Fa",{attrs:{fa:"arrow-down"}})],1)])]),t._m(2),a("section",{attrs:{id:"experience"}},[a("br"),a("br"),a("br"),a("h2",[t._v("Experience")]),a("div",{staticClass:"cards"},[a("div",{staticClass:"card-col"},[a("Card",{attrs:{item:t.projects[0],txt:t.select}}),a("Card",{attrs:{item:t.projects[1],txt:t.select}})],1),a("div",{staticClass:"card-col"},[a("Card",{attrs:{item:t.projects[2],txt:t.select}}),a("Card",{attrs:{item:t.projects[3],txt:t.select}})],1)])]),a("section",{attrs:{id:"cv"}},[a("h2",[t._v("CV")]),a("div",{staticClass:"cv"},[a("h4",[t._v("Work experience")]),t._l(t.work,(function(e){return a("div",{key:e.ort,staticClass:"cont"},[a("span",[t._v(t._s(e.date))]),a("span",[t._v(t._s(e.extra))]),a("span",[t._v(t._s(e.title))]),a("span",[t._v(t._s(e.where))]),a("span",[t._v(t._s(e.txt))]),a("br")])}))],2),a("div",{staticClass:"education"},[a("h4",[t._v("Education")]),t._l(t.education,(function(e){return a("div",{key:e.titel,staticClass:"cont"},[a("span",[t._v(t._s(e.date))]),a("span",[t._v(t._s(e.extra))]),a("span",[t._v(t._s(e.title))]),a("span",[t._v(t._s(e.where))]),a("span",[t._v(t._s(e.txt))]),a("br")])}))],2),a("br"),a("a",{staticClass:"btn",attrs:{href:"/docs/CV_BBR.pdf",download:"",rel:"noopener noreferrer",target:"_blank"}},[a("Fa",{attrs:{fa:"file-pdf"}}),t._v(" PDF download")],1)]),a("section",{attrs:{id:"contact"}},[a("h2",[t._v("Contact")]),t._v(" barb.b.ribeiro@gmail.com "),a("br"),a("br"),t._v(" For job offers, I am only open to fully remote software development positions. Please include a salary range in your email or it may be ignored. "),a("br"),a("br"),a("a",{staticClass:"btn",attrs:{href:"mailto:barb.b.ribeiro@gmail.com"}},[a("Fa",{attrs:{fa:"envelope-o"}}),t._v(" Email me ")],1)])])]),a("PopOver",{attrs:{selected:t.selected,closeWindow:t.closePopOver}})],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sider sidebar"},[a("div",{staticClass:"holder"},[a("div",{staticClass:"xx"},[a("a",{staticClass:"title"},[t._v("Contents")]),a("a",{staticClass:"listitem",attrs:{href:"#intro"}},[t._v("Intro")]),a("a",{staticClass:"listitem",attrs:{href:"#about"}},[t._v("About me")]),a("a",{staticClass:"listitem",attrs:{href:"#experience"}},[t._v("Experience")]),a("a",{staticClass:"listitem",attrs:{href:"#cv"}},[t._v("CV")]),a("a",{staticClass:"listitem",attrs:{href:"#contact"}},[t._v("Contact")]),a("br"),a("div",{staticClass:"contact"},[a("a",{attrs:{href:"mailto:barb.b.ribeiro@gmail.com "}},[t._v(" barb.b.ribeiro@gmail.com ")]),a("a",{attrs:{href:"https://github.com/bborgesr/"}},[t._v("github.com/bborgesr")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("br"),t._v(" Hi, I'm Bárbara "),a("br"),t._v(" I'm a software developer, who is passionate about the power of data ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"about"}},[a("h2",[t._v("About me")]),a("span",[t._v(" I am a jack of all trades when it comes to software development. My academic path had an international bent, having completed the IB program at "),a("a",{attrs:{href:"https://uwcrcn.no/"}},[t._v("RCNUWC")]),t._v(" in Norway and my bachelor's at "),a("a",{attrs:{href:"https://www.macalester.edu/"}},[t._v(" Macalester College")]),t._v(" in the US. I graduated summa cum laude with a double major in Computer Science, and Applied Mathematics and Statistics, and a double minor in Physics and Sociology. ")]),a("br")])}],j=(a("7db0"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kinesis-container",{attrs:{duration:300}},[a("kinesis-element",{attrs:{strength:3,type:"depth_inv"}},[a("div",{staticClass:"card",on:{click:function(e){return t.txt(t.item.id)},mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[a("div",{staticClass:"overlay",style:{background:"linear-gradient(0deg, #1d1e21 9%, #212225e3 42%, rgba(34, 35, 38, 0) 156% ), url("+(t.hover?t.item.images[0].img:t.item.images[1].img)+") top center/cover"}}),a("div",{staticClass:"info"},[a("kinesis-element",{attrs:{strength:2,type:"depth_inv"}},[a("h3",[t._v(t._s(t.item.titel))])]),a("div",{staticClass:"tags"},t._l(t.item.tags,(function(e){return a("span",{key:e},[t._v(t._s(e))])})),0),a("div",{staticClass:"tags links"},[t.item.demo.length>1?a("a",{attrs:{href:t.item.demo}},[t._v("Demo")]):t._e(),a("a",{attrs:{href:t.item.source}},[t._v("Source")])])],1)])])],1)}),O=[],z=a("94b3"),E={components:{KinesisContainer:z["a"],KinesisElement:z["b"]},data:function(){return{hover:!1}},props:{item:Object,txt:Function}},P=E,D=(a("e6c6"),Object(d["a"])(P,j,O,!1,null,"3b1370eb",null)),M=D.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.fa?a("i",{class:"fa fa-"+t.fa,attrs:{"aria-hidden":"true"}}):t.fas?a("i",{class:"fas fa-"+t.fas,attrs:{"aria-hidden":"true"}}):t.far?a("i",{class:"far fa-"+t.far,attrs:{"aria-hidden":"true"}}):a("i",{class:"fab fa-"+t.fab,attrs:{"aria-hidden":"true"}})},A=[],B={props:{fa:String,fas:String,far:String,fab:String},mounted:function(){}},F=B,W=(a("27ea"),Object(d["a"])(F,V,A,!1,null,"14178c9e",null)),$=W.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.selected?a("div",{staticClass:"popover"},[a("div",{staticClass:"content"},[a("button",{staticClass:"close",on:{click:t.closeWindow}},[a("Fa",{attrs:{fa:"close"}})],1),a("VueAgile",{staticClass:"imgs",attrs:{navButtons:!1,centerMode:!0,slidesToShow:1,infinite:!1}},t._l(t.selected.images,(function(t){return a("img",{key:t.img,staticClass:"slide",attrs:{src:t.img,alt:""}})})),0),a("div",{staticClass:"info"},[a("h3",[t._v(t._s(t.selected.titel))]),a("div",{staticClass:"tags"},t._l(t.selected.tags,(function(e){return a("span",{key:e},[t._v(t._s(e))])})),0),a("div",{staticClass:"tags links"},[t.selected.demo.length>1?a("a",{attrs:{href:t.selected.demo}},[t._v("Demo")]):t._e(),a("a",{attrs:{href:t.selected.source}},[t._v("Source")])]),a("div",{staticClass:"description"})])],1),a("div",{staticClass:"background",on:{click:t.closeWindow}})]):t._e()},I=[],T=a("f7ab"),q={components:{Fa:$,VueAgile:T["a"]},props:{selected:Object,closeWindow:Function}},L=q,R=(a("3c49"),Object(d["a"])(L,N,I,!1,null,"44f27821",null)),J=R.exports,H={components:{Card:M,Fa:$,PopOver:J},data:function(){return{work:[{date:"2020 – today",extra:"",title:"Fullstack Developer",where:"LTPlabs, Remote",txt:"Maintenance of various applications for different clients, custom-made to their needs and with embedded analytics to empower decision-making"},{date:"2018 - 2019",extra:"",title:"Frontend Developer",where:"Blip, Porto",txt:"Maintenance of the www.paddypower.com betting website, including bug fixing and feature implementation, such as a Multivariate Testing campaign to test different UIs and a Bet Tracker project, to provide users with one place where all bets, open and settled, are displayed"},{date:"2016 - 2018",extra:"",title:"Software Developer",where:"RStudio, Remote",txt:"Part of the Shiny development team (https://shiny.rstudio.com/). We were responsible for maintaining several R packages: shiny, shinydashboard, flexdashboard and many others that would pop up along the way."}],education:[{date:"2011 – 2015",extra:"",title:"Bachelor's with a double major in Computer Science, and Applied Mathematics and Statistics ",where:"Macalester College, MN, USA",txt:"Summa Cum Laude graduation"},{date:"2009 – 2011",extra:"",title:"International Baccalaureate",where:"RCNUWC, Norway",txt:""}],projects:[{id:0,images:[{img:"/images/demo-nuance-small.gif"},{img:"/images/01.png"}],titel:"Social Networking Plattform",tags:["VueJS","NodeJS","mongoDB"],demo:"",source:"https://github.com/w-smesnoj/BehanceApp"},{id:1,images:[{img:"/images/demo-diprella-cropped.gif"},{img:"/images/03.png"}],titel:"Semantic Form Application",tags:["VueJS","NodeJS","mongoDB"],demo:"https://diprella-login.herokuapp.com/",source:"https://github.com/w-smesnoj/diprella-login"},{id:2,images:[{img:"/images/demo-parallax.gif"},{img:"/images/02.png"}],titel:"CMS Frontend Webstore",tags:["VueJS","Contentful"],demo:"https://fierce-island-96798.herokuapp.com/",source:"https://github.com/w-smesnoj/parallax-swipe"},{id:3,images:[{img:"/images/04.png"},{img:"/images/04.png"}],titel:"Whiteboard Collaboration App",tags:["React","NodeJS","PostgreSQL","WebSockets"],demo:"",source:"https://github.com/w-smesnoj/visual-collaboration-platform"}],selected:null}},mounted:function(){window.onscroll=this.lodash.debounce(this.scrollcalc,5),this.scrollcalc();var t,e=document.querySelectorAll('a[href^="#"]'),a=Object(p["a"])(e);try{var s=function(){var e=t.value;e.addEventListener("click",(function(t){var a=e.getAttribute("href"),s=document.querySelector(a);s.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,null,a),t.preventDefault()}))};for(a.s();!(t=a.n()).done;)s()}catch(i){a.e(i)}finally{a.f()}},methods:{select:function(t){this.selected=this.projects.find((function(e){return e.id===t}))},closePopOver:function(){this.selected=null},scrollcalc:function(){var t=document.querySelectorAll(".xx a"),e=document.documentElement.scrollTop,a=200;t.forEach((function(t){if(""!=t.hash){var s=document.querySelector(t.hash);if(null!=s)if(s.offsetTop<=e+window.innerHeight&&s.offsetTop+s.offsetHeight>e+a){t.classList.add("current");var i=document.querySelectorAll(".current"),n=document.querySelector(".first");null!=n&&n.classList.remove("first"),i[0].classList.add("first")}else t.classList.remove("current")}}))}},props:{scrolledDown:Boolean}},U=H,Y=(a("a20a"),a("22c8"),a("54fd"),a("3dd8"),Object(d["a"])(U,k,S,!1,null,"c1c19fc0",null)),K=Y.exports,X={name:"App",components:{Navbar:f,MainView:K,Sketch:x},data:function(){return{size:"xl",scrolledDown:!1}},mounted:function(){window.onresize=this.lodash.debounce(this.detectSize,50),window.addEventListener("scroll",this.lodash.debounce(this.detectScroll,5)),this.detectSize()},methods:{detectSize:function(){var t=window.innerWidth,e={};switch(!0){case t<425:e={size:"mobile",sizeint:425,range:[0,425],includes:["mobile"]};break;case t<680:e={size:"s",sizeint:680,range:[426,680],includes:["mobile","s"]};break;case t<1024:e={size:"m",sizeint:1024,range:[680,1024],includes:["mobile","s","m"]};break;case t<1300:e={size:"l",sizeint:1300,range:[1025,1300],includes:["mobile","s","m","l"]};break;case t<1600:e={size:"xl",sizeint:1600,range:[1301,1600],includes:["mobile","s","m","l","xl"]};break;default:e={size:"xl",sizeint:1600,range:[1301,1600],includes:["mobile","s","m","l","xl"]}}this.size={width:t,size:e.size,sizeint:e.sizeint,range:e.range,includes:e.includes}},detectScroll:function(){this.scrolledDown=window.scrollY>0}}},Q=X,G=(a("e5ba"),a("b0a0"),Object(d["a"])(Q,i,n,!1,null,"f9c7dd62",null)),Z=G.exports,tt=a("8c4f");s["a"].use(tt["a"]);var et=[{path:"/"}],at=new tt["a"]({routes:et}),st=at,it=a("2f62");s["a"].use(it["a"]);var nt=new it["a"].Store({state:{},mutations:{},actions:{},modules:{}}),rt=a("9955"),ot=a.n(rt),ct=a("2ef0"),lt=a.n(ct);s["a"].use(ot.a,{name:"custom",lodash:lt.a}),s["a"].config.productionTip=!1,s["a"].component("fa",$),new s["a"]({router:st,store:nt,render:function(t){return t(Z)}}).$mount("#app")},6415:function(t,e,a){},"8de8":function(t,e,a){"use strict";a("6415")},a20a:function(t,e,a){"use strict";a("dbaa")},b0a0:function(t,e,a){"use strict";a("452c")},cc01:function(t,e,a){},d0c0:function(t,e,a){},dbaa:function(t,e,a){},e5ba:function(t,e,a){"use strict";a("d0c0")},e6c6:function(t,e,a){"use strict";a("f645")},f645:function(t,e,a){}});
//# sourceMappingURL=app.08dc0317.js.map