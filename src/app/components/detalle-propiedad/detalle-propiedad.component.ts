import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-detalle-propiedad',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatGridListModule,
    ImageModule
  ],
  templateUrl: './detalle-propiedad.component.html',
  styleUrl: './detalle-propiedad.component.css'
})
export class DetallePropiedadComponent {
  tipoSeleccionado:string = '';
  tiles: any[] = [
    {text: 'One', cols: 1, rows: 4, color: 'lightblue', image: '../../../assets/images/propiedades/casa-pudahuel-1.jpeg'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', image: '../../../assets/images/propiedades/casa-pudahuel-2.jpeg'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink', image: '../../../assets/images/propiedades/casa-pudahuel-3.jpeg'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1', image: '../../../assets/images/propiedades/casa-pudahuel-4.jpeg'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1', image: '../../../assets/images/propiedades/casa-pudahuel-5.jpeg'},
  ];

  tipoPropiedad(tipoPropiedad: string = '') {
    this.tipoSeleccionado = tipoPropiedad;
  }

}
