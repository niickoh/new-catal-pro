import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { DetallePropiedadComponent } from './components/detalle-propiedad/detalle-propiedad.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contactanos', component: ContactanosComponent},
    {path: 'propiedades', component: PropiedadesComponent},
    {path: 'detalle-propiedad', component: DetallePropiedadComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
