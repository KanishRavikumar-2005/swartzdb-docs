"use strict";(self.webpackChunkswartzdb_docs=self.webpackChunkswartzdb_docs||[]).push([[53],{1722:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"data-access/add","title":"Add Function","description":"The add function in SwartzDB is used to append multiple rows of data to a file without removing existing records. Unlike put, which overwrites the file, add ensures that new data is merged into the existing dataset.","source":"@site/docs/data-access/add.md","sourceDirName":"data-access","slug":"/data-access/add","permalink":"/docs/data-access/add","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Put Function","permalink":"/docs/data-access/put"},"next":{"title":"Get Row Function","permalink":"/docs/data-access/get-row"}}');var d=s(4848),i=s(8453);const t={sidebar_position:3},a="Add Function",o={},l=[{value:"<strong>How <code>add</code> Works</strong>",id:"how-add-works",level:2},{value:"<strong>Example Usage</strong>",id:"example-usage",level:2},{value:"<strong>Adding a Single Entry</strong>",id:"adding-a-single-entry",level:3},{value:"<strong>Adding Multiple Entries</strong>",id:"adding-multiple-entries",level:3},{value:"<strong>Adding an Array of Data</strong>",id:"adding-an-array-of-data",level:3},{value:"<strong>Why Use <code>add</code>?</strong>",id:"why-use-add",level:2},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"add-function",children:"Add Function"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"add"})," function in SwartzDB is used to ",(0,d.jsx)(n.strong,{children:"append multiple rows of data"})," to a file without removing existing records. Unlike ",(0,d.jsx)(n.code,{children:"put"}),", which ",(0,d.jsx)(n.strong,{children:"overwrites"})," the file, ",(0,d.jsx)(n.code,{children:"add"})," ensures that new data is merged into the existing dataset."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"how-add-works",children:(0,d.jsxs)(n.strong,{children:["How ",(0,d.jsx)(n.code,{children:"add"})," Works"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Retrieves the current data from the file."}),"\n",(0,d.jsx)(n.li,{children:"Accepts multiple new rows as separate parameters or a single array."}),"\n",(0,d.jsx)(n.li,{children:"Merges the new data with the existing data."}),"\n",(0,d.jsx)(n.li,{children:"Saves the updated dataset back to the file."}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"example-usage",children:(0,d.jsx)(n.strong,{children:"Example Usage"})}),"\n",(0,d.jsx)(n.h3,{id:"adding-a-single-entry",children:(0,d.jsx)(n.strong,{children:"Adding a Single Entry"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:'$sdb->add("users", ["name" => "John", "age" => 30]);\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Fetches data from ",(0,d.jsx)(n.code,{children:"users"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["Adds ",(0,d.jsx)(n.code,{children:'{"name": "John", "age": 30}'})," to it."]}),"\n",(0,d.jsx)(n.li,{children:"Saves the updated JSON file."}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"adding-multiple-entries",children:(0,d.jsx)(n.strong,{children:"Adding Multiple Entries"})}),"\n",(0,d.jsx)(n.p,{children:"The function allows adding multiple rows in a single call:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:'$sdb->add("users", \r\n    ["name" => "Alice", "age" => 25], \r\n    ["name" => "Bob", "age" => 28]\r\n);\n'})}),"\n",(0,d.jsxs)(n.p,{children:["This appends both rows to ",(0,d.jsx)(n.code,{children:"users"}),"."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"adding-an-array-of-data",children:(0,d.jsx)(n.strong,{children:"Adding an Array of Data"})}),"\n",(0,d.jsx)(n.p,{children:"Instead of passing multiple arguments, you can pass an array:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:'$newUsers = [\r\n    ["name" => "Charlie", "age" => 35],\r\n    ["name" => "Diana", "age" => 22]\r\n];\r\n\r\n$sdb->add("users", $newUsers);\n'})}),"\n",(0,d.jsxs)(n.p,{children:["This approach is useful when handling ",(0,d.jsx)(n.strong,{children:"bulk inserts"})," dynamically."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"why-use-add",children:(0,d.jsxs)(n.strong,{children:["Why Use ",(0,d.jsx)(n.code,{children:"add"}),"?"]})}),"\n",(0,d.jsxs)(n.p,{children:["\u2705 ",(0,d.jsx)(n.strong,{children:"Prevents Data Loss"})," \u2013 Unlike ",(0,d.jsx)(n.code,{children:"put"}),", it doesn\u2019t overwrite existing data.",(0,d.jsx)(n.br,{}),"\n","\u2705 ",(0,d.jsx)(n.strong,{children:"Supports Bulk Inserts"})," \u2013 Accepts multiple rows in a single function call.",(0,d.jsx)(n.br,{}),"\n","\u2705 ",(0,d.jsx)(n.strong,{children:"Flexible Input"})," \u2013 Works with individual entries and arrays."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"conclusion",children:(0,d.jsx)(n.strong,{children:"Conclusion"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"add"})," function is ",(0,d.jsx)(n.strong,{children:"ideal for appending multiple records"})," in SwartzDB while preserving the existing dataset. It's a simple way to ",(0,d.jsx)(n.strong,{children:"grow"})," your data without worrying about overwriting."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(6540);const d={},i=r.createContext(d);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);