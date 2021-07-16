const nombre = "Hola";
const precio = 20;

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        // Saca los valores de fuera Hola y 20
        console.log(`El producto: ${nombre} tiene un precio de: ${precio} `);
        // Sacaria los valores de dentro del objeto
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
}

producto.mostrarInfo();