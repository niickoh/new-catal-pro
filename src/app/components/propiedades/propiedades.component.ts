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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactoArrendarComponent } from '../modals/contacto-arrendar/contacto-arrendar.component';


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

  constructor(
    private modalService: NgbModal
  ) {}
  tipoPropiedad(tipoPropiedad: string = '') {
    this.tipoSeleccionado = tipoPropiedad;
  }
  contacto() {
    const modalRef = this.modalService.open(ContactoArrendarComponent, {backdrop: 'static', size: 'lg'});
  }
}
