(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extrato-extrato-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/extrato/extrato.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extrato/extrato.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExtratoExtratoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\"> \n  <ion-toolbar color=\"laranja\">\n    <ion-buttons>\n      <ion-back-button color=\"light\" text=\"Voltar\">\n      </ion-back-button>\n      <ion-title class=\"branco\">STARNET</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\"  mode=\"ios\">\n  <div style=\"margin-top: 5%\">\n    <ion-label class=\"branco\"\n      style=\"font-size: 30px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 5%;\">\n      Meu Consumo!\n    </ion-label>\n  </div>\n  <div class=\"curve curve-bottom\">\n    <div style=\"padding: 1%;\"></div>\n    <div class=\"curve-sub curve-bottom-sub background-branco\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>DEFINIR PERIODO</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <form (ngSubmit)=\"Consultar()\" #consultar=\"ngForm\">\n            <ion-grid>\n              <ion-row class=\"ion-text-center\">\n                <ion-col>\n                  Data Inicial\n                  <ion-datetime [(ngModel)]=\"inicial\" name=\"inicial\" placeholder=\"00/00/0000\" displayFormat=\"DD/MM/YYYY\"\n                    value=\"0000-00-00\" style=\"margin-right: 12px;\" cancel-text=\"Cancelar\" done-text=\"Confirmar\"></ion-datetime>\n                </ion-col>\n                <ion-col>\n                  Data Final\n                  <ion-datetime [(ngModel)]=\"final\" name=\"final\" placeholder=\"00/00/0000\" displayFormat=\"DD/MM/YYYY\"\n                    value=\"0000-00-00\" style=\"margin-right: 12px;\" cancel-text=\"Cancelar\" done-text=\"Confirmar\"></ion-datetime>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div class=\"ion-text-center\" *ngIf=\"erro; else elseBlock\">\n              <ion-text color=\"laranja\">{{erro}}</ion-text>\n            </div>\n            <br>\n            <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" color=\"laranja\" (click)=\"consultar.ngSubmit.emit()\">\n              CONSULTAR\n            </ion-button>\n          </form>\n        </ion-card-content>\n      </ion-card>\n\n      <div class=\"progress-pie-chart\" style=\"background-color: #fd8215; margin-top: 300px;\" *ngIf=\"load\">\n        <div class=\"load\" style=\"margin-top: 150px;\">\n          <hr />\n          <hr />\n          <hr />\n          <hr />\n        </div>\n      </div>\n\n      <ion-card *ngIf=\"Extrato && load == false\">\n        <ion-card-header>\n          <ion-card-subtitle>EXTRATO</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-segment value=\"ligacoes\">\n            <ion-segment-button value=\"ligacoes\" (click)=\"showExtrato('ligacoes')\">\n              <ion-label>LIGAÇÕES</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"sms\" (click)=\"showExtrato('sms')\">\n              <ion-label>SMS</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"dados\" (click)=\"showExtrato('dados')\">\n              <ion-label>DADOS</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <br>\n          <!-- EXTRATO DE LIGAÇÕES -->\n          <ion-grid *ngIf=\"isShow == 'ligacoes'\">\n            <ion-row class=\"ion-text-center\">\n              <ion-col class=\"ion-text-left\">DATA</ion-col>\n              <ion-col>HORA</ion-col>\n              <ion-col>DURAÇÃO</ion-col>\n              <ion-col>DESTINO</ion-col>\n            </ion-row>\n\n            <div *ngFor=\"let extrato of Extrato\">\n              <ion-row class=\"ion-text-center\" style=\"font-size: 12px;\" *ngFor=\"let movel of extrato.movel\">\n                <ion-col class=\"ion-text-center\">\n                  <ion-row>\n                    {{FormataData(extrato.Data)}}\n                  </ion-row>\n                </ion-col>\n                <ion-col class=\"ion-text-center\">\n                  <ion-row>\n                    {{FormataHora(movel.Hora)}}\n                  </ion-row>\n                </ion-col>\n                <ion-col class=\"ion-text-center\">\n                  <ion-row>\n                    {{FormataDuracao(movel.Consumo_Segundos)}}\n                  </ion-row>\n                </ion-col>\n                <ion-col class=\"ion-text-center\">\n                  <ion-row>\n                    {{movel.Nro_Destino}}\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n\n          <!-- EXTRATO DE SMS -->\n          <ion-grid *ngIf=\"isShow == 'sms'\">\n            <ion-row class=\"ion-text-center\">\n              <ion-col>DATA</ion-col>\n              <ion-col>HORA</ion-col>\n              <ion-col>DESTINO</ion-col>\n            </ion-row>\n            <div *ngFor=\"let extrato of Extrato\">\n              <ion-row class=\"ion-text-center\" *ngFor=\"let sms of extrato.sms\">\n                <ion-col style=\"text-align: center; font-size: 12px;\">\n                  {{FormataData(extrato.Data)}}\n                </ion-col>\n                <ion-col>\n                  <p style=\"text-align: center; font-size: 12px;\">\n                    {{FormataHora(sms.Hora)}}\n                  </p>\n                </ion-col>\n                <ion-col>\n                  <p style=\"text-align: center; font-size: 12px;\">\n                    {{sms.Nro_Destino}}\n                  </p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n          <!-- EXTRATO DE DADOS -->\n          <ion-grid *ngIf=\"isShow == 'dados'\">\n            <ion-row class=\"ion-text-center\">\n              <ion-col>DATA</ion-col>\n              <ion-col>CONSUMO</ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\" style=\"font-size: 12px;\" *ngFor=\"let extrato of Extrato\">\n              <ion-col>{{FormataData(extrato.Data)}}</ion-col>\n              <ion-col>{{FormataDados(extrato.Consumo_Dados)}}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n      <br>\n      <br>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/extrato/extrato-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/extrato/extrato-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ExtratoPageRoutingModule */

    /***/
    function srcAppExtratoExtratoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtratoPageRoutingModule", function () {
        return ExtratoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _extrato_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./extrato.page */
      "./src/app/extrato/extrato.page.ts");

      var routes = [{
        path: '',
        component: _extrato_page__WEBPACK_IMPORTED_MODULE_3__["ExtratoPage"]
      }];

      var ExtratoPageRoutingModule = function ExtratoPageRoutingModule() {
        _classCallCheck(this, ExtratoPageRoutingModule);
      };

      ExtratoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExtratoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/extrato/extrato.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/extrato/extrato.module.ts ***!
      \*******************************************/

    /*! exports provided: ExtratoPageModule */

    /***/
    function srcAppExtratoExtratoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtratoPageModule", function () {
        return ExtratoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _extrato_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./extrato-routing.module */
      "./src/app/extrato/extrato-routing.module.ts");
      /* harmony import */


      var _extrato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./extrato.page */
      "./src/app/extrato/extrato.page.ts");

      var ExtratoPageModule = function ExtratoPageModule() {
        _classCallCheck(this, ExtratoPageModule);
      };

      ExtratoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _extrato_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExtratoPageRoutingModule"]],
        declarations: [_extrato_page__WEBPACK_IMPORTED_MODULE_6__["ExtratoPage"]]
      })], ExtratoPageModule);
      /***/
    },

    /***/
    "./src/app/extrato/extrato.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/extrato/extrato.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppExtratoExtratoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.curve {\n  margin-top: 10px;\n  background-color: #fdb97d;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-sub {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-bottom {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\ndiv.curve-bottom-sub {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\n.branco {\n  color: white;\n}\n\nion-content {\n  --ion-background-color: #fd8215;\n}\n\n.background-branco {\n  --ion-background-color: white;\n}\n\n.list {\n  font-size: 20px;\n  font-weight: bold;\n}\n\nbody {\n  background: #ECF0F1;\n}\n\n.load {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /*change these sizes to fit into your project*/\n  width: 100px;\n  height: 100px;\n}\n\n.load hr {\n  border: 0;\n  margin: 0;\n  width: 40%;\n  height: 40%;\n  position: absolute;\n  border-radius: 50%;\n  -webkit-animation: spin 2s ease infinite;\n          animation: spin 2s ease infinite;\n}\n\n.load :first-child {\n  background: #fd8215;\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s;\n}\n\n.load :nth-child(2) {\n  background: #fdb97d;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.load :nth-child(3) {\n  background: #fd8215;\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n.load :last-child {\n  background: #fdb97d;\n}\n\n@-webkit-keyframes spin {\n  0%, 100% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(160%);\n  }\n  50% {\n    transform: translate(160%, 160%);\n  }\n  75% {\n    transform: translate(0, 160%);\n  }\n}\n\n@keyframes spin {\n  0%, 100% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(160%);\n  }\n  50% {\n    transform: translate(160%, 160%);\n  }\n  75% {\n    transform: translate(0, 160%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmF0by9leHRyYXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFJQTtFQUFLLG1CQUFBO0FBQUw7O0FBRUE7RUFBTSxrQkFBQTtFQUFrQixRQUFBO0VBQVEsU0FBQTtFQUFTLGdDQUFBO0VBQ3ZDLDhDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFLRjs7QUFIQTtFQUFTLFNBQUE7RUFBUyxTQUFBO0VBQVMsVUFBQTtFQUFVLFdBQUE7RUFBVyxrQkFBQTtFQUFrQixrQkFBQTtFQUFrQix3Q0FBQTtVQUFBLGdDQUFBO0FBYXBGOztBQVhBO0VBQW1CLG1CQUFBO0VBQW1CLDhCQUFBO1VBQUEsc0JBQUE7QUFnQnRDOztBQWZBO0VBQW9CLG1CQUFBO0VBQW1CLDRCQUFBO1VBQUEsb0JBQUE7QUFvQnZDOztBQW5CQTtFQUFvQixtQkFBQTtFQUFtQiw4QkFBQTtVQUFBLHNCQUFBO0FBd0J2Qzs7QUF2QkE7RUFBa0IsbUJBQUE7QUEyQmxCOztBQXpCQTtFQUNFO0lBQVEsdUJBQUE7RUE2QlI7RUE1QkE7SUFBSSwwQkFBQTtFQStCSjtFQTlCQTtJQUFJLGdDQUFBO0VBaUNKO0VBaENBO0lBQUksNkJBQUE7RUFtQ0o7QUFDRjs7QUF4Q0E7RUFDRTtJQUFRLHVCQUFBO0VBNkJSO0VBNUJBO0lBQUksMEJBQUE7RUErQko7RUE5QkE7SUFBSSxnQ0FBQTtFQWlDSjtFQWhDQTtJQUFJLDZCQUFBO0VBbUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leHRyYXRvL2V4dHJhdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmN1cnZlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiOTdkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5jdXJ2ZS1zdWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2LmN1cnZlLWJvdHRvbSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG5kaXYuY3VydmUtYm90dG9tLXN1YiB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uYnJhbmNvIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZkODIxNTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtYnJhbmNvIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tIExPQUQgLS0tLS0tLS0tLS0tLy9cclxuICBcclxuYm9keXtiYWNrZ3JvdW5kOiNFQ0YwRjF9XHJcblxyXG4ubG9hZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLypjaGFuZ2UgdGhlc2Ugc2l6ZXMgdG8gZml0IGludG8geW91ciBwcm9qZWN0Ki9cclxuICB3aWR0aDoxMDBweDtcclxuICBoZWlnaHQ6MTAwcHg7XHJcbn1cclxuLmxvYWQgaHJ7Ym9yZGVyOjA7bWFyZ2luOjA7d2lkdGg6NDAlO2hlaWdodDo0MCU7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7YW5pbWF0aW9uOnNwaW4gMnMgZWFzZSBpbmZpbml0ZX1cclxuXHJcbi5sb2FkIDpmaXJzdC1jaGlsZHtiYWNrZ3JvdW5kOiNmZDgyMTU7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfVxyXG4ubG9hZCA6bnRoLWNoaWxkKDIpe2JhY2tncm91bmQ6I2ZkYjk3ZDthbmltYXRpb24tZGVsYXk6LTFzfVxyXG4ubG9hZCA6bnRoLWNoaWxkKDMpe2JhY2tncm91bmQ6I2ZkODIxNTthbmltYXRpb24tZGVsYXk6LTAuNXN9XHJcbi5sb2FkIDpsYXN0LWNoaWxke2JhY2tncm91bmQ6I2ZkYjk3ZH1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbntcclxuICAwJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9XHJcbiAgMjUle3RyYW5zZm9ybTp0cmFuc2xhdGUoMTYwJSl9XHJcbiAgNTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMTYwJSwgMTYwJSl9XHJcbiAgNzUle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMTYwJSl9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/extrato/extrato.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/extrato/extrato.page.ts ***!
      \*****************************************/

    /*! exports provided: ExtratoPage */

    /***/
    function srcAppExtratoExtratoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtratoPage", function () {
        return ExtratoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/api.service */
      "./src/app/service/api.service.ts");

      var ExtratoPage = /*#__PURE__*/function () {
        function ExtratoPage(apiService, alertController) {
          _classCallCheck(this, ExtratoPage);

          this.apiService = apiService;
          this.alertController = alertController;
          this.load = false;
          this.isShow = 'ligacoes';
        }

        _createClass(ExtratoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showExtrato",
          value: function showExtrato(show) {
            this.isShow = show;
          }
        }, {
          key: "Consultar",
          value: function Consultar() {
            var _this = this;

            if (!this.inicial || !this["final"]) {
              this.erro = "Definas as Datas!";
            } else {
              this.erro = null;
              this.load = true;
              this.apiService.Extrato(this.inicial.substring(0, 10), this["final"].substring(0, 10), localStorage.getItem('contrato')).subscribe(function (data) {
                if (data.extrato) {
                  _this.Extrato = data.extrato;
                } else {
                  _this.Movel = "Sem registro";

                  _this.presentAlert();
                }

                _this.load = false;
              });
            }
          }
        }, {
          key: "FormataData",
          value: function FormataData(data) {
            var newDate = data.replace(/-/gi, '');
            var ano = newDate.substring(0, 4);
            var mes = newDate.substring(4, 6);
            var dia = newDate.substring(6, 8);
            var dataFormt = "".concat(dia, "/").concat(mes);
            return dataFormt;
          }
        }, {
          key: "FormataHora",
          value: function FormataHora(hora) {
            return hora.substring(0, 5);
          }
        }, {
          key: "FormataDuracao",
          value: function FormataDuracao(duracao) {
            if (duracao < 59) {
              return duracao + ' s';
            } else {
              var min_float = duracao / 60;
              var min_text = min_float.toString();
              var seg_text = min_text.split(".")[1];
              var min = min_text.split(".")[0];
              var seg = (parseFloat(seg_text) * 60 / 10).toString();

              if (Number.isNaN(parseFloat(seg)) == true) {
                return min + ' m';
              } else {
                return min + ' m ' + seg.substring(0, 2) + ' s';
              }
            }
          }
        }, {
          key: "FormataDados",
          value: function FormataDados(dados) {
            return (dados / 1024 / 1024).toFixed(2) + ' MB';
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        subHeader: 'Extrato',
                        message: 'Sem consumo durante o período informado!',
                        buttons: ['OK'],
                        mode: "ios"
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ExtratoPage;
      }();

      ExtratoPage.ctorParameters = function () {
        return [{
          type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      ExtratoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-extrato',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./extrato.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/extrato/extrato.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./extrato.page.scss */
        "./src/app/extrato/extrato.page.scss"))["default"]]
      })], ExtratoPage);
      /***/
    },

    /***/
    "./src/app/service/api.service.ts":
    /*!****************************************!*\
      !*** ./src/app/service/api.service.ts ***!
      \****************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppServiceApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(_http) {
          _classCallCheck(this, ApiService);

          this._http = _http;
          this.Url = 'http://186.251.225.174/api_mobile/';
        }

        _createClass(ApiService, [{
          key: "retornaDados",
          value: function retornaDados(codCliente) {
            return this._http.get(this.Url + "retorna_cadastro.php?codigo=".concat(codCliente));
          }
        }, {
          key: "retornaPlano",
          value: function retornaPlano(codCliente) {
            return this._http.get(this.Url + "retorna_plano.php?codigo=".concat(codCliente));
          }
        }, {
          key: "Login",
          value: function Login(usuario, senha) {
            return this._http.get(this.Url + "login_mk_movel.php?usuario=".concat(usuario, "&senha=").concat(senha));
          }
        }, {
          key: "Extrato",
          value: function Extrato(dtInicial, dtFinal, contrato) {
            return this._http.get(this.Url + "extrato.php?data_inicial=".concat(dtInicial, "&data_final=").concat(dtFinal, "&contrato=").concat(contrato));
          }
        }, {
          key: "AtivarSimCard",
          value: function AtivarSimCard(card) {
            return this._http.get(this.Url + "ativar.php?card=".concat(card, "&contrato=").concat(localStorage.getItem('contrato')));
          }
        }, {
          key: "ConsultarSaldo",
          value: function ConsultarSaldo(contrato) {
            return this._http.get(this.Url + "saldo.php?contrato=".concat(contrato));
          }
        }, {
          key: "AddPacotes",
          value: function AddPacotes(qtd, info) {
            return this._http.get(this.Url + "comprar_pacote.php?card=".concat(localStorage.getItem('num_card'), "&qtd=").concat(qtd, "&contrato=").concat(localStorage.getItem('contrato'), "&cd_cliente=").concat(localStorage.getItem('codCliente'), "&info=").concat(info, "&numero=").concat(localStorage.getItem('nro_telefone'))); //localStorage.getItem('nro_telefone')
          }
        }, {
          key: "AbreChamado",
          value: function AbreChamado(info) {
            return this._http.get(this.Url + "chamado.php?cd_cliente=".concat(localStorage.getItem('codCliente'), "&info=").concat(info, "&numero=").concat(localStorage.getItem('nro_telefone'))); //localStorage.getItem('nro_telefone')
          }
        }, {
          key: "RetornaChamado",
          value: function RetornaChamado(status) {
            return this._http.get("http://186.251.225.174/api_mobile/retorna_chamados.php?codigo=".concat(localStorage.getItem('codCliente'), "&status=").concat(status)); //localStorage.getItem('nro_telefone')
          }
        }, {
          key: "RetornaFaturas",
          value: function RetornaFaturas() {
            return this._http.get("http://186.251.225.174/api_mobile/retorna_faturas.php?codigo=".concat(localStorage.getItem('codCliente'))); //localStorage.getItem('nro_telefone')
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=extrato-extrato-module-es5.js.map