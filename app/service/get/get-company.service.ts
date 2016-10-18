import {Injectable} 	from '@angular/core';
import {Http, Response} from '@angular/http';
import { Company } 		from '../../constructors/company/company';
import { Observable } 	from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class CompanyService {
	constructor(private http:Http) {

	}

	private _jsonUrl = 'app/data/company/companies.data.json';

	getCompanies() {
		return this.http.get(this._jsonUrl)
						.map(res => <Company[]> res.json())
						.catch(this.handleError);
	}

	getCompanyElement(id) {
		return this.http.get(this._jsonUrl)
						.map(res => <Company[]> res.json()[id])
						.catch(this.handleError);
	}

/*
	postCompanies() {
		let body = '{}';
 		let headers = new Headers({ 'Content-Type': 'application/json' });
  		let options = new RequestOptions({ headers: headers });


		return this.http.post(this._companiesUrl, body, options)
						.map(this.extractData)
						.catch(this.handleError);
	}
*/

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: Response) {
		console.error(error);
		return Observable.throw(error.json().errir || 'Server error');
	}
}
