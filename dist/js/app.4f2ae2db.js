(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],h=0,d=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/news-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"04c6":function(t,e,s){},"0698":function(t,e,s){"use strict";var a=s("53d4"),n=s.n(a);n.a},"08c1":function(t,e,s){"use strict";var a=s("9844"),n=s.n(a);n.a},"09eb":function(t,e,s){"use strict";var a=s("3176"),n=s.n(a);n.a},"0a1e":function(t,e,s){},"1c4e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAAmJLR0QA/4ePzL8AAADESURBVDjL3dI7bsJAGEXhr8dJZ9aD2YLJWqKARBBOwXZ4bCOBrdim9p8mRSw/AoqUIne6o3ukO6PhLzP15uLq6qww/an+pBLfTmUxVl9ohL3MxMTMQWjkw2Mq4aXFlkIp7RcKYd+hR2HbL1yEWYdmwrlfqIWkQx+E+h7hUSiHJ2UdOh+eVAiHDj0NXzpVCssWW409K7lGOJpLJOZOQlgbSa5sfY3SSgi7YSVV+FCrvdtK+VJ3bs7zv1NebxfY2NxT/00+AbKrZPoRxN+IAAAAAElFTkSuQmCC"},"2a66":function(t,e,s){"use strict";var a=s("0a1e"),n=s.n(a);n.a},"2ca9":function(t,e,s){"use strict";var a=s("71d0"),n=s.n(a);n.a},3176:function(t,e,s){},"53d4":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a,n,r,i,o,c,l=s("2b0e"),u=s("8c4f"),h=s("ebfd"),d=s.n(h),f=s("2ead"),m=s.n(f),p=s("fb19"),g=s.n(p),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("CanvasBg"),t.isShowHeaderAndFooter?s("Header"):t._e(),s("router-view",{on:{toggleHeadAndFoot:t.toggleHeadAndFoot}}),t.isShowHeaderAndFooter?s("Footer",{staticClass:"footer"}):t._e()],1)},v=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[s("h1",[s("router-link",{staticClass:"link",attrs:{to:{name:"Home"}}},[t._v("Global News")])],1),s("myWeather",{attrs:{isShowWeather:t.isShowWeather}})],1),s("div",{staticClass:"header-content"},[s("div",{staticClass:"choose-category"},[s("ul",{staticClass:"categories"},[s("li",{staticClass:"category",class:{activeCategory:"Home"===t.currentUrl}},[s("router-link",{staticClass:"link",attrs:{to:{name:"Home"}}},[t._v("Home Page")])],1),t._l(this.categories,(function(e){return s("li",{staticClass:"category",class:{activeCategory:t.currentUrl===e}},[s("router-link",{staticClass:"link",attrs:{to:{name:"newsCategory",params:{category:e}}}},[t._v(t._s(e))])],1)})),s("li",{staticClass:"category",class:{activeCategory:"ExchangeRates"===t.currentUrl}},[s("router-link",{staticClass:"link",attrs:{to:{name:"ExchangeRates"}}},[t._v("Exchange Rates")])],1),s("li",{staticClass:"category",class:{activeCategory:"Weather"===t.currentUrl}},[s("router-link",{staticClass:"link",attrs:{to:{name:"Weather"}}},[t._v("Weather")])],1)],2)]),s("input",{ref:"mobileMenu",staticStyle:{visibility:"hidden"},attrs:{id:"burger",type:"checkbox"}}),s("label",{staticClass:"mobileMenu",attrs:{for:"burger"},on:{click:function(e){return t.toggleWeather()}}},[s("span"),s("span"),s("span")]),s("nav",[s("ul",{staticClass:"categories mobile-categories"},[s("li",{staticClass:"category",class:{activeCategory:"Home"===t.currentUrl},on:{click:function(e){return t.closeMenu()}}},[s("router-link",{staticClass:"link",attrs:{to:{name:"Home"}}},[t._v("Home Page")])],1),t._l(this.categories,(function(e){return s("li",{staticClass:"category",class:{activeCategory:t.currentUrl===e},on:{click:function(e){return t.closeMenu()}}},[s("router-link",{staticClass:"link",attrs:{to:{name:"newsCategory",params:{category:e}}}},[t._v(t._s(e))])],1)})),s("li",{staticClass:"category",class:{activeCategory:"ExchangeRates"===t.currentUrl},on:{click:function(e){return t.closeMenu()}}},[s("router-link",{staticClass:"link",attrs:{to:{name:"ExchangeRates"}}},[t._v("Exchange Rates")])],1),s("li",{staticClass:"category",class:{activeCategory:"Weather"===t.currentUrl},on:{click:function(e){return t.closeMenu()}}},[s("router-link",{staticClass:"link",attrs:{to:{name:"Weather"}}},[t._v("Weather")])],1)],2)])])])},A=[],b=(s("7f7f"),s("bc3a")),y=s.n(b),x={newsApiUrl:"https://newsapi.org/v2/",newsApiKey:"8a4d40be944c4dbeb2d365c05cfe3eab",ratesApiUrl:"https://api.exchangeratesapi.io/latest?base=",weatherApiKey:"&appid=e94f4dabf46ec78b61c0d640a63e3b06",weatherApiUrl:"http://api.openweathermap.org/data/2.5/weather?"},R={name:"newsService",getData:function(t,e,s){return y.a.get("".concat(x.newsApiUrl,"top-headlines?category=").concat(t,"&pageSize=10&page=").concat(e,"&country=us&").concat(s,"&apiKey=").concat(x.newsApiKey))},getTopNews:function(t){return y.a.get("".concat(x.newsApiUrl,"top-headlines?sources=bbc-news&").concat(t,"apiKey=").concat(x.newsApiKey))},searchByTitle:function(t){return y.a.get("".concat(x.newsApiUrl,"everything?qInTitle=").concat(t,"&apiKey=").concat(x.newsApiKey))}},M=R,S=s("2877"),_=Object(S["a"])(M,a,n,!1,null,null,null),N=_.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"weather",staticClass:"weather"},[s("div",{staticClass:"left-panel panel"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("moment")(t.date,"dddd")))]),s("br"),s("span",{staticClass:"date"},[t._v("\n            "+t._s(t._f("moment")(t.date,"MMMM DD, YYYY"))+"\n        ")]),s("span",{staticClass:"city"},[t._v("\n            "+t._s(t.location)+"\n        ")]),s("span",{staticClass:"temp"},[t._v("\n        "+t._s(t.temp)+"°\n        ")]),s("span",{staticClass:"temp-symbol",on:{click:function(e){return t.changeTemp("fahrenheit")}}},[t._v("℉")]),s("span",[t._v(" | ")]),s("span",{staticClass:"temp-symbol",on:{click:function(e){return t.changeTemp("celsius")}}},[t._v("℃")])])])},T=[],O=(s("a481"),{name:"weatherService",getWeather:function(t,e,s){return y.a.get("".concat(x.weatherApiUrl,"lat=").concat(t,"&lon=").concat(e).concat(x.weatherApiKey,"&units=metric"))},getWeatherByCountry:function(t){return y.a.get("".concat(x.weatherApiUrl,"q=").concat(t,"&").concat(x.weatherApiKey,"&units=metric"))}}),k=O,U=Object(S["a"])(k,r,i,!1,null,null,null),H=U.exports,L={name:"myWeather",props:["isShowWeather"],data:function(){return{temp:"",location:"",date:""}},created:function(){var t=this;this.$getLocation().then((function(e){H.getWeather(e.lat,e.lng).then((function(e){t.temp=e.data.main.temp,t.location=e.data.name,t.date=(new Date).toJSON().slice(0,10).replace(/-/g,"/")}))}))},watch:{isShowWeather:function(){this.isShowWeather?this.$refs.weather.style.visibility="visible":this.$refs.weather.style.visibility="hidden"}},methods:{changeTemp:function(t){var e=this;"fahrenheit"===t?H.getWeather(coordinates.lat,coordinates.lng).then((function(t){e.temp=1.8*t.data.main.temp+32})):H.getWeather(coordinates.lat,coordinates.lng).then((function(t){e.temp=1.8*t.data.main.temp-32}))}}},W=L,D=(s("09eb"),Object(S["a"])(W,E,T,!1,null,"078e0174",null)),V=D.exports,I={name:"Header",components:{myWeather:V},data:function(){return{currentUrl:null,categories:["Business","Entertainment","General","Health","Science","Sports","Technology"],countries:[{name:"United Arab Emirates",code:"AE"},{name:"Argentina",code:"AR"},{name:"Austria",code:"AT"},{name:"Australia",code:"AU"}],currentCountry:"",isShowMobileMenu:!1,mobileMenu:[],lat:null,lon:null,temp:"",location:"",date:"",isShowWeather:!0}},created:function(){this.currentUrl||(this.$route.params.category?this.currentUrl=this.$route.params.category:this.currentUrl=this.$route.name)},watch:{$route:function(t,e){t.params.category?t.params.category?this.currentUrl=t.params.category:t.params.country&&(this.currentUrl=t.params.country):this.currentUrl=t.name}},methods:{showMobileMenu:function(){this.isShowMobileMenu=!this.isShowMobileMenu},closeMenu:function(){this.$refs.mobileMenu.checked=!1,!1===this.isShowWeather&&(this.isShowWeather=!0)},toggleWeather:function(){var t=window.matchMedia("(max-width: 650px)");t.matches&&(this.isShowWeather=!this.isShowWeather)}}},B=I,F=(s("add9"),Object(S["a"])(B,C,A,!1,null,"efa1e6b8",null)),P=F.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("h2",[t._v("Vue Hot News")]),s("p",[t._v("© 2019")])])}],K={name:"Footer"},j=K,Y=(s("08c1"),Object(S["a"])(j,J,q,!1,null,"21efbac3",null)),Q=Y.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("canvas",{ref:"canvas",attrs:{id:"canvas"}})},z=[],X=(s("6c7b"),{name:"CanvasBg",data:function(){return{provider:{context:null},dots:[],dotsCol:120}},provide:function(){return{provider:this.provider}},methods:{addDot:function(){for(var t=0;t<this.dotsCol;t++)this.dots.push({x:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientWidth),y:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientHeight),color:"#e6e6e6",radius:3,stepCount:Math.floor(135*Math.random()),direction:Math.floor(8*Math.random())});this.drawDot()},drawDot:function(){var t=this;this.provider.context.clearRect(0,0,this.$refs["canvas"].parentElement.clientWidth,this.$refs["canvas"].parentElement.clientHeight);for(var e=0;e<this.dots.length;e++){switch(0===this.dots[e].stepCount?(this.dots[e].stepCount=Math.floor(135*Math.random()),this.dots[e].direction=Math.floor(8*Math.random())):this.dots[e].stepCount--,this.dots[e].direction){case 0:this.dots[e].y=this.dots[e].y-1;break;case 1:this.dots[e].x=this.dots[e].x+1;break;case 2:this.dots[e].y=this.dots[e].y+1;break;case 3:this.dots[e].x=this.dots[e].x-1;break;case 4:this.dots[e].x=this.dots[e].x+1,this.dots[e].y=this.dots[e].y-1;break;case 5:this.dots[e].x=this.dots[e].x+1,this.dots[e].y=this.dots[e].y+1;break;case 6:this.dots[e].x=this.dots[e].x-1,this.dots[e].y=this.dots[e].y+1;break;case 7:this.dots[e].x=this.dots[e].x-1,this.dots[e].y=this.dots[e].y-1;break}(this.dots[e].x<-10||this.dots[e].x>this.$refs["canvas"].parentElement.clientWidth+10||this.dots[e].y<-10||this.dots[e].y>this.$refs["canvas"].parentElement.clientHeight+10)&&(this.dots[e].stepCount=0),this.provider.context.fillStyle=this.dots[e].color,this.provider.context.beginPath(),this.provider.context.arc(this.dots[e].x,this.dots[e].y,this.dots[e].radius,0,2*Math.PI,!0),this.provider.context.fill();for(var s=0;s<this.dots.length;s++){var a=this.dots[s].x-this.dots[e].x,n=this.dots[s].y-this.dots[e].y,r=a*a,i=n*n,o=r+i,c=Math.sqrt(o);c<150&&(this.provider.context.beginPath(),this.provider.context.strokeStyle="#dedede",this.provider.context.moveTo(this.dots[e].x,this.dots[e].y),this.provider.context.lineTo(this.dots[s].x,this.dots[s].y),this.provider.context.stroke())}}this.timer=setTimeout((function(){t.drawDot()}),15)},handleResize:function(){if(this.$refs["canvas"].width=window.innerWidth,this.$refs["canvas"].height=window.innerHeight,this.provider.context=this.$refs["canvas"].getContext("2d","mybackground",window.innerHeight,window.innerWidth),window.innerWidth<=840){this.dotsCol=70,this.dots=[];for(var t=0;t<this.dotsCol;t++)this.dots.push({x:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientWidth),y:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientHeight),color:"#e6e6e6",radius:3,stepCount:Math.floor(135*Math.random()),direction:Math.floor(8*Math.random())})}if(window.innerWidth<640){this.dotsCol=40,this.dots=[];for(var e=0;e<this.dotsCol;e++)this.dots.push({x:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientWidth),y:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientHeight),color:"#e6e6e6",radius:3,stepCount:Math.floor(135*Math.random()),direction:Math.floor(8*Math.random())})}if(window.innerWidth>840){this.dotsCol=100,this.dots=[];for(var s=0;s<this.dotsCol;s++)this.dots.push({x:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientWidth),y:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientHeight),color:"#e6e6e6",radius:3,stepCount:Math.floor(135*Math.random()),direction:Math.floor(8*Math.random())})}if(window.innerHeight>1024){this.dotsCol=130,this.dots=[];for(var a=0;a<this.dotsCol;a++)this.dots.push({x:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientWidth),y:Math.floor(Math.random()*this.$refs["canvas"].parentElement.clientHeight),color:"#e6e6e6",radius:3,stepCount:Math.floor(135*Math.random()),direction:Math.floor(8*Math.random())})}}},mounted:function(){this.provider.context=this.$refs["canvas"].getContext("2d"),this.$refs["canvas"].width=window.innerWidth,this.$refs["canvas"].height=window.innerHeight,this.provider.context.globalCompositeOperation="destination-over",this.addDot(),window.addEventListener("resize",this.handleResize),this.handleResize()}}),Z=X,G=(s("afdc"),Object(S["a"])(Z,$,z,!1,null,"02e8acd6",null)),tt=G.exports,et={name:"app",components:{Header:P,Footer:Q,CanvasBg:tt},data:function(){return{category:null,isShowHeaderAndFooter:!0}},methods:{updateCategory:function(t){this.$emit("updateNews",t)},toggleHeadAndFoot:function(t){this.isShowHeaderAndFooter=t}}},st=et,at=(s("034f"),Object(S["a"])(st,w,v,!1,null,null,null)),nt=at.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-page"},[a("div",{staticClass:"search-container"},[a("img",{staticClass:"search-icon",attrs:{src:s("1c4e"),alt:""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search",attrs:{type:"text",placeholder:"search"},domProps:{value:t.searchValue},on:{input:[function(e){e.target.composing||(t.searchValue=e.target.value)},function(e){return t.searchBytitle(e)}]}})]),a("div",{staticClass:"news-content"},t._l(t.currentNews,(function(t){return a("newsCard",{attrs:{sendedNews:t}})})),1),a("loader",{directives:[{name:"show",rawName:"v-show",value:t.isLoaderShow,expression:"isLoaderShow"}],staticClass:"loader"}),t.isNothingFind?a("div",{staticClass:"nothing-find"},[a("h4",[t._v("No Result")])]):t._e(),t.isOverRequest?a("div",{staticClass:"over-requests"},[a("h4",[t._v("Sorry, but requests is over")])]):t._e()],1)},it=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news"},[t.news.urlToImage?a("img",{ref:"newsImage",attrs:{src:t.news.urlToImage},on:{error:t.imgPlaceholder}}):a("img",{attrs:{src:"https://via.placeholder.com/300"}}),a("div",{staticClass:"news-info"},[a("h3",{staticClass:"news-title"},[t._v(t._s(t.news.title))]),a("p",{staticClass:"news-description"},[t._v(t._s(t.news.description))]),a("router-link",{staticClass:"btn-read",attrs:{to:{name:"News",params:{news:t.news}}}},[t._v("Read")]),a("span",{staticClass:"pablish-date"},[t._v(t._s(t._f("moment")(t.news.publishedAt,"from","now")))]),a("div",{staticClass:"shared"},[a("img",{staticClass:"social",attrs:{src:s("d26c"),alt:"facebook"},on:{click:function(e){return t.sharedNews("facebook")}}}),a("img",{staticClass:"social",attrs:{src:s("a2db"),alt:"linkedin"},on:{click:function(e){return t.sharedNews("linkedin")}}}),a("img",{staticClass:"social",attrs:{src:s("7bba"),alt:"twitter"},on:{click:function(e){return t.sharedNews("twitter")}}})])],1)])},ct=[],lt={name:"newsCard",props:["sendedNews"],data:function(){return{news:{urlToImage:"",title:"",content:"",isImageForbidden:!1}}},mounted:function(){this.sendedNews&&(this.news=this.sendedNews)},created:function(){this.isImageForbidden=!1,this.news=this.sendedNews},watch:{$route:function(t,e){this.news=this.sendedNews},sendedNews:function(){this.news=this.sendedNews}},methods:{sharedNews:function(t){alert("Congratulations, you shared the news in "+t)},imgPlaceholder:function(t){this.isImageForbidden=!0,t.target.src="https://via.placeholder.com/300"}}},ut=lt,ht=(s("2ca9"),Object(S["a"])(ut,ot,ct,!1,null,"28e38685",null)),dt=ht.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gooey"},[s("span",{staticClass:"dot"}),s("div",{staticClass:"dots"},[s("span"),s("span"),s("span")])])}],pt={name:"loader"},gt=pt,wt=(s("efbb"),Object(S["a"])(gt,ft,mt,!1,null,"5acbc0c8",null)),vt=wt.exports,Ct=s("2ef0"),At=s.n(Ct),bt={name:"Main",components:{newsCard:dt,loader:vt},data:function(){return{currentNews:null,searchValue:"",cutegory:null,defaultCategory:"health",isLoaderShow:!0,isNothingFind:!1,isOverRequest:!1,page:2}},methods:{searchBytitle:At.a.debounce((function(t){var e=this;this.isLoaderShow=!0,this.currentNews=[],this.searchValue=t.target.value,this.searchValue.length>0?N.searchByTitle(this.searchValue).then((function(t){e.currentNews=t.data.articles,e.isLoaderShow=!1,0===e.currentNews.length&&(e.isNothingFind=!0),e.isOverRequest=!1}),(function(t){t&&(e.isOverRequest=!0,e.isLoaderShow=!1)})):0===this.searchValue.length&&N.getData(this.category,1).then((function(t){e.currentNews=t.data.articles,e.isLoaderShow=!1,e.isNothingFind=!1,e.isOverRequest=!1}),(function(t){t&&(e.isOverRequest=!0,e.isLoaderShow=!1)}))}),1e3),scroll:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&(t.isLoaderShow=!0,N.getData(t.category,t.page).then((function(e){for(var s=0;s<e.data.articles.length;s++)t.currentNews.push(e.data.articles[s]);t.isLoaderShow=!1,t.isOverRequest=!1}),(function(e){e&&(t.isOverRequest=!0,t.isLoaderShow=!1)})),t.page+=1)}}},mounted:function(){this.category&&(this.currentCategory=this.category),this.scroll()},created:function(){var t=this;this.$route.params.category!==this.defaultCategory&&(this.category=this.$route.params.category),this.category?(this.isLoaderShow=!0,N.getData(this.category,1).then((function(e){t.currentNews=e.data.articles,t.isLoaderShow=!0,t.isOverRequest=!1}),(function(e){e&&(t.isOverRequest=!0,t.isLoaderShow=!1)}))):(this.isLoaderShow=!0,N.getData(this.defaultCategory,1).then((function(e){t.currentNews=e.data.articles,t.isLoaderShow=!0,t.isOverRequest=!1}),(function(e){e&&(t.isOverRequest=!0,t.isLoaderShow=!1)})))},watch:{$route:function(t,e){var s=this;this.searchValue="",t.params.category&&(this.currentNews=[],this.category=t.params.category,this.isLoaderShow=!0,this.isIndexPage=!1,N.getData(this.category,1).then((function(t){s.currentNews=t.data.articles,s.isLoaderShow=!1,s.isOverRequest=!1}),(function(t){t&&(s.isOverRequest=!0,s.isLoaderShow=!1)})))}}},yt=bt,xt=(s("84ae"),Object(S["a"])(yt,rt,it,!1,null,"0ddf970c",null)),Rt=xt.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news"},[a("img",{staticClass:"news-img",attrs:{src:t.currentNews.urlToImage,alt:""}}),a("div",{staticClass:"news-helpers"},[a("span",{staticClass:"pablish-date"},[t._v(t._s(t._f("moment")(t.news.publishedAt,"from","now")))]),a("div",{staticClass:"shared"},[a("img",{staticClass:"social",attrs:{src:s("d26c"),alt:"facebook"},on:{click:function(e){return t.sharedNews("facebook")}}}),a("img",{staticClass:"social",attrs:{src:s("a2db"),alt:"linkedin"},on:{click:function(e){return t.sharedNews("linkedin")}}}),a("img",{staticClass:"social",attrs:{src:s("7bba"),alt:"twitter"},on:{click:function(e){return t.sharedNews("twitter")}}})])]),a("div",{staticClass:"news-info"},[a("h2",[t._v(t._s(t.currentNews.title))]),a("p",[t._v(t._s(t.currentNews.content))])])])},St=[],_t={name:"News",props:["news"],data:function(){return{currentNews:{urlToImage:"",title:"",content:""}}},mounted:function(){this.news&&(this.currentNews=this.news)},methods:{sharedNews:function(t){alert("Congratulations, you shared the news in "+t)}},created:function(){this.news||this.$router.push({name:"Home"})}},Nt=_t,Et=(s("cf80"),Object(S["a"])(Nt,Mt,St,!1,null,"ab79b9b8",null)),Tt=Et.exports,Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"rates",staticClass:"rates"},[s("div",{staticClass:"rates-type"},[s("input",{staticClass:"amount",attrs:{type:"number",placeholder:"Amount"},on:{input:function(e){return t.changeAmount(e)},focus:t.focusOn,blur:t.focusOut}}),s("span",[t._v(" Exchange rate from ")]),s("select",{on:{change:function(e){return t.changeCurrentRate(e)}}},t._l(t.valuesFrom,(function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])})),0),s("span",[t._v(" to ")]),s("select",{on:{change:function(e){return t.changeRateTo(e)}}},t._l(t.valuesTo,(function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])})),0)]),s("div",{staticClass:"current-rate-container"},[s("h2",{staticClass:"current-rate"},[t._v(t._s(t.rateAmount)+" "+t._s(t.currentRate)+": "+t._s(t.exchangeName)+" "+t._s(t.exchangeTo))])]),s("div",{staticClass:"rate-items"},t._l(t.itemValue,(function(e){return s("div",{staticClass:"rate-item"},[s("h3",{staticClass:"rate"},[t._v(t._s(e)+": "+t._s(t.rates[e]))])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoaderShow,expression:"isLoaderShow"}],staticClass:"loader-container"},[s("loader",{staticClass:"loader"})],1)])},kt=[],Ut=(s("ac6a"),s("96cf"),s("3b8d")),Ht={name:"ratesService",getRates:function(t){return y.a.get("".concat(x.ratesApiUrl).concat(t))}},Lt=Ht,Wt=Object(S["a"])(Lt,o,c,!1,null,null,null),Dt=Wt.exports,Vt={name:"ExchangeRages",components:{loader:vt},data:function(){return{rates:{},currentRate:"USD",currentRateValue:"",valuesFrom:["USD","EUR","RUB","CHF"],valuesTo:["EUR","USD","RUB","CHF"],itemValue:["EUR","USD","RUB","CHF"],exchangeTo:"",exchangeName:"EUR",rateAmount:100,isLoaderShow:!1}},created:function(){var t=this;this.isLoaderShow=!0;for(var e=0;e<this.itemValue.length;e++)this.itemValue[e]===this.currentRate&&this.itemValue.splice(e,1);Dt.getRates(this.currentRate).then((function(e){t.rates=e.data.rates,t.currentRateValue=t.rates[t.currentRate]})),Dt.getRates(this.currentRate).then((function(e){var s=t.rates[t.exchangeName];t.rates=e.data.rates,t.exchangeTo=s,t.isLoaderShow=!1}))},methods:{changeCurrentRate:function(t){var e=this;this.isLoaderShow=!0;var s=t.target.value;this.currentRate=s,this.itemValue=["EUR","USD","RUB","CHF"];for(var a=0;a<this.itemValue.length;a++)this.itemValue[a]===this.currentRate&&this.itemValue.splice(a,1);Dt.getRates(this.currentRate).then((function(t){e.rates=t.data.rates,e.currentRateValue=e.rates[e.currentRate],e.exchangeTo=e.rates[e.exchangeName],e.isLoaderShow=!1}))},changeRateTo:function(t){var e=this;this.isLoaderShow=!0;var s=t.target.value;Dt.getRates(this.currentRate).then((function(t){e.rates=t.data.rates,e.exchangeTo=e.rates[s],e.exchangeName=s,e.isLoaderShow=!1}))},changeAmount:At.a.debounce(function(){var t=Object(Ut["a"])(regeneratorRuntime.mark((function t(e){var s,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoaderShow=!0,s=e.target.value,this.rateAmount=s,t.next=5,Dt.getRates(this.currentRate);case 5:a=t.sent,0===this.exchangeTo?(this.exchangeTo=a.data.rates[this.exchangeName],this.exchangeTo=this.exchangeTo*s):this.exchangeTo=this.exchangeTo*s,this.rates=a.data.rates,t.t0=regeneratorRuntime.keys(this.rates);case 9:if((t.t1=t.t0()).done){t.next=15;break}return n=t.t1.value,"number"==typeof this.rates[n]&&(this.rates[n]=this.rates[n]*s),t.abrupt("continue",9);case 15:this.isLoaderShow=!1;case 16:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),1e3),focusOn:function(){this.$emit("toggleHeadAndFoot",!1)},focusOut:function(){this.$emit("toggleHeadAndFoot",!0)}}},It=Vt,Bt=(s("793c"),Object(S["a"])(It,Ot,kt,!1,null,"112e2b7a",null)),Ft=Bt.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t.isOverRequest?t._e():s("newsCarousel",{staticClass:"carousel",attrs:{sendedNews:t.slides}}),t._l(t.news,(function(e){return s("div",{staticClass:"home-content",on:{click:function(s){return t.goToCurrentNews(e)}}},[s("img",{attrs:{src:e.urlToImage,alt:""}}),s("div",{staticClass:"content-description"},[s("h3",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.description))])])])})),t.isOverRequest?s("div",{staticClass:"over-requests"},[s("h4",{staticClass:"slide-title"},[t._v("Sorry, but requests is over")])]):t._e()],2)},Jt=[],qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"}},t._l(t.slides,(function(e){return s("b-carousel-slide",{attrs:{"img-src":e.urlToImage},on:{click:function(s){return t.goToCurrentNews(e)}}},[s("h2",[t._v(t._s(e.title))])])})),1)],1)},Kt=[],jt={name:"newsCarousel",props:["sendedNews"],data:function(){return{slides:{urlToImage:"",title:"",description:""}}},mounted:function(){this.sendedNews&&(this.slides=this.sendedNews)},created:function(){this.sendedNews&&(this.slides=this.sendedNews)},watch:{$route:function(t,e){this.slides=this.sendedNews},sendedNews:function(){this.slides=this.sendedNews}},methods:{goToCurrentNews:function(t){this.$router.push({name:"News",params:{news:t}})}}},Yt=jt,Qt=(s("2a66"),Object(S["a"])(Yt,qt,Kt,!1,null,"161d7a30",null)),$t=Qt.exports,zt={name:"Home",components:{newsCarousel:$t},data:function(){return{news:[],slides:[],isOverRequest:!1}},created:function(){var t=this;N.getTopNews("pageSize=6&").then((function(e){t.news=e.data.articles;for(var s=0;s<3;s++)t.slides.push(t.news[s]);t.isOverRequest=!1}),(function(e){t.isOverRequest=!0}))},methods:{goToCurrentNews:function(t){this.$router.push({name:"News",params:{news:t}})}}},Xt=zt,Zt=(s("0698"),Object(S["a"])(Xt,Pt,Jt,!1,null,"fad1dbcc",null)),Gt=Zt.exports,te=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weather",on:{mousemove:t.changePosition,touchmove:t.changePosition}},[s("div",{ref:"widget",staticClass:"widget",style:t.blockPosition,on:{mousedown:t.mouseDown,mouseup:t.mouseUp,touchstart:t.mouseDown,touchend:t.mouseUp}},[s("span",{staticClass:"draggable"},[t._v("(draggable)")]),s("div",{staticClass:"left-panel panel"},[s("div",{staticClass:"city"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userCoutry,expression:"userCoutry"}],staticClass:"input-country",attrs:{type:"text"},domProps:{value:t.userCoutry},on:{input:[function(e){e.target.composing||(t.userCoutry=e.target.value)},function(e){return t.changecountry(e)}]}})]),s("div",{staticClass:"info"},[s("div",{staticClass:"weather-info"},[s("span",[t._v(t._s(t.weather))]),s("img",{attrs:{src:t.currentWeatherImg}})]),s("div",{staticClass:"temp"},[s("span",[t._v("Temp "+t._s(t.temp)+"°")])])])])])])},ee=[],se={name:"Weather",data:function(){return{temp:"",location:"",userCoutry:"London",currentWeatherImg:"",weather:"",isMouseDown:!1,block:null,blockPosition:{margin:"auto auto"}}},created:function(){var t=this;this.isMouseDown=!1,H.getWeatherByCountry(this.userCoutry).then((function(e){t.temp=e.data.main.temp,t.location=e.data.name,t.userCoutry=e.data.name,t.currentWeatherImg="http://openweathermap.org/img/wn/".concat(e.data.weather[0].icon,"@2x.png"),t.weather=e.data.weather[0].description}))},methods:{changecountry:At.a.debounce((function(t){var e=this,s=t.target.value;H.getWeatherByCountry(s).then((function(t){e.temp=t.data.main.temp,e.location=t.data.name,e.userCoutry=t.data.name,e.currentWeatherImg="http://openweathermap.org/img/wn/".concat(t.data.weather[0].icon,"@2x.png"),e.weather=t.data.weather[0].description}))}),1500),mouseDown:function(t){var e,s,a=this.$refs["widget"].getBoundingClientRect().left,n=this.$refs["widget"].getBoundingClientRect().top;t.clientY&&t.clientX?(e=t.clientX,s=t.clientY):t.touches[0].clientX&&t.touches[0].clientY&&(e=t.touches[0].clientX,s=t.touches[0].clientY),this.blockPosition={left:e+(e-a)+"px",top:s+(s-n)+"px"},this.isMouseDown=!0},mouseUp:function(){this.isMouseDown=!1},changePosition:function(t){if(this.isMouseDown){var e,s,a=this.$refs["widget"].getBoundingClientRect().left,n=this.$refs["widget"].getBoundingClientRect().top;t.clientY&&t.clientX?(e=t.clientX,s=t.clientY):t.touches[0].clientX&&t.touches[0].clientY&&(e=t.touches[0].clientX,s=t.touches[0].clientY),this.blockPosition.left=e+(e-a)+"px",this.blockPosition.top=s+(s-n)+"px"}}}},ae=se,ne=(s("85f8"),Object(S["a"])(ae,te,ee,!1,null,"dee5b2dc",null)),re=ne.exports,ie=[{path:"/",redirect:{name:"Home"}},{path:"/Home",name:"Home",component:Gt,props:!0},{path:"/category/:category",name:"newsCategory",component:Rt,props:!0},{path:"/country/:country",name:"newsCountry",component:Rt,props:!0},{path:"/news",name:"News",component:Tt,props:!0},{path:"/exchange-rates",name:"ExchangeRates",component:Ft},{path:"/weather",name:"Weather",component:re}],oe=ie,ce=s("ecee"),le=s("c074"),ue=s("ad3d"),he=s("5f5b");s("f9e3"),s("2dd8"),s("278f");ce["c"].add(le["a"]),l["default"].component("font-awesome-icon",ue["a"]),l["default"].component("vue-draggable-resizable",g.a),l["default"].config.productionTip=!1,l["default"].use(u["a"]),l["default"].use(d.a),l["default"].use(he["a"]),l["default"].use(m.a);var de=new u["a"]({routes:oe});new l["default"]({render:function(t){return t(nt)},router:de}).$mount("#app")},"62fa":function(t,e,s){},"64a9":function(t,e,s){},"684b":function(t,e,s){},"71d0":function(t,e,s){},"793c":function(t,e,s){"use strict";var a=s("62fa"),n=s.n(a);n.a},"7bba":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACsklEQVRo3u1YW6hNQRge67I9uISSePAmUm5JHpRClCOSy4NLcnvEi5MnoRR5FIlSJM5eM22dCE8kb4pEojwQKcm57b1nZh+Rs3yzzqYTe5/WWrNmzst89bV3q73+///++fc//wwhDg4ODg4ODinB6nMDKs6Db30qJFjzmHgRUH6a3JYzW71S6hILtXz6kVxPTsWelhG8r4JEwD/BuDUlh6+Dye/v9EzyKd/qM/EYzy5oZOzbRBivqqzpJYFfaR/4f3wO/mh+/0JYbVp+x1R2/DUcyUuExX5mG0zszBD8SPaGTCwmt6pTg7JYk0uAx/ihf4zezZSROB6H7L/PETxKTVbw+QTsKzGxIJ8Ayo+0MP45YGJtmvfDSC7Lmf0/HPSZ3KRTQhvbG+fdpFKfN3rti30awfcEtL5Cr+0l3QDdob2TIfCeEkoexONTrmBa7iikdasOlNJhTdWtR0VnwPhqUqnNwbPduQVEfEsxm8+NeAJEvNOs5cwMIrFOO3bU8C5wT1iWS5DZlzYF5O48o9Rww6KAIbXy2gLURmK7dJLyoeINKQrYSZ/aF8EvFyYgZHLpiNnEEmUHKRJoadstiujFzFUiRSMZC5h4ZqF9niUmgGXdjLlkA9rqNTj6bkhAg5TlLFMCLlroPueIMTA+HU6+GhTwidzsm0xMIiw3lsNRv4Hgf6Ud0fUxPKQ9KlKAx+QJYhtqf/CoPInO9FBTwHV1crMuIDkuUrkfAQxoBZ/jnK0HHFyQ9b24z3mlM6xh9Y4bzXwYiUWqTHCfs9JnfBvG6WNwfB+sa5bMB9hcZT7T3QNT0JfPNG/QivizVpOsFzEmZ0KXmIHsHwVf5+owOAh5ET+sEkLGHIzPxzhxAOPE1WTMHr7zqTYP9/14/jG5DsQ4nFwTssHZYx+0g4ODg4ODgzn8BvoW7XZYE3PvAAAAAElFTkSuQmCC"},"84ae":function(t,e,s){"use strict";var a=s("ed4b"),n=s.n(a);n.a},"85f8":function(t,e,s){"use strict";var a=s("684b"),n=s.n(a);n.a},"95b5":function(t,e,s){},9844:function(t,e,s){},a2db:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABnUlEQVRo3u2ZP0vDUBDA0wYHV3ESXNXVT+DiVsXVL+FncBDxVQcL4lAHFwUHJ0cF22JGEZuQagu1WHWoFP+0iba1JmdeVKi2xSSVeMH7wdEhR7jf671Xek8QCIIgUCMyZUZcklNhJutWgE+hh5iSFJk83VPx4Wia+Vh0t1j0vPIIirdDXE5PuRd4bxsUAiEmJ9y3D5M1LAJWVL0IYCnejl8TGNvIwtG1DvqLAZL1ORrPBkuAF91K6koPlgBf+Va0hkHfgO97QPrYA8miBiPx82AJBP4UCrxAJ5w8H14/g9hxGTLlGtSaJjzWX+1WnDu4gf4VBbfA+GYObp+a0I2T0jMMrWXwCuQfGvAT/EAQsQo4JbJbwClgmGD3/+TOBczuFSFxqXXM21LvcQrMS6UvOX1RBfYL1ba83F0dp8BgTG17z8R2vi2vYp1M6ATMb88/Y2BVdZyL4nfAy7tIgARIgARIgAT+9T8yRKNFpeJagM/nEQ13D10L8MsFNON1dhoRvMAvF/5eIL0g9AK/XODzeZ/3hMbbxvPKEwRB+MYbdgKe+U66VrgAAAAASUVORK5CYII="},add9:function(t,e,s){"use strict";var a=s("d162"),n=s.n(a);n.a},afdc:function(t,e,s){"use strict";var a=s("d3e5"),n=s.n(a);n.a},cf80:function(t,e,s){"use strict";var a=s("04c6"),n=s.n(a);n.a},d162:function(t,e,s){},d26c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADDklEQVRo3u1ZzWsTQRQP2ViEtnjx6ElsFSv15NV/wFb0KOrdix/Vf0AEPehNEXR300qhmFTBgycLnop4qYm10YIfIGRnsmmSTU3aks1Hx3lrW427TXd2djY57IMHIdnM/H4zb95789tIJLTQQgsNbF9cOxmVtZuSgmejClqUFGTQz/U/joyojD5av6naBDzbG6jjhcGoot2KKegLBUlYPCajz0A48nhlIHjgt0kMVpICKbECd/BiVME3YMxgwD/Fx2iIpH0A3uZ0zFQkjo4KxS7J6CydrOo3+H+8IqloXAx4FV+mEzQEgt92Oge+JGLlgwD/l4SsjfmD/kl2yNpaTlADU5gMJ/Pk1KsVMvIiT4YSOjnwDHf6TxXOG3+24TiwNL2SC28NMp8zSb21SZzs3Fyp08H+wJWdtlKlJ/D745gkf2yQvex8BwIWCRlf94Z+Wu+nAxS8Eri/WCVubC8CUCegYLKvPq2wXsEfmtGJuUvIeCBArIrNal7ag22feL/qCLZstsjddIVcmS/v+OHnuqu2g7kx48k4ie/OsX/6dcHzmH2qfiKQ8AF/p5s28EulOl+rwXKYoe3lmSxjNGwEZr5t8Ba3BMMO4E88ky2X7QQeZdZ4m700ww6got8EHnISgJTOQsDsQQI1IQTupCrEqLXavOlQAmr0y/+fAx99mRdCwHUIPXBZcZ0MeA5OYf9DiOUQ8xD4WW2KOsTu0ygPgTmtJiiNWvKIeAIsB5tGxTXXBPqU7CjLReXgdK7Nv67as5C8vG57rn8Su28l5NwIaze61CtplLmZYw0j0QTgYhXohcZnAkXP6h0oZt0mQDXVq7yX+lQXCSxEZonEp0yo2SNUF/rVBQI+yCo7qhwaZxG2fCDQkFTtjL/qHJX73JLgJEBVOXxRkLirjblR6TwTgFD1e+VtJmvDoJgJILAAMmZwLzjoJXu3tpuRQMFKldzZxovRAgMVm+5IhpUAtCpWhe3KKyanBpA2W1u7knyTNcvZtWZrvbFJwDX6+V66gqEltuSRydzx8LVoaKGFZtlvtJzIZB9pmywAAAAASUVORK5CYII="},d3e5:function(t,e,s){},ed4b:function(t,e,s){},efbb:function(t,e,s){"use strict";var a=s("95b5"),n=s.n(a);n.a}});
//# sourceMappingURL=app.4f2ae2db.js.map