(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{o5AU:function(t,n,l){"use strict";l.r(n);var e=l("CcnG"),i=function(){return function(){}}(),o=l("pMnS"),u=l("ra/t"),r=l("ntG5"),s=l("M9A9"),c=l("ZYCi"),a=l("tXrQ"),b=l("Ip0R"),p=l("t/Na"),h=l("G5J1"),f=l("mrSG"),d=l("Ehmk"),v=l("eihs"),w=l("MGBS"),m=l("zotm"),g=function(){function t(t,n,l){this.project=t,this.concurrent=n,this.scheduler=l}return t.prototype.call=function(t,n){return n.subscribe(new I(t,this.project,this.concurrent,this.scheduler))},t}(),I=function(t){function n(n,l,e,i){var o=t.call(this,n)||this;return o.project=l,o.concurrent=e,o.scheduler=i,o.index=0,o.active=0,o.hasCompleted=!1,e<Number.POSITIVE_INFINITY&&(o.buffer=[]),o}return f.c(n,t),n.dispatch=function(t){t.subscriber.subscribeToProjection(t.result,t.value,t.index)},n.prototype._next=function(t){var l=this.destination;if(l.closed)this._complete();else{var e=this.index++;if(this.active<this.concurrent){l.next(t);var i=Object(d.a)(this.project)(t,e);i===v.a?l.error(v.a.e):this.scheduler?this.destination.add(this.scheduler.schedule(n.dispatch,0,{subscriber:this,result:i,value:t,index:e})):this.subscribeToProjection(i,t,e)}else this.buffer.push(t)}},n.prototype.subscribeToProjection=function(t,n,l){this.active++,this.destination.add(Object(m.a)(this,t,n,l))},n.prototype._complete=function(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete(),this.unsubscribe()},n.prototype.notifyNext=function(t,n,l,e,i){this._next(n)},n.prototype.notifyComplete=function(t){var n=this.buffer;this.destination.remove(t),this.active--,n&&n.length>0&&this._next(n.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()},n}(w.a),j=function(){function t(t){this.httpSvc=t}return t.prototype.getListOfPlanets=function(){var t,n,l,e=this;return this.getPage("https://swapi.co/api/planets").pipe((t=function(t,n){return t.next?e.getPage(t.next):Object(h.b)()},void 0===n&&(n=Number.POSITIVE_INFINITY),void 0===l&&(l=void 0),n=(n||0)<1?Number.POSITIVE_INFINITY:n,function(e){return e.lift(new g(t,n,l))}))},t.prototype.getPage=function(t){return new p.g({"Access-Control-Allow-Origin":"*"}),this.httpSvc.get(t)},t.ngInjectableDef=e.S({factory:function(){return new t(e.W(p.c))},token:t,providedIn:"root"}),t}(),y=l("HNpX"),k=function(){return(k=Object.assign||function(t){for(var n,l=1,e=arguments.length;l<e;l++)for(var i in n=arguments[l])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)},C=function(){function t(t,n){this.swapiSvc=t,this.appStateSvc=n,this.icons=["flask","wifi","beer","football","basketball","paper-plane","american-football","boat","bluetooth","build"],this.items=[]}return t.prototype.ngOnInit=function(){var t=this;this.swapiSvc.getListOfPlanets().subscribe(function(n){console.log(n),t.items=t.items.concat(n.results.map(function(t){return k({title:t.name},t)})),console.log(t.items),t.items.sort(function(t,n){return t.title.toLowerCase()>n.title.toLowerCase()?1:n.title.toLowerCase()>t.title.toLowerCase()?-1:0})},function(t){return console.log(t)})},t}(),O=e.nb({encapsulation:0,styles:[[""]],data:{}});function S(t){return e.Db(0,[(t()(),e.pb(0,0,null,null,3,"ion-item",[],null,[[null,"click"]],function(t,n,l){var i=!0;return"click"===n&&(i=!1!==e.yb(t,2).onClick(l)&&i),i},u.v,u.g)),e.ob(1,49152,null,0,r.C,[e.h,e.k],null,null),e.ob(2,16384,null,0,s.a,[[2,c.l],a.a,e.k],null,null),(t()(),e.Cb(3,0,[" "," "]))],null,function(t,n){t(n,3,0,n.context.$implicit.title)})}function x(t){return e.Db(0,[(t()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,u.s,u.d)),e.ob(1,49152,null,0,r.w,[e.h,e.k],null,null),(t()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,u.D,u.n)),e.ob(3,49152,null,0,r.vb,[e.h,e.k],null,null),(t()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,u.q,u.b)),e.ob(5,49152,null,0,r.g,[],null,null),(t()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,u.y,u.k)),e.ob(7,49152,null,0,r.M,[e.h,e.k],null,null),(t()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,u.C,u.o)),e.ob(9,49152,null,0,r.wb,[e.h,e.k],null,null),(t()(),e.Cb(10,0,[" "," "])),(t()(),e.pb(11,0,null,null,5,"ion-content",[],null,null,null,u.r,u.c)),e.ob(12,49152,null,0,r.p,[e.h,e.k],null,null),(t()(),e.pb(13,0,null,0,3,"ion-list",[],null,null,null,u.x,u.i)),e.ob(14,49152,null,0,r.J,[e.h,e.k],null,null),(t()(),e.gb(16777216,null,0,1,null,S)),e.ob(16,278528,null,0,b.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,16,0,n.component.items)},function(t,n){t(n,10,0,n.component.appStateSvc.title)})}function N(t){return e.Db(0,[(t()(),e.pb(0,0,null,null,1,"app-list",[],null,null,null,x,O)),e.ob(1,114688,null,0,C,[j,y.a],null,null)],function(t,n){t(n,1,0)},null)}var P=e.lb("app-list",C,N,{},{},[]),T=l("gIcY"),L=l("95zI"),_=l("9opb"),F=l("apKv"),D=l("B4/3");l.d(n,"ListPageModuleNgFactory",function(){return G});var G=e.mb(i,[],function(t){return e.vb([e.wb(512,e.j,e.bb,[[8,[o.a,P]],[3,e.j],e.x]),e.wb(4608,b.j,b.i,[e.u,[2,b.p]]),e.wb(4608,T.g,T.g,[]),e.wb(4608,L.a,L.a,[e.z,e.g]),e.wb(4608,_.a,_.a,[L.a,e.j,e.q]),e.wb(4608,F.a,F.a,[L.a,e.j,e.q]),e.wb(1073742336,b.b,b.b,[]),e.wb(1073742336,T.f,T.f,[]),e.wb(1073742336,T.a,T.a,[]),e.wb(1073742336,D.a,D.a,[]),e.wb(1073742336,c.n,c.n,[[2,c.t],[2,c.l]]),e.wb(1073742336,i,i,[]),e.wb(1024,c.j,function(){return[[{path:"",component:C}]]},[])])})}}]);