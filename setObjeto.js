const miSet = new Set();
miSet.add("Julio");
miSet.add("Francisco");
miSet.add("Juán");
miSet.add("José");
miSet.add("Milagros");
miSet.add("Andrea");
miSet.add("JavaScript");
console.log(miSet.size);
console.log(miSet);


const hoy = new Date();
console.log(hoy);

const miNacimiento = new Date(1960, 02, 16, 17, 55);
console.log(miNacimiento);

const esMasTarde = hoy > miNacimiento;
console.log(esMasTarde);

const mesNacimiento = miNacimiento.getMonth();
console.log(mesNacimiento + 1);

const anoNacimiento = miNacimiento.getFullYear();
console.log(anoNacimiento);