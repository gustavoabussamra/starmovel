(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chamado-chamado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar color=\"laranja\">\n    <ion-buttons>\n      <ion-back-button color=\"light\" text=\"Voltar\">\n      </ion-back-button>\n      <ion-title class=\"branco\">STARNET</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" mode=\"ios\">\n  <div style=\"margin-top: 5%\">\n    <ion-label class=\"branco\"\n      style=\"font-size: 30px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 5%;\">\n      Abrir Chamado!\n    </ion-label>\n  </div>\n  <div class=\"curve curve-bottom\">\n    <div style=\"padding: 1%;\"></div>\n    <div class=\"curve-sub curve-bottom-sub background-branco\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Mensagem</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <form (ngSubmit)=\"SendChamado()\" #enviar=\"ngForm\">\n            <ion-list>\n              <ion-item>\n                <ion-label class=\"font\">\n                  <ion-icon name=\"chatbox\"></ion-icon>\n                </ion-label>\n                <ion-textarea [(ngModel)]=\"mensagem\" name=\"mensagem\"></ion-textarea>\n              </ion-item>\n            </ion-list>\n            <div class=\"ion-text-center\" *ngIf=\"erro; else elseBlock\">\n              <br>\n              <ion-text color=\"laranja\">{{erro}}</ion-text>\n            </div>\n            <br>\n            <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" color=\"laranja\" (click)=\"enviar.ngSubmit.emit()\">\n              ENVIAR\n            </ion-button>\n          </form>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>\n            CHAMADOS\n            <ion-segment style=\"margin-top: 10px;\" value=\"aberto\">\n              <ion-segment-button value=\"aberto\" (click)=\"RetornaChamado('N')\">\n                <ion-label>ABERTOS</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"finalizado\" (click)=\"RetornaChamado('S')\">\n                <ion-label>ENCERRADOS</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card style=\"margin-top: -5px;\" *ngFor=\"let chamados of Chamados\">\n          <div *ngIf=\"chamados.protocolo && !load\">\n            <ion-card-header>\n              <ion-card-subtitle>\n                <ion-row>\n                  <ion-col style=\"text-align: left\">\n                    Hora {{chamados.hr_abertura}}\n                    Data {{FormataData(chamados.dt_abertura)}}\n                  </ion-col>\n                  <ion-col style=\"text-align: right;\">\n                    Protocolo {{chamados.protocolo}}\n                  </ion-col>\n                </ion-row>\n              </ion-card-subtitle>\n\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-row>\n                <ion-col>\n                  {{chamados.info_cliente}}\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </div>\n        </ion-card>\n\n        <ion-card style=\"margin-top: -5px;\" *ngIf=\"!Chamados && !load\" >\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                Não possui chamados abertos no momento!\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-card>\n\n      <div class=\"progress-pie-chart\" style=\"background-color: #fd8215; margin-top: 300px;\" *ngIf=\"load\">\n        <div class=\"load\" style=\"margin-top: 250px;\">\n          <hr />\n          <hr />\n          <hr />\n          <hr />\n        </div>\n      </div>\n      <br>\n      <br>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/chamado/chamado-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/chamado/chamado-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChamadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoPageRoutingModule", function() { return ChamadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chamado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chamado.page */ "./src/app/chamado/chamado.page.ts");




const routes = [
    {
        path: '',
        component: _chamado_page__WEBPACK_IMPORTED_MODULE_3__["ChamadoPage"]
    }
];
let ChamadoPageRoutingModule = class ChamadoPageRoutingModule {
};
ChamadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChamadoPageRoutingModule);



/***/ }),

/***/ "./src/app/chamado/chamado.module.ts":
/*!*******************************************!*\
  !*** ./src/app/chamado/chamado.module.ts ***!
  \*******************************************/
/*! exports provided: ChamadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoPageModule", function() { return ChamadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chamado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chamado-routing.module */ "./src/app/chamado/chamado-routing.module.ts");
/* harmony import */ var _chamado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chamado.page */ "./src/app/chamado/chamado.page.ts");







let ChamadoPageModule = class ChamadoPageModule {
};
ChamadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chamado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChamadoPageRoutingModule"]
        ],
        declarations: [_chamado_page__WEBPACK_IMPORTED_MODULE_6__["ChamadoPage"]]
    })
], ChamadoPageModule);



/***/ }),

/***/ "./src/app/chamado/chamado.page.scss":
/*!*******************************************!*\
  !*** ./src/app/chamado/chamado.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.curve {\n  margin-top: 10px;\n  background-color: #fdb97d;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-sub {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-bottom {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\ndiv.curve-bottom-sub {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\n.branco {\n  color: white;\n}\n\nion-content {\n  --ion-background-color: #fd8215;\n}\n\n.background-branco {\n  --ion-background-color: white;\n}\n\n.list {\n  font-size: 20px;\n  font-weight: bold;\n}\n\nbody {\n  background: #ECF0F1;\n}\n\n.load {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /*change these sizes to fit into your project*/\n  width: 100px;\n  height: 100px;\n}\n\n.load hr {\n  border: 0;\n  margin: 0;\n  width: 40%;\n  height: 40%;\n  position: absolute;\n  border-radius: 50%;\n  -webkit-animation: spin 2s ease infinite;\n          animation: spin 2s ease infinite;\n}\n\n.load :first-child {\n  background: #fd8215;\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s;\n}\n\n.load :nth-child(2) {\n  background: #fdb97d;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.load :nth-child(3) {\n  background: #fd8215;\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n.load :last-child {\n  background: #fdb97d;\n}\n\n@-webkit-keyframes spin {\n  0%, 100% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(160%);\n  }\n  50% {\n    transform: translate(160%, 160%);\n  }\n  75% {\n    transform: translate(0, 160%);\n  }\n}\n\n@keyframes spin {\n  0%, 100% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(160%);\n  }\n  50% {\n    transform: translate(160%, 160%);\n  }\n  75% {\n    transform: translate(0, 160%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbWFkby9jaGFtYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFJQTtFQUFLLG1CQUFBO0FBQUw7O0FBRUE7RUFBTSxrQkFBQTtFQUFrQixRQUFBO0VBQVEsU0FBQTtFQUFTLGdDQUFBO0VBQ3ZDLDhDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFLRjs7QUFIQTtFQUFTLFNBQUE7RUFBUyxTQUFBO0VBQVMsVUFBQTtFQUFVLFdBQUE7RUFBVyxrQkFBQTtFQUFrQixrQkFBQTtFQUFrQix3Q0FBQTtVQUFBLGdDQUFBO0FBYXBGOztBQVhBO0VBQW1CLG1CQUFBO0VBQW1CLDhCQUFBO1VBQUEsc0JBQUE7QUFnQnRDOztBQWZBO0VBQW9CLG1CQUFBO0VBQW1CLDRCQUFBO1VBQUEsb0JBQUE7QUFvQnZDOztBQW5CQTtFQUFvQixtQkFBQTtFQUFtQiw4QkFBQTtVQUFBLHNCQUFBO0FBd0J2Qzs7QUF2QkE7RUFBa0IsbUJBQUE7QUEyQmxCOztBQXpCQTtFQUNFO0lBQVEsdUJBQUE7RUE2QlI7RUE1QkE7SUFBSSwwQkFBQTtFQStCSjtFQTlCQTtJQUFJLGdDQUFBO0VBaUNKO0VBaENBO0lBQUksNkJBQUE7RUFtQ0o7QUFDRjs7QUF4Q0E7RUFDRTtJQUFRLHVCQUFBO0VBNkJSO0VBNUJBO0lBQUksMEJBQUE7RUErQko7RUE5QkE7SUFBSSxnQ0FBQTtFQWlDSjtFQWhDQTtJQUFJLDZCQUFBO0VBbUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGFtYWRvL2NoYW1hZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmN1cnZlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiOTdkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5jdXJ2ZS1zdWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2LmN1cnZlLWJvdHRvbSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG5kaXYuY3VydmUtYm90dG9tLXN1YiB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uYnJhbmNvIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZkODIxNTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtYnJhbmNvIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tIExPQUQgLS0tLS0tLS0tLS0tLy9cclxuICBcclxuYm9keXtiYWNrZ3JvdW5kOiNFQ0YwRjF9XHJcblxyXG4ubG9hZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLypjaGFuZ2UgdGhlc2Ugc2l6ZXMgdG8gZml0IGludG8geW91ciBwcm9qZWN0Ki9cclxuICB3aWR0aDoxMDBweDtcclxuICBoZWlnaHQ6MTAwcHg7XHJcbn1cclxuLmxvYWQgaHJ7Ym9yZGVyOjA7bWFyZ2luOjA7d2lkdGg6NDAlO2hlaWdodDo0MCU7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7YW5pbWF0aW9uOnNwaW4gMnMgZWFzZSBpbmZpbml0ZX1cclxuXHJcbi5sb2FkIDpmaXJzdC1jaGlsZHtiYWNrZ3JvdW5kOiNmZDgyMTU7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfVxyXG4ubG9hZCA6bnRoLWNoaWxkKDIpe2JhY2tncm91bmQ6I2ZkYjk3ZDthbmltYXRpb24tZGVsYXk6LTFzfVxyXG4ubG9hZCA6bnRoLWNoaWxkKDMpe2JhY2tncm91bmQ6I2ZkODIxNTthbmltYXRpb24tZGVsYXk6LTAuNXN9XHJcbi5sb2FkIDpsYXN0LWNoaWxke2JhY2tncm91bmQ6I2ZkYjk3ZH1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbntcclxuICAwJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9XHJcbiAgMjUle3RyYW5zZm9ybTp0cmFuc2xhdGUoMTYwJSl9XHJcbiAgNTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMTYwJSwgMTYwJSl9XHJcbiAgNzUle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMTYwJSl9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/chamado/chamado.page.ts":
/*!*****************************************!*\
  !*** ./src/app/chamado/chamado.page.ts ***!
  \*****************************************/
/*! exports provided: ChamadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoPage", function() { return ChamadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");




let ChamadoPage = class ChamadoPage {
    constructor(apiService, alertController, modalController, loadingController) {
        this.apiService = apiService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.load = false;
        this.RetornaChamado('N');
        this.presentLoading();
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
    SendChamado() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.mensagem) {
                this.erro = "Preencha o campo de Mensagem!";
            }
            else {
                this.erro = null;
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Confirmar?',
                    message: 'Deseja abrir esse chamado?',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary'
                        },
                        {
                            text: 'Enviar',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.Load.present();
                                this.apiService.AbreChamado(this.mensagem)
                                    .subscribe(data => {
                                    this.Load.dismiss();
                                    if (data.status == "OK") {
                                        this.AlertMensagem('Seu chamado foi aberto com sucesso!');
                                        this.mensagem = "";
                                        this.RetornaChamado('N');
                                    }
                                    else {
                                        this.AlertMensagem('Erro ao enviar um chamado, entre em contato conosco!');
                                    }
                                });
                            })
                        }
                    ],
                    mode: "ios"
                });
                yield alert.present();
            }
        });
    }
    RetornaChamado(status) {
        this.load = true;
        this.apiService.RetornaChamado(status).subscribe(data => {
            this.Chamados = data;
            this.load = false;
            console.log(data);
        });
    }
    AlertMensagem(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Abertura de Chamado',
                subHeader: 'Status',
                message: msg,
                buttons: ['OK'],
                mode: "ios"
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Load = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Por Favor, Aguarde...',
                mode: "ios"
            });
        });
    }
    FormataTexto(x) {
        return x.substring(61).split("+").join(" ");
    }
    FormataData(data) {
        var newDate = data.replace(/-/gi, '');
        var ano = newDate.substring(0, 4);
        var mes = newDate.substring(4, 6);
        var dia = newDate.substring(6, 8);
        var dataFormt = `${dia}/${mes}`;
        return dataFormt;
    }
};
ChamadoPage.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ChamadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chamado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chamado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chamado.page.scss */ "./src/app/chamado/chamado.page.scss")).default]
    })
], ChamadoPage);



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ApiService = class ApiService {
    constructor(_http) {
        this._http = _http;
        this.Url = 'http://186.251.225.174/api_mobile/';
    }
    retornaDados(codCliente) {
        return this._http.get(this.Url + `retorna_cadastro.php?codigo=${codCliente}`);
    }
    retornaPlano(codCliente) {
        return this._http.get(this.Url + `retorna_plano.php?codigo=${codCliente}`);
    }
    Login(usuario, senha) {
        return this._http.get(this.Url + `login_mk_movel.php?usuario=${usuario}&senha=${senha}`);
    }
    Extrato(dtInicial, dtFinal, contrato) {
        return this._http.get(this.Url + `extrato.php?data_inicial=${dtInicial}&data_final=${dtFinal}&contrato=${contrato}`);
    }
    AtivarSimCard(card) {
        return this._http.get(this.Url + `ativar.php?card=${card}&contrato=${localStorage.getItem('contrato')}`);
    }
    ConsultarSaldo(contrato) {
        return this._http.get(this.Url + `saldo.php?contrato=${contrato}`);
    }
    AddPacotes(qtd, info) {
        return this._http.get(this.Url + `comprar_pacote.php?card=${localStorage.getItem('num_card')}&qtd=${qtd}&contrato=${localStorage.getItem('contrato')}&cd_cliente=${localStorage.getItem('codCliente')}&info=${info}&numero=${localStorage.getItem('nro_telefone')}`);
        //localStorage.getItem('nro_telefone')
    }
    AbreChamado(info) {
        return this._http.get(this.Url + `chamado.php?cd_cliente=${localStorage.getItem('codCliente')}&info=${info}&numero=${localStorage.getItem('nro_telefone')}`);
        //localStorage.getItem('nro_telefone')
    }
    RetornaChamado(status) {
        return this._http.get(`http://186.251.225.174/api_mobile/retorna_chamados.php?codigo=${localStorage.getItem('codCliente')}&status=${status}`);
        //localStorage.getItem('nro_telefone')
    }
    RetornaFaturas() {
        return this._http.get(`http://186.251.225.174/api_mobile/retorna_faturas.php?codigo=${localStorage.getItem('codCliente')}`);
        //localStorage.getItem('nro_telefone')
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ })

}]);
//# sourceMappingURL=chamado-chamado-module-es2015.js.map