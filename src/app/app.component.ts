import { Component } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
      dateInput: 'YYYY-MM-DD',
  },
  display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'YYYY MMM ',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY MMMM',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
]
})
export class AppComponent {
  title = 'app-prestamos';
}
