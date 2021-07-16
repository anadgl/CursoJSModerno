const carrito = [];

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

const producto4 = {
    nombre: "Celular 2",
    precio: 750
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);
console.table(carrito);

// Eliminar último elemento del arreglo
carrito.pop();
console.table(carrito);

// Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

// Elimina 2 elementos a partir de la posicion 1 
carrito.push(producto3);
carrito.push(producto4);
console.table(carrito);

carrito.splice(1,2);
console.table(carrito);