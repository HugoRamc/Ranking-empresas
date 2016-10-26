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
var Impuesto = (function () {
    function Impuesto(_companyService) {
        this._companyService = _companyService;
    }
    Impuesto.prototype.ngOnInit = function () {
        var _this = this;
        this.getCompanies();
        setTimeout(function () {
            _this.getDomData();
        }, 200);
    };
    Impuesto.prototype.getDomData = function () {
        var name_1 = document.getElementById('nombre-1').innerText, name_2 = document.getElementById('nombre-2').innerText, name_3 = document.getElementById('nombre-3').innerText, name_4 = document.getElementById('nombre-4').innerText, name_5 = document.getElementById('nombre-5').innerText, name_6 = document.getElementById('nombre-6').innerText, name_7 = document.getElementById('nombre-7').innerText, name_8 = document.getElementById('nombre-8').innerText, name_9 = document.getElementById('nombre-9').innerText, name_10 = document.getElementById('nombre-10').innerText;
        var impuesto_1 = parseFloat(document.getElementById('impuesto-1').innerText), impuesto_2 = parseFloat(document.getElementById('impuesto-2').innerText), impuesto_3 = parseFloat(document.getElementById('impuesto-3').innerText), impuesto_4 = parseFloat(document.getElementById('impuesto-4').innerText), impuesto_5 = parseFloat(document.getElementById('impuesto-5').innerText), impuesto_6 = parseFloat(document.getElementById('impuesto-6').innerText), impuesto_7 = parseFloat(document.getElementById('impuesto-7').innerText), impuesto_8 = parseFloat(document.getElementById('impuesto-8').innerText), impuesto_9 = parseFloat(document.getElementById('impuesto-9').innerText), impuesto_10 = parseFloat(document.getElementById('impuesto-10').innerText);
        var impuestos = [
            impuesto_1,
            impuesto_2,
            impuesto_3,
            impuesto_4,
            impuesto_5,
            impuesto_6,
            impuesto_7,
            impuesto_8,
            impuesto_9,
            impuesto_10
        ];
        var mayor = impuestos[0];
        var id = 0;
        for (var i = 0; i <= 9; i++) {
            if (impuestos[i] >= mayor) {
                mayor = impuestos[i];
                id = i;
            }
        }
        var mayor_name = document.getElementById('nombre-' + id).innerText;
        document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
        document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
        document.getElementById("nombreMayor").innerHTML = mayor_name;
    };
    Impuesto.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    Impuesto = __decorate([
        core_1.Component({
            templateUrl: './app/templates/estado/impuesto.html',
            providers: [get_company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], Impuesto);
    return Impuesto;
}());
exports.Impuesto = Impuesto;
//# sourceMappingURL=impuesto.component.js.map