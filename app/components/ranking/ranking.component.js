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
var Ranking = (function () {
    function Ranking(_companyService) {
        this._companyService = _companyService;
    }
    Ranking.prototype.ngOnInit = function () {
        this.getCompanies();
        /*
        setTimeout(() => {
            this.getDomData();
        }, 200);
        */
    };
    /*
        getDomData() {
            let name_1 = document.getElementById('nombre-1').innerText,
                name_2 = document.getElementById('nombre-2').innerText,
                name_3 = document.getElementById('nombre-3').innerText,
                name_4 = document.getElementById('nombre-4').innerText,
                name_5 = document.getElementById('nombre-5').innerText,
                name_6 = document.getElementById('nombre-6').innerText,
                name_7 = document.getElementById('nombre-7').innerText,
                name_8 = document.getElementById('nombre-8').innerText,
                name_9 = document.getElementById('nombre-9').innerText,
                name_10 = document.getElementById('nombre-10').innerText;
    
            let activo_1 = parseInt(document.getElementById('activo-1').innerText),
                activo_2 = parseInt(document.getElementById('activo-2').innerText),
                activo_3 = parseInt(document.getElementById('activo-3').innerText),
                activo_4 = parseInt(document.getElementById('activo-4').innerText),
                activo_5 = parseInt(document.getElementById('activo-5').innerText),
                activo_6 = parseInt(document.getElementById('activo-6').innerText),
                activo_7 = parseInt(document.getElementById('activo-7').innerText),
                activo_8 = parseInt(document.getElementById('activo-8').innerText),
                activo_9 = parseInt(document.getElementById('activo-9').innerText),
                activo_10 = parseInt(document.getElementById('activo-10').innerText);
            
            let activos = [
                activo_1,
                activo_2,
                activo_3,
                activo_4,
                activo_5,
                activo_6,
                activo_7,
                activo_8,
                activo_9,
                activo_10
            ];
            let mayor = activos[0];
            let id = 0;
            for (var i = 0; i <= 9; i++) {
                if(activos[i] >= mayor) {
                    mayor = activos[i];
                    id = i;
                }
            }
            let mayor_name = document.getElementById('nombre-' + id).innerText;
            document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
            document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
            document.getElementById("nombreMayor").innerHTML = mayor_name;
        }
    */
    Ranking.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    Ranking = __decorate([
        core_1.Component({
            templateUrl: './app/templates/ranking.html',
            providers: [get_company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], Ranking);
    return Ranking;
}());
exports.Ranking = Ranking;
//# sourceMappingURL=ranking.component.js.map