"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../home/home.component');
var company_element_component_1 = require('../company_element/company_element.component');
var activo_circulante_component_1 = require('../activo_circulante/activo_circulante.component');
var activo_fijo_component_1 = require('../activo_fijo/activo_fijo.component');
var activo_diferido_component_1 = require('../activo_diferido/activo_diferido.component');
var inventario_component_1 = require('../inventario/inventario.component');
var cuentas_xCobrar_component_1 = require('../cuentas_xCobrar/cuentas_xCobrar.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'compañia/:id', component: company_element_component_1.CompanyElement },
    { path: 'activo-circulante', component: activo_circulante_component_1.ActivoCirculante },
    { path: 'activo-fijo', component: activo_fijo_component_1.ActivoFijo },
    { path: 'activo-diferido', component: activo_diferido_component_1.ActivoDiferido },
    { path: 'inventario', component: inventario_component_1.Inventario },
    { path: 'cuentas-por-cobrar', component: cuentas_xCobrar_component_1.CuentasxCobrar }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routes.component.js.map