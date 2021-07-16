const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 300},
    {nombre: "Televisión", precio: 1300},
    {nombre: "Tablet", precio: 550},
    {nombre: "Auriculares", precio: 125},
    {nombre: "Teclado", precio: 70},
    {nombre: "Telefono", precio: 800},
]

// .forEach y .map son similiares, lo que .map te crea un array nuevo
const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
} )

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return`${producto.nombre} - Precio: ${producto.precio}`;
} )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);