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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_crypto_service__ = __webpack_require__("../../../../../src/app/services/crypto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_routing_routing_module__ = __webpack_require__("../../../../../src/app/modules/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_loggedin_redirect_service__ = __webpack_require__("../../../../../src/app/guards/loggedin-redirect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_service_worker__ = __webpack_require__("../../../service-worker/fesm5/service-worker.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__modules_routing_routing_module__["b" /* routingComponents */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__modules_routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_service_worker__["a" /* ServiceWorkerModule */].register("ngsw-worker.js")
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_indexed_db_service__["a" /* IndexedDbService */],
                __WEBPACK_IMPORTED_MODULE_5__services_crypto_service__["a" /* CryptoService */],
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_9__guards_loggedin_redirect_service__["a" /* LoggedinRedirectService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-password-modal/add-password-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"add-password-modal\" class=\"modal\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <div class=\"title\">\n        Add Password\n      </div>\n      <span class=\"close\" (click)=\"close()\">\n        <i class=\"fa fa-times\"></i>\n      </span>\n    </div>\n\n    <div class=\"modal-body\">\n      <form class=\"add-password-form\" [formGroup]=\"addPasswordForm\">\n        <div class=\"form-group\">\n          <input type=\"text pull-right\" name=\"service\" placeholder=\"Enter service name\" formControlName=\"service\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"username\" placeholder=\"Enter user name / email\" formControlName=\"username\">\n        </div>\n        <div class=\"form-icon\">\n          <input type=\"{{ showPassword ? 'text' : 'password'}}\" name=\"password\" placeholder=\"Enter password\" formControlName=\"password\">\n          <i class=\"fa\" [class.fa-eye]=\"!showPassword\"  [class.fa-eye-slash]=\"showPassword\" (click)=\"togglePasswordVisibility()\"></i>\n        \n        </div>\n\n        <button class=\"btn btn-primary\" (click)=\"credential ? emitEdit() : emitSave()\" [disabled]=\"addPasswordForm.invalid\">\n          {{credential? \"Edit\" : \"Save\"}}\n        </button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-password-modal/add-password-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1050;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  padding-top: calc(var(--header-size) + 20px);\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 6% auto;\n  /* 15% from the top and centered */\n  padding: 5px 20px 10px 20px;\n  width: 30%;\n  /* Could be more or less, depending on screen size */\n  -webkit-animation-name: animatetop;\n          animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s; }\n\n/* Add Animation */\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@media screen and (max-width: 768px) {\n  .modal-content {\n    width: 80%; } }\n\n/* The Close Button */\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #ff4747;\n  text-decoration: none;\n  cursor: pointer; }\n\n.modal-header {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 50px;\n      grid-template-columns: 1fr 50px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  justify-items: center; }\n\n.modal-header .title {\n  font-style: var(--heading-font-family);\n  font-size: 24px;\n  padding: 20px 10px 0px 10px; }\n\n.modal-body {\n  padding: 20px; }\n\n.add-password-form {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  grid-gap: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-password-modal/add-password-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPasswordModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_service_details__ = __webpack_require__("../../../../../src/app/models/service-details.ts");
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
    function AddPasswordModalComponent(fb, cd) {
        this.fb = fb;
        this.cd = cd;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.showPassword = false;
    }
    AddPasswordModalComponent.prototype.ngOnInit = function () {
        this.creatForm();
    };
    AddPasswordModalComponent.prototype.creatForm = function () {
        this.addPasswordForm = this.fb.group({
            service: [
                this.credential ? this.credential.service : "",
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
            ],
            username: [
                this.credential ? this.credential.username : "",
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
            ],
            password: [
                this.credential ? this.credential.plaintextPassword : "",
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
            ]
        });
    };
    AddPasswordModalComponent.prototype.show = function (credential) {
        if (credential) {
            this.credential = credential;
            this.creatForm();
            this.cd.detectChanges();
        }
        var modal = document.getElementById("add-password-modal");
        var body = document.querySelector("body");
        //console.log(modal);
        modal.style.display = "block";
        body.style.overflow = "hidden";
    };
    AddPasswordModalComponent.prototype.close = function () {
        var modal = document.getElementById("add-password-modal");
        var body = document.querySelector("body");
        //console.log(modal);
        modal.style.display = "none";
        body.style.overflow = "scroll";
        this.addPasswordForm.reset();
        this.credential = null;
        this.showPassword = false;
    };
    AddPasswordModalComponent.prototype.emitSave = function () {
        this.save.emit({
            service: this.addPasswordForm.controls.service.value,
            username: this.addPasswordForm.controls.username.value,
            plaintextPassword: this.addPasswordForm.controls.password.value
        });
        this.close();
    };
    AddPasswordModalComponent.prototype.emitEdit = function () {
        var emitData = [];
        emitData.push(this.credential);
        emitData.push({
            service: this.addPasswordForm.controls.service.value,
            username: this.addPasswordForm.controls.username.value,
            plaintextPassword: this.addPasswordForm.controls.password.value
        });
        this.edit.emit(emitData);
        this.close();
    };
    AddPasswordModalComponent.prototype.togglePasswordVisibility = function () {
        this.showPassword = !this.showPassword;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddPasswordModalComponent.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AddPasswordModalComponent.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_service_details__["a" /* ServiceDetails */])
    ], AddPasswordModalComponent.prototype, "credential", void 0);
    AddPasswordModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-add-password-modal",
            template: __webpack_require__("../../../../../src/app/components/add-password-modal/add-password-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-password-modal/add-password-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AddPasswordModalComponent);
    return AddPasswordModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"header header-fixed\">\n\n  <div class=\"\">\n    CryptoPass\n  </div>\n  <div class=\"\">\n    <button class=\"btn btn-accent change-icon\" style=\"width:90px\" (click)=\"openAddModal()\">\n      New\n      <i class=\"fa fa-pencil-square-o\"></i>\n      <i class=\"fa fa-pencil-square\"></i>\n    </button>\n  </div>\n\n</nav>\n<div class=\"container\">\n  <div *ngFor=\"let credential of credentials\" class=\"card\">\n    <div class=\"card-header\">\n\n      <div class=\"title\">\n        {{credential.service}}\n      </div>\n\n      <div class=\"copy-icon\" (click)=\"copyPassword($event, credential)\" [class.copy-password]=\"credential.plaintextPassword\" [class.disabled-fab-icon]=\"!credential.plaintextPassword\">\n        <i class=\"fa fa-clone\"></i>\n      </div>\n      <div class=\"edit-password\" (click)=\"openEditModal(credential)\">\n        <i class=\"fa fa-pencil\"></i>\n      </div>\n      <div class=\"card-close\" (click)=\"delete(credential)\">\n        <i class=\"fa fa-trash-o fa-lg\"></i>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div>\n        <span class=\"pull-left\">\n          Username\n        </span>\n        <span class=\"pull-right\">\n          {{credential.username}}\n        </span>\n      </div>\n      <div class=\"card-content-plaintext-password clearfix plaintext-password\" [class.slide-down]=\"credential.plaintextPassword\">\n        {{credential.plaintextPassword}}\n      </div>\n    </div>\n    <div class=\"actions\">\n      <button class=\"btn btn-primary change-icon\" (click)=\"revealPassword(credential)\" [disabled]=\"credential.plaintextPassword\">\n        Reveal Password\n        <i class=\"fa fa-lock\"></i>\n        <i class=\"fa fa-unlock\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n<button class=\"fab-icon fab-icon-fixed mobile-only\" (click)=\"openAddModal()\">\n  <i class=\"fa fa-pencil-square fa-lg\"></i>\n</button>\n<app-add-password-modal (save)=\"savePassword($event)\" (edit)=\"editPassword($event)\"></app-add-password-modal>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_indexed_db_service__ = __webpack_require__("../../../../../src/app/services/indexed-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_password_modal_add_password_modal_component__ = __webpack_require__("../../../../../src/app/components/add-password-modal/add-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crypto_service__ = __webpack_require__("../../../../../src/app/services/crypto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(dbservice, cryptoService, cd) {
        this.dbservice = dbservice;
        this.cryptoService = cryptoService;
        this.cd = cd;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getCredentials();
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.openAddModal = function () {
        // this.dbservice.addPassword(this.serviceName, this.userName, this.password).then((data) => {
        //   alert('Password added');
        // })
        this.addComponent.show();
    };
    HomeComponent.prototype.openEditModal = function (credentails) {
        return __awaiter(this, void 0, void 0, function () {
            var secret, password;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        secret = this.cryptoService.getSecretKey();
                        return [4 /*yield*/, this.cryptoService.decrypt(credentails.password, secret)];
                    case 1:
                        password = _a.sent();
                        this.addComponent.show({
                            _id: credentails._id,
                            service: credentails.service,
                            username: credentails.username,
                            plaintextPassword: password
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getCredentials = function () {
        var _this = this;
        this.dbservice.getPasswords().then(function (res) {
            _this.credentials = res;
            _this.cd.detectChanges();
        });
    };
    HomeComponent.prototype.copyPassword = function (event, credentail) {
        if (!credentail.plaintextPassword)
            return;
        var element = event.target; // extract the target from event
        var cardNode = element.nodeName == "I"
            ? element.parentElement.parentElement.parentElement
            : element.parentElement.parentElement; //get the card node depending on if the element is I or it's parent DIV
        var passwwordNode = cardNode.querySelector(".plaintext-password"); //select the password node
        var range = document.createRange(); //using range you can select elements from the DOM
        range.selectNode(passwwordNode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range); // add it to selection, so that the node gets selected
        document.execCommand("Copy"); //copy command
        window.getSelection().removeAllRanges(); //clear the selection
    };
    HomeComponent.prototype.savePassword = function (userDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var secret, encData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        secret = this.cryptoService.getSecretKey();
                        return [4 /*yield*/, this.cryptoService.encrypt(userDetails.plaintextPassword, secret)];
                    case 1:
                        encData = _a.sent();
                        this.dbservice
                            .addPassword(userDetails.service, userDetails.username, encData)
                            .then(function (res) { return console.log("saved", res); });
                        this.getCredentials();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.editPassword = function (userDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var secret, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.cryptoService.getSecretKey()];
                    case 1:
                        secret = _b.sent();
                        _a = userDetails[1];
                        return [4 /*yield*/, this.cryptoService.encrypt(userDetails[1].plaintextPassword, secret)];
                    case 2:
                        _a.password = _b.sent();
                        userDetails[1].plaintextPassword = null;
                        this.dbservice.editPassword(userDetails[0], userDetails[1]).then(function (res) {
                            _this.getCredentials();
                            _this.cd.detectChanges();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.revealPassword = function (credentails) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var secret, palintextPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        secret = this.cryptoService.getSecretKey();
                        return [4 /*yield*/, this.cryptoService.decrypt(credentails.password, secret)];
                    case 1:
                        palintextPassword = _a.sent();
                        credentails.plaintextPassword = palintextPassword;
                        this.cd.detectChanges();
                        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].timer(5000).subscribe(function (res) {
                            credentails.plaintextPassword = "";
                            _this.cd.detectChanges();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.delete = function (credentail) {
        var _this = this;
        this.dbservice.deletePassword(credentail).then(function (res) {
            _this.getCredentials();
            _this.cd.detectChanges();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__add_password_modal_add_password_modal_component__["a" /* AddPasswordModalComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__add_password_modal_add_password_modal_component__["a" /* AddPasswordModalComponent */])
    ], HomeComponent.prototype, "addComponent", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-home",
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_indexed_db_service__["a" /* IndexedDbService */],
            __WEBPACK_IMPORTED_MODULE_3__services_crypto_service__["a" /* CryptoService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login-register/login-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"displayForm\" class=\"card\">\n    <div class=\"card-header\">\n\n      <div class=\"title\">\n        {{ login ? \"Login to \" : \"Register for\" }} CryptoPass\n      </div>\n    </div>\n    <div class=\"content\">\n      <div class=\"form-icon\" tabindex=\"0\">\n        <input type=\"{{ showPassword ? 'text' : 'password'}}\" name=\"password\" placeholder=\"Enter app passsword\" [(ngModel)]=\"password\" (keydown)=\"checkEnter($event)\">\n        <i class=\"fa\" [class.fa-eye]=\"!showPassword\"  [class.fa-eye-slash]=\"showPassword\" (click)=\"togglePasswordVisibility()\"></i>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <button class=\"btn btn-primary change-icon\" (click)=\"loginRegister()\">\n        {{ login ? \"Login\" : \"Register\"}}\n        <i class=\"fa fa-lock\"></i>\n        <i class=\"fa fa-unlock\"></i>\n      </button>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login-register/login-register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  margin-left: 25%;\n  margin-right: 25%; }\n\n.card-header {\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr; }\n\n.title {\n  text-align: left; }\n\n.content {\n  padding: 30px 50px 0px 50px;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr; }\n\n@media screen and (max-width: 768px) {\n  .container {\n    margin-left: 5%;\n    margin-right: 5%; }\n  .content {\n    padding: 30px 5% 0px 5%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login-register/login-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crypto_service__ = __webpack_require__("../../../../../src/app/services/crypto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent(authService, router, crypto) {
        this.authService = authService;
        this.router = router;
        this.crypto = crypto;
        this.showPassword = false;
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isRegistered.subscribe(function (val) { });
        this.authService
            .checkIfRegisterd()
            .then(function (val) {
            _this.login = val ? true : false;
            _this.displayForm = true;
        })
            .catch(function (err) {
            console.log(err);
            _this.login = false;
            _this.displayForm = true;
        });
    };
    LoginRegisterComponent.prototype.loginRegister = function () {
        var _this = this;
        if (this.login) {
            this.authService.login(this.password).then(function (res) {
                _this.router.navigateByUrl("/home");
            }).catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.authService.register(this.password).then(function (res) {
                _this.login = true;
                _this.loginRegister();
                //Todo: Popup
            });
        }
    };
    LoginRegisterComponent.prototype.checkEnter = function (event) {
        if (event.keyCode == 13) {
            this.loginRegister();
        }
    };
    LoginRegisterComponent.prototype.togglePasswordVisibility = function () {
        this.showPassword = !this.showPassword;
    };
    LoginRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-login-register",
            template: __webpack_require__("../../../../../src/app/components/login-register/login-register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login-register/login-register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_crypto_service__["a" /* CryptoService */]])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        try {
            if (!this.auth.isLoggedIn()) {
                this.router.navigate(["login"]);
                return false;
            }
        }
        catch (err) {
            console.log(err);
            this.router.navigate(["login"]);
            return false;
        }
        this.auth.startLogoutTimer();
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/guards/loggedin-redirect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedinRedirectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedinRedirectService = /** @class */ (function () {
    function LoggedinRedirectService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoggedinRedirectService.prototype.canActivate = function () {
        console.log('Logged in guard');
        if (this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/home');
            return false;
        }
        return true;
    };
    LoggedinRedirectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoggedinRedirectService);
    return LoggedinRedirectService;
}());



/***/ }),

/***/ "../../../../../src/app/models/service-details.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetails; });
var ServiceDetails = /** @class */ (function () {
    function ServiceDetails() {
    }
    return ServiceDetails;
}());



/***/ }),

/***/ "../../../../../src/app/modules/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_register_login_register_component__ = __webpack_require__("../../../../../src/app/components/login-register/login-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_password_modal_add_password_modal_component__ = __webpack_require__("../../../../../src/app/components/add-password-modal/add-password-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_loggedin_redirect_service__ = __webpack_require__("../../../../../src/app/guards/loggedin-redirect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_3__components_login_register_login_register_component__["a" /* LoginRegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_loggedin_redirect_service__["a" /* LoggedinRedirectService */]] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_5__components_add_password_modal_add_password_modal_component__["a" /* AddPasswordModalComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_login_register_login_register_component__["a" /* LoginRegisterComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */]
];


/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexed_db_service__ = __webpack_require__("../../../../../src/app/services/indexed-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crypto_service__ = __webpack_require__("../../../../../src/app/services/crypto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthService = /** @class */ (function () {
    function AuthService(dbService, cryptService, router) {
        this.dbService = dbService;
        this.cryptService = cryptService;
        this.router = router;
        this.isRegistered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AuthService.prototype.startLogoutTimer = function () {
        var _this = this;
        var logoutTime = 300000; // 5 minutes
        console.log("Time", logoutTime);
        __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]
            .timer(logoutTime)
            .subscribe(function (val) {
            _this.isLoggedInFlag = false;
            _this.router.navigateByUrl('/login');
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.isLoggedInFlag;
    };
    AuthService.prototype.checkIfRegisterd = function () {
        return this.dbService.getHash();
    };
    AuthService.prototype.login = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var hash, storedHash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cryptService.generateHash(password)];
                    case 1:
                        hash = _a.sent();
                        return [4 /*yield*/, this.dbService.getHash()];
                    case 2:
                        storedHash = _a.sent();
                        return [4 /*yield*/, this.cryptService.generateKey(password)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (hash == storedHash) {
                                    _this.isLoggedInFlag = true;
                                    resolve(true);
                                }
                                else {
                                    reject(false);
                                }
                            })];
                }
            });
        });
    };
    AuthService.prototype.register = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cryptService.generateHash(password)];
                    case 1:
                        hash = _a.sent();
                        return [2 /*return*/, this.dbService.addHash(hash)];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AuthService.prototype, "isRegistered", void 0);
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__indexed_db_service__["a" /* IndexedDbService */],
            __WEBPACK_IMPORTED_MODULE_2__crypto_service__["a" /* CryptoService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/crypto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_text_encoding__ = __webpack_require__("../../../../text-encoding/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_text_encoding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_text_encoding__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CryptoService = /** @class */ (function () {
    function CryptoService() {
        this.dec = new __WEBPACK_IMPORTED_MODULE_1_text_encoding__["TextDecoder"]();
    }
    CryptoService.prototype.encrypt = function (password, key) {
        return window.crypto.subtle.encrypt({
            name: "AES-CBC",
            iv: new Uint8Array(16)
        }, key, new __WEBPACK_IMPORTED_MODULE_1_text_encoding__["TextEncoder"]().encode(password));
    };
    CryptoService.prototype.decrypt = function (data, key) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var decodedData, _a, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = this.dec).decode;
                        return [4 /*yield*/, window.crypto.subtle.decrypt({
                                name: "AES-CBC",
                                iv: new Uint8Array(16)
                            }, key, data)];
                    case 1:
                        decodedData = _b.apply(_a, [_c.sent()]);
                        resolve(decodedData);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _c.sent();
                        console.log(err_1);
                        resolve(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    CryptoService.prototype.generateHash = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var arrayHash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.crypto.subtle.digest("SHA-256", new __WEBPACK_IMPORTED_MODULE_1_text_encoding__["TextEncoder"]().encode(value))];
                    case 1:
                        arrayHash = _a.sent();
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_1_text_encoding__["TextDecoder"]().decode(arrayHash)];
                }
            });
        });
    };
    CryptoService.prototype.generateKey = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var passKey, key, cKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passKey = new __WEBPACK_IMPORTED_MODULE_1_text_encoding__["TextEncoder"]().encode(password);
                        return [4 /*yield*/, window.crypto.subtle.importKey("raw", passKey, "PBKDF2", false, ["deriveBits", "deriveKey"])];
                    case 1:
                        key = _a.sent();
                        return [4 /*yield*/, window.crypto.subtle.deriveKey({
                                name: "PBKDF2",
                                salt: new __WEBPACK_IMPORTED_MODULE_1_text_encoding__["TextEncoder"]().encode("abcdc"),
                                iterations: 100,
                                hash: "SHA-256"
                            }, key, { name: "AES-CBC", length: 256 }, false, ["encrypt", "decrypt"])];
                    case 2:
                        cKey = _a.sent();
                        this.key = cKey;
                        return [2 /*return*/, cKey];
                }
            });
        });
    };
    CryptoService.prototype.getSecretKey = function () {
        return this.key;
    };
    CryptoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CryptoService);
    return CryptoService;
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var IndexedDbService = /** @class */ (function () {
    function IndexedDbService() {
        this.db = new __WEBPACK_IMPORTED_MODULE_1_zangodb__["Db"]("crypto-pass", 2, {
            passwords: ["service"],
            auth: ["hash"]
        });
        this.passwordsCollection = this.db.collection("passwords");
        this.authCollection = this.db.collection("auth");
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
    IndexedDbService.prototype.editPassword = function (credetials, newCredentials) {
        return this.passwordsCollection.update({ _id: credetials._id }, {
            service: newCredentials.service,
            username: newCredentials.username,
            password: newCredentials.password
        });
    };
    IndexedDbService.prototype.deletePassword = function (credetials) {
        return this.passwordsCollection.remove(credetials);
    };
    IndexedDbService.prototype.getHash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authCollection.findOne({ _id: 1 })];
                    case 1:
                        authInfo = _a.sent();
                        return [2 /*return*/, authInfo ? authInfo["hash"] : null];
                }
            });
        });
    };
    IndexedDbService.prototype.addHash = function (hash) {
        return this.authCollection.insert({
            hash: hash
        });
    };
    IndexedDbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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