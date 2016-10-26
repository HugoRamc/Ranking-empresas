import { Component }        from "@angular/core";
import { CompanyService }   from '../../service/get/get-company.service';
import { Company }          from '../../constructors/company/company';


@Component({
  templateUrl: './app/templates/activos/cuentas-xCobrar.html',
  providers: [CompanyService]
})

export class CuentasxCobrar {
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

        let cuenta_1 = parseInt(document.getElementById('cuenta-1').innerText),
            cuenta_2 = parseInt(document.getElementById('cuenta-2').innerText),
            cuenta_3 = parseInt(document.getElementById('cuenta-3').innerText),
            cuenta_4 = parseInt(document.getElementById('cuenta-4').innerText),
            cuenta_5 = parseInt(document.getElementById('cuenta-5').innerText),
            cuenta_6 = parseInt(document.getElementById('cuenta-6').innerText),
            cuenta_7 = parseInt(document.getElementById('cuenta-7').innerText),
            cuenta_8 = parseInt(document.getElementById('cuenta-8').innerText),
            cuenta_9 = parseInt(document.getElementById('cuenta-9').innerText),
            cuenta_10 = parseInt(document.getElementById('cuenta-10').innerText);
        
        let cuentas = [
            cuenta_1,
            cuenta_2,
            cuenta_3,
            cuenta_4,
            cuenta_5,
            cuenta_6,
            cuenta_7,
            cuenta_8,
            cuenta_9,
            cuenta_10
        ];
        let mayor = cuentas[0];
        let id = 0;
        for (var i = 0; i <= 9; i++) {
            if(cuentas[i] >= mayor) {
                mayor = cuentas[i];
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