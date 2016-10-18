// Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { FormsModule }  from '@angular/forms';

// Routings
import { appRouting } from './components/routes/routes.component';


//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyElement } from './components/company_element/company_element.component';
import { ActivoCirculante } from './components/activo_circulante/activo_circulante.component';


@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		appRouting
	],
	declarations: [
		AppComponent,
		HomeComponent,
		CompanyElement,
		ActivoCirculante
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
