import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../layout/footer/footer.component';
import { RouterModule } from '@angular/router';

import {MatGridListModule} from '@angular/material/grid-list';
import { ImageModule } from 'primeng/image';
import { HeaderComponent } from '../layout/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    RouterModule,
    MatGridListModule,
    ImageModule,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    BadgeModule,
    ButtonModule,
    MatChipsModule
  ],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  tipoSeleccionado:string = '';


  tipoPropiedad(tipoPropiedad: string = '') {
    this.tipoSeleccionado = tipoPropiedad;
  }
}
