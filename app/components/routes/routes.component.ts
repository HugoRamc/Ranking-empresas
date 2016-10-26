import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CompanyElement } from '../company_element/company_element.component';
import { ActivoCirculante } from '../activo_circulante/activo_circulante.component';
import { ActivoFijo } from '../activo_fijo/activo_fijo.component';
import { ActivoDiferido } from '../activo_diferido/activo_diferido.component';
import { Inventario } from '../inventario/inventario.component';
import { CuentasxCobrar } from '../cuentas_xCobrar/cuentas_xCobrar.component';



const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'compañia/:id', component: CompanyElement },
  { path: 'activo-circulante', component: ActivoCirculante },
  { path: 'activo-fijo', component: ActivoFijo },
  { path: 'activo-diferido', component: ActivoDiferido },
  { path: 'inventario', component: Inventario },
  { path: 'cuentas-por-cobrar', component: CuentasxCobrar }
];

export const appRouting = RouterModule.forRoot(appRoutes);