(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[1],{10:function(e,t,n){e.exports={nav:"Navbar_nav__24b6R",item:"Navbar_item__2DWAx",activeLinc:"Navbar_activeLinc__3iTot"}},139:function(e,t,n){},143:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),i=(n(139),function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,332)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))}),s=n(45),u=n.n(s),o=n(34),l=n(35),d=n(37),f=n(36),b=(n(143),n(19)),j=n(67),p=n(61),O=n(82),h=n(25),g=n(84),m=n(81),v=n(3),x="app/SET_INITIALIZED",w={initialized:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},y=Object(b.c)({profilePage:p.b,dialogsPage:j.b,usersPage:O.a,authStore:h.b,appStore:_,form:m.a}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,N=Object(b.e)(y,S(Object(b.a)(g.a))),I=n(6),E=n(15),C=n(27),P=n(66),T=(n(225),function(){return Object(r.jsx)("div",{children:"Settings"})}),L=(n(226),function(){return Object(r.jsx)("div",{children:"Music"})}),k=(n(227),function(){return Object(r.jsx)("div",{children:"News"})}),A=n(10),F=n.n(A),U=function(){return Object(r.jsxs)("nav",{className:F.a.nav,children:[Object(r.jsx)("div",{className:F.a.item,children:Object(r.jsx)(E.b,{to:"/profile",activeClassName:F.a.activeLinc,children:"Profile"})}),Object(r.jsx)("div",{className:F.a.item,children:Object(r.jsx)(E.b,{to:"/dialogs",activeClassName:F.a.activeLinc,children:"Messages"})}),Object(r.jsx)("div",{className:F.a.item,children:Object(r.jsx)(E.b,{to:"/news",activeClassName:F.a.activeLinc,children:"News"})}),Object(r.jsx)("div",{className:F.a.item,children:Object(r.jsx)(E.b,{to:"/music",activeClassName:F.a.activeLinc,children:"Music"})}),Object(r.jsx)("div",{className:F.a.item,children:Object(r.jsx)(E.b,{to:"/users",activeClassName:F.a.activeLinc,children:"Users"})}),Object(r.jsx)("div",{className:F.a.item,children:Object(r.jsx)(E.b,{to:"/settings",activeClassName:F.a.activeLinc,children:"Settings"})})]})},z=n(46),D=n.n(z),R=function(e){return Object(r.jsxs)("header",{className:D.a.header,children:[Object(r.jsx)("img",{className:D.a.logo,src:"https://cdn.logo.com/hotlink-ok/logo-social.png"}),"Header",Object(r.jsx)("div",{className:D.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:["id: ",e.authUserId]}),Object(r.jsxs)("div",{children:["email: ",e.email]}),Object(r.jsxs)("div",{children:["login: ",e.loginName]}),Object(r.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(r.jsx)(E.b,{to:"/loginName",children:"Login"})})]})},H=n(31),M=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(R,Object(v.a)({},this.props))}}]),n}(c.a.Component),G=Object(C.b)((function(e){return{authUserId:Object(H.a)(e),email:Object(H.b)(e),loginName:Object(H.d)(e),isAuth:Object(H.c)(e)}}),{logout:h.d})(M),B=function(e){return function(t){return Object(r.jsx)(c.a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(e,Object(v.a)({},t))})}},W=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,335))})),J=c.a.lazy((function(){return Promise.all([n.e(4),n.e(8)]).then(n.bind(null,334))})),X=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,333))})),Y=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,336))})),K=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(G,{}),Object(r.jsx)(U,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(I.b,{path:"/profile/:userId?",render:B(X)}),Object(r.jsx)(I.b,{path:"/dialogs",render:B(W)}),Object(r.jsx)(I.b,{path:"/users",render:B(J)}),Object(r.jsx)(I.b,{path:"/news",component:k}),Object(r.jsx)(I.b,{path:"/music",component:L}),Object(r.jsx)(I.b,{path:"/loginName",render:B(Y)}),Object(r.jsx)(I.b,{path:"/settings",component:T})]})]}):Object(r.jsx)(P.a,{})}}]),n}(c.a.Component),Q=Object(b.d)(I.f,Object(C.b)((function(e){return{initialized:e.appStore.initialized}}),{initializeApp:function(){return function(e){e(Object(h.a)()).then((function(){e({type:x})}))}}}))(K),V=function(e){return Object(r.jsx)(E.a,{children:Object(r.jsx)(C.a,{store:N,children:Object(r.jsx)(Q,{})})})};u.a.render(Object(r.jsx)(V,{}),document.getElementById("root")),i()},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return j}));var r=n(7),a=n.n(r),c=n(17),i=n(3),s=n(9),u=n(47),o="auth/SET_USER_DATA",l={id:null,email:null,loginName:null,isAuth:!1,isFetching:!1},d=function(e,t,n,r){return{type:o,payload:{id:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,i=r.email,u=r.login,r.isAuth,t(d(c,i,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.login(e,t,n);case 2:0===(i=r.sent).data.resultCode?c(f()):c(Object(u.a)("loginForm",{_error:i.data.message}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout().then((function(e){0===e.data.resultCode&&t(d(null,null,null,!1))}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i}));n(229);var r=function(e){return e.authStore.id},a=function(e){return e.authStore.email},c=function(e){return e.authStore.email},i=function(e){return e.authStore.email}},46:function(e,t,n){e.exports={header:"Header_header__1B6uv",logo:"Header_logo__2aypH",loginBlock:"Header_loginBlock__2NTfI"}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(7),a=n.n(r),c=n(17),i=n(26),s=n(3),u=n(9),o="profile/ADD_POST",l="profile/DELETE_POST",d="profile/SET_USER_PROFILE",f="profile/SET_STATUS",b={posts:[{id:1,message:"Hi. how are you?",likesCount:15},{id:2,message:"It's my first post in this messenger",likesCount:100}],profile:null,status:""},j=function(e){return{type:o,message:e}},p=function(e){return{type:f,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getUserById(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=e.posts.length+1,r=t.message;return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[{id:n,message:r,likesCount:0}])});case d:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case f:return Object(s.a)(Object(s.a)({},e),{},{status:t.status?t.status:""});case l:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});default:return e}}},66:function(e,t,n){"use strict";var r=n(2),a=n(87),c=n.n(a),i=n.p+"static/media/prelouder.d7a67c98.png";t.a=function(){return Object(r.jsx)("img",{className:c.a.preloader,src:i})}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(26),a=n(3),c="dialogs/ADD_MESSAGE",i={dialogs:[{id:1,name:"Sergei"},{id:2,name:"Dimych"},{id:3,name:"Andrei"},{id:4,name:"Sergei"}],messages:[{id:1,message:"Hello"},{id:2,message:"Yo"},{id:3,message:"Hi"},{id:4,message:"How are you?"}]},s=function(e){return{type:c,text:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=e.messages.length+1,s=t.text;return Object(a.a)(Object(a.a)({},e),{},{newMessageText:"",messages:[].concat(Object(r.a)(e.messages),[{id:n,message:s}])});default:return e}}},82:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return S})),n.d(t,"f",(function(){return N}));var r=n(7),a=n.n(r),c=n(17),i=n(26),s=n(3),u=n(9),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l="users/FOLLOW",d="users/UNFOLLOW",f="users/SET_USERS",b="users/SET_CURRENT_PAGE",j="users/SET_TOTAL_USER_COUNT",p="users/TOGGLE_IS_FETCHING",O="users/TOGGLE_IS_FOLLOWING_PROGRESS",h={users:[],pageSize:10,portionSize:10,totalCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},g=function(e){return{type:l,userId:e}},m=function(e){return{type:d,userId:e}},v=function(e){return{type:b,currentPage:e}},x=function(e){return{type:p,isFetching:e}},w=function(e,t){return{type:O,followingInProgress:e,userId:t}},_=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),n.next=3,u.d.getUsers(e,t);case 3:c=n.sent,r(x(!1)),r((i=c.items,{type:f,users:i})),r((a=c.totalCount,{type:j,count:a}));case 7:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(t){y(t,e,u.b.follow.bind(u.b),g)}},N=function(e){return function(t){y(t,e,u.b.unFollow.bind(u.b),m)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case f:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case j:return Object(s.a)(Object(s.a)({},e),{},{totalCount:t.count});case b:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case p:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case O:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},87:function(e,t,n){e.exports={preloader:"Preloader_preloader__3tsQ6"}},9:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(83),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ccaf8add-c2f6-4151-acde-b5e4467764db"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},i={unFollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))}},s={authMe:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.put("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},u={getUserById:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}}}},[[230,2,3]]]);
//# sourceMappingURL=main.f3304cb7.chunk.js.map