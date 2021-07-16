const producto = "              Monitor 20 Pulgadas            ";
console.log(producto);
console.log(producto.length);

//Eliminar del inicio...
console.log( producto.trimStart() );
var sinInicio =  producto.trimStart();
console.log(sinInicio.length);
var sinFinal = producto.trimEnd();
console.log(sinFinal.length);
var solo = producto.trimStart().trimEnd();
console.log(solo.length);

var sinEspacios = producto.trim();
console.log(sinEspacios.length);