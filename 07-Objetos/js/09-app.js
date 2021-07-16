"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//No se puede agregar ni eliminar propiedades pero si modificar las que existen
Object.seal(producto);

producto.disponible = false;
//producto.imagen = "imagen.jpg";

console.log(producto);

// Para comprobar si el objeto esta sellado
console.log(Object.isSealed(producto));

