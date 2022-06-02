import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { MontoBase, MontoBaseService } from 'src/app/services/montoBase.service';

@Component({
  selector: 'app-monto-banco',
  templateUrl: './monto-banco.component.html',
  styleUrls: ['./monto-banco.component.scss']
})
export class MontoBancoComponent implements OnInit {

  data$ !: Observable<MontoBase>;

  constructor(
    private apiService: ApiService,
    public montoBaseService: MontoBaseService,
  ) {
    this.data$ = montoBaseService.sharingObervable;
    this.montoBaseService.calcularMontoBase();
  }
  
  ngOnInit() {}
}
