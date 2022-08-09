import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaReservaComponent } from './alta-reserva/alta-reserva.component';
import { AltaViajeComponent } from './alta-viaje/alta-viaje.component';
import { VisorReservasComponent } from './visor-reservas/visor-reservas.component';
import { VisorVuelosComponent } from './visor-vuelos/visor-vuelos.component';


const routes: Routes = [
  {
    path: "altareserva", component: AltaReservaComponent
  },
  {
    path: "reservas", component: VisorReservasComponent
  },
  {
    path: "altavuelo", component:AltaViajeComponent
  },
  {
    path: "vuelos", component: VisorVuelosComponent
  },
  {
    path: "", redirectTo: "/vuelos", pathMatch: "full"
  },
  {
    path: "*", redirectTo: "/vuelos", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
