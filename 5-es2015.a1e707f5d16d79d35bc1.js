(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+dkL":function(n,t,e){"use strict";e.r(t),e.d(t,"ModulesModule",(function(){return U}));var r=e("ofXK"),o=e("3Pt+"),i=e("fXoL");let s=(()=>{class n{}return n.\u0275mod=i.Kb({type:n}),n.\u0275inj=i.Jb({factory:function(t){return new(t||n)},imports:[[r.c,o.m]]}),n})();var a=e("tyNb");let c=(()=>{class n{validate(n){const{password:t,ConfirmPassword:e}=n.value;return t===e?null:{passwordDontMatch:!0}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=i.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=e("LcZz"),b=e("lJxs"),u=e("JIr8"),p=e("LRne"),d=e("tk/3");let g=(()=>{class n{constructor(n){this._http=n,this.rootUrl="https://movie-app-v1.herokuapp.com/api/user/find-user",this.validate=n=>this._http.get(this.rootUrl,{params:{email:n.value}}).pipe(Object(b.a)(n=>n?{existingEmail:!0}:null),Object(u.a)(n=>Object(p.a)({connectionError:!0})))}}return n.\u0275fac=function(t){return new(t||n)(i.Zb(d.b))},n.\u0275prov=i.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function m(n,t){if(1&n&&(i.Rb(0,"p",5),i.Bc(1),i.Qb()),2&n){const n=i.fc(2);i.kc("ngClass",n.AddingErrorStyling()),i.zb(1),i.Dc(" ",n.label," Is Required... tryAgain ")}}function f(n,t){if(1&n&&(i.Rb(0,"p",5),i.Bc(1),i.Qb()),2&n){const n=t.ngIf,e=i.fc(2);i.kc("ngClass",e.AddingErrorStyling()),i.zb(1),i.Fc(" ",e.label," should be at least ",n.requiredLength," Char but You Enterd ",n.actualLength," Char ")}}function h(n,t){if(1&n&&(i.Rb(0,"p",5),i.Bc(1),i.Qb()),2&n){const n=t.ngIf,e=i.fc(2);i.kc("ngClass",e.AddingErrorStyling()),i.zb(1),i.Fc(" ",e.label," should be at moast ",n.requiredLength," Char but You Enterd ",n.actualLength," Char ")}}function v(n,t){if(1&n&&(i.Rb(0,"p",5),i.Bc(1," Invalid Format Try Again ... "),i.Qb()),2&n){const n=i.fc(2);i.kc("ngClass",n.AddingErrorStyling())}}function w(n,t){if(1&n&&(i.Pb(0),i.zc(1,m,2,2,"p",4),i.zc(2,f,2,4,"p",4),i.zc(3,h,2,4,"p",4),i.zc(4,v,2,1,"p",4),i.Ob()),2&n){const n=i.fc();i.zb(1),i.kc("ngIf",n.control.errors.required),i.zb(1),i.kc("ngIf",n.control.errors.minlength),i.zb(1),i.kc("ngIf",n.control.errors.maxlength),i.zb(1),i.kc("ngIf",n.control.errors.pattern)}}let y=(()=>{class n{constructor(){}ngOnInit(){}showError(){const{errors:n,touched:t,dirty:e}=this.control;return n&&t&&e}AddingErrorStyling(){return{errorRedClass:this.control.invalid}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Gb({type:n,selectors:[["app-input"]],inputs:{control:"control",label:"label",type:"type",placeholder:"placeholder"},decls:5,vars:5,consts:[[1,"form-group"],[2,"font-size","25px"],[1,"form-control",3,"formControl","type","placeholder"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,t){1&n&&(i.Rb(0,"div",0),i.Rb(1,"label",1),i.Bc(2),i.Qb(),i.Nb(3,"input",2),i.zc(4,w,5,4,"ng-container",3),i.Qb()),2&n&&(i.zb(2),i.Dc(" ",t.label," "),i.zb(1),i.kc("formControl",t.control)("type",t.type)("placeholder",t.placeholder),i.zb(1),i.kc("ngIf",t.showError()))},directives:[o.a,o.j,o.c,r.l,r.j],styles:[""]}),n})();const k=function(n){return{errorRedClass:n}};function R(n,t){if(1&n&&(i.Rb(0,"p",22),i.Bc(1," Passwords Dont Match... Try Again "),i.Qb()),2&n){const n=i.fc(2);i.kc("ngClass",i.oc(1,k,n.signUpForm.invalid&&(null==n.signUpForm.errors?null:n.signUpForm.errors.passwordDontMatch)))}}function z(n,t){if(1&n&&(i.Pb(0),i.zc(1,R,2,3,"p",21),i.Ob()),2&n){const n=i.fc();i.zb(1),i.kc("ngIf",n.signUpForm.errors.passwordDontMatch)}}function I(n,t){1&n&&(i.Rb(0,"div",23),i.Rb(1,"p",24),i.Bc(2," Email is exists. "),i.Qb(),i.Qb())}function Q(n,t){if(1&n){const n=i.Sb();i.Rb(0,"div",15),i.Rb(1,"label",25),i.Bc(2),i.Qb(),i.Rb(3,"input",26),i.dc("change",(function(){i.tc(n);const e=t.$implicit;return i.fc().signUpForm.get("gender").setValue(e.value)})),i.Qb(),i.Qb()}if(2&n){const n=t.$implicit,e=t.index;i.zb(1),i.kc("for",n.label+e),i.zb(1),i.Cc(n.label),i.zb(1),i.kc("id",n.label+e)("value",n.value)}}function C(n,t){if(1&n&&(i.Rb(0,"p",14),i.Bc(1),i.Qb()),2&n){const n=i.fc();i.zb(1),i.Dc(" ",n.loginFialdError," ")}}const F=[{path:"signUp",component:(()=>{class n{constructor(n,t,e,r){this._matchPassword=n,this._router=t,this._signService=e,this._uniqueEmailValidator=r,this.genders=[{label:"male",value:"male"},{label:"female",value:"female"},{label:"other",value:"other"}],this.signUpForm=new o.e({name:new o.b(null,[o.n.required,o.n.minLength(4),o.n.maxLength(15),o.n.pattern(/^[a-z]|[A-Z]/)]),password:new o.b(null,[o.n.required,o.n.minLength(5),o.n.maxLength(15)]),ConfirmPassword:new o.b(null,[o.n.required,o.n.minLength(5),o.n.maxLength(15)]),gender:new o.b(null,[o.n.required]),email:new o.b(null,[o.n.email,o.n.required],[this._uniqueEmailValidator.validate])},{validators:[this._matchPassword.validate]})}ngOnInit(){}OnSubmit(){if(this.signUpForm.valid){const{name:n,password:t,email:e}=this.signUpForm.value;this._signService.signUp({email:e,password:t,username:n}).subscribe(n=>{const{token:t,user:e}=n;localStorage.setItem("user",JSON.stringify({user:e,token:t})),this._signService.setAuthenticationState(!0),this._router.navigate([""])})}else{this.signUpForm.markAllAsTouched();for(const n in this.signUpForm.controls)this.signUpForm.get(n).markAsDirty()}}onClickReset(){this.signUpForm.reset()}}return n.\u0275fac=function(t){return new(t||n)(i.Mb(c),i.Mb(a.b),i.Mb(l.a),i.Mb(g))},n.\u0275cmp=i.Gb({type:n,selectors:[["app-sign-up"]],decls:27,vars:8,consts:[[1,"container"],[1,"row","my-3"],[1,"col"],[1,"text-center","text-muted"],[1,"row","justify-content-center"],[1,"col-8"],[3,"formGroup","ngSubmit"],["label","User Name","type","text","placeholder","",3,"control"],["label","Password","type","password","placeholder","",3,"control"],["label","Confirm Password","type","password","placeholder","",3,"control"],[4,"ngIf"],["label","Email","type","text","placeholder","",3,"control"],["class","alert-danger",4,"ngIf"],[1,"d-flex"],["class","form-group",4,"ngFor","ngForOf"],[1,"form-group"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-danger","m-1",3,"click"],[1,"d-flex","justify-content-center","font-weigth-bold"],[1,"mr-3","lead"],["routerLink","../signIn",1,"lead"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"alert-danger"],[1,"m-0"],[1,"label","m-2",3,"for"],["type","radio","name","gender",3,"id","value","change"]],template:function(n,t){1&n&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"h1",3),i.Bc(4,"Have An Account"),i.Qb(),i.Qb(),i.Qb(),i.Rb(5,"div",4),i.Rb(6,"div",5),i.Rb(7,"form",6),i.dc("ngSubmit",(function(){return t.OnSubmit()})),i.Nb(8,"app-input",7),i.Nb(9,"app-input",8),i.Nb(10,"app-input",9),i.zc(11,z,2,1,"ng-container",10),i.Nb(12,"app-input",11),i.zc(13,I,3,0,"div",12),i.Rb(14,"div",13),i.zc(15,Q,4,4,"div",14),i.Qb(),i.Rb(16,"div",15),i.Rb(17,"button",16),i.Bc(18," Submit "),i.Qb(),i.Rb(19,"button",17),i.dc("click",(function(){return t.onClickReset()})),i.Bc(20," Reset "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Nb(21,"hr"),i.Rb(22,"div",18),i.Rb(23,"p",19),i.Bc(24,"AlREADY HAVE AN ACCOUNT"),i.Qb(),i.Rb(25,"a",20),i.Bc(26," SIGN IN"),i.Qb(),i.Qb(),i.Qb()),2&n&&(i.zb(7),i.kc("formGroup",t.signUpForm),i.zb(1),i.kc("control",t.signUpForm.get("name")),i.zb(1),i.kc("control",t.signUpForm.get("password")),i.zb(1),i.kc("control",t.signUpForm.get("ConfirmPassword")),i.zb(1),i.kc("ngIf",t.signUpForm.get("password").touched&&t.signUpForm.get("ConfirmPassword").touched&&t.signUpForm.errors),i.zb(1),i.kc("control",t.signUpForm.get("email")),i.zb(1),i.kc("ngIf",null==t.signUpForm.get("email").errors?null:t.signUpForm.get("email").errors.existingEmail),i.zb(2),i.kc("ngForOf",t.genders))},directives:[o.p,o.k,o.f,y,r.l,r.k,a.e,r.j],styles:["a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()},{path:"signIn",component:(()=>{class n{constructor(n,t){this.router=n,this.authenticationService=t,this.passwordType="password",this.genders=[{label:"Male",value:"male"},{label:"FeMale",value:"female"},{label:"Other",value:"other"}],this.form=new o.e({username:new o.b(null,[o.n.required,o.n.minLength(5),o.n.maxLength(20),o.n.pattern(/^[a-zA-Z]/)]),password:new o.b(null,[o.n.required,o.n.required,o.n.minLength(5),o.n.maxLength(20)])})}ngOnInit(){this.form.valueChanges.subscribe(()=>this.loginFialdError=null)}onSignInSubmit(){if(this.form.invalid){this.form.markAllAsTouched();for(const n in this.form.controls)this.form.get(n).markAsDirty();return}const{username:n,password:t}=this.form.value;this.authenticationService.login(n,t).subscribe(n=>{localStorage.setItem("user",JSON.stringify(n)),this.authenticationService.currentUser=n,this.router.navigate([""])},n=>{this.loginFialdError="Invalid username or password!!"})}}return n.\u0275fac=function(t){return new(t||n)(i.Mb(a.b),i.Mb(l.a))},n.\u0275cmp=i.Gb({type:n,selectors:[["app-sign-in"]],decls:20,vars:5,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-6","mt-3"],[1,"text-center"],[3,"formGroup","ngSubmit"],["label","Email","placeholder","","type","text",3,"control"],["label","Password","placeholder","",3,"control","type"],[1,"mb-2"],["type","button",1,"btn","btn-info",3,"click"],["class","m-0 errorRedClass",4,"ngIf"],["type","submit",1,"btn","btn-primary"],[1,"d-flex","justify-content-center","font-weigth-bold"],[1,"mr-3","lead"],["routerLink","../signUp",1,"lead"],[1,"m-0","errorRedClass"]],template:function(n,t){1&n&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"h1",3),i.Bc(4,"Sign In"),i.Qb(),i.Rb(5,"form",4),i.dc("ngSubmit",(function(){return t.onSignInSubmit()})),i.Nb(6,"app-input",5),i.Nb(7,"app-input",6),i.Rb(8,"div",7),i.Rb(9,"button",8),i.dc("click",(function(){return t.passwordType="password"==t.passwordType?"text":"password"})),i.Bc(10," show Passsword "),i.Qb(),i.Qb(),i.zc(11,C,2,1,"p",9),i.Rb(12,"button",10),i.Bc(13," Sign In "),i.Qb(),i.Qb(),i.Nb(14,"hr"),i.Rb(15,"div",11),i.Rb(16,"p",12),i.Bc(17,"Dont Have An ACCOUNT"),i.Qb(),i.Rb(18,"a",13),i.Bc(19," SIGN UP"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&n&&(i.zb(5),i.kc("formGroup",t.form),i.zb(1),i.kc("control",t.form.get("username")),i.zb(1),i.lc("type",t.passwordType),i.kc("control",t.form.get("password")),i.zb(4),i.kc("ngIf",t.loginFialdError))},directives:[o.p,o.k,o.f,y,r.l,a.e],styles:["a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}];let S=(()=>{class n{}return n.\u0275mod=i.Kb({type:n}),n.\u0275inj=i.Jb({factory:function(t){return new(t||n)},imports:[[a.f.forChild(F)],a.f]}),n})(),U=(()=>{class n{}return n.\u0275mod=i.Kb({type:n}),n.\u0275inj=i.Jb({factory:function(t){return new(t||n)},imports:[[r.c,S,o.m,s]]}),n})()}}]);