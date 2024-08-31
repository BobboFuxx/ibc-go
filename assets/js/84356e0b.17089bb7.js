"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5282],{30070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var i=t(85893),s=t(11151);const c={title:"Active Channels",sidebar_label:"Active Channels",sidebar_position:9,slug:"/apps/interchain-accounts/active-channels"},a="Understanding Active Channels",o={id:"apps/interchain-accounts/active-channels",title:"Active Channels",description:"The Interchain Accounts module uses either ORDERED or UNORDERED channels.",source:"@site/versioned_docs/version-v7.7.x/02-apps/02-interchain-accounts/09-active-channels.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/active-channels",permalink:"/v7/apps/interchain-accounts/active-channels",draft:!1,unlisted:!1,tags:[],version:"v7.7.x",sidebarPosition:9,frontMatter:{title:"Active Channels",sidebar_label:"Active Channels",sidebar_position:9,slug:"/apps/interchain-accounts/active-channels"},sidebar:"defaultSidebar",previous:{title:"Client",permalink:"/v7/apps/interchain-accounts/client"},next:{title:"Authentication Modules",permalink:"/v7/apps/interchain-accounts/legacy/auth-modules"}},r={},h=[{value:"Future improvements",id:"future-improvements",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"understanding-active-channels",children:"Understanding Active Channels"}),"\n",(0,i.jsxs)(n.p,{children:["The Interchain Accounts module uses either ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#ordering",children:"ORDERED or UNORDERED"})," channels."]}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"ORDERED"})," channels, the order of transactions when sending packets from a controller to a host chain is maintained."]}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"UNORDERED"})," channels, there is no guarantee that the order of transactions when sending packets from the controller to the host chain is maintained. Since ibc-go v7.5.0, the default ordering for new ICA channels is ",(0,i.jsx)(n.code,{children:"UNORDERED"}),", if no ordering is specified in ",(0,i.jsx)(n.code,{children:"MsgRegisterInterchainAccount"})," (previously the default ordering was ",(0,i.jsx)(n.code,{children:"ORDERED"}),")."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A limitation when using ORDERED channels is that when a packet times out the channel will be closed."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the case of a channel closing, a controller chain needs to be able to regain access to the interchain account registered on this channel. ",(0,i.jsx)(n.code,{children:"Active Channels"})," enable this functionality."]}),"\n",(0,i.jsxs)(n.p,{children:["When an Interchain Account is registered using ",(0,i.jsx)(n.code,{children:"MsgRegisterInterchainAccount"}),", a new channel is created on a particular port. During the ",(0,i.jsx)(n.code,{children:"OnChanOpenAck"})," and ",(0,i.jsx)(n.code,{children:"OnChanOpenConfirm"})," steps (on controller & host chain respectively) the ",(0,i.jsx)(n.code,{children:"Active Channel"})," for this interchain account is stored in state."]}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to create a new channel using the same controller chain portID if the previously set ",(0,i.jsx)(n.code,{children:"Active Channel"})," is now in a ",(0,i.jsx)(n.code,{children:"CLOSED"})," state. This channel creation can be initialized programmatically by sending a new ",(0,i.jsx)(n.code,{children:"MsgChannelOpenInit"})," message like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"msg := channeltypes.NewMsgChannelOpenInit(portID, string(versionBytes), channeltypes.ORDERED, []string{connectionID}, icatypes.HostPortID, authtypes.NewModuleAddress(icatypes.ModuleName).String())\nhandler := keeper.msgRouter.Handler(msg)\nres, err := handler(ctx, msg)\nif err != nil {\n  return err\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, any relayer operator may initiate a new channel handshake for this interchain account once the previously set ",(0,i.jsx)(n.code,{children:"Active Channel"})," is in a ",(0,i.jsx)(n.code,{children:"CLOSED"})," state. This is done by initiating the channel handshake on the controller chain using the same portID associated with the interchain account in question."]}),"\n",(0,i.jsxs)(n.p,{children:["It is important to note that once a channel has been opened for a given interchain account, new channels can not be opened for this account until the currently set ",(0,i.jsx)(n.code,{children:"Active Channel"})," is set to ",(0,i.jsx)(n.code,{children:"CLOSED"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"future-improvements",children:"Future improvements"}),"\n",(0,i.jsxs)(n.p,{children:["Future versions of the ICS-27 protocol and the Interchain Accounts module will likely use a new channel type that provides ordering of packets without the channel closing in the event of a packet timing out, thus removing the need for ",(0,i.jsx)(n.code,{children:"Active Channels"})," entirely.\nThe following is a list of issues which will provide the infrastructure to make this possible:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/issues/1599",children:"IBC Channel Upgrades"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/issues/1661",children:"Implement ORDERED_ALLOW_TIMEOUT logic in 04-channel"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/issues/1662",children:"Add ORDERED_ALLOW_TIMEOUT as supported ordering in 03-connection"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/issues/1663",children:"Allow ICA channels to be opened as ORDERED_ALLOW_TIMEOUT"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const s={},c=i.createContext(s);function a(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);