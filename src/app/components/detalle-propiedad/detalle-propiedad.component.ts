import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-detalle-propiedad',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './detalle-propiedad.component.html',
  styleUrl: './detalle-propiedad.component.css'
})
export class DetallePropiedadComponent {

}
