import { Pasajero } from "./pasajero";

export class Reserva {
    constructor(
        public vuelo: number = 0,
        public fecha: string = "",
        public pasajero: Pasajero = new Pasajero(),
        public id? :number
    ){}
}