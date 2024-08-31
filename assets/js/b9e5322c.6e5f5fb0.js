"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9541],{24739:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var t=i(85893),s=i(11151);const n={title:"Gas Management",sidebar_label:"Gas Management",sidebar_position:6,slug:"/middleware/callbacks/gas"},r="Gas Management",l={id:"middleware/callbacks/gas",title:"Gas Management",description:"Overview",source:"@site/versioned_docs/version-v7.7.x/04-middleware/02-callbacks/06-gas.md",sourceDirName:"04-middleware/02-callbacks",slug:"/middleware/callbacks/gas",permalink:"/v7/middleware/callbacks/gas",draft:!1,unlisted:!1,tags:[],version:"v7.7.x",sidebarPosition:6,frontMatter:{title:"Gas Management",sidebar_label:"Gas Management",sidebar_position:6,slug:"/middleware/callbacks/gas"},sidebar:"defaultSidebar",previous:{title:"End Users",permalink:"/v7/middleware/callbacks/end-users"},next:{title:"Support transfer of coins whose base denom contains slashes",permalink:"/v7/migrations/support-denoms-with-slashes"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Chain Wide Gas Limit",id:"chain-wide-gas-limit",level:3},{value:"User Defined Gas Limit",id:"user-defined-gas-limit",level:3},{value:"Gas Limit Enforcement",id:"gas-limit-enforcement",level:2}];function o(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"gas-management",children:"Gas Management"}),"\n",(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(a.p,{children:"Executing arbitrary code on a chain can be arbitrarily expensive. In general, a callback may consume infinite gas (think of a callback that loops forever). This is problematic for a few reasons:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"It can block the packet lifecycle."}),"\n",(0,t.jsx)(a.li,{children:"It can be used to consume all of the relayer's funds and gas."}),"\n",(0,t.jsx)(a.li,{children:"A relayer can DOS the callback execution by sending a packet with a low amount of gas."}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["To prevent these, the callbacks middleware introduces two gas limits: a chain wide gas limit (",(0,t.jsx)(a.code,{children:"maxCallbackGas"}),") and a user defined gas limit."]}),"\n",(0,t.jsx)(a.h3,{id:"chain-wide-gas-limit",children:"Chain Wide Gas Limit"}),"\n",(0,t.jsx)(a.p,{children:"Since the callbacks middleware does not have a keeper, it does not use a governance parameter to set the chain wide gas limit. Instead, the chain wide gas limit is passed in as a parameter to the callbacks middleware during initialization."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",children:"// app.go\n\nmaxCallbackGas := uint64(1_000_000)\n\nvar transferStack porttypes.IBCModule\ntransferStack = transfer.NewIBCModule(app.TransferKeeper)\ntransferStack = ibcfee.NewIBCMiddleware(transferStack, app.IBCFeeKeeper)\ntransferStack = ibccallbacks.NewIBCMiddleware(transferStack, app.IBCFeeKeeper, app.MockContractKeeper, maxCallbackGas)\n// Since the callbacks middleware itself is an ics4wrapper, it needs to be passed to the transfer keeper\napp.TransferKeeper.WithICS4Wrapper(transferStack.(porttypes.ICS4Wrapper))\n\n// Add transfer stack to IBC Router\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferStack)\n"})}),"\n",(0,t.jsx)(a.h3,{id:"user-defined-gas-limit",children:"User Defined Gas Limit"}),"\n",(0,t.jsx)(a.p,{children:"The user defined gas limit is set by the IBC Actor during packet creation. The user defined gas limit is set in the packet memo. If the user defined gas limit is not set or if the user defined gas limit is greater than the chain wide gas limit, then the chain wide gas limit is used as the user defined gas limit."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsonc",children:'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  },\n  "dest_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"gas-limit-enforcement",children:"Gas Limit Enforcement"}),"\n",(0,t.jsx)(a.p,{children:"During a callback execution, there are three types of gas limits that are enforced:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"User defined gas limit"}),"\n",(0,t.jsx)(a.li,{children:"Chain wide gas limit"}),"\n",(0,t.jsx)(a.li,{children:"Context gas limit (amount of gas that the relayer has left for this execution)"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Chain wide gas limit is used as a maximum to the user defined gas limit as explained in the ",(0,t.jsx)(a.a,{href:"#user-defined-gas-limit",children:"previous section"}),". It may also be used as a default value if no user gas limit is provided. Therefore, we can ignore the chain wide gas limit for the rest of this section and work with the minimum of the chain wide gas limit and user defined gas limit. This minimum is called the commit gas limit."]}),"\n",(0,t.jsxs)(a.p,{children:["The gas limit enforcement is done by executing the callback inside a cached context with a new gas meter. The gas meter is initialized with the minimum of the commit gas limit and the context gas limit. This minimum is called the execution gas limit. We say that retries are allowed if ",(0,t.jsx)(a.code,{children:"context gas limit < commit gas limit"}),". Otherwise, we say that retries are not allowed."]}),"\n",(0,t.jsx)(a.p,{children:"If the callback execution fails due to an out of gas error, then the middleware checks if retries are allowed. If retries are not allowed, then it recovers from the out of gas error, consumes execution gas limit from the original context, and continues with the packet life cycle. If retries are allowed, then it panics with an out of gas error to revert the entire tx. The packet can then be submitted again with a higher gas limit. The out of gas panic descriptor is shown below."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-go",children:'fmt.Sprintf("ibc %s callback out of gas; commitGasLimit: %d", callbackType, callbackData.CommitGasLimit)}\n'})}),"\n",(0,t.jsx)(a.p,{children:"If the callback execution does not fail due to an out of gas error then the callbacks middleware does not block the packet life cycle regardless of whether retries are allowed or not."})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,a,i)=>{i.d(a,{Z:()=>l,a:()=>r});var t=i(67294);const s={},n=t.createContext(s);function r(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);