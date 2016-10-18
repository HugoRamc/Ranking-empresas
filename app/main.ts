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

@NgModule({
    imports: [ BrowserModule, HttpModule, appRouting ],
    providers: [],
    declarations: [ 
    	AppComponent,
    	HomeComponent,
    	CompanyElement,
    	ActivoCirculante
    ],
    bootstrap: [ AppComponent ]
})
export default class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

function postCompanies() {
	
}