import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PrestamosComponent } from './prestamos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const routes: Route[] = [
    {
        path     : 'prestamos',
        component: PrestamosComponent
    }
];

@NgModule({
    declarations: [
        PrestamosComponent,
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
        CommonModule
    ],
    exports: [
        PrestamosComponent,
    ]
})
export class PrestamosModule {}
