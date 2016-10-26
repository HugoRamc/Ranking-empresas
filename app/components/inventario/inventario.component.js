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
var Inventario = (function () {
    function Inventario(_companyService) {
        this._companyService = _companyService;
    }
    Inventario.prototype.ngOnInit = function () {
        var _this = this;
        this.getCompanies();
        setTimeout(function () {
            _this.getDomData();
        }, 200);
    };
    Inventario.prototype.getDomData = function () {
        var name_1 = document.getElementById('nombre-1').innerText, name_2 = document.getElementById('nombre-2').innerText, name_3 = document.getElementById('nombre-3').innerText, name_4 = document.getElementById('nombre-4').innerText, name_5 = document.getElementById('nombre-5').innerText, name_6 = document.getElementById('nombre-6').innerText, name_7 = document.getElementById('nombre-7').innerText, name_8 = document.getElementById('nombre-8').innerText, name_9 = document.getElementById('nombre-9').innerText, name_10 = document.getElementById('nombre-10').innerText;
        var inventario_1 = parseInt(document.getElementById('inventario-1').innerText), inventario_2 = parseInt(document.getElementById('inventario-2').innerText), inventario_3 = parseInt(document.getElementById('inventario-3').innerText), inventario_4 = parseInt(document.getElementById('inventario-4').innerText), inventario_5 = parseInt(document.getElementById('inventario-5').innerText), inventario_6 = parseInt(document.getElementById('inventario-6').innerText), inventario_7 = parseInt(document.getElementById('inventario-7').innerText), inventario_8 = parseInt(document.getElementById('inventario-8').innerText), inventario_9 = parseInt(document.getElementById('inventario-9').innerText), inventario_10 = parseInt(document.getElementById('inventario-10').innerText);
        var inventarios = [
            inventario_1,
            inventario_2,
            inventario_3,
            inventario_4,
            inventario_5,
            inventario_6,
            inventario_7,
            inventario_8,
            inventario_9,
            inventario_10
        ];
        var mayor = inventarios[0];
        var id = 0;
        for (var i = 0; i <= 9; i++) {
            if (inventarios[i] >= mayor) {
                mayor = inventarios[i];
                id = i;
            }
        }
        var mayor_name = document.getElementById('nombre-' + id).innerText;
        document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
        document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
        document.getElementById("nombreMayor").innerHTML = mayor_name;
    };
    Inventario.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    Inventario = __decorate([
        core_1.Component({
            templateUrl: './app/templates/activos/inventario.html',
            providers: [get_company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], Inventario);
    return Inventario;
}());
exports.Inventario = Inventario;
//# sourceMappingURL=inventario.component.js.map