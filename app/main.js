"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modules
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// Routing
var routes_component_1 = require('./components/routes/routes.component');
// Components
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var company_element_component_1 = require('./components/company_element/company_element.component');
var activo_circulante_component_1 = require('./components/activo_circulante/activo_circulante.component');
var activo_fijo_component_1 = require('./components/activo_fijo/activo_fijo.component');
var activo_diferido_component_1 = require('./components/activo_diferido/activo_diferido.component');
var inventario_component_1 = require('./components/inventario/inventario.component');
var cuentas_xCobrar_component_1 = require('./components/cuentas_xCobrar/cuentas_xCobrar.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, routes_component_1.appRouting],
            providers: [],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                company_element_component_1.CompanyElement,
                activo_circulante_component_1.ActivoCirculante,
                activo_fijo_component_1.ActivoFijo,
                activo_diferido_component_1.ActivoDiferido,
                inventario_component_1.Inventario,
                cuentas_xCobrar_component_1.CuentasxCobrar
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
function postCompanies() {
}
//# sourceMappingURL=main.js.map