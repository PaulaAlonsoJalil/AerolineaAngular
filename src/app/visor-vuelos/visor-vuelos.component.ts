import { Component, OnInit } from '@angular/core';
import { Aeropuerto } from '../entidades/aeropuerto';
import { Compania } from '../entidades/compania';
import { Vuelo } from '../entidades/vuelo';
import { AltaVuelosService } from '../service/altaVuelos.service';

@Component({
  selector: 'app-visor-vuelos',
  templateUrl: './visor-vuelos.component.html',
  styleUrls: ['./visor-vuelos.component.scss']
})
export class VisorVuelosComponent implements OnInit {

  vuelos: Vuelo[] = [];

  vuelo: Vuelo = new Vuelo();

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

  borrarVuelo( posicion : number) {

    this.vuelos.splice(posicion, 1);

  }

  
}
