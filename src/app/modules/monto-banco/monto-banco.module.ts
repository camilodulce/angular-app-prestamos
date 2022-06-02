import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MontoBaseService } from 'src/app/services/montoBase.service';
import { MontoBancoComponent } from './monto-banco.component';

@NgModule({
    declarations: [
        MontoBancoComponent,
    ],
    imports     : [
        RouterModule,
        CommonModule,
    ],
    exports: [
        MontoBancoComponent,
    ],
    providers: [
        MontoBaseService
    ]
})
export class MontoBancoModule {}
