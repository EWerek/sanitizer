(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b02":function(t,e,a){t.exports=a.p+"img/casebottle1.f5ed57bf.png"},"20b9":function(t,e,a){},2907:function(t,e,a){t.exports=a.p+"img/hand1.73df39de.png"},4633:function(t,e,a){t.exports=a.p+"img/bottle500ml.49a5280d.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],s={name:"App",data:function(){return{}}},o=s,l=a("2877"),c=Object(l["a"])(o,r,i,!1,null,null,null),p=c.exports,u=a("f309");n["a"].use(u["a"]);var d=new u["a"]({}),m=a("67b0"),h=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("HeaderSidebar"),a("v-content",{staticStyle:{"padding-left":"0px","padding-top":"0px","padding-right":"0px"}},[a("section",{attrs:{id:"home"}},[a("Home")],1),a("section",{attrs:{id:"about"}},[a("About")],1),a("section",{attrs:{id:"Available"}},[a("Available")],1),a("section",{attrs:{id:"products"}},[a("Products")],1),a("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[a("Features")],1),a("section",{attrs:{id:"contact"}},[a("Contact")],1)]),a("PageFooter")],1)],1)},b=[],g=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 blue-grey--text",attrs:{"max-width":"720"}},[t._v("EXECUTIVE MAINTENANCE SERVICES")]),a("p",{class:[t.$vuetify.breakpoint.smAndDown?"body-1":"title"],domProps:{innerHTML:t._s(t.mainParagraph)}}),a("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"})],1)],1)],1)}),f=[],w={name:"about",data:function(){return{mainParagraph:"EMS is a family run business that has been providing cleaning services and supplies to the Greater Toronto Area for 40 years.<br/><br/> During the current pandemic, our experts have formulated and locally produced hand sanitizer that meets all of the guidelines set forward by Heath Canada. Our products have been issued Natural Product Numbers and have been vetted by the Canadian Food Inspection Agency (CFIA).<br/><br/>Our hand sanitizer is sold in several formats: Four gallon cases or single 500ml or 32oz bottles. In addition to the liquid, we offer automatic refillable dispensers which can be mounted directely to any wall by tape or screws. Alternatively, we also offer a metal stand if preferable to the wall mount"}}},y=w,x=a("6544"),C=a.n(x),_=a("a523"),A=a("ce7e"),B=a("6b53"),V=Object(l["a"])(y,g,f,!1,null,null,null),E=V.exports;C()(V,{VContainer:_["a"],VDivider:A["a"],VResponsive:B["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{"clipped-left":"",app:"",color:"white",height:"70"}},[n("v-icon",{attrs:{color:"warning",large:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v("mdi-crown")]),n("v-spacer"),n("v-avatar",{staticClass:"profile",attrs:{tile:"",width:"175",color:"grey lighten-5",size:"70"}},[n("v-img",{attrs:{src:a("bd51")}})],1),n("v-toolbar-title",{staticClass:"font-weight-black headline blue--text"})],1),n("v-navigation-drawer",{attrs:{clipped:"",left:"",app:"","mini-variant":"",color:"blue"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.navigate("/home","home")}}},[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.navigate("/home","about")}}},[t._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("About US")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.navigate("/home","products")}}},[t._v("mdi-cart")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Products")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.navigate("/shipping","home")}}},[t._v("mdi-truck")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Products")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.navigate("/home","contact")}}},[t._v("mdi-email")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1)],1)},M=[],P={name:"sidebar",data:function(){return{drawer:!1,viewPortSmall:this.$vuetify.breakpoint.smAndDown}},methods:{navigate:function(t,e){var a=this;this.$router.push({path:t}).catch((function(t){"Error"!=t.name&&console.error(t)})),setTimeout((function(){a.$vuetify.goTo("#"+e)}),0),console.log(e)}},mounted:function(){!1===this.viewPortSmall&&(this.drawer=!0)},watch:{viewPortSmall:function(){!1===this.viewPortSmall&&(this.drawer=!1)}}},S=P,G=a("40dc"),I=a("8212"),Q=a("132d"),T=a("adda"),j=a("8860"),D=a("da13"),N=a("1800"),U=a("5d23"),Y=a("f774"),L=a("2fa4"),R=a("2a7f"),$=Object(l["a"])(S,k,M,!1,null,null,null),F=$.exports;C()($,{VAppBar:G["a"],VAvatar:I["a"],VIcon:Q["a"],VImg:T["a"],VList:j["a"],VListItem:D["a"],VListItemAction:N["a"],VListItemContent:U["a"],VListItemTitle:U["b"],VNavigationDrawer:Y["a"],VSpacer:L["a"],VToolbarTitle:R["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{"no-gutters":""}},[n("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:a("680b")}},[n("v-theme-provider",{attrs:{dark:""}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"blue--text mx-auto",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",staticStyle:{"margin-bottom":"75px"},attrs:{cols:"12",tag:"h1"}},[n("span",{staticClass:"font-weight-light white--text",class:[t.$vuetify.breakpoint.smAndDown?"headline":"display-1"]},[t._v("EMS")]),n("br"),n("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-1\t":"display-3"]},[t._v("HAND SANITIZER")])]),n("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about")}}},[n("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1)},z=[],W={name:"home",data:function(){return{}}},X=W,H=a("8336"),J=a("62ad"),Z=a("0fd9"),K=a("480e"),q=Object(l["a"])(X,O,z,!1,null,null,null),tt=q.exports;C()(q,{VBtn:H["a"],VCol:J["a"],VContainer:_["a"],VIcon:Q["a"],VImg:T["a"],VRow:Z["a"],VThemeProvider:K["a"]});var et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"py-12"},[n("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 red--text",staticStyle:{"text-align":"center"},attrs:{"max-width":"720"}},[t._v("AVAILABLE")]),n("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?1900:500,src:a("2907")}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"mx-auto"},t._l(t.available,(function(e){var a=e[0],r=e[1];return n("v-col",{key:r,attrs:{cols:"20",md:"4"}},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"display-1 font-weight-black mb-4 blue--text",domProps:{innerHTML:t._s(a)}}),n("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(r)}})])])})),1)],1)],1)],1)],1)},at=[],nt={name:"available",data:function(){return{available:[["Single Bottles <br/>  500mL & 32oz","$12.99 & $19.99"],["Four Gallon <br/>  Case of Gel","$325"],["Wall Mount <br/>  Dispenser","$75"],["Metal Stand<br/>  (4.5 ft)","$145"],[],["Plexi-Glass<br/>  Cut & Installed","$300"]]}}},rt=nt,it=a("8b9c"),st=Object(l["a"])(rt,et,at,!1,null,null,null),ot=st.exports;C()(st,{VCol:J["a"],VContainer:_["a"],VParallax:it["a"],VResponsive:B["a"],VRow:Z["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("h2",{staticClass:"display-1 font-weight-bold mb-3 text-uppercase text-center"},[t._v("PRODUCTS")]),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 red--text",staticStyle:{"text-align":"center"},attrs:{"max-width":"720"}},[t._v("Made In Canada")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",{staticStyle:{"text-align":"center"}},t._l(t.products,(function(e,n){var r=e.src,i=e.text,s=e.title,o=e.button,l=e.modalProps;return a("v-col",{key:n,attrs:{cols:"12",md:"4"}},[a("v-img",{staticClass:"mb-4",attrs:{src:r,height:"70%","max-width":"100%"}},[a("v-container",[a("CadIcon",{staticClass:"float-sm-right"})],1)],1),a("h3",{staticClass:"font-weight-black text-uppercase",staticStyle:{"text-align":"center"},domProps:{textContent:t._s(s)}}),a("div",{staticClass:"title font-weight-light",domProps:{textContent:t._s(i)}}),a("Modal",t._b({staticClass:"py-3"},"Modal",l,!1)),a(o,{tag:"component"})],1)})),1),a("v-row",{staticStyle:{"text-align":"center"}},t._l(t.products2,(function(e,n){var r=e.src,i=e.text,s=e.title,o=e.button,l=e.modalProps;return a("v-col",{key:n,attrs:{cols:"12",md:"4"}},[a("v-img",{staticClass:"mb-4",attrs:{src:r,height:"70%","max-width":"100%"}},[a("v-container",[a("CadIcon",{staticClass:"float-sm-right"})],1)],1),a("h3",{staticClass:"font-weight-black text-uppercase",staticStyle:{"text-align":"center"},domProps:{textContent:t._s(s)}}),a("div",{staticClass:"title font-weight-light",domProps:{textContent:t._s(i)}}),""!=l?a("Modal",t._b({staticClass:"py-3"},"Modal",l,!1)):t._e(),a(o,{tag:"component"})],1)})),1),a("v-icon",{attrs:{"x-large":""},on:{click:function(e){return t.navigate("/shipping","home")}}},[t._v("mdi-truck")]),a("BtnCart",{staticClass:"py-4"}),a("BtnPayPal",{staticClass:"py-4"})],1)],1)},ct=[],pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"8C4F7BWE2U6SU"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],dt={name:"btnSingleBottle"},mt=dt,ht=Object(l["a"])(mt,pt,ut,!1,null,null,null),vt=ht.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"NRV6LX29MLXYL"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],ft={name:"btnSingleBottle"},wt=ft,yt=Object(l["a"])(wt,bt,gt,!1,null,null,null),xt=yt.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"47ASHS3P9X766"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],At={name:"btnCase"},Bt=At,Vt=Object(l["a"])(Bt,Ct,_t,!1,null,null,null),Et=Vt.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"J3VVM6NZC88MU"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],Pt={name:"btnCase"},St=Pt,Gt=Object(l["a"])(St,kt,Mt,!1,null,null,null),It=Gt.exports,Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----MIIG1QYJKoZIhvcNAQcEoIIGxjCCBsICAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAnsXjz7XHx1l49Rl6e+/sL1X5WbvOTPI76K2z28/KsJaId0N4xwXU8RwU00naXh1LEXm5XN+2SLf6ki2GlKTLCUN8eRqEce06InlWBUQNh7718R5wWT1wr5JxeUkUQ0zA07kgoetr6NRlUPd+3RL3QzdmAT8MMLNCXjfPl3OtybzELMAkGBSsOAwIaBQAwUwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAjL8GvruQBvYoAwVZIVd5AROW8JvEZa/NDJXycPyZd1jfiMxzKJ5D9fI1l7PXheNCNh8JksDAsZKnHCoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjAwNjA2MjIyNTE4WjAjBgkqhkiG9w0BCQQxFgQUNVxKsXO4zhkHGkLq7v5ZHBe4qJAwDQYJKoZIhvcNAQEBBQAEgYCdjSznjlsuFv5jfQ/90zGtROENU2eFponrkZToNJLxJYcoCjIB49xyKs8kVd2+nXmQjgQ+4HzLHzM+FnkPYs0ZYuU3Iz1lQgiWHrPdTgHcjJxHE1cgXnaa1wqZ0ZrzkvEcjxuLYO8ZEhBCKLWdh3C5MFsv1BtmaYvSL54gxcc1mA==-----END PKCS7-----"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],jt={name:"btnCase"},Dt=jt,Nt=Object(l["a"])(Dt,Qt,Tt,!1,null,null,null),Ut=Nt.exports,Yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{attrs:{border:"0",cellpadding:"10",cellspacing:"0",align:"center"}},[a("tr",[a("td",{attrs:{align:"center"}})]),a("tr",[a("td",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://www.paypal.com/webapps/mpp/paypal-popup",title:"How PayPal Works",onclick:"javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"}},[a("img",{attrs:{src:"https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg",border:"0",alt:"PayPal Acceptance Mark"}})])])])])}],Rt={name:"btnPayPal"},$t=Rt,Ft=Object(l["a"])($t,Yt,Lt,!1,null,null,null),Ot=Ft.exports,zt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"SRFHK449A6WUQ"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],Xt={name:"btnStand"},Ht=Xt,Jt=Object(l["a"])(Ht,zt,Wt,!1,null,null,null),Zt=Jt.exports,Kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},qt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"ZRN2FYPUPNRAJ"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],te={name:"btnStand"},ee=te,ae=Object(l["a"])(ee,Kt,qt,!1,null,null,null),ne=ae.exports,re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{"x-small":"",color:"blue",dark:""}},n),[t._v("More Info")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.product))]),a("v-card-text",{domProps:{innerHTML:t._s(t.info)}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Back")])],1)],1)],1)],1)},ie=[],se={data:function(){return{dialog:!1}},props:{product:{type:String},info:{type:String}}},oe=se,le=a("b0af"),ce=a("99d9"),pe=a("169a"),ue=Object(l["a"])(oe,re,ie,!1,null,null,null),de=ue.exports;C()(ue,{VBtn:H["a"],VCard:le["a"],VCardActions:ce["a"],VCardText:ce["b"],VCardTitle:ce["c"],VDialog:pe["a"],VRow:Z["a"],VSpacer:L["a"]});var me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-avatar",{attrs:{size:"70"}},[n("v-img",{attrs:{src:a("c4ab")}})],1)},he=[],ve={name:"canada"},be=ve,ge=Object(l["a"])(be,me,he,!1,null,null,null),fe=ge.exports;C()(ge,{VAvatar:I["a"],VImg:T["a"]});var we={name:"products",components:{BtnBottle500ml:vt,BtnBottle32oz:xt,BtnCase:Et,BtnDispenser:It,BtnCart:Ut,BtnPayPal:Ot,BtnStand:Zt,BtnGlass:ne,Modal:de,CadIcon:fe},data:function(){return{products:[{src:a("1b02"),title:"Case Four 1 Gallon Bottles",text:"$325",button:"BtnCase",modalProps:{product:"Four Gallon Case",info:"The case comes in four one gallon bottles.<br/><br/>Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "}},{src:a("5c59"),title:"Single Bottle 32oz",text:"$19.99",button:"BtnBottle32oz",modalProps:{product:"32oz Bottle",info:"Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "}},{src:a("4633"),title:"Single Bottle 500ml",text:"$12.99",button:"BtnBottle500ml",modalProps:{product:"500 ml Bottle",info:"Our Gel conforms to all health Canada guidelines and has been certified by the Canadian Food Inspection Agency (CFIA) including a Natural Product Number (NPN).<br/><br/>The gel contains Ethyl alcohol, Isopropyl alcohol, carbomer, Glycerine and Triethanolamine "}}],products2:[{src:a("6873"),title:"Wall Mount Dispenser",text:"$75",button:"BtnDispenser",modalProps:{product:"Wall Mount Dispenser",info:"Our Dispensers are easy to install and top up. <br/><br/>Wall mounted with tape or screws. Viewing window to check stock level.<br/><br/> Capacity - 800 mL. Dimensions - H 250mm x W 125mm x D 136mm.Weight 700 grams"}},{src:a("a445"),title:"Metal Stand",text:"$145",button:"BtnStand",modalProps:{product:"Metal Stand",info:"Specs/Shipping"}},{src:a("ebec"),title:"Plexi-Glass Shield (Installed)",text:"$300 per sheet",button:"BtnGlass",modalProps:{product:"Plexi-Glass Shield",info:"The plexi-glass comes in 30 x 30 inch sheets and can be combined to make custom size shields.<br/><br/>The plexi-glass can also be cut to allow small objects to be passed through.<br/><br/>Delivery and installation within the GTA in included. "}}]}},methods:{navigate:function(t,e){var a=this;this.$router.push({path:t}).catch((function(t){"Error"!=t.name&&console.error(t)})),setTimeout((function(){a.$vuetify.goTo("#"+e)}),0),console.log(e)}}},ye=we,xe=(a("decd"),Object(l["a"])(ye,lt,ct,!1,null,null,null)),Ce=xe.exports;C()(xe,{VCol:J["a"],VContainer:_["a"],VDivider:A["a"],VIcon:Q["a"],VImg:T["a"],VResponsive:B["a"],VRow:Z["a"]});var _e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-1 font-weight-bold mb-3"},[t._v("FEATURES")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-row",t._l(t.features,(function(e,n){var r=e.icon,i=e.title,s=e.text;return a("v-col",{key:n,attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[a("v-theme-provider",{attrs:{dark:""}},[a("div",[a("v-avatar",{attrs:{color:"primary",size:"88"}},[a("v-icon",{attrs:{large:""},domProps:{textContent:t._s(r)}})],1)],1)]),a("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(i)}}),a("v-card-text",{staticClass:"subtitle-1",domProps:{innerHTML:t._s(s)}})],1)],1)})),1)],1),a("div",{staticClass:"py-12"})],1)},Ae=[],Be={name:"features",data:function(){return{features:[{icon:"mdi-virus",title:"Kills Pathogens",text:"Our gel contains 70% alcohol The use of hand sanitizers has been proven to reduce the risk of pathogens and cross contamination. Our Hand Sanitizer is effective against coronavirus"},{icon:"mdi-truck",title:"Delivery",text:"We delivery for free within the GTA. Normal delivery times are 2-4 bussiness days. Please call us for orders outside the GTA."},{icon:"mdi-cellphone-basic",title:"Contact Info",text:"Ethan Werek <br/> Executive Maintenance Services <br/>  416-567-4811 <br/>  164 Torbay Rd, Markham, ON L3R 1G6, Canada"}]}}},Ve=Be,Ee=Object(l["a"])(Ve,_e,Ae,!1,null,null,null),ke=Ee.exports;C()(Ee,{VAvatar:I["a"],VCard:le["a"],VCardText:ce["b"],VCardTitle:ce["c"],VCol:J["a"],VContainer:_["a"],VDivider:A["a"],VIcon:Q["a"],VResponsive:B["a"],VRow:Z["a"],VThemeProvider:K["a"]});var Me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-sheet",{attrs:{id:"contact",color:"#333333",dark:"",tag:"section",tile:""}},[a("div",{staticClass:"py-12"}),a("v-container",[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contact Us")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-theme-provider",{attrs:{light:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Name*",solo:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{flat:"",label:"Email*",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{flat:"",label:"Message*",solo:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"accent","x-large":""},on:{click:t.sendEmail}},[t._v("Submit")])],1)],1)],1)],1),a("div",{staticClass:"py-12"})],1)],1)},Pe=[],Se=a("0f91"),Ge=a.n(Se),Ie={name:"contact",data:function(){return{message:"",email:"",name:"",template_params:{reply_to:"",from_name:"",to_name:"",message_html:""}}},methods:{sendEmail:function(){var t=this;this.setTemplate(),Ge.a.send("default_service","template_e5G0Xaq6",this.template_params,"user_2VhHgP2YBwBzo9HUU1b8B").then((function(e){console.log("SUCCESS!",e.status,e.text),alert("Thanks, We will resond shortly"),t.clearform()}),(function(t){console.log("FAILED...",t),alert("Message failed - please try again")}))},setTemplate:function(){this.template_params.message_html=this.message,this.template_params.reply_to=this.email,this.template_params.from_name=this.name},clearform:function(){this.name="",this.email="",this.name=""}}},Qe=Ie,Te=a("8dd9"),je=a("8654"),De=a("a844"),Ne=Object(l["a"])(Qe,Me,Pe,!1,null,null,null),Ue=Ne.exports;C()(Ne,{VBtn:H["a"],VCol:J["a"],VContainer:_["a"],VDivider:A["a"],VResponsive:B["a"],VRow:Z["a"],VSheet:Te["a"],VTextField:je["a"],VTextarea:De["a"],VThemeProvider:K["a"]});var Ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[a("v-icon",{attrs:{color:"orange"}},[t._v("mdi-crown")]),a("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v("SanitizerKing "+t._s((new Date).getFullYear()))]),a("v-icon",{attrs:{color:"orange"}},[t._v("mdi-crown")])],1)},Le=[],Re={name:"pageFooter",data:function(){return{}}},$e=Re,Fe=a("553a"),Oe=Object(l["a"])($e,Ye,Le,!1,null,null,null),ze=Oe.exports;C()(Oe,{VFooter:Fe["a"],VIcon:Q["a"]});var We={name:"SanitizerKing",components:{About:E,HeaderSidebar:F,Home:tt,Available:ot,Products:Ce,Features:ke,Contact:Ue,PageFooter:ze},data:function(){return{}},methods:{setLoaded:function(){window.paypal.Buttons({style:{shape:"pill",color:"silver",layout:"vertical",label:"pay"},createOrder:function(t,e){return e.order.create({purchase_units:[{amount:{value:"12.99"}}]})},onApprove:function(t,e){return e.order.capture().then((function(t){alert("Transaction completed by "+t.payer.name.given_name+"!")}))}}).render(this.$refs.paypalButton)}},mounted:function(){},computed:{}},Xe=We,He=a("7496"),Je=a("a75b"),Ze=Object(l["a"])(Xe,v,b,!1,null,null,null),Ke=Ze.exports;C()(Ze,{VApp:He["a"],VContent:Je["a"]});var qe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("HeaderSidebar"),n("section",{attrs:{id:"home"}},[n("v-content",[n("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:a("d400")}},[n("v-theme-provider",{attrs:{dark:""}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"blue--text mx-auto",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",staticStyle:{"margin-bottom":"75px"},attrs:{cols:"12",tag:"h1"}},[n("span",{staticClass:"font-weight-light black--text",class:[t.$vuetify.breakpoint.smAndDown?"headline":"display-1"]},[t._v("We delivery for free within the GTA. Normal delivery times are 2-4 bussiness days. Please call us for orders outside the GTA.")])])],1)],1)],1)],1)],1)],1),n("PageFooter")],1)],1)},ta=[],ea={name:"Shipping",components:{HeaderSidebar:F,PageFooter:ze},data:function(){return{}},methods:{},mounted:function(){},computed:{}},aa=ea,na=Object(l["a"])(aa,qe,ta,!1,null,null,null),ra=na.exports;C()(na,{VApp:He["a"],VCol:J["a"],VContainer:_["a"],VContent:Je["a"],VImg:T["a"],VRow:Z["a"],VThemeProvider:K["a"]}),n["a"].use(h["a"]);var ia=new h["a"]({routes:[{path:"/",component:Ke},{path:"/home",component:Ke},{path:"/shipping",component:ra}]});n["a"].use(m["a"]),n["a"].config.productionTip=!0,new n["a"]({vuetify:d,router:ia,render:function(t){return t(p)}}).$mount("#app")},"5c59":function(t,e,a){t.exports=a.p+"img/bottle32oz.037cae9e.png"},"680b":function(t,e,a){t.exports=a.p+"img/covid.e60e9f15.png"},6873:function(t,e,a){t.exports=a.p+"img/dispenser1.8005b4f6.png"},a445:function(t,e,a){t.exports=a.p+"img/stand.ab1d9b98.png"},bd51:function(t,e,a){t.exports=a.p+"img/emslogo.0aa568f9.jpg"},c4ab:function(t,e,a){t.exports=a.p+"img/can.1712cee0.png"},d400:function(t,e,a){t.exports=a.p+"img/unresponse.45e9ea00.png"},decd:function(t,e,a){"use strict";var n=a("20b9"),r=a.n(n);r.a},ebec:function(t,e,a){t.exports=a.p+"img/glass.623acff2.png"}});
//# sourceMappingURL=app.2abc0c50.js.map