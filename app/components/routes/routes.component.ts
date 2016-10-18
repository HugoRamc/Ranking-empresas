import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CompanyElement } from '../company_element/company_element.component';
import { ActivoCirculante } from '../activo_circulante/activo_circulante.component';


const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'compañia/:id', component: CompanyElement },
  { path: 'activo-circulante', component: ActivoCirculante}
];

export const appRouting = RouterModule.forRoot(appRoutes);