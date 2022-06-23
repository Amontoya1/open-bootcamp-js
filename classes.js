class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        // this.asignaturas = asignaturas;
        this.asignaturas = ["JavaScript", "HTML", "CSS"];
    }

    obtenDatos() {
        console.log(`${this.nombre} ${this.asignaturas}`);
    }
}

const nuevoEstudiante = new Estudiante("Andrea Josefina", "");
console.log(nuevoEstudiante);

nuevoEstudiante.obtenDatos();