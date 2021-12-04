import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Módulos personalizados
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localeEsCr from "@angular/common/locales/es-CR";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEsCr );
registerLocaleData( localeFr );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
