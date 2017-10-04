webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pics/pics.module": [
		"../../../../../src/app/pics/pics.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__core_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'pics',
        loadChildren: 'app/pics/pics.module#PicsModule'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {
                preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* PreloadAllModules */]
            })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing-module.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/* Everything but the jumbotron gets side spacing for mobile first views */\n\n.header,\n.marketing,\n.footer {\n  padding-right: 1rem;\n  padding-left: 1rem;\n  padding-top: 1rem;\n}\n\n\n/* Custom page header */\n\n.header {\n  padding-bottom: 1rem;\n  border-bottom: .05rem solid #e5e5e5;\n}\n\n\n/* Make the masthead heading the same height as the navigation */\n\n.header h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 3rem;\n}\n\n\n/* Custom page footer */\n\n.footer {\n  margin-top: 1rem;\n  padding-top: 1.5rem;\n  color: #777;\n  border-top: .05rem solid #e5e5e5;\n}\n\n\n/* Responsive: Portrait tablets and up */\n\n@media screen and (min-width: 48em) {\n  /* Remove the padding we set earlier */\n  .header,\n  .marketing,\n  .footer {\n      padding-right: 0;\n      padding-left: 0;\n  }\n  /* Space out the masthead */\n  .header {\n      margin-bottom: 2rem;\n  }\n  /* Remove the bottom border on the jumbotron for visual effect */\n  .jumbotron {\n      border-bottom: 0;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n    <footer class=\"footer row\">\n        <div class=\"col-md-8\">\n            <p>&copy; <a href=\"https://www.freecodecamp.org/miguelsmendoza\" target=\"_blank\">Miguel S. Mendoza</a> in 2017 following instructions in <a href=\"https://www.freecodecamp.org/challenges/build-a-pinterest-clone\" target=\"_blank\">freeCodeCamp <i class=\"fa fa-free-code-camp\"></i></a>.\n            </p>\n        </div>\n        <div class=\"col-md-4 text-right\">\n            <p><a href=\"https://github.com/MiguelSMendoza/stolenpics\" target=\"_blank\">Source <i class=\"fa fa-github\"></i></a>.</p>\n        </div>\n    </footer>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(toastr, vcr) {
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pics_pics_module__ = __webpack_require__("../../../../../src/app/pics/pics.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__pics_pics_module__["PicsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module_module__ = __webpack_require__("../../../../../src/app/app-routing-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pics_pics_module__ = __webpack_require__("../../../../../src/app/pics/pics.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_11__pics_pics_module__["PicsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__app_routing_module_module__["a" /* AppRoutingModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button,\na {\n    cursor: pointer;\n}\n\n@media (min-width: 48em) {\n    .nav-content {\n        margin: 0 auto;\n        max-width: 46rem;\n    }\n}\n\n.input-group .form-control {\n    border: 0;\n}\n\n.input-group .input-group-addon {\n    color: white;\n    background-color: green;\n    cursor: pointer;\n}\n\n.input-group .input-group-addon:hover {\n    background-color: lightgreen;\n    color: gray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <a class=\"navbar-brand\" routerLink=\"/\">StolenPics <i class=\"fa fa-free-code-camp\"></i></a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\" [ngbCollapse]=\"!isNavbarCollapsed\">\n        <ng-template [ngIf]=\"isAuthenticated\">\n            <form class=\"form-inline my-2 my-lg-0 \">\n                <input class=\"form-control mr-sm-2\" size=\"50\" type=\"text\" placeholder=\"Image URL\" aria-label=\"Image URL...\" #imageURL>\n                <button type=\"button\" class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"onAddPicture(imageURL)\"><i class=\"fa fa-plus\"></i> <span>Add Image</span></button>\n            </form>\n        </ng-template>\n        <div class=\"mt-2 mt-md-0 ml-auto\">\n            <button *ngIf=\"!isAuthenticated\" (click)=\"onLogin()\" class=\"btn btn-outline-info my-2 my-sm-0\" type=\"button\"><i class=\"fa fa-twitter\"></i> Sign in</button>\n            <ng-template [ngIf]=\"isAuthenticated\">\n                <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item dropdown\" ngbDropdown>\n                        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">{{username}}</a>\n                        <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"dropdown01\">\n                            <a class=\"dropdown-item\" (click)=\"onMyPics()\">My Pics</a>\n                            <a class=\"dropdown-item\" (click)=\"onLogout()\">Logout</a>\n                        </div>\n                    </li>\n                </ul>\n            </ng-template>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pics_pics_service__ = __webpack_require__("../../../../../src/app/pics/pics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(authService, picService, toastr) {
        var _this = this;
        this.authService = authService;
        this.picService = picService;
        this.toastr = toastr;
        this.authService.user.subscribe(function (user) {
            _this.isAuthenticated = (user) ? true : false;
            if (_this.isAuthenticated) {
                _this.username = user.displayName;
                _this.uid = user.uid;
            }
        });
    }
    HeaderComponent.prototype.onAddPicture = function (element) {
        var _this = this;
        var url = element.value;
        if (this.isURL(url) && this.isImage(url)) {
            this.picService.addPicture(url).subscribe(function (response) {
                if (!response) {
                    _this.toastr.warning('Your Image is already included on your album', 'Image Exists');
                }
                else {
                    _this.toastr.success('Your Image has been included on your album', 'Image Added');
                }
                element.value = '';
            });
        }
        else {
            this.toastr.error('Not a valid URL', 'Error');
            element.value = '';
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogin = function () {
        this.authService.login();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.isURL = function (str) {
        var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return pattern.test(str);
    };
    HeaderComponent.prototype.isImage = function (url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/core/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__pics_pics_service__["a" /* PicsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pics_pics_service__["a" /* PicsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-heart {\n  color: red;\n}\nbutton {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>StolenPics</h1>\n<hr/>\n<app-pic-list></app-pic-list>"

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(authService, toastr) {
        var _this = this;
        this.authService = authService;
        this.toastr = toastr;
        this.next = 0;
        this.uid = '';
        this.books = [];
        this.totalBooks = [];
        this.authService.user.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
            }
            else {
                _this.uid = '';
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    HomeComponent.prototype.doNext = function () {
        if (this.next < this.totalBooks.length) {
            this.books.push(this.totalBooks[this.next++]);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/core/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/home/home.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('listItem', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateY(-10px)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateY(0)', opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/picture.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Picture; });
var Picture = (function () {
    function Picture(url, thiefs, owner, likes, timestamp) {
        this.url = url;
        this.thiefs = thiefs;
        this.owner = owner;
        this.likes = likes;
        this.timestamp = timestamp;
    }
    return Picture;
}());

//# sourceMappingURL=picture.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/thief.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thief; });
var Thief = (function () {
    function Thief(uid, username, name, photo) {
        this.uid = uid;
        this.username = username;
        this.name = name;
        this.photo = photo;
    }
    return Thief;
}());

//# sourceMappingURL=thief.model.js.map

/***/ }),

/***/ "../../../../../src/app/pics/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        return Object.keys(value).length;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'keys'
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pics/pic-list/pic-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pics/pic-list/pic-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"username\">\n    <h2>{{ username }} Stolen Pictures</h2>\n    <hr/>\n</div>\n<div class=\"card-columns\">\n    <app-pic *ngFor=\"let picture of pictures\" [key]=\"picture.$key\" [@listItem] (@listItem.done)=\"doNext()\"></app-pic>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pics/pic-list/pic-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pics_service__ = __webpack_require__("../../../../../src/app/pics/pics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PicListComponent = (function () {
    function PicListComponent(picService, route, router) {
        this.picService = picService;
        this.route = route;
        this.router = router;
        this.next = 0;
        this.subscription = [];
        this.allPictures = [];
        this.pictures = [];
        this.userPictures = false;
    }
    PicListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.push(this.route.params.subscribe(function (params) {
            _this.user = params['id'];
            if (_this.user) {
                _this.subscription.push(_this.picService.getUserPictures(_this.user).subscribe(function (pictures) {
                    if (pictures.length > 0) {
                        _this.initPictures(pictures);
                        var user_1 = _this.user;
                        var name_1 = '';
                        Object.keys(pictures[0].thiefs).forEach(function (key) {
                            if (pictures[0].thiefs[key].username === user_1) {
                                name_1 = pictures[0].thiefs[key].name;
                            }
                        });
                        _this.username = name_1;
                        _this.userPictures = true;
                    }
                }));
            }
            else {
                _this.subscription.push(_this.picService.pictures.subscribe(function (pictures) {
                    _this.initPictures(pictures);
                }));
            }
        }));
    };
    PicListComponent.prototype.initPictures = function (pictures) {
        if (this.allPictures.length !== pictures.length) {
            this.allPictures = pictures.reverse();
            this.pictures = [];
            this.next = 0;
            this.doNext();
        }
    };
    PicListComponent.prototype.doNext = function () {
        if (this.next < this.allPictures.length) {
            this.pictures.push(this.allPictures[this.next++]);
        }
    };
    PicListComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (s) { return s.unsubscribe(); });
    };
    return PicListComponent;
}());
PicListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pic-list',
        template: __webpack_require__("../../../../../src/app/pics/pic-list/pic-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pics/pic-list/pic-list.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["a" /* trigger */])('listItem', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ transform: 'translateX(-10px)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ transform: 'translateX(0)', opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pics_service__["a" /* PicsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pics_service__["a" /* PicsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PicListComponent);

var _a, _b, _c;
//# sourceMappingURL=pic-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pics/pic/pic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}\n\n.fa-heart {\n    color: red;\n}\n\n.close {\n    position: absolute;\n    top: 0;\n    right: 5px;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pics/pic/pic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 20rem;\">\n    <button (click)=\"onRemove()\" type=\"button\" class=\"close\" aria-label=\"Close\" *ngIf=\"canDelete()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <a href=\"{{ picture.url }}\" target=\"_blank\">\n        <img #imageObject class=\"card-img-top\" src=\"{{ imageSRC }}\" title=\"{{ picture.url }}\" alt=\"Picture\" (error)=\"updateUrl($event)\">\n    </a>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <a [routerLink]=\"['/', picture.owner.username]\" class=\"card-link col-auto\">{{ picture.owner.name }}</a>\n            <div class=\"col-auto\">\n                <a (click)=\"onLike()\" class=\"card-link text-nowrap\"><i [@divState]=\"heartState\" (@divState.done)=\"onLikeDone($event, picture)\" class=\"fa fa-heart\"></i> {{ picture.likes | keys }}</a>\n                <a (click)=\"onSave()\" class=\"card-link text-nowrap\"><i class=\"fa fa-floppy-o\" [@divState]=\"saveState\" (@divState.done)=\"onSaveDone($event, picture)\"></i> {{ (picture.thiefs | keys) - 1 }}</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pics/pic/pic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pics_service__ = __webpack_require__("../../../../../src/app/pics/pics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PicComponent = (function () {
    function PicComponent(picService, toastr) {
        this.picService = picService;
        this.toastr = toastr;
        this.heartState = 'normal';
        this.saveState = 'normal';
        this.imageSRC = 'assets/broken.jpg';
    }
    PicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.picService.getPictureByKey(this.key).subscribe(function (picture) {
            _this.picture = picture;
            if (!_this.picture.likes) {
                _this.picture.likes = {};
            }
            if (!_this.picture.thiefs) {
                _this.picture.thiefs = {};
            }
            _this.imageSRC = _this.picture.url;
        });
    };
    PicComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PicComponent.prototype.onRemove = function () {
        var _this = this;
        this.picService.removePicture(this.picture).catch(function () {
            _this.toastr.error('An Error has ocurred.', 'Error');
        }).then(function (response) {
            _this.toastr.info('Image has been removed.', 'Removed');
        });
    };
    PicComponent.prototype.canDelete = function () {
        return this.picService.canDelete(this.picture);
    };
    PicComponent.prototype.updateUrl = function (event) {
        event.preventDefault();
        this.imageSRC = 'assets/broken.jpg';
        return true;
    };
    PicComponent.prototype.onLike = function () {
        this.heartState = 'clicked';
    };
    PicComponent.prototype.onLikeDone = function ($event, picture) {
        if ($event.fromState === 'normal') {
            this.heartState = 'normal';
            this.picService.likePicture(picture);
        }
    };
    PicComponent.prototype.onSave = function () {
        this.saveState = 'clicked';
    };
    PicComponent.prototype.onSaveDone = function ($event, picture) {
        if ($event.fromState === 'normal') {
            this.saveState = 'normal';
            this.picService.savePicture(picture);
        }
    };
    return PicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('key'),
    __metadata("design:type", Object)
], PicComponent.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageObject'),
    __metadata("design:type", Object)
], PicComponent.prototype, "imageObject", void 0);
PicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pic',
        template: __webpack_require__("../../../../../src/app/pics/pic/pic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pics/pic/pic.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('divState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('normal', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    transform: 'translateX(0) scale(1)',
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('clicked', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    transform: 'translateX(0) scale(0.5)',
                    opacity: 0
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('normal => clicked', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(300)),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('clicked => normal', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(10)),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__pics_service__["a" /* PicsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pics_service__["a" /* PicsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object])
], PicComponent);

var _a, _b;
//# sourceMappingURL=pic.component.js.map

/***/ }),

/***/ "../../../../../src/app/pics/pics-routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pic_list_pic_list_component__ = __webpack_require__("../../../../../src/app/pics/pic-list/pic-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var picsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pic_list_pic_list_component__["a" /* PicListComponent */],
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_2__pic_list_pic_list_component__["a" /* PicListComponent */]
    },
];
var PicsRoutingModule = (function () {
    function PicsRoutingModule() {
    }
    return PicsRoutingModule;
}());
PicsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(picsRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PicsRoutingModule);

//# sourceMappingURL=pics-routing-module.js.map

/***/ }),

/***/ "../../../../../src/app/pics/pics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pic_list_pic_list_component__ = __webpack_require__("../../../../../src/app/pics/pic-list/pic-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pic_pic_component__ = __webpack_require__("../../../../../src/app/pics/pic/pic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pics_service__ = __webpack_require__("../../../../../src/app/pics/pics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pics_routing_module__ = __webpack_require__("../../../../../src/app/pics/pics-routing-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys_pipe__ = __webpack_require__("../../../../../src/app/pics/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicsModule", function() { return PicsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PicsModule = (function () {
    function PicsModule() {
    }
    return PicsModule;
}());
PicsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__pic_list_pic_list_component__["a" /* PicListComponent */], __WEBPACK_IMPORTED_MODULE_3__pic_pic_component__["a" /* PicComponent */], __WEBPACK_IMPORTED_MODULE_6__keys_pipe__["a" /* KeysPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__pic_list_pic_list_component__["a" /* PicListComponent */], __WEBPACK_IMPORTED_MODULE_3__pic_pic_component__["a" /* PicComponent */], __WEBPACK_IMPORTED_MODULE_5__pics_routing_module__["a" /* PicsRoutingModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__pics_service__["a" /* PicsService */]
        ]
    })
], PicsModule);

//# sourceMappingURL=pics.module.js.map

/***/ }),

/***/ "../../../../../src/app/pics/pics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_picture_model__ = __webpack_require__("../../../../../src/app/model/picture.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_thief_model__ = __webpack_require__("../../../../../src/app/model/thief.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PicsService = (function () {
    function PicsService(db, authService) {
        var _this = this;
        this.db = db;
        this.authService = authService;
        this.pictures = db.list('/pictures', {
            query: {
                orderByChild: 'timestamp',
            }
        });
        this.authService.user.subscribe(function (user) {
            _this.isAuthenticated = (user) ? true : false;
            if (_this.isAuthenticated) {
                _this.user = user;
            }
            else {
                _this.user = null;
            }
        });
    }
    PicsService.prototype.canDelete = function (picture) {
        if (this.user) {
            return this.user.uid === picture.owner.uid;
        }
        else {
            return false;
        }
    };
    PicsService.prototype.removePicture = function (picture) {
        if (this.canDelete(picture)) {
            var hash = btoa(picture.url);
            return this.db.object('/pictures/' + hash).remove();
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_4_firebase__["Promise"](function (resolve, reject) {
                resolve('false');
            });
        }
    };
    PicsService.prototype.getUserPictures = function (username) {
        return this.pictures.map(function (pictures) {
            return pictures.filter(function (data) {
                var found = false;
                if (data.hasOwnProperty('thiefs')) {
                    Object.keys(data.thiefs).forEach(function (key) {
                        if (data.thiefs[key].username === username) {
                            found = true;
                        }
                    });
                }
                return found;
            });
        });
    };
    PicsService.prototype.getUserAsThief = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__model_thief_model__["a" /* Thief */](this.user.uid, this.user.providerData[0]['uid'], this.user.displayName, this.user.photoURL);
    };
    PicsService.prototype.likePicture = function (picture) {
        var hash = btoa(picture.url);
        if (!this.isAuthenticated) {
            return new __WEBPACK_IMPORTED_MODULE_4_firebase__["Promise"](function (resolve, reject) {
                resolve('false');
            });
        }
        if (picture.likes[this.user.uid]) {
            return this.db.object('/pictures/' + hash + '/likes/' + this.user.uid).remove();
        }
        return this.db.object('/pictures/' + hash + '/likes/' + this.user.uid)
            .set(this.getUserAsThief());
    };
    PicsService.prototype.savePicture = function (picture) {
        var hash = btoa(picture.url);
        if (!this.isAuthenticated
            || picture.owner.uid === this.user.uid) {
            return new __WEBPACK_IMPORTED_MODULE_4_firebase__["Promise"](function (resolve, reject) {
                resolve('false');
            });
        }
        if (picture.thiefs[this.user.uid] && picture.owner.uid !== this.user.uid) {
            return this.db.object('/pictures/' + hash + '/thiefs/' + this.user.uid).remove();
        }
        return this.db.object('/pictures/' + hash + '/thiefs/' + this.user.uid)
            .set(this.getUserAsThief());
    };
    PicsService.prototype.addPicture = function (url) {
        var _this = this;
        return this.getPicture(url).map(function (pictureObject) {
            var hash = btoa(url);
            if (!pictureObject.$exists()) {
                var picture = new __WEBPACK_IMPORTED_MODULE_1__model_picture_model__["a" /* Picture */](url, [], _this.getUserAsThief(), [], +new Date());
                _this.db.object('/pictures/' + hash).set(picture);
                return _this.db.object('/pictures/' + hash + '/thiefs/' + _this.user.uid)
                    .set(_this.getUserAsThief());
            }
            else {
                return _this.savePicture(pictureObject);
            }
        });
    };
    PicsService.prototype.isURL = function (str) {
        var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return pattern.test(str);
    };
    PicsService.prototype.getPicture = function (url) {
        var hash = btoa(url);
        return this.db.object('/pictures/' + hash).first();
    };
    PicsService.prototype.getPictureByKey = function (key) {
        return this.db.object('/pictures/' + key);
    };
    return PicsService;
}());
PicsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], PicsService);

var _a, _b;
//# sourceMappingURL=pics.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyC3ADNgzymRoeMVhl326atcy5mQaFo6MyI',
        authDomain: 'fcc-smendoza.firebaseapp.com',
        databaseURL: 'https://fcc-smendoza.firebaseio.com',
        projectId: 'fcc-smendoza',
        storageBucket: 'fcc-smendoza.appspot.com',
        messagingSenderId: '82796816871'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map