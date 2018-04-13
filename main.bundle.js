webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-password-modal/add-password-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div  id=\"add-password-modal\" class=\"modal\">\n\n  <!-- Modal content -->\n  <div  class=\"modal-content\">\n    <div class=\"modal-header\">\n      <div class=\"title\">\n        Add Password\n      </div>\n      <span class=\"close\" (click)=\"close()\">\n        <i class=\"fa fa-times\"></i>\n      </span>\n    </div>\n\n    <div class=\"modal-body\">\n      <form class=\"add-password-form\">\n          <div class=\"form-group\">\n              <input type=\"text pull-right\" name=\"service\" placeholder=\"Enter service name\">\n          </div>\n        <div class=\"form-group\">\n            <input type=\"text\" name=\"username\"  placeholder=\"Enter user name / email\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" name=\"password\"  placeholder=\"Enter password\">\n        </div>\n\n        <button class=\"btn btn-primary\">\n          Save\n        </button>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-password-modal/add-password-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1050;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  padding-top: calc(var(--header-size) + 20px);\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 6% auto;\n  /* 15% from the top and centered */\n  padding: 5px 20px 10px 20px;\n  width: 30%;\n  /* Could be more or less, depending on screen size */\n  -webkit-animation-name: animatetop;\n          animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s; }\n\n/* Add Animation */\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@media screen and (max-width: 768px) {\n  .modal-content {\n    width: 80%; } }\n\n/* The Close Button */\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #ff4747;\n  text-decoration: none;\n  cursor: pointer; }\n\n.modal-header {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 50px;\n      grid-template-columns: 1fr 50px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  justify-items: center; }\n\n.modal-header .title {\n  font-style: var(--heading-font-family);\n  font-size: 24px;\n  padding: 20px 10px 0px 10px; }\n\n.modal-body {\n  padding: 20px; }\n\n.add-password-form {\n  display: -ms-grid;\n  display: grid;\n  grid-template: 1fr;\n  grid-gap: 20px; }\n\n.form-group {\n  width: 100%;\n  display: -ms-grid;\n  display: grid; }\n\n.form-group input {\n  border-radius: 50px;\n  border: none;\n  background: #f1f1f1;\n  padding: 12px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n\n.form-group input:focus {\n  background-color: #ddd;\n  outline: none;\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);\n          box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-password-modal/add-password-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPasswordModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddPasswordModalComponent = /** @class */ (function () {
    function AddPasswordModalComponent() {
    }
    AddPasswordModalComponent.prototype.ngOnInit = function () {
    };
    AddPasswordModalComponent.prototype.show = function () {
        var modal = document.getElementById('add-password-modal');
        var body = document.querySelector('body');
        //console.log(modal);
        modal.style.display = 'block';
        body.style.overflow = 'hidden';
    };
    AddPasswordModalComponent.prototype.close = function () {
        var modal = document.getElementById('add-password-modal');
        var body = document.querySelector('body');
        //console.log(modal);
        modal.style.display = 'none';
        body.style.overflow = 'scroll';
    };
    AddPasswordModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-password-modal',
            template: __webpack_require__("../../../../../src/app/add-password-modal/add-password-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-password-modal/add-password-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddPasswordModalComponent);
    return AddPasswordModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"header header-fixed\">\n\n  <div class=\"\">\n    PassMan\n  </div>\n  <div class=\"\">\n    <button class=\"btn btn-accent change-icon\" style=\"width:85px\" (click)=\"openAddModal()\">\n      New\n      <i class=\"fa fa-pencil-square-o\"></i>\n      <i class=\"fa fa-pencil-square\"></i>\n    </button>\n  </div>\n\n</nav>\n<div class=\"container\">\n  <div *ngFor=\"let credential of credentials\" class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"copy-password\" (click)=\"copyPassword($event)\">\n        <i class=\"fa fa-clone\"></i>\n      </div>\n\n      <div class=\"title\">\n        {{credential.service}}\n      </div>\n\n      <div class=\"card-close\">\n        <i class=\"fa fa-trash-o fa-lg\"></i>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div>\n        <span class=\"pull-left\">\n          Username\n        </span>\n        <span class=\"pull-right\">\n          {{credential.username}}\n        </span>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <button class=\"btn btn-primary change-icon\">\n        Reveal Password\n        <i class=\"fa fa-lock\"></i>\n        <i class=\"fa fa-unlock\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n<button class=\"fab-icon fab-icon-fixed mobile-only\" (click)=\"openAddModal()\">\n  <i class=\"fa fa-pencil-square fa-lg\"></i>\n</button>\n<app-add-password-modal></app-add-password-modal>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_indexed_db_service__ = __webpack_require__("../../../../../src/app/services/indexed-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_password_modal_add_password_modal_component__ = __webpack_require__("../../../../../src/app/add-password-modal/add-password-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(dbservice, cd) {
        this.dbservice = dbservice;
        this.cd = cd;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCredentials();
    };
    AppComponent.prototype.openAddModal = function () {
        // this.dbservice.addPassword(this.serviceName, this.userName, this.password).then((data) => {
        //   alert('Password added');
        // })
        this.addComponent.show();
    };
    AppComponent.prototype.getCredentials = function () {
        var _this = this;
        this.dbservice.getPasswords().then(function (res) {
            _this.credentials = res;
            console.log('Password list', _this.credentials);
            _this.cd.detectChanges();
        });
    };
    AppComponent.prototype.copyPassword = function (event) {
        console.log('Copying');
        document.execCommand('Copy', false, 'This is the password');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__add_password_modal_add_password_modal_component__["a" /* AddPasswordModalComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__add_password_modal_add_password_modal_component__["a" /* AddPasswordModalComponent */])
    ], AppComponent.prototype, "addComponent", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_indexed_db_service__["a" /* IndexedDbService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_indexed_db_service__ = __webpack_require__("../../../../../src/app/services/indexed-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_password_modal_add_password_modal_component__ = __webpack_require__("../../../../../src/app/add-password-modal/add-password-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_password_modal_add_password_modal_component__["a" /* AddPasswordModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_indexed_db_service__["a" /* IndexedDbService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/indexed-db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexedDbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zangodb__ = __webpack_require__("../../../../zangodb/build/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zangodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zangodb__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexedDbService = /** @class */ (function () {
    function IndexedDbService() {
        this.db = new __WEBPACK_IMPORTED_MODULE_1_zangodb__["Db"]('mydb', 1, { passwords: ['service'] });
        this.passwordsCollection = this.db.collection('passwords');
        this.getAll().then();
    }
    IndexedDbService.prototype.getAll = function () {
        return this.passwordsCollection.find({}).toArray();
    };
    IndexedDbService.prototype.addPassword = function (service, username, password) {
        return this.passwordsCollection.insert({
            service: service,
            username: username,
            password: password
        });
    };
    IndexedDbService.prototype.getPasswords = function () {
        return this.passwordsCollection.find({}).toArray();
    };
    IndexedDbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], IndexedDbService);
    return IndexedDbService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map