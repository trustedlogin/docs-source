"use strict";(self.webpackChunktrustedlogin_docs=self.webpackChunktrustedlogin_docs||[]).push([[292],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const i={},o="The Vault SaaS Token",l={unversionedId:"SaaS/vault-sass-token",id:"SaaS/vault-sass-token",title:"The Vault SaaS Token",description:'When accessing Vault, this application uses a special, highly privileged token, we call the "SaaS token".',source:"@site/docs/SaaS/vault-sass-token.md",sourceDirName:"SaaS",slug:"/SaaS/vault-sass-token",permalink:"/SaaS/vault-sass-token",draft:!1,editUrl:"https://github.com/trustedlogin/docs/edit/main/docs/docs/SaaS/vault-sass-token.md",tags:[],version:"current",frontMatter:{},sidebar:"SaaS",previous:{title:"Vault API Client",permalink:"/SaaS/vault-client"},next:{title:"Working with Vault",permalink:"/SaaS/vault"}},s={},u=[{value:"Using The SaaS Token",id:"using-the-saas-token",level:2},{value:"Resetting The SaaS Token",id:"resetting-the-saas-token",level:3},{value:"Links",id:"links",level:4},{value:"Notes",id:"notes",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-vault-saas-token"},"The Vault SaaS Token"),(0,r.kt)("p",null,'When accessing Vault, this application uses a special, highly privileged token, we call the "SaaS token".'),(0,r.kt)("h2",{id:"using-the-saas-token"},"Using The SaaS Token"),(0,r.kt)("p",null,"The SaaS token is stored in the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"VAULT_TOKEN")," in Platform. In PHP code it can be accessed like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$token = env('VAULT_TOKEN');\n")),(0,r.kt)("h3",{id:"resetting-the-saas-token"},"Resetting The SaaS Token"),(0,r.kt)("p",null,"For local development, edit you ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"VAULT_TOKEN=trustedlogin\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"VAULT_TOKEN"),' variable is set to be "inheritable" and "sensitive".')),(0,r.kt)("p",null,"To change the SaaS token(s) on the production and testing servers, you must be logged into Platform.sh and have proper permissions to edit environment variables. Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"env:VAULT_TOKEN"),' variable. Make sure it is set to be "inheritable" and "sensitive".'),(0,r.kt)("p",null,"GitHub Actions has local ",(0,r.kt)("inlineCode",{parentName:"p"},"VAULT_TOKEN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"VAULT_URL")," environment variables and do not need to be modified."),(0,r.kt)("h4",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.platform.sh/trustedlogin/xfssqruuoi5as/master/settings/variables"},"Master environment variables settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://travis-ci.com/trustedlogin/trustedlogin-ecommerce/settings"},"Travis CI environment variable settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.platform.sh/development/variables.html#environment-variables"},"Platform.sh Environment Variables Documentation"))),(0,r.kt)("h4",{id:"notes"},"Notes"),(0,r.kt)("p",null,"Access to environmental variables is limited."))}d.isMDXComponent=!0}}]);