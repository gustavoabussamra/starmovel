(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"false\" [scrollEvents]=\"true\" mode=\"ios\">\n  <div class=\"curve curve-top\">\n    <div class=\"curve-sub curve-top-sub\">\n      <div class=\"login\">\n        <img src=\"../../assets/img/starnet-logo.png\" style=\"width: 200px; margin-left: 15px; margin-top: 20%;\">\n        <div class=\"ion-text-center\">\n          <h1 style=\"color: white\">Bem Vindo!</h1>\n        </div>\n      </div>\n      <br>\n      <ion-card style=\"margin-top: 15px; padding: 5px;\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-text-center\">Login</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form (ngSubmit)=\"Login()\" (keyup.enter)=\"Login()\" #login=\"ngForm\">\n            <ion-item style=\"margin-top: 15px;\">\n              <ion-icon name=\"person\" style=\"margin-right: 10px;\"></ion-icon>\n              <ion-input autofocus=\"true\" required=\"true\" [(ngModel)]=\"usuario\" name=\"usuario\" placeholder=\"usuario...\"\n                (ionChange)=\"CloseAlert()\"></ion-input>\n            </ion-item>\n            <ion-item style=\"margin-top: 35px;\">\n              <ion-icon name=\"lock-closed\" style=\"margin-right: 10px;\"></ion-icon>\n              <ion-input required=\"true\" [(ngModel)]=\"senha\" type=\"password\" name=\"senha\" placeholder=\"senha...\"\n                (ionChange)=\"CloseAlert()\">\n              </ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"ion-text-center\" id=\"erro\" style=\"display: none;\">\n              <ion-text style=\"color: #fd8215; margin: 0 auto;\">Úsuario e senha inválido</ion-text>\n            </ion-item>\n            <br>\n            <ion-button type=\"submit\" shape=\"round\" expand=\"full\" fill=\"outline\" color=\"laranja\"\n              [disabled]=\"login.invalid\">ENTRAR</ion-button>\n          </form>\n          <!--\n             <br>\n          <ion-button shape=\"round\" expand=\"full\" fill=\"outline\" color=\"laranja\" (click)=\"login.ngSubmit.emit()\" *ngIf=\"!login.invalid\" >ENTRAR</ion-button>\n          -->\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n  <!-- Footer without a border -->\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <a href=\"https://starnettelecom.com.br/\" style=\"text-decoration: none;\">\n      <ion-title style=\"color: #fd8215\" class=\"ion-text-center\">starnettelecom.com.br</ion-title>\n    </a>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- <canvas baseChart [datasets]=\"chartData\" [chartType]=\"chartType\" [labels]=\"chartLabels\" [options]=\"chartOptions\"></canvas> -->";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".branco {\n  color: white;\n}\n\n.consumo {\n  padding: 6px;\n  border-radius: 23px;\n}\n\ndiv.curve {\n  background-color: #fdb97d;\n  width: 100%;\n  height: 60%;\n}\n\ndiv.curve-sub {\n  background-color: #fd8215;\n  width: 100%;\n  height: 85%;\n}\n\ndiv.curve-top {\n  border-bottom-left-radius: 30%;\n  border-bottom-right-radius: 0%;\n}\n\ndiv.curve-top-sub {\n  border-bottom-left-radius: 30%;\n  border-bottom-right-radius: 0%;\n}\n\nion-content {\n  --ion-background-color: #ffffff;\n}\n\n.login {\n  width: 250px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSwrQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuY28ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29uc3VtbyB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59XHJcblxyXG5kaXYuY3VydmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjk3ZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBcclxufVxyXG5cclxuZGl2LmN1cnZlLXN1YiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ4MjE1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuZGl2LmN1cnZlLXRvcCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMCU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCU7XHJcbn1cclxuXHJcbmRpdi5jdXJ2ZS10b3Atc3ViIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwJTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwJTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxvZ2lue1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/api.service */
      "./src/app/service/api.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(apiService, router, navController, loadingController, modalController, alertController) {
          _classCallCheck(this, LoginPage);

          this.apiService = apiService;
          this.router = router;
          this.navController = navController;
          this.loadingController = loadingController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.usuario = '';
          this.senha = '';
          this.presentLoading();
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.VerificaLogin();
          }
        }, {
          key: "VerificaLogin",
          value: function VerificaLogin() {
            if (localStorage.getItem('codCliente') != null) {
              this.navController.navigateRoot("");
            }
          }
        }, {
          key: "Login",
          value: function Login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.usuario != "" && this.senha != "") {
                        this.Load.present();
                        this.apiService.Login(this.usuario, this.senha).subscribe(function (data) {
                          if (data && data.status == "OK") {
                            localStorage.setItem('codCliente', data.CodigoPessoa);

                            _this.Load.dismiss();

                            _this.navController.navigateRoot(""); //this.router.navigate([""]); //this.router.navigateByUrl("");


                            document.getElementById('erro').style.display = "none";
                            console.log(data.CodigoPessoa);
                          } else {
                            _this.Load.dismiss();

                            document.getElementById('erro').style.display = "block";
                          }
                        }, function (err) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    this.Load.dismiss();
                                    this.AlertMensagem();

                                  case 2:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        });
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Por Favor, Aguarde...',
                        mode: "ios"
                      });

                    case 2:
                      this.Load = _context3.sent;

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "CloseAlert",
          value: function CloseAlert() {
            document.getElementById('erro').style.display = "none";
          }
        }, {
          key: "AlertMensagem",
          value: function AlertMensagem() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Erro de Login!',
                        subHeader: 'Status',
                        message: 'Falha ao realizar Login, verifique sua conexão com a internet!',
                        buttons: ['OK'],
                        mode: "ios"
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
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
//# sourceMappingURL=login-login-module-es5.js.map