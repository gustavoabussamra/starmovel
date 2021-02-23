(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pacote-pacote-module"],{

/***/ "./src/app/pacote/pacote-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pacote/pacote-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PacotePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacotePageRoutingModule", function() { return PacotePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pacote_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pacote.page */ "./src/app/pacote/pacote.page.ts");




const routes = [
    {
        path: '',
        component: _pacote_page__WEBPACK_IMPORTED_MODULE_3__["PacotePage"]
    }
];
let PacotePageRoutingModule = class PacotePageRoutingModule {
};
PacotePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PacotePageRoutingModule);



/***/ }),

/***/ "./src/app/pacote/pacote.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pacote/pacote.module.ts ***!
  \*****************************************/
/*! exports provided: PacotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacotePageModule", function() { return PacotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pacote_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pacote-routing.module */ "./src/app/pacote/pacote-routing.module.ts");
/* harmony import */ var _pacote_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pacote.page */ "./src/app/pacote/pacote.page.ts");







let PacotePageModule = class PacotePageModule {
};
PacotePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pacote_routing_module__WEBPACK_IMPORTED_MODULE_5__["PacotePageRoutingModule"]
        ],
        declarations: [_pacote_page__WEBPACK_IMPORTED_MODULE_6__["PacotePage"]]
    })
], PacotePageModule);



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
//# sourceMappingURL=pacote-pacote-module-es2015.js.map