import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MontoBaseService } from 'src/app/services/montoBase.service';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { solicitud } from 'src/app/core/interfaces/solicitudes.interface';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {

  displayedColumns: string[] = ['valor', 'nombre', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private apiService: ApiService,
    public montoBaseService: MontoBaseService,
  ) { }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  pagarSolicitud(row: solicitud) {
    Swal.fire({
      title: '¿Esta seguro de Pagar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        row.pendiente_pagar = 1;
        this.apiService.putUsuario(row, row.id!)
          .subscribe({
            next:(res) => {
              Swal.fire({
                icon: 'success',
                title: 'Pago exitoso!'
              }).then((result) => {
                this.montoBaseService.calcularMontoBase();
                this.getAllUsuarios();
              })
            },
            error:() => {
              Swal.fire({
                icon: 'error',
                title: 'Error al pagar la solicitud'
              })
            }
          })
      }
    })
  }

  getAllUsuarios() {
    this.apiService.getUsuarios()
      .pipe(
        map( 
          rows => rows.filter(
            (row: solicitud) => row.pendiente_pagar == 0
          )
        )
      )
      .subscribe({
        next:(res: solicitud[]) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error:(error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al consultar los registros',
          });
        }
      })
  }

}
