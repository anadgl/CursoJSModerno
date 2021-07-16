const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring: Extraer y crear la variable en un mismo paso
const { nombre } = producto;
console.log(nombre);

// Destructuring con arrays
const numeros = [10, 20, 30, 40, 50];
//const [primero] = numeros;
//console.log(primero);

// Si quiero acceder a la tercera posicion
//const [primero, segundo, tercero] = numeros;
// Si solo quieres el cuarto
//const [, , , cuarto ] = numeros;
//console.log(tercero);
//console.log(cuarto);

// si quieres el primero el segundo y los otros restantes en otro elemento
const [primero, segundo, ...tercero] = numeros;
console.log(primero);
console.log(segundo);
console.log(tercero);
