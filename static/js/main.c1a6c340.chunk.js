(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{136:function(e,t,n){e.exports=n(217)},141:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),o=n(23),i=(n(141),n(36)),u=n(220),s=n(221),d=n(98),m=n(8),b=n(9),h=n(11),f=n(10),p=n(12),v=n(48),g=n.n(v),y=n(223),E=n(225),O=n(132),j=n(224),k=n(13),S=function(e){var t=e.liked,n=e.toggleLike;return r.a.createElement("div",null,r.a.createElement(k.a,{onClick:n,theme:t?"filled":"",type:"heart"}))},C=n(68),w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).raiseSort=function(e){var t=Object(C.a)({},n.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="asc"),n.props.handleMovieSort(t)},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.columns,a="asc"===t.sortColumn.order?"sort-ascending":"sort-descending";return r.a.createElement("thead",null,r.a.createElement("tr",null,n.map((function(t){return r.a.createElement("th",{key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label,r.a.createElement(k.a,{type:a}))}))))}}]),t}(a.Component),I=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).renderCell=function(e,t){return t.content?t.content(e):g.a.get(e,t.path)},n.createKey=function(e,t){return e._id+(t.path||t.key)},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return r.a.createElement("tbody",null,n.map((function(t){return r.a.createElement("tr",{key:t._id},a.map((function(n){return r.a.createElement("td",{key:e.createKey(t,n)},e.renderCell(t,n))})))})))}}]),t}(a.Component),_=function(e){var t=e.sortColumn,n=e.handleMovieSort,a=e.data,l=e.columns;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{sortColumn:t,handleMovieSort:n,columns:l}),r.a.createElement(I,{data:a,columns:l}))},R=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=[{path:"title",label:"Title",content:function(e){return r.a.createElement(o.b,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",content:function(e){return r.a.createElement(j.a,{color:"geekblue"},e.numberInStock)}},{path:"dailyRentalRate",label:"Rate "},{key:"like",content:function(t){return r.a.createElement(S,{liked:t.liked,toggleLike:function(){return e.props.toggleLike(t)}})}},{key:"delete",content:function(t){return r.a.createElement(E.a,{type:"danger",onClick:function(){return e.props.handleMovieDelete(t._id)}},"Delete")}}],n=this.props,a=n.movies,l=n.handleMovieSort,c=n.sortColumn;return r.a.createElement("table",null,r.a.createElement(_,{sortColumn:c,handleMovieSort:l,data:a,columns:t}))}}]),t}(a.Component);var A=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];function T(){return A.filter((function(e){return e}))}var M=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var P=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],genres:[],pageSize:3,currentPage:1,sortColumn:{path:"title",order:"asc"},selectedGenre:""},n.toggleLike=function(e){var t=Object(d.a)(n.state.movies),a=t.indexOf(e);t[a].liked=!t[a].liked,n.setState({movies:t})},n.handleMovieSort=function(e){n.setState({sortColumn:e})},n.handleGenreSelect=function(e){var t=e;n.setState({selectedGenre:t,currentPage:1})},n.handlePageChange=function(e){n.setState({currentPage:e})},n.handleMovieDelete=function(e){var t=n.state.movies.filter((function(t){return t._id!==e}));n.setState({movies:t})},n.getPagedData=function(){var e=n.state,t=e.pageSize,a=e.sortColumn,r=e.currentPage,l=e.selectedGenre,c=e.movies,o=l._id?c.filter((function(e){return e.genre._id===l._id})):c,i=function(e,t,n){var a=(t-1)*n;return g()(e).slice(a).take(n).value()}(g.a.orderBy(o,[a.path],[a.order]),r,t);return{totalCount:o.length,data:i}},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=[{_id:"",name:"All Genres"}].concat(Object(d.a)(T()));this.setState({movies:M,genres:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.genres,a=t.sortColumn,l=this.getPagedData(),c=l.totalCount,i=l.data;return 0===c?r.a.createElement("p",null,"There are no movies in the database."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-col"},r.a.createElement("p",null,"Showing ",c," movies in the database."),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"w-1/5"},r.a.createElement(y.a,{size:"small",bordered:!0,dataSource:n,renderItem:function(t){return r.a.createElement(y.a.Item,{onClick:function(){return e.handleGenreSelect(t)}},t.name)}})),r.a.createElement("div",{className:"w-4/5"},r.a.createElement(E.a,{type:"primary"},r.a.createElement(o.b,{to:"/movies/new"},"Add New")),r.a.createElement(R,{movies:i,toggleLike:this.toggleLike,sortColumn:a,handleMovieSort:this.handleMovieSort,handleMovieDelete:this.handleMovieDelete}))),r.a.createElement(O.a,{pageSize:this.state.pageSize,defaultCurrent:1,hideOnSinglePage:!0,onChange:this.handlePageChange,total:c})))}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Rental")}}]),t}(a.Component),G=n(222),N=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(G.a,{mode:"horizontal"},r.a.createElement(G.a.Item,null,r.a.createElement(o.b,{to:"/"},"Vidly")),r.a.createElement(G.a.Item,null,r.a.createElement(o.b,{to:"/"},"Movies")),r.a.createElement(G.a.Item,null,r.a.createElement(o.b,{to:"/customers"},"Customers")),r.a.createElement(G.a.Item,null,r.a.createElement(o.b,{to:"/rentals"},"Rentals")),r.a.createElement(G.a.Item,null,r.a.createElement(o.b,{to:"/login"},"Login")),r.a.createElement(G.a.Item,null,r.a.createElement(o.b,{to:"/register"},"Register")))}}]),t}(a.Component),x=n(20),q=n.n(x),F=n(57),L=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={data:{},errors:{}},n.validate=function(){var e=q.a.validate(n.state.data,n.schema,{abortEarly:!1});if(!e.error)return null;var t={};return e.error.details.map((function(e){return t[e.path[0]]=e.message})),t},n.validProperty=function(e){var t=e.name,a=e.value,r=Object(F.a)({},t,a),l=Object(F.a)({},t,n.schema[t]),c=q.a.validate(r,l).error;return c?c.details[0].message:null},n.handleSubmit=function(e){var t=n.validate();n.setState({errors:t}),n.state.errors||n.doSubmit()},n.handleChange=function(e){var t=n.validProperty(e.currentTarget);n.state.errors[e.currentTarget.name]=t;var a=Object(C.a)({},n.state.data);a[e.currentTarget.name]=e.currentTarget.value,n.setState({data:a})},n.renderButton=function(e){return r.a.createElement("button",{disable:n.validate(),onClick:n.handleSubmit,className:"login-form-button"},e)},n.renderSelect=function(e,t,a){return r.a.createElement("div",null,r.a.createElement("select",{onChange:n.handleChange,name:e,placeholder:t},r.a.createElement("option",{value:""},"Select genre"),a.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),r.a.createElement("p",null,n.state.errors?n.state.errors[e]:""))},n.renderInput=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";return r.a.createElement("div",null,r.a.createElement("input",{type:a,onChange:n.handleChange,name:e,placeholder:t}),r.a.createElement("p",null,n.state.errors?n.state.errors[e]:""))},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),B=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},n.schema={_id:q.a.string(),title:q.a.string().required().label("Title"),genreId:q.a.string().required().label("Genre"),numberInStock:q.a.number().required().min(0).max(100).label("Number in stock"),dailyRentalRate:q.a.number().required().min(0).max(10).label("Daily rental rate")},n.mapToViewModel=function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}},n.doSubmit=function(){!function(e){var t=M.find((function(t){return t._id===e._id}))||{};t.title=e.title,t.genre=A.find((function(t){return t._id===e.genreId})),t.numberInStock=e.numberInStock,t.dailyRentalRate=e.dailyRentalRate,t._id||(t._id=Date.now().toString(),M.push(t))}(n.state.data),n.props.history.push("/movies")},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=T();this.setState({genres:e});var t=this.props.match.params.id;if("new"!==t){var n,a=(n=t,M.find((function(e){return e._id===n})));if(!a)return this.props.history.replace("/not-found");this.setState({data:this.mapToViewModel(a)})}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Movie Form"),this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save"))}}]),t}(L),z=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Customers")}}]),t}(a.Component),U=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Not Found")}}]),t}(a.Component),V=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:""},errors:{}},n.schema={username:q.a.string().required().label("Username"),password:q.a.string().required().label("Password")},n.doSubmit=function(){console.log("submitted")},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login"))}}]),t}(L),W=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:"",name:""},errors:{}},n.schema={username:q.a.string().required().email().label("Username"),password:q.a.string().required().min(5).label("Password"),name:q.a.string().required().label("Name")},n.doSubmit=function(){console.log("submitted")},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register"))}}]),t}(L);var J=function(){return r.a.createElement(u.a,null,r.a.createElement(N,null),r.a.createElement(s.a,{span:12,offset:6},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/register",component:W}),r.a.createElement(i.b,{path:"/login",component:V}),r.a.createElement(i.b,{path:"/movies/:id",component:B}),r.a.createElement(i.b,{path:"/movies",component:P}),r.a.createElement(i.b,{path:"/customers",component:z}),r.a.createElement(i.b,{path:"/rentals",component:D}),r.a.createElement(i.b,{path:"/not-found",component:U}),r.a.createElement(i.a,{from:"/",exact:!0,to:"/movies"}),r.a.createElement(i.a,{to:"/not-found"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(216);c.a.render(r.a.createElement(o.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[136,1,2]]]);
//# sourceMappingURL=main.c1a6c340.chunk.js.map