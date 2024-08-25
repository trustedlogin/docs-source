"use strict";(self.webpackChunktrustedlogin_docs=self.webpackChunktrustedlogin_docs||[]).push([[298],{9968:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(4848),i=s(8453);const r={title:"Namespacing with Strauss",sidebar:"auto",sidebar_label:"Strauss",sidebar_position:1},a=void 0,o={id:"Client/namespacing/strauss",title:"Namespacing with Strauss",description:"Using Strauss",source:"@site/docs/Client/namespacing/strauss.md",sourceDirName:"Client/namespacing",slug:"/Client/namespacing/strauss",permalink:"/Client/namespacing/strauss",draft:!1,unlisted:!1,editUrl:"https://github.com/trustedlogin/docs/edit/main/docs/Client/namespacing/strauss.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Namespacing with Strauss",sidebar:"auto",sidebar_label:"Strauss",sidebar_position:1},sidebar:"Client",previous:{title:"Namespacing",permalink:"/Client/namespacing/"},next:{title:"PHP-Scoper",permalink:"/Client/namespacing/php-scoper"}},l={},d=[{value:"Using Strauss",id:"using-strauss",level:2},{value:"1. Install Strauss",id:"1-install-strauss",level:3},{value:"Using PHP-Scoper",id:"using-php-scoper",level:2},{value:"2. Install the TrustedLogin Client SDK",id:"2-install-the-trustedlogin-client-sdk",level:3},{value:"3. Run <code>composer update</code>",id:"3-run-composer-update",level:2},{value:"4. Include the autoloader",id:"4-include-the-autoloader",level:3},{value:"5. Follow these directions to configure and instantiate the client",id:"5-follow-these-directions-to-configure-and-instantiate-the-client",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"using-strauss",children:"Using Strauss"}),"\n",(0,t.jsxs)(n.p,{children:["Strauss is used for namespacing the Client to prevent conflicts with other plugins or themes that are using TrustedLogin. We recommend installing via the ",(0,t.jsx)(n.code,{children:"strauss.phar"})," method."]}),"\n",(0,t.jsx)(n.h3,{id:"1-install-strauss",children:"1. Install Strauss"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/BrianHenryIE/strauss#use",children:"Install Strauss"}),". Strauss is used for namespacing the Client to prevent conflicts with other plugins or themes that are using TrustedLogin. We recommend installing via the ",(0,t.jsx)(n.code,{children:"strauss.phar"})," method."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cd"})," into your plugin or theme directory"]}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"curl -o strauss.phar -L -C - https://github.com/BrianHenryIE/strauss/releases/latest/download/strauss.phar"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-php-scoper",children:"Using PHP-Scoper"}),"\n",(0,t.jsxs)(n.p,{children:["If you prefer to use PHP-Scoper, you can follow the instructions ",(0,t.jsx)(n.a,{href:"/Client/php-scoper.md",children:"on the PHP-Scoper page"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"2-install-the-trustedlogin-client-sdk",children:"2. Install the TrustedLogin Client SDK"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"composer require trustedlogin/client:dev-main"})," to install the TrustedLogin Client SDK"]}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"composer require scssphp/scssphp --dev"})," to install ",(0,t.jsx)(n.code,{children:"scssphp"})," as a dev dependency. This is used to generate and namespace the CSS used by TrustedLogin. If you already have ",(0,t.jsx)(n.code,{children:"scssphp"})," installed, or are ",(0,t.jsx)(n.a,{href:"/Client/css-namespacing.md",children:"using an alternative way to namespace the CSS"}),", skip this step."]}),"\n",(0,t.jsxs)(n.li,{children:["Update your ",(0,t.jsx)(n.code,{children:"composer.json"})," file to integrate with Strauss. Follow the instructions as detailed in the ",(0,t.jsx)(n.a,{href:"https://github.com/BrianHenryIE/strauss#configuration",children:"Strauss documentation"})," for namespacing your plugin and theme. See example below."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[...]\n  "require": {\n    "trustedlogin/client": "dev-main"\n  },\n  "require-dev": {\n    "brianhenryie/strauss": "dev-master",\n    "scssphp/scssphp": "^v1.11.0"\n  },\n  "autoload": {\n    "classmap": [\n      "vendor"\n    ]\n  },\n  "extra": {\n    "strauss": {\n      "target_directory": "vendor-namespaced",\n      "namespace_prefix": "ProBlockBuilder\\\\",\n      "classmap_prefix": "ProBlockBuilder_",\n      "classmap_output": true,\n      "packages": [\n        "trustedlogin/client"\n      ]\n    }\n  },\n  "scripts": {\n    "strauss": [\n      "@php strauss.phar"\n    ],\n    "trustedlogin": [\n      "@php vendor/bin/build-sass --namespace=ProBlockBuilder"\n    ],\n    "post-install-cmd": [\n      "@strauss",\n      "@trustedlogin"\n    ],\n    "post-update-cmd": [\n      "@strauss",\n      "@trustedlogin"\n    ]\n  }\n[...]\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"3-run-composer-update",children:["3. Run ",(0,t.jsx)(n.code,{children:"composer update"})]}),"\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"composer update"})," to update your dependencies. Strauss should generate a ",(0,t.jsx)(n.code,{children:"vendor-namespaced/"})," directory. If it doesn't, you may need to run ",(0,t.jsx)(n.code,{children:"composer install"})," first."]}),"\n",(0,t.jsx)(n.h3,{id:"4-include-the-autoloader",children:"4. Include the autoloader"}),"\n",(0,t.jsxs)(n.p,{children:["When using Composer, you likely already have added an autoloader to your code using something like ",(0,t.jsx)(n.code,{children:"require_once 'vendor/autoload.php';"}),". If not, do so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"require_once 'vendor/autoload.php';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you set ",(0,t.jsx)(n.code,{children:"classmap_output"})," to ",(0,t.jsx)(n.code,{children:"false"})," in the Strauss configuration, you will need to include the autoloader in your code. If using the sample configuration above, the autoloader would be located at ",(0,t.jsx)(n.code,{children:"vendor-namepaced/autoload.php"})," and the code would be:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"// For a plugin or theme:\ninclude_once trailingslashit( dirname( __FILE__ ) ) . 'vendor-namespaced/autoload.php';\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"5-follow-these-directions-to-configure-and-instantiate-the-client",children:["5. Follow ",(0,t.jsx)(n.a,{href:"../configuration",children:"these directions to configure and instantiate the client"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);