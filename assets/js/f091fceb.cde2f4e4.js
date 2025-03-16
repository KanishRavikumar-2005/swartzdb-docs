"use strict";(self.webpackChunkswartzdb_docs=self.webpackChunkswartzdb_docs||[]).push([[411],{1404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"getting-started/modify-keys","title":"Modify Encryption Keys","description":"Before using SwartzDB, you must update its configuration to secure your data. Open the /SwartzDB/config.php file and modify the following parameters:","source":"@site/docs/getting-started/modify-keys.md","sourceDirName":"getting-started","slug":"/getting-started/modify-keys","permalink":"/docs/getting-started/modify-keys","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Secure SwartzDB Folder","permalink":"/docs/getting-started/secure-folder"},"next":{"title":"Include Connection","permalink":"/docs/getting-started/require-file"}}');var i=n(4848),s=n(8453);const o={sidebar_position:3},a="Modify Encryption Keys",c={},d=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"modify-encryption-keys",children:"Modify Encryption Keys"})}),"\n",(0,i.jsxs)(t.p,{children:["Before using SwartzDB, you must update its configuration to secure your data. Open the ",(0,i.jsx)(t.code,{children:"/SwartzDB/config.php"})," file and modify the following parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"IV"}),": Initialization Vector used for encryption."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Key"}),": Your primary encryption key."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Extra Key (Ekey)"}),": An additional key to enhance security."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Below is an example configuration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:'$iv = "6YW9MdFN25mDVLzd"; \n$key = "CgtEb6Z4vzeg34CJzCCgtEb6Z4vzeg34CJzCb7YB";\n$Ekey = "3tce81XCrpOK3tce81XCrpOKvx123Q1gJKS3IJI";\n$cipher = "aes-256-cbc";\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SwartzDB"})," comes with default IV, Key, and Ekey values. ",(0,i.jsx)(t.strong,{children:"Change these values before using the database"})," to ensure your data is secure."]})}),"\n",(0,i.jsx)(t.p,{children:"This configuration step is crucial because it customizes the encryption settings to match your security needs."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);