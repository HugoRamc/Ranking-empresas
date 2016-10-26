// Modules
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Routing
import { appRouting } from './components/routes/routes.component';

// Components
import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { CompanyElement } from './components/company_element/company_element.component';
import { ActivoCirculante } from './components/activo_circulante/activo_circulante.component';
import { ActivoFijo } from './components/activo_fijo/activo_fijo.component';
import { ActivoDiferido } from './components/activo_diferido/activo_diferido.component';
import { Inventario } from './components/inventario/inventario.component';
import { CuentasxCobrar } from './components/cuentas_xCobrar/cuentas_xCobrar.component';

@NgModule({
    imports: [ BrowserModule, HttpModule, appRouting ],
    providers: [],
    declarations: [ 
    	AppComponent,
    	HomeComponent,
    	CompanyElement,
    	ActivoCirculante,
        ActivoFijo,
        ActivoDiferido,
        Inventario,
        CuentasxCobrar
    ],
    bootstrap: [ AppComponent ]
})
export default class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

function postCompanies() {
	
}