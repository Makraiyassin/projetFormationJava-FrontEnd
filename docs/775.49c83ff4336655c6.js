"use strict";(self.webpackChunkprojetFrontEnd=self.webpackChunkprojetFrontEnd||[]).push([[775],{1775:(_e,f,c)=>{c.r(f),c.d(f,{OmnithequeModule:()=>de});var p=c(6895),a=c(646),e=c(8256),l=c(1198),m=c(3071);function w(o,u){1&o&&(e.TgZ(0,"a",11),e._uU(1," emprunts "),e.qZA())}function A(o,u){1&o&&(e.TgZ(0,"a",13),e._uU(1," modifier infos "),e.qZA())}function U(o,u){if(1&o&&(e.TgZ(0,"li",5),e.YNc(1,A,2,0,"a",12),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.omnitheque.id==t.user.omnitheque.id)}}function O(o,u){if(1&o&&(e.TgZ(0,"div",1)(1,"a",2)(2,"span",3),e._uU(3),e.qZA()(),e._UZ(4,"hr"),e.TgZ(5,"ul",4)(6,"li",5)(7,"a",6),e._uU(8," Publications "),e.qZA()(),e.TgZ(9,"li",5)(10,"a",7),e._uU(11," Catalogue "),e.qZA()(),e.TgZ(12,"li",5)(13,"a",8),e._uU(14," \xe0 propos de nous "),e.qZA()(),e.TgZ(15,"li",5),e.YNc(16,w,2,0,"a",9),e.qZA(),e.YNc(17,U,2,1,"li",10),e.qZA()()),2&o){const t=e.oxw();e.xp6(3),e.Oqu(t.omnitheque.name),e.xp6(10),e.MGl("routerLink","about/",t.omnitheque.id,""),e.xp6(3),e.Q6J("ngIf",t.user&&t.omnitheque.id==(null==t.user.omnitheque?null:t.user.omnitheque.id)),e.xp6(1),e.Q6J("ngIf",null==t.user?null:t.user.omnitheque)}}let I=(()=>{class o{constructor(t,n,r){this._omnithequeService=t,this._userService=n,this._route=r}ngOnInit(){this._userService.getUser().subscribe(t=>{this.user=t}),this._omnithequeService.getOne(this._route.snapshot.params.id).subscribe(t=>{this.omnitheque=t})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.u),e.Y36(m.K),e.Y36(a.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-side-bare-omnitheque"]],decls:1,vars:1,consts:[["class","d-flex flex-column flex-shrink-0 p-3 text-bg-dark mySideBar","style","width: 280px;",4,"ngIf"],[1,"d-flex","flex-column","flex-shrink-0","p-3","text-bg-dark","mySideBar",2,"width","280px"],[1,"d-flex","align-items-center","mb-3","mb-md-0","me-md-auto","text-white","text-decoration-none"],[1,"fs-4"],[1,"nav","nav-pills","flex-column","mb-auto"],[1,"nav-item"],["aria-current","page","routerLinkActive","active","routerLink","publications",1,"nav-link","text-white"],["routerLinkActive","active","routerLink","products",1,"nav-link","text-white"],["routerLinkActive","active",1,"nav-link","text-white",3,"routerLink"],["class","nav-link text-white","routerLinkActive","active","routerLink","borrows",4,"ngIf"],["class","nav-item",4,"ngIf"],["routerLinkActive","active","routerLink","borrows",1,"nav-link","text-white"],["class","nav-link text-white","routerLinkActive","active","routerLink","update",4,"ngIf"],["routerLinkActive","active","routerLink","update",1,"nav-link","text-white"]],template:function(t,n){1&t&&e.YNc(0,O,18,4,"div",0),2&t&&e.Q6J("ngIf",n.omnitheque)},dependencies:[p.O5,a.yS,a.Od],styles:[".mySideBar[_ngcontent-%COMP%]{min-height:100vh;height:100%}"]}),o})(),N=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-omnitheque"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-lg-3","responsive-noDisplay"],[1,"margin-top-2","col-lg-9","col-md-12"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-side-bare-omnitheque"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[a.lC,I],styles:[".margin-top-2[_ngcontent-%COMP%]{margin-top:2%}@media screen and (max-width: 1150px){.responsive-noDisplay[_ngcontent-%COMP%]{display:none}}"]}),o})();var q=c(9262),d=c(6082),Z=c(2340),_=c(529),P=c(7252);let v=(()=>{class o{constructor(t,n){this._http=t,this._session=n,this.token="",this._session.token.subscribe(r=>this.token=`Bearer ${r}`)}create(t,n){return this._http.post(`${Z.N.apiUrl}/borrow?omnithequeId=${t}&productId=${n}`,{},{headers:(new _.WM).append("Authorization",this.token)})}return(t){return this._http.post(`${Z.N.apiUrl}/borrow/return?borrowId=${t}`,{},{headers:(new _.WM).append("Authorization",this.token)})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(_.eN),e.LFG(P.m))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=c(9837),i=c(433);function k(o,u){1&o&&(e.TgZ(0,"a",4),e._uU(1,"modifier infos"),e.qZA())}function L(o,u){if(1&o&&(e.TgZ(0,"li"),e.YNc(1,k,2,0,"a",3),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.omnitheque.id==t.user.omnitheque.id)}}function J(o,u){1&o&&(e.TgZ(0,"div",5)(1,"a",6),e._uU(2,"ajouter un produit"),e.qZA()())}function M(o,u){1&o&&(e.TgZ(0,"th",8),e._uU(1,"Examplaires"),e.qZA())}function S(o,u){if(1&o&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&o){const t=e.oxw(2).$implicit;e.xp6(1),e.Oqu(t.quantity)}}function F(o,u){if(1&o){const t=e.EpF();e.TgZ(0,"a",22),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(3).$implicit,s=e.oxw(3);return e.KtG(s.borrow(r.id))}),e._uU(1,"emprunter"),e.qZA()}}function Y(o,u){1&o&&(e.TgZ(0,"a",23),e._uU(1,"emprunt en cours"),e.qZA())}function B(o,u){if(1&o&&(e.ynx(0),e.YNc(1,F,2,0,"a",20),e.YNc(2,Y,2,0,"a",21),e.BQk()),2&o){const t=e.oxw(2).$implicit,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.checkBorrow(t.id)),e.xp6(1),e.Q6J("ngIf",!n.checkBorrow(t.id))}}function Q(o,u){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"a",24),e._uU(2,"\xe9diter"),e.qZA(),e.TgZ(3,"button",22),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2).$implicit,s=e.oxw(3);return e.KtG(s.delete(r.id))}),e._uU(4,"supprimer"),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2).$implicit;e.xp6(1),e.MGl("routerLink","update/",t.id,"")}}function z(o,u){if(1&o&&(e.ynx(0),e.TgZ(1,"td"),e._UZ(2,"img",16),e.qZA(),e.TgZ(3,"td")(4,"div"),e._uU(5),e.qZA()(),e.TgZ(6,"td")(7,"div"),e._uU(8),e.qZA()(),e.TgZ(9,"td")(10,"div",17),e._uU(11),e.qZA()(),e.YNc(12,S,2,1,"td",18),e.TgZ(13,"td"),e.YNc(14,B,3,2,"ng-container",1),e.YNc(15,Q,5,1,"ng-container",1),e.qZA(),e.BQk()),2&o){const t=e.oxw().$implicit,n=e.oxw(3);e.xp6(2),e.s9C("src","string"!=t.image?t.image:"http://res.cloudinary.com/dsuyae7y8/image/upload/v1665739795/khbagudgo7zusq9rz2rz.png",e.LSH),e.xp6(3),e.Oqu(t.name),e.xp6(3),e.Oqu(n.tradCategory(t.category)),e.xp6(3),e.Oqu(t.description),e.xp6(1),e.Q6J("ngIf",n.omnitheque.id==(null==n.user||null==n.user.omnitheque?null:n.user.omnitheque.id)),e.xp6(2),e.Q6J("ngIf",n.omnitheque.id!=(null==n.user||null==n.user.omnitheque?null:n.user.omnitheque.id)),e.xp6(1),e.Q6J("ngIf",n.omnitheque.id==(null==n.user||null==n.user.omnitheque?null:n.user.omnitheque.id))}}function G(o,u){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,z,16,7,"ng-container",1),e.qZA()),2&o){const t=u.$implicit;e.xp6(1),e.Q6J("ngIf",t.quantity)}}function E(o,u){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"table",7)(2,"thead")(3,"tr")(4,"th",8),e._uU(5,"image "),e.qZA(),e.TgZ(6,"th",8),e._uU(7,"Nom "),e.qZA(),e.TgZ(8,"th",8),e._uU(9,"Categorie"),e.qZA(),e.TgZ(10,"th",8),e._uU(11,"description"),e.qZA(),e.YNc(12,M,2,0,"th",9),e._UZ(13,"th",8),e.qZA()(),e.TgZ(14,"tbody"),e.YNc(15,G,2,1,"tr",10),e.qZA()(),e.TgZ(16,"div",11)(17,"ngb-pagination",12),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw(2);return e.KtG(s.page=r)})("pageChange",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.refreshProducts())}),e.qZA(),e.TgZ(18,"select",13),e.NdJ("ngModelChange",function(r){e.CHM(t);const s=e.oxw(2);return e.KtG(s.pageSize=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.refreshProducts())}),e.TgZ(19,"option",14),e._uU(20,"5 produits par page"),e.qZA(),e.TgZ(21,"option",15),e._uU(22,"10 produits par page"),e.qZA(),e.TgZ(23,"option",15),e._uU(24,"20 produits par page"),e.qZA()()()()}if(2&o){const t=e.oxw(2);e.xp6(12),e.Q6J("ngIf",t.user&&t.user.omnitheque&&t.omnitheque.id==t.user.omnitheque.id),e.xp6(3),e.Q6J("ngForOf",t.products),e.xp6(2),e.Q6J("collectionSize",t.collectionSize)("page",t.page)("pageSize",t.pageSize),e.xp6(1),e.Q6J("ngModel",t.pageSize),e.xp6(1),e.Q6J("ngValue",5),e.xp6(2),e.Q6J("ngValue",10),e.xp6(2),e.Q6J("ngValue",20)}}function D(o,u){1&o&&(e.TgZ(0,"h2"),e._uU(1,"liste de produits est vide"),e.qZA())}function V(o,u){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,E,25,9,"div",1),e.YNc(2,D,2,0,"h2",1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.products.length>0),e.xp6(1),e.Q6J("ngIf",t.products.length<1)}}let C=(()=>{class o{constructor(t,n,r,s,h){this._omnithequeService=t,this._userService=n,this._route=r,this._productService=s,this._borrowService=h,this.page=1,this.pageSize=5}ngOnInit(){this._userService.getUser().subscribe(t=>{this.user=t}),this._route.snapshot.parent&&this._omnithequeService.getOne(this._route.snapshot.parent.params.id).subscribe(t=>{this.omnitheque=t,this.collectionSize=t.productList.filter(n=>n.quantity>0).length,this.refreshProducts()})}refreshProducts(){this.products=this.omnitheque.productList.filter(t=>t.quantity>0).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize)}delete(t){confirm("\xeates-vous s\xfbr de vouloir sulpprimer ce produit?")&&this._productService.delete(t).subscribe(n=>{this.products=this.products.filter(r=>r.id!=n.id)})}borrow(t){this._borrowService.create(this.omnitheque.id,t).subscribe(n=>{},n=>{console.log(n.error.message)}),this.refreshProducts()}checkBorrow(t){return!this.user?.borrowList.find(n=>n.productId===t&&!n.returned)}tradCategory(t){return(0,q.e)(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.u),e.Y36(m.K),e.Y36(a.gz),e.Y36(d.M),e.Y36(v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-product"]],decls:14,vars:3,consts:[[1,"responsive-Display"],[4,"ngIf"],["class","container justify-content-center",4,"ngIf"],["routerLink","update",4,"ngIf"],["routerLink","update"],[1,"container","justify-content-center"],["routerLink","createProduct",1,"btn","btn-outline-primary"],[1,"table","table-striped"],["scope","col"],["scope","col",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],[3,"collectionSize","page","pageSize","pageChange"],[1,"form-select",2,"width","auto",3,"ngModel","ngModelChange"],["selected","",3,"ngValue"],[3,"ngValue"],["width","100px","height","100px",3,"src"],[1,"description"],["class","text-center",4,"ngIf"],[1,"text-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["routerLink","/profile/borrows","class","text-success",4,"ngIf"],[1,"btn","btn-primary",3,"click"],["routerLink","/profile/borrows",1,"text-success"],[1,"btn","btn-primary","m-2",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"ul")(2,"li")(3,"a"),e._uU(4,"Actualit\xe9"),e.qZA()(),e.TgZ(5,"li")(6,"a"),e._uU(7,"Catalogue"),e.qZA()(),e.TgZ(8,"li")(9,"a"),e._uU(10,"\xe0 propos de nous"),e.qZA()(),e.YNc(11,L,2,1,"li",1),e.qZA()(),e.YNc(12,J,3,0,"div",2),e.YNc(13,V,3,2,"div",1)),2&t&&(e.xp6(11),e.Q6J("ngIf",n.omnitheque&&(null==n.user?null:n.user.omnitheque)),e.xp6(1),e.Q6J("ngIf",(null==n.omnitheque?null:n.omnitheque.id)==(null==n.user||null==n.user.omnitheque?null:n.user.omnitheque.id)),e.xp6(1),e.Q6J("ngIf",n.products))},dependencies:[p.sg,p.O5,b.N9,i.YN,i.Kr,i.EJ,i.JJ,i.On,a.yS],styles:[".responsive-Display[_ngcontent-%COMP%]{display:none}.responsive-Display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.responsive-Display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.responsive-Display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.responsive-Display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{font-weight:700;cursor:pointer}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;max-width:500px;max-height:100px;overflow-y:auto}.description[_ngcontent-%COMP%]{text-align:justify!important;margin:auto}@media screen and (max-width: 1150px){.responsive-Display[_ngcontent-%COMP%]{display:contents}}"]}),o})(),$=(()=>{class o{constructor(t,n,r){this._userService=t,this._omnithequeService=n,this._router=r,this.addressForm=new i.cw({street:new i.NI("",[i.kI.required]),number:new i.NI("",[i.kI.required]),cp:new i.NI("",[i.kI.required]),city:new i.NI("",[i.kI.required]),country:new i.NI("",[i.kI.required])}),this.omnithequeForm=new i.cw({id:new i.NI,name:new i.NI("",[i.kI.required]),address:this.addressForm,phone:new i.NI("",[i.kI.required]),email:new i.NI("",[i.kI.required,i.kI.email]),image:new i.NI})}ngOnInit(){this._userService.getUser().subscribe(t=>{this.omnithequeForm.patchValue({id:t.omnitheque.id,name:t.omnitheque.name,phone:t.omnitheque.phone,email:t.omnitheque.email,image:t.omnitheque.image}),this.addressForm.patchValue({street:t.omnitheque.address.street,number:t.omnitheque.address.number.toString(),city:t.omnitheque.address.city,cp:t.omnitheque.address.cp.toString(),country:t.omnitheque.address.country})})}update(){console.log(this.omnithequeForm.value),this._omnithequeService.update(this.omnithequeForm.value).subscribe(t=>{this._router.navigate([`/omnitheque/${t.id}`])})}cancel(){this._router.navigate([`/omnitheque/${this.omnithequeForm.value.id}`])}cloudinaryGo(){cloudinary.createUploadWidget({cloudName:"dsuyae7y8",uploadPreset:"omnitheque-preset"},(n,r)=>{!n&&r&&"success"===r.event&&this.omnithequeForm.patchValue({image:r.info.url})}).open()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.K),e.Y36(l.u),e.Y36(a.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-omnitheque"]],decls:48,vars:3,consts:[[1,"text-center"],[1,"w-50","mx-auto",3,"formGroup"],[1,"container"],["id","upload_widget",1,"cloudinary-button",3,"click"],["height","100px","alt","image du produit",1,"p-2","m-2",3,"src"],[1,"mb-3"],["for","name",1,"form-label"],["formControlName","name","type","text","id","name",1,"form-control"],["id","address",1,"row","g-3",3,"formGroup"],[1,"col-9"],["for","street",1,"form-label"],["formControlName","street","type","text","id","street","placeholder","rue",1,"form-control"],[1,"col-3"],["for","number",1,"form-label"],["formControlName","number","type","number","id","number","placeholder","n\xb0",1,"form-control"],[1,"col-md-6"],["for","city",1,"form-label"],["formControlName","city","type","text","id","city",1,"form-control"],[1,"col-md-2"],["for","cp",1,"form-label"],["formControlName","cp","type","number","id","cp",1,"form-control"],[1,"col-md-4"],["for","country",1,"form-label"],["formControlName","country","id","country",1,"form-select"],["value","Belgique","selected",""],["value","France"],["for","phone",1,"form-label"],["formControlName","phone","type","text","id","phone",1,"form-control"],["for","email",1,"form-label"],["formControlName","email","type","email","id","email",1,"form-control"],[1,"btn","btn-primary","m-2",3,"click"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"modifier mon omnith\xe8que"),e.qZA(),e.TgZ(2,"form",1)(3,"div",2)(4,"button",3),e.NdJ("click",function(){return n.cloudinaryGo()}),e._uU(5,"choisir une image"),e.qZA(),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"nom de l'omnith\xe8que"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",8)(12,"div",9)(13,"label",10),e._uU(14,"Addresse"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"div",12)(17,"label",13),e._uU(18," Num\xe9ro "),e.qZA(),e._UZ(19,"input",14),e.qZA(),e.TgZ(20,"div",15)(21,"label",16),e._uU(22,"Ville"),e.qZA(),e._UZ(23,"input",17),e.qZA(),e.TgZ(24,"div",18)(25,"label",19),e._uU(26,"CP"),e.qZA(),e._UZ(27,"input",20),e.qZA(),e.TgZ(28,"div",21)(29,"label",22),e._uU(30,"Pays"),e.qZA(),e.TgZ(31,"select",23)(32,"option",24),e._uU(33," Belgique "),e.qZA(),e.TgZ(34,"option",25),e._uU(35," France "),e.qZA()()()(),e.TgZ(36,"div",5)(37,"label",26),e._uU(38,"numero de t\xe9l\xe9phone de l'omnitheque"),e.qZA(),e._UZ(39,"input",27),e.qZA(),e.TgZ(40,"div",5)(41,"label",28),e._uU(42,"Email de l'omnitheque"),e.qZA(),e._UZ(43,"input",29),e.qZA(),e.TgZ(44,"button",30),e.NdJ("click",function(){return n.update()}),e._uU(45,"modifier"),e.qZA(),e.TgZ(46,"button",31),e.NdJ("click",function(){return n.cancel()}),e._uU(47,"annuler"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.omnithequeForm),e.xp6(4),e.Q6J("src",n.omnithequeForm.value.image,e.LSH),e.xp6(5),e.Q6J("formGroup",n.addressForm))},dependencies:[i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.sg,i.u]}),o})();var g=c(3165);function j(o,u){if(1&o&&(e.TgZ(0,"option",17),e._uU(1),e.qZA()),2&o){const t=u.$implicit,n=e.oxw();e.s9C("value",t),e.xp6(1),e.hij(" ",n.tradCategory(t)," ")}}let x=(()=>{class o{constructor(t,n){this._productService=t,this._router=n,this.categories=g.R,this.productForm=new i.cw({name:new i.NI("",[i.kI.required]),description:new i.NI("",[i.kI.required]),quantity:new i.NI("",[i.kI.required]),category:new i.NI("",[i.kI.required]),image:new i.NI("",[i.kI.required])})}ngOnInit(){this.categories=g.R,this.productForm.patchValue({image:"http://res.cloudinary.com/dsuyae7y8/image/upload/v1665739795/khbagudgo7zusq9rz2rz.png"})}cloudinaryGo(){cloudinary.createUploadWidget({cloudName:"dsuyae7y8",uploadPreset:"omnitheque-preset"},(n,r)=>{!n&&r&&"success"===r.event&&this.productForm.patchValue({image:r.info.url})}).open()}tradCategory(t){switch(t){case"BOOK":default:return"Livre";case"BOARDGAME":return"Jeux de soci\xe9t\xe9";case"VIDEOGAME":return"Jeux vid\xe9o";case"MOVIE":return"Film";case"MUSIC":return"Musique"}}create(){this._productService.create(this.productForm.value).subscribe(t=>{this._router.navigate([`/omnitheque/${t.omnithequeId}`])})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.M),e.Y36(a.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-product"]],decls:26,vars:3,consts:[[1,"text-center"],[1,"w-50","mx-auto",3,"formGroup"],[1,"container"],["id","upload_widget",1,"cloudinary-button",3,"click"],["height","100px","alt","image du produit",1,"p-2","m-2",3,"src"],[1,"mb-3"],["for","name",1,"form-label"],["formControlName","name","type","text","id","name",1,"form-control"],["for","description",1,"form-label"],["maxlength","20000","formControlName","description","type","text","id","description",1,"form-control"],["for","quantity",1,"form-label"],["formControlName","quantity","type","number","id","quantity",1,"form-control"],[1,"col-md-4"],["for","category",1,"form-label"],["formControlName","category","id","category",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"btn","btn-primary","mt-2",3,"click"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"nouveau produit"),e.qZA(),e.TgZ(2,"form",1)(3,"div",2)(4,"button",3),e.NdJ("click",function(){return n.cloudinaryGo()}),e._uU(5,"choisir une image"),e.qZA(),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"nom du produit"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",5)(12,"label",8),e._uU(13,"description"),e.qZA(),e._UZ(14,"textarea",9),e.qZA(),e.TgZ(15,"div",5)(16,"label",10),e._uU(17,"nombre d'examplaires"),e.qZA(),e._UZ(18,"input",11),e.qZA(),e.TgZ(19,"div",12)(20,"label",13),e._uU(21,"categorie"),e.qZA(),e.TgZ(22,"select",14),e.YNc(23,j,2,2,"option",15),e.qZA()(),e.TgZ(24,"button",16),e.NdJ("click",function(){return n.create()}),e._uU(25,"cr\xe9er"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.productForm),e.xp6(4),e.Q6J("src",n.productForm.value.image,e.LSH),e.xp6(17),e.Q6J("ngForOf",n.categories))},dependencies:[p.sg,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.nD,i.sg,i.u]}),o})();function K(o,u){if(1&o&&(e.TgZ(0,"option",13),e._uU(1),e.qZA()),2&o){const t=u.$implicit,n=e.oxw();e.s9C("value",t),e.xp6(1),e.hij(" ",n.tradCategory(t)," ")}}let y=(()=>{class o{constructor(t,n,r){this._route=t,this._productservice=n,this._router=r,this.productForm=new i.cw({id:new i.NI,name:new i.NI,category:new i.NI,description:new i.NI,quantity:new i.NI,image:new i.NI}),this.categories=g.R}ngOnInit(){this._productservice.getOne(this._route.snapshot.params.id).subscribe(t=>{this.productForm.patchValue({id:t.id,name:t.name,category:t.category,description:t.description,quantity:t.quantity,image:t.image})})}edit(){this._productservice.update(this.productForm.value).subscribe(t=>{this._router.navigate([`/omnitheque/${t.omnithequeId}`])})}cloudinaryGo(){cloudinary.createUploadWidget({cloudName:"dsuyae7y8",uploadPreset:"omnitheque-preset"},(n,r)=>{!n&&r&&"success"===r.event&&this.productForm.patchValue({image:r.info.url})}).open()}tradCategory(t){return(0,q.e)(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.gz),e.Y36(d.M),e.Y36(a.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-product"]],decls:26,vars:3,consts:[[1,"text-center"],[1,"w-50","mx-auto",3,"formGroup"],[1,"container"],["id","upload_widget",1,"cloudinary-button",3,"click"],["height","100px","alt","image du produit",1,"p-2","m-2",3,"src"],[1,"mb-3"],["for","name",1,"form-label"],["formControlName","name","type","text","id","name",1,"form-control"],["maxlength","20000","formControlName","description","type","text","id","description",1,"form-control"],["formControlName","quantity","type","number","id","quantity",1,"form-control"],["formControlName","category","type","text","id","category",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"\xe9diter produit"),e.qZA(),e.TgZ(2,"form",1)(3,"div",2)(4,"button",3),e.NdJ("click",function(){return n.cloudinaryGo()}),e._uU(5,"choisir une image"),e.qZA(),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"nom du produit"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",5)(12,"label",6),e._uU(13,"description"),e.qZA(),e._UZ(14,"textarea",8),e.qZA(),e.TgZ(15,"div",5)(16,"label",6),e._uU(17,"nombre d'exemplaires"),e.qZA(),e._UZ(18,"input",9),e.qZA(),e.TgZ(19,"div",5)(20,"label",6),e._uU(21,"Categorie"),e.qZA(),e.TgZ(22,"select",10),e.YNc(23,K,2,2,"option",11),e.qZA()(),e.TgZ(24,"button",12),e.NdJ("click",function(){return n.edit()}),e._uU(25,"\xe9diter"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.productForm),e.xp6(4),e.Q6J("src",n.productForm.value.image,e.LSH),e.xp6(17),e.Q6J("ngForOf",n.categories))},dependencies:[p.sg,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.nD,i.sg,i.u]}),o})();function H(o,u){if(1&o&&(e.TgZ(0,"a",6),e._uU(1,"mon omnitheque"),e.qZA()),2&o){const t=e.oxw();e.MGl("routerLink","/omnitheque/",t.omnitheque.id,"")}}function W(o,u){1&o&&(e.TgZ(0,"a",7),e._uU(1,"Cr\xe9er mon omnitheque"),e.qZA())}function X(o,u){if(1&o){const t=e.EpF();e.TgZ(0,"td")(1,"button",17),e._uU(2,"prolonger"),e.qZA(),e.TgZ(3,"button",18),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw(3);return e.KtG(s.return(r.id))}),e._uU(4,"retour"),e.qZA()()}}function R(o,u){1&o&&(e.TgZ(0,"td"),e._uU(1,"OK"),e.qZA())}function ee(o,u){if(1&o&&(e.TgZ(0,"tr")(1,"th",16),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.TgZ(9,"a",6),e._uU(10,"\u{1f50d}"),e.qZA()(),e.YNc(11,X,5,0,"td",5),e.YNc(12,R,2,0,"td",5),e.qZA()),2&o){const t=u.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.startBorrow),e.xp6(2),e.Oqu(t.endBorrow),e.xp6(2),e.hij("",t.product?t.product.name:t.productId," "),e.xp6(1),e.MGl("routerLink","product/",t.productId,""),e.xp6(2),e.Q6J("ngIf",!t.returned),e.xp6(1),e.Q6J("ngIf",t.returned)}}function te(o,u){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"table",8)(2,"thead")(3,"tr")(4,"th",9),e._uU(5,"id "),e.qZA(),e.TgZ(6,"th",9),e._uU(7,"start "),e.qZA(),e.TgZ(8,"th",9),e._uU(9,"end "),e.qZA(),e.TgZ(10,"th",9),e._uU(11,"produit "),e.qZA(),e._UZ(12,"th",9),e.qZA()(),e.TgZ(13,"tbody"),e.YNc(14,ee,13,7,"tr",10),e.qZA()(),e.TgZ(15,"div",11)(16,"ngb-pagination",12),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw(2);return e.KtG(s.page=r)})("pageChange",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.refreshBorrows())}),e.qZA(),e.TgZ(17,"select",13),e.NdJ("ngModelChange",function(r){e.CHM(t);const s=e.oxw(2);return e.KtG(s.pageSize=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.refreshBorrows())}),e.TgZ(18,"option",14),e._uU(19,"5 produits par page"),e.qZA(),e.TgZ(20,"option",15),e._uU(21,"10 produits par page"),e.qZA(),e.TgZ(22,"option",15),e._uU(23,"20 produits par page"),e.qZA()()()()}if(2&o){const t=e.oxw(2);e.xp6(14),e.Q6J("ngForOf",t.borrows),e.xp6(2),e.Q6J("collectionSize",t.collectionSize)("page",t.page)("pageSize",t.pageSize),e.xp6(1),e.Q6J("ngModel",t.pageSize),e.xp6(1),e.Q6J("ngValue",5),e.xp6(2),e.Q6J("ngValue",10),e.xp6(2),e.Q6J("ngValue",20)}}function oe(o,u){1&o&&(e.TgZ(0,"h2"),e._uU(1,"il n'y a aucun emprunt pour le moment"),e.qZA())}function ne(o,u){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,te,24,8,"div",5),e.YNc(2,oe,2,0,"h2",5),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.borrows.length>0),e.xp6(1),e.Q6J("ngIf",t.borrows.length<1)}}let ie=(()=>{class o{constructor(t,n,r,s,h){this._omnithequeService=t,this._borrowService=n,this._userService=r,this._productService=s,this._route=h,this.page=1,this.pageSize=5}ngOnInit(){this._userService.getUser().subscribe(t=>{this.user=t}),this._route.snapshot.parent&&this._omnithequeService.getOne(this._route.snapshot.parent.params.id).subscribe(t=>{this.omnitheque=t,this.borrows=t.borrowList,this.borrows.map(n=>this._productService.getOne(n.productId).subscribe(r=>n.product=r)),this.collectionSize=this.borrows.length,this.refreshBorrows()})}refreshBorrows(){this.borrows=this.omnitheque.borrowList.slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize)}return(t){this._borrowService.return(t).subscribe(n=>{this.borrows.find(r=>r.id===t).returned=!0})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.u),e.Y36(v),e.Y36(m.K),e.Y36(d.M),e.Y36(a.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-omnitheque-list-borrow"]],decls:12,vars:3,consts:[[1,"responsive-Display"],["routerLink","/profile/compte"],["routerLink","/profile/borrows"],[3,"routerLink",4,"ngIf"],["routerLink","/profile/omnitheque/create",4,"ngIf"],[4,"ngIf"],[3,"routerLink"],["routerLink","/profile/omnitheque/create"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],[3,"collectionSize","page","pageSize","pageChange"],[1,"form-select",2,"width","auto",3,"ngModel","ngModelChange"],["selected","",3,"ngValue"],[3,"ngValue"],["scope","row"],[1,"btn","btn-primary","m-2"],[1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"ul")(2,"li")(3,"a",1),e._uU(4,"mon compte"),e.qZA()(),e.TgZ(5,"li")(6,"a",2),e._uU(7,"mes emprunts"),e.qZA()(),e.TgZ(8,"li"),e.YNc(9,H,2,1,"a",3),e.YNc(10,W,2,0,"a",4),e.qZA()()(),e.YNc(11,ne,3,2,"div",5)),2&t&&(e.xp6(9),e.Q6J("ngIf",null!=n.omnitheque),e.xp6(1),e.Q6J("ngIf",null==n.omnitheque),e.xp6(1),e.Q6J("ngIf",n.borrows))},dependencies:[p.sg,p.O5,b.N9,i.YN,i.Kr,i.EJ,i.JJ,i.On,a.yS],styles:[".responsive-Display[_ngcontent-%COMP%]{display:none}.responsive-Display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.responsive-Display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.responsive-Display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.responsive-Display[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{font-weight:700;cursor:pointer}a[_ngcontent-%COMP%]{text-decoration:none}@media screen and (max-width: 1150px){.responsive-Display[_ngcontent-%COMP%]{display:contents}}"]}),o})();var re=c(5606),ue=c(1372),T=c(9166);let ce=(()=>{class o{constructor(t,n){this._postService=t,this._router=n,this.postForm=new i.cw({title:new i.NI("",[i.kI.required]),content:new i.NI("",[i.kI.required]),date:new i.NI(new Date,[i.kI.required]),image:new i.NI("",[i.kI.required])})}ngOnInit(){this.postForm.patchValue({image:"http://res.cloudinary.com/dsuyae7y8/image/upload/v1665739816/o7awf1sqh62q0nolkcss.png"})}cloudinaryGo(){cloudinary.createUploadWidget({cloudName:"dsuyae7y8",uploadPreset:"omnitheque-preset"},(n,r)=>{!n&&r&&"success"===r.event&&(console.log(r.info.url),this.postForm.patchValue({image:r.info.url}))}).open()}create(){this._postService.create(this.postForm.value).subscribe(t=>this._router.navigate([`/omnitheque/${t.omnithequeId}/publications`]))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.L),e.Y36(a.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-post"]],decls:17,vars:2,consts:[[1,"text-center"],[1,"w-50","mx-auto",3,"formGroup"],[1,"container"],["id","upload_widget",1,"cloudinary-button",3,"click"],["height","100px","alt","image du produit",1,"p-2","m-2",3,"src"],[1,"mb-3"],["for","title",1,"form-label"],["formControlName","title","type","text","id","title",1,"form-control"],["for","content",1,"form-label"],["maxlength","200000","formControlName","content","type","text","id","content",1,"form-control"],[1,"btn","btn-primary","mt-2",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"nouvelle publication"),e.qZA(),e.TgZ(2,"form",1)(3,"div",2)(4,"button",3),e.NdJ("click",function(){return n.cloudinaryGo()}),e._uU(5,"choisir une image"),e.qZA(),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"titre"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",5)(12,"label",8),e._uU(13,"publication"),e.qZA(),e._UZ(14,"textarea",9),e.qZA(),e.TgZ(15,"button",10),e.NdJ("click",function(){return n.create()}),e._uU(16,"cr\xe9er"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.postForm),e.xp6(4),e.Q6J("src",n.postForm.value.image,e.LSH))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.nD,i.sg,i.u]}),o})(),ae=(()=>{class o{constructor(t,n,r){this._route=t,this._postService=n,this._router=r,this.postForm=new i.cw({id:new i.NI,title:new i.NI("",[i.kI.required]),content:new i.NI("",[i.kI.required]),image:new i.NI("",[i.kI.required])})}ngOnInit(){this._postService.getOne(this._route.snapshot.params.id).subscribe(t=>{this.postForm.patchValue({id:t.id,title:t.title,content:t.content,image:t.image})})}edit(){this._postService.update(this.postForm.value).subscribe(t=>{this._router.navigate([`/omnitheque/${t.omnithequeId}/publications`])})}cloudinaryGo(){cloudinary.createUploadWidget({cloudName:"dsuyae7y8",uploadPreset:"omnitheque-preset"},(n,r)=>{!n&&r&&"success"===r.event&&this.postForm.patchValue({image:r.info.url})}).open()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.gz),e.Y36(T.L),e.Y36(a.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-post"]],decls:17,vars:2,consts:[[1,"text-center"],[1,"w-50","mx-auto",3,"formGroup"],[1,"container"],["id","upload_widget",1,"cloudinary-button",3,"click"],["height","100px","alt","image du produit",1,"p-2","m-2",3,"src"],[1,"mb-3"],["for","title",1,"form-label"],["formControlName","title","type","text","id","title",1,"form-control"],["for","content",1,"form-label"],["maxlength","200000","formControlName","content","type","text","id","content",1,"form-control"],[1,"btn","btn-primary","mt-2",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"modifier publication"),e.qZA(),e.TgZ(2,"form",1)(3,"div",2)(4,"button",3),e.NdJ("click",function(){return n.cloudinaryGo()}),e._uU(5,"choisir une image"),e.qZA(),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"titre"),e.qZA(),e._UZ(10,"input",7),e.qZA(),e.TgZ(11,"div",5)(12,"label",8),e._uU(13,"publication"),e.qZA(),e._UZ(14,"textarea",9),e.qZA(),e.TgZ(15,"button",10),e.NdJ("click",function(){return n.edit()}),e._uU(16,"modifier"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.postForm),e.xp6(4),e.Q6J("src",n.postForm.value.image,e.LSH))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.nD,i.sg,i.u]}),o})();var se=c(661);const le=[{path:":id",component:N,children:[{path:"update",component:$},{path:"",component:C},{path:"publications",component:ue.R},{path:"publications/update/:id",component:ae},{path:"publications/createPost",component:ce},{path:"publications/publication/:id",component:se.C},{path:"products",component:C},{path:"products/createProduct",component:x},{path:"products/update/:id",component:y},{path:"createProduct",component:x},{path:"update/:id",component:y},{path:"borrows",component:ie},{path:"borrows/product/:id",component:re.F},{path:"about/:id",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-about"]],decls:34,vars:0,consts:[[1,"bg-light"],[1,"container","py-5"],[1,"row","h-100","align-items-center","py-5"],[1,"col-lg-6"],[1,"display-4"],[1,"lead","text-muted","mb-0"],[1,"col-lg-6","d-none","d-lg-block"],["src","https://bootstrapious.com/i/snippets/sn-about/illus.png","alt","",1,"img-fluid"],[1,"bg-white","py-5"],[1,"row","align-items-center","mb-5"],[1,"col-lg-6","order-2","order-lg-1"],[1,"fa","fa-bar-chart","fa-2x","mb-3","text-primary"],[1,"font-weight-light"],[1,"font-italic","text-muted","mb-4"],[1,"btn","btn-light","px-5","rounded-pill","shadow-sm"],[1,"col-lg-5","px-5","mx-auto","order-1","order-lg-2"],["src","https://bootstrapious.com/i/snippets/sn-about/img-1.jpg","alt","",1,"img-fluid","mb-4","mb-lg-0"],[1,"row","align-items-center"],[1,"col-lg-5","px-5","mx-auto"],["src","https://bootstrapious.com/i/snippets/sn-about/img-2.jpg","alt","",1,"img-fluid","mb-4","mb-lg-0"],[1,"fa","fa-leaf","fa-2x","mb-3","text-primary"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),e._uU(5,"\xe0 propos de nous"),e.qZA(),e.TgZ(6,"p",5),e._uU(7,'L\'omnitheque ne poss\xe8de pas encore de champs "about"...'),e.qZA()(),e.TgZ(8,"div",6),e._UZ(9,"img",7),e.qZA()()()(),e.TgZ(10,"div",8)(11,"div",1)(12,"div",9)(13,"div",10),e._UZ(14,"i",11),e.TgZ(15,"h2",12),e._uU(16,"Lorem ipsum dolor sit amet"),e.qZA(),e.TgZ(17,"p",13),e._uU(18,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e.qZA(),e.TgZ(19,"a",14),e._uU(20,"en savoir plus"),e.qZA()(),e.TgZ(21,"div",15),e._UZ(22,"img",16),e.qZA()(),e.TgZ(23,"div",17)(24,"div",18),e._UZ(25,"img",19),e.qZA(),e.TgZ(26,"div",3),e._UZ(27,"i",20),e.TgZ(28,"h2",12),e._uU(29,"Lorem ipsum dolor sit amet"),e.qZA(),e.TgZ(30,"p",13),e._uU(31,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e.qZA(),e.TgZ(32,"a",14),e._uU(33,"en savoir plus"),e.qZA()()()()())}}),o})()}]}];let me=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Bz.forChild(le),a.Bz]}),o})(),de=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,me]}),o})()}}]);