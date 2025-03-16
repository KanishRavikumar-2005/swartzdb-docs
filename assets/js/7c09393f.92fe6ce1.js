"use strict";(self.webpackChunkswartzdb_docs=self.webpackChunkswartzdb_docs||[]).push([[299],{8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(6540);const t={},d=r.createContext(t);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}},9182:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"data-access/add-row","title":"Add Row Function","description":"The addrow function allows you to **append new data** to an existing database without overwriting previous records. Unlike put, which replaces the entire database, addrow ensures that old data remains intact while adding new entries.","source":"@site/docs/data-access/add-row.md","sourceDirName":"data-access","slug":"/data-access/add-row","permalink":"/docs/data-access/add-row","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Get Row Function","permalink":"/docs/data-access/get-row"},"next":{"title":"Update Row Function","permalink":"/docs/data-access/update-row"}}');var t=s(4848),d=s(8453);const i={sidebar_position:5},o="Add Row Function",a={},c=[{value:"<strong>How to Use the <code>add_row</code> Function</strong>",id:"how-to-use-the-add_row-function",level:2},{value:"<strong>Basic Usage</strong>",id:"basic-usage",level:3},{value:"<strong>How the <code>add_row</code> Function Works</strong>",id:"how-the-add_row-function-works",level:2},{value:"<strong>Return Behavior</strong>",id:"return-behavior",level:2},{value:"<strong>Example: Adding Multiple Users</strong>",id:"example-adding-multiple-users",level:2},{value:"<strong>\u26a0\ufe0f Important Notes</strong>",id:"\ufe0f-important-notes",level:2},{value:"<strong>Final Thoughts</strong>",id:"final-thoughts",level:2}];function l(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"add-row-function",children:"Add Row Function"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"add_row"})," function allows you to ",(0,t.jsx)(n.strong,{children:"append new data"})," to an existing database without overwriting previous records. Unlike ",(0,t.jsx)(n.code,{children:"put"}),", which replaces the entire database, ",(0,t.jsx)(n.code,{children:"add_row"})," ensures that old data remains intact while adding new entries."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use-the-add_row-function",children:(0,t.jsxs)(n.strong,{children:["How to Use the ",(0,t.jsx)(n.code,{children:"add_row"})," Function"]})}),"\n",(0,t.jsx)(n.h3,{id:"basic-usage",children:(0,t.jsx)(n.strong,{children:"Basic Usage"})}),"\n",(0,t.jsx)(n.p,{children:"To add a new record to the database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$newUser = [\r\n    "username" => "alice",\r\n    "email" => "alice@example.com"\r\n];\r\n\r\n$sdb->add_row("users", $newUser);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This appends ",(0,t.jsx)(n.code,{children:"alice"})," to the ",(0,t.jsx)(n.code,{children:"users.sdb"})," database ",(0,t.jsx)(n.strong,{children:"without deleting"})," any previous records."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"how-the-add_row-function-works",children:(0,t.jsxs)(n.strong,{children:["How the ",(0,t.jsx)(n.code,{children:"add_row"})," Function Works"]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Retrieves Existing Data"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Calls ",(0,t.jsx)(n.code,{children:"get($file)"})," to ",(0,t.jsx)(n.strong,{children:"fetch current database contents"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If the database is empty, it initializes a new array."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Appends the New Entry"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adds the new record to the existing data."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Encodes & Saves the Updated Database"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Converts the updated dataset into JSON format."}),"\n",(0,t.jsxs)(n.li,{children:["Calls ",(0,t.jsx)(n.code,{children:"put($file, $final)"}),", ",(0,t.jsx)(n.strong,{children:"replacing"})," the database with the updated data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"return-behavior",children:(0,t.jsx)(n.strong,{children:"Return Behavior"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Success"})," \u2192 The new row is added to the database."]}),"\n",(0,t.jsxs)(n.li,{children:["\u274c ",(0,t.jsx)(n.strong,{children:"Failure"})," \u2192 If ",(0,t.jsx)(n.code,{children:"put"})," fails, data is not updated."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"example-adding-multiple-users",children:(0,t.jsx)(n.strong,{children:"Example: Adding Multiple Users"})}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"add_row"})," multiple times to keep appending records:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$sdb->add_row("users", ["username" => "bob", "email" => "bob@example.com"]);\r\n$sdb->add_row("users", ["username" => "charlie", "email" => "charlie@example.com"]);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This keeps adding new users without ",(0,t.jsx)(n.strong,{children:"erasing"})," the existing ones."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-important-notes",children:(0,t.jsx)(n.strong,{children:"\u26a0\ufe0f Important Notes"})}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsxs)(n.strong,{children:["Use ",(0,t.jsx)(n.code,{children:"add_row"})," when:"]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You want to ",(0,t.jsx)(n.strong,{children:"expand"})," the database ",(0,t.jsx)(n.strong,{children:"without losing"})," previous records."]}),"\n",(0,t.jsx)(n.li,{children:"Storing multiple entries (e.g., a user list, logs, inventory)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u274c ",(0,t.jsxs)(n.strong,{children:["Do NOT use ",(0,t.jsx)(n.code,{children:"add_row"})," when:"]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You need to ",(0,t.jsx)(n.strong,{children:"update existing records"})," (use an ",(0,t.jsx)(n.code,{children:"update"})," function instead)."]}),"\n",(0,t.jsx)(n.li,{children:"The database is not structured as an array."}),"\n",(0,t.jsx)(n.li,{children:"Performance is a concern (if you are expecting heavy performance, SwartzDB is not the right choice)."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"final-thoughts",children:(0,t.jsx)(n.strong,{children:"Final Thoughts"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"add_row"})," function is a ",(0,t.jsx)(n.strong,{children:"safe"})," and ",(0,t.jsx)(n.strong,{children:"non-destructive"})," way to grow your SwartzDB database.",(0,t.jsx)(n.br,{}),"\n","Use it whenever you need to add new entries ",(0,t.jsx)(n.strong,{children:"without risking data loss"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);