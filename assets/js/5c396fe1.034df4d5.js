"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[537],{6108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"get_started/installation/index","title":"Installation","description":"UAVcast-Pro v5 ONLY supports the latest Raspberry Pi OS 64-bit operating system. Earlier versions and 32-bit systems are NOT compatible.","source":"@site/docs/get_started/installation/index.md","sourceDirName":"get_started/installation","slug":"/installation","permalink":"/docs/5.x/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/get_started/installation/index.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"/installation","title":"Installation","authors":"Bernt Christian Egeland","tags":[],"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Get Started","permalink":"/docs/5.x/category/get-started"},"next":{"title":"License Activation","permalink":"/docs/5.x/get_started/license/"}}');var i=n(4848),r=n(8453);const a={slug:"/installation",title:"Installation",authors:"Bernt Christian Egeland",tags:[],sidebar_position:2},l="Installation",o={},c=[{value:"Operating System Requirements",id:"operating-system-requirements",level:2},{value:"Operating System Installation",id:"operating-system-installation",level:2},{value:"UAVcast-Pro Installation",id:"uavcast-pro-installation",level:2},{value:"Post-Installation Steps",id:"post-installation-steps",level:3},{value:"System Requirements",id:"system-requirements",level:3},{value:"Upgrading from Previous Versions",id:"upgrading-from-previous-versions",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"installation",children:"Installation"})}),"\n",(0,i.jsx)(t.admonition,{title:"Critical Requirements",type:"warning",children:(0,i.jsxs)(t.p,{children:["UAVcast-Pro v5 ",(0,i.jsx)(t.strong,{children:"ONLY"})," supports the latest Raspberry Pi OS 64-bit operating system. Earlier versions and 32-bit systems are NOT compatible."]})}),"\n",(0,i.jsx)(t.h2,{id:"operating-system-requirements",children:"Operating System Requirements"}),"\n",(0,i.jsx)(t.p,{children:"You must use:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Latest Raspberry Pi OS (64-bit)"}),"\n",(0,i.jsxs)(t.li,{children:["Download from: ",(0,i.jsx)(t.a,{href:"https://www.raspberrypi.com/software/operating-systems/",children:"Raspberry Pi OS Downloads"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"operating-system-installation",children:"Operating System Installation"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Download the latest Raspberry Pi OS 64-bit from the official website"}),"\n",(0,i.jsx)(t.li,{children:"Install using Raspberry Pi Imager (recommended) or your preferred imaging tool"}),"\n",(0,i.jsx)(t.li,{children:"Complete the initial OS setup and ensure your system is up to date:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sudo apt update\nsudo apt upgrade\n"})}),"\n",(0,i.jsx)(t.h2,{id:"uavcast-pro-installation",children:"UAVcast-Pro Installation"}),"\n",(0,i.jsx)(t.p,{children:"Install UAVcast-Pro by running this command in your terminal:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -s http://install.uavmatrix.com | sudo bash\n"})}),"\n",(0,i.jsx)(t.h3,{id:"post-installation-steps",children:"Post-Installation Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The installer will validate all components"}),"\n",(0,i.jsxs)(t.li,{children:["Access the web interface using:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Your Raspberry Pi's IP address: ",(0,i.jsx)(t.code,{children:"http://<your-pi-ip>/"})]}),"\n",(0,i.jsxs)(t.li,{children:["Default hostname: ",(0,i.jsx)(t.a,{href:"http://raspberrypi/",children:"http://raspberrypi.local"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Raspberry Pi Zero 2w, 3, 4, 5, or newer"}),"\n",(0,i.jsx)(t.li,{children:"64-bit capable Raspberry Pi hardware"}),"\n",(0,i.jsx)(t.li,{children:"Active internet connection during installation"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"upgrading-from-previous-versions",children:"Upgrading from Previous Versions"}),"\n",(0,i.jsx)(t.admonition,{title:"Important Database Changes",type:"danger",children:(0,i.jsx)(t.p,{children:"UAVcast-Pro v5 uses a completely new database structure. Data and configurations from version 4.x cannot be imported or used in version 5."})}),"\n",(0,i.jsx)(t.p,{children:"If you're using UAVcast-Pro 4.x:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Document your current settings (take screenshots or notes)"}),"\n",(0,i.jsx)(t.li,{children:"Install the latest Raspberry Pi OS 64-bit"}),"\n",(0,i.jsx)(t.li,{children:"Perform a fresh installation of UAVcast-Pro v5"}),"\n",(0,i.jsx)(t.li,{children:"Manually reconfigure your settings in v5"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For additional support, visit our ",(0,i.jsx)(t.a,{href:"https://discuss.uavmatrix.com",children:"community forum"})," or ",(0,i.jsx)(t.a,{href:"https://uavmatrix.com/contact-us",children:"contact support"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);