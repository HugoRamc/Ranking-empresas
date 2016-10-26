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
var Ventas = (function () {
    function Ventas(_companyService) {
        this._companyService = _companyService;
    }
    Ventas.prototype.ngOnInit = function () {
        var _this = this;
        this.getCompanies();
        setTimeout(function () {
            _this.getDomData();
        }, 200);
    };
    Ventas.prototype.getDomData = function () {
        var name_1 = document.getElementById('nombre-1').innerText, name_2 = document.getElementById('nombre-2').innerText, name_3 = document.getElementById('nombre-3').innerText, name_4 = document.getElementById('nombre-4').innerText, name_5 = document.getElementById('nombre-5').innerText, name_6 = document.getElementById('nombre-6').innerText, name_7 = document.getElementById('nombre-7').innerText, name_8 = document.getElementById('nombre-8').innerText, name_9 = document.getElementById('nombre-9').innerText, name_10 = document.getElementById('nombre-10').innerText;
        var venta_1 = parseInt(document.getElementById('venta-1').innerText), venta_2 = parseInt(document.getElementById('venta-2').innerText), venta_3 = parseInt(document.getElementById('venta-3').innerText), venta_4 = parseInt(document.getElementById('venta-4').innerText), venta_5 = parseInt(document.getElementById('venta-5').innerText), venta_6 = parseInt(document.getElementById('venta-6').innerText), venta_7 = parseInt(document.getElementById('venta-7').innerText), venta_8 = parseInt(document.getElementById('venta-8').innerText), venta_9 = parseInt(document.getElementById('venta-9').innerText), venta_10 = parseInt(document.getElementById('venta-10').innerText);
        var ventas = [
            venta_1,
            venta_2,
            venta_3,
            venta_4,
            venta_5,
            venta_6,
            venta_7,
            venta_8,
            venta_9,
            venta_10
        ];
        var mayor = ventas[0];
        var id = 0;
        for (var i = 0; i <= 9; i++) {
            if (ventas[i] >= mayor) {
                mayor = ventas[i];
                id = i;
            }
        }
        var mayor_name = document.getElementById('nombre-' + id).innerText;
        document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
        document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
        document.getElementById("nombreMayor").innerHTML = mayor_name;
    };
    Ventas.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    Ventas = __decorate([
        core_1.Component({
            templateUrl: './app/templates/estado/venta.html',
            providers: [get_company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], Ventas);
    return Ventas;
}());
exports.Ventas = Ventas;
//# sourceMappingURL=ventas.component.js.map