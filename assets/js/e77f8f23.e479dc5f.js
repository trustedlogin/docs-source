"use strict";(self.webpackChunktrustedlogin_docs=self.webpackChunktrustedlogin_docs||[]).push([[571],{5150:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var d=s(4848),i=s(8453);const r={},t="Client Configuration",l={id:"Client/configuration",title:"Client Configuration",description:"Minimal configuration",source:"@site/docs/Client/configuration.md",sourceDirName:"Client",slug:"/Client/configuration",permalink:"/Client/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/trustedlogin/docs/edit/main/docs/Client/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"Client",previous:{title:"Client SDK Intro",permalink:"/Client/intro"},next:{title:"CSS Namespacing",permalink:"/Client/css-namespacing"}},c={},o=[{value:"Minimal configuration",id:"minimal-configuration",level:2},{value:"When you see <code>ProBlockBuilder</code>, make sure to replace with your own namespace!",id:"when-you-see-problockbuilder-make-sure-to-replace-with-your-own-namespace",level:3},{value:"All configuration options",id:"all-options",level:2},{value:"Logging",id:"logging",level:2},{value:"Default settings:",id:"default-settings",level:3},{value:"logging/enabled",id:"loggingenabled",level:3},{value:"<code>logging/directory</code>",id:"loggingdirectory",level:3},{value:"<code>logging/threshold</code>",id:"loggingthreshold",level:3},{value:"<code>logging/options</code>",id:"loggingoptions",level:3},{value:"Log file names",id:"log-file-names",level:3},{value:"Display Name vs Title",id:"display-name-vs-title",level:2},{value:"Task-specific email addresses",id:"task-specific-email-addresses",level:2},{value:"Invalid capabilities",id:"invalid-capabilities",level:2},{value:"Webhooks",id:"webhooks",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"client-configuration",children:"Client Configuration"}),"\n",(0,d.jsx)(n.h2,{id:"minimal-configuration",children:"Minimal configuration"}),"\n",(0,d.jsxs)(n.p,{children:["When instantiating the TrustedLogin ",(0,d.jsx)(n.code,{children:"Client"})," class, you need to pass a valid ",(0,d.jsx)(n.code,{children:"Config"})," object."]}),"\n",(0,d.jsxs)(n.p,{children:["The following is a minimal configuration. It has all the ",(0,d.jsx)(n.em,{children:"required"})," settings, but not all ",(0,d.jsx)(n.strong,{children:"recommended"})," settings!"]}),"\n",(0,d.jsxs)(n.admonition,{type:"info",children:[(0,d.jsxs)(n.h3,{id:"when-you-see-problockbuilder-make-sure-to-replace-with-your-own-namespace",children:["When you see ",(0,d.jsx)(n.code,{children:"ProBlockBuilder"}),", make sure to replace with your own namespace!"]}),(0,d.jsx)(n.p,{children:'In the examples below, we\'re going to pretend your plugin or theme is named "Pro Block Builder" and your business is named Widgets, Co. These should not be the names you use\u2014make sure to update the sample code below to match your business and plugin/theme name!'})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"\n// Include the Composer autoloader.\ninclude_once trailingslashit( dirname( __FILE__ ) ) . 'vendor/autoload.php';\n\n$config = [\n    'auth' => [\n        'api_key' => '1234567890',\n    ],\n    'vendor' => [\n        'namespace' => 'pro-block-builder',\n        'title' => 'Pro Block Builder',\n        'email' => 'support@example.com',\n        'website' => 'https://example.com',\n        'support_url' => 'https://help.example.com',\n    ],\n    'role' => 'editor',\n];\n\ntry {\n    new \\ProBlockBuilder\\TrustedLogin\\Client( \n        new \\ProBlockBuilder\\TrustedLogin\\Config( $config )\n    );\n} catch ( \\Exception $exception ) {\n    error_log( $exception->getMessage() );\n}\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"warning",children:[(0,d.jsxs)(n.p,{children:["Make sure initialization happens before headers are sent. ",(0,d.jsx)(n.code,{children:"init"})," is a good hook to use."]}),(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"The hook must run on the front-end!"})," For example, don't use ",(0,d.jsx)(n.code,{children:"admin_init"}),", since it will not run on the front-end."]})]}),"\n",(0,d.jsx)(n.h2,{id:"all-options",children:"All configuration options"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Required?"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"auth/api_key"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:['The TrustedLogin key for the vendor, found in "API Keys" on ',(0,d.jsx)(n.a,{href:"https://app.trustedlogin.com",children:"https://app.trustedlogin.com"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"auth/license_key"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"}),", ",(0,d.jsx)(n.code,{children:"null"})]}),(0,d.jsx)(n.td,{children:"If enabled, the license key for the current client. This is used as a lookup value when integrating with help desk support widgets. If not defined, a cryptographic hash will be generated to use as the Access Key."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"role"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"The role to clone when creating a new Support User."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"editor"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"clone_role"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bool"})}),(0,d.jsxs)(n.td,{children:["If true, create a new role with the same capabilites as the ",(0,d.jsx)(n.code,{children:"role"})," setting. If false, use the defined ",(0,d.jsx)(n.code,{children:"role"})," setting."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vendor/namespace"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["Slug for vendor. Must be unique. Must be shorter than 96 characters. Must not be a reserved namespace: ",(0,d.jsx)(n.code,{children:"trustedlogin"}),", ",(0,d.jsx)(n.code,{children:"client"}),", ",(0,d.jsx)(n.code,{children:"vendor"}),", ",(0,d.jsx)(n.code,{children:"admin"}),", ",(0,d.jsx)(n.code,{children:"wordpress"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vendor/title"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["Name of the vendor company. Used in text such as ",(0,d.jsx)(n.code,{children:"Visit the %s website"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vendor/email"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["Email address for support. Used when creating usernames. Recommended: use ",(0,d.jsx)(n.code,{children:"{hash}"})," dynamic replacement (",(0,d.jsx)(n.a,{href:"#email-hash",children:"see below"}),")."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vendor/website"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"URL to the vendor website. Must be a valid URL."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vendor/support_url"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"URL to the vendor support page. Shown to users in the Grant Access form and also serves as a backup to redirect users if the TrustedLogin server is unreachable. Must be a valid URL."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vendor/display_name"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:'Optional. Display name for the support team. See "Display Name vs Title" below.'}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vendor/logo_url"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"Optional. URL to the vendor logo. Displayed in the Grant Access form. May be inline SVG. Must be local to comply with WordPress.org."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"caps/add"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"array"})}),(0,d.jsxs)(n.td,{children:["An array of additional capabilities to be granted to the Support User after their user role is cloned based on the ",(0,d.jsx)(n.code,{children:"role"})," setting.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"The key is the capability slug and the value is the reason why it is needed. Example: ",(0,d.jsx)(n.code,{children:"[ 'gf_full_access' => 'Support will need to see and edit the forms, entries, and Gravity Forms settings on your site.' ]"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"[]"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"caps/remove"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"array"})}),(0,d.jsxs)(n.td,{children:["An array of capabilities you want to ",(0,d.jsx)(n.em,{children:"remove"})," from Support User. If you want to remove access to WooCommerce, for example, you could remove the ",(0,d.jsx)(n.code,{children:"manage_woocommerce"})," cap by using this setting: ",(0,d.jsx)(n.code,{children:"[ 'manage_woocommerce' => 'We don\\'t need to manage your shop!' ]"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"[]"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"decay"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"int"})}),(0,d.jsxs)(n.td,{children:["If defined, how long should support be granted access to the site? Defaults to a week in seconds (",(0,d.jsx)(n.code,{children:"604800"}),"). Minimum: 1 day (",(0,d.jsx)(n.code,{children:"86400"}),"). Maximum: 30 days (",(0,d.jsx)(n.code,{children:"2592000"}),"). If ",(0,d.jsx)(n.code,{children:"decay"})," is not defined, support access will not expire."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"604800"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"menu/slug"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"}),",",(0,d.jsx)(n.code,{children:"null"}),",",(0,d.jsx)(n.code,{children:"false"})]}),(0,d.jsxs)(n.td,{children:["TrustedLogin adds a submenu item to the sidebar in the Dashboard. The ",(0,d.jsx)(n.code,{children:"menu/slug"})," setting is the slug name for the parent menu (or the file name of a standard WordPress admin page). If ",(0,d.jsx)(n.code,{children:"null"}),", the a top-level menu will be added. If ",(0,d.jsx)(n.code,{children:"false"}),", a menu item will not be added. If a string, it will be used as the ",(0,d.jsx)(n.code,{children:"$parent_slug"})," argument passed to the ",(0,d.jsxs)(n.a,{href:"https://developer.wordpress.org/reference/functions/add_submenu_page/",children:[(0,d.jsx)(n.code,{children:"add_submenu_page()"})," function"]}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"menu/title"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"The title of the submenu in the sidebar menu."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Grant Support Access"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"menu/icon_url"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["The URL to the icon to be used for this menu. The value is passed as ",(0,d.jsx)(n.code,{children:"$icon_url"})," to the ",(0,d.jsxs)(n.a,{href:"https://developer.wordpress.org/reference/functions/add_menu_page/",children:[(0,d.jsx)(n.code,{children:"add_menu_page()"})," function"]}),"."]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"''"})," (empty string)"]}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"menu/priority"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"int"})}),(0,d.jsxs)(n.td,{children:["The priority of the ",(0,d.jsx)(n.code,{children:"admin_menu"})," action used by TrustedLogin."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"100"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"menu/position"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"int"})}),(0,d.jsxs)(n.td,{children:["The ",(0,d.jsx)(n.code,{children:"$position"})," argument passed to the ",(0,d.jsxs)(n.a,{href:"https://developer.wordpress.org/reference/functions/add_submenu_page/",children:[(0,d.jsx)(n.code,{children:"add_submenu_page()"})," function"]})," function."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logging/enabled"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bool"})}),(0,d.jsxs)(n.td,{children:["If enabled, logs are stored in ",(0,d.jsx)(n.code,{children:"wp-uploads/trustedlogin-logs"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logging/directory"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"null"}),",",(0,d.jsx)(n.code,{children:"string"})]}),(0,d.jsxs)(n.td,{children:["Override the directory where logs are stored. See ",(0,d.jsx)(n.a,{href:"logging/",children:"Logging"})," for more information."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logging/threshold"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["Define what ",(0,d.jsx)(n.a,{href:"https://www.php-fig.org/psr/psr-3/#5-psrlogloglevel",children:"PSR log level"})," should be logged. To log everything, set the threshold to ",(0,d.jsx)(n.code,{children:"debug"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"notice"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logging/options"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"array"})}),(0,d.jsxs)(n.td,{children:["Array of ",(0,d.jsx)(n.a,{href:"https://github.com/katzgrau/klogger#additional-options",children:"KLogger Additional Options"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"['extension' => 'log', 'dateFormat' => 'Y-m-d G:i:s.u', 'filename' => null, 'flushFrequency' => false, 'logFormat' => false, 'appendContext' => true ]"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"paths/css"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"Where to load CSS assets from. By default, the bundled TrustedLogin CSS file will be used. Must be local to comply with WordPress.org."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{plugin_dir_url() to Config.php}/assets/trustedlogin.css"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"paths/js"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"Where to load JS assets from. By default, the bundled TrustedLogin JS file will be used. Must be local to comply with WordPress.org."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{plugin_dir_url() to Config.php}/assets/trustedlogin.js"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"reassign_posts"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bool"})}),(0,d.jsxs)(n.td,{children:["When the Support User is revoked, should posts & pages be re-assigned to a site administrator? If ",(0,d.jsx)(n.code,{children:"false"}),", posts and pages created by the user will be deleted. Passed as the second argument to ",(0,d.jsxs)(n.a,{href:"https://developer.wordpress.org/reference/functions/wp_delete_user/",children:["the ",(0,d.jsx)(n.code,{children:"wp_delete_user()"})," function"]}),". ",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"When ",(0,d.jsx)(n.code,{children:"reassign_posts"})," setting is enabled, TrustedLogin will attempt to assign posts created by the user to the best-guess administrator: the user with the longest-active ",(0,d.jsx)(n.code,{children:"administrator"})," role."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"require_ssl"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bool"})}),(0,d.jsxs)(n.td,{children:["Whether to use TrustedLogin when the site isn't served over HTTPS. TrustedLogin will still work, but the requests may not be secure. If ",(0,d.jsx)(n.code,{children:"false"}),', the TrustedLogin "Grant Access" button will take users to the ',(0,d.jsx)(n.code,{children:"vendor/support_url"})," URL directly."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"terms_of_service/url"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"null"}),",",(0,d.jsx)(n.code,{children:"string"})]}),(0,d.jsx)(n.td,{children:'The URL to the vendor\'s Terms of Service. If defined, a message "By granting access, you agree to the Terms of Service." will be added below the Grant Access button. Added in 1.6.0.'}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"webhook/url"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["If defined, TrustedLogin will send a ",(0,d.jsx)(n.code,{children:"POST"})," request to the defined URL. Must be a valid URL if defined. See the Webhooks section below."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"webhook/debug_data"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bool"})}),(0,d.jsxs)(n.td,{children:["Whether to show the user an opt-in consent checkbox to send debugging data (the Site Health report) to the Webhook. Only relevant if ",(0,d.jsx)(n.code,{children:"webhook/url"})," is defined and a valid URL."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"webhook/create_ticket"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bool"})}),(0,d.jsxs)(n.td,{children:["Whether to show the user a form to send a message to support via the Webhook. Only relevant if ",(0,d.jsx)(n.code,{children:"webhook/url"})," is defined and a valid URL."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,d.jsx)(n.h3,{id:"default-settings",children:"Default settings:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"'logging' => array(\n    'enabled' => false,\n    'directory' => null,\n    'threshold' => 'debug',\n    'options' => array(),\n),\n"})}),"\n",(0,d.jsx)(n.h3,{id:"loggingenabled",children:"logging/enabled"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Optional."})," Default: ",(0,d.jsx)(n.code,{children:"false"})]}),"\n",(0,d.jsx)(n.p,{children:"Whether to enable logging TrustedLogin activity to a file. Helpful for debugging."}),"\n",(0,d.jsx)(n.p,{children:"To enable logging in TrustedLogin, the minimum configuration necessary is:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"'logging' => array(\n    'enabled' => true,\n),\n"})}),"\n",(0,d.jsx)(n.h3,{id:"loggingdirectory",children:(0,d.jsx)(n.code,{children:"logging/directory"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Optional."})," Default: ",(0,d.jsx)(n.code,{children:"null"})]}),"\n",(0,d.jsxs)(n.p,{children:["If ",(0,d.jsx)(n.code,{children:"null"}),", TrustedLogin will generate its own directory inside the ",(0,d.jsx)(n.code,{children:"wp-uploads/"})," directory. The path for logs is\n",(0,d.jsx)(n.code,{children:"/wp-uploads/trustedlogin-logs/"}),". Created directories are protected by an index.html file to prevent browsing."]}),"\n",(0,d.jsx)(n.h3,{id:"loggingthreshold",children:(0,d.jsx)(n.code,{children:"logging/threshold"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Optional."})," Default: ",(0,d.jsx)(n.code,{children:"debug"})]}),"\n",(0,d.jsx)(n.p,{children:"This setting defines the level of logging that should be recorded."}),"\n",(0,d.jsxs)(n.p,{children:["The default setting if logging is to record all logs (",(0,d.jsx)(n.code,{children:"debug"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["The available options include the logging levels defined in\n",(0,d.jsxs)(n.a,{href:"https://www.php-fig.org/psr/psr-3/#5-psrlogloglevel",children:["PSR-3 ",(0,d.jsx)(n.code,{children:"Psr\\Log\\LogLevel"})]}),":"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"emergency"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"alert"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"critical"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"error"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"warning"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"notice"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"info"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"debug"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Setting ",(0,d.jsx)(n.code,{children:"logging/threshold"})," to ",(0,d.jsx)(n.code,{children:"error"})," will record logs with the level of ",(0,d.jsx)(n.code,{children:"error"})," and above (",(0,d.jsx)(n.code,{children:"error"}),", ",(0,d.jsx)(n.code,{children:"critical"}),",\n",(0,d.jsx)(n.code,{children:"alert"}),", and ",(0,d.jsx)(n.code,{children:"emergency"}),")."]}),"\n",(0,d.jsx)(n.h3,{id:"loggingoptions",children:(0,d.jsx)(n.code,{children:"logging/options"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Optional."})," Default: ",(0,d.jsx)(n.code,{children:"[]"})]}),"\n",(0,d.jsxs)(n.p,{children:["This setting can be used to pass additional options to the ",(0,d.jsx)(n.code,{children:"Logger"})," class. The TrustedLogin Logger class is based on KLogger. See ",(0,d.jsx)(n.a,{href:"https://github.com/katzgrau/KLogger#additional-options",children:"the KLogger docs\nfor more information"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"log-file-names",children:"Log file names"}),"\n",(0,d.jsxs)(n.p,{children:["There is one log file generated per day. Log file names use a hash to make them more secure by obscurity, in this format:\n",(0,d.jsx)(n.code,{children:"trustedlogin-debug-{{Date in Y-m-d format}}-{{hash}}.log"})]}),"\n",(0,d.jsxs)(n.p,{children:["Example: ",(0,d.jsx)(n.code,{children:"trustedlogin-debug-2020-07-27-39dabe12636f200938bbe8790c0aef94.log"})]}),"\n",(0,d.jsx)(n.h2,{id:"display-name-vs-title",children:"Display Name vs Title"}),"\n",(0,d.jsxs)(n.p,{children:["If ",(0,d.jsx)(n.code,{children:"vendor/title"})," is set to ",(0,d.jsx)(n.code,{children:"GravityView"}),", the default confirmation screen will say ",(0,d.jsx)(n.code,{children:"Grant GravityView access to your site."})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"vendor/display_name"})," is also defined, the text will read ",(0,d.jsx)(n.code,{children:"GravityView Support"}),", the default confirmation screen will say ",(0,d.jsx)(n.code,{children:"Grant GravityView Support access to your site."})]}),"\n",(0,d.jsx)(n.h2,{id:"task-specific-email-addresses",children:"Task-specific email addresses"}),"\n",(0,d.jsxs)(n.p,{children:['In order to prevent email address collision, we recommend using "plus addresses" (also called "task-specific email addresses") for your ',(0,d.jsx)(n.code,{children:"vendor/email"})," setting."]}),"\n",(0,d.jsxs)(n.p,{children:["Rather than ",(0,d.jsx)(n.code,{children:"support@example.com"}),", use ",(0,d.jsx)(n.code,{children:"support+{hash}@example.com"}),". ",(0,d.jsx)(n.code,{children:"{hash}"})," will be dynamically replaced when used in\nthe email address."]}),"\n",(0,d.jsxs)(n.p,{children:["This is supported by many email providers, including ",(0,d.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online",children:"Gmail"}),", ",(0,d.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online",children:"Microsoft"}),", ",(0,d.jsx)(n.a,{href:"https://www.fastmail.com/help/receive/addressing.html",children:"Fastmail"}),", and ",(0,d.jsx)(n.a,{href:"https://protonmail.com/support/knowledge-base/creating-aliases/",children:"ProtonMail"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"invalid-capabilities",children:"Invalid capabilities"}),"\n",(0,d.jsx)(n.p,{children:"The Support User will be created based on the role defined in the configuration (see configuration above)."}),"\n",(0,d.jsx)(n.p,{children:"The following capabilities are never allowed when creating users through TrustedLogin, regardless of the role:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"create_users"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"delete_users"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"edit_users"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"promote_users"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"delete_site"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"remove_users"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"A goal for TrustedLogin is to instill confidence in the end user that they are not creating security holes when granting\nsupport access to their site."}),"\n",(0,d.jsx)(n.h2,{id:"webhooks",children:"Webhooks"}),"\n",(0,d.jsxs)(n.p,{children:["If the ",(0,d.jsx)(n.code,{children:"webhook_url"})," setting is set and is a valid URL, the URL will be sent a ",(0,d.jsx)(n.code,{children:"POST"})," request when creating a Support User, extending access, or revoking access."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"url"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["The site URL from where the webhook was triggered, as returned by ",(0,d.jsx)(n.code,{children:"get_site_url()"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"action"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["The type of trigger: ",(0,d.jsx)(n.code,{children:"created"}),", ",(0,d.jsx)(n.code,{children:"extended"}),", or ",(0,d.jsx)(n.code,{children:"logged_in"}),", or ",(0,d.jsx)(n.code,{children:"revoked"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ref"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"}),",",(0,d.jsx)(n.code,{children:"null"})]}),(0,d.jsx)(n.td,{children:"A sanitized reference ID, if passed. Otherwise, null."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"debug_data"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["The Site Health report in Markdown formatting. This key is only set for the ",(0,d.jsx)(n.code,{children:"trustedlogin/{namespace}/access/created"})," action, and only if the user opted-in. Added in 1.4.0."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ticket"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"array"})}),(0,d.jsxs)(n.td,{children:["The unmodified message created by the user. This key is only set for the ",(0,d.jsx)(n.code,{children:"trustedlogin/{namespace}/access/created"})," action, and only if the message is not empty. Added in 1.5.0."]})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"The default actions that trigger webhooks to run are:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"trustedlogin/{namespace}/access/created"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"trustedlogin/{namespace}/access/extended"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"trustedlogin/{namespace}/access/revoked"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"trustedlogin/{namespace}/logged_in"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["See ",(0,d.jsx)(n.a,{href:"/Client/hooks",children:"hook documentation"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var d=s(6540);const i={},r=d.createContext(i);function t(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);