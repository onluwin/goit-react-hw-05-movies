"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[269],{8418:function(t,n,e){e.d(n,{Bt:function(){return v},DD:function(){return i},LI:function(){return s},PI:function(){return p},Y5:function(){return f}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1243),o="78b03767048a6745695471bf0cbbdec0";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(u().mark((function t(){var n,e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="trending/movie/day?api_key=".concat(o),t.next=3,c.Z.get(n);case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n,e){var r,a,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="search/movie?api_key=".concat(o,"&query=").concat(n),t.next=3,c.Z.get(r,{signal:e});case 3:return a=t.sent,i=a.data,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n,e){var r,a,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(n,"?api_key=").concat(o),t.next=3,c.Z.get(r,{signal:e});case 3:return a=t.sent,i=a.data,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n,e){var r,a,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(n,"/credits?api_key=").concat(o),t.next=3,(0,c.Z)(r,{signal:e});case 3:return a=t.sent,i=a.data,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n,e){var r,a,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(n,"/reviews?api_key=").concat(o,"&append_to_response=reviews"),t.next=3,c.Z.get(r,{signal:e});case 3:return a=t.sent,i=a.data,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},6269:function(t,n,e){e.r(n),e.d(n,{Reviews:function(){return f}});var r=e(9439),a=e(8683),u=e(2791),c=e(7689),o=e(8418),i=e(184),s=(0,u.lazy)((function(){return e.e(904).then(e.bind(e,904)).then((function(t){return(0,a.Z)((0,a.Z)({},t),{},{default:t.ReviewsList})}))})),f=function(){var t=(0,u.useState)(null),n=(0,r.Z)(t,2),e=n[0],a=n[1],f=(0,c.UO)().movieId;if((0,u.useEffect)((function(){var t=new AbortController,n=t.signal;try{(0,o.Bt)(f,n).then(a).catch(console.log)}catch(e){console.log(e)}return function(){return t.abort()}}),[f]),e)return 0===e.results.length?(0,i.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,i.jsx)(s,{data:e.results})}}}]);
//# sourceMappingURL=269.b3b7473d.chunk.js.map