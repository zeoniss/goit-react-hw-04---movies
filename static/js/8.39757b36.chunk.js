(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[8],{32:function(e,t,a){"use strict";var n=a(35),r=a.n(n),c=a(36),s=a(39),i=a.n(s),o="5bd6ad96507df17f527e79159d832690",u=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o)).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(o)).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o)).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o)).then((function(e){return e.data.cast}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a={fetchTrending:u,fetchDetails:l,fetchMoviesSearch:h,fetchMovieReview:p,fetchMovieCast:v}},72:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a.n(n),c=a(36),s=a(33),i=a(34),o=a(38),u=a(37),l=a(0),h=a(9),p=a(2),v=a(32),d=a(7),f=a(1),b=Object(l.lazy)((function(){return a.e(5).then(a.bind(null,69))})),m=Object(l.lazy)((function(){return a.e(3).then(a.bind(null,70))})),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:null,release_date:"",vote_average:null,overview:null,genres:[],poster_path:null},e.handleGoBack=function(){var t=e.props,a=t.location,n=t.history;if(a.state&&a.state.from)return n.push(a.state.from);n.push("/")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params.movieId,v.a.fetchDetails(t).then((function(e){var t=e.title,n=e.release_date,r=e.vote_average,c=e.overview,s=e.genres,i=e.poster_path;return a.setState({title:t,release_date:n,vote_average:r,overview:c,genres:s,poster_path:i})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match,t=this.state,a=t.title,n=t.release_date,r=t.vote_average,c=t.overview,s=t.genres,i=t.poster_path,o=10*r,u=n.slice(0,4);return Object(f.jsxs)("div",{className:"movieDetails",children:[Object(f.jsx)("button",{type:"button",onClick:this.handleGoBack,className:"movieDetails__button",children:"Go Back"}),Object(f.jsxs)("h1",{className:"title",children:[a," ",u&&Object(f.jsxs)("span",{children:["(",u,")"]})]}),Object(f.jsxs)("div",{className:"movieDetails__description",children:[Object(f.jsx)("div",{className:"movieDetails__description--img",children:i&&Object(f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(i),alt:a,height:"400px"})}),Object(f.jsxs)("div",{className:"movieDetails__description--text",children:[Object(f.jsxs)("p",{children:["User Score: ",o,"%"]}),Object(f.jsx)("h2",{className:"subtitle",children:"Overview"}),Object(f.jsx)("p",{children:c}),Object(f.jsx)("h2",{className:"subtitle",children:"Genres"}),Object(f.jsx)("p",{children:s.map((function(e){return Object(f.jsx)("span",{className:"movieDetails__description--text-genres",children:e.name},e.name)}))})]})]}),Object(f.jsx)("h2",{className:"subtitle",children:"Additional information"}),Object(f.jsxs)(h.b,{to:"".concat(e.url).concat(d.a.cast),className:"movieDetails__additional",activeClassName:"movieDetails__additional--active",children:[" ","Cast"]}),Object(f.jsxs)(h.b,{to:"".concat(e.url).concat(d.a.reviews),className:"movieDetails__additional",activeClassName:"movieDetails__additional--active",children:[" ","Reviews"," "]}),Object(f.jsx)(l.Suspense,{fallback:Object(f.jsx)("h2",{children:"Loading..."}),children:Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{path:"".concat(e.path).concat(d.a.cast),component:m,onClick:this.handleGoBack}),Object(f.jsx)(p.a,{path:"".concat(e.path).concat(d.a.reviews),component:b,onClick:this.handleGoBack})]})})]})}}]),a}(l.Component);t.default=j}}]);
//# sourceMappingURL=8.39757b36.chunk.js.map