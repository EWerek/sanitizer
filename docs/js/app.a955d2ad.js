(function(t){function a(a){for(var s,o,n=a[0],l=a[1],c=a[2],v=0,p=[];v<n.length;v++)o=n[v],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(p.length)p.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e("v-spacer"),e("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e("v-icon",[t._v("mdi-open-in-new")])],1)],1),e("v-content",[e("HelloWorld")],1)],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("v-app",[e("v-app-bar",{attrs:{app:"",color:"white",height:"100"}},[e("v-avatar",{staticClass:"mr-3",attrs:{color:"grey lighten-5",size:"70"}},[e("v-icon",[t._v(t._s(t.svgPath))])],1),e("v-toolbar-title",{staticClass:"font-weight-black headline"},[t._v("EMS")])],1),e("v-content",[e("section",{attrs:{id:"hero"}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:"https://source.unsplash.com/4y3efE_x-NU/1920X1280"}},[e("v-theme-provider",{attrs:{dark:""}},[e("v-container",{attrs:{"fill-height":""}},[e("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[e("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v("EMS")]),e("br"),e("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v("HAND SANITIZERS")])]),e("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(a){return t.$vuetify.goTo("#about-me")}}},[e("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),e("section",{attrs:{id:"about-me"}},[e("div",{staticClass:"py-12"}),e("v-container",{staticClass:"text-center"},[e("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Executive Maintenance Services")]),e("p",{staticStyle:{"font-size":"2em"}},[t._v("We are a family-run company that has been in the cleaning supply business for over 40 years. During these chaotic times we have locally produced sanitizer gel to help in the fight against the Corona Virus. The sanitizer is NPN and CFIA certified and comes in cases of four 1 gallon bottles. We have automatic refillable dispensers available which hold 800 mL of gel. They are easily wall-mounted with tape so that there is no damage to the walls or alternatively they can be fastened with screws. We also have metal stands available for an additional cost.")]),e("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[e("v-divider",{staticClass:"mb-1"})],1),e("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"720"}},[t._v("AVAILABLE")]),e("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:500,src:"https://source.unsplash.com/E5GIqru4dwA/1920x2880"}},[e("v-container",{attrs:{"fill-height":""}},[e("v-row",{staticClass:"mx-auto"},t._l(t.stats,(function(a){var s=a[0],i=a[1];return e("v-col",{key:i,attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"text-center"},[e("div",{staticClass:"display-3 font-weight-black mb-4",domProps:{innerHTML:t._s(s)}}),e("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(i)}})])])})),1)],1)],1)],1),e("div",{staticClass:"py-12"})],1),e("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[e("div",{staticClass:"py-12"}),e("v-container",{staticClass:"text-center"},[e("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("FEATURES")]),e("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[e("v-divider",{staticClass:"mb-1"}),e("v-divider")],1),e("v-row",t._l(t.features,(function(a,s){var i=a.icon,r=a.title,o=a.text;return e("v-col",{key:s,attrs:{cols:"12",md:"4"}},[e("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[e("v-theme-provider",{attrs:{dark:""}},[e("div",[e("v-avatar",{attrs:{color:"primary",size:"88"}},[e("v-icon",{attrs:{large:""},domProps:{textContent:t._s(i)}})],1)],1)]),e("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(r)}}),e("v-card-text",{staticClass:"subtitle-1",domProps:{innerHTML:t._s(o)}})],1)],1)})),1)],1),e("div",{staticClass:"py-12"})],1),e("section",{attrs:{id:"stats"}},[e("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:500,src:"https://source.unsplash.com/yAXbfq1wI7I/1600x900"}})],1),e("section",{attrs:{id:"blog"}},[e("div",{staticClass:"py-12"}),e("v-container",[e("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("PRODUCTS")]),e("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[e("v-divider",{staticClass:"mb-1"}),e("v-divider")],1),e("v-row",t._l(t.articles,(function(a,s){var i=a.src,r=a.text,o=a.title;return e("v-col",{key:s,attrs:{cols:"12",md:"4"}},[e("v-img",{staticClass:"mb-4",attrs:{src:i,height:"275","max-width":"100%"}}),e("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(o)}}),e("div",{staticClass:"title font-weight-light mb-5",domProps:{textContent:t._s(r)}})],1)})),1)],1),e("div",{staticClass:"py-12"})],1),e("v-sheet",{attrs:{id:"contact",color:"#333333",dark:"",tag:"section",tile:""}},[e("div",{staticClass:"py-12"}),e("v-container",[e("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contact Me")]),e("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[e("v-divider",{staticClass:"mb-1"}),e("v-divider")],1),e("v-theme-provider",{attrs:{light:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{flat:"",label:"Name*",solo:""}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{flat:"",label:"Email*",solo:""}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{flat:"",label:"Subject*",solo:""}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-textarea",{attrs:{flat:"",label:"Message*",solo:""}})],1),e("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[e("v-btn",{attrs:{color:"accent","x-large":""}},[t._v("Submit")])],1)],1)],1)],1),e("div",{staticClass:"py-12"})],1)],1),e("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[e("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v("© "+t._s((new Date).getFullYear()))])])],1)],1)},n=[],l=e("94ed"),c={name:"HelloWorld",data:function(){return{svgPath:l["a"],articles:[{src:"https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",title:"",text:"GEL"},{src:"https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",title:"",text:"DISPENSER"},{src:"https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",title:"",text:"STAND"}],features:[{icon:"mdi-virus",title:"Kills Pathogens",text:"Contains 70% alcohol The use of hand sanitisers has been proven to reduce the risk of pathogens and cross contamination. Our Hand Sanitiser is effective against coronavirus"},{icon:"mdi-tools",title:"Easy to Install",text:"Practical and hygienic. Easy to top up. Wall mounted. Viewing window to check stock level. Capacity - 800 mL. Dimensions - H 250mm x W 125mm x D 136mm.Weight 700 grams"},{icon:"mdi-cellphone-basic",title:"Contact Info",text:"Ethan Werek <br/> Executive Maintenance Services <br/>  416-567-4811 <br/>  164 Torbay Rd, Markham, ON L3R 1G6, Canada"}],stats:[["Four Gallon <br/>  Case of Gel","$325"],["Wall Mount <br/>  Dispenser","$75"],["Metal Stand<br/>  (4.5 ft)","$145"]]}}},d=c,v=e("2877"),p=e("6544"),u=e.n(p),h=e("7496"),f=e("40dc"),m=e("8212"),b=e("8336"),g=e("b0af"),y=e("99d9"),x=e("62ad"),C=e("a523"),w=e("a75b"),_=e("ce7e"),V=e("553a"),k=e("132d"),P=e("adda"),S=e("8b9c"),E=e("6b53"),j=e("0fd9"),T=e("8dd9"),A=e("8654"),O=e("a844"),M=e("480e"),D=e("2a7f"),I=Object(v["a"])(d,o,n,!1,null,null,null),W=I.exports;u()(I,{VApp:h["a"],VAppBar:f["a"],VAvatar:m["a"],VBtn:b["a"],VCard:g["a"],VCardText:y["a"],VCardTitle:y["b"],VCol:x["a"],VContainer:C["a"],VContent:w["a"],VDivider:_["a"],VFooter:V["a"],VIcon:k["a"],VImg:P["a"],VParallax:S["a"],VResponsive:E["a"],VRow:j["a"],VSheet:T["a"],VTextField:A["a"],VTextarea:O["a"],VThemeProvider:M["a"],VToolbarTitle:D["a"]});var $={name:"App",components:{HelloWorld:W},data:function(){return{}}},H=$,L=e("2fa4"),N=Object(v["a"])(H,i,r,!1,null,null,null),R=N.exports;u()(N,{VApp:h["a"],VAppBar:f["a"],VBtn:b["a"],VContent:w["a"],VIcon:k["a"],VImg:P["a"],VSpacer:L["a"]});var B=e("f309");s["a"].use(B["a"]);var F=new B["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:F,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.a955d2ad.js.map