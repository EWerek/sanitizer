(function(t){function e(e){for(var s,o,n=e[0],l=e[1],c=e[2],d=0,v=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/sanitizer/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-content",[a("HelloWorld")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",height:"100"}},[a("v-avatar",{staticClass:"mr-3",attrs:{color:"grey lighten-5",size:"70"}},[a("v-icon",[t._v(t._s(t.svgPath))])],1),a("v-toolbar-title",{staticClass:"font-weight-black headline"},[t._v("EMS")])],1),a("v-content",[a("section",{attrs:{id:"hero"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"https://source.unsplash.com/KiRlN3jjVNU/1920X1280"}},[a("v-theme-provider",{attrs:{dark:""}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[a("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v("EMS")]),a("br"),a("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v("HAND SANITIZERS")])]),a("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[a("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),a("section",{attrs:{id:"about-me"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("SPECS")]),a("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v("SPECS HERE")]),a("v-avatar",{staticClass:"elevation-12 mb-12",attrs:{size:"500"}},[a("v-img",{attrs:{src:"https://source.unsplash.com/E5GIqru4dwA/1920x2880"}})],1),a("div")],1),a("div",{staticClass:"py-12"})],1),a("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("FEATURES")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.features,(function(e,s){var i=e.icon,r=e.title,o=e.text;return a("v-col",{key:s,attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[a("v-theme-provider",{attrs:{dark:""}},[a("div",[a("v-avatar",{attrs:{color:"primary",size:"88"}},[a("v-icon",{attrs:{large:""},domProps:{textContent:t._s(i)}})],1)],1)]),a("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(r)}}),a("v-card-text",{staticClass:"subtitle-1",domProps:{textContent:t._s(o)}})],1)],1)})),1)],1),a("div",{staticClass:"py-12"})],1),a("section",{attrs:{id:"stats"}},[a("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:500,src:"https://source.unsplash.com/yAXbfq1wI7I/1600x900"}})],1),a("section",{attrs:{id:"blog"}},[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("ANYTHING ELSE")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.articles,(function(e,s){var i=e.src,r=e.text,o=e.title;return a("v-col",{key:s,attrs:{cols:"12",md:"4"}},[a("v-img",{staticClass:"mb-4",attrs:{src:i,height:"275","max-width":"100%"}}),a("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(o)}}),a("div",{staticClass:"title font-weight-light mb-5",domProps:{textContent:t._s(r)}})],1)})),1)],1),a("div",{staticClass:"py-12"})],1),a("v-sheet",{attrs:{id:"contact",color:"#333333",dark:"",tag:"section",tile:""}},[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contact Me")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-theme-provider",{attrs:{light:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Name*",solo:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Email*",solo:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Subject*",solo:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{flat:"",label:"Message*",solo:""}})],1),a("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"accent","x-large":""}},[t._v("Submit")])],1)],1)],1)],1),a("div",{staticClass:"py-12"})],1)],1),a("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[a("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v("© "+t._s((new Date).getFullYear()))])])],1)],1)},n=[],l=a("94ed"),c={name:"HelloWorld",data:function(){return{svgPath:l["a"],articles:[{src:"https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",title:"HEY JAMBOY",text:"Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."},{src:"https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",title:"HEY JAMBOY",text:"Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."},{src:"https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",title:"HEY JAMBOY",text:"Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."}],features:[{icon:"mdi-virus",title:"Kills Pathogens",text:"Contains 70% alcohol The use of hand sanitisers has been proven to reduce the risk of pathogens cross contamination. Our alcohol-based Initial Hand Sanitiser Gel rapidly acts against a broad spectrum of germs. It evaporates quickly to leave hands feeling fresh and is quick and convenient to use any time, anywhere. Our Hand Sanitiser is effective against coronavirus"},{icon:"mdi-tools",title:"Easy to Install",text:"Practical and hygienic. Easy to top up. Wall mounted. Viewing window to check stock level. Capacity - 1 litre. Dimensions - H 250mm x W 125mm x D 136mm.Weight (without consumable) - 950 grams.Material - ABS plastic"},{icon:"mdi-shield-outline",title:"Long-term Support",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"}]}}},u=c,d=a("2877"),v=a("6544"),p=a.n(v),m=a("7496"),h=a("40dc"),f=a("8212"),g=a("8336"),b=a("b0af"),y=a("99d9"),x=a("62ad"),C=a("a523"),w=a("a75b"),V=a("ce7e"),_=a("553a"),k=a("132d"),S=a("adda"),E=a("8b9c"),j=a("6b53"),P=a("0fd9"),O=a("8dd9"),A=a("8654"),M=a("a844"),H=a("480e"),T=a("2a7f"),q=Object(d["a"])(u,o,n,!1,null,null,null),I=q.exports;p()(q,{VApp:m["a"],VAppBar:h["a"],VAvatar:f["a"],VBtn:g["a"],VCard:b["a"],VCardText:y["a"],VCardTitle:y["b"],VCol:x["a"],VContainer:C["a"],VContent:w["a"],VDivider:V["a"],VFooter:_["a"],VIcon:k["a"],VImg:S["a"],VParallax:E["a"],VResponsive:j["a"],VRow:P["a"],VSheet:O["a"],VTextField:A["a"],VTextarea:M["a"],VThemeProvider:H["a"],VToolbarTitle:T["a"]});var B={name:"App",components:{HelloWorld:I},data:function(){return{}}},D=B,N=a("2fa4"),W=Object(d["a"])(D,i,r,!1,null,null,null),J=W.exports;p()(W,{VApp:m["a"],VAppBar:h["a"],VBtn:g["a"],VContent:w["a"],VIcon:k["a"],VImg:S["a"],VSpacer:N["a"]});var Y=a("f309");s["a"].use(Y["a"]);var $=new Y["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:$,render:function(t){return t(J)}}).$mount("#app")}});
//# sourceMappingURL=app.fbf72a61.js.map