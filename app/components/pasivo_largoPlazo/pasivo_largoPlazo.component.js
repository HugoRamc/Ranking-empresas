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
var PasivoLargoPlazo = (function () {
    function PasivoLargoPlazo(_companyService) {
        this._companyService = _companyService;
    }
    PasivoLargoPlazo.prototype.ngOnInit = function () {
        var _this = this;
        this.getCompanies();
        setTimeout(function () {
            _this.getDomData();
        }, 200);
    };
    PasivoLargoPlazo.prototype.getDomData = function () {
        var name_1 = document.getElementById('nombre-1').innerText, name_2 = document.getElementById('nombre-2').innerText, name_3 = document.getElementById('nombre-3').innerText, name_4 = document.getElementById('nombre-4').innerText, name_5 = document.getElementById('nombre-5').innerText, name_6 = document.getElementById('nombre-6').innerText, name_7 = document.getElementById('nombre-7').innerText, name_8 = document.getElementById('nombre-8').innerText, name_9 = document.getElementById('nombre-9').innerText, name_10 = document.getElementById('nombre-10').innerText;
        var pasivo_1 = parseInt(document.getElementById('pasivo-1').innerText), pasivo_2 = parseInt(document.getElementById('pasivo-2').innerText), pasivo_3 = parseInt(document.getElementById('pasivo-3').innerText), pasivo_4 = parseInt(document.getElementById('pasivo-4').innerText), pasivo_5 = parseInt(document.getElementById('pasivo-5').innerText), pasivo_6 = parseInt(document.getElementById('pasivo-6').innerText), pasivo_7 = parseInt(document.getElementById('pasivo-7').innerText), pasivo_8 = parseInt(document.getElementById('pasivo-8').innerText), pasivo_9 = parseInt(document.getElementById('pasivo-9').innerText), pasivo_10 = parseInt(document.getElementById('pasivo-10').innerText);
        var pasivos = [
            pasivo_1,
            pasivo_2,
            pasivo_3,
            pasivo_4,
            pasivo_5,
            pasivo_6,
            pasivo_7,
            pasivo_8,
            pasivo_9,
            pasivo_10
        ];
        var mayor = pasivos[0];
        var id = 0;
        for (var i = 0; i <= 9; i++) {
            if (pasivos[i] >= mayor) {
                mayor = pasivos[i];
                id = i;
            }
        }
        var mayor_name = document.getElementById('nombre-' + id).innerText;
        document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
        document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
        document.getElementById("nombreMayor").innerHTML = mayor_name;
    };
    PasivoLargoPlazo.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    PasivoLargoPlazo = __decorate([
        core_1.Component({
            templateUrl: './app/templates/pasivos/pasivo-largoPlazo.html',
            providers: [get_company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], PasivoLargoPlazo);
    return PasivoLargoPlazo;
}());
exports.PasivoLargoPlazo = PasivoLargoPlazo;
//# sourceMappingURL=pasivo_largoPlazo.component.js.map