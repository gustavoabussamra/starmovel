(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~suporte-suporte-module~tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/suporte/suporte.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/suporte/suporte.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"laranja\">\n    <ion-title class=\"branco\">{{titulo}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">Fechar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"margin-top: 5%\">\n  </div>\n  <div class=\"curve curve-bottom\">\n    <div style=\"padding: 1%;\"></div>\n    <div class=\"curve-sub curve-bottom-sub background-branco\">\n      <div style=\"margin: 0 auto; width: 70%\" *ngIf=\"sistema == 'ios'\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-1.png\" *ngIf=\"img == 1\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-2.png\" *ngIf=\"img == 2\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-3.png\" *ngIf=\"img == 3\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-4.png\" *ngIf=\"img == 4\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-5.1.png\" *ngIf=\"img == 5\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-5.2.png\" *ngIf=\"img == 6\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-5.3.png\" *ngIf=\"img == 7\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-5.4.png\" *ngIf=\"img == 8\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-6.png\" *ngIf=\"img == 9\">\n        <img src=\"../../assets/img/suporte/apn-ios/phone-7.png\" *ngIf=\"img == 10\">\n        <ion-grid>\n          <ion-row >\n            <ion-col class=\"ion-text-center\">\n              <ion-button fill=\"outline\" shape=\"round\" color=\"laranja\" (click)=\"Back()\">\n                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n              </ion-button>\n              <ion-button fill=\"outline\" shape=\"round\" color=\"laranja\" (click)=\"Go()\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div style=\"margin: 0 auto; width: 70%\" *ngIf=\"sistema == 'android'\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-1.png\" *ngIf=\"img == 1\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-2.png\" *ngIf=\"img == 2\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-3.png\" *ngIf=\"img == 3\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-4.png\" *ngIf=\"img == 4\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-5.png\" *ngIf=\"img == 5\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-6.png\" *ngIf=\"img == 6\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-7.png\" *ngIf=\"img == 7\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-8.png\" *ngIf=\"img == 8\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-9.png\" *ngIf=\"img == 9\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-10.png\" *ngIf=\"img == 10\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-11.png\" *ngIf=\"img == 11\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-12.png\" *ngIf=\"img == 12\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-13.png\" *ngIf=\"img == 13\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-14.png\" *ngIf=\"img == 14\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-15.png\" *ngIf=\"img == 15\">\n        <img src=\"../../assets/img/suporte/apn-android/A01/A01-16.png\" *ngIf=\"img == 16\">\n\n        <ion-grid>\n          <ion-row >\n            <ion-col class=\"ion-text-center\">\n              <ion-button fill=\"outline\" shape=\"round\" color=\"laranja\" (click)=\"Back()\">\n                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n              </ion-button>\n              <ion-button fill=\"outline\" shape=\"round\" color=\"laranja\" (click)=\"Go()\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      \n      <div style=\"margin: 0 auto; width: 70%\" *ngIf=\"sistema == 'rede-ios'\">\n        <img src=\"../../assets/img/suporte/rede-ios/phone-1.png\" *ngIf=\"img == 1\">\n        <img src=\"../../assets/img/suporte/rede-ios/phone-2.png\" *ngIf=\"img == 2\">\n        <img src=\"../../assets/img/suporte/rede-ios/phone-3.png\" *ngIf=\"img == 3\">\n        <img src=\"../../assets/img/suporte/rede-ios/phone-4.png\" *ngIf=\"img == 4\">\n        <img src=\"../../assets/img/suporte/rede-ios/phone-5.png\" *ngIf=\"img == 5\">\n        <img src=\"../../assets/img/suporte/rede-ios/phone-6.png\" *ngIf=\"img == 6\">\n\n        <ion-grid>\n          <ion-row >\n            <ion-col class=\"ion-text-center\">\n              <ion-button fill=\"outline\" shape=\"round\" color=\"laranja\" (click)=\"Back()\">\n                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n              </ion-button>\n              <ion-button fill=\"outline\" shape=\"round\" color=\"laranja\" (click)=\"Go()\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div style=\"margin: 0 auto; width: 70%\" *ngIf=\"sistema == 'rede-android'\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-1.png\" *ngIf=\"img == 1\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-2.png\" *ngIf=\"img == 2\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-3.png\" *ngIf=\"img == 3\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-4.png\" *ngIf=\"img == 4\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-5.png\" *ngIf=\"img == 5\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-6.png\" *ngIf=\"img == 6\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-7.png\" *ngIf=\"img == 7\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-8.png\" *ngIf=\"img == 8\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-9.png\" *ngIf=\"img == 9\">\n        <img src=\"../../assets/img/suporte/rede-android/A01-10.png\" *ngIf=\"img == 10\">\n\n        <ion-grid>\n          <ion-row >\n            <ion-col class=\"ion-text-center\">\n              <ion-button fill=\"outline\" shape=\"round\" color=\"laranja\" (click)=\"Back()\">\n                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n              </ion-button>\n              <ion-button fill=\"outline\" shape=\"round\" color=\"laranja\" (click)=\"Go()\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/suporte/suporte.page.scss":
/*!*******************************************!*\
  !*** ./src/app/suporte/suporte.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.curve {\n  margin-top: 10px;\n  background-color: #fdb97d;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-sub {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-bottom {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\ndiv.curve-bottom-sub {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\n.branco {\n  color: white;\n}\n\nion-content {\n  --ion-background-color: #fd8215;\n}\n\n.background-branco {\n  --ion-background-color: white;\n}\n\n.list {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.my-custom-class {\n  --background: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vwb3J0ZS9zdXBvcnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdXBvcnRlL3N1cG9ydGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmN1cnZlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiOTdkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5jdXJ2ZS1zdWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2LmN1cnZlLWJvdHRvbSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG5kaXYuY3VydmUtYm90dG9tLXN1YiB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uYnJhbmNvIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZkODIxNTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtYnJhbmNvIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm15LWN1c3RvbS1jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/suporte/suporte.page.ts":
/*!*****************************************!*\
  !*** ./src/app/suporte/suporte.page.ts ***!
  \*****************************************/
/*! exports provided: SuportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePage", function() { return SuportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let SuportePage = class SuportePage {
    constructor(modalController) {
        this.modalController = modalController;
        this.img = 1;
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    Go() {
        if (this.img >= this.n) {
            this.img == this.n;
        }
        else {
            this.img++;
        }
        console.log(this.sistema);
    }
    Back() {
        if (this.img <= 1) {
            this.img == 1;
        }
        else {
            this.img--;
        }
        console.log(this.sistema);
    }
};
SuportePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
SuportePage.propDecorators = {
    sistema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    n: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
SuportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suporte',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./suporte.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/suporte/suporte.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./suporte.page.scss */ "./src/app/suporte/suporte.page.scss")).default]
    })
], SuportePage);



/***/ })

}]);
//# sourceMappingURL=default~suporte-suporte-module~tab3-tab3-module-es2015.js.map