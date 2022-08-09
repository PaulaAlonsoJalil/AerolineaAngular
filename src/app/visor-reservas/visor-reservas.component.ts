import { Component, OnInit } from '@angular/core';
import { Aeropuerto } from '../entidades/aeropuerto';
import { Reserva } from '../entidades/reserva';
import { Vuelo } from '../entidades/vuelo';
import { AltaVuelosService } from '../service/altaVuelos.service';

@Component({
  selector: 'app-visor-reservas',
  templateUrl: './visor-reservas.component.html',
  styleUrls: ['./visor-reservas.component.scss']
})
export class VisorReservasComponent implements OnInit {

  reservas: Reserva[] = [];

  reserva: Reserva = new Reserva();

  reservasCoincidentes: Reserva[] = [];

  aeropuertos: Aeropuerto[] = [];

  origen: string = "";

  destino: string = "";

  vuelos: Vuelo[] = [];

  vuelosCoincidentes: Vuelo[] = [];

  constructor(
    private servicio: AltaVuelosService
  ) { }

  ngOnInit(): void {

    this.servicio.cargarReservas().subscribe(
      {
        next: (datos: Reserva[]) => {
          this.reservas = datos;
        }
      }
    );

    this.servicio.cargarAeropuertos().subscribe(
      {
        next: (datos: Aeropuerto[]) => {
          this.aeropuertos = datos;
        }
      }
    );

    this.servicio.cargarVuelos().subscribe(
      {
        next: (datos: Vuelo[]) => {
          this.vuelos = datos;
        }
      }
    );
  }

  buscarVuelosCoincidentes() {
    this.vuelos.forEach(vuelo => {
      if (this.origen == vuelo.origen && this.destino == vuelo.destino) {
        return this.vuelosCoincidentes.push(vuelo)
      } else {
        return null;
      }

    })

  }

  buscarCoincidenciaDeReservas() {
    this.vuelosCoincidentes = [];
    this.reservasCoincidentes= [];
    this.buscarVuelosCoincidentes()
      
      this.reservas.forEach(reserva => {
        
        this.vuelosCoincidentes.forEach(vuelo => {
          if (reserva.vuelo == vuelo.id) {
            return this.reservasCoincidentes.push(reserva)
          } else {
            return null;
          }
        }
        )
      })
    
  }

}
