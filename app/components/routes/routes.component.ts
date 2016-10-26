import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CompanyElement } from '../company_element/company_element.component';
import { ActivoCirculante } from '../activo_circulante/activo_circulante.component';
import { ActivoFijo } from '../activo_fijo/activo_fijo.component';
import { ActivoDiferido } from '../activo_diferido/activo_diferido.component';
import { Inventario } from '../inventario/inventario.component';
import { CuentasxCobrar } from '../cuentas_xCobrar/cuentas_xCobrar.component';
import { PasivoCirculante } from '../pasivo_circulante/pasivo_circulante.component';
import { PasivoLargoPlazo } from '../pasivo_largoPlazo/pasivo_largoPlazo.component';
import { CapitalContable } from '../capital_contable/capital_contable.component';
import { Ventas } from '../ventas/ventas.component';
import { CostoVentas } from '../costo_ventas/costo_ventas.component';
import { UtilidadImpuestos } from '../utilidad_impuestos/utilidad_impuestos.component';
import { UtilidadNeta } from '../utilidad_neta/utilidad_neta.component';
import { Impuesto } from '../impuesto/impuesto.component';
import { Ranking } from '../ranking/ranking.component';








const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'compañia/:id', component: CompanyElement },
  { path: 'activo-circulante', component: ActivoCirculante },
  { path: 'activo-fijo', component: ActivoFijo },
  { path: 'activo-diferido', component: ActivoDiferido },
  { path: 'inventario', component: Inventario },
  { path: 'cuentas-por-cobrar', component: CuentasxCobrar },
  { path: 'pasivo-circulante', component: PasivoCirculante },
  { path: 'pasivo-largo-plazo', component: PasivoLargoPlazo },
  { path: 'capital-contable', component: CapitalContable },
  { path: 'ventas', component: Ventas },
  { path: 'costo-de-ventas', component: CostoVentas },
  { path: 'utilidad-antes-de-impuestos', component: UtilidadImpuestos },
  { path: 'utilidad-neta', component: UtilidadNeta },
  { path: 'impuesto', component: Impuesto },
  { path: 'ranking', component: Ranking }
];

export const appRouting = RouterModule.forRoot(appRoutes);