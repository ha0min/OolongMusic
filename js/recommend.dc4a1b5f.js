(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["recommend"],{"78db":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r=Object(n["P"])("data-v-12b12a2c");Object(n["y"])("data-v-12b12a2c");var l={class:"recommend"},i={class:"slider"},a={class:"slider__wrapper"},s={class:"slider__wrapper__content"},u={class:"recommend__list"},o={class:"recommend__list__title"},d={class:"recommend__list__item__icon"},b={width:"60",height:"60",alt:""},j={class:"recommend__list__item__text"},O={class:"name"},f={class:"title"};Object(n["w"])();var m=r((function(e,t,c,m,v,p){var _=Object(n["D"])("slider"),h=Object(n["D"])("scroller"),g=Object(n["D"])("router-view"),k=Object(n["E"])("lazy"),w=Object(n["E"])("loading");return Object(n["N"])((Object(n["v"])(),Object(n["h"])("div",l,[Object(n["j"])(h,{class:"scroller_wrapper"},{default:r((function(){return[Object(n["j"])("div",null,[Object(n["j"])("div",i,[Object(n["j"])("div",a,[Object(n["j"])("div",s,[v.sliders.length?(Object(n["v"])(),Object(n["h"])(_,{key:0,sliders:v.sliders},null,8,["sliders"])):Object(n["i"])("",!0)])])]),Object(n["j"])("div",u,[Object(n["N"])(Object(n["j"])("h1",o,"热门歌单",512),[[n["K"],!p.loading]]),Object(n["j"])("ul",null,[(Object(n["v"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(v.albums,(function(e){return Object(n["v"])(),Object(n["h"])("li",{class:"recommend__list__item",onClick:Object(n["O"])((function(t){return p.onAlbumItemClick(e)}),["stop"]),key:e.id},[Object(n["j"])("div",d,[Object(n["N"])(Object(n["j"])("img",b,null,512),[[k,e.pic]])]),Object(n["j"])("div",j,[Object(n["j"])("h2",O,Object(n["H"])(e.username),1),Object(n["j"])("p",f,Object(n["H"])(e.title),1)])],8,["onClick"])})),128))])])])]})),_:1}),Object(n["j"])(g,null,{default:r((function(e){var t=e.Component;return[Object(n["j"])(n["d"],{appear:"",name:"slide"},{default:r((function(){return[(Object(n["v"])(),Object(n["h"])(Object(n["F"])(t),{data:v.clickedAlbum},null,8,["data"]))]})),_:2},1024)]})),_:1})],512)),[[w,p.loading,v.message]])})),v=c("1da1"),p=(c("96cf"),c("dc69")),_=(c("9911"),Object(n["P"])("data-v-574311d1"));Object(n["y"])("data-v-574311d1");var h={class:"slider",ref:"rootRef"},g={class:"slider__group"},k={class:"dots-wrapper"};Object(n["w"])();var w=_((function(e,t,c,r,l,i){return Object(n["v"])(),Object(n["h"])("div",h,[Object(n["j"])("div",g,[(Object(n["v"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(c.sliders,(function(e){return Object(n["v"])(),Object(n["h"])("div",{class:"slider__group__page",key:e.id},[Object(n["j"])("a",{href:e.link},[Object(n["j"])("img",{src:e.pic},null,8,["src"])],8,["href"])])})),128))]),Object(n["j"])("div",k,[(Object(n["v"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(c.sliders,(function(e,t){return Object(n["v"])(),Object(n["h"])("span",{class:["dot",{active:r.currentPageIndex===t}],onClick:function(e){return r.onSliderClick(t)},key:e.id},null,10,["onClick"])})),128))])],512)})),A=c("229e"),C=c("2bb4");function y(e){var t=Object(n["A"])(0),c=Object(n["A"])(null);return Object(n["t"])((function(){var n=c.value=new A["a"](e.value,{click:!0,scrollX:!0,scrollY:!1,momentum:!1,bounce:!1,probeType:2,slide:!0});n.on("slideWillChange",(function(e){t.value=e.pageX}))})),Object(n["u"])((function(){c.value.destroy()})),Object(n["q"])((function(){c.value.enable(),c.value.refresh()})),Object(n["s"])((function(){c.value.disable()})),{slider:c,currentPageIndex:t}}A["a"].use(C["a"]);var x={name:"slide",props:{sliders:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(n["A"])(null),t=y(e),c=t.slider,r=t.currentPageIndex,l=function(e){c.value.goToPage(e,0,500)};return{rootRef:e,currentPageIndex:r,onSliderClick:l}}};c("bf38");x.render=w,x.__scopeId="data-v-574311d1";var I=x,P=c("1d73"),S=c("335a"),R=c("aaef"),B={name:"recommend",data:function(){return{sliders:[],albums:[],message:"正在载入中...",clickedAlbum:null}},computed:{loading:function(){return!this.sliders.length&&!this.albums.length}},components:{Slider:I,Scroller:P["a"]},methods:{onAlbumItemClick:function(e){console.log("onAlbumItemClick",e),this.clickedAlbum=e,this.cachedAlbum(e),this.$router.push({path:"/recommend/".concat(e.id)})},cachedAlbum:function(e){S["a"].session.set(R["a"],e)}},created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["b"])();case 2:c=t.sent,console.log("recommend.vue created",c),e.sliders=c.sliders,e.albums=c.albums;case 6:case"end":return t.stop()}}),t)})))()}};c("e9a1");B.render=m,B.__scopeId="data-v-12b12a2c";t["default"]=B},"857a":function(e,t,c){var n=c("1d80"),r=/"/g;e.exports=function(e,t,c,l){var i=String(n(e)),a="<"+t;return""!==c&&(a+=" "+c+'="'+String(l).replace(r,"&quot;")+'"'),a+">"+i+"</"+t+">"}},9911:function(e,t,c){"use strict";var n=c("23e7"),r=c("857a"),l=c("af03");n({target:"String",proto:!0,forced:l("link")},{link:function(e){return r(this,"a","href",e)}})},af03:function(e,t,c){var n=c("d039");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},bef4:function(e,t,c){},bf38:function(e,t,c){"use strict";c("bef4")},c514:function(e,t,c){},dc69:function(e,t,c){"use strict";c.d(t,"b",(function(){return r})),c.d(t,"a",(function(){return l}));var n=c("58ff"),r=function(){return Object(n["a"])("/api/getRecommend")},l=function(e){return console.log("getAlbum",e.id),Object(n["a"])("/api/getAlbum",{id:e.id})}},e9a1:function(e,t,c){"use strict";c("c514")}}]);