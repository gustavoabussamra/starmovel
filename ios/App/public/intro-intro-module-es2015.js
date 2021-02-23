(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"height: 100%; background:url(../../assets/img/bg2.png); background-size: cover;\n  background-repeat: no-repeat;\">\n\n        <ion-slide class=\"slide\">\n            <ion-grid>\n                <ion-row>\n                    <img src=\"../../assets/img/starnet-logo.png\">\n                </ion-row>\n                <ion-row style=\"margin-top: -20px;\">\n                    <div class=\"texto-intro centro-text\">BEM VINDO!!!</div>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide class=\"slide\">\n            <ion-grid>\n                <ion-row class=\"centro-text\">\n                    <img src=\"../../assets/img/hand-graving-smartphone.png\" class=\"centraliza-img\">\n                </ion-row>\n                <ion-row>\n                    <div class=\"texto-intro\">Gerencie seus dados Móveis com o Starnet Móvel na palma da sua mão!!!</div>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide class=\"slide\">\n            <ion-grid>\n                <ion-row class=\"centro-text\">\n                    <img src=\"../../assets/img/adicionar-smartphone.png\" class=\"centraliza-img\">\n                </ion-row>\n                <ion-row>\n                    <div class=\"texto-intro\">Acabou seus dados moveis?<br><br>Não se preocupe, adquira dados adicionais\n                        direto pelo Aplicativo!</div>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide class=\"slide\">\n            <ion-grid>\n                <ion-row class=\"centro-text\">\n                    <img src=\"../../assets/img/phonebook_white.png\" class=\"centraliza-img\">\n                </ion-row>\n                <ion-row>\n                    <div class=\"texto-intro\">Quer saber o quanto consome de Internet, Ligações e Sms?<br><br>Faça seu\n                        Extrato e controle seu consumo!!!\n                    </div>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide class=\"slide\">\n            <ion-grid>\n                <ion-row class=\"centro-text\">\n                    <img src=\"../../assets/img/atendimento-ao-cliente.png\" class=\"centraliza-img\">\n                </ion-row>\n                <ion-row>\n                    <div class=\"texto-intro\">Surgiu duvidas? Teve problemas? Abra um chamado conosco!<br><br>Entraremos\n                        em contato para Ajuda-lo!</div>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide class=\"slide\">\n            <ion-grid>\n                <ion-row class=\"centro-text\">\n                    <img src=\"../../assets/img/starBoy.png\" class=\"centraliza-img\">\n                </ion-row>\n\n                <ion-button color=\"primary\" (click)=\"Open()\" shape=\"round\" expand=\"block\" size=\"large\"\n                    style=\"margin-top: -10px;\">\n                    Começar\n                </ion-button>\n\n            </ion-grid>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/intro/intro-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "./src/app/intro/intro-routing.module.ts");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tutorial-page .toolbar-background {\n  background: #fff;\n  border-color: transparent;\n}\n.tutorial-page .slide-zoom {\n  height: 100%;\n}\n.tutorial-page .slide-title {\n  margin-top: 2.8rem;\n}\n.tutorial-page .slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 18px 0;\n}\n.tutorial-page b {\n  font-weight: 500;\n}\n.tutorial-page p {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646b;\n}\n.tutorial-page p b {\n  color: #000000;\n}\n.red {\n  background-color: rgba(216, 3, 3, 0.879);\n}\n.texto-intro {\n  margin-top: 50px;\n  font-family: Catamaran, Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  letter-spacing: 1px;\n  font-size: 25px;\n  color: #fff;\n  text-align: center;\n  font-weight: 400;\n}\n.centro-text {\n  text-align: center;\n  width: 100%;\n}\n.slide {\n  padding: 10%;\n}\n.centraliza-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQUFSO0FBR0k7RUFDSSxZQUFBO0FBRFI7QUFJSTtFQUNJLGtCQUFBO0FBRlI7QUFLSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUhSO0FBTUk7RUFDSSxnQkFBQTtBQUpSO0FBT0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUxSO0FBT1E7RUFDSSxjQUFBO0FBTFo7QUFTQTtFQUNJLHdDQUFBO0FBTko7QUFTQTtFQUNJLGdCQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQU5KO0FBU0E7RUFDSSxZQUFBO0FBTko7QUFTQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9pbnRyby9pbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHV0b3JpYWwtcGFnZSB7XHJcbiAgICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlLXpvb20ge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUtaW1hZ2Uge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgICAgICBtYXJnaW46IDE4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICBiIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogIzYwNjQ2YjtcclxuXHJcbiAgICAgICAgYiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCAzLCAzLCAwLjg3OSk7XHJcbn1cclxuXHJcbi50ZXh0by1pbnRybyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENhdGFtYXJhbiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY2VudHJvLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuXHJcbi5jZW50cmFsaXphLWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let IntroPage = class IntroPage {
    constructor(navController) {
        this.navController = navController;
        this.slideOpts = {
            speed: 600,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: "true",
            }
        };
    }
    ngOnInit() {
    }
    Open() {
        this.navController.navigateRoot("login");
    }
};
IntroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")).default]
    })
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module-es2015.js.map