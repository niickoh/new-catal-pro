import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contactanos', component: ContactanosComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
