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
import { ActivoFijo } from './components/activo_fijo/activo_fijo.component';
import { ActivoDiferido } from './components/activo_diferido/activo_diferido.component';
import { Inventario } from './components/inventario/inventario.component';
import { CuentasxCobrar } from './components/cuentas_xCobrar/cuentas_xCobrar.component';
import { PasivoCirculante } from './components/pasivo_circulante/pasivo_circulante.component';
import { PasivoLargoPlazo } from './components/pasivo_largoPlazo/pasivo_largoPlazo.component';
import { CapitalContable } from './components/capital_contable/capital_contable.component';
import { Ventas } from './components/ventas/ventas.component';
import { CostoVentas } from './components/costo_ventas/costo_ventas.component';
import { UtilidadImpuestos } from './components/utilidad_impuestos/utilidad_impuestos.component';
import { UtilidadNeta } from './components/utilidad_neta/utilidad_neta.component';
import { Impuesto } from './components/impuesto/impuesto.component';
import { Ranking } from './components/ranking/ranking.component';




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
		ActivoCirculante,
		ActivoFijo,
		ActivoDiferido,
		Inventario,
		CuentasxCobrar,
		PasivoCirculante,
		PasivoLargoPlazo,
		CapitalContable,
		Ventas,
		CostoVentas,
		UtilidadImpuestos,
		UtilidadNeta,
		Impuesto,
		Ranking
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
