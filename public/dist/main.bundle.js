webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "small {\n    text-align: center;\n}\nform {\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light justify-content-between\">\n    <span class=\"navbar-brand\">\n        <img src=\"/assets/favicon.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"Doctor's Appointments Logo\"> Doctor's Appointments\n    </span>\n    <button class=\"btn btn-sm btn-outline-secondary\" name=\"logout\" (click)=\"logout()\">Logout</button>\n</nav>\n<div class=\"col-8 offset-2 text-center\">\n    <h1>Schedule Appointment</h1>\n    <p>The doctor has availability for 3 appointments per day between the hours of 8am-5pm.</p>\n    <p>You may only schedule 1 appointment each day.</p>\n    <p>All appointments must be scheduled at least 20 minutes apart.</p>\n    <p>We look forward to taking care of you.</p>\n    <div *ngIf='error' class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n        {{error}}\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <form class=\"col-md-6 offset-md-3 text-left\" #form=\"ngForm\" (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"date\">Date:</label>\n            <input\n            type=\"date\"\n            name=\"date\"\n            required\n            [(ngModel)]=\"appointment.date\"\n            #date=\"ngModel\"\n            min=\"{{today | date: 'yyyy-MM-dd'}}\"\n            class=\"form-control\"\n            >\n            <small class=\"form-text text-muted\" *ngIf=\"appointment.date == null\">\n                <span *ngIf=\"appointment.date == null\">Date is required.</span>\n            </small>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"time\">Time:</label>\n            <input\n            type=\"time\"\n            name=\"time\"\n            required\n            [(ngModel)]=\"appointment.time\"\n            #time=\"ngModel\"\n            class=\"form-control\"\n            >\n            <small class=\"form-text text-muted\" *ngIf=\"appointment.time == null\">\n                <span *ngIf=\"appointment.time == null\">Time is required.</span>\n            </small>\n        </div>\n        <div class=form-group>\n            <label class=\"top\" for=\"complain\">Complaint:</label>\n            <textarea\n            name=\"complain\"\n            required\n            minlength=\"10\"\n            [(ngModel)]=\"appointment.complain\"\n            #complain=\"ngModel\"\n            class=\"form-control\"\n            ></textarea>\n            <small class=\"form-text text-muted\" *ngIf=\"appointment.complain.length < 10\">\n                <span *ngIf=\"appointment.complain.length < 1\">Complaint is required.</span>\n                <span *ngIf=\"appointment.complain.length >= 1 && appointment.complain.length < 10\">Complaint must be at least 10 characters.</span>\n            </small>\n        </div>\n        <div class=\"text-center\">\n            <input\n            type=\"submit\"\n            value=\"Schedule\"\n            [disabled]=\"form.invalid\"\n            class=\"btn btn-primary\"\n            >\n        </div>\n    </form>\n    <button class=\"btn btn-outline-secondary\" [routerLink]=\"['/']\">Back</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_appointment__ = __webpack_require__("../../../../../src/app/classes/appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddComponent = (function () {
    function AddComponent(_as, _router, _us) {
        this._as = _as;
        this._router = _router;
        this._us = _us;
        this.today = Date.now();
        this.timemin = new Date("May 3, 1993 08:00:00").getHours();
        this.timemax = new Date("May 3, 1993 17:00:00").getHours();
        this.appointment = new __WEBPACK_IMPORTED_MODULE_2__classes_appointment__["a" /* Appointment */]();
        this.error = "";
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.checkstatus()
            .then(function (user) { return _this.user = user; })
            .catch(function (err) { return _this._router.navigateByUrl('/login'); });
    };
    AddComponent.prototype.logout = function () {
        var _this = this;
        this._us.logout()
            .then(function (response) { return _this._router.navigateByUrl('/login'); });
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = "";
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* DatePipe */]('en-US');
        var todaydate = datePipe.transform((new Date(this.today)), 'yyyy-MM-dd');
        var todaytime = new Date(Date.now()).getHours();
        var todaymins = new Date(Date.now()).getMinutes();
        var hours = this.appointment.time.split(':')[0];
        var minutes = this.appointment.time.split(':')[1];
        if (this.appointment.date < todaydate) {
            this.error = "Date must be in the future.";
        }
        else if (this.appointment.date == todaydate) {
            if (hours < todaytime) {
                this.error = "Time must be in the future.";
            }
            else if (hours == todaytime && minutes < todaymins) {
                this.error = "Time must be in the future.";
            }
            else if (hours < this.timemin || hours > this.timemax || (hours == this.timemax && minutes > 0)) {
                this.error = "Time must be between 8:00am and 5:00pm.";
            }
            else {
                this.appointment._username = this.user.name;
                this.appointment._userID = this.user._id;
                hours = (Number(hours)) * 60;
                minutes = Number(minutes);
                this.appointment.time = hours + minutes;
                this._as.addAppointment(this.appointment)
                    .then(function (response) { return _this._router.navigateByUrl('/'); })
                    .catch(function (error) {
                    _this.error = error._body;
                });
            }
        }
        else {
            if (hours < this.timemin || hours > this.timemax || (hours == this.timemax && minutes > 0)) {
                this.error = "Time must be between 8:00am and 5:00pm.";
            }
            else {
                this.appointment._username = this.user.name;
                this.appointment._userID = this.user._id;
                hours = (Number(hours)) * 60;
                minutes = Number(minutes);
                this.appointment.time = hours + minutes;
                this._as.addAppointment(this.appointment)
                    .then(function (response) { return _this._router.navigateByUrl('/'); })
                    .catch(function (error) {
                    _this.error = error._body;
                });
            }
        }
    };
    return AddComponent;
}());
AddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add',
        template: __webpack_require__("../../../../../src/app/add/add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add/add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_appointment_service__["a" /* AppointmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AddComponent);

var _a, _b, _c;
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add_component__ = __webpack_require__("../../../../../src/app/add/add.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'new_appointment', component: __WEBPACK_IMPORTED_MODULE_4__add_add_component__["a" /* AddComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_homedash_homedash_component__ = __webpack_require__("../../../../../src/app/home/homedash/homedash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_add_component__ = __webpack_require__("../../../../../src/app/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_homedash_homedash_component__["a" /* HomedashComponent */],
            __WEBPACK_IMPORTED_MODULE_9__add_add_component__["a" /* AddComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_11__services_appointment_service__["a" /* AppointmentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
var Appointment = (function () {
    function Appointment() {
        this.complain = "";
        this._username = "";
        this._userID = "";
    }
    return Appointment;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.name = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col {\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light justify-content-between\">\n    <span class=\"navbar-brand\">\n        <img src=\"/assets/favicon.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"Doctor's Appointments Logo\"> Doctor's Appointments\n    </span>\n    <button class=\"btn btn-sm btn-outline-secondary\" name=\"logout\" (click)=\"logout()\">Logout</button>\n</nav>\n<div class=\"col-8 offset-2 text-center\">\n    <div class=\"col\">\n        <h1 *ngIf=\"user\">Welcome {{ user.name }}!</h1>\n        <p>Please schedule an appointment at your convenience.</p>\n    </div>\n    <div class=\"col\">\n        <app-homedash *ngIf=\"user\" [appointments] = \"appointments\" [user]=\"user\" (refresh)=\"refresh()\"></app-homedash>\n    </div>\n    <div class=\"col\">\n        <a class=\"btn btn-primary\" [routerLink]=\"['/new_appointment']\">Schedule Appointment</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function HomeComponent(_us, _as, _router) {
        this._us = _us;
        this._as = _as;
        this._router = _router;
        this.appointments = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.checkstatus()
            .then(function (user) { return _this.user = user; })
            .catch(function (err) { return _this._router.navigateByUrl('/login'); });
        this._as.getAppointments()
            .then(function (appointments) {
            _this.appointments = appointments;
            for (var _i = 0, _a = _this.appointments; _i < _a.length; _i++) {
                var appointment = _a[_i];
                var newtime = new Date("May 3, 1993 00:00:00");
                newtime.setMinutes(appointment.time);
                appointment.time = newtime;
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this._us.logout()
            .then(function (response) { return _this._router.navigateByUrl('/login'); });
    };
    HomeComponent.prototype.refresh = function (eventData) {
        var _this = this;
        this._as.getAppointments()
            .then(function (appointments) {
            _this.appointments = appointments;
            for (var _i = 0, _a = _this.appointments; _i < _a.length; _i++) {
                var appointment = _a[_i];
                var newtime = new Date("May 3, 1993 00:00:00");
                newtime.setMinutes(appointment.time);
                appointment.time = newtime;
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_appointment_service__["a" /* AppointmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/homedash/homedash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/homedash/homedash.component.html":
/***/ (function(module, exports) {

module.exports = "<form #searchForm=\"ngForm\" (submit)=\"search()\" class=\"form search\">\n    <div class=\"form-row justify-content-center\">\n        <div class=\"col-sm-8\">\n            <input class=\"form-control mr-sm-2\" aria-label=\"Search\" type=\"search\" name=\"value\" required #value=\"ngModel\" [(ngModel)]=\"searchfield.value\" placeholder=\"Search by patient name or complaint\">\n        </div>\n        <div class=\"col-sm-1\">\n            <input class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" value=\"Search\" [disabled]=\"searchForm.invalid\">\n        </div>\n        <div class=\"col-sm-1\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" *ngIf=\"searched\" (click)=\"reset()\">Show All</button>\n        </div>\n    </div>\n</form>\n\n<table class=\"table table-hover\">\n    <thead class=\"thead-light\">\n        <tr>\n            <th>Date</th>\n            <th>Time</th>\n            <th>Patient Name</th>\n            <th>Complaint</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let appointment of display_appointments\">\n            <td>{{ appointment.date | date:\"MM/dd/yy\" }}</td>\n            <td>{{ appointment.time | date:\"h:mm a\" }}</td>\n            <td>{{ appointment._username }} <span *ngIf=\"appointment._userID == _user._id\">(You)</span></td>\n            <td>{{ appointment.complain }}</td>\n            <td><button class=\"btn btn-outline-secondary btn-sm\" *ngIf=\"appointment._userID == _user._id && appointment.date > today\"  (click)=\"delete(appointment._id)\">Delete</button></td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/home/homedash/homedash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_appointment_service__ = __webpack_require__("../../../../../src/app/services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomedashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomedashComponent = (function () {
    function HomedashComponent(_as, _router) {
        this._as = _as;
        this._router = _router;
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* DatePipe */]('en-US');
        this._appointments = [];
        this.display_appointments = [];
        this.searchfield = {
            value: ""
        };
        this._user = {};
        this.searched = false;
        this.today = new Date(Date.now());
        this.todayzero = this.today.setHours(0);
        this.todaydate = this.datePipe.transform(new Date(this.todayzero), 'yyyy-MM-dd');
        this.tomorrow = this.today.setHours(this.today.getHours() + 24);
        this.todaytime = new Date(Date.now()).getTime();
        this.todaytimeonly = this.datePipe.transform(new Date(this.todaytime), 'HH:mm');
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    Object.defineProperty(HomedashComponent.prototype, "appointments", {
        set: function (newappointments) {
            var _this = this;
            for (var _i = 0, newappointments_1 = newappointments; _i < newappointments_1.length; _i++) {
                var appointment = newappointments_1[_i];
                appointment.date = new Date(appointment.date);
                var _localOffset = 2 * 60 * 60000;
                var _userOffset = (appointment.date).getTimezoneOffset() * 60000;
                appointment.date = new Date((appointment.date).getTime() + _localOffset + _userOffset);
            }
            this._appointments = newappointments.filter(function (appointment) {
                var ok = true;
                var appointmentdate = _this.datePipe.transform(new Date(appointment.date), 'yyyy-MM-dd');
                if (appointment.date) {
                    ok = appointment.date >= _this.todayzero;
                }
                if (appointmentdate == _this.todaydate) {
                    var appointmenttime = _this.datePipe.transform(new Date(appointment.time), 'HH:mm');
                    ok = appointmenttime >= _this.todaytimeonly;
                }
                return ok;
            });
            this.display_appointments = this._appointments;
            this.display_appointments.sort(function (a, b) {
                // compare dates
                if (a.date < b.date)
                    return -1;
                else if (a.date > b.date)
                    return 1;
                // dates were equal, try times
                if (a.time < b.time)
                    return -1;
                else if (a.time > b.time)
                    return 1;
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomedashComponent.prototype, "user", {
        set: function (newuser) {
            this._user = newuser;
        },
        enumerable: true,
        configurable: true
    });
    HomedashComponent.prototype.ngOnInit = function () {
    };
    HomedashComponent.prototype.delete = function (appointmentID) {
        var _this = this;
        this._as.delete(appointmentID)
            .then(function (result) { return _this.refresh.emit('update!'); })
            .catch(function (err) { return console.log(err); });
    };
    HomedashComponent.prototype.reset = function () {
        this.display_appointments = this._appointments;
        this.searched = false;
    };
    HomedashComponent.prototype.search = function () {
        var _this = this;
        this.searched = true;
        this.display_appointments = this._appointments.filter(function (appointment) {
            return (appointment.complain.toLowerCase().includes(_this.searchfield.value.toLowerCase()) || appointment._username.toLowerCase().includes(_this.searchfield.value.toLowerCase()));
        });
        this.searchfield = {
            value: ""
        };
    };
    return HomedashComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HomedashComponent.prototype, "appointments", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HomedashComponent.prototype, "user", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], HomedashComponent.prototype, "refresh", void 0);
HomedashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-homedash',
        template: __webpack_require__("../../../../../src/app/home/homedash/homedash.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/homedash/homedash.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_appointment_service__["a" /* AppointmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomedashComponent);

var _a, _b;
//# sourceMappingURL=homedash.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info {\n    padding: 50px 10px 0 10px;\n}\n.form {\n    margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light justify-content-between\">\n    <span class=\"navbar-brand\">\n        <img src=\"/assets/favicon.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"Doctor's Appointments Logo\"> Doctor's Appointments\n    </span>\n</nav>\n<div class=\"col-8 offset-2 text-center\">\n    <h1>Doctor's Appointments</h1>\n    <p>A simple appointment scheduling application with date and time restrictions.</p>\n    <p>Upon signing in you will be presented with the doctor's current schedule and be able to book your own appointment.</p>\n    <p>Please sign in with your name to get started.</p>\n    <form class=\"col-6 offset-3\" #form=\"ngForm\" (submit)=\"login()\">\n        <div class=\"form-row\">\n            <div class=\"col-md-8\">\n                <input\n                type=\"text\"\n                name=\"name\"\n                required\n                #name=\"ngModel\"\n                [(ngModel)]=\"user.name\"\n                class=\"form-control mb-2 mr-sm-2\"\n                placeholder=\"Name\"\n                >\n            </div>\n            <div class=\"col-md-4\">\n                <input class=\"btn btn-primary mb-2\" type=\"submit\" value=\"Login\" [disabled]=\"form.invalid\">\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_us, _router) {
        this._us = _us;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.checkstatus()
            .then(function (user) { return _this._router.navigateByUrl('/'); })
            .catch(function (err) { return console.log('Need to login'); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._us.login(this.user)
            .then(function (data) {
            _this._router.navigateByUrl('/');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppointmentService = (function () {
    function AppointmentService(_http) {
        this._http = _http;
    }
    AppointmentService.prototype.getAppointments = function () {
        return this._http.get('/api/appointments')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    AppointmentService.prototype.delete = function (appointmentID) {
        return this._http.delete("/api/appointments/" + appointmentID)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    AppointmentService.prototype.addAppointment = function (appointment) {
        return this._http.post('/api/appointments', appointment)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return AppointmentService;
}());
AppointmentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppointmentService);

var _a;
//# sourceMappingURL=appointment.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.checkstatus = function () {
        return this._http.get('/api/user/check')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post('/api/user/login', user)
                .map(function (response) { return response.json(); })
                .toPromise()
                .then(function (data) {
                resolve(data);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    UserService.prototype.logout = function () {
        return this._http.get('api/user/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

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
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map