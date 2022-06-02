import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled',
  useHash: true,
  enableTracing: false
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    BrowserAnimationsModule,
    MatToolbarModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
