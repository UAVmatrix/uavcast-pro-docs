"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[576],{6461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"setup/vpn/index","title":"Virtual Private Network (VPN)","description":"Abbreviations","source":"@site/docs/setup/vpn/index.md","sourceDirName":"setup/vpn","slug":"/setup-vpn","permalink":"/docs/5.x/setup-vpn","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup/vpn/index.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"slug":"/setup-vpn","title":"Virtual Private Network (VPN)","authors":"Bernt Christian Egeland","tags":[],"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Setup","permalink":"/docs/5.x/category/setup"},"next":{"title":"Quick Start Tutorial","permalink":"/docs/5.x/quick-start"}}');var a=n(4848),r=n(8453);const o={slug:"/setup-vpn",title:"Virtual Private Network (VPN)",authors:"Bernt Christian Egeland",tags:[],sidebar_position:4},s=void 0,l={},c=[{value:"Abbreviations",id:"abbreviations",level:2},{value:"Introduction",id:"introduction",level:2},{value:"ZeroTier Setup",id:"zerotier-setup",level:2},{value:"Tailscale Setup",id:"tailscale-setup",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"abbreviations",children:"Abbreviations"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"GCS: Ground Control Station"}),"\n",(0,a.jsx)(t.li,{children:"VPN: Virtual Private Network"}),"\n",(0,a.jsx)(t.li,{children:"UAV: Unmanned Aerial Vehicle"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"UAVcast Pro supports both ZeroTier and Tailscale VPNs, enabling a reliable connection between your drone and ground control station (GCS) without requiring port forwarding or a public IP address."}),"\n",(0,a.jsx)(t.p,{children:"UAVcast uses the UDP protocol to stream video and telemetry data, which can be challenging to manage behind NAT or firewall restrictions. By connecting your drone and GCS to the same VPN network, video and telemetry data can securely pass over the VPN, bypassing these issues."}),"\n",(0,a.jsx)(t.h2,{id:"zerotier-setup",children:"ZeroTier Setup"}),"\n",(0,a.jsxs)(t.p,{children:["When purchasing UAVcast Pro, you receive login credentials for ",(0,a.jsx)(t.a,{href:"https://uavnet.uavmatrix.com",children:"uavnet.uavmatrix.com"}),", a ZeroTier controller for managing your network."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to ",(0,a.jsx)(t.a,{href:"https://uavnet.uavmatrix.com",children:"uavnet.uavmatrix.com"})," and log in with the provided credentials."]}),"\n",(0,a.jsx)(t.li,{children:"Create a new network and assign it a name."}),"\n",(0,a.jsxs)(t.li,{children:["Add your devices (drone and GCS) to this network.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"In UAVcast Pro, navigate to the VPN page and enter the network ID from step 2. Save the settings, and you will see details about the network and connected devices."}),"\n",(0,a.jsx)(t.li,{children:"On the GCS, install the ZeroTier client and join the network you created in step 2 using the same network ID."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"In the ZeroTier control panel at uavnet.uavmatrix.com, verify your devices are connected and ensure the \u201cAuth\u201d checkbox is checked for each device you want in the network."}),"\n",(0,a.jsx)(t.li,{children:"Copy the managed IP address of the GCS and paste it into the Ground Control Station destination field in UAVcast Pro."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You should now have a VPN connection between your drone and GCS."}),"\n",(0,a.jsx)(t.h2,{id:"tailscale-setup",children:"Tailscale Setup"}),"\n",(0,a.jsx)(t.p,{children:"Tailscale offers an easy-to-set-up VPN service. UAVcast Pro supports Tailscale as an alternative to ZeroTier."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to ",(0,a.jsx)(t.a,{href:"https://tailscale.com",children:"tailscale.com"})," and create an account."]}),"\n",(0,a.jsxs)(t.li,{children:["In the UAVcast Pro VPN page, select Tailscale. You can authenticate using either web login or a pre-auth key.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If using web login, you will be redirected to Tailscale\u2019s site to log in and authorize UAVcast Pro to access your Tailscale account."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"On the GCS, install the Tailscale client and log in with the same account you used in step 1. You should now see the GCS listed in your Tailscale control panel. Copy the IP address of the GCS and paste it into the Ground Control Station destination field in UAVcast Pro."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(6540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);