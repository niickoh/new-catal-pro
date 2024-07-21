import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { GalleriaModule } from 'primeng/galleria';
import { ServiciosService } from '../../services/servicios.service';

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
    MatChipsModule,
    GalleriaModule
  ],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css',
  providers: [ServiciosService]
})
export class PropiedadesComponent implements OnInit {
  tipoSeleccionado:string = '';
  displayNuble: boolean = false;
  displayLaRioja: boolean = false;

  imagesNuble: any;
  imagesLaRioja: any;

  responsiveOptions: any[] = [
    {
        breakpoint: '1500px',
        numVisible: 4
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(
    private modalService: NgbModal,
    private servicios: ServiciosService
  ) {}
  ngOnInit() {
    // this.servicios.getImages().then((images) => (this.images = images));

    this.imagesNuble = [
      {
        itemImageSrc: '../../../assets/images/propiedades/dpto-nuble-1.jpg',
        thumbnailImageSrc: '../../../assets/images/propiedades/dpto-nuble-1.jpg',
        alt: 'Imagen 1',
        title: 'Depto-1'
      },
      {
        itemImageSrc: '../../../assets/images/propiedades/dpto-nuble-2.jpg',
        thumbnailImageSrc: '../../../assets/images/propiedades/dpto-nuble-2.jpg',
        alt: 'Imagen 2',
        title: 'Depto-2'
      },
      {
        itemImageSrc: '../../../assets/images/propiedades/dpto-nuble-3.jpg',
        thumbnailImageSrc: '../../../assets/images/propiedades/dpto-nuble-3.jpg',
        alt: 'Imagen 3',
        title: 'Depto-3'
      },
      {
        itemImageSrc: '../../../assets/images/propiedades/dpto-nuble-4.jpeg',
        thumbnailImageSrc: '../../../assets/images/propiedades/dpto-nuble-4.jpeg',
        alt: 'Imagen 4',
        title: 'Depto-4'
      }
    ];
    this.imagesLaRioja = [
      {
        itemImageSrc: '../../../assets/images/propiedades/casa-larioja-1.jpg',
        thumbnailImageSrc: '../../../assets/images/propiedades/casa-larioja-1.jpg',
        alt: 'Imagen 1',
        title: 'Casa-1'
      },
      {
        itemImageSrc: '../../../assets/images/propiedades/casa-larioja-2.jpg',
        thumbnailImageSrc: '../../../assets/images/propiedades/casa-larioja-2.jpg',
        alt: 'Imagen 2',
        title: 'Casa-2'
      },
      {
        itemImageSrc: '../../../assets/images/propiedades/casa-larioja-3.jpg',
        thumbnailImageSrc: '../../../assets/images/propiedades/casa-larioja-3.jpg',
        alt: 'Imagen 3',
        title: 'Casa-3'
      },
      {
        itemImageSrc: '../../../assets/images/propiedades/casa-larioja-4.jpg',
        thumbnailImageSrc: '../../../assets/images/propiedades/casa-larioja-4.jpg',
        alt: 'Imagen 4',
        title: 'Casa-4'
      }
    ];

  }
  tipoPropiedad(tipoPropiedad: string = '') {
    this.tipoSeleccionado = tipoPropiedad;
  }
  contacto() {
    const modalRef = this.modalService.open(ContactoArrendarComponent, {backdrop: 'static', size: 'lg'});
  }
}
