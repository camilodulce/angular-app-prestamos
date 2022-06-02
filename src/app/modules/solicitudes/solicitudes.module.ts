import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SolicitudesComponent } from './solicitudes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

export const routes: Route[] = [
    {
        path     : 'solicitudes',
        component: SolicitudesComponent
    }
];

@NgModule({
    declarations: [
        SolicitudesComponent,
    ],
    imports     : [
        RouterModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    exports: [
        SolicitudesComponent,
    ]
})
export class SolicitudesModule {}
