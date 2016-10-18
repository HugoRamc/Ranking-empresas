import { Component } 	from '@angular/core';
import {CompanyService} from '../../service/get/get-company.service';
import { Company } 		from '../../constructors/company/company';



@Component({
  templateUrl: './app/templates/home.html',

  providers: [CompanyService]
})

export class HomeComponent { 
	companies: Company[];
	errorString: string;


	constructor(private _companyService: CompanyService) {

	}
	
	ngOnInit() {
		this.getCompanies();
	}

	getCompanies() {
		this._companyService.getCompanies()
							.subscribe(
								companies => this.companies = companies,
								error => this.errorString = <any> error
							);

	}
	/*
	postCompanies() {
		this._companyService.postCompanies()
							.subscribe(
								//companies => this.companies = companies,
								error => this.errorString = <any> error
							);
	}
	*/
}