export class alumno {
    constructor(
        public id: Number,
        public nombre: string,
        public apellido: string,
        public estado: boolean
    ) { }

    presente() {
        this.estado = true;
    }

    ausente() {
        this.estado = false;
    }

}