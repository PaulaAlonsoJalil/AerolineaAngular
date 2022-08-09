export class Vuelo {
    constructor(
        public origen: string ="",
        public destino: string ="",
        public companias: string[] = [],
        public fechaDesde: string ="",
        public fechaHasta: string ="",
        public duracion: number = 0,
        public id? :number
    ){}
}