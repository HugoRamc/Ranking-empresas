import { Component }        from "@angular/core";
import { CompanyService }   from '../../service/get/get-company.service';
import { Company }          from '../../constructors/company/company';


@Component({
  templateUrl: './app/templates/pasivos/pasivo-circulante.html',
  providers: [CompanyService]
})

export class PasivoCirculante {
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

        let pasivo_1 = parseInt(document.getElementById('pasivo-1').innerText),
            pasivo_2 = parseInt(document.getElementById('pasivo-2').innerText),
            pasivo_3 = parseInt(document.getElementById('pasivo-3').innerText),
            pasivo_4 = parseInt(document.getElementById('pasivo-4').innerText),
            pasivo_5 = parseInt(document.getElementById('pasivo-5').innerText),
            pasivo_6 = parseInt(document.getElementById('pasivo-6').innerText),
            pasivo_7 = parseInt(document.getElementById('pasivo-7').innerText),
            pasivo_8 = parseInt(document.getElementById('pasivo-8').innerText),
            pasivo_9 = parseInt(document.getElementById('pasivo-9').innerText),
            pasivo_10 = parseInt(document.getElementById('pasivo-10').innerText);
        
        let pasivos = [
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
        let mayor = pasivos[0];
        let id = 0;
        for (var i = 0; i <= 9; i++) {
            if(pasivos[i] >= mayor) {
                mayor = pasivos[i];
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