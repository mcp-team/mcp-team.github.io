(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sponsors_view_sponsors_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sponsors-view/sponsors-view.component */ "./src/app/components/sponsors-view/sponsors-view.component.ts");
/* harmony import */ var _components_about_us_view_about_us_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-us-view/about-us-view.component */ "./src/app/components/about-us-view/about-us-view.component.ts");
/* harmony import */ var _components_contact_us_view_contact_us_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-us-view/contact-us-view.component */ "./src/app/components/contact-us-view/contact-us-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'about-us', pathMatch: 'full' },
    { path: 'home', redirectTo: 'about-us', pathMatch: 'full' },
    { path: 'about-us', component: _components_about_us_view_about_us_view_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsViewComponent"] },
    { path: 'sponsors', component: _components_sponsors_view_sponsors_view_component__WEBPACK_IMPORTED_MODULE_2__["SponsorsViewComponent"] },
    { path: 'contact-us', component: _components_contact_us_view_contact_us_view_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsViewComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper -->\n<div id=\"wrapper\">\n\n    <!-- Main -->\n    <div id=\"main\">\n\n        <!-- Header Icons -->\n        <ul class=\"icons header-icons\">\n            <li><a href=\"https://www.facebook.com/groups/maccpt/\" class=\"icon fa-facebook\" target=\"blank\"><span class=\"label\">Facebook</span></a></li>\n            <li><a href=\"https://www.github.com/mcp-team\" class=\"icon fa-github\" target=\"blank\"><span class=\"label\">GitHub</span></a></li>\n            <li><a routerLink=\"../contact-us\" class=\"icon fa-envelope\"><span class=\"label\">Email</span></a></li>\n            <!--\n            <li><a href=\"#\" class=\"icon fa-twitter\" target=\"_blank\"><span class=\"label\">Twitter</span></a></li>\n            <li><a href=\"#\" class=\"icon fa-snapchat-ghost\"><span class=\"label\">Snapchat</span></a></li>\n            <li><a href=\"#\" class=\"icon fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n            <li><a href=\"#\" class=\"icon fa-medium\"><span class=\"label\">Medium</span></a></li>\n            -->\n        </ul>\n\n        <!-- Inner -->\n        <div class=\"inner\" style=\"padding-top: 75px;\">\n            <router-outlet></router-outlet>\n        </div>\n\n    </div>\n\n    <!-- Sidebar -->\n    <div id=\"sidebar\">\n        <div class=\"inner\">\n\n            <!-- Logo -->\n            <section class=\"alt\" style=\"margin-bottom: 20px;\">\n                <a routerLink=\"/home\">\n                    <span class=\"image fit\"><img src=\"assets/images/MCP-LogoV1-GrayNoBox.png\" alt=\"\" /></span>\n                </a>\n            </section>\n\n            <!-- Menu -->\n            <nav id=\"menu\">\n                <ul>\n                    <li><a routerLink=\"about-us\">About Us</a></li>\n                    <li><a routerLink=\"sponsors\">Our Sponsors</a></li>\n                    <!--<li><a routerLink=\"#\">Get Involved</a></li>\n                    <li><a routerLink=\"#\">Our Members</a></li>\n                    <li>\n                        <span class=\"opener\">Learn</span>\n                        <ul>\n                            <li><a routerLink=\"/workshops\">Workshops</a></li>\n                            <li><a routerLink=\"/editorials\">Editorials</a></li>\n                            <li><a routerLink=\"/interview-prep\">Interview Prep</a></li>\n                        </ul>\n                    </li>-->\n                </ul>\n            </nav>\n\n            <!-- Section -->\n            <section>\n                <header>\n                    <a routerLink=\"contact-us\" class=\"button primary fit\">Contact Us</a>\n                </header>\n            </section>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Html5UpService_html5_up_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/Html5UpService/html5-up.service */ "./src/app/services/Html5UpService/html5-up.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(html5up) {
        this.html5up = html5up;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.html5up.reload();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Html5UpService_html5_up_service__WEBPACK_IMPORTED_MODULE_1__["Html5UpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sponsors_view_sponsors_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sponsors-view/sponsors-view.component */ "./src/app/components/sponsors-view/sponsors-view.component.ts");
/* harmony import */ var _services_Html5UpService_html5_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/Html5UpService/html5-up.service */ "./src/app/services/Html5UpService/html5-up.service.ts");
/* harmony import */ var _services_SponsorsService_sponsors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/SponsorsService/sponsors.service */ "./src/app/services/SponsorsService/sponsors.service.ts");
/* harmony import */ var _components_about_us_view_about_us_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about-us-view/about-us-view.component */ "./src/app/components/about-us-view/about-us-view.component.ts");
/* harmony import */ var _components_deadend_view_deadend_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/deadend-view/deadend-view.component */ "./src/app/components/deadend-view/deadend-view.component.ts");
/* harmony import */ var _components_contact_us_view_contact_us_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact-us-view/contact-us-view.component */ "./src/app/components/contact-us-view/contact-us-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_sponsors_view_sponsors_view_component__WEBPACK_IMPORTED_MODULE_5__["SponsorsViewComponent"],
                _components_about_us_view_about_us_view_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsViewComponent"],
                _components_deadend_view_deadend_view_component__WEBPACK_IMPORTED_MODULE_9__["DeadendViewComponent"],
                _components_contact_us_view_contact_us_view_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [
                _services_Html5UpService_html5_up_service__WEBPACK_IMPORTED_MODULE_6__["Html5UpService"],
                _services_SponsorsService_sponsors_service__WEBPACK_IMPORTED_MODULE_7__["SponsorsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us-view/about-us-view.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/about-us-view/about-us-view.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about-us-view/about-us-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/about-us-view/about-us-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\" style=\"padding-bottom: 10px; padding-top: 25px;\">\n  <div class=\"content\">\n    <header>\n      <h1 style=\"font-size: 3.7em\">McMaster Competitive Programming</h1>\n      <p>A community of McMaster's best algorithmic programmers</p>\n    </header>\n    <p>\n      McMaster Competitive Programming (MCP) is a community of passionate individuals dedicated to increasing the technical skills of McMaster students.\n      Our members are well-versed in competitive computing concepts and represent McMaster University in the world prestigious International Collegiate \n      Programming Competition (ICPC) every year.\n    </p>\n  </div>\n</section>\n\n<section>\n  <header>\n    <h2>Our goals</h2>\n  </header>\n  <div class=\"features\">\n      <article>\n        <span class=\"icon fa-signal\"></span>\n        <div class=\"content\">\n          <h3>Develop the skills of students</h3>\n          <p>\n            MCP works hard to provide resources for students to increase their\n            confidence in data structures and algorithms. We hold practices, workshops, and more!</p>\n        </div>\n      </article>\n      <article>\n        <span class=\"icon fa-trophy\"></span>\n        <div class=\"content\">\n          <h3>Represent McMaster at ICPC</h3>\n          <p>\n            Each year MCP sends three teams of three students to represent McMaster University at the \n            <a href=\"https://icpc.baylor.edu/\" target=\"blank\">International Collegiate Programming Competition</a> (ICPC) - a prestigious world-wide \n            college-level programming competition.\n          </p>\n        </div>\n      </article>\n      <article>\n        <span class=\"icon fa-connectdevelop\"></span>\n        <div class=\"content\">\n          <h3>Connect students to opportunities</h3>\n          <p>\n            We understand that reaching out to internship opportunities can be a daunting process - so \n            we try our hardest to bring <a routerLink=\"../sponsors\">outstanding companies</a> to our campus\n            to recruit the talented students of our community! \n          </p>\n        </div>\n      </article>\n      <article>\n        <span class=\"icon fa-smile-o\"></span>\n        <div class=\"content\">\n          <h3>Have fun!</h3>\n          <p>\n            Believe it or not, but competitive programming is a lot of fun - especially with our community!\n            Don't knock it 'till you try it!\n          </p>\n        </div>\n      </article>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/about-us-view/about-us-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/about-us-view/about-us-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutUsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsViewComponent", function() { return AboutUsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsViewComponent = /** @class */ (function () {
    function AboutUsViewComponent() {
    }
    AboutUsViewComponent.prototype.ngOnInit = function () {
    };
    AboutUsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us-view',
            template: __webpack_require__(/*! ./about-us-view.component.html */ "./src/app/components/about-us-view/about-us-view.component.html"),
            styles: [__webpack_require__(/*! ./about-us-view.component.css */ "./src/app/components/about-us-view/about-us-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsViewComponent);
    return AboutUsViewComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-us-view/contact-us-view.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/contact-us-view/contact-us-view.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact-us-view/contact-us-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/contact-us-view/contact-us-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"padding-bottom: 10px; padding-top: 25px;\">\n  <h1 style=\"text-align: center; font-size: 3.7em\">Contact Us</h1>\n</section>\n<section>\n  <form method=\"POST\" action=\"https://formspree.io/{{ email }}\">\n    <div class=\"row gtr-uniform\">\n      <div class=\"col-6 col-12-xsmall\">\n        <input type=\"text\" name=\"name\" id=\"name\" value=\"\" placeholder=\"Name\">\n      </div>\n      <div class=\"col-6 col-12-xsmall\">\n        <input type=\"email\" name=\"email\" id=\"email\" value=\"\" placeholder=\"Email\">\n      </div>\n      <!-- Break -->\n      <div class=\"col-12\">\n        <select name=\"category\" id=\"category\">\n          <option value=\"\">- Message Type -</option>\n          <option value=\"1\">Sponsorship</option>\n          <option value=\"1\">Question</option>\n          <option value=\"1\">Comment</option>\n        </select>\n      </div>\n      <!-- Break -->\n      <div class=\"col-12\">\n        <textarea name=\"message\" id=\"message\" placeholder=\"Enter your message\" rows=\"6\"></textarea>\n      </div>\n      <!-- Break -->\n      <div class=\"col-12\">\n        <ul class=\"actions\">\n          <li><input type=\"submit\" value=\"Send Message\" class=\"primary\"></li>\n          <li><input type=\"reset\" value=\"Reset\"></li>\n        </ul>\n      </div>\n    </div>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/components/contact-us-view/contact-us-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/contact-us-view/contact-us-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContactUsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsViewComponent", function() { return ContactUsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsViewComponent = /** @class */ (function () {
    function ContactUsViewComponent() {
        this.email = "contact-us@mcp-team.com";
    }
    ContactUsViewComponent.prototype.ngOnInit = function () {
    };
    ContactUsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us-view',
            template: __webpack_require__(/*! ./contact-us-view.component.html */ "./src/app/components/contact-us-view/contact-us-view.component.html"),
            styles: [__webpack_require__(/*! ./contact-us-view.component.css */ "./src/app/components/contact-us-view/contact-us-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsViewComponent);
    return ContactUsViewComponent;
}());



/***/ }),

/***/ "./src/app/components/deadend-view/deadend-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/deadend-view/deadend-view.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/deadend-view/deadend-view.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/deadend-view/deadend-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"banner\">\n  <div class=\"content\">\n    <header style=\"text-align: center;\">\n      <h1>Woops!</h1>\n      <p>Looks like we're still working on this page.</p>\n      <p>Sorry about that! :(</p>\n    </header>\n  </div>\n</section>\n<section>\n  <ul class=\"actions special\">\n      <li><a routerLink=\"../about-us\" class=\"button big primary\" style=\"margin-bottom: 10px;\">Go Home</a></li>\n      <li><a routerLink=\"../contact-us\" class=\"button big primary\" style=\"margin-bottom: 10px;\">Contact Us</a></li>\n  </ul>\n</section>"

/***/ }),

/***/ "./src/app/components/deadend-view/deadend-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/deadend-view/deadend-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeadendViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadendViewComponent", function() { return DeadendViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeadendViewComponent = /** @class */ (function () {
    function DeadendViewComponent() {
    }
    DeadendViewComponent.prototype.ngOnInit = function () {
    };
    DeadendViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deadend-view',
            template: __webpack_require__(/*! ./deadend-view.component.html */ "./src/app/components/deadend-view/deadend-view.component.html"),
            styles: [__webpack_require__(/*! ./deadend-view.component.css */ "./src/app/components/deadend-view/deadend-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeadendViewComponent);
    return DeadendViewComponent;
}());



/***/ }),

/***/ "./src/app/components/sponsors-view/sponsors-view.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/sponsors-view/sponsors-view.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sponsors-view/sponsors-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/sponsors-view/sponsors-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Platinum Sponsors -->\n<section *ngIf=\"platinumSponsors.length > 0\">\n    <h2 class=\"align-center\">Platinum Sponsors</h2>\n    <div class=\"row\">\n        <div *ngFor=\"let sponsor of platinumSponsors\" class=\"col-6 col-12-large\">\n            <div class=\"box\">\n                <a href=\"{{sponsor.url}}\" class=\"image fit\" target=\"blank\"><img src=\"{{ sponsor.logoUrl }}\" alt=\"\"></a>\n                <h3>{{sponsor.name}}</h3>\n                <p>{{sponsor.description}}</p>\n                <ul class=\"actions\">\n                    <li><a href=\"{{sponsor.url}}\" class=\"button\" target=\"blank\">Visit</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Gold Sponsors -->\n<section *ngIf=\"goldSponsors.length > 0\">\n    <h2 class=\"align-center\">Gold Sponsors</h2>\n    <div class=\"row\">\n        <div *ngFor=\"let sponsor of goldSponsors\" class=\"col-4 col-12-large\">\n            <div class=\"box\">\n                <a href=\"{{sponsor.url}}\" class=\"image fit\" target=\"blank\"><img src=\"{{ sponsor.logoUrl }}\" alt=\"\"></a>\n                <h3>{{sponsor.name}}</h3>\n                <p>{{sponsor.description}}</p>\n                <ul class=\"actions\">\n                    <li><a href=\"{{sponsor.url}}\" class=\"button\" target=\"blank\">Visit</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Silver Sponsors -->\n<section *ngIf=\"silverSponsors.length > 0\">\n    <h2 class=\"align-center\">Silver Sponsors</h2>\n    <div class=\"row\">\n        <div *ngFor=\"let sponsor of silverSponsors\" class=\"col-3 col-12-medium\">\n            <div class=\"box\">\n                <a href=\"{{sponsor.url}}\" class=\"image fit\" target=\"blank\"><img src=\"{{ sponsor.logoUrl }}\" alt=\"\"></a>\n                <h3 style=\"text-align: center;\">{{sponsor.name}}</h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Bronze Sponsors -->\n<section *ngIf=\"bronzeSponsors.length > 0\">\n    <h2 class=\"align-center\">Bronze Sponsors</h2>\n    <div class=\"row\">\n        <div *ngFor=\"let sponsor of bronzeSponsors\" class=\"col-2 col-12-medium\">\n            <span class=\"image fit\">\n                <img src=\"{{ sponsor.logoUrl }}\" alt=\"\">\n            </span>\n        </div>\n    </div>\n</section>\n\n<!-- Interested in Support -->\n<section>\n    <header class=\"align-center\">\n        <h2>Interested in supporting us?</h2>\n    </header>\n    <ul class=\"actions special\">\n        <li><a href=\"assets/sponsor-package-v2.pdf\" target=\"blank\" class=\"button big\" style=\"margin-bottom: 10px;\">View our Sponsorship Package</a></li>\n        <li><a routerLink=\"../contact-us\" class=\"button big primary\" style=\"margin-bottom: 10px;\">Sponsor Us!</a></li>\n    </ul>\n</section>"

/***/ }),

/***/ "./src/app/components/sponsors-view/sponsors-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sponsors-view/sponsors-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: SponsorsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsViewComponent", function() { return SponsorsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_SponsorsService_sponsors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/SponsorsService/sponsors.service */ "./src/app/services/SponsorsService/sponsors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorsViewComponent = /** @class */ (function () {
    function SponsorsViewComponent(sponsors) {
        this.sponsors = sponsors;
    }
    SponsorsViewComponent.prototype.ngOnInit = function () {
        var sponsorData = this.sponsors.getSponsorData();
        this.platinumSponsors = sponsorData.platinum;
        this.goldSponsors = sponsorData.gold;
        this.silverSponsors = sponsorData.silver;
        this.bronzeSponsors = sponsorData.bronze;
    };
    SponsorsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sponsors-view',
            template: __webpack_require__(/*! ./sponsors-view.component.html */ "./src/app/components/sponsors-view/sponsors-view.component.html"),
            styles: [__webpack_require__(/*! ./sponsors-view.component.css */ "./src/app/components/sponsors-view/sponsors-view.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_SponsorsService_sponsors_service__WEBPACK_IMPORTED_MODULE_1__["SponsorsService"]])
    ], SponsorsViewComponent);
    return SponsorsViewComponent;
}());



/***/ }),

/***/ "./src/app/services/Html5UpService/html5-up.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/Html5UpService/html5-up.service.ts ***!
  \*************************************************************/
/*! exports provided: Html5UpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5UpService", function() { return Html5UpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Html5UpService = /** @class */ (function () {
    function Html5UpService() {
    }
    Html5UpService.prototype.reload = function () {
        html5UpLoad(jquery__WEBPACK_IMPORTED_MODULE_1__);
    };
    Html5UpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Html5UpService);
    return Html5UpService;
}());



/***/ }),

/***/ "./src/app/services/SponsorsService/sponsors.model.ts":
/*!************************************************************!*\
  !*** ./src/app/services/SponsorsService/sponsors.model.ts ***!
  \************************************************************/
/*! exports provided: SponsorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorType", function() { return SponsorType; });
var SponsorType;
(function (SponsorType) {
    SponsorType["Bronze"] = "bronze";
    SponsorType["Silver"] = "silver";
    SponsorType["Gold"] = "gold";
    SponsorType["Platinum"] = "platinum";
})(SponsorType || (SponsorType = {}));


/***/ }),

/***/ "./src/app/services/SponsorsService/sponsors.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/SponsorsService/sponsors.service.ts ***!
  \**************************************************************/
/*! exports provided: SponsorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsService", function() { return SponsorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sponsors_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sponsors.model */ "./src/app/services/SponsorsService/sponsors.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SponsorsService = /** @class */ (function () {
    function SponsorsService(http) {
        var _this = this;
        this.http = http;
        this.sponsorData = {
            bronze: [],
            silver: [],
            gold: [],
            platinum: []
        };
        this.http.get('assets/data/sponsors.json').subscribe(function (data) {
            data.forEach(function (sponsor) {
                switch (sponsor.type) {
                    case _sponsors_model__WEBPACK_IMPORTED_MODULE_2__["SponsorType"].Bronze:
                        _this.sponsorData.bronze.push(sponsor);
                        break;
                    case _sponsors_model__WEBPACK_IMPORTED_MODULE_2__["SponsorType"].Silver:
                        _this.sponsorData.silver.push(sponsor);
                        break;
                    case _sponsors_model__WEBPACK_IMPORTED_MODULE_2__["SponsorType"].Gold:
                        _this.sponsorData.gold.push(sponsor);
                        break;
                    case _sponsors_model__WEBPACK_IMPORTED_MODULE_2__["SponsorType"].Platinum:
                        _this.sponsorData.platinum.push(sponsor);
                        break;
                }
            });
        });
    }
    SponsorsService.prototype.getSponsorData = function () { return this.sponsorData; };
    SponsorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SponsorsService);
    return SponsorsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wolffd/MCP/mcp-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map