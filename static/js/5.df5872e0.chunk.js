(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[5],{231:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var r=function(t){if(!t)return"field is required"},c=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},232:function(t,e,n){"use strict";n.d(e,"c",(function(){return j})),n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return d}));var r=n(3),c=n(244),s=n(2),o=n(233),i=n.n(o),a=(n(0),n(110)),u=function(t){var e=t.meta,n=e.touched,r=e.error,c=t.children,o=n&&r;return Object(s.jsxs)("div",{className:i.a.formControl+" "+(o?i.a.error:""),children:[Object(s.jsx)("div",{children:c}),o&&Object(s.jsx)("span",{children:r})]})},j=function(t){var e=t.input,n=Object(c.a)(t,["input"]);return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},t),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))}))},b=function(t){var e=t.input,n=Object(c.a)(t,["input"]);return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},t),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))},d=function(t,e,n,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(a.a,Object(r.a)({placeholder:t,name:e,component:c,validate:n},o))," ",i]})}},233:function(t,e,n){t.exports={formControl:"FormControl_formControl__RvFaQ",error:"FormControl_error__Hz8ev"}},237:function(t,e,n){"use strict";var r=n(2),c=n(110),s=(n(0),n(231)),o=n(232),i=Object(s.a)(10);e.a=function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{component:o.c,name:"newMessageBody",placeholder:"Enter your message",validate:[s.b,i]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add post"})})]})}},242:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n(3),c=n(2),s=n(34),o=n(35),i=n(37),a=n(36),u=n(6),j=n(0),b=n.n(j),d=n(27),l=n(31),f=function(t){return{isAuth:Object(l.c)(t)}},O=function(t){var e=function(e){Object(i.a)(j,e);var n=Object(a.a)(j);function j(){return Object(s.a)(this,j),n.apply(this,arguments)}return Object(o.a)(j,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(t,Object(r.a)({},this.props)):Object(c.jsx)(u.a,{to:"/loginName"})}}]),j}(b.a.Component);return Object(d.b)(f)(e)}},243:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(60);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,s=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(a){c=!0,s=a}finally{try{r||null==i.return||i.return()}finally{if(c)throw s}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},328:function(t,e,n){t.exports={image:"ProfileInfo_image__2EdwZ",descriptionBlock:"ProfileInfo_descriptionBlock__1JEES"}},329:function(t,e,n){t.exports={postsBlock:"MyPost_postsBlock__1WoqL",post:"MyPost_post__3dMxK"}},330:function(t,e,n){t.exports={post:"Post_post__2ejJk"}},333:function(t,e,n){"use strict";n.r(e);var r=n(3),c=n(2),s=n(34),o=n(35),i=n(37),a=n(36),u=n(0),j=n.n(u),b=n(328),d=n.n(b),l=n(66),f=n(243),O=function(t){var e=t.storeStatus,n=t.updateStatus,r=Object(u.useState)(!1),s=Object(f.a)(r,2),o=s[0],i=s[1],a=Object(u.useState)(e),j=Object(f.a)(a,2),b=j[0],d=j[1];Object(u.useEffect)((function(){d(e)}),[e]);return Object(c.jsx)("div",{children:o?Object(c.jsx)("div",{children:Object(c.jsx)("input",{onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,value:b,onBlur:function(){i(!1),n(b)}})}):Object(c.jsx)("div",{children:Object(c.jsx)("span",{onDoubleClick:function(){i(!0)},children:e||"write your status"})})})},p=function(t){var e=t.profile,n=t.storeStatus,r=t.updateStatus;return e?Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"ProfileInfo"}),Object(c.jsx)(O,{storeStatus:n,updateStatus:r}),Object(c.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(c.jsx)("img",{src:e.photos.large}),Object(c.jsxs)("div",{children:['"aboutMe": ',e.aboutMe]}),Object(c.jsxs)("div",{children:['"fullName": ',e.fullName]}),Object(c.jsxs)("div",{children:['"userId": ',e.userId]})]})]}):Object(c.jsx)(l.a,{})},h=n(61),m=n(329),x=n.n(m),v=n(330),g=n.n(v),y=function(t){return Object(c.jsxs)("div",{className:g.a.post,children:[Object(c.jsx)("img",{src:"https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg"}),Object(c.jsx)("div",{children:t.message}),Object(c.jsxs)("span",{children:["Like ",t.like]})]})},_=n(111),S=n(237),k=j.a.memo((function(t){var e=t.posts.map((function(t){return Object(c.jsx)(y,{message:t.message,like:t.likesCount})}));return Object(c.jsxs)("div",{className:x.a.postsBlock,children:[Object(c.jsx)("h3",{children:"My post"}),Object(c.jsx)(w,{onSubmit:function(e){t.addPost(e.newMessageBody)}}),Object(c.jsx)("div",{className:x.a.post,children:e})]})})),w=Object(_.a)({form:"profileAddMessageForm"})(S.a),P=k,I=n(27),B={addPost:h.a},M=Object(I.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),B)(P),C=function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)(p,Object(r.a)({},t)),Object(c.jsx)(M,{})]})},N=n(6),A=n(242),E=n(19),F=n(31),J=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.match,n=t.authUserId,r=e.params.userId;r||(r=n||2),this.props.getUserById(r),this.props.getStatus(r)}},{key:"render",value:function(){return Object(c.jsx)(C,Object(r.a)({},this.props))}}]),n}(j.a.Component);e.default=Object(E.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,storeStatus:t.profilePage.status,authUserId:Object(F.a)(t)}}),{getUserById:h.d,getStatus:h.c,updateStatus:h.e}),N.f,A.a)(J)}}]);
//# sourceMappingURL=5.df5872e0.chunk.js.map