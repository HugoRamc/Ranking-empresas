import { Component }        from "@angular/core";
import { CompanyService }   from '../../service/get/get-company.service';
import { Company }          from '../../constructors/company/company';


@Component({
  templateUrl: './app/templates/estado/costo-venta.html',
  providers: [CompanyService]
})

export class CostoVentas {
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

        let costo_1 = parseInt(document.getElementById('costo-1').innerText),
            costo_2 = parseInt(document.getElementById('costo-2').innerText),
            costo_3 = parseInt(document.getElementById('costo-3').innerText),
            costo_4 = parseInt(document.getElementById('costo-4').innerText),
            costo_5 = parseInt(document.getElementById('costo-5').innerText),
            costo_6 = parseInt(document.getElementById('costo-6').innerText),
            costo_7 = parseInt(document.getElementById('costo-7').innerText),
            costo_8 = parseInt(document.getElementById('costo-8').innerText),
            costo_9 = parseInt(document.getElementById('costo-9').innerText),
            costo_10 = parseInt(document.getElementById('costo-10').innerText);
        
        let costos = [
            costo_1,
            costo_2,
            costo_3,
            costo_4,
            costo_5,
            costo_6,
            costo_7,
            costo_8,
            costo_9,
            costo_10
        ];
        let mayor = costos[0];
        let id = 0;
        for (var i = 0; i <= 9; i++) {
            if(costos[i] >= mayor) {
                mayor = costos[i];
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