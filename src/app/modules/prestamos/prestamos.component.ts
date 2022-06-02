import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MontoBaseService } from 'src/app/services/montoBase.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  formErrors: any;
  usuarioForm !: FormGroup;
  nombre !: AbstractControl;
  correo !: AbstractControl;
  cedula !: AbstractControl;
  valor !: AbstractControl;
  fecha !: AbstractControl;

  montoActual !: number;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private apiService: ApiService,
    public montoBaseService: MontoBaseService,
  ) {
    montoBaseService.sharingObervable.subscribe(res => {
      this.montoActual = res.valor
    })
  }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nombre : ['', Validators.required],
      correo : ['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      cedula : ['', 
        [
          Validators.required
        ]
      ],
      valor : ['', 
        [
          Validators.required,
          Validators.min(10000),
          Validators.max(100000),
        ]
      ],
      fecha : ['']
    });

    this.nombre = this.usuarioForm.controls['nombre'];
    this.correo = this.usuarioForm.controls['correo'];
    this.cedula = this.usuarioForm.controls['cedula'];
    this.valor  = this.usuarioForm.controls['valor'];
    this.fecha  = this.usuarioForm.controls['fecha'];

    this.construirObjetoErrores();
  }

  construirObjetoErrores(): void {
    this.formErrors = {
      nombre: {
        required: 'El nombre es requerido!',
      },
      correo: {
        required: 'El correo es requerido!',
        email: 'El correo no es válido!',
      },
      cedula: {
        required: 'La cedula es requerida!',
      },
      valor: {
        required: 'El valor es requerido!',
        min: 'El valor minimo debe ser 10000',
        max: 'El valor máximo debe ser 100000',
      }
    };
}

  guardarUsuario() {
    if(this.usuarioForm.valid) {
      if(this.creditoAprobado()) {
        if(Number(this.montoActual) >= Number(this.valor.value)) {
          this.usuarioForm.value.pendiente_pagar = 0;
          this.usuarioForm.value.fecha = this.fecha && this.fecha.value !== '' ? String(moment(this.fecha.value).format("Y-MM-DD")) : '';
          this.apiService.postUsuario(this.usuarioForm.value)
            .subscribe({
              next:(res) => {
                this.montoBaseService.calcularMontoBase();
                Swal.fire({
                  icon: 'success',
                  title: 'Crédito aprobado con éxito!'
                }).then((result) => {
                  this.router.navigate(['/solicitudes']);
                })
              },
              error:() => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error al crear el crédito'
                })
              }
            });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'No hay capital base suficiente para solicitudes de prestamos'
          })  
        }
      }else{
        Swal.fire({
          icon: 'error',
          title: 'El crédito no fue aprobado'
        })
      }
    }
  }

  creditoAprobado() {
    return Math.random() < 0.7; //70% probabilidad de que sea true
  }

}
