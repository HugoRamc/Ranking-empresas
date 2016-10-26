import { Component }        from "@angular/core";
import { CompanyService }   from '../../service/get/get-company.service';
import { Company }          from '../../constructors/company/company';


@Component({
  templateUrl: './app/templates/estado/venta.html',
  providers: [CompanyService]
})

export class Ventas {
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

        let venta_1 = parseInt(document.getElementById('venta-1').innerText),
            venta_2 = parseInt(document.getElementById('venta-2').innerText),
            venta_3 = parseInt(document.getElementById('venta-3').innerText),
            venta_4 = parseInt(document.getElementById('venta-4').innerText),
            venta_5 = parseInt(document.getElementById('venta-5').innerText),
            venta_6 = parseInt(document.getElementById('venta-6').innerText),
            venta_7 = parseInt(document.getElementById('venta-7').innerText),
            venta_8 = parseInt(document.getElementById('venta-8').innerText),
            venta_9 = parseInt(document.getElementById('venta-9').innerText),
            venta_10 = parseInt(document.getElementById('venta-10').innerText);
        
        let ventas = [
            venta_1,
            venta_2,
            venta_3,
            venta_4,
            venta_5,
            venta_6,
            venta_7,
            venta_8,
            venta_9,
            venta_10
        ];
        let mayor = ventas[0];
        let id = 0;
        for (var i = 0; i <= 9; i++) {
            if(ventas[i] >= mayor) {
                mayor = ventas[i];
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