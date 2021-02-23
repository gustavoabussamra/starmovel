(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\" mode=\"ios\">\n  <ion-content>\n    <ion-header translucent=\"true\" class=\"ion-no-border\">\n      <ion-toolbar>\n        <ion-title style=\"background-color: #fd8215; padding: 30px;\" color=\"light\">DADOS</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <div class=\"curve curve-bottom\">\n      <div style=\"padding: 1%;\"></div>\n      <div class=\"curve-sub curve-bottom-sub background-branco\">\n        <div *ngFor=\"let Dados of dados\">\n          <ion-card>\n            <ion-card-header color=\"light\">\n              <ion-card-subtitle>Dados Cadastrais</ion-card-subtitle>\n            </ion-card-header>\n            <ion-list>\n              <ion-item (click)=\"presentToast('Nome do Assinante: ', Dados.nome)\">\n                <ion-label class=\"font\">\n                  <ion-icon name=\"person\"></ion-icon>\n                  {{Dados.nome}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item (click)=\"presentToast('Cpf do Assinante: ', Dados.cpf)\">\n                <ion-label class=\"font\">\n                  <ion-icon name=\"card\"></ion-icon>\n                  {{Dados.cpf}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item lines=\"none\" (click)=\"presentToast('Data do Cadastro: ', FormataData(Dados.data_cadastro))\">\n                <ion-label class=\"font\">\n                  <ion-icon name=\"today\"></ion-icon>\n                  {{FormataData(Dados.data_cadastro)}}\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header color=\"light\">\n              <ion-card-subtitle>Dados do Plano</ion-card-subtitle>\n            </ion-card-header>\n            <ion-list>\n              <ion-item (click)=\"presentToast('Número de Contrato: ', Dados.numero_contrato)\">\n                <ion-label class=\"font\">\n                  <ion-icon name=\"reader\"></ion-icon>\n                  {{Dados.numero_contrato}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item (click)=\"presentToast('Plano do Assinante: ', plano)\">\n                <ion-label class=\"font\">\n                  <ion-icon name=\"cellular\"></ion-icon>\n                  {{plano}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item (click)=\"presentToast('Número do SimCard: ', Dados.num_card)\">\n                <ion-label class=\"font\">\n                  <ion-icon name=\"card\"></ion-icon>\n                  {{Dados.num_card}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item (click)=\"presentToast('Data de Ativação do Chip: ', Dados.data_ativacao)\">\n                <ion-label class=\"font\">\n                  <ion-icon name=\"today\"></ion-icon>\n                  {{Dados.data_ativacao}}\n                </ion-label>\n              </ion-item>\n\n              <ion-item lines=\"none\" (click)=\"presentToast('Status do Chip: ', Dados.status)\">\n                <ion-label class=\"font\">\n                  <ion-icon name=\"alert-circle\"></ion-icon>\n                  {{Dados.status}}\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n        </div>\n        <ion-card color=\"light\">\n          <ion-item lines=\"none\" (click)=\"Sair()\">\n            <ion-icon name=\"exit-outline\"></ion-icon>\n            <ion-label style=\"margin-left: 8px;\">\n              Sair\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </div>\n    </div>\n  </ion-content>\n</ion-menu>\n\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore-container.component.scss */ "./src/app/explore-container/explore-container.component.scss")).default]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "./src/app/explore-container/explore-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "./src/app/explore-container/explore-container.component.ts");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.curve {\n  margin-top: 10px;\n  background-color: #fdb97d;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-sub {\n  background-color: white;\n  width: 100%;\n  height: 120%;\n}\n\ndiv.curve-bottom {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\ndiv.curve-bottom-sub {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\n.branco {\n  color: white;\n}\n\nion-content {\n  --ion-background-color: #fd8215;\n}\n\n.background-branco {\n  --ion-background-color: white;\n}\n\n.list {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.font {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmN1cnZlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiOTdkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5jdXJ2ZS1zdWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwJTtcclxufVxyXG5cclxuZGl2LmN1cnZlLWJvdHRvbSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG5kaXYuY3VydmUtYm90dG9tLXN1YiB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uYnJhbmNvIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZkODIxNTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtYnJhbmNvIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");





let MenuComponent = class MenuComponent {
    constructor(menu, toastController, router, apiService, navController, alertController) {
        this.menu = menu;
        this.toastController = toastController;
        this.router = router;
        this.apiService = apiService;
        this.navController = navController;
        this.alertController = alertController;
        this.retornaDados();
    }
    ngOnInit() {
        this.retornaDados();
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
    presentToast(x, n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: x + n,
                duration: 2000,
                color: "dark",
                mode: "ios"
            });
            toast.present();
        });
    }
    Sair() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                subHeader: 'STARNET MOVEL',
                message: 'Você deseja Sair?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Confirmar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            //localStorage.clear();
                            localStorage.removeItem('nro_telefone');
                            //localStorage.removeItem('config');
                            localStorage.removeItem('contrato');
                            localStorage.removeItem('num_card');
                            localStorage.removeItem('dados');
                            localStorage.removeItem('codCliente');
                            this.navController.navigateRoot("login"); //this.router.navigate(["login"]); //this.router.navigateByUrl("login");
                        })
                    }
                ],
                mode: "ios"
            });
            yield alert.present();
        });
    }
    FormataData(data) {
        var newDate = data.replace(/-/gi, '');
        var ano = newDate.substring(0, 4);
        var mes = newDate.substring(4, 6);
        var dia = newDate.substring(6, 8);
        var dataFormt = `${dia}/${mes}/${ano}`;
        return dataFormt;
    }
    retornaDados() {
        this.apiService.retornaDados(localStorage.getItem('codCliente')).subscribe((data) => {
            this.dados = data;
            if (data[0].produto == 493) {
                this.plano = "Plano 5 GB";
            }
            if (data[0].produto == 265) {
                this.plano = "Plano 10 GB";
            }
            if (data[0].produto == 488) {
                this.plano = "Plano 15 GB";
            }
            if (data[0].produto == 489) {
                this.plano = "Plano 30 GB";
            }
            if (data[0].produto == 2536) {
                this.plano = "Plano 60 GB";
            }
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")).default]
    })
], MenuComponent);



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
//# sourceMappingURL=default~tab1-tab1-module~tab3-tab3-module-es2015.js.map