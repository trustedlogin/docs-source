"use strict";(self.webpackChunktrustedlogin_docs=self.webpackChunktrustedlogin_docs||[]).push([[494],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=n(3117),l=(n(7294),n(3905));const o={},a="WordPress Hooks",i={unversionedId:"Vendor/hooks",id:"Vendor/hooks",title:"WordPress Hooks",description:"Filters",source:"@site/docs/Vendor/hooks.md",sourceDirName:"Vendor",slug:"/Vendor/hooks",permalink:"/Vendor/hooks",draft:!1,editUrl:"https://github.com/trustedlogin/docs/edit/main/docs/docs/Vendor/hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"Vendor",previous:{title:"Local Development",permalink:"/Vendor/development"}},d={},s=[{value:"Filters",id:"filters",level:2},{value:"Modify default settings<br/><code>trustedlogin/vendor/settings/default</code>",id:"modify-default-settingsbrtrustedloginvendorsettingsdefault",level:3},{value:"Modify menu location<br/><code>trustedlogin/vendor/settings/menu-location</code>",id:"modify-menu-locationbrtrustedloginvendorsettingsmenu-location",level:3},{value:"Help Scout integration",id:"help-scout-integration",level:2},{value:"Modify returned licenses array<br/><code>trustedlogin/vendor/customers/licenses</code>",id:"modify-returned-licenses-arraybrtrustedloginvendorcustomerslicenses",level:3},{value:"Help Scout widget template overrides",id:"help-scout-widget-template-overrides",level:3},{value:"<code>trustedlogin/vendor/helpdesk/helpscout/template/wrapper</code>",id:"trustedloginvendorhelpdeskhelpscouttemplatewrapper",level:4},{value:"<code>trustedlogin/vendor/helpdesk/helpscout/template/item</code>",id:"trustedloginvendorhelpdeskhelpscouttemplateitem",level:4},{value:"<code>trustedlogin/vendor/helpdesk/helpscout/template/no-items</code>",id:"trustedloginvendorhelpdeskhelpscouttemplateno-items",level:4},{value:"Actions",id:"actions",level:2},{value:"<code>trustedlogin/vendor/add_hooks/after</code>",id:"trustedloginvendoradd_hooksafter",level:3}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wordpress-hooks"},"WordPress Hooks"),(0,l.kt)("h2",{id:"filters"},"Filters"),(0,l.kt)("h3",{id:"modify-default-settingsbrtrustedloginvendorsettingsdefault"},"Modify default settings",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"h3"},"trustedlogin/vendor/settings/default")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"[\n  'account_id'       => '',\n  'private_key'      => '',\n  'api_key'       => '',\n  'helpdesk'         => [ 'helpscout' ],\n  'approved_roles'   => [ 'administrator' ],\n  'debug_enabled'    => 'on',\n  'enable_audit_log' => 'on',\n]\n")),(0,l.kt)("h3",{id:"modify-menu-locationbrtrustedloginvendorsettingsmenu-location"},"Modify menu location",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"h3"},"trustedlogin/vendor/settings/menu-location")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$location")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Where to place the TrustedLogin menu in the WordPress admin sidebar, either ",(0,l.kt)("inlineCode",{parentName:"td"},"main")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"submenu"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"main")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.0.0"))))),(0,l.kt)("p",null,"Filter:\nAdded to allow devs to move options item under 'Settings' menu item in wp-admin to keep things neat."),(0,l.kt)("h2",{id:"help-scout-integration"},"Help Scout integration"),(0,l.kt)("h3",{id:"modify-returned-licenses-arraybrtrustedloginvendorcustomerslicenses"},"Modify returned licenses array",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"h3"},"trustedlogin/vendor/customers/licenses")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$licenses")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\EDD_SL_License[]"),",",(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"License keys associated with the passed emails."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.0.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$customer_emails")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"Email addresses Help Scout associates with the customer."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.0.0"))))),(0,l.kt)("p",null,"return apply_filters( 'trustedlogin/vendor/customers/licenses', $licenses, $customer_emails );"),(0,l.kt)("h3",{id:"help-scout-widget-template-overrides"},"Help Scout widget template overrides"),(0,l.kt)("p",null,"You can modify the template output implemented in the Help Scout integration using the following filters:"),(0,l.kt)("h4",{id:"trustedloginvendorhelpdeskhelpscouttemplatewrapper"},(0,l.kt)("inlineCode",{parentName:"h4"},"trustedlogin/vendor/helpdesk/helpscout/template/wrapper")),(0,l.kt)("p",null,"HTML output of the wrapper HTML elements."),(0,l.kt)("h4",{id:"trustedloginvendorhelpdeskhelpscouttemplateitem"},(0,l.kt)("inlineCode",{parentName:"h4"},"trustedlogin/vendor/helpdesk/helpscout/template/item")),(0,l.kt)("p",null,"HTML output of the individual items HTML elements."),(0,l.kt)("h4",{id:"trustedloginvendorhelpdeskhelpscouttemplateno-items"},(0,l.kt)("inlineCode",{parentName:"h4"},"trustedlogin/vendor/helpdesk/helpscout/template/no-items")),(0,l.kt)("p",null,"HTML output of the HTML elements when no items are found."),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("h3",{id:"trustedloginvendoradd_hooksafter"},(0,l.kt)("inlineCode",{parentName:"h3"},"trustedlogin/vendor/add_hooks/after")),(0,l.kt)("p",null,"This action is triggered after the plugin adds menu items, initializes settings, and registers scripts and styles."))}c.isMDXComponent=!0}}]);