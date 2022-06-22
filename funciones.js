
x=false;

function siempreTrue(x=true){
    return true;
}

console.log(siempreTrue());
console.log(siempreTrue(x));



const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 10);    
    if (i >= 1.5) {
        resolve();
    } else {
        reject();
    }
});

setTimeout(() => {
    miPromesa
    .then(() => console.log("Hola soy una promesa"))
    .catch(() => console.log("Hola soy una promesa"))
    .finally(() => console.log("Hola soy una promesa"));
}, 5000);



function* generaId() {
    let id = 0;
    while(true) {
       id = id + 2;
        if (id === 10) {
            return id;
        }
        yield id;
    }
}

 const gen =(generaId());

 console.log(gen.next());
 console.log(gen.next());
 console.log(gen.next());
 console.log(gen.next());
 console.log(gen.next());



 let num = 8;
console.log(num > 9);

const unaFuncion = num => {
    if (num > 9) {
        return 2 * num;
    }
    throw new Error(`${num} es menor que 9`);
};

try {
    const doble = unaFuncion(num);
} catch (e) {
    console.error(`El valor de e es: ${e}`);
}




function fibonacci(num){
    let pre = [];
    pre[0] = 0;
    pre[1] = 1;
    for (let i = 2; i < num; i++) {
      pre[i] = pre[i - 2] + pre[i - 1];
    }
    return pre;
    }
    let fib = fibonacci(6);
    console.log(fib)