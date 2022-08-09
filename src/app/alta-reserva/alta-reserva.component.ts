import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pasajero } from '../entidades/pasajero';
import { Reserva } from '../entidades/reserva';
import { Vuelo } from '../entidades/vuelo';
import { AltaVuelosService } from '../service/altaVuelos.service';

@Component({
  selector: 'app-alta-reserva',
  templateUrl: './alta-reserva.component.html',
  styleUrls: ['./alta-reserva.component.scss']
})
export class AltaReservaComponent implements OnInit {

  reserva: Reserva = new Reserva();

  vuelo: number = 0;

  vuelos : Vuelo[] =[];

  fecha: string = "";
  pasajero : Pasajero[] = [];


  constructor(
    private servicio: AltaVuelosService
  ) { }

  ngOnInit(): void {

    this.servicio.cargarVuelos().subscribe(
      {
        next : (datos : Vuelo[]) => {
          this.vuelos = datos;
        }
      }
    );


  }

  darAltaReserva() {

    this.servicio.darAltaReserva(this.reserva).subscribe(
      {
        next : (datos : Reserva) => {
          alert("Reserva creada correctamente");
        },
        error : (error : HttpErrorResponse) => {
          alert("Reserva no se pudo crear correctamente");
        }

      }
    );
  }

}
