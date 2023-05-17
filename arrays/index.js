
// let miArray = [1,2,3,4,5,6,7,8,9,10];

// let frutas = ["manzana", "pera", "mango", "fresa", "uva"];

// console.log(frutas[2]);

// console.log(frutas.length);


// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);

// let nombres = ["Melissa", "Sara", "Johan", "Gabriela"];

// nombres[0] = "Esteban";

// console.log(nombres);

// nombres[3] = "Natalia";

// console.log(nombres);


// //metodo push agrega un elemento al final del array

// nombres.push("Gabriela");
// console.log(nombres);

// //metodo pop elimina el ultimo elemento del array

// nombres.pop();
// console.log(nombres);

// //metodo unshift agrega un elemento al inicio del array

// nombres.unshift("Yuliceth")
// console.log(nombres);

// //metodo shift elimina el primer elemento del array

// nombres.shift();
// console.log(nombres);

// //metodo indexOf busca un elemento en el array y devuelve su posicion

// console.log(nombres.indexOf("Johan"));


// //metodo splice elimina un elemento del array

// let frutas = ["manzana", "pera", "mango", "fresa", "uva"];

//array.splice(posicion, cantidad de elementos a eliminar, elemento a agregar)

// frutas.splice(2, 2,"melon");
// console.log(frutas);

// //metodo slice copia un array

// let copiaFrutas = frutas.slice(0,2);
// console.log(copiaFrutas);


// metodo sort ordena un array


//Generar los numeros de 1 a 10 y mostrarlos en consola

// for(let i = 0; i <= 100; i++){
//     if( i % 2 === 0){
//         console.log(i);
//     }
// }

// let nombres = ["Melissa", "Sara", "Johan", "Gabriela", "Jarrison", "Esteban"];

// for(let i = 0; i < nombres.length; i++){
//     console.log(nombres[i]);
// }

//while
// let numero = 1;

// while(numero <= 10){
//     console.log(numero);
//     numero++;
// }

// let edad = parseInt(prompt("Ingrese su edad"));

// while(edad > 18 || edad <= 0){
//     edad = parseInt(prompt("Ingrese un valor correcto:"));
// }

// console.log("Gracias por ingresar su edad");


// const array = ["Melissa", "Sara", "Johan", "Gabriela", "Jarrison", "Esteban"];
// let i = 0;

// while(i < array.length){
//     console.log(array[i]);
//     i++;
// }


//ciclo do while

// let i = 0;

// do{
//     console.log(i);
//     i++;
// }while(i <= 5);


const colores = ["amarillo", "azul", "rosado", "verde", "naranja"];
let i = 0;

do{
 console.log(colores[i]);
    i++;
}while(i < colores.length)

