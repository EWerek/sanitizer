(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"15e8":function(t,e,a){t.exports=a.p+"img/unPoster.09f115de.jpg"},"1b02":function(t,e,a){t.exports=a.p+"img/casebottle1.f5ed57bf.png"},2907:function(t,e,a){t.exports=a.p+"img/hand1.73df39de.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-content",[a("SinglePage")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-navigation-drawer",{attrs:{clipped:"",left:"",app:"","mini-variant":"",color:"blue"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.$vuetify.goTo("#home")}}},[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.$vuetify.goTo("#about")}}},[t._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("About US")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.$vuetify.goTo("#products")}}},[t._v("mdi-cart")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Products")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",{on:{click:function(e){return t.$vuetify.goTo("#contactus")}}},[t._v("mdi-email")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1),n("v-app-bar",{attrs:{"clipped-left":"",app:"",color:"white",height:"100"}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-spacer"),n("v-avatar",{staticClass:"profile",attrs:{tile:"",width:"175",color:"grey lighten-5",size:"70"}},[n("v-img",{attrs:{src:a("bd51")}})],1),n("v-toolbar-title",{staticClass:"font-weight-black headline blue--text"})],1),n("v-content",{staticStyle:{"padding-left":"0px","padding-top":"0px","padding-right":"0px"}},[n("section",{attrs:{id:"home"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-img",{attrs:{"min-height":"calc(100vh - "+t.$vuetify.application.top+"px)",src:a("680b")}},[n("v-theme-provider",{attrs:{dark:""}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"blue--text mx-auto",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",staticStyle:{"margin-bottom":"75px"},attrs:{cols:"12",tag:"h1"}},[n("span",{staticClass:"font-weight-light white--text",class:[t.$vuetify.breakpoint.smAndDown?"headline":"display-1"]},[t._v("EMS")]),n("br"),n("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-1\t":"display-3"]},[t._v("HAND SANITIZER")])]),n("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about")}}},[n("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),n("section",{attrs:{id:"about"}},[n("div",{staticClass:"py-12"}),n("v-container",{staticClass:"text-center"},[n("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 blue-grey--text",attrs:{"max-width":"720"}},[t._v("EXECUTIVE MAINTENANCE SERVICES")]),n("p",{class:[t.$vuetify.breakpoint.smAndDown?"body-1":"title"],domProps:{innerHTML:t._s(t.mainParagraph)}}),n("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[n("v-divider",{staticClass:"mb-1"})],1),n("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 red--text",attrs:{"max-width":"720"}},[t._v("AVAILABLE")]),n("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?1900:500,src:a("2907")}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"mx-auto"},t._l(t.stats,(function(e){var a=e[0],s=e[1];return n("v-col",{key:s,attrs:{cols:"20",md:"4"}},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"display-1 font-weight-black mb-4 blue--text",domProps:{innerHTML:t._s(a)}}),n("div",{staticClass:"title font-weight-regular text-uppercase",domProps:{textContent:t._s(s)}})])])})),1)],1)],1)],1),n("div",{staticClass:"py-12"})],1),n("section",{attrs:{id:"products"}},[n("div",{staticClass:"py-12"}),n("v-container",[n("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("PRODUCTS")]),n("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[n("v-divider",{staticClass:"mb-1"}),n("v-divider")],1),n("v-row",t._l(t.products,(function(e,a){var s=e.src,i=e.text,r=e.title,o=e.button;return n("v-col",{key:a,attrs:{cols:"12",md:"4"}},[n("v-img",{staticClass:"mb-4",attrs:{src:s,height:"70%","max-width":"100%"}}),n("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(r)}}),n("div",{staticClass:"title font-weight-light mb-5",domProps:{textContent:t._s(i)}}),n(o,{tag:"component"})],1)})),1),n("v-row",t._l(t.products2,(function(e,a){var s=e.src,i=e.text,r=e.title,o=e.button;return n("v-col",{key:a,attrs:{cols:"12",md:"4"}},[n("v-img",{staticClass:"mb-4",attrs:{src:s,height:"80%","max-width":"100%"}}),n("h3",{staticClass:"font-weight-black mb-4 text-uppercase",domProps:{textContent:t._s(r)}}),n("div",{staticClass:"title font-weight-light mb-5",domProps:{textContent:t._s(i)}}),n(o,{tag:"component"})],1)})),1),n("BtnCart"),n("BtnPayPal"),n("div",{ref:"paypalButton",staticStyle:{"text-align":"center"}})],1),n("div",{staticClass:"py-12"})],1),n("section",{staticClass:"grey lighten-3",attrs:{id:"features"}},[n("div",{staticClass:"py-12"}),n("v-container",{staticClass:"text-center"},[n("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("FEATURES")]),n("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[n("v-divider",{staticClass:"mb-1"}),n("v-divider")],1),n("v-row",t._l(t.features,(function(e,a){var s=e.icon,i=e.title,r=e.text;return n("v-col",{key:a,attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"py-12 px-4",attrs:{color:"grey lighten-5",flat:""}},[n("v-theme-provider",{attrs:{dark:""}},[n("div",[n("v-avatar",{attrs:{color:"primary",size:"88"}},[n("v-icon",{attrs:{large:""},domProps:{textContent:t._s(s)}})],1)],1)]),n("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",domProps:{textContent:t._s(i)}}),n("v-card-text",{staticClass:"subtitle-1",domProps:{innerHTML:t._s(r)}})],1)],1)})),1)],1),n("div",{staticClass:"py-12"})],1),n("section",{attrs:{id:"contactus"}},[n("v-sheet",{attrs:{id:"contact",color:"#333333",dark:"",tag:"section",tile:""}},[n("div",{staticClass:"py-12"}),n("v-container",[n("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contact Us")]),n("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[n("v-divider",{staticClass:"mb-1"}),n("v-divider")],1),n("v-theme-provider",{attrs:{light:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{flat:"",label:"Name*",solo:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{flat:"",label:"Email*",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{flat:"",label:"Message*",solo:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),n("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"accent","x-large":""},on:{click:t.sendEmail}},[t._v("Submit")])],1)],1)],1)],1),n("div",{staticClass:"py-12"})],1)],1)]),n("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"100"}},[n("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[t._v("© "+t._s((new Date).getFullYear()))])])],1)],1)},o=[],l=(a("b0c0"),a("0f91")),c=a.n(l),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"8C4F7BWE2U6SU"}}),a("table",[a("tr",[a("td",[a("input",{attrs:{type:"hidden",name:"on0",value:"Choose Size"}}),t._v("Choose Size ")])]),a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"500 ml"}},[t._v("500 ml $12.99 CAD")]),a("option",{attrs:{value:"32 oz"}},[t._v("32 oz $19.99 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],u={name:"btnSingleBottle"},m=u,v=a("2877"),h=Object(v["a"])(m,p,d,!1,null,null,null),b=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"47ASHS3P9X766"}}),a("table",[a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"4 one gallon bottles"}},[t._v("4 one gallon bottles $325.00 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],w={name:"btnCase"},y=w,C=Object(v["a"])(y,g,f,!1,null,null,null),x=C.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"JPW5787RNLLLU"}}),a("table",[a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"800ml"}},[t._v("800ml $75.00 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],B={name:"btnCase"},E=B,k=Object(v["a"])(E,A,_,!1,null,null,null),V=k.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----MIIG1QYJKoZIhvcNAQcEoIIGxjCCBsICAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAnsXjz7XHx1l49Rl6e+/sL1X5WbvOTPI76K2z28/KsJaId0N4xwXU8RwU00naXh1LEXm5XN+2SLf6ki2GlKTLCUN8eRqEce06InlWBUQNh7718R5wWT1wr5JxeUkUQ0zA07kgoetr6NRlUPd+3RL3QzdmAT8MMLNCXjfPl3OtybzELMAkGBSsOAwIaBQAwUwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAjL8GvruQBvYoAwVZIVd5AROW8JvEZa/NDJXycPyZd1jfiMxzKJ5D9fI1l7PXheNCNh8JksDAsZKnHCoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjAwNjA2MjIyNTE4WjAjBgkqhkiG9w0BCQQxFgQUNVxKsXO4zhkHGkLq7v5ZHBe4qJAwDQYJKoZIhvcNAQEBBQAEgYCdjSznjlsuFv5jfQ/90zGtROENU2eFponrkZToNJLxJYcoCjIB49xyKs8kVd2+nXmQjgQ+4HzLHzM+FnkPYs0ZYuU3Iz1lQgiWHrPdTgHcjJxHE1cgXnaa1wqZ0ZrzkvEcjxuLYO8ZEhBCKLWdh3C5MFsv1BtmaYvSL54gxcc1mA==-----END PKCS7-----"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],G={name:"btnCase"},S=G,D=Object(v["a"])(S,Q,M,!1,null,null,null),I=D.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{attrs:{border:"0",cellpadding:"10",cellspacing:"0",align:"center"}},[a("tr",[a("td",{attrs:{align:"center"}})]),a("tr",[a("td",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://www.paypal.com/webapps/mpp/paypal-popup",title:"How PayPal Works",onclick:"javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"}},[a("img",{attrs:{src:"https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg",border:"0",alt:"PayPal Acceptance Mark"}})])])])])}],U={name:"btnPayPal"},T=U,N=Object(v["a"])(T,P,j,!1,null,null,null),Y=N.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"SRFHK449A6WUQ"}}),a("table",[a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"Stand"}},[t._v("Stand $145.00 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],W={name:"btnStand"},R=W,X=Object(v["a"])(R,L,z,!1,null,null,null),F=X.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{target:"paypal",action:"https://www.paypal.com/cgi-bin/webscr",method:"post"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"ZRN2FYPUPNRAJ"}}),a("table",[a("tr",[a("td",[a("input",{attrs:{type:"hidden",name:"on0",value:"Plexi-Glass (30x30 in)"}}),t._v("Plexi-Glass (30x30 in) ")])]),a("tr",[a("td",[a("select",{attrs:{name:"os0"}},[a("option",{attrs:{value:"Cut and Installed"}},[t._v("Cut and Installed $300.00 CAD")])])])])]),a("input",{attrs:{type:"hidden",name:"currency_code",value:"CAD"}}),a("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])}],O={name:"btnStand"},H=O,Z=Object(v["a"])(H,$,J,!1,null,null,null),K=Z.exports,q={name:"SanitizerKing",components:{BtnSingleBottle:b,BtnCase:x,BtnDispenser:V,BtnCart:I,BtnPayPal:Y,BtnStand:F,BtnGlass:K},data:function(){return{drawer:!1,viewPortSmall:this.$vuetify.breakpoint.smAndDown,message:"",email:"",name:"",template_params:{reply_to:"",from_name:"",to_name:"",message_html:""},mainParagraph:"EMS is a family run business that has been providing cleaning services and supplies to the Greater Toronto Area for 40 years.<br/><br/> During the current pandemic, our experts have formulated and locally produced hand sanitizer that meets all of the guidelines set forward by Heath Canada. Our products have been issued Natural Product Numbers and have been vetted by the Canadian Food Inspection Agency (CFIA).<br/><br/>Our hand sanitizer is sold in several formats: Four gallon cases or single 500ml or 32oz bottles. In addition to the liquid, we offer automatic refillable dispensers which can be mounted directely to any wall by tape or screws. Alternatively, we also offer a metal stand if preferable to the wall mount",products:[{src:a("7183"),title:"Single Bottles",button:"BtnSingleBottle"},{src:a("1b02"),title:"Four Gallon Case",button:"BtnCase"},{src:a("6873"),title:"Wall Mount Dispenser",button:"BtnDispenser"}],products2:[{src:a("a445"),title:"Metal Stand",button:"BtnStand"},{src:a("ebec"),title:"Plexi-Glass Shield",button:"BtnGlass"},{src:a("15e8"),title:"",button:""}],features:[{icon:"mdi-virus",title:"Kills Pathogens",text:"Our gel contains 70% alcohol The use of hand sanitizers has been proven to reduce the risk of pathogens and cross contamination. Our Hand Sanitizer is effective against coronavirus"},{icon:"mdi-tools",title:"Easy to Install",text:"Our Dispensers are easy to install and top up. Wall mounted with tape or screws. Viewing window to check stock level. Capacity - 800 mL. Dimensions - H 250mm x W 125mm x D 136mm.Weight 700 grams"},{icon:"mdi-cellphone-basic",title:"Contact Info",text:"Ethan Werek <br/> Executive Maintenance Services <br/>  416-567-4811 <br/>  164 Torbay Rd, Markham, ON L3R 1G6, Canada"}],stats:[["Single Bottles <br/>  500mL & 32oz","$12.99 & $19.99"],["Four Gallon <br/>  Case of Gel","$325"],["Wall Mount <br/>  Dispenser","$75"],["Metal Stand<br/>  (4.5 ft)","$145"],[],["Plexi-Glass<br/>  Cut & Installed","$300"]]}},methods:{setLoaded:function(){window.paypal.Buttons({style:{shape:"pill",color:"silver",layout:"vertical",label:"pay"},createOrder:function(t,e){return e.order.create({purchase_units:[{amount:{value:"12.99"}}]})},onApprove:function(t,e){return e.order.capture().then((function(t){alert("Transaction completed by "+t.payer.name.given_name+"!")}))}}).render(this.$refs.paypalButton)},sendEmail:function(){var t=this;this.setTemplate(),c.a.send("default_service","template_e5G0Xaq6",this.template_params,"user_2VhHgP2YBwBzo9HUU1b8B").then((function(e){console.log("SUCCESS!",e.status,e.text),alert("Thanks, We will resond shortly"),t.clearform()}),(function(t){console.log("FAILED...",t),alert("Message failed - please try again")}))},setTemplate:function(){this.template_params.message_html=this.message,this.template_params.reply_to=this.email,this.template_params.from_name=this.name},clearform:function(){this.name="",this.email="",this.name=""}},mounted:function(){!1===this.viewPortSmall&&(this.drawer=!0)},watch:{viewPortSmall:function(){!1===this.viewPortSmall&&(this.drawer=!1)}},computed:{}},tt=q,et=a("6544"),at=a.n(et),nt=a("7496"),st=a("40dc"),it=a("5bc1"),rt=a("8212"),ot=a("8336"),lt=a("b0af"),ct=a("99d9"),pt=a("62ad"),dt=a("a523"),ut=a("a75b"),mt=a("ce7e"),vt=a("553a"),ht=a("132d"),bt=a("adda"),gt=a("8860"),ft=a("da13"),wt=a("1800"),yt=a("5d23"),Ct=a("f774"),xt=a("8b9c"),At=a("6b53"),_t=a("0fd9"),Bt=a("8dd9"),Et=a("2fa4"),kt=a("8654"),Vt=a("a844"),Qt=a("480e"),Mt=a("2a7f"),Gt=Object(v["a"])(tt,r,o,!1,null,null,null),St=Gt.exports;at()(Gt,{VApp:nt["a"],VAppBar:st["a"],VAppBarNavIcon:it["a"],VAvatar:rt["a"],VBtn:ot["a"],VCard:lt["a"],VCardText:ct["a"],VCardTitle:ct["b"],VCol:pt["a"],VContainer:dt["a"],VContent:ut["a"],VDivider:mt["a"],VFooter:vt["a"],VIcon:ht["a"],VImg:bt["a"],VList:gt["a"],VListItem:ft["a"],VListItemAction:wt["a"],VListItemContent:yt["a"],VListItemTitle:yt["b"],VNavigationDrawer:Ct["a"],VParallax:xt["a"],VResponsive:At["a"],VRow:_t["a"],VSheet:Bt["a"],VSpacer:Et["a"],VTextField:kt["a"],VTextarea:Vt["a"],VThemeProvider:Qt["a"],VToolbarTitle:Mt["a"]});var Dt={name:"App",components:{SinglePage:St},data:function(){return{}}},It=Dt,Pt=Object(v["a"])(It,s,i,!1,null,null,null),jt=Pt.exports;at()(Pt,{VApp:nt["a"],VAppBar:st["a"],VBtn:ot["a"],VContent:ut["a"],VIcon:ht["a"],VImg:bt["a"],VSpacer:Et["a"]});var Ut=a("f309");n["a"].use(Ut["a"]);var Tt=new Ut["a"]({}),Nt=a("67b0");n["a"].use(Nt["a"]),n["a"].config.productionTip=!1,new n["a"]({vuetify:Tt,render:function(t){return t(jt)}}).$mount("#app")},"680b":function(t,e,a){t.exports=a.p+"img/covid.e60e9f15.png"},6873:function(t,e,a){t.exports=a.p+"img/dispenser1.8005b4f6.png"},7183:function(t,e,a){t.exports=a.p+"img/twobottles.318cff2e.png"},a445:function(t,e,a){t.exports=a.p+"img/stand.ab1d9b98.png"},bd51:function(t,e,a){t.exports=a.p+"img/emslogo.0aa568f9.jpg"},ebec:function(t,e,a){t.exports=a.p+"img/glass.623acff2.png"}});
//# sourceMappingURL=app.396996af.js.map