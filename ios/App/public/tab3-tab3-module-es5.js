(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-menu></app-menu>\n\n<ion-content [fullscreen]=\"true\" mode=\"ios\">\n  <ion-header class=\"ion-no-border\" style=\"padding: 10px;\">\n    <ion-toolbar color=\"transparent\">\n      <!-- <ion-icon name=\"person-outline\" slot=\"start\" size=\"large\" (click)=\"openMenu()\" class=\"branco\"></ion-icon> -->\n      <ion-title class=\"branco\">SUPORTE</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div style=\"margin-top: 5%\">\n    <ion-label class=\"branco\"\n      style=\"font-size: 30px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 5%;\">\n      Duvidas Frequentes!\n    </ion-label>\n  </div>\n  <div class=\"curve curve-bottom\">\n    <div style=\"padding: 1%;\"></div>\n    <div class=\"curve-sub curve-bottom-sub background-branco\">\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle style=\"font-size: 15px;\">Configuração APN</ion-card-subtitle>\n        </ion-card-header>\n        <div style=\"padding: 10px;\">\n          <ion-button expand=\"full\" fill=\"outline\" shape=\"round\" (click)=\"presentAlert('apn')\" color=\"laranja\">\n            O que é APN?\n          </ion-button>\n          <ion-button expand=\"full\" fill=\"outline\" shape=\"round\" (click)=\"presentModal('android',16, 'APN no Android')\" color=\"laranja\">\n            <ion-icon name=\"logo-android\" slot=\"end\"></ion-icon>\n            APN no Android\n          </ion-button>\n          <ion-button expand=\"full\" fill=\"outline\" shape=\"round\" (click)=\"presentModal('ios',10, 'APN no IOS')\" color=\"laranja\">\n            <ion-icon name=\"logo-apple\" slot=\"end\"></ion-icon>\n            APN no IOS\n          </ion-button>\n        </div>\n        <ion-card-header>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle style=\"font-size: 15px;\">Selecionar Rede</ion-card-subtitle>\n        </ion-card-header>\n        <div style=\"padding: 10px;\">\n          <ion-button expand=\"full\" fill=\"outline\" shape=\"round\" (click)=\"presentAlert('rede')\" color=\"laranja\">\n            Selecionar Rede\n          </ion-button>\n          <ion-button expand=\"full\" fill=\"outline\" shape=\"round\" (click)=\"presentModal('rede-android',10, 'Rede no Android')\"\n            color=\"laranja\">\n            <ion-icon name=\"logo-android\" slot=\"end\"></ion-icon>\n            Rede no Android\n          </ion-button>\n          <ion-button expand=\"full\" fill=\"outline\" shape=\"round\" (click)=\"presentModal('rede-ios',6, 'Rede no IOS')\" color=\"laranja\">\n            <ion-icon name=\"logo-apple\" slot=\"end\"></ion-icon>\n            Rede no IOS\n          </ion-button>\n        </div>\n        <ion-card-header>\n        </ion-card-header>\n      </ion-card>\n      <br>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"margin: 10px\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button style=\"width: 60px; height: 60px;\"\n       href=\"https://api.whatsapp.com/send?phone=5511984880527&text=Ol%C3%A1,%20me%20chamo%20{{nome}}%20e%20meu%20Cpf%20%C3%A9%20{{cpf}}.%20Gostaria%20de%20falar%20com%20algum%20atendente%20dispon%C3%ADvel\">\n        <ion-icon name=\"logo-whatsapp\" color=\"primary\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button href=\"tel: 08008787985\" style=\"width: 60px; height: 60px;\">\n        <ion-icon name=\"keypad\" color=\"primary\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n\n<!-- <canvas baseChart [datasets]=\"chartData\" [chartType]=\"chartType\" [labels]=\"chartLabels\" [options]=\"chartOptions\"></canvas> -->";
      /***/
    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../menu/menu.component */
      "./src/app/menu/menu.component.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"]],
        exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.curve {\n  margin-top: 10px;\n  background-color: #fdb97d;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-sub {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.curve-bottom {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\ndiv.curve-bottom-sub {\n  border-top-left-radius: 100%;\n  border-top-right-radius: 0%;\n}\n\n.branco {\n  color: white;\n}\n\nion-content {\n  --ion-background-color: #fd8215;\n}\n\n.background-branco {\n  --ion-background-color: white;\n}\n\n.list {\n  font-size: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBRUksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUtBO0VBRUksNEJBQUE7RUFDQSwyQkFBQTtBQUhKOztBQU1BO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtBQUhKOztBQU1BO0VBRUksK0JBQUE7QUFKSjs7QUFRQTtFQUNJLDZCQUFBO0FBTEo7O0FBUUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY3VydmUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGI5N2Q7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbmRpdi5jdXJ2ZS1zdWIge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuZGl2LmN1cnZlLWJvdHRvbSB7XHJcblxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwJTtcclxufVxyXG5cclxuZGl2LmN1cnZlLWJvdHRvbS1zdWIge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwJTtcclxufVxyXG5cclxuLmJyYW5jbyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmQ4MjE1O1xyXG5cclxufVxyXG5cclxuLmJhY2tncm91bmQtYnJhbmNvIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
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


      var _suporte_suporte_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../suporte/suporte.page */
      "./src/app/suporte/suporte.page.ts");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(menu, router, navController, alertController, modalController) {
          _classCallCheck(this, Tab3Page);

          this.menu = menu;
          this.router = router;
          this.navController = navController;
          this.alertController = alertController;
          this.modalController = modalController;
          this.nome = JSON.parse(localStorage.getItem('dados'))[0].nome;
          this.cpf = JSON.parse(localStorage.getItem('dados'))[0].cpf;
        }

        _createClass(Tab3Page, [{
          key: "openMenu",
          value: function openMenu() {
            this.menu.open('start');
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(config) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _alert;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(config == "apn")) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Descrição',
                        message: 'Sigla para Access Point Name (ponto de acesso). ' + 'Esta configuração deve ser feita para que sua internet movel funcione corretamente. ' + 'Este recurso intermédia a conexão do seu celular com a rede da operadora',
                        buttons: ['OK'],
                        mode: "ios"
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                      if (!(config == "rede")) {
                        _context.next = 12;
                        break;
                      }

                      _context.next = 9;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Descrição',
                        message: 'Você pode configurar seu aparelho para selecionar uma rede automaticamente, ' + 'ou então, você mesmo pode selecionar uma rede. Se você selecionar manualmente ' + 'seu aparelho irá perder a conexão quando a rede selecionada estiver fora de alcance.',
                        buttons: ['OK'],
                        mode: "ios"
                      });

                    case 9:
                      _alert = _context.sent;
                      _context.next = 12;
                      return _alert.present();

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentModal",
          value: function presentModal(so, n, titulo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _suporte_suporte_page__WEBPACK_IMPORTED_MODULE_4__["SuportePage"],
                        cssClass: 'my-custom-class',
                        componentProps: {
                          'sistema': so,
                          'n': n,
                          'titulo': titulo
                        },
                        mode: "ios"
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      })], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map