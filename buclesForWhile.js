let i = 7;
let fact1 = 1;
for (i; i > 1; i--) {
  fact1 *= i;
  console.log(fact1 + " con for");
}

let num = 7;
let fact2 = 1;
let i2 = 1;
while (i2 <= num) {
  fact2 *= i2;
  i2++;
  console.log(fact2 + " con while");
}

let num2 = 7;
let fact3 = 1;
for (let i3 = 1; i3 <= num2; i3++) {
  if (i3 < num2) {
    fact3 *= i3;
    console.log(fact3 + " con break");
    continue;
  }
  if (i3 >= 1) {
    fact3 *= i3;
    console.log(fact3 + " con break");
    break;
  }
}

let films = ['Top Gun: Maverick', 'The Batman', 'Uncharted', 'Scream', 'The Lost City' ];

for (let i = 0; i < films.length; i++) {
   // que no sea de uso normal el uso del continue
    if (films[i] === 'The Batman') {
        continue;
    }
        
    console.log(films[i]);

    if (films[i] === 'The Batman') {
        break;
    }
}

// ambito de un bucle Ecmascript 2016( es mejor usar let que var)

//solo para efectos de aprendizaje para evitar bucles infinitos

let unidades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let decenas = [10, 20, 30, 40, 50, 60, 70, 80, 90];

while (true){
    console.log(`El número actual es: ${unidades}${decenas.pop()}`);
    if (decenas.length === 0) {
        break;
    }
}







