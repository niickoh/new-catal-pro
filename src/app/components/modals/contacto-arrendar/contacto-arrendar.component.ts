import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiciosService } from '../../../services/servicios.service';
import { RippleModule } from 'primeng/ripple';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contacto-arrendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ToastModule,
    RippleModule
  ],
  templateUrl: './contacto-arrendar.component.html',
  styleUrl: './contacto-arrendar.component.css',
  providers: [MessageService]
})
export class ContactoArrendarComponent {
  @Input() titulo: string = '';
  @Input() eslogan: string = '';
  submitForm:boolean = false;
  formContacto: FormGroup = this.formBuilder.group({
    nombreCompleto: [''],
    email: ['', Validators.required],
    telefono: ['', Validators.required],
    mensaje: ['', Validators.required]
  });
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private servicios: ServiciosService,
    private toastr: ToastrService
  ) {
    this.formContacto = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  enviarMensaje() {
    this.spinner.show();
    console.log('datos formulario', this.formContacto);
    if (!this.formContacto.value.nombreCompleto || !this.formContacto.value.email ||
        !this.formContacto.value.telefono || !this.formContacto.value.mensaje) {
          this.spinner.hide();
          this.submitForm = true;
          // this.messageService.add({ severity: 'error', summary: '¡Error!', detail: 'Debes completar el formulario para enviar el mensaje' });
          this.toastr.error("Debes completar el formulario para enviar el mensaje");
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
        // this.messageService.add({ severity: 'success', summary: '¡Listo!', detail: res.message });
        this.toastr.success("Datos de contacto enviado correctamente.");
        this.formContacto.reset();
        this.activeModal.close({estado: true});
      },
      error: (error:HttpErrorResponse) => {
        console.log('error', error);
        this.spinner.hide();
      }
    });
  }

}
