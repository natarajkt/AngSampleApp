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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n  height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n  width: 250px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\na:hover,\r\na:active {\r\n  color: lightgray;\r\n}\r\n\r\n.navigation-items {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon {\r\n  display: inline-block;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  padding-right: 5px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  width: 15%;\r\n}\r\n\r\n.label {\r\n  display: inline-block;\r\n  line-height: 30px;\r\n  margin: 0;\r\n  width: 85%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav  #sidenav role=\"navigation\">\r\n    <mat-nav-list>\r\n      <a mat-list-item\r\n         *ngIf=\"!auth.isAuthenticated()\"\r\n         (click)=\"auth.login()\">\r\n        <mat-icon class=\"icon\">input</mat-icon>\r\n        <span class=\"label\">Login</span>\r\n      </a>\r\n      <a mat-list-item\r\n         *ngIf=\"auth.isAuthenticated()\"\r\n         routerLink=\"/\">\r\n        <mat-icon class=\"icon\">home</mat-icon>\r\n        <span class=\"label\">Home</span>\r\n      </a>\r\n      <a mat-list-item\r\n         routerLink=\"/dashboard\">\r\n        <mat-icon class=\"icon\">dashboard</mat-icon>\r\n        <span class=\"label\">Dashboard</span>\r\n      </a>\r\n      <a  mat-list-item\r\n          *ngIf=\"auth.isAuthenticated()\"\r\n          (click)=\"auth.logout()\" type=\"button\">\r\n        <mat-icon class=\"icon\">input</mat-icon>\r\n        <span class=\"label\">LogOut</span>\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <div fxHide.gt-xs>\r\n        <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div>\r\n        <a routerLink=\"/\">\r\n          Sample Catalog\r\n        </a>\r\n      </div>\r\n      <div fxFlex fxLayout fxLayoutAlign=\"flex-end\"  fxHide.xs>\r\n        <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\r\n          <li>\r\n            <a\r\n              *ngIf=\"!auth.isAuthenticated()\"\r\n              (click)=\"auth.login()\">\r\n              <mat-icon class=\"icon\">input</mat-icon>\r\n              <span  class=\"label\">Login</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              *ngIf=\"auth.isAuthenticated()\"\r\n              routerLink=\"/\">\r\n              <mat-icon class=\"icon\">home</mat-icon>\r\n              <span class=\"label\">Home</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a\r\n              routerLink=\"/dashboard\">\r\n              <mat-icon class=\"icon\">dashboard</mat-icon>\r\n              <span class=\"label\">Dashboard</span>\r\n            </a>\r\n          </li>\r\n         <li>\r\n          <a\r\n            routerLink=\"/register\">\r\n            <mat-icon class=\"icon\">Register</mat-icon>\r\n            <span class=\"label\">Register</span>\r\n          </a>\r\n        </li>\r\n          <li>\r\n            <a *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\" type=\"button\">\r\n              <mat-icon class=\"icon\">input</mat-icon>\r\n              <span class=\"label\">LogOut</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </mat-toolbar>\r\n    <main>\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
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
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/data.service */ "./src/app/data/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-dialog/post-dialog.component */ "./src/app/post-dialog/post-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _post_product_dialog_post_product_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post-product-dialog/post-product-dialog.component */ "./src/app/post-product-dialog/post-product-dialog.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_11__["PostDialogComponent"],
                _post_product_dialog_post_product_dialog_component__WEBPACK_IMPORTED_MODULE_13__["PostProductDialogComponent"],
                _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__["RegisterUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_8__["AppRouters"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ],
            providers: [_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [
                _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_11__["PostDialogComponent"],
                _post_product_dialog_post_product_dialog_component__WEBPACK_IMPORTED_MODULE_13__["PostProductDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRouters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouters", function() { return AppRouters; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'register', component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__["RegisterUserComponent"] }
];
var AppRouters = /** @class */ (function () {
    function AppRouters() {
    }
    AppRouters = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouters);
    return AppRouters;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// why do you need defining window as any?
// check this: https://github.com/aws/aws-amplify/issues/678#issuecomment-389106098
window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["WebAuth"]({
            clientID: 'AAQbG8REMxtSrmXQiPGcl3Uochf7OuHS',
            domain: 'bk-tmp.auth0.com',
            responseType: 'token',
            redirectUri: 'http://localhost:4200/',
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken) {
                window.location.hash = '';
                _this.accessToken = authResult.accessToken;
                _this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
                _this.router.navigate(['/dashboard']);
            }
            else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        this.accessToken = null;
        this.expiresAt = null;
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        return new Date().getTime() < this.expiresAt;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  min-width: 80%;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <br>\r\n  <div class=\"container\">\r\n    <div class=\"container\">\r\n      <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayout.gt-md=\"row\"  fxLayoutAlign=\"space-around center\" class=\"content\">\r\n        <div class=\"blocks\" *ngIf=\"auth.isAuthenticated()\">\r\n          <button button=\"submit\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n            <mat-icon>add</mat-icon> Add Product\r\n          </button>\r\n        </div>\r\n        <div class=\"blocks\">\r\n          <a button mat-raised-button color=\"primary\" (click)=\"auth.login()\" *ngIf=\"!auth.isAuthenticated()\">\r\n            <mat-icon>input</mat-icon>Login to Add Product\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"container\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"content\">\r\n        <mat-card class=\"card\" >\r\n          <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\r\n            <h3>Products</h3>\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"example-container mat-elevation-z8\">\r\n              <mat-table #table [dataSource]=\"dataSource\">\r\n                <ng-container matColumnDef=\"date_purchased\">\r\n                  <mat-header-cell *matHeaderCellDef> Date Purchased </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element.date_purchased  | date: 'd/M/y'}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"title\">\r\n                  <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"category\">\r\n                  <mat-header-cell *matHeaderCellDef> Category </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element.product_category}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"delete\">\r\n                  <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\">\r\n                    <a (click)=\"deletePost(element.position)\" type=\"button\">\r\n                      <mat-icon class=\"icon\">delete</mat-icon>\r\n                    </a>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n              </mat-table>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent, PostDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDataSource", function() { return PostDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.service */ "./src/app/data/data.service.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _post_product_dialog_post_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-product-dialog/post-product-dialog.component */ "./src/app/post-product-dialog/post-product-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, dialog, dataService) {
        this.auth = auth;
        this.dialog = dialog;
        this.dataService = dataService;
        this.displayedColumns = ['date_purchased', 'title', 'category', 'delete'];
        this.dataSource = new PostDataSource(this.dataService);
    }
    DashboardComponent.prototype.deletePost = function (id) {
        if (this.auth.isAuthenticated()) {
            this.dataService.deleteProductPost(id);
            this.dataSource = new PostDataSource(this.dataService);
        }
        else {
            alert('Login in Before');
        }
    };
    DashboardComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_post_product_dialog_post_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PostProductDialogComponent"], {
            width: '600px',
            data: 'Add Post'
        });
        dialogRef.componentInstance.event.subscribe(function (result) {
            _this.dataService.addProductPost(result.data);
            _this.dataSource = new PostDataSource(_this.dataService);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var PostDataSource = /** @class */ (function (_super) {
    __extends(PostDataSource, _super);
    function PostDataSource(dataService) {
        var _this = _super.call(this) || this;
        _this.dataService = dataService;
        return _this;
    }
    PostDataSource.prototype.connect = function () {
        return this.dataService.getProductData();
    };
    PostDataSource.prototype.disconnect = function () {
    };
    return PostDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/data/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/data/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.ELEMENT_DATA = [
            { position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1' },
            { position: 1, title: 'Post Two', category: 'Android Development', date_posted: new Date(), body: 'Body 2' },
            { position: 2, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 3' },
            { position: 3, title: 'Post Four', category: 'Android Development', date_posted: new Date(), body: 'Body 4' },
            { position: 4, title: 'Post Five', category: 'IOS Development', date_posted: new Date(), body: 'Body 5' },
            { position: 5, title: 'Post Six', category: 'Web Development', date_posted: new Date(), body: 'Body 6' },
        ];
        this.PRODUCT_DATA = [
            { position: 0, title: 'Lego Blocks', description: 'Lego classic Blocks', product_category: 'Toys', Seller: 'Toys R US',
                date_purchased: new Date(), Quantity: 5 },
            { position: 1, title: 'Flash Furniture Green Plastic chair', description: 'Stackable School Chair with 10.5 Seat Height',
                product_category: 'Furniture', Seller: 'Amazon', date_purchased: new Date(), Quantity: 2 },
        ];
        this.categories = [
            { value: 'Web-Development', viewValue: 'Web Development' },
            { value: 'Android-Development', viewValue: 'Android Development' },
            { value: 'IOS-Development', viewValue: 'IOS Development' }
        ];
        this.product_categories = [
            { value: 'Furniture', viewValue: 'Furniture' },
            { value: 'Clothing', viewValue: 'Clothing' },
            { value: 'Toys', viewValue: 'Toys' },
            { value: 'Books', viewValue: 'Books' }
        ];
    }
    DataService.prototype.getData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.ELEMENT_DATA);
    };
    DataService.prototype.getProductData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.PRODUCT_DATA);
    };
    DataService.prototype.getCategories = function () {
        return this.categories;
    };
    DataService.prototype.getProductCategories = function () {
        return this.product_categories;
    };
    DataService.prototype.addPost = function (data) {
        this.ELEMENT_DATA.push(data);
    };
    DataService.prototype.deletePost = function (index) {
        this.ELEMENT_DATA = this.ELEMENT_DATA.slice(0, index).concat(this.ELEMENT_DATA.slice(index + 1));
    };
    DataService.prototype.dataLength = function () {
        return this.ELEMENT_DATA.length;
    };
    DataService.prototype.addProductPost = function (data) {
        this.PRODUCT_DATA.push(data);
    };
    DataService.prototype.deleteProductPost = function (index) {
        this.PRODUCT_DATA = this.PRODUCT_DATA.slice(0, index).concat(this.PRODUCT_DATA.slice(index + 1));
    };
    DataService.prototype.productDataLength = function () {
        return this.PRODUCT_DATA.length;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-form > * {\r\n  width: 100%;\r\n}\r\n\r\n.close{\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data}}</h1>\r\n<div mat-dialog-content>\r\n  <form class=\"example-form\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Post Title\" type=\"text\" required [(ngModel)]=\"blogPost.title\" name=\"name\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Post Body\" required [(ngModel)]=\"blogPost.body\" name=\"body\"></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-select matInput placeholder=\"Post Category\" required [(ngModel)]=\"blogPost.category\" name=\"category\">\r\n        <mat-option *ngFor=\"let cat of categories\" [value]=\"cat.value\">\r\n          {{ cat.viewValue }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">Save</button>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button class=\"close\" (click)=\"onNoClick()\" color=\"warn\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: PostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDialogComponent", function() { return PostDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.service */ "./src/app/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PostDialogComponent = /** @class */ (function () {
    function PostDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.blogPost = {
            title: '',
            body: '',
            category: '',
            position: 0,
            date_posted: new Date()
        };
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categories = this.dataService.getCategories();
    }
    PostDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PostDialogComponent.prototype.onSubmit = function () {
        this.blogPost.position = this.dataService.dataLength();
        this.event.emit({ data: this.blogPost });
        this.dialogRef.close();
    };
    PostDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-dialog',
            template: __webpack_require__(/*! ./post-dialog.component.html */ "./src/app/post-dialog/post-dialog.component.html"),
            styles: [__webpack_require__(/*! ./post-dialog.component.css */ "./src/app/post-dialog/post-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PostDialogComponent);
    return PostDialogComponent;
}());



/***/ }),

/***/ "./src/app/post-product-dialog/post-product-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/post-product-dialog/post-product-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-form > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .close{\r\n    width: 100%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/post-product-dialog/post-product-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/post-product-dialog/post-product-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data}}</h1>\r\n<div mat-dialog-content>\r\n  <form class=\"example-form\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Product Title\" type=\"text\" required [(ngModel)]=\"productPost.title\" name=\"name\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Product Description\" required [(ngModel)]=\"productPost.description\" name=\"description\"></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-select matInput placeholder=\"Post Category\" required [(ngModel)]=\"productPost.product_category\" name=\"category\">\r\n        <mat-option *ngFor=\"let cat of categories\" [value]=\"cat.value\">\r\n          {{ cat.viewValue }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Product Seller\" required [(ngModel)]=\"productPost.Seller\" name=\"Seller\"></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Product Quantity\" required [(ngModel)]=\"productPost.Quantity\" name=\"Quantity\"></textarea>\r\n    </mat-form-field>\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">Save</button>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button class=\"close\" (click)=\"onNoClick()\" color=\"warn\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/post-product-dialog/post-product-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/post-product-dialog/post-product-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostProductDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostProductDialogComponent", function() { return PostProductDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.service */ "./src/app/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PostProductDialogComponent = /** @class */ (function () {
    function PostProductDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.productPost = {
            title: '',
            description: '',
            product_category: '',
            position: 0,
            Seller: '',
            Quantity: 0,
            date_purchased: new Date()
        };
        this.categories = this.dataService.getProductCategories();
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PostProductDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PostProductDialogComponent.prototype.onSubmit = function () {
        this.productPost.position = this.dataService.dataLength();
        this.event.emit({ data: this.productPost });
        this.dialogRef.close();
    };
    PostProductDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-product-dialog',
            template: __webpack_require__(/*! ./post-product-dialog.component.html */ "./src/app/post-product-dialog/post-product-dialog.component.html"),
            styles: [__webpack_require__(/*! ./post-product-dialog.component.css */ "./src/app/post-product-dialog/post-product-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PostProductDialogComponent);
    return PostProductDialogComponent;
}());



/***/ }),

/***/ "./src/app/register-user/register-user.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-user/register-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-user/register-user.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-user/register-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register-user works!\n</p>\n"

/***/ }),

/***/ "./src/app/register-user/register-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
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

var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent() {
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! ./register-user.component.html */ "./src/app/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.css */ "./src/app/register-user/register-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>Sample application</h1>\r\n  <p>\r\n   Home page content goes here.\r\n    <br> Click on Login to get Started!!!\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nthiruvenkat\source\repos\angular-material\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map