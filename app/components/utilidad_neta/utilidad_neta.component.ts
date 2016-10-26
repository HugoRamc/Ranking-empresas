import { Component }        from "@angular/core";
import { CompanyService }   from '../../service/get/get-company.service';
import { Company }          from '../../constructors/company/company';


@Component({
  templateUrl: './app/templates/estado/utilidad-neta.html',
  providers: [CompanyService]
})

export class UtilidadNeta {
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

        let utilidad_1 = parseInt(document.getElementById('utilidad-1').innerText),
            utilidad_2 = parseInt(document.getElementById('utilidad-2').innerText),
            utilidad_3 = parseInt(document.getElementById('utilidad-3').innerText),
            utilidad_4 = parseInt(document.getElementById('utilidad-4').innerText),
            utilidad_5 = parseInt(document.getElementById('utilidad-5').innerText),
            utilidad_6 = parseInt(document.getElementById('utilidad-6').innerText),
            utilidad_7 = parseInt(document.getElementById('utilidad-7').innerText),
            utilidad_8 = parseInt(document.getElementById('utilidad-8').innerText),
            utilidad_9 = parseInt(document.getElementById('utilidad-9').innerText),
            utilidad_10 = parseInt(document.getElementById('utilidad-10').innerText);
        
        let utilidads = [
            utilidad_1,
            utilidad_2,
            utilidad_3,
            utilidad_4,
            utilidad_5,
            utilidad_6,
            utilidad_7,
            utilidad_8,
            utilidad_9,
            utilidad_10
        ];
        let mayor = utilidads[0];
        let id = 0;
        for (var i = 0; i <= 9; i++) {
            if(utilidads[i] >= mayor) {
                mayor = utilidads[i];
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