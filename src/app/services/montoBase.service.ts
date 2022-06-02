import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

export interface MontoBase {
  valor: number
}

@Injectable({
  providedIn: 'root'
})
export class MontoBaseService extends BaseService {

  montoBanco = environment.CAPITALBASEBANCO;
  valorPrestamos = 0;

  private sharingObservableMontoBasePrivate: BehaviorSubject<MontoBase> = new BehaviorSubject<MontoBase>({ valor: this.montoBanco});

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  get sharingObervable() {
    return this.sharingObservableMontoBasePrivate.asObservable();
  }

  calcularMontoBase() {
    const valorPrestamosActual = this.valorPrestamos;
    this.valorPrestamos = 0;
    this.http.get<any>(`${this.apiUrl}users`)
      .subscribe(receivedItems => {
        receivedItems.forEach((data: any) => {
          if (data.pendiente_pagar == 0) {
            this.valorPrestamos += data.valor;
          }
        });
        if(valorPrestamosActual != this.valorPrestamos) {
          this.sharingObservableMontoBasePrivate.next({valor: this.montoBanco - this.valorPrestamos})
        }
      });
  }
}
