"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1035],{99538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const o={title:"Handling Proposals",sidebar_label:"Handling Proposals",sidebar_position:7,slug:"/ibc/light-clients/proposals"},l="Handling proposals",r={id:"light-clients/developer-guide/proposals",title:"Handling Proposals",description:"It is possible to update the client with the state of the substitute client through a governance proposal. This type of governance proposal is typically used to recover an expired or frozen client, as it can recover the entire state and therefore all existing channels built on top of the client. CheckSubstituteAndUpdateState should be implemented to handle the proposal.",source:"@site/versioned_docs/version-v8.4.x/03-light-clients/01-developer-guide/07-proposals.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/proposals",permalink:"/v8/ibc/light-clients/proposals",draft:!1,unlisted:!1,tags:[],version:"v8.4.x",sidebarPosition:7,frontMatter:{title:"Handling Proposals",sidebar_label:"Handling Proposals",sidebar_position:7,slug:"/ibc/light-clients/proposals"},sidebar:"defaultSidebar",previous:{title:"Existence/Non-Existence Proofs",permalink:"/v8/ibc/light-clients/proofs"},next:{title:"Handling Genesis",permalink:"/v8/ibc/light-clients/genesis"}},a={},c=[{value:"Implementing <code>CheckSubstituteAndUpdateState</code>",id:"implementing-checksubstituteandupdatestate",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"handling-proposals",children:"Handling proposals"}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to update the client with the state of the substitute client through a governance proposal. ",(0,s.jsx)(t.a,{href:"/v8/ibc/proposals",children:"This type of governance proposal"})," is typically used to recover an expired or frozen client, as it can recover the entire state and therefore all existing channels built on top of the client. ",(0,s.jsx)(t.code,{children:"CheckSubstituteAndUpdateState"})," should be implemented to handle the proposal."]}),"\n",(0,s.jsxs)(t.h2,{id:"implementing-checksubstituteandupdatestate",children:["Implementing ",(0,s.jsx)(t.code,{children:"CheckSubstituteAndUpdateState"})]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsxs)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go",children:[(0,s.jsx)(t.code,{children:"ClientState"}),"interface"]}),", we find:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"// CheckSubstituteAndUpdateState must verify that the provided substitute may be used to update the subject client.\n// The light client must set the updated client and consensus states within the clientStore for the subject client.\nCheckSubstituteAndUpdateState(\n  ctx sdk.Context, \n  cdc codec.BinaryCodec, \n  subjectClientStore, \n  substituteClientStore sdk.KVStore, \n  substituteClient ClientState,\n) error\n"})}),"\n",(0,s.jsx)(t.p,{children:"Prior to updating, this function must verify that:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["the substitute client is the same type as the subject client. For a reference implementation, please see the ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L32",children:"Tendermint light client"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["the provided substitute may be used to update the subject client. This may mean that certain parameters must remain unaltered. For example, a ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L84",children:"valid substitute Tendermint light client"})," must NOT change the chain ID, trust level, max clock drift, unbonding period, proof specs or upgrade path. Please note that ",(0,s.jsx)(t.code,{children:"AllowUpdateAfterMisbehaviour"})," and ",(0,s.jsx)(t.code,{children:"AllowUpdateAfterExpiry"})," have been deprecated (see ADR 026 for more information)."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After these checks are performed, the function must ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L77",children:"set the updated client and consensus states"})," within the client store for the subject client."]}),"\n",(0,s.jsxs)(t.p,{children:["Please refer to the ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L27",children:"Tendermint light client implementation"})," for reference."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var s=n(67294);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);