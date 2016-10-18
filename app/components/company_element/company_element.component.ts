import { Component } 	from '@angular/core';
import {CompanyService} from '../../service/get/get-company.service';
import { Company } 		from '../../constructors/company/company';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './app/templates/company_element.html',
  providers: [CompanyService]
})

export class CompanyElement {
	company: Company[];
	errorString: string;
	id: any;
	paramsSub: any;

	constructor(private _companyService: CompanyService, private activatedRoute: ActivatedRoute) {}
	ngOnInit() {
		this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
		this.getCompanyElement(this.id - 1);

	}

	ngOnDestroy() {
    	this.paramsSub.unsubscribe();
  	}
  	
	getCompanyElement(id) {
		this._companyService.getCompanyElement(id)
							.subscribe(
								company => this.company = company,
								error => this.errorString = <any> error
							);
	}
}
