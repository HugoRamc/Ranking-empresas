import { Component }        from "@angular/core";
import { CompanyService }   from '../../service/get/get-company.service';
import { Company }          from '../../constructors/company/company';


@Component({
  templateUrl: './app/templates/estado/impuesto.html',
  providers: [CompanyService]
})

export class Impuesto {
    companies: Company[];
    errorString: string;

    constructor(private _companyService: CompanyService) {

    }
    ngOnInit() {
        this.getCompanies();
        setTimeout(() => {
            this.getDomData();
        }, 200);

    }


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

        let impuesto_1 = parseFloat(document.getElementById('impuesto-1').innerText),
            impuesto_2 = parseFloat(document.getElementById('impuesto-2').innerText),
            impuesto_3 = parseFloat(document.getElementById('impuesto-3').innerText),
            impuesto_4 = parseFloat(document.getElementById('impuesto-4').innerText),
            impuesto_5 = parseFloat(document.getElementById('impuesto-5').innerText),
            impuesto_6 = parseFloat(document.getElementById('impuesto-6').innerText),
            impuesto_7 = parseFloat(document.getElementById('impuesto-7').innerText),
            impuesto_8 = parseFloat(document.getElementById('impuesto-8').innerText),
            impuesto_9 = parseFloat(document.getElementById('impuesto-9').innerText),
            impuesto_10 = parseFloat(document.getElementById('impuesto-10').innerText);
        
        let impuestos = [
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
        let mayor = impuestos[0];
        let id = 0;
        for (var i = 0; i <= 9; i++) {
            if(impuestos[i] >= mayor) {
                mayor = impuestos[i];
                id = i;
            }
        }
        let mayor_name = document.getElementById('nombre-' + id).innerText;
        document.getElementById("mayorImage").setAttribute("src", "src/img/" + mayor_name + ".png");
        document.getElementById("cuentaMayor").innerHTML = "$" + mayor;
        document.getElementById("nombreMayor").innerHTML = mayor_name;
    }

    getCompanies() {
        this._companyService.getCompanies()
                            .subscribe(
                                companies => this.companies = companies,
                                error => this.errorString = <any> error
                            );
    }

}