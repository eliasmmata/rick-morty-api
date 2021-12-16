"use strict";(self.webpackChunkangular_rick_morty=self.webpackChunkangular_rick_morty||[]).push([[882],{8882:(w,g,r)=>{r.r(g),r.d(g,{LocationsModule:()=>Z});var c=r(8583),s=r(6328),t=r(639),p=r(1295),u=r(1841);let d=(()=>{class o{constructor(n){this.http=n}getLocations(){return this.http.get("https://rickandmortyapi.com/api/location").pipe((0,p.gw)(250))}getLocationById(n){return this.http.get("https://rickandmortyapi.com/api/location/"+n)}getCharacterByUrl(n){return this.http.get(n)}getLocationByPages(n){return this.http.get(n)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(u.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function m(o,e){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"h5"),t._uU(2),t.qZA(),t._UZ(3,"img",7),t.qZA()),2&o){const n=e.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(1),t.s9C("src",n.image,t.LSH)}}function f(o,e){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,m,4,2,"div",6),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.residentsLocation)}}const h=function(){return["/locations"]},_=function(){return{"text-align":"right"}};function C(o,e){if(1&o&&(t.TgZ(0,"div",2),t.TgZ(1,"button",3),t._uU(2,"Go Back"),t.qZA(),t.TgZ(3,"h3"),t._uU(4),t.ALo(5,"uppercase"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Type : "),t.TgZ(8,"span"),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"p"),t._uU(11,"Dimension : "),t.TgZ(12,"span"),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"h4"),t._uU(15,"Usually around"),t.qZA(),t.YNc(16,f,2,1,"div",4),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("routerLink",t.DdM(8,h))("ngStyle",t.DdM(9,_)),t.xp6(3),t.Oqu(t.lcZ(5,6,n.locationDetail.name)),t.xp6(5),t.Oqu(n.locationDetail.type),t.xp6(4),t.Oqu(n.locationDetail.dimension),t.xp6(3),t.Q6J("ngIf",n.showContent)}}let x=(()=>{class o{constructor(n,i){this.route=n,this.locationsService=i,this.showContent=!1,this.locationDetail={},this.residentsLocation=[]}ngOnInit(){setTimeout(()=>this.showContent=!0,1e3),this.route.paramMap.subscribe(n=>{let i=Number(n.get("id"));this.locationsService.getLocationById(i).subscribe(a=>{this.locationDetail=a;for(let l=0;l<a.residents.length;l++)this.locationsService.getCharacterByUrl(a.residents[l]).subscribe(k=>{this.residentsLocation.push(k)})})})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.gz),t.Y36(d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-location-details"]],decls:4,vars:1,consts:[[1,"c-location-detail","row","justify-content-center"],["class","col-10 col-md-8 col-lg-5",4,"ngIf"],[1,"col-10","col-md-8","col-lg-5"],[3,"routerLink","ngStyle"],["class","c-location-residents-scroll",4,"ngIf"],[1,"c-location-residents-scroll"],[4,"ngFor","ngForOf"],[3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h2"),t._uU(2,"Selected Location"),t.qZA(),t.YNc(3,C,17,10,"div",1),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngIf",i.showContent))},directives:[c.O5,s.rH,c.PC,c.sg],pipes:[c.gd],styles:['.c-location-detail[_ngcontent-%COMP%]{background:url(rick-morty-bg.2984fc4faef0427f4b0f.jpeg);padding:1rem;min-height:70vh}.c-location-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#02aec9;margin:0;padding:1rem 0 2rem;text-decoration:underline;-webkit-text-decoration-color:#FB9039;text-decoration-color:#fb9039}.c-location-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-radius:3px;background-color:#02aec9e6;padding:1rem}.c-location-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75%;display:block;margin:1rem auto;border:1px solid #02AEC9;border-radius:6%}.c-location-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:1rem 0;color:#000;text-shadow:0px 1px 1px #9E4300;text-decoration:underline;-webkit-text-decoration-color:#FB9039;text-decoration-color:#fb9039}.c-location-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem 1rem;background:#FB9039;color:#000;text-shadow:0px 1px 0px #9E4300;border:none;border-radius:3px;font-family:"future";display:block;margin-left:auto;margin-right:0;transition:.5s}.c-location-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#000;color:#fb9039;text-shadow:0px 1px 0px #9E4300;transition:.5s}.c-location-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fb9039;text-shadow:1px 0px 1px #000;padding:1.5rem 0;font-size:1.25rem}.c-location-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;margin-left:5px;text-shadow:0px 1px 0px #9E4300}.c-location-residents-scroll[_ngcontent-%COMP%]{max-height:50vh;overflow:scroll;display:flex}.c-location-residents-scroll[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{padding:0;min-width:30vh;margin-right:2rem;background-color:#000!important}.c-location-residents-scroll[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:none}.c-location-residents-scroll[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:center;color:#fb9039;text-shadow:1px 0px 1px #000;font-size:1.25rem}']}),o})();function y(o,e){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.getPageNumber())}}const O=function(o){return["/locations",o]},b=function(){return{border:"1px solid #000",margin:"1rem 2rem",padding:"1em"}};function P(o,e){if(1&o&&(t.TgZ(0,"div",4),t.TgZ(1,"h3"),t._uU(2),t.ALo(3,"uppercase"),t.qZA(),t.TgZ(4,"h5"),t._uU(5,"I am a "),t.TgZ(6,"span"),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"h5"),t._uU(9,"Location: "),t.TgZ(10,"span"),t._uU(11),t.qZA(),t.qZA(),t._UZ(12,"button",5),t.qZA()),2&o){const n=e.$implicit;t.Q6J("routerLink",t.VKq(7,O,n.id))("ngStyle",t.DdM(9,b)),t.xp6(2),t.Oqu(t.lcZ(3,5,n.name)),t.xp6(5),t.Oqu(n.type),t.xp6(4),t.Oqu(n.dimension)}}let v=(()=>{class o{constructor(){this.locationsList=[],this.info={}}ngOnInit(){}getPageNumber(){var i=new URL(this.info.next);return Number(i.searchParams.get("page"))-1}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-locations-gallery"]],inputs:{locationsList:"locationsList",info:"info"},decls:5,vars:2,consts:[[1,"c-locations-gallery","row","d-flex","justify-content-center"],[1,"gallery-title"],[4,"ngIf"],["class","c-locations-gallery-card col-md-4 col-lg-3",3,"routerLink","ngStyle",4,"ngFor","ngForOf"],[1,"c-locations-gallery-card","col-md-4","col-lg-3",3,"routerLink","ngStyle"],["data-back","In your finger","data-front","More Data",1,"btn-card"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h2",1),t._uU(2,"Locations List "),t.YNc(3,y,2,1,"span",2),t.qZA(),t.YNc(4,P,13,10,"div",3),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngIf",null!=i.info.next||i.info.next>=1),t.xp6(1),t.Q6J("ngForOf",i.locationsList))},directives:[c.O5,c.sg,s.rH,c.PC],pipes:[c.gd],styles:['.c-locations-gallery[_ngcontent-%COMP%]{background:url(rick-morty-bg.2984fc4faef0427f4b0f.jpeg);padding-bottom:7rem}.c-locations-gallery[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fb9039;text-shadow:0px 1px 1px #9e4300;margin:0;padding:2rem 0 1rem}.c-locations-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fb9039;text-shadow:0px 1px 1px #9e4300;cursor:pointer}.c-locations-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover{color:#f0a161}.c-locations-gallery[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-radius:3px;background-color:#02aec9e6;border:1px solid #000}.c-locations-gallery[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75%;display:block;margin:1rem auto;border:1px solid #02aec9;border-radius:6%;transition:.5s}.c-locations-gallery[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.05);overflow:hidden;transition:.5s}.c-locations-gallery[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]{opacity:1;outline:0;position:relative;text-align:center;background:#fb9039;color:#000;text-shadow:0px 1px 0px #9e4300;border:none;border-radius:3px;font-family:"future";text-transform:uppercase;display:block;margin:1rem auto;padding:.5rem 3rem}.c-locations-gallery[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover:after{opacity:1;transform:translateY(0) rotateX(0)}.c-locations-gallery[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover:before{opacity:0;transform:translateY(50%) rotateX(90deg)}.c-locations-gallery[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;padding:.5rem 0;border-radius:3px;opacity:0;width:100%;display:block;transition:.5s;content:attr(data-back);transform:translateY(-50%) rotateX(90deg);color:#f0a161;background-color:#000}.c-locations-gallery[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:before{top:0;left:0;opacity:1;display:block;transition:.5s;position:relative;content:attr(data-front);transform:translateY(0) rotateX(0)}.c-locations-gallery-card[_ngcontent-%COMP%]{margin:1rem 3rem;padding:1em}.c-locations-gallery-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{min-height:3rem}.c-locations-gallery-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{min-height:3rem}']}),o})();const M=[{path:"",component:(()=>{class o{constructor(n){this.locationsService=n,this.locationsList=[],this.info={}}ngOnInit(){this.locationsService.getLocations().subscribe(n=>{this.locationsList=n.results,this.info=n.info,console.log(this.info)})}nextPage(){console.log("pagina siguiente"),this.info.next&&this.locationsService.getLocationByPages(this.info.next).subscribe(n=>{this.locationsList=n.results,this.info=n.info,null===n.info.next&&(n.info.next="https://rickandmortyapi.com/api/location?page=1",console.log("vuelvo a la primera pagina"))}),window.scrollTo({top:0,behavior:"smooth"})}previousPage(){console.log("pagina anterior"),this.info.prev&&this.locationsService.getLocationByPages(this.info.prev).subscribe(n=>{this.locationsList=n.results,this.info=n.info}),window.scrollTo({top:0,behavior:"smooth"})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-locations"]],decls:6,vars:2,consts:[[3,"locationsList","info"],[1,"button-container"],[1,"button-pag",3,"click"]],template:function(n,i){1&n&&(t._UZ(0,"app-locations-gallery",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return i.previousPage()}),t._uU(3," < Previous"),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return i.nextPage()}),t._uU(5,"Next > "),t.qZA(),t.qZA()),2&n&&t.Q6J("locationsList",i.locationsList)("info",i.info)},directives:[v],styles:['.button-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;margin-top:-5rem}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem 3rem;background:#f0a161;color:#000;text-shadow:0px 1px 0px #9e4300;border:none;border-radius:3px;font-family:"future";margin:-1rem auto 1rem;height:40px}']}),o})()},{path:":id",component:x}];let L=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,L]]}),o})()}}]);