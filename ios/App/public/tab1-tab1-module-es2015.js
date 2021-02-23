(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/water/water.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/water/water.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    style=\"display: none;\">\n    <symbol id=\"wave\">\n      <path\n        d=\"M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z\">\n      </path>\n      <path\n        d=\"M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z\">\n      </path>\n      <path\n        d=\"M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z\">\n      </path>\n      <path\n        d=\"M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z\">\n      </path>\n    </symbol>\n  </svg>\n  <div class=\"box\">\n    <div id=\"water\" class=\"water\">\n      <svg viewBox=\"0 0 560 20\" class=\"water_wave water_wave_back\">\n        <use xlink:href=\"#wave\"></use>\n      </svg>\n      <svg viewBox=\"0 0 560 20\" class=\"water_wave water_wave_front\">\n        <use xlink:href=\"#wave\"></use>\n      </svg>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n\n<ion-content [fullscreen]=\"true\" mode=\"ios\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" style=\"background-color: #fd8215\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Puxer para Atualizar\"\n      refreshingSpinner=\"dots\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"curve curve-top\">\n    <div class=\"curve-sub curve-top-sub\">\n      <ion-header class=\"ion-no-border\" style=\"padding: 10px;\">\n        <ion-toolbar color=\"transparent\">\n          <ion-icon name=\"person-outline\" slot=\"start\" size=\"large\" (click)=\"openMenu()\" class=\"branco\"></ion-icon>\n          <ion-title class=\"branco\">PLANO</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-item lines=\"none\" style=\"margin: 0 auto; width: 70%; margin-top: -15px;\" class=\"ion-text-center\"\n        color=\"transparent\">\n        <ion-icon name=\"phone-portrait-outline\" style=\"font-size: 25px; margin-right: -25px;\" class=\"branco\"></ion-icon>\n        <ion-label style=\"font-size: 20px\" class=\"branco\">\n          {{celular}}\n        </ion-label>\n      </ion-item>\n\n      <div class=\"progress-pie-chart\" style=\"background-color: #fd8215; margin-top: 10px;\" *ngIf=\"!saldo\">\n        <div class=\"load\">\n          <hr />\n          <hr />\n          <hr />\n          <hr />\n        </div>\n      </div>\n\n      <div class=\"progress-pie-chart\" style=\"margin-top: 15px; border:solid 0.3px; border-color: #fdb97d\" *ngIf=\"saldo\"\n        data-percent=\"100\" (click)=\"retornaDados()\">\n        <ion-water></ion-water>\n        <!-- \n        <div class=\"ppc-progress\">\n          <div class=\"ppc-progress-fill\"></div>\n        </div>\n        -->\n        <div class=\"ppc-percents\" style=\"border:solid 0.5px; border-color: #fdb97d;\">\n          <div class=\"pcc-percents-wrapper\">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-label\n                    style=\"font-size: 15px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  color: white;\">\n                    Usou\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-label\n                    style=\"font-size: 25px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  color: white;\">\n                    {{saldo}} GB\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-label\n                    style=\"font-size: 15px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  color: white;\">\n                    De {{plano}} GB\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-grid style=\"margin-top: 30px;\">\n\n    <ion-row class=\"ion-text-center\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide>\n          <ion-col>\n            <ion-button color=\"light\" class=\"btn\" (click)=\"OpenPacote()\">\n              <img src=\"../../assets/img/update.png\" style=\"margin: 30%;\">\n            </ion-button>\n            <ion-text color=\"laranja\">Pacote</ion-text>\n          </ion-col>\n        </ion-slide>\n        <ion-slide>\n          <ion-col>\n            <ion-button color=\"light\" class=\"btn\" (click)=\"OpenExtrato()\">\n              <img src=\"../../assets/img/phonebook.png\" style=\"margin: 30%;\">\n            </ion-button>\n            <ion-text color=\"laranja\">Extrato</ion-text>\n          </ion-col>\n        </ion-slide>\n        <ion-slide>\n          <ion-col>\n            <ion-button color=\"light\" class=\"btn\" (click)=\"OpenFatura()\">\n              <img src=\"../../assets/img/dollar.png\" style=\"margin: 30%;\">\n            </ion-button>\n            <ion-text color=\"laranja\">Faturas</ion-text>\n          </ion-col>\n        </ion-slide>\n        <ion-slide>\n          <ion-col>\n            <ion-button color=\"light\" class=\"btn\" (click)=\"OpenChamado()\">\n              <img src=\"../../assets/img/suport.png\" style=\"margin: 30%;\">\n            </ion-button>\n            <ion-text color=\"laranja\">Chamado</ion-text>\n          </ion-col>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngIf=\"status =='EM ATIVAÇÃO'\">\n        <ion-button expand=\"block\" style=\"margin-top: 60px;\" color=\"laranja\" (click)=\"AtivarChip()\">ATIVAR CHIP\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"loader\"></div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"margin: 10px\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button style=\"width: 60px; height: 60px;\"\n        href=\"https://api.whatsapp.com/send?phone=5511984880527&text=Ol%C3%A1,%20me%20chamo%20{{nome}}%20e%20meu%20Cpf%20%C3%A9%20{{cpf}}.%20Gostaria%20de%20falar%20com%20algum%20atendente%20dispon%C3%ADvel\">\n        <ion-icon name=\"logo-whatsapp\" color=\"primary\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button href=\"tel: 08008787985\" style=\"width: 60px; height: 60px;\">\n        <ion-icon name=\"keypad\" color=\"primary\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n\n\n<!-- <canvas baseChart [datasets]=\"chartData\" [chartType]=\"chartType\" [labels]=\"chartLabels\" [options]=\"chartOptions\"></canvas>\n\n\n\n    <ion-card color=\"laranja\" style=\"margin-top: 60px;\">\n    <ion-card-header>\n      <ion-card-subtitle>DADOS DO PLANO</ion-card-subtitle>\n    </ion-card-header>\n    <ion-item>\n      <ion-label color=\"medium\">\n        <ion-icon name=\"reader\"></ion-icon>\n        {{contrato}}\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label *ngIf=\"produto == 265\" color=\"medium\">\n        <ion-icon name=\"cellular\"></ion-icon>\n        Plano 10 GB\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"medium\">\n        <ion-icon name=\"card\"></ion-icon>\n        {{simCard}}\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"status == 'ATIVADO'\">\n      <ion-label color=\"medium\">\n        <ion-icon name=\"alert-circle\"></ion-icon>\n        {{status}}\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"status == 'EM ATIVAÇÃO'\">\n      <ion-label color=\"medium\">\n        <ion-icon name=\"alert-circle\"></ion-icon>\n        {{status}}\n      </ion-label>\n      <ion-button slot=\"end\" size=\"\" expand=\"round\" color=\"warning\">ATIVAR</ion-button>\n    </ion-item>\n  </ion-card>\n  \n-->");

/***/ }),

/***/ "./src/app/componentes/water/water.component.scss":
/*!********************************************************!*\
  !*** ./src/app/componentes/water/water.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*, *:before, *:after {\n  box-sizing: border-box;\n  outline: none;\n}\n\nbody {\n  background: #fd8215;\n  font: 14px/1 \"Open Sans\", helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n.box {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fd8215;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.box .percent {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  display: -webkit-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 64px;\n}\n\n.box .water {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  transform: translate(0, 100%);\n  background: #fdb97d;\n  transition: all 0.3s;\n}\n\n.box .water_wave {\n  width: 200%;\n  position: absolute;\n  bottom: 100%;\n}\n\n.box .water_wave_back {\n  right: 0;\n  fill: #ff9b43;\n  -webkit-animation: wave-back 4s infinite linear;\n          animation: wave-back 4s infinite linear;\n}\n\n.box .water_wave_front {\n  left: 0;\n  fill: #fdb97d;\n  margin-bottom: -1px;\n  -webkit-animation: wave-front 1.8s infinite linear;\n          animation: wave-front 1.8s infinite linear;\n}\n\n@-webkit-keyframes wave-front {\n  100% {\n    transform: translate(-50%, 0);\n  }\n}\n\n@keyframes wave-front {\n  100% {\n    transform: translate(-50%, 0);\n  }\n}\n\n@-webkit-keyframes wave-back {\n  100% {\n    transform: translate(50%, 0);\n  }\n}\n\n@keyframes wave-back {\n  100% {\n    transform: translate(50%, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvd2F0ZXIvd2F0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFNRTtFQUNFLG1CQU5PO0VBT1AsK0NBQUE7RUFDQSxtQ0FBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFqQlE7RUFrQlIsbUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZOOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBekNTO0VBMENULG9CQUFBO0FBRk47O0FBR007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRFI7O0FBRVE7RUFDRSxRQUFBO0VBQ0EsYUFoREs7RUFpREwsK0NBQUE7VUFBQSx1Q0FBQTtBQUFWOztBQUVRO0VBQ0UsT0FBQTtFQUNBLGFBdERLO0VBdURMLG1CQUFBO0VBQ0Esa0RBQUE7VUFBQSwwQ0FBQTtBQUFWOztBQUtFO0VBQ0U7SUFDRSw2QkFBQTtFQUZKO0FBQ0Y7O0FBREU7RUFDRTtJQUNFLDZCQUFBO0VBRko7QUFDRjs7QUFLRTtFQUNFO0lBQ0UsNEJBQUE7RUFISjtBQUNGOztBQUFFO0VBQ0U7SUFDRSw0QkFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy93YXRlci93YXRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAkYmdDb2xvcjojZmQ4MjE1O1xyXG4gICRib3hDb2xvcjojZmQ4MjE1OyAvL2ZkYjk3ZGExXHJcbiAgJHdhdGVyRkNvbG9yOiNmZGI5N2Q7IC8vNEQ2REUzIG91IDNkYzJmZlxyXG4gICR3YXRlckJDb2xvcjojZmY5YjQzOyAvL0M3RUVGRlxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDokYmdDb2xvcjtcclxuICAgIGZvbnQ6IDE0cHgvMSAnT3BlbiBTYW5zJywgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3h7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYm94Q29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIC5wZXJjZW50e1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDozO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTo2NHB4O1xyXG4gICAgfSBcclxuICAgIC53YXRlcntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHotaW5kZXg6MjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiR3YXRlckZDb2xvcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgJl93YXZle1xyXG4gICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgICAgJl9iYWNrIHtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgZmlsbDogJHdhdGVyQkNvbG9yO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiB3YXZlLWJhY2sgNHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2Zyb250IHtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBmaWxsOiAkd2F0ZXJGQ29sb3I7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiB3YXZlLWZyb250IDEuOHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHdhdmUtZnJvbnQge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHdhdmUtYmFjayB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/water/water.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/water/water.component.ts ***!
  \******************************************************/
/*! exports provided: WaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterComponent", function() { return WaterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_tab1_tab1_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tab1/tab1.page */ "./src/app/tab1/tab1.page.ts");



let WaterComponent = class WaterComponent {
    constructor(tab1Page) {
        this.tab1Page = tab1Page;
    }
    ngOnInit() {
        document.getElementById("water").style.transform = 'translate(0' + ',' + (this.tab1Page.PorcentSaldo()) + '%)';
    }
};
WaterComponent.ctorParameters = () => [
    { type: src_app_tab1_tab1_page__WEBPACK_IMPORTED_MODULE_2__["Tab1Page"] }
];
WaterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ion-water',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./water.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/water/water.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./water.component.scss */ "./src/app/componentes/water/water.component.scss")).default]
    })
], WaterComponent);



/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _componentes_water_water_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/water/water.component */ "./src/app/componentes/water/water.component.ts");











let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _componentes_water_water_component__WEBPACK_IMPORTED_MODULE_10__["WaterComponent"]],
        exports: [ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _componentes_water_water_component__WEBPACK_IMPORTED_MODULE_10__["WaterComponent"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".branco {\n  color: white;\n}\n\n.consumo {\n  padding: 6px;\n  border-radius: 23px;\n}\n\ndiv.curve {\n  background-color: #fdb97d;\n  width: 100%;\n  height: 50%;\n}\n\ndiv.curve-sub {\n  background-color: #fd8215;\n  width: 100%;\n  height: 95%;\n}\n\ndiv.curve-top {\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n}\n\ndiv.curve-top-sub {\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n}\n\nion-content {\n  --ion-background-color: #ffffff;\n}\n\n.btn {\n  height: 120%;\n}\n\n.progress-pie-chart {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background-color: #E5E5E5;\n  position: relative;\n}\n\n.progress-pie-chart.gt-50 {\n  background-color: #81CE97;\n}\n\n.ppc-progress {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  left: calc(50% - 75px);\n  top: calc(50% - 75px);\n  width: 150px;\n  height: 150px;\n  clip: rect(0, 150px, 150px, 75px);\n}\n\n.ppc-progress .ppc-progress-fill {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  left: calc(50% - 75px);\n  top: calc(50% - 75px);\n  width: 150px;\n  height: 150px;\n  clip: rect(0, 75px, 150px, 0);\n  background: #3dc2ff;\n  transform: rotate(60deg);\n}\n\n.gt-50 .ppc-progress {\n  clip: rect(0, 75px, 150px, 0);\n}\n\n.gt-50 .ppc-progress .ppc-progress-fill {\n  clip: rect(0, 150px, 150px, 75px);\n  background: #E5E5E5;\n}\n\n.ppc-percents {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  left: calc(50% - 130.4347826087px/2);\n  top: calc(50% - 130.4347826087px/2);\n  width: 130.4347826087px;\n  height: 130.4347826087px;\n  background: #fd8215;\n  text-align: center;\n  display: table;\n}\n\n.ppc-percents span {\n  display: block;\n  font-size: 2.6em;\n  font-weight: bold;\n  color: #ffffff;\n}\n\n.pcc-percents-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.progress-pie-chart {\n  margin: 50px auto 0;\n}\n\nbody {\n  background: #ECF0F1;\n}\n\n.load {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /*change these sizes to fit into your project*/\n  width: 100px;\n  height: 100px;\n}\n\n.load hr {\n  border: 0;\n  margin: 0;\n  width: 40%;\n  height: 40%;\n  position: absolute;\n  border-radius: 50%;\n  -webkit-animation: spin 2s ease infinite;\n          animation: spin 2s ease infinite;\n}\n\n.load :first-child {\n  background: #ffffff;\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s;\n}\n\n.load :nth-child(2) {\n  background: #fdb97d;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.load :nth-child(3) {\n  background: #ffffff;\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n.load :last-child {\n  background: #fdb97d;\n}\n\n@-webkit-keyframes spin {\n  0%, 100% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(160%);\n  }\n  50% {\n    transform: translate(160%, 160%);\n  }\n  75% {\n    transform: translate(0, 160%);\n  }\n}\n\n@keyframes spin {\n  0%, 100% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(160%);\n  }\n  50% {\n    transform: translate(160%, 160%);\n  }\n  75% {\n    transform: translate(0, 160%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUVFLFlBQUE7QUFBRjs7QUFrQkU7RUFDRSxZQUZLO0VBR0wsYUFISztFQUlMLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWZKOztBQWdCSTtFQUNFLHlCQUFBO0FBZE47O0FBaUJFO0VBcEJFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBSUs7RUFITCxhQUdLO0VBYUwsaUNBQUE7QUFSSjs7QUFTSTtFQXZCQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUlLO0VBSEwsYUFHSztFQWdCSCw2QkFBQTtFQUVBLG1CQUFBO0VBQ0Esd0JBQUE7QUFGTjs7QUFJSTtFQUNFLDZCQUFBO0FBRk47O0FBR007RUFDRSxpQ0FBQTtFQUNBLG1CQUFBO0FBRFI7O0FBS0U7RUF0Q0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUJBa0NnQjtFQWpDaEIsd0JBaUNnQjtFQUNoQixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUhJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBS047O0FBRkU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBS0o7O0FBREU7RUFDRSxtQkFBQTtBQUlKOztBQUNDO0VBQUssbUJBQUE7QUFHTjs7QUFEQTtFQUFNLGtCQUFBO0VBQWtCLFFBQUE7RUFBUSxTQUFBO0VBQVMsZ0NBQUE7RUFDdkMsOENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVFGOztBQU5BO0VBQVMsU0FBQTtFQUFTLFNBQUE7RUFBUyxVQUFBO0VBQVUsV0FBQTtFQUFXLGtCQUFBO0VBQWtCLGtCQUFBO0VBQWtCLHdDQUFBO1VBQUEsZ0NBQUE7QUFnQnBGOztBQWRBO0VBQW1CLG1CQUFBO0VBQW1CLDhCQUFBO1VBQUEsc0JBQUE7QUFtQnRDOztBQWxCQTtFQUFvQixtQkFBQTtFQUFtQiw0QkFBQTtVQUFBLG9CQUFBO0FBdUJ2Qzs7QUF0QkE7RUFBb0IsbUJBQUE7RUFBbUIsOEJBQUE7VUFBQSxzQkFBQTtBQTJCdkM7O0FBMUJBO0VBQWtCLG1CQUFBO0FBOEJsQjs7QUE1QkE7RUFDRTtJQUFRLHVCQUFBO0VBZ0NSO0VBL0JBO0lBQUksMEJBQUE7RUFrQ0o7RUFqQ0E7SUFBSSxnQ0FBQTtFQW9DSjtFQW5DQTtJQUFJLDZCQUFBO0VBc0NKO0FBQ0Y7O0FBM0NBO0VBQ0U7SUFBUSx1QkFBQTtFQWdDUjtFQS9CQTtJQUFJLDBCQUFBO0VBa0NKO0VBakNBO0lBQUksZ0NBQUE7RUFvQ0o7RUFuQ0E7SUFBSSw2QkFBQTtFQXNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuY28ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29uc3VtbyB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcblxyXG5kaXYuY3VydmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjk3ZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbmRpdi5jdXJ2ZS1zdWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkODIxNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbmRpdi5jdXJ2ZS10b3Age1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwJTtcclxufVxyXG5cclxuZGl2LmN1cnZlLXRvcC1zdWIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwJTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiBcclxuICBoZWlnaHQ6IDEyMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0gIGNhcnJlZ2FyIEdCIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuQG1peGluIGNpcmNsZSgkc2l6ZSkge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gI3skc2l6ZS8yfSk7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gI3skc2l6ZS8yfSk7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gIH1cclxuICBcclxuICAkc2l6ZTogMTUwcHg7XHJcbiAgLnByb2dyZXNzLXBpZS1jaGFydCB7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICYuZ3QtNTAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFDRTk3O1xyXG4gICAgfVxyXG4gIH1cclxuICAucHBjLXByb2dyZXNzIHtcclxuICAgIEBpbmNsdWRlIGNpcmNsZSgkc2l6ZSk7XHJcbiAgICBjbGlwOiByZWN0KDAsICRzaXplLCAkc2l6ZSwgI3skc2l6ZS8yfSk7XHJcbiAgICAucHBjLXByb2dyZXNzLWZpbGwge1xyXG4gICAgICBAaW5jbHVkZSBjaXJjbGUoJHNpemUpO1xyXG4gICAgICBjbGlwOiByZWN0KDAsICN7JHNpemUvMn0sICRzaXplLCAwKTtcclxuICAgICAgLy9iYWNrZ3JvdW5kOiAjODFDRTk3XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzZGMyZmY7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgIH1cclxuICAgIC5ndC01MCAmIHtcclxuICAgICAgY2xpcDogcmVjdCgwLCAjeyRzaXplLzJ9LCAkc2l6ZSwgMCk7XHJcbiAgICAgIC5wcGMtcHJvZ3Jlc3MtZmlsbCB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwLCAkc2l6ZSwgJHNpemUsICN7JHNpemUvMn0pO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFNUU1RTU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnBwYy1wZXJjZW50cyB7XHJcbiAgICBAaW5jbHVkZSBjaXJjbGUoI3skc2l6ZS8xLjE1fSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmQ4MjE1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi42ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgLnBjYy1wZXJjZW50cy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLnByb2dyZXNzLXBpZS1jaGFydCB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byAwO1xyXG4gIH1cclxuXHJcbi8vLS0tLS0tLS0tLSBMT0FEIC0tLS0tLS0tLS0tLS8vXHJcbiAgXHJcbiBib2R5e2JhY2tncm91bmQ6I0VDRjBGMX1cclxuXHJcbi5sb2Fke3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAvKmNoYW5nZSB0aGVzZSBzaXplcyB0byBmaXQgaW50byB5b3VyIHByb2plY3QqL1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGhlaWdodDoxMDBweDtcclxufVxyXG4ubG9hZCBocntib3JkZXI6MDttYXJnaW46MDt3aWR0aDo0MCU7aGVpZ2h0OjQwJTtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTthbmltYXRpb246c3BpbiAycyBlYXNlIGluZmluaXRlfVxyXG5cclxuLmxvYWQgOmZpcnN0LWNoaWxke2JhY2tncm91bmQ6I2ZmZmZmZjthbmltYXRpb24tZGVsYXk6LTEuNXN9XHJcbi5sb2FkIDpudGgtY2hpbGQoMil7YmFja2dyb3VuZDojZmRiOTdkO2FuaW1hdGlvbi1kZWxheTotMXN9XHJcbi5sb2FkIDpudGgtY2hpbGQoMyl7YmFja2dyb3VuZDojZmZmZmZmO2FuaW1hdGlvbi1kZWxheTotMC41c31cclxuLmxvYWQgOmxhc3QtY2hpbGR7YmFja2dyb3VuZDojZmRiOTdkfVxyXG5cclxuQGtleWZyYW1lcyBzcGlue1xyXG4gIDAlLDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX1cclxuICAyNSV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxNjAlKX1cclxuICA1MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxNjAlLCAxNjAlKX1cclxuICA3NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAxNjAlKX1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pacote_pacote_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pacote/pacote.page */ "./src/app/pacote/pacote.page.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");






let Tab1Page = class Tab1Page {
    constructor(menu, apiService, router, modalController, alertController, loadingController, toastController, navController) {
        this.menu = menu;
        this.apiService = apiService;
        this.router = router;
        this.modalController = modalController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navController = navController;
        this.slideOpts = {
            slidesPerView: 3,
            speed: 400,
            autoplay: {
                delay: 4000,
            }
        };
        //this.presentLoading();
        //this.AtivarChip();
    }
    ngOnInit() {
        this.retornaDados();
    }
    openMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    OpenExtrato() {
        this.router.navigateByUrl("extrato");
    }
    OpenFatura() {
        this.router.navigateByUrl("fatura");
    }
    OpenChamado() {
        this.router.navigateByUrl("chamado");
    }
    OpenPacote() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pacote_pacote_page__WEBPACK_IMPORTED_MODULE_4__["PacotePage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    'firstName': 'Douglas',
                    'lastName': 'Adams',
                    'middleInitial': 'N'
                },
                mode: "ios"
            });
            return yield modal.present();
        });
    }
    Saldo(plano, saldo) {
        let $ = document.querySelector.bind(document);
        var saldo_disponivel = saldo;
        var saldo_usado = plano - saldo_disponivel;
        var porcent_usado = saldo_usado * 100 / plano;
        this.porcent_usado = porcent_usado;
        let percent = porcent_usado;
        let deg = 360 * percent / 100;
        /*
        if (percent > 50) {
          $('.progress-pie-chart').classList.add("gt-50");
        }
        $(".ppc-progress-fill").style.transform = "rotate(" + deg + "deg)";
        */
    }
    PorcentSaldo() {
        return this.porcent_usado;
    }
    retornaDados() {
        this.apiService.retornaDados(localStorage.getItem('codCliente')).subscribe((data) => {
            console.log(data);
            this.nome = data[0].nome;
            this.cpf = data[0].cpf;
            this.contrato = data[0].numero_contrato;
            this.simCard = data[0].num_card;
            this.produto = data[0].produto;
            this.status = data[0].status;
            this.celular = data[0].nro_telefone;
            localStorage.setItem('dados', JSON.stringify(data));
            localStorage.setItem('dados', JSON.stringify(data));
            localStorage.setItem('nro_telefone', data[0].nro_telefone);
            localStorage.setItem('contrato', data[0].numero_contrato);
            localStorage.setItem('num_card', data[0].num_card);
            this.apiService.Extrato('2000-01-01', '2000-01-01', data[0].numero_contrato).subscribe(data => {
                if (Number.isNaN(parseFloat((data.retorno.PlanoAtual_Gb - data.retorno.Saldo_Gb).toFixed(2))) == true) {
                    this.saldo = '0';
                }
                else {
                    this.saldo = (data.retorno.PlanoAtual_Gb - data.retorno.Saldo_Gb).toFixed(2);
                }
                if (data.retorno.PlanoAtual_Gb == null) {
                    this.plano = '0';
                }
                else {
                    this.plano = data.retorno.PlanoAtual_Gb;
                }
                this.Saldo(data.retorno.PlanoAtual_Gb, data.retorno.Saldo_Gb);
            });
        });
    }
    AtivarChip() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.AlertChip = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Ativar Chip',
                message: 'Informe o número do SimCard',
                inputs: [
                    {
                        name: 'card',
                        type: 'number',
                        placeholder: 'Numero do SimCard'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log('Cancel');
                        })
                    },
                    {
                        text: 'Ativar',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.presentLoading();
                            this.apiService.AtivarSimCard(data.card)
                                .subscribe(data => {
                                this.Load.dismiss();
                                if (data.mensagem == 'SUCESSO') {
                                    this.Alert('Ativar Chip', data.mensagem);
                                    this.navController.navigateRoot("/login");
                                }
                                else {
                                    this.Alert('Ativar Chip', data.mensagem);
                                }
                            });
                        })
                    }
                ],
                mode: "ios"
            });
            this.AlertChip.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Load = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Por Favor, Aguarde...',
                mode: "ios"
            });
            this.Load.present();
        });
    }
    Alert(header, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: msg,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            if (msg != 'SUCESSO') {
                                this.AtivarChip();
                            }
                            else {
                                this.AlertChip.dismiss();
                            }
                        }
                    }],
                mode: "ios"
            });
            yield alert.present();
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.retornaDados();
            event.target.complete();
            this.presentToast();
        }, 2000);
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Dados atualizados com sucesso!',
                duration: 2000,
                color: "dark",
                mode: "ios"
            });
            toast.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map