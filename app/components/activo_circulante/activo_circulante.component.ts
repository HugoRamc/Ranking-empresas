import { Component } from "@angular/core";
import {CompanyService} from '../../service/get/get-company.service';
import { Company } 		from '../../constructors/company/company';




@Component({
  templateUrl: './app/templates/activos/activo-circulante.html',

  providers: [CompanyService],
})

export class ActivoCirculante {
	companies: Company[];
	errorString: string;

	constructor(private _companyService: CompanyService) {

	}
	ngOnInit() {
		this.getCompanies();
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(this.drawChart);
	}
	ngAfterContentInit() {

	}

	getCompanies() {
		this._companyService.getCompanies()
							.subscribe(
								companies => this.companies = companies,
								error => this.errorString = <any> error
							);
	}
	drawChart() {
		

		var name_0 = $('#nombre-0').text()),
			name_1 = $('#nombre-1').text()),
			name_2 = $('#nombre-2').text()),
			name_3 = $('#nombre-3').text()),
			name_4 = $('#nombre-4').text()),
			name_5 = $('#nombre-5').text()),
			name_6 = $('#nombre-6').text()),
			name_7 = $('#nombre-7').text()),
			name_8 = $('#nombre-8').text()),
			name_9 = $('#nombre-9').text());
			

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
        var options = {'title':'',
                       'width':800,
                       'height':600};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
	}
}