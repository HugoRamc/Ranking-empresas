"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../home/home.component');
var company_element_component_1 = require('../company_element/company_element.component');
var activo_circulante_component_1 = require('../activo_circulante/activo_circulante.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'compañia/:id', component: company_element_component_1.CompanyElement },
    { path: 'activo-circulante', component: activo_circulante_component_1.ActivoCirculante }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routes.component.js.map