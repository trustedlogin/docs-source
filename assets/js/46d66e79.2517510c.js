"use strict";(self.webpackChunktrustedlogin_docs=self.webpackChunktrustedlogin_docs||[]).push([[960],{1777:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(4848),t=s(8453);const a={title:"CSS Namespacing",sidebar:"auto",sidebar_position:3},o="Namespacing CSS Files",r={id:"Client/namespacing/css-namespacing",title:"CSS Namespacing",description:"TrustedLogin CSS files are namespaced so that they don't conflict with other plugins or themes that are using TrustedLogin. To namespace the files, you can use the build-sass script included with the TrustedLogin client inside the bin/ directory.",source:"@site/docs/Client/namespacing/css-namespacing.md",sourceDirName:"Client/namespacing",slug:"/Client/namespacing/css-namespacing",permalink:"/Client/namespacing/css-namespacing",draft:!1,unlisted:!1,editUrl:"https://github.com/trustedlogin/docs/edit/main/docs/Client/namespacing/css-namespacing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"CSS Namespacing",sidebar:"auto",sidebar_position:3},sidebar:"Client",previous:{title:"PHP-Scoper",permalink:"/Client/namespacing/php-scoper"},next:{title:"Client Configuration",permalink:"/Client/configuration"}},c={},l=[{value:"When you see <code>ProBlockBuilder</code>, make sure to replace with your own namespace!",id:"when-you-see-problockbuilder-make-sure-to-replace-with-your-own-namespace",level:3},{value:"Manually namespacing the CSS files",id:"manually-namespacing-the-css-files",level:2},{value:"Namespacing via an SCSS mixin",id:"namespacing-via-an-scss-mixin",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"namespacing-css-files",children:"Namespacing CSS Files"}),"\n",(0,i.jsxs)(n.p,{children:["TrustedLogin CSS files are namespaced so that they don't conflict with other plugins or themes that are using TrustedLogin. To namespace the files, you can use the ",(0,i.jsx)(n.code,{children:"build-sass"})," script included with the TrustedLogin client inside the ",(0,i.jsx)(n.code,{children:"bin/"})," directory."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"build-sass"})," script accepts the following arguments:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--namespace"}),": The namespace to use for the CSS files. This is required."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--assets_dir"}),": The path to the TrustedLogin client directory. This is optional, and defaults to ",(0,i.jsx)(n.code,{children:"(vendor-namespaced|vendor-prefixed)/trustedlogin/client/src/assets/"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--export_dir"}),": The path to the output directory. This is optional, and defaults to ",(0,i.jsx)(n.code,{children:"(vendor-namespaced|vendor-prefixed)/trustedlogin/client/src/assets/"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The default way to namespace files is ",(0,i.jsx)(n.a,{href:"/Client/intro",children:"as a Composer script"}),", but this may not work with your build process: the default implementation shown adds the required SCSS package (",(0,i.jsx)(n.code,{children:"scssphp/scssphp"}),") to the ",(0,i.jsx)(n.code,{children:"require-dev"})," array, which may not work with your release flow. If you move ",(0,i.jsx)(n.code,{children:"scssphp/scssphp"})," to the ",(0,i.jsx)(n.code,{children:"require"})," array, the scssphp library will be included in your autoloader, which adds bloat for something that should be used one-time."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.h3,{id:"when-you-see-problockbuilder-make-sure-to-replace-with-your-own-namespace",children:["When you see ",(0,i.jsx)(n.code,{children:"ProBlockBuilder"}),", make sure to replace with your own namespace!"]}),(0,i.jsx)(n.p,{children:'In the examples below, we\'re going to pretend your plugin or theme is named "Pro Block Builder" and your business is named Widgets, Co. These should not be the names you use\u2014make sure to update the sample code below to match your business and plugin/theme name!'})]}),"\n",(0,i.jsx)(n.p,{children:"Here are alternate ways to namespace the CSS files:"}),"\n",(0,i.jsx)(n.h2,{id:"manually-namespacing-the-css-files",children:"Manually namespacing the CSS files"}),"\n",(0,i.jsxs)(n.p,{children:["If you'd like to manually namespace the CSS files (for instance, in a GitHub Actions workflow), first ",(0,i.jsx)(n.code,{children:"cd"})," into your plugin or theme directory. Then use the following command (update it to match your namespace and path to TrustedLogin client directory):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"php vendor-namespaced/trustedlogin/client/bin/build-sass --namespace=ProBlockBuilder\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will generate the namespaced CSS files in the ",(0,i.jsx)(n.code,{children:"vendor-namespaced/trustedlogin/client/src/assets/"})," directory. You can then copy the files to your plugin or theme directory."]}),"\n",(0,i.jsxs)(n.p,{children:["If this fails with a message ",(0,i.jsx)(n.code,{children:"command not found: php"}),", then PHP isn't installed on your machine. ",(0,i.jsx)(n.a,{href:"https://www.php.net/manual/en/install.php",children:"Install PHP"})," and try again."]}),"\n",(0,i.jsx)(n.h2,{id:"namespacing-via-an-scss-mixin",children:"Namespacing via an SCSS mixin"}),"\n",(0,i.jsx)(n.p,{children:"If you'd like to use an SCSS mixin to namespace CSS files, you can use the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:'@import "vendor-namespaced/trustedlogin/client/src/assets/src/variables"; // Variables used in the mixins (all !default)\n@import "vendor-namespaced/trustedlogin/client/src/assets/src/auth"; // Mixins for authentication screen\n@import "vendor-namespaced/trustedlogin/client/src/assets/src/buttons"; // Mixins for buttons\n@import "vendor-namespaced/trustedlogin/client/src/assets/src/global";\n\n$namespace: "ProBlockBuilder";\n\n@include trustedlogin-auth( $namespace );\n@include trustedlogin-button( $namespace );\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);