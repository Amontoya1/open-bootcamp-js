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
        editorial: "Minotauro",
        url : "https://www.amazon.com.br/El-Se%C3%B1or-los-Anillos-Tolkien/dp/844500302X",
        data: new Date('2016-05-31')
    },
}

console.log('Nombre: ' + victoriosa.nombre + ' ' + victoriosa.apellido);
console.log('Edad: ' + victoriosa.edad);
console.log('Tecnologias: ' + victoriosa.tecnologias);
console.log('Literatura favorita: ' + victoriosa.literaturaFavorito.titulo + ' de ' + victoriosa.literaturaFavorito.autor);
console.log('Color favorito: ' + victoriosa.coloresfavoritos[0]);
console.log('Fecha publicacion libro favorito: ' + victoriosa.literaturaFavorito.data);