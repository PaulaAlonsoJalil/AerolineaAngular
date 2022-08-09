import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Aeropuerto } from '../entidades/aeropuerto';
import { Compania } from '../entidades/compania';
import { Vuelo } from '../entidades/vuelo';
import { AltaVuelosService } from '../service/altaVuelos.service';
@Component({
  selector: 'app-alta-viaje',
  templateUrl: './alta-viaje.component.html',
  styleUrls: ['./alta-viaje.component.scss']
})
export class AltaViajeComponent implements OnInit {

  vuelo : Vuelo = new Vuelo();

  aeropuertos: Aeropuerto[]  = [];

  companias: Compania[] = [];

  fechaDesde: string ="";
  fechaHasta: string ="";
  duracionHoras: number = 0;

  constructor(

    private servicio: AltaVuelosService

  ) { }

  ngOnInit(): void {

    this.servicio.cargarAeropuertos().subscribe(
      {
        next : (datos : Aeropuerto[]) => {
          this.aeropuertos = datos;
        }
      }
    );

    this.servicio.cargarCompanias().subscribe(
      {
        next : (datos : Compania[]) => {
          this.companias = datos;
        }
      }
    );

  }

  darAltaVuelo() {

    this.servicio.darAltaVuelo(this.vuelo).subscribe(
      {
        next : (datos : Vuelo) => {
          alert("Vuelo creado correctamente");
        },
        error : (error : HttpErrorResponse) => {
          alert("Vuelo no se pudo crear correctamente");
        }

      }
    );
  }

}
