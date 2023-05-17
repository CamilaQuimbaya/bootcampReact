
//  function suma(a, b){
//     return a + b;
// }

// let resultado1 = suma(2, 5);

// let resultado2 = suma(10, 15);

// let resultado3 = suma(115, 150);

// console.log("resultado1 " + resultado1);
// console.log("resultado2 " + resultado2);
// console.log("resultado3 " + resultado3);

// function saludar(nombre){
//     return "Hola " + nombre;
// }

// console.log(saludar("Melissa"));
// console.log(saludar("sara"));

// let nombre = "Melissa";

// console.log(`hola ${nombre}`);


// let nombre = "Gabriela";


// function saludar(){
//     console.log(`hola ${nombre}`)
// }

// saludar();


// function saludo(){
//     let nombre = "Johan";
//     console.log(`hola ${nombre}`) 
// }

// saludo();

// console.log(nombre);

// este es el operador de residuo %

// console.log(5 % 2);

//operador de incremento ++ y decremento --

// let a = 3;

// let b = 3;

// console.log(a++);
// console.log(++b);
// console.log(a);
// console.log(b);

// == igual y === estricamente igual

// console.log(5 === "5")

// != diferente y !== estricamente diferente

// console.log(3 !== "3");

// > mayor que y < menor que

// console.log(3 >= 2);


//if, else if, else

/*Un cliente solicita un desciento segun el numero 
de articulos que ha comprado, la tienda ofrece 3 descuentos 
descuentos: 
10% si ha comprado hasta 5 articulos, 
15% si ha comprado hasta 10 articulos,
20% si ha comprado mas de 10 articulos

*/


// function calcularDescuento(articulos){
//     let descuento

//     if(articulos <= 5){
//         descuento = "se aplico el 10% de descuento"
//     }else if(articulos > 5 && articulos <= 10){
//         descuento = "se aplico el 15% de descuento"
//     }else{
//         descuento =  "se aplico el 20% de descuento"
//     }

//     return descuento;
// }

// console.log(calcularDescuento(50));


const numero = parseInt(prompt("ingrese un numero"));

function mostrarSiEsPar(num){
    if(num % 2 === 0){
        return "el numero es par"
    }else{
        return "el numero es impar"
    }
}

console.log(mostrarSiEsPar(numero));

