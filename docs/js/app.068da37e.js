(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"15e8":function(t,e,a){t.exports=a.p+"img/unPoster.09f115de.jpg"},"1b02":function(t,e,a){t.exports=a.p+"img/casebottle1.f5ed57bf.png"},2907:function(t,e,a){t.exports=a.p+"img/hand1.73df39de.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("MainPage")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("HeaderSidebar"),a("v-content",{staticStyle:{"padding-left":"0px","padding-top":"0px","padding-right":"0px"}},[a("section",{attrs:{id:"home"}},[a("Home")],1),a("section",{attrs:{id:"about"}},[a("About")],1),a("section",{attrs:{id:"Available"}},[a("Available")],1),a("section",{attrs:{id:"products"}},[a("Products")],1),a("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[a("Features")],1),a("section",{attrs:{id:"contactus"}},[a("Contact")],1)]),a("PageFooter")],1)],1)},l=[],o=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 blue-grey--text",attrs:{"max-width":"720"}},[t._v("EXECUTIVE MAINTENANCE SERVICES")]),a("p",{class:[t.$vuetify.breakpoint.smAndDown?"body-1":"title"],domProps:{innerHTML:t._s(t.mainParagraph)}}),a("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"})],1)],1)],1)}),c=[],p={name:"about",data:function(){return{mainParagraph:"EMS is a family run business that has been providing cleaning services and supplies to the Greater Toronto Area for 40 years.<br/><br/> During the current pandemic, our experts have formulated and locally produced hand sanitizer that meets all of the guidelines set forward by Heath Canada. Our products have been issued Natural Product Numbers and have been vetted by the Canadian Food Inspection Agency (CFIA).<br/><br/>Our hand sanitizer is sold in several formats: Four gallon cases or single 500ml or 32oz bottles. In addition to the liquid, we offer automatic refillable dispensers which can be mounted directely to any wall by tape or screws. Alternatively, we also offer a metal stand if preferable to the wall mount"}}},u=p,d=a("2877"),m=a("6544"),v=a.n(m),h=a("a523"),b=a("ce7e"),f=a("6b53"),g=Object(d["a"])(u,o,c,!1,null,null,null),w=g.exports;v()(g,{VContainer:h["a"],VDivider:b["a"],VResponsive:f["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{"clipped-left":"",app:"",color:"white",height:"100"}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-spacer"),n("v-avatar",{staticClass:"profile",attrs:{tile:"",width:"175",color:"grey lighten-5",size:"70"}},[n("v-img",{attrs:{src:a("bd51")}})],1),n("v-toolbar-title",{staticClass:"font-weight-black headline blue--text"})],1),n("v-navigation-drawer",{attrs:{clipped:"",left:"",app:"","mini-variant":"",color:"blue"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.$vuetify.goTo("#home")}}},[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.$vuetify.goTo("#about")}}},[t._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("About US")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.$vuetify.goTo("#products")}}},[t._v("mdi-cart")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Products")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.$vuetify.goTo("#contactus")}}},[t._v("mdi-email")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1)],1)},C=[],x={name:"sidebar",data:function(){return{drawer:!1,viewPortSmall:this.$vuetify.breakpoint.smAndDown}},mounted:function(){!1===this.viewPortSmall&&(this.drawer=!0)},watch:{viewPortSmall:function(){!1===this.viewPortSmall&&(this.drawer=!1)}}},_=x,A=a("40dc"),B=a("5bc1"),E=a("8212"),V=a("132d"),Q=a("adda"),k=a("8860"),M=a("da13"),G=a("1800"),S=a("5d23"),D=a("f774"),P=a("2fa4"),j=a("2a7f"),I=Object(d["a"])(_,y,C,!1,null,null,null),U=I.exports;v()(I,{VAppBar:A["a"],VAppBarNavIcon:B["a"],VAvatar:E["a"],VIcon:V["a"],VImg:Q["a"],VList:k["a"],VListItem:M["a"],VListItemAction:G["a"],VListItemContent:S["a"],VListItemTitle:S["b"],VNavigationDrawer:D["a"],VSpacer:P["a"],VToolbarTitle:j["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{"no-gutters":""}},[n("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:a("680b")}},[n("v-theme-provider",{attrs:{dark:""}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"blue--text mx-auto",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",staticStyle:{"margin-bottom":"75px"},attrs:{cols:"12",tag:"h1"}},[n("span",{staticClass:"font-weight-light white--text",class:[t.$vuetify.breakpoint.smAndDown?"headline":"display-1"]},[t._v("EMS")]),n("br"),n("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-1\t":"display-3"]},[t._v("HAND SANITIZER")])]),n("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about")}}},[n("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1)},N=[],Y={name:"home",data:function(){return{}}},L=Y,R=a("8336"),z=a("62ad"),$=a("0fd9"),O=a("480e"),W=Object(d["a"])(L,T,N,!1,null,null,null),F=W.exports;v()(W,{VBtn:R["a"],VCol:z["a"],VContainer:h["a"],VIcon:V["a"],VImg:Q["a"],VRow:$["a"],VThemeProvider:O["a"]});var X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 red--text",staticStyle:{"text-align":"center"},attrs:{"max-width":"720"}},[t._v("AVAILABLE")]),n("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?1900:500,src:a("2907")}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"mx-auto"},t._l(t.available,(function(e){var a=e[0],s=e[1];return n("v-col",{key:s,attrs:{cols:"20",md:"4"}},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"display-1 font-weight-black mb-4 blue--text",domProps:{innerHTML:t._s(a)}}),n("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(s)}})])])})),1)],1)],1)],1),n("div",{staticClass:"py-12"})],1)},H=[],J={name:"available",data:function(){return{available:[["Single Bottles <br/>  500mL & 32oz","$12.99 & $19.99"],["Four Gallon <br/>  Case of Gel","$325"],["Wall Mount <br/>  Dispenser","$75"],["Metal Stand<br/>  (4.5 ft)","$145"],[],["Plexi-Glass<br/>  Cut & Installed","$300"]]}}},Z=J,K=a("8b9c"),q=Object(d["a"])(Z,X,H,!1,null,null,null),tt=q.exports;v()(q,{VCol:z["a"],VContainer:h["a"],VParallax:K["a"],VResponsive:f["a"],VRow:$["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("PRODUCTS")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.products,(function(e,n){var s=e.src,r=e.text,i=e.title,l=e.button;return a("v-col",{key:n,attrs:{cols:"12",md:"4"}},[a("v-img",{staticClass:"mb-4",attrs:{src:s,height:"70%","max-width":"100%"}}),a("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(i)}}),a("div",{staticClass:"title font-weight-light mb-5",domProps:{textContent:t._s(r)}}),a(l,{tag:"component"})],1)})),1),a("v-row",t._l(t.products2,(function(e,n){var s=e.src,r=e.text,i=e.title,l=e.button;return a("v-col",{key:n,attrs:{cols:"12",md:"4"}},[a("v-img",{staticClass:"mb-4",attrs:{src:s,height:"80%","max-width":"100%"}}),a("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(i)}}),a("div",{staticClass:"title font-weight-light mb-5",domProps:{textContent:t._s(r)}}),a(l,{tag:"component"})],1)})),1),a("div",{staticClass:"py-12"}),a("BtnCart"),a("BtnPayPal"),a("div",{ref:"paypalButton",staticStyle:{"text-align":"center"}})],1),a("div",{staticClass:"py-12"})],1)},at=[],nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"8C4F7BWE2U6SU"}}),a("table",[a("tr",[a("td",[a("input",{attrs:{type:"hidden",name:"on0",value:"Choose Size"}}),t._v("Choose Size ")])]),a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"500 ml"}},[t._v("500 ml $12.99 CAD")]),a("option",{attrs:{value:"32 oz"}},[t._v("32 oz $19.99 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],rt={name:"btnSingleBottle"},it=rt,lt=Object(d["a"])(it,nt,st,!1,null,null,null),ot=lt.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"47ASHS3P9X766"}}),a("table",[a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"4 one gallon bottles"}},[t._v("4 one gallon bottles $325.00 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],ut={name:"btnCase"},dt=ut,mt=Object(d["a"])(dt,ct,pt,!1,null,null,null),vt=mt.exports,ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"JPW5787RNLLLU"}}),a("table",[a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"800ml"}},[t._v("800ml $75.00 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],ft={name:"btnCase"},gt=ft,wt=Object(d["a"])(gt,ht,bt,!1,null,null,null),yt=wt.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----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-----END PKCS7-----"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],_t={name:"btnCase"},At=_t,Bt=Object(d["a"])(At,Ct,xt,!1,null,null,null),Et=Bt.exports,Vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Qt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{attrs:{border:"0",cellpadding:"10",cellspacing:"0",align:"center"}},[a("tr",[a("td",{attrs:{align:"center"}})]),a("tr",[a("td",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://www.paypal.com/webapps/mpp/paypal-popup",title:"How PayPal Works",onclick:"javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"}},[a("img",{attrs:{src:"https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg",border:"0",alt:"PayPal Acceptance Mark"}})])])])])}],kt={name:"btnPayPal"},Mt=kt,Gt=Object(d["a"])(Mt,Vt,Qt,!1,null,null,null),St=Gt.exports,Dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"SRFHK449A6WUQ"}}),a("table",[a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"Stand"}},[t._v("Stand $145.00 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],jt={name:"btnStand"},It=jt,Ut=Object(d["a"])(It,Dt,Pt,!1,null,null,null),Tt=Ut.exports,Nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"ZRN2FYPUPNRAJ"}}),a("table",[a("tr",[a("td",[a("input",{attrs:{type:"hidden",name:"on0",value:"Plexi-Glass (30x30 in)"}}),t._v("Plexi-Glass (30x30 in) ")])]),a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"Cut and Installed"}},[t._v("Cut and Installed $300.00 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],Lt={name:"btnStand"},Rt=Lt,zt=Object(d["a"])(Rt,Nt,Yt,!1,null,null,null),$t=zt.exports,Ot={name:"products",components:{BtnSingleBottle:ot,BtnCase:vt,BtnDispenser:yt,BtnCart:Et,BtnPayPal:St,BtnStand:Tt,BtnGlass:$t},data:function(){return{products:[{src:a("7183"),title:"Single Bottles",button:"BtnSingleBottle"},{src:a("1b02"),title:"Four Gallon Case",button:"BtnCase"},{src:a("6873"),title:"Wall Mount Dispenser",button:"BtnDispenser"}],products2:[{src:a("a445"),title:"Metal Stand",button:"BtnStand"},{src:a("ebec"),title:"Plexi-Glass Shield",button:"BtnGlass"},{src:a("15e8"),title:"",button:""}]}}},Wt=Ot,Ft=Object(d["a"])(Wt,et,at,!1,null,null,null),Xt=Ft.exports;v()(Ft,{VCol:z["a"],VContainer:h["a"],VDivider:b["a"],VImg:Q["a"],VResponsive:f["a"],VRow:$["a"]});var Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("FEATURES")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.features,(function(e,n){var s=e.icon,r=e.title,i=e.text;return a("v-col",{key:n,attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[a("v-theme-provider",{attrs:{dark:""}},[a("div",[a("v-avatar",{attrs:{color:"primary",size:"88"}},[a("v-icon",{attrs:{large:""},domProps:{textContent:t._s(s)}})],1)],1)]),a("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(r)}}),a("v-card-text",{staticClass:"subtitle-1",domProps:{innerHTML:t._s(i)}})],1)],1)})),1)],1),a("div",{staticClass:"py-12"})],1)},Jt=[],Zt={name:"features",data:function(){return{features:[{icon:"mdi-virus",title:"Kills Pathogens",text:"Our gel contains 70% alcohol The use of hand sanitizers has been proven to reduce the risk of pathogens and cross contamination. Our Hand Sanitizer is effective against coronavirus"},{icon:"mdi-tools",title:"Easy to Install",text:"Our Dispensers are easy to install and top up. Wall mounted with tape or screws. Viewing window to check stock level. Capacity - 800 mL. Dimensions - H 250mm x W 125mm x D 136mm.Weight 700 grams"},{icon:"mdi-cellphone-basic",title:"Contact Info",text:"Ethan Werek <br/> Executive Maintenance Services <br/>  416-567-4811 <br/>  164 Torbay Rd, Markham, ON L3R 1G6, Canada"}]}}},Kt=Zt,qt=a("b0af"),te=a("99d9"),ee=Object(d["a"])(Kt,Ht,Jt,!1,null,null,null),ae=ee.exports;v()(ee,{VAvatar:E["a"],VCard:qt["a"],VCardText:te["a"],VCardTitle:te["b"],VCol:z["a"],VContainer:h["a"],VDivider:b["a"],VIcon:V["a"],VResponsive:f["a"],VRow:$["a"],VThemeProvider:O["a"]});var ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-sheet",{attrs:{id:"contact",color:"#333333",dark:"",tag:"section",tile:""}},[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contact Us")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-theme-provider",{attrs:{light:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Name*",solo:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Email*",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{flat:"",label:"Message*",solo:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"accent","x-large":""},on:{click:t.sendEmail}},[t._v("Submit")])],1)],1)],1)],1),a("div",{staticClass:"py-12"})],1)],1)},se=[],re=a("0f91"),ie=a.n(re),le={name:"home",data:function(){return{message:"",email:"",name:"",template_params:{reply_to:"",from_name:"",to_name:"",message_html:""}}},methods:{sendEmail:function(){var t=this;this.setTemplate(),ie.a.send("default_service","template_e5G0Xaq6",this.template_params,"user_2VhHgP2YBwBzo9HUU1b8B").then((function(e){console.log("SUCCESS!",e.status,e.text),alert("Thanks, We will resond shortly"),t.clearform()}),(function(t){console.log("FAILED...",t),alert("Message failed - please try again")}))},setTemplate:function(){this.template_params.message_html=this.message,this.template_params.reply_to=this.email,this.template_params.from_name=this.name},clearform:function(){this.name="",this.email="",this.name=""}}},oe=le,ce=a("8dd9"),pe=a("8654"),ue=a("a844"),de=Object(d["a"])(oe,ne,se,!1,null,null,null),me=de.exports;v()(de,{VBtn:R["a"],VCol:z["a"],VContainer:h["a"],VDivider:b["a"],VResponsive:f["a"],VRow:$["a"],VSheet:ce["a"],VTextField:pe["a"],VTextarea:ue["a"],VThemeProvider:O["a"]});var ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[a("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v("SanitizerKing © "+t._s((new Date).getFullYear()))])])},he=[],be={name:"footer",data:function(){return{}}},fe=be,ge=a("553a"),we=Object(d["a"])(fe,ve,he,!1,null,null,null),ye=we.exports;v()(we,{VFooter:ge["a"]});var Ce={name:"SanitizerKing",components:{About:w,HeaderSidebar:U,Home:F,Available:tt,Products:Xt,Features:ae,Contact:me,PageFooter:ye},data:function(){return{}},methods:{setLoaded:function(){window.paypal.Buttons({style:{shape:"pill",color:"silver",layout:"vertical",label:"pay"},createOrder:function(t,e){return e.order.create({purchase_units:[{amount:{value:"12.99"}}]})},onApprove:function(t,e){return e.order.capture().then((function(t){alert("Transaction completed by "+t.payer.name.given_name+"!")}))}}).render(this.$refs.paypalButton)}},mounted:function(){},computed:{}},xe=Ce,_e=a("7496"),Ae=a("a75b"),Be=Object(d["a"])(xe,i,l,!1,null,null,null),Ee=Be.exports;v()(Be,{VApp:_e["a"],VContent:Ae["a"]});var Ve={name:"App",components:{MainPage:Ee},data:function(){return{}}},Qe=Ve,ke=Object(d["a"])(Qe,s,r,!1,null,null,null),Me=ke.exports;v()(ke,{VApp:_e["a"],VContent:Ae["a"]});var Ge=a("f309");n["a"].use(Ge["a"]);var Se=new Ge["a"]({}),De=a("67b0");n["a"].use(De["a"]),n["a"].config.productionTip=!1,new n["a"]({vuetify:Se,render:function(t){return t(Me)}}).$mount("#app")},"680b":function(t,e,a){t.exports=a.p+"img/covid.e60e9f15.png"},6873:function(t,e,a){t.exports=a.p+"img/dispenser1.8005b4f6.png"},7183:function(t,e,a){t.exports=a.p+"img/twobottles.318cff2e.png"},a445:function(t,e,a){t.exports=a.p+"img/stand.ab1d9b98.png"},bd51:function(t,e,a){t.exports=a.p+"img/emslogo.0aa568f9.jpg"},ebec:function(t,e,a){t.exports=a.p+"img/glass.623acff2.png"}});
//# sourceMappingURL=app.068da37e.js.map