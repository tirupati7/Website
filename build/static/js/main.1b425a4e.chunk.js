(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){},60:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},83:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(26),n=a.n(c),r=(a(69),a(43)),i=a(18),o=a(19),l=a(21),d=a(20),j=a(40),u=a(32),p=(a(70),a(3)),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(u.a,{style:{marginTop:"54px"},children:[Object(p.jsxs)(u.a.Item,{interval:1e3,children:[Object(p.jsx)("img",Object(j.a)({className:"d-block w-100",src:"https://i.pinimg.com/originals/80/db/4d/80db4d08705f9055b5a60ef7fe055a99.jpg",alt:"First slide"},"className","coursel-img")),Object(p.jsxs)(u.a.Caption,{children:[Object(p.jsx)("h3",{children:"First slide label"}),Object(p.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(p.jsxs)(u.a.Item,{interval:500,children:[Object(p.jsx)("img",Object(j.a)({className:"d-block w-100",src:"https://www.teahub.io/photos/full/132-1326035_lord-venkateswara-swamy-hd.jpg",alt:"Second slide"},"className","coursel-img")),Object(p.jsxs)(u.a.Caption,{children:[Object(p.jsx)("h3",{children:"Second slide label"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(p.jsxs)(u.a.Item,{children:[Object(p.jsx)("img",Object(j.a)({className:"d-block w-100",src:"https://static.thousandwonders.net/Tirumala.Venkateswara.Temple.original.3309.jpg",alt:"Third slide"},"className","coursel-img")),Object(p.jsxs)(u.a.Caption,{children:[Object(p.jsx)("h3",{children:"Third slide label"}),Object(p.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})}}]),a}(s.Component),h=(a(42),"UPDATE_SINGLE_POST"),O="STORE_ALL_POSTS",m=a(52);m.a.initializeApp({apiKey:"AIzaSyC6ZIHMdAq3PDkhwAniZM9nINTUEZjzXqI",authDomain:"ourtpt-local-dev.firebaseapp.com",databaseURL:"https://ourtpt-local-dev-default-rtdb.firebaseio.com",projectId:"ourtpt-local-dev",storageBucket:"ourtpt-local-dev.appspot.com",messagingSenderId:"842076483697",appId:"1:842076483697:web:42966e0ca6f6216e2debd0",measurementId:"G-4V4286BVDP"}),m.a.analytics();var x=m.a,v=a(41),g=a(62),f=(a(60),a.p+"static/media/cardSample.4e131717.png"),y=a(14),w=a(38),P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={posts:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount is called"),x.database().ref("posts").on("value",(function(t){var a=t.val(),s=[];for(var c in a)s.push({id:c,title:a[c].title,desc:a[c].desc,image:a[c].image,createdAt:a[c].createdAt});e.setState({posts:s},(function(){e.props.storeAllPosts(e.state.posts)}))}))}},{key:"goToDetailedPost",value:function(e){console.log("Route History ::: "+JSON.stringify(this.props.history)),console.log("Post details ::: "+JSON.stringify(e)),this.props.updateSinglePost(e);this.props.history.push("/detailed-post-view")}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"posts-block",children:[Object(p.jsx)("div",{className:"posts-heading",children:"Posts"}),this.state.posts.map((function(t,a){return Object(p.jsx)("div",{className:"post-content",children:Object(p.jsxs)(v.a,{style:{width:"18rem",margin:"5px"},children:[Object(p.jsx)(v.a.Img,{variant:"top",src:t.image?t.image:f,width:"100%",height:"200px"}),Object(p.jsxs)(v.a.Body,{height:"200px",children:[Object(p.jsx)(v.a.Title,{children:t.title&&t.title.length>45?t.title.substring(0,45)+"...":t.title}),Object(p.jsx)(v.a.Text,{style:{height:"100px"},children:t.desc&&t.desc.length>124?t.desc.substring(0,124)+"...":t.desc}),Object(p.jsx)(g.a,{variant:"primary",onClick:function(){return e.goToDetailedPost(t)},children:"Read More..."})]})]})},a)}))]})}}]),a}(s.Component),k=Object(y.g)(Object(w.b)((function(e){return{posts:e.posts.posts,detailedPost:e.posts.detailedPost}}),(function(e){return{storeAllPosts:function(t){return e(function(e){return console.log("storeAllPosts action is called"),{type:O,data:e}}(t))},updateSinglePost:function(t){return e(function(e){return{type:h,data:e}}(t))}}}))(P)),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(i.a)(this,a),console.log("constructor is called"),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(b,{}),Object(p.jsxs)("div",{className:"home-wrapper",children:[Object(p.jsx)("h3",{children:"Our Tirupati"}),Object(p.jsx)(k,{})]})]})}}]),a}(s.Component),S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"navbar-wrapper home-wrapper about-wrapper",children:Object(p.jsx)("h3",{children:"About Page"})})}}]),a}(s.Component),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"navbar-wrapper home-wrapper contact-us-wrapper",children:Object(p.jsx)("h3",{children:"Contact US Page"})})}}]),a}(s.Component),C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"navbar-wrapper home-wrapper contact-us-wrapper",children:Object(p.jsx)("h3",{children:"Tourist Places Page"})})}}]),a}(s.Component),A=a(45),I=a(37),D=a.p+"static/media/ourTpt.19b75b92.png",L=(a(83),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.location;return Object(p.jsxs)(A.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"custom-header-styles justify-content-center",children:[Object(p.jsxs)(A.a.Brand,{href:"/home",children:[Object(p.jsx)("img",{src:D,width:"30",height:"30",className:"d-inline-block align-top",alt:"Our Tirupati logo"})," Home"]}),Object(p.jsx)(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsxs)(A.a.Collapse,{id:"responsive-navbar-nav",children:[Object(p.jsxs)(I.a,{activeKey:e.pathname,className:"mr-auto",children:[Object(p.jsx)(I.a.Link,{href:"/touristPlaces",children:"Tourist places"}),Object(p.jsx)(I.a.Link,{href:"#pricing",children:"Pricing"})]}),Object(p.jsxs)(I.a,{activeKey:e.pathname,children:[Object(p.jsx)(I.a.Link,{href:"/contact-us",children:"Contact US"}),Object(p.jsx)(I.a.Link,{href:"/about",children:"About"})]})]})]})}}]),a}(s.Component)),_=Object(y.g)(L),E=a(63),J=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={post:""},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount on DetailedPostView this.props::; "+JSON.stringify(this.props.detailedPost))}},{key:"render",value:function(){var e=this.props.detailedPost,t=e.desc.split("_N");return console.log("DESC::::: "+JSON.stringify(t)),Object(p.jsx)("div",{className:"navbar-wrapper home-wrapper detailed-post-wrapper",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"detailed-post-title",children:e.title}),Object(p.jsx)("div",{className:"detailed-post-img",children:Object(p.jsx)(E.a,{src:e.image,fluid:!0,width:"1000px",height:"555px"})}),t.length>0&&t.map((function(e,t){return Object(p.jsx)("div",{className:"detailed-post-desc",children:e})}))]})})}}]),a}(s.Component),M=Object(w.b)((function(e){return{detailedPost:e.posts.detailedPost}}),(function(e){return{}}))(J),U=function(){return Object(p.jsxs)("div",{className:"whole",children:[Object(p.jsx)(_,{}),Object(p.jsxs)(y.d,{children:[Object(p.jsx)(y.b,{exact:!0,path:"/home",component:N}),Object(p.jsx)(y.b,{exact:!0,path:"/",children:Object(p.jsx)(y.a,{to:"/home"})}),Object(p.jsx)(y.b,{exact:!0,path:"/about",component:S}),Object(p.jsx)(y.b,{exact:!0,path:"/touristPlaces",component:C}),Object(p.jsx)(y.b,{exact:!0,path:"/contact-us",component:T}),Object(p.jsx)(y.b,{exact:!0,path:"/detailed-post-view",component:M})]})]})},B=(a(87),a(35)),R=a(51),G=a(58),V=a.n(G),q=a(30),z={posts:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log("STORE_ALL_POSTS on reducer ::"+JSON.stringify(t.data)),Object(q.a)(Object(q.a)({},e),{},{posts:t.data});case h:return console.log("UPDATE_SINGLE_POST on reducer "+JSON.stringify(t.data)),Object(q.a)(Object(q.a)({},e),{},{detailedPost:t.data});default:return e}};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(B.a)({auth:function(){return{mock:!0}},posts:Object(R.a)({key:"posts",storage:V.a,debug:!0,blacklist:["detailedPost"]},H)}),a=Object(B.b)(Object(R.a)({key:"root",debug:!0,storage:V.a,whitelist:["auth"]},t),e),s=Object(R.b)(a,null,(function(){}));return{store:a,persistor:s}},Z=a(64),F=K(),X=F.store,Q=F.persistor;n.a.render(Object(p.jsx)(w.a,{store:X,children:Object(p.jsx)(Z.PersistGate,{persistor:Q,children:Object(p.jsx)(r.a,{children:Object(p.jsx)(U,{})})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.1b425a4e.chunk.js.map