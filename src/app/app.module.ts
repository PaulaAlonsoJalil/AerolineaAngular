import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AltaViajeComponent } from './alta-viaje/alta-viaje.component';
import { VisorVuelosComponent } from './visor-vuelos/visor-vuelos.component';
import { AltaReservaComponent } from './alta-reserva/alta-reserva.component';
import { VisorReservasComponent } from './visor-reservas/visor-reservas.component';
import { NavegacionAppComponent } from './navegacion-app/navegacion-app.component';

@NgModule({
  declarations: [
    AltaViajeComponent,
    VisorVuelosComponent,
    AltaReservaComponent,
    VisorReservasComponent,
    NavegacionAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [
    //AltaViajeComponent
    //VisorVuelosComponent
    //AltaReservaComponent
    //VisorReservasComponent
    NavegacionAppComponent
  ]
})
export class AppModule { }
