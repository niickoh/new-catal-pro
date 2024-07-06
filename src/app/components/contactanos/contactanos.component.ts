import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent
  ],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  economicIndicators: any[] = [];
}
