import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { PrestamosModule } from '../prestamos/prestamos.module';
import { SolicitudesModule } from '../solicitudes/solicitudes.module';
import { CommonModule } from '@angular/common';
import { MontoBancoModule } from '../monto-banco/monto-banco.module';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports : [
        MatTabsModule,
        RouterModule,
        PrestamosModule,
        SolicitudesModule,
        MontoBancoModule,
        CommonModule
    ],
    exports: [
        DashboardComponent,
    ]
})
export class DashboardModule {}
