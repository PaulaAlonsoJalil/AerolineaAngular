import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Aeropuerto } from "../entidades/aeropuerto";
import { environment } from "src/environments/environment";
import { Vuelo } from "../entidades/vuelo";
import { Compania } from "../entidades/compania";
import { Reserva } from "../entidades/reserva";

@Injectable({
    providedIn: 'root'
  })
  export class AltaVuelosService {
    
    readonly aeropuertosSuffix ="/aeropuertos"
    readonly companiasSuffix = "/companias"
    readonly vuelosSuffix ="/vuelos"
    readonly reservasSuffix ="/reservas"

    constructor(
        private httpClient : HttpClient
      ) { }

      cargarAeropuertos() {

        return this.httpClient.get<Aeropuerto[]>(
          environment.urlServiciosRest + this.aeropuertosSuffix
        );
      }

      cargarCompanias() {

        return this.httpClient.get<Compania[]>(
          environment.urlServiciosRest + this.companiasSuffix
        );
      }

      cargarVuelos() {

        return this.httpClient.get<Vuelo[]>(
          environment.urlServiciosRest + this.vuelosSuffix
        );
      }

      cargarReservas() {

        return this.httpClient.get<Reserva[]>(
          environment.urlServiciosRest + this.reservasSuffix
        );
      }


      darAltaVuelo(vuelo : Vuelo) {

        return this.httpClient.post<Vuelo>(
          environment.urlServiciosRest + this.vuelosSuffix,
          vuelo
        );
      }

      darAltaReserva(reserva : Reserva) {

        return this.httpClient.post<Reserva>(
          environment.urlServiciosRest + this.reservasSuffix,
          reserva
        );
      }



    }




