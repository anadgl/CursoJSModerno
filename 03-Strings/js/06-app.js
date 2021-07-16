const producto = "Monitor 20 Pulgadas";

// .repeat te va a repetir una cadena de texto
const texto = ' en Promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);


// .split te va a permitir dividir un string
const actividad = "Estoy aprendiendo javascript moderno";
console.log(actividad.split(" ")); // divide por cada una de las palabras

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(",")); // divide por cada una de las palabras

const tweet = 'Aprendiendo JavaScript #JSModerno';
console.log(tweet.split("#")); // divide por cada una de las palabras

