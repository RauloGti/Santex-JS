/*1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356

para valor 3
1
12
123
*/

QUITAR COMENTARIOS PARA VER CADA EJERCICIO
/*
function piramide(num){
    let string="";
    for(let i=1;i<=num;i++){
        string +=i;
        console.log(string);
    }
}
piramide(6);
piramide(3);

//*/
/*2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true]

*/
/*

function arrayNumbers(nums1, nums2){
    const newArray = []; 
   for (let i = 0; i < nums1.length; i++) { 
        for (let j = 0; j < nums2.length; j++) { 
            if (nums1[i] === nums2[j]) {
                newArray.push(nums1[i]);
            }
        }
    }
    return newArray;
}
const nums1 = [1,2,3,4,5];
const nums2 = [2,4,6,8];
const newArray = arrayNumbers(nums1, nums2);

console.log("Array 1: " + nums1);
console.log("Array 2: " + nums2);
console.log("Resultado : " + newArray);


//*/

/*Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}
*/

/*

class Carrito {
    productos;
    montoTotal;
    constructor(productosConst, montoTotalConst){
        this.productos = productosConst;
        this.montoTotal = montoTotalConst;
    }
    
}

const carrito = new Carrito(["leche"],10);
console.log(carrito);

*/
/*
3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}
*/
/*
class Carrito {
    productos;
    montoTotal;
    constructor(productosConst, montoTotalConst){
        this.productos = productosConst;
        this.montoTotal = montoTotalConst;
    }
    agregarProducto(nombre, precio, unidades) {
    const producto = { nombre, precio, unidades };
    this.productos.push(producto);
    this.montoTotal += precio * unidades;
    return producto;
    }
}
console.log("Inicio del programa");
const carrito = new Carrito(["leche"],10);
console.log(carrito.montoTotal);

carrito.agregarProducto("Azucar",5,2);

console.log(carrito);
console.log("Fin del programa");

*/
//Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
/*
    class Carrito {
    productos;
    montoTotal;
    constructor(productosConst, montoTotalConst) {
      this.productos = productosConst;
      this.montoTotal = montoTotalConst;
    }
    agregarProducto(nombre, precio, unidades) {
      try {
        for (let i = 0; i < this.productos.length; i++) {
          if (this.productos[i].nombre === nombre) {
            throw new Error(`Ya existe ${nombre} con ${this.productos[i].unidades} unidades`);
          }
        }
        const producto = { nombre, precio, unidades };
        this.productos.push(producto);
        this.montoTotal += precio * unidades;
        return producto;
      } catch (error) {
        console.error(error);
      }
    }
  }
  console.log("Inicio del programa");
  const carrito = new Carrito([{ nombre: "leche", precio: 3, unidades: 1 }], 3);
  console.log(carrito.montoTotal);
  carrito.agregarProducto("Azucar", 5, 2);
  carrito.agregarProducto("Galletitas",7,3);
  console.log(carrito);
  
  carrito.agregarProducto("leche", 3, 2);
  console.log("Fin del programa");
  */