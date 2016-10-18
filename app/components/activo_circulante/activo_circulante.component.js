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
var ActivoCirculante = (function () {
    function ActivoCirculante(_companyService) {
        this._companyService = _companyService;
    }
    ActivoCirculante.prototype.ngOnInit = function () {
        this.getCompanies();
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(this.drawChart);
    };
    ActivoCirculante.prototype.ngAfterContentInit = function () {
    };
    ActivoCirculante.prototype.getCompanies = function () {
        var _this = this;
        this._companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorString = error; });
    };
    ActivoCirculante.prototype.drawChart = function () {
        var name_0 = $('#nombre-0').text(), name_1 = $('#nombre-1').text(), name_2 = $('#nombre-2').text(), name_3 = $('#nombre-3').text(), name_4 = $('#nombre-4').text(), name_5 = $('#nombre-5').text(), name_6 = $('#nombre-6').text(), name_7 = $('#nombre-7').text(), name_8 = $('#nombre-8').text(), name_9 = $('#nombre-9').text();
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            [name_0, parseInt($('#activo-0').text())],
            [name_1, parseInt($('#activo-1').text())],
            [name_2, parseInt($('#activo-2').text())],
            [name_3, parseInt($('#activo-3').text())],
            [name_4, parseInt($('#activo-4').text())],
            [name_5, parseInt($('#activo-5').text())],
            [name_6, parseInt($('#activo-6').text())],
            [name_7, parseInt($('#activo-7').text())],
            [name_8, parseInt($('#activo-8').text())],
            [name_9, parseInt($('#activo-9').text())]
        ]);
        // Set chart options
        var options = { 'title': '',
            'width': 800,
            'height': 600 };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    };
    ActivoCirculante = __decorate([
        core_1.Component({
            templateUrl: './app/templates/activos/activo-circulante.html',
            providers: [get_company_service_1.CompanyService],
        }), 
        __metadata('design:paramtypes', [get_company_service_1.CompanyService])
    ], ActivoCirculante);
    return ActivoCirculante;
}());
exports.ActivoCirculante = ActivoCirculante;
//# sourceMappingURL=activo_circulante.component.js.map