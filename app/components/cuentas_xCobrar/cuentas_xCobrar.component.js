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
var core_1 = require("@angular/core");
var get_company_service_1 = require('../../service/get/get-company.service');
var CuentasxCobrar = (function () {
    function CuentasxCobrar(_companyService) {
        this._companyService = _companyService;
    }
    CuentasxCobrar.prototype.ngOnInit = function () {
        var _this = this;
        this.getCompanies();
        setTimeout(function () {
            _this.getDomData();
        }, 200);
    };
    CuentasxCobrar.prototype.getDomData = function () {
        var name_1 = document.getElementById('nombre-1').innerText, name_2 = document.getElementById('nombre-2').innerText, name_3 = document.getElementById('nombre-3').innerText, name_4 = document.getElementById('nombre-4').innerText, name_5 = document.getElementById('nombre-5').innerText, name_6 = document.getElementById('nombre-6').innerText, name_7 = document.getElementById('nombre-7').innerText, name_8 = document.getElementById('nombre-8').innerText, name_9 = document.getElementById('nombre-9').innerText, name_10 = document.getElementById('nombre-10').innerText;
        var cuenta_1 = parseInt(document.getElementById('cuenta-1').innerText), cuenta_2 = parseInt(document.getElementById('cuenta-2').innerText), cuenta_3 = parseInt(document.getElementById('cuenta-3').innerText), cuenta_4 = parseInt(document.getElementById('cuenta-4').innerText), cuenta_5 = parseInt(document.getElementById('cuenta-5').innerText), cuenta_6 = parseInt(document.getElementById('cuenta-6').innerText), cuenta_7 = parseInt(document.getElementById('cuenta-7').innerText), cuenta_8 = parseInt(document.getElementById('cuenta-8').innerText), cuenta_9 = parseInt(document.getElementById('cuenta-9').innerText), cuenta_10 = parseInt(document.getElementById('cuenta-10').innerText);
        var cuentas = [
            cuenta_1,
            cuenta_2,
            cuenta_3,
            cuenta_4,
            cuenta_5,
            cuenta_6,
            cuenta_7,
            cuenta_8,
            cuenta_9,
            cuenta_10
        ];
        var mayor = cuentas[0];
        var id = 0;
        for (var i = 0; i <= 9; i++) {
            if (cuentas[i] >= mayor) {
                mayor = cuentas[i];
                id = i;
            }
        }
        var mayor_name = document.getElementById('nombre-' + id).innerText;
        document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
        document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
        document.getElementById("nombreMayor").innerHTML = mayor_name;
    };
    CuentasxCobrar.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    CuentasxCobrar = __decorate([
        core_1.Component({
            templateUrl: './app/templates/activos/cuentas-xCobrar.html',
            providers: [get_company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], CuentasxCobrar);
    return CuentasxCobrar;
}());
exports.CuentasxCobrar = CuentasxCobrar;
//# sourceMappingURL=cuentas_xCobrar.component.js.map