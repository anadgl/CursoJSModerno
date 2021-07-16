const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Las constantes no se pueden reasignar pero un objeto si

producto.disponible = false;

console.log(producto);

// Incluso eliminar
delete producto.precio;
console.log(producto);
