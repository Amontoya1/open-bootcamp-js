// cadenas de caracteres

const listaMercado = ["Papas", "Cebollas", "Manzanas", "Peras"];

listaMercado.push("Aceite de Girasol");
console.log(listaMercado);

listaMercado.pop();
console.log(listaMercado);

const peliculas = [
  { titulo: "avatar", director: "James Cameron", fecha: "2009-12-18" },
  { titulo: "Star Wars", director: "George Lucas", fecha: "1977-04-25" },
  { titulo: "The Avengers", director: "Joss Whedon", fecha: "2012-04-11" },
];

const luego2010 = peliculas.filter((n) => n.fecha > "2010-01-01");
console.log(luego2010);

const directores = peliculas.map((n) => n.director);
console.log(directores);

const titulos = peliculas.map((n) => n.titulo);
console.log(titulos);

const titDirConc = directores.concat(titulos);
console.log(titDirConc);

const titDirProp = [...directores, ...titulos];
console.log(titDirProp);

const people = {
  Nombre: "Andrea",
  Apellido: "Montoya",
  Edad: 46,
  Altura: 1.65,
  Desarrollador: true,
};

const edad = people.Edad;
console.log(edad);

const nuevaLista = [
  {
    Nombre: "Andrea",
    Apellido: "Montoya",
    Edad: 46,
    Altura: 1.65,
    Desarrollador: true,
  },
  {
    Nombre: "Julio",
    Apellido: "De La Rosa",
    Edad: 23,
    Altura: 1.7,
    Desarrollador: true,
  },
  {
    Nombre: "Juan Carlos",
    Apellido: "De La Rosa",
    Edad: 21,
    Altura: 1.6,
    Desarrollador: false,
  },
];

const edad2 = nuevaLista.reverse((a, b) => a.Edad - b.Edad);

console.log(edad2);

class Estudiante {
  constructor(nombre, asignaturas) {
      this.nombre = nombre;
      this.asignaturas = ["JavaScript", "Angular", "C#", "TypeScript"];
  }

  obtenDatos() {
      console.log(`${this.nombre} ${this.asignaturas}`);
  }
}

const nuevoEstudiante = new Estudiante("Andrea", "");
console.log(nuevoEstudiante);

nuevoEstudiante.obtenDatos();

