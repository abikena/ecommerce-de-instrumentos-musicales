function suma1 (num1, num2, num3) {
    let sumatoria = num1 + num2 + num3;
    console.log("Su resultado es de", sumatoria);
}
suma1 (30, 50, 12);


function comparacion () {    
    console.log ()
}
comparacion (25, 15);


// ARROW FUNCTION (funcion flecha)

const sumaComparacion = (uno, dos) => console.log("estas en la => con dos parametros");
sumaComparacion (92, 25);



const carritoDeCompras = [];

console.log (carritoDeCompras);

const producto1 = {
    nombre: "teclado",
    precio: 7550,
    descripcion: "Teclado completo equipado con los mejores elementos para principiantes"
}
const producto2 = {
    nombre: "Bateria",
    precio: 16000,
    descripcion: "Bateria elaborada con los mejores materiales para tener una mayor durabilidad y para que se sienta comodo al utilizarla"
}
const producto3 = {
    nombre: "Guitarra",
    precio: 9420,
    descripcion: "Paquete de lo mas completo, incluye un amplificador y una funda para mayor protección"
}
const producto4 = {
    nombre: "Bajo",
    precio: 7840,
    descripcion: "Bajo pasivo color blanco con 4 cuerdad y 24 trastes"
}
const producto5 = {
    nombre: "Microfono",
    precio: 950,
    descripcion: "Contiene una pieza y es bluetooth con un alcance de 20 metros"
}
const producto6 = {
    nombre: "Amplificador de audio",
    precio: 5530,
    descripcion: "Cuenta con varias entradas en donde podra conectar desde un microfono hasta instrumentos con sonidos potentes"
}


//carritoDeCompras.push(producto1);
//console.log(carritoDeCompras);

const {nombre} = producto1
console.log(nombre);

const productos = ["Un gusto", 1, 6, "numero de productos", array = ["ha ingresado al arrey", "siga navegando y cuente su experiencia"]];
console.log (productos);

//console.log("Elemento numero de productos", productos[3])

const [saludo, numero,,texto] = productos;
console.log (saludo);
console.log (numero);
console.log (texto);
