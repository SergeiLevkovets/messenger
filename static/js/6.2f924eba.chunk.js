(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[6],{231:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var s=function(e){if(!e)return"field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},232:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return l}));var s=n(3),a=n(244),r=n(2),c=n(233),i=n.n(c),o=(n(0),n(110)),u=function(e){var t=e.meta,n=t.touched,s=t.error,a=e.children,c=n&&s;return Object(r.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(r.jsx)("div",{children:a}),c&&Object(r.jsx)("span",{children:s})]})},d=function(e){var t=e.input,n=Object(a.a)(e,["input"]);return Object(r.jsx)(u,Object(s.a)(Object(s.a)({},e),{},{children:Object(r.jsx)("textarea",Object(s.a)(Object(s.a)({},t),n))}))},j=function(e){var t=e.input,n=Object(a.a)(e,["input"]);return Object(r.jsx)(u,Object(s.a)(Object(s.a)({},e),{},{children:Object(r.jsx)("input",Object(s.a)(Object(s.a)({},t),n))}))},l=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(r.jsxs)("div",{children:[Object(r.jsx)(o.a,Object(s.a)({placeholder:e,name:t,component:a,validate:n},c))," ",i]})}},233:function(e,t,n){e.exports={formControl:"FormControl_formControl__RvFaQ",error:"FormControl_error__Hz8ev"}},237:function(e,t,n){"use strict";var s=n(2),a=n(110),r=(n(0),n(231)),c=n(232),i=Object(r.a)(10);t.a=function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(a.a,{component:c.c,name:"newMessageBody",placeholder:"Enter your message",validate:[r.b,i]})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Add post"})})]})}},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var s=n(3),a=n(2),r=n(34),c=n(35),i=n(37),o=n(36),u=n(6),d=n(0),j=n.n(d),l=n(27),b=n(31),g=function(e){return{isAuth:Object(b.c)(e)}},m=function(e){var t=function(t){Object(i.a)(d,t);var n=Object(o.a)(d);function d(){return Object(r.a)(this,d),n.apply(this,arguments)}return Object(c.a)(d,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(e,Object(s.a)({},this.props)):Object(a.jsx)(u.a,{to:"/loginName"})}}]),d}(j.a.Component);return Object(l.b)(g)(t)}},264:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1EwC-",dialogsItem:"Dialogs_dialogsItem__9194w",active:"Dialogs_active__G0loI",dialog:"Dialogs_dialog__2mx_o",messages:"Dialogs_messages__kyFgD",message:"Dialogs_message__2z5d5"}},265:function(e,t,n){e.exports={dialog:"DialogItem_dialog__3fy9e"}},266:function(e,t,n){e.exports={message:"Message_message__cjh3O"}},335:function(e,t,n){"use strict";n.r(t);n(0);var s=n(67),a=n(27),r=n(2),c=n(264),i=n.n(c),o=n(265),u=n.n(o),d=n(15),j=function(e){var t="/dialogs/"+e.id;return Object(r.jsx)("div",{className:u.a.dialog+" "+u.a.active,children:Object(r.jsx)(d.b,{to:t,children:e.name})})},l=n(266),b=n.n(l),g=function(e){return Object(r.jsx)("div",{className:b.a.message,children:e.message})},m=n(111),O=n(237),f=Object(m.a)({form:"dialogsAddMessageForm"})(O.a),h=function(e){var t=e.dialogs.map((function(e){return Object(r.jsx)(j,{name:e.name,id:e.id})})),n=e.messages.map((function(e){return Object(r.jsx)(g,{message:e.message})}));return Object(r.jsxs)("div",{className:i.a.dialogs,children:[Object(r.jsx)("div",{className:i.a.dialogsItem,children:t}),Object(r.jsxs)("div",{className:i.a.messages,children:[Object(r.jsx)("div",{children:n}),Object(r.jsx)(f,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})]})},x=n(242),v=n(19),_={addMessage:s.a};t.default=Object(v.d)(x.a,Object(a.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),_))(h)}}]);
//# sourceMappingURL=6.2f924eba.chunk.js.map