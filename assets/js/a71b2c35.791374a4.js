"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[744],{52409:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(85893),n=r(11151);const i={title:"Genesis Restart Upgrades",sidebar_label:"Genesis Restart Upgrades",sidebar_position:3,slug:"/ibc/upgrades/genesis-restart"},a="Genesis Restart Upgrades",d={id:"ibc/upgrades/genesis-restart",title:"Genesis Restart Upgrades",description:"Learn how to upgrade your chain and counterparty clients using genesis restarts.",source:"@site/versioned_docs/version-v6.3.x/01-ibc/05-upgrades/03-genesis-restart.md",sourceDirName:"01-ibc/05-upgrades",slug:"/ibc/upgrades/genesis-restart",permalink:"/v6/ibc/upgrades/genesis-restart",draft:!1,unlisted:!1,tags:[],version:"v6.3.x",sidebarPosition:3,frontMatter:{title:"Genesis Restart Upgrades",sidebar_label:"Genesis Restart Upgrades",sidebar_position:3,slug:"/ibc/upgrades/genesis-restart"},sidebar:"defaultSidebar",previous:{title:"IBC Client Developer Guide to Upgrades",permalink:"/v6/ibc/upgrades/developer-guide"},next:{title:"Governance Proposals",permalink:"/v6/ibc/proposals"}},o={},l=[{value:"IBC Client Breaking Upgrades",id:"ibc-client-breaking-upgrades",level:2},{value:"Step-by-Step Upgrade Process for SDK Chains",id:"step-by-step-upgrade-process-for-sdk-chains",level:3},{value:"Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients",id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",level:4},{value:"Non-IBC Client Breaking Upgrades",id:"non-ibc-client-breaking-upgrades",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"genesis-restart-upgrades",children:"Genesis Restart Upgrades"}),"\n",(0,t.jsx)(s.admonition,{title:"Synopsis",type:"note",children:(0,t.jsx)(s.p,{children:"Learn how to upgrade your chain and counterparty clients using genesis restarts."})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"NOTE"}),": Regular genesis restarts are currently unsupported by relayers!"]}),"\n",(0,t.jsx)(s.h2,{id:"ibc-client-breaking-upgrades",children:"IBC Client Breaking Upgrades"}),"\n",(0,t.jsx)(s.p,{children:"IBC client breaking upgrades are possible using genesis restarts.\nIt is highly recommended to use the in-place migrations instead of a genesis restart.\nGenesis restarts should be used sparingly and as backup plans."}),"\n",(0,t.jsx)(s.p,{children:"Genesis restarts still require the usage of an IBC upgrade proposal in order to correctly upgrade counterparty clients."}),"\n",(0,t.jsx)(s.h3,{id:"step-by-step-upgrade-process-for-sdk-chains",children:"Step-by-Step Upgrade Process for SDK Chains"}),"\n",(0,t.jsxs)(s.p,{children:["If the IBC-connected chain is conducting an upgrade that will break counterparty clients, it must ensure that the upgrade is first supported by IBC using the ",(0,t.jsx)(s.a,{href:"/v6/ibc/upgrades/quick-guide#ibc-client-breaking-upgrades",children:"IBC Client Breaking Upgrade List"})," and then execute the upgrade process described below in order to prevent counterparty clients from breaking."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Create a 02-client ",(0,t.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/v6.2.0/proto/ibc/core/client/v1/client.proto#L58-L77",children:(0,t.jsx)(s.code,{children:"UpgradeProposal"})})," with an ",(0,t.jsx)(s.code,{children:"UpgradePlan"})," and a new IBC ClientState in the ",(0,t.jsx)(s.code,{children:"UpgradedClientState"})," field. Note that the ",(0,t.jsx)(s.code,{children:"UpgradePlan"})," must specify an upgrade height ",(0,t.jsx)(s.strong,{children:"only"})," (no upgrade time), and the ",(0,t.jsx)(s.code,{children:"ClientState"})," should only include the fields common to all valid clients and zero out any client-customizable fields (such as TrustingPeriod)."]}),"\n",(0,t.jsxs)(s.li,{children:["Vote on and pass the ",(0,t.jsx)(s.code,{children:"UpgradeProposal"})]}),"\n",(0,t.jsx)(s.li,{children:"Halt the node after successful upgrade."}),"\n",(0,t.jsx)(s.li,{children:"Export the genesis file."}),"\n",(0,t.jsx)(s.li,{children:"Swap to the new binary."}),"\n",(0,t.jsx)(s.li,{children:"Run migrations on the genesis file."}),"\n",(0,t.jsxs)(s.li,{children:["Remove the ",(0,t.jsx)(s.code,{children:"UpgradeProposal"})," plan from the genesis file. This may be done by migrations."]}),"\n",(0,t.jsx)(s.li,{children:"Change desired chain-specific fields (chain id, unbonding period, etc). This may be done by migrations."}),"\n",(0,t.jsx)(s.li,{children:"Reset the node's data."}),"\n",(0,t.jsx)(s.li,{children:"Start the chain."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Upon the ",(0,t.jsx)(s.code,{children:"UpgradeProposal"})," passing, the upgrade module will commit the UpgradedClient under the key: ",(0,t.jsx)(s.code,{children:"upgrade/UpgradedIBCState/{upgradeHeight}/upgradedClient"}),". On the block right before the upgrade height, the upgrade module will also commit an initial consensus state for the next chain under the key: ",(0,t.jsx)(s.code,{children:"upgrade/UpgradedIBCState/{upgradeHeight}/upgradedConsState"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Once the chain reaches the upgrade height and halts, a relayer can upgrade the counterparty clients to the last block of the old chain. They can then submit the proofs of the ",(0,t.jsx)(s.code,{children:"UpgradedClient"})," and ",(0,t.jsx)(s.code,{children:"UpgradedConsensusState"})," against this last block and upgrade the counterparty client."]}),"\n",(0,t.jsx)(s.h4,{id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",children:"Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients"}),"\n",(0,t.jsxs)(s.p,{children:["These steps are identical to the regular ",(0,t.jsx)(s.a,{href:"/v6/ibc/upgrades/quick-guide#step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",children:"IBC client breaking upgrade process"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"non-ibc-client-breaking-upgrades",children:"Non-IBC Client Breaking Upgrades"}),"\n",(0,t.jsxs)(s.p,{children:["While ibc-go supports genesis restarts which do not break IBC clients, relayers do not support this upgrade path.\nHere is a tracking issue on ",(0,t.jsx)(s.a,{href:"https://github.com/informalsystems/ibc-rs/issues/1152",children:"Hermes"}),".\nPlease do not attempt a regular genesis restarts unless you have a tool to update counterparty clients correctly."]})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>a});var t=r(67294);const n={},i=t.createContext(n);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);