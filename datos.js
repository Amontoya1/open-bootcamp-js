let name = "Andrea Josefina";

let edad = 45;

let isDeveloper =  true;

let dataNacimiento = new Date('1976-06-15');

const  librosFavorito = {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    editorial: "Minotauro"
}

// o puede estar toda esta informacion dentro de um objeto declarado

const victoriosa = {
    nombre: "Andrea Josefina",
    apellido: "Montoya Ruiz",
    isDeveloper: true,
    edad: 45,
    tecnologias : ["javascript", "nodejs", "angular", "c#", "graphql", "reactjs"],
    coloresfavoritos: ["azul", "morado", "verde"],
    literaturaFavorito : {
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        editorial: "Minotauro"
    },
}

console.log('Nombre: ' + victoriosa.nombre + ' ' + victoriosa.apellido);
console.log('Edad: ' + victoriosa.edad);
console.log('Tecnologias: ' + victoriosa.tecnologias);
console.log('Literatura favorita: ' + victoriosa.literaturaFavorito.titulo + ' de ' + victoriosa.literaturaFavorito.autor);
console.log('Color favorito: ' + victoriosa.coloresfavoritos[0]);