const producto = "Monitor 20 Pulgadas";
console.log(producto);

// .replace para remplazar
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));  // No hace nada

//.substring alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));  // le da la vuelta y pone (1,2) pq es mayor el inicio q el segundo


const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));