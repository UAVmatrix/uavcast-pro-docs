"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[245],{1897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"configuration/vpn/index","title":"VPN","description":"UAVcast currently supports Zerotier and OpenVPN without the need for any additional software running on the Raspberry Pi.","source":"@site/versioned_docs/version-4.x/configuration/vpn/index.md","sourceDirName":"configuration/vpn","slug":"/configuration-vpn","permalink":"/docs/4.x/configuration-vpn","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-4.x/configuration/vpn/index.md","tags":[],"version":"4.x","frontMatter":{"slug":"/configuration-vpn","title":"VPN","authors":"Bernt Christian Egeland","tags":[]},"sidebar":"tutorialSidebar","previous":{"title":"Settings","permalink":"/docs/4.x/configuration-settings"},"next":{"title":"Frequently Asked Questions","permalink":"/docs/4.x/frequently-asked-questions"}}');var o=t(4848),r=t(8453);const s={slug:"/configuration-vpn",title:"VPN",authors:"Bernt Christian Egeland",tags:[]},a=void 0,c={},p=[{value:"Zerotier",id:"zerotier",level:2},{value:"OpenVPN",id:"openvpn",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"UAVcast currently supports Zerotier and OpenVPN without the need for any additional software running on the Raspberry Pi."}),"\n",(0,o.jsxs)(n.p,{children:["VPN page Overview\n",(0,o.jsx)(n.img,{alt:"&#39;VPN&#39;",src:t(5723).A+"",width:"825",height:"561"})]}),"\n",(0,o.jsx)(n.h2,{id:"zerotier",children:"Zerotier"}),"\n",(0,o.jsx)(n.p,{children:"Zerotier establishes a direct connection between the connected devices, even if they are behind a NAT."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Depending on your cellular providers NAT policy - if you are having issues with video streaming over UDP, try using a TCP for your connections or try OpenVPN."})}),"\n",(0,o.jsx)("iframe",{width:"854",height:"480",src:"https://www.youtube.com/embed/p3DZxDkI5M0?rel=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(n.h2,{id:"openvpn",children:"OpenVPN"}),"\n",(0,o.jsx)(n.p,{children:"OpenVPN connects devices togheter using server in-the-middle principle.\nMany cloud services has prebuildt servers with openvpn for easy startup."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://marketplace.digitalocean.com/apps/openvpn-access-server",children:"Digitalocean openvpn access server"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openvpn.net/google-cloud-vpn",children:"Google Cloud openvpn access server"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When you have started your vpn access server, login and add a user / client.\nFor the user you want to asign to UAVcast, make sure you have ticked the ",(0,o.jsx)(n.strong,{children:"auto-login"})," box."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"&#39;Autologin&#39;",src:t(4236).A+"",width:"1516",height:"187"})}),"\n",(0,o.jsx)(n.p,{children:"Now, login with your newly created user https://your_openvpn_ip:943/"}),"\n",(0,o.jsxs)(n.p,{children:["Download the ",(0,o.jsx)(n.strong,{children:"(Yourself- Autologin profile)"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"&#39;Autologin&#39;",src:t(8377).A+"",width:"568",height:"602"})}),"\n",(0,o.jsx)(n.p,{children:"Drag this file into UAVcast-Pro => vpn page and hit connect."}),"\n",(0,o.jsxs)(n.p,{children:["For more information about setting up OpenVPN, please see the ",(0,o.jsx)(n.a,{href:"https://community.openvpn.net/openvpn/wiki",children:"Open VPN Wiki"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4236:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/auto-login-openvpn-d868bcd4762885242a43708b694318e2.jpg"},8377:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/download-openvpn-bf88b70cbf953cee1ea52142d5865a72.jpg"},5723:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/overview-59700364f006834577f039d0c28fbcce.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);