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
var CostoVentas = (function () {
    function CostoVentas(_companyService) {
        this._companyService = _companyService;
    }
    CostoVentas.prototype.ngOnInit = function () {
        var _this = this;
        this.getCompanies();
        setTimeout(function () {
            _this.getDomData();
        }, 200);
    };
    CostoVentas.prototype.getDomData = function () {
        var name_1 = document.getElementById('nombre-1').innerText, name_2 = document.getElementById('nombre-2').innerText, name_3 = document.getElementById('nombre-3').innerText, name_4 = document.getElementById('nombre-4').innerText, name_5 = document.getElementById('nombre-5').innerText, name_6 = document.getElementById('nombre-6').innerText, name_7 = document.getElementById('nombre-7').innerText, name_8 = document.getElementById('nombre-8').innerText, name_9 = document.getElementById('nombre-9').innerText, name_10 = document.getElementById('nombre-10').innerText;
        var costo_1 = parseInt(document.getElementById('costo-1').innerText), costo_2 = parseInt(document.getElementById('costo-2').innerText), costo_3 = parseInt(document.getElementById('costo-3').innerText), costo_4 = parseInt(document.getElementById('costo-4').innerText), costo_5 = parseInt(document.getElementById('costo-5').innerText), costo_6 = parseInt(document.getElementById('costo-6').innerText), costo_7 = parseInt(document.getElementById('costo-7').innerText), costo_8 = parseInt(document.getElementById('costo-8').innerText), costo_9 = parseInt(document.getElementById('costo-9').innerText), costo_10 = parseInt(document.getElementById('costo-10').innerText);
        var costos = [
            costo_1,
            costo_2,
            costo_3,
            costo_4,
            costo_5,
            costo_6,
            costo_7,
            costo_8,
            costo_9,
            costo_10
        ];
        var mayor = costos[0];
        var id = 0;
        for (var i = 0; i <= 9; i++) {
            if (costos[i] >= mayor) {
                mayor = costos[i];
                id = i;
            }
        }
        var mayor_name = document.getElementById('nombre-' + id).innerText;
        document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
        document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
        document.getElementById("nombreMayor").innerHTML = mayor_name;
    };
    CostoVentas.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    CostoVentas = __decorate([
        core_1.Component({
            templateUrl: './app/templates/estado/costo-venta.html',
            providers: [get_company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], CostoVentas);
    return CostoVentas;
}());
exports.CostoVentas = CostoVentas;
//# sourceMappingURL=costo_ventas.component.js.map