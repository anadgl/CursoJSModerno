const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio' );

console.table(meses);
console.table(meses[0]);

// Cuanto mide este arreglo
console.log(meses.length);

for( let i = 0; i < meses.length; i++) {
    console.log(i);
    console.log(meses[i]);
}