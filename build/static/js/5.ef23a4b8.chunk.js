(this.webpackJsonpwidgets=this.webpackJsonpwidgets||[]).push([[5],{113:function(e,t){},115:function(e,t){},134:function(e,t,n){"use strict";n.r(t);var r=n(132),a=n(24),c="GET_NEWS",s=function(e){return{type:c,payload:{items:e}}},o=n(1),i=n.n(o),u=function(e){var t=e.title,n=e.url;return i.a.createElement("div",{className:"news-link"},i.a.createElement("a",{href:n},t))},l=function(e){return e.items.map((function(e,t){return i.a.createElement(u,Object.assign({key:t},e))}))},f=Object(a.connect)((function(e){return{items:e.hackerNews?e.hackerNews.items:[]}}),(function(e){return{getNewsByNum:function(t){e({type:c+"M",num:t})}}}))((function(e){var t=e.items,n=e.getNewsByNum,a=Object(o.useState)(5),c=Object(r.a)(a,2),s=c[0],u=c[1];return 0===t.length?i.a.createElement("div",{className:"weather-root widget"},"Loading News..."):i.a.createElement("div",{className:"news-root widget"},i.a.createElement("h2",null,"Hacker News - Top ",s),i.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)}}),i.a.createElement("button",{onClick:function(){return n(s)}},"Update"),i.a.createElement(l,{items:t}))})),m=n(95),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[]},t=arguments.length>1?arguments[1]:void 0;return Object(m.a)(e,(function(n){switch(t.type){case c:console.log(t),n.items=t.payload.items;break;default:return e}}))},h=n(44),p=n.n(h),d=n(108),v=(n(109),p.a.mark(g)),w=p.a.mark(O),j=p.a.mark(x);function g(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(O);case 2:return e.next=4,Object(d.d)(c+"M",x,void 0);case 4:case"end":return e.stop()}}),v)}function O(){var e,t,n,r,a,c,o=arguments;return p.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:5,"https://hacker-news.firebaseio.com/v0/topstories.json",i.next=4,Object(d.b)(fetch,"https://hacker-news.firebaseio.com/v0/topstories.json");case 4:return t=i.sent,i.next=7,Object(d.b)([t,t.json]);case 7:return n=i.sent,console.log("idsJson: ",n),r=k(n,e),i.next=12,Object(d.a)(r);case 12:return a=i.sent,i.next=15,Object(d.a)(a.map((function(e){return Object(d.b)([e,e.json])})));case 15:return c=i.sent,i.next=18,Object(d.c)(s(c));case 18:case"end":return i.stop()}}),w)}var k=function(e,t){var n=e.slice(0,t),r=[],a=!0,c=!1,s=void 0;try{for(var o,i=n[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var u=o.value;r.push(Object(d.b)(fetch,"https://hacker-news.firebaseio.com/v0/item/"+u+".json"))}}catch(l){c=!0,s=l}finally{try{a||null==i.return||i.return()}finally{if(c)throw s}}return r};function x(){var e,t,n,r,a,c,o,i,u,l=arguments;return p.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:for(e=l.length>0&&void 0!==l[0]?l[0]:20,t=l.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=l[r];return e=n[n.length-1].num,"https://hacker-news.firebaseio.com/v0/topstories.json",f.next=6,Object(d.b)(fetch,"https://hacker-news.firebaseio.com/v0/topstories.json");case 6:return a=f.sent,f.next=9,Object(d.b)([a,a.json]);case 9:return c=f.sent,o=k(c,e),f.next=13,Object(d.a)(o);case 13:return i=f.sent,f.next=16,Object(d.a)(i.map((function(e){return Object(d.b)([e,e.json])})));case 16:return u=f.sent,console.log(u),f.next=20,Object(d.c)(s(u));case 20:case"end":return f.stop()}}),j)}var y=n(107);function E(){return i.a.createElement(y.DynamicModuleLoader,{modules:[{id:"news",reducerMap:{hackerNews:b},sagas:[g]}]},i.a.createElement(f,null))}n.d(t,"default",(function(){return E}))}}]);
//# sourceMappingURL=5.ef23a4b8.chunk.js.map