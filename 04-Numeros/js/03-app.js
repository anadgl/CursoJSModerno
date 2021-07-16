let resultado;

resultado = Math.PI;
console.log(`PI ${resultado}`);

resultado = Math.round(2.8);
console.log(`Redondeo 2.8 ${resultado}`);
resultado = Math.round(2.2);
console.log(`Redondeo 2.2 ${resultado}`);
resultado = Math.round(2.6);
console.log(`Redondeo 2.6 ${resultado}`);
resultado = Math.round(2.5);
console.log(`Redondeo 2.5 ${resultado}`);   

// Redondea hacia arriba
resultado = Math.ceil(2.1);
console.log(`Redondeo 2.1 hacia arriba ${resultado}`);   

// Redondea hacia arriba
resultado = Math.floor(2.9);
console.log(`Redondeo 2.9 hacia abajo ${resultado}`);   

// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(`Raiz cuadrada de 144 ${resultado}`);   

// Absoluto
resultado = Math.abs(-500);
console.log(`Valor absoluto de -500 ${resultado}`);   

// Potencia
resultado = Math.pow(2,4);
console.log(`2 a la potencia de 4 ${resultado}`);   

// Mínimo
resultado = Math.min(2,4);
console.log(`Minimo de 2 y 4 ${resultado}`);   

// Maximo
resultado = Math.max(2,4);
console.log(`Maximo de 2 y 4 ${resultado}`);   

// Aleatorio
resultado = Math.random(20);
console.log(`Aleatorio ${resultado}`);   


// Aleatorio dentro de un rango
resultado =  Math.floor( Math.random() * 30 );
console.log(`Aleatorio dentro de un rango ${resultado}`);   