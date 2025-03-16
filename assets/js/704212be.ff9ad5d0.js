"use strict";(self.webpackChunkswartzdb_docs=self.webpackChunkswartzdb_docs||[]).push([[550],{1610:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"data-access/get","title":"Get Function","description":"SwartzDB provides the get function to fetch stored data from the database. Since SwartzDB stores data in encrypted JSON format, the get function automatically decrypts and decodes the data before returning it.","source":"@site/docs/data-access/get.md","sourceDirName":"data-access","slug":"/data-access/get","permalink":"/docs/data-access/get","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Data Access Functions","permalink":"/docs/category/data-access-functions"},"next":{"title":"Put Function","permalink":"/docs/data-access/put"}}');var t=s(4848),i=s(8453);const a={sidebar_position:1},d="Get Function",o={},c=[{value:"<strong>How to Use the <code>get</code> Function</strong>",id:"how-to-use-the-get-function",level:2},{value:"<strong>Basic Data Retrieval</strong>",id:"basic-data-retrieval",level:3},{value:"<strong>Reverse Data Order</strong>",id:"reverse-data-order",level:3},{value:"<strong>How the <code>get</code> Function Works</strong>",id:"how-the-get-function-works",level:2},{value:"<strong>Return Values</strong>",id:"return-values",level:2},{value:"<strong>Example: Handling Retrieved Data</strong>",id:"example-handling-retrieved-data",level:2},{value:"<strong>Error Handling</strong>",id:"error-handling",level:2},{value:"<strong>Use Cases for <code>get</code></strong>",id:"use-cases-for-get",level:2},{value:"<strong>Important Notes</strong>",id:"important-notes",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"get-function",children:"Get Function"})}),"\n",(0,t.jsxs)(n.p,{children:["SwartzDB provides the ",(0,t.jsx)(n.code,{children:"get"})," function to ",(0,t.jsx)(n.strong,{children:"fetch stored data"})," from the database. Since SwartzDB stores data in ",(0,t.jsx)(n.strong,{children:"encrypted JSON format"}),", the ",(0,t.jsx)(n.code,{children:"get"})," function automatically ",(0,t.jsx)(n.strong,{children:"decrypts"})," and ",(0,t.jsx)(n.strong,{children:"decodes"})," the data before returning it."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use-the-get-function",children:(0,t.jsxs)(n.strong,{children:["How to Use the ",(0,t.jsx)(n.code,{children:"get"})," Function"]})}),"\n",(0,t.jsx)(n.h3,{id:"basic-data-retrieval",children:(0,t.jsx)(n.strong,{children:"Basic Data Retrieval"})}),"\n",(0,t.jsx)(n.p,{children:"To retrieve all data from a database file, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$data = $sdb->get("mydatabase");\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This will return the data in an ",(0,t.jsx)(n.strong,{children:"array format"}),", making it easy to manipulate."]}),"\n",(0,t.jsx)(n.h3,{id:"reverse-data-order",children:(0,t.jsx)(n.strong,{children:"Reverse Data Order"})}),"\n",(0,t.jsxs)(n.p,{children:["If you want the data in ",(0,t.jsx)(n.strong,{children:"reverse order"}),", use:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$data = $sdb->get("mydatabase", "reverse");\n'})}),"\n",(0,t.jsx)(n.p,{children:"This is useful for fetching recent entries first (e.g., latest logs or messages)."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"how-the-get-function-works",children:(0,t.jsxs)(n.strong,{children:["How the ",(0,t.jsx)(n.code,{children:"get"})," Function Works"]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Retrieves the Encrypted File Contents"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Reads data from the specified ",(0,t.jsx)(n.code,{children:".sdb"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["If the file ",(0,t.jsx)(n.strong,{children:"does not exist"})," or is unreadable, it returns ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Decryption Process"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The function decrypts the data twice using ",(0,t.jsx)(n.strong,{children:"global encryption keys"})," (",(0,t.jsx)(n.code,{children:"$cipher"}),", ",(0,t.jsx)(n.code,{children:"$key"}),", ",(0,t.jsx)(n.code,{children:"$Ekey"}),", ",(0,t.jsx)(n.code,{children:"$iv"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"If decryption fails, the data remains inaccessible."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"JSON Decoding"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Converts the decrypted ",(0,t.jsx)(n.strong,{children:"JSON string"})," into an ",(0,t.jsx)(n.strong,{children:"associative array"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If the database is empty, it returns an empty array."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Sorting (Optional)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:'"reverse"'})," is passed as the second parameter, it ",(0,t.jsx)(n.strong,{children:"reverses the array order"})," before returning."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"return-values",children:(0,t.jsx)(n.strong,{children:"Return Values"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Array"})," \u2192 Successfully retrieved data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Empty Array (",(0,t.jsx)(n.code,{children:"[]"}),")"]})," \u2192 Database exists but has no stored data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"null"})})," \u2192 Error occurred (e.g., file missing, decryption failure)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"example-handling-retrieved-data",children:(0,t.jsx)(n.strong,{children:"Example: Handling Retrieved Data"})}),"\n",(0,t.jsxs)(n.p,{children:["Since the function returns an ",(0,t.jsx)(n.strong,{children:"associative array"}),", you can loop through it easily:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$users = $sdb->get("users");\r\n\r\nif (!empty($users)) {\r\n    foreach ($users as $user) {\r\n        echo "Username: " . $user["username"] . "<br>";\r\n    }\r\n} else {\r\n    echo "No users found.";\r\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"error-handling",children:(0,t.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,t.jsxs)(n.p,{children:["Enable error reporting by passing ",(0,t.jsx)(n.code,{children:"true"})," as the third argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$data = $sdb->get("mydatabase", "", true);\n'})}),"\n",(0,t.jsx)(n.p,{children:"This ensures errors (like unreadable files) are logged [in the browser console] for debugging."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"use-cases-for-get",children:(0,t.jsxs)(n.strong,{children:["Use Cases for ",(0,t.jsx)(n.code,{children:"get"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fetching all users, logs, or records"})," stored in SwartzDB."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Displaying data in reverse order"})," (e.g., latest transactions first)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Checking if a database is empty"})," before inserting new entries."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"important-notes",children:(0,t.jsx)(n.strong,{children:"Important Notes"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Empty Data"})," return an ",(0,t.jsx)(n.strong,{children:"empty array"}),", not ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Data is ",(0,t.jsx)(n.strong,{children:"automatically formatted"})," for easier processing."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Using the ",(0,t.jsx)(n.code,{children:"get"})," function, you can safely retrieve ",(0,t.jsx)(n.strong,{children:"encrypted data"}),", ensuring both security and accessibility."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);