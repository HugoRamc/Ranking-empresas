"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../home/home.component');
var company_element_component_1 = require('../company_element/company_element.component');
var activo_circulante_component_1 = require('../activo_circulante/activo_circulante.component');
var activo_fijo_component_1 = require('../activo_fijo/activo_fijo.component');
var activo_diferido_component_1 = require('../activo_diferido/activo_diferido.component');
var inventario_component_1 = require('../inventario/inventario.component');
var cuentas_xCobrar_component_1 = require('../cuentas_xCobrar/cuentas_xCobrar.component');
var pasivo_circulante_component_1 = require('../pasivo_circulante/pasivo_circulante.component');
var pasivo_largoPlazo_component_1 = require('../pasivo_largoPlazo/pasivo_largoPlazo.component');
var capital_contable_component_1 = require('../capital_contable/capital_contable.component');
var ventas_component_1 = require('../ventas/ventas.component');
var costo_ventas_component_1 = require('../costo_ventas/costo_ventas.component');
var utilidad_impuestos_component_1 = require('../utilidad_impuestos/utilidad_impuestos.component');
var utilidad_neta_component_1 = require('../utilidad_neta/utilidad_neta.component');
var impuesto_component_1 = require('../impuesto/impuesto.component');
var ranking_component_1 = require('../ranking/ranking.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'compañia/:id', component: company_element_component_1.CompanyElement },
    { path: 'activo-circulante', component: activo_circulante_component_1.ActivoCirculante },
    { path: 'activo-fijo', component: activo_fijo_component_1.ActivoFijo },
    { path: 'activo-diferido', component: activo_diferido_component_1.ActivoDiferido },
    { path: 'inventario', component: inventario_component_1.Inventario },
    { path: 'cuentas-por-cobrar', component: cuentas_xCobrar_component_1.CuentasxCobrar },
    { path: 'pasivo-circulante', component: pasivo_circulante_component_1.PasivoCirculante },
    { path: 'pasivo-largo-plazo', component: pasivo_largoPlazo_component_1.PasivoLargoPlazo },
    { path: 'capital-contable', component: capital_contable_component_1.CapitalContable },
    { path: 'ventas', component: ventas_component_1.Ventas },
    { path: 'costo-de-ventas', component: costo_ventas_component_1.CostoVentas },
    { path: 'utilidad-antes-de-impuestos', component: utilidad_impuestos_component_1.UtilidadImpuestos },
    { path: 'utilidad-neta', component: utilidad_neta_component_1.UtilidadNeta },
    { path: 'impuesto', component: impuesto_component_1.Impuesto },
    { path: 'ranking', component: ranking_component_1.Ranking }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routes.component.js.map