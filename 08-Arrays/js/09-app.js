const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 300},
    {nombre: "Televisión", precio: 1300},
    {nombre: "Tablet", precio: 550},
    {nombre: "Auriculares", precio: 125},
    {nombre: "Teclado", precio: 70},
    {nombre: "Telefono", precio: 800},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}` );
}


carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - ${producto.precio}` );
} )