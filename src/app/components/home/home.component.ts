import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Mousewheel, Keyboard, Autoplay]);
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ServiciosService } from '../../services/servicios.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactoArrendarComponent } from '../modals/contacto-arrendar/contacto-arrendar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    RouterModule,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  economicIndicators: any[] = [];
  formContacto:FormGroup = this.formBuilder.group({});

  constructor(
    private servicios: ServiciosService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this.formContacto = this.formBuilder.group({
      nombreCompleto: [null],
      email: [null],
      telefono: [null],
      mensaje: [null]
    });
  }
  ngAfterViewInit() {
    var interleaveOffset = 0;

    var swiperOptions = {
      loop: true,
      speed: 1000,
      grabCursor: true,
      watchSlidesProgress: true,
      mousewheelControl: true,
      keyboardControl: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 3000,  // tiempo en milisegundos entre cada deslizamiento automático
        disableOnInteraction: false // permite que continúe el autoplay después de la interacción del usuario
      },
      on: {
        progress: function() {
          const swiper:any = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            const slideProgress = swiper.slides[i].progress;
            const innerOffset = swiper.width * interleaveOffset;
            const innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function() {
          const swiper:any = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed:any) {
          const swiper:any = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        }
      }
    };

    const swiper = new Swiper(".swiper-container", swiperOptions);
  }

  ngOnInit() {
    this.servicios.indicadores().subscribe({
      next: res => {
        console.log('res', res);
        this.economicIndicators = [res];
      },
      error: error => {
        console.log('error', error);
        
      }
    });
  }

  enviarMensaje() {
    this.spinner.show();
    console.log('datos formulario', this.formContacto);
    if (!this.formContacto.value.nombreCompleto || !this.formContacto.value.email || 
        !this.formContacto.value.telefono || !this.formContacto.value.mensaje) {
          this.spinner.hide();   
          this.toastr.error("Debes completar el formulario para enviar el mensaje")
          return;
        }
    const datos = {
      datosContacto : {
        nombreCompleto: this.formContacto.value.nombreCompleto,
        email: this.formContacto.value.email,
        telefono: this.formContacto.value.telefono,
        mensaje: this.formContacto.value.mensaje
      }
    }
    this.servicios.registro(datos).subscribe({
      next: res => {
        this.spinner.hide();
        console.log('res.message', res.message);
        this.toastr.success(res.message);
        this.formContacto.reset();
      },
      error: (error:HttpErrorResponse) => {
        console.log('error', error);
        this.spinner.hide();        
      }
    });
  }
  formularioContacto(servicio:string = '', eslogan:string = '') {
    const modalRef = this.modalService.open(ContactoArrendarComponent, {backdrop: 'static', size: 'lg'});
    modalRef.componentInstance.titulo = servicio;
    modalRef.componentInstance.eslogan = eslogan;
  }
}
