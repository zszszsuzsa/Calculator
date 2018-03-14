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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calculator-container{\r\n    border: 1px solid black;\r\n    border-radius:10px;\r\n    margin-top:50px;\r\n    padding: 10px;\r\n    background:-webkit-gradient(linear,left top, left bottom,color-stop(2%, beige),color-stop(80%, rgba(194, 140, 102, 0.89)));\r\n    background:linear-gradient(beige 2%,rgba(194, 140, 102, 0.89) 80%);\r\n}\r\n.calculator-container .screen{\r\n    border: 1px solid black;\r\n    border-radius:10px;\r\n    overflow: hidden;\r\n    padding: 10px;\r\n    margin: 15px;\r\n    background-color: beige;\r\n}\r\n.calculator-container .screen p{\r\n    text-align:right;\r\n    overflow: hidden;\r\n}\r\n.calculator-container .screen .display{\r\n    font-weight: bold;\r\n    font-size: 25px;\r\n}\r\n.calculator-container button{\r\n    margin:5px;\r\n    width:40px;\r\n    line-height:1;\r\n    font-size:18px;\r\n    font-weight: bold;\r\n    text-align:center;\r\n    background: radial-gradient(#535252,#2d2d2d);\r\n    color:white;\r\n}\r\n.calculator-container #AC{\r\n    background:rgb(45, 180, 146);\r\n    color:#2d2d2d;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4 calculator-container\">\n      <div class=\"row\">\n        <div class=\"screen\">\n          <p class=\"operation\">{{formula}}</p>\n          <p class=\"display\">{{value}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" id=\"AC\" (click)=\"clear($event)\">AC</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" id=\"%\" value=\"\" (click)=\"getPercentage($event)\">%</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" id=\"sqrt\" value=\"sqr\" (click)=\"calculateSqr($event)\">x\n            <sup>2</sup>\n          </button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" id=\"divide\" value=\"/\" (click)=\"onOperator($event)\">&divide;</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" id=\"7\" value=7 (click)=\"displayValue($event)\">7</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" id=\"8\" value=8 (click)=\"displayValue($event)\">8</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" id=\"9\" value=9 (click)=\"displayValue($event)\">9</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=\"*\" (click)=\"onOperator($event)\">x</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=4 (click)=\"displayValue($event)\">4</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=5 (click)=\"displayValue($event)\">5</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=6 (click)=\"displayValue($event)\">6</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=\"-\" (click)=\"onOperator($event)\">-</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=1 (click)=\"displayValue($event)\">1</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=2 (click)=\"displayValue($event)\">2</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=3 (click)=\"displayValue($event)\">3</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=\"+\" (click)=\"onOperator($event)\">+</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=\"-\" (click)=\"setNegative($event)\">+/-</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" id=\"0\" value=0 (click)=\"displayValue($event)\">0</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=\".\" (click)=\"addFloatingpoint($event)\">.</button>\n        </div>\n        <div class=\"col-xs-3\">\n          <button class=\"btn btn-default\" value=\"\" (click)=\"calculate($event)\">=</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.value = 0; /* variable containing the current input number to be displayed on screen*/
        this.formula = ""; /*Containing the whole formula line to be diplayed above the current input value */
    }
    // Displaying the current input on screen after clicking a number
    // adding the current value to the formula for further display
    AppComponent.prototype.displayValue = function (event) {
        // this line of code prevents appending multiple zeros or numbers beginning with zero
        if (this.value === 0 || this.value.toString() === "0") {
            this.value = event.target.value;
        }
        else {
            this.value += event.target.value;
        }
    };
    // Setting the function of the buttons:
    // AC button 
    AppComponent.prototype.clear = function (event) {
        this.value = 0;
        this.formula = "";
    };
    // Operators
    AppComponent.prototype.onOperator = function (event) {
        this.formula += this.value + event.target.value;
        this.value = 0;
    };
    // Calculation of square
    AppComponent.prototype.calculateSqr = function (event) {
        this.value = Math.pow(this.value, 2);
        this.formula += this.value;
    };
    // %
    AppComponent.prototype.getPercentage = function (event) {
        if (this.formula != "") {
            this.value = eval(this.formula.slice(0, -1)) * this.value / 100;
            this.formula += this.value;
        }
    };
    // Changing +/-
    AppComponent.prototype.setNegative = function (event) {
        // allowing to initialize input numbers with negative sign
        if (this.value == 0 || this.value.toString().slice(-1) === ".") {
            this.value = event.target.value;
        }
        // prepending the - sign to the input number
        if (this.value > 0) {
            this.value = event.target.value + this.value;
        }
        // changing the input number from negative to positive 
        if (this.value < 0) {
            this.value = Math.abs(this.value);
        }
    };
    AppComponent.prototype.addFloatingpoint = function (event) {
        //    if (this.value % 1===0 && this.value[this.value.length - 1] !== '.'){
        if (this.value % 1 === 0 && this.value[this.value.toString().length - 1] !== '.') {
            this.value = this.value + event.target.value;
        }
        // if (this.value[this.formula.length - 1] !== '.') {
        //   // this.displayValue(event);
        //   this.value = this.value + event.target.value;
        // }
    };
    // Gives the answer after pressing = sign
    AppComponent.prototype.calculate = function (event) {
        /*This variable is for checking wether the result has been already calculated and if it was added to to formula on the screen */
        var calculated = this.formula.indexOf("=");
        // This line of the code is for avoiding the display of the equality sign and result on screen multiple times
        if (calculated != -1) {
            return;
        }
        else {
            this.formula += this.value;
            // Calculating the formula with eval method, the result is displayed on the screen
            this.value = eval(this.formula);
            this.formula += "=" + this.value;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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