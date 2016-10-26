import { Component }        from "@angular/core";
import { CompanyService }   from '../../service/get/get-company.service';
import { Company }          from '../../constructors/company/company';


@Component({
  templateUrl: './app/templates/activos/inventario.html',
  providers: [CompanyService]
})

export class Inventario {
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

        let inventario_1 = parseInt(document.getElementById('inventario-1').innerText),
            inventario_2 = parseInt(document.getElementById('inventario-2').innerText),
            inventario_3 = parseInt(document.getElementById('inventario-3').innerText),
            inventario_4 = parseInt(document.getElementById('inventario-4').innerText),
            inventario_5 = parseInt(document.getElementById('inventario-5').innerText),
            inventario_6 = parseInt(document.getElementById('inventario-6').innerText),
            inventario_7 = parseInt(document.getElementById('inventario-7').innerText),
            inventario_8 = parseInt(document.getElementById('inventario-8').innerText),
            inventario_9 = parseInt(document.getElementById('inventario-9').innerText),
            inventario_10 = parseInt(document.getElementById('inventario-10').innerText);
        
        let inventarios = [
            inventario_1,
            inventario_2,
            inventario_3,
            inventario_4,
            inventario_5,
            inventario_6,
            inventario_7,
            inventario_8,
            inventario_9,
            inventario_10
        ];
        let mayor = inventarios[0];
        let id = 0;
        for (var i = 0; i <= 9; i++) {
            if(inventarios[i] >= mayor) {
                mayor = inventarios[i];
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