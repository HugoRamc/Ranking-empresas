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
var UtilidadImpuestos = (function () {
    function UtilidadImpuestos(_companyService) {
        this._companyService = _companyService;
    }
    UtilidadImpuestos.prototype.ngOnInit = function () {
        var _this = this;
        this.getCompanies();
        setTimeout(function () {
            _this.getDomData();
        }, 200);
    };
    UtilidadImpuestos.prototype.getDomData = function () {
        var name_1 = document.getElementById('nombre-1').innerText, name_2 = document.getElementById('nombre-2').innerText, name_3 = document.getElementById('nombre-3').innerText, name_4 = document.getElementById('nombre-4').innerText, name_5 = document.getElementById('nombre-5').innerText, name_6 = document.getElementById('nombre-6').innerText, name_7 = document.getElementById('nombre-7').innerText, name_8 = document.getElementById('nombre-8').innerText, name_9 = document.getElementById('nombre-9').innerText, name_10 = document.getElementById('nombre-10').innerText;
        var utilidad_1 = parseInt(document.getElementById('utilidad-1').innerText), utilidad_2 = parseInt(document.getElementById('utilidad-2').innerText), utilidad_3 = parseInt(document.getElementById('utilidad-3').innerText), utilidad_4 = parseInt(document.getElementById('utilidad-4').innerText), utilidad_5 = parseInt(document.getElementById('utilidad-5').innerText), utilidad_6 = parseInt(document.getElementById('utilidad-6').innerText), utilidad_7 = parseInt(document.getElementById('utilidad-7').innerText), utilidad_8 = parseInt(document.getElementById('utilidad-8').innerText), utilidad_9 = parseInt(document.getElementById('utilidad-9').innerText), utilidad_10 = parseInt(document.getElementById('utilidad-10').innerText);
        var utilidads = [
            utilidad_1,
            utilidad_2,
            utilidad_3,
            utilidad_4,
            utilidad_5,
            utilidad_6,
            utilidad_7,
            utilidad_8,
            utilidad_9,
            utilidad_10
        ];
        var mayor = utilidads[0];
        var id = 0;
        for (var i = 0; i <= 9; i++) {
            if (utilidads[i] >= mayor) {
                mayor = utilidads[i];
                id = i;
            }
        }
        var mayor_name = document.getElementById('nombre-' + id).innerText;
        document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
        document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
        document.getElementById("nombreMayor").innerHTML = mayor_name;
    };
    UtilidadImpuestos.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    UtilidadImpuestos = __decorate([
        core_1.Component({
            templateUrl: './app/templates/estado/utilidad-impuestos.html',
            providers: [get_company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], UtilidadImpuestos);
    return UtilidadImpuestos;
}());
exports.UtilidadImpuestos = UtilidadImpuestos;
//# sourceMappingURL=utilidad_impuestos.component.js.map