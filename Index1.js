function suma(num1, num2, num3){
    let sumatoria = num1 + num2 + num3;
    console.log("Su resultado es de", sumatoria);
}
suma (30, 50, 12);


function comparacion(numero1, numero2){
    let operacion = numero1 > numero2;
    console.log("Esta operacion es", operacion);
}
comparacion (60, 80); 


// ARROW FUNCTION (funcion flecha)

const funcionesArrow = (resultadoSuma, comNum1, comNum2) => console.log("Estas en la => con mas de 1 parametro. El resultado de la suma fue " + resultadoSuma + " y se comparo si, " + comNum1 + " era mayor que " + comNum2 + ", lo cual arrojo un resultado falso.");

funcionesArrow(92, 60, 80);

const carritoDeCompras = [];

console.log (carritoDeCompras);

const producto1 = {
    nombre: "teclado",
    precio: 7550,
    descripcion: "Teclado completo equipado con los mejores elementos para principiantes"
}
const producto2 = {
    nombre1: "Bateria",
    precio: 16000,
    descripcion: "Bateria elaborada con los mejores materiales para tener una mayor durabilidad y para que se sienta comodo al utilizarla"
}
const producto3 = {
    nombre2: "Guitarra",
    precio: 9420,
    descripcion: "Paquete de lo mas completo, incluye un amplificador y una funda para mayor protección"
}
const producto4 = {
    nombre3: "Bajo",
    precio: 7840,
    descripcion: "Bajo pasivo color blanco con 4 cuerdad y 24 trastes"
}
const producto5 = {
    nombre4: "Microfono",
    precio: 950,
    descripcion: "Contiene una pieza y es bluetooth con un alcance de 20 metros"
}
const producto6 = {
    nombre5: "Amplificador de audio",
    precio: 5530,
    descripcion: "Cuenta con varias entradas en donde podra conectar desde un microfono hasta instrumentos con sonidos potentes"
}

//carritoDeCompras.push(producto1);
//console.log(carritoDeCompras);

const {nombre} = producto1
console.log(nombre);

const {precio} = producto2
console.log(precio);

const {nombre3} = producto4
console.log(nombre3);



const productos = ["Un gusto", 1, 6, "numero de productos", array = ["ha ingresado al arrey", "siga navegando y cuente su experiencia"]];
console.log (productos);

//console.log("Elemento numero de productos", productos[3])

const [saludo, numero,,texto] = productos;
console.log (saludo);
console.log (numero);
console.log (texto);


////////////////////////////////////////////////////////////////////////

//Operador ternario

Number = 23;
let edad = (Number >= 18 ? true : false);

if(edad >= true){
    console.log('Valido');
}else{
    console.log('No valido');
}

//array de productos

const instrumentos = [
    {id: 1, img: "", nombre: "bajo pasivo", color: "blanco", precio: 10000},
    {id: 2, img: "", nombre: "violin", color: "cafe", precio: 7500},
    {id: 3, img: "", nombre: "pandero", color: "gris", precio: 900},
    {id: 4, img: "", nombre: "saxofon", color: "negro", precio: 12764.56},
    {id: 5, img: "", nombre: "plumilla", color: "azul", precio: 10}, 
]

//console.log(instrumentos);

const carrito = [];

//console.log ("Por el momento el carrito tiene : ", carrito);
//carrito.push (instrumentos[3]);

//console.log ("Por el momento el carrito tiene : ", carrito);

//for (inicio; final; actualizador){
//    bloque de codigo que querramos hacer por cada iteracion
//}

console.log("Carrito de compras:" , carrito);

const agregarCarrito = (producto, carrito)=> {
    carrito.push (producto);
    console.log (`El producto ha sido agregado con exito`);
}

agregarCarrito(instrumentos [0], carrito);
agregarCarrito(instrumentos [1], carrito);
agregarCarrito(instrumentos [2], carrito);
agregarCarrito(instrumentos [3], carrito);

// for (let i = 0; i < instrumentos.length; i++){
//     console.log ("Los productos que contiene este arrey: ", instrumentos[i])
// }


// BLUCLE SWITCH

let Entradas = "30";

switch(Entradas){
    case "20":
        console.log("Promoción al 2x1 en dulceria");
        break;
    case "15":
        console.log("Boletos a mitad de precio");
        break;
    case "30":
        console.log("En la compra de 3 boletos, llevese un hotdog gratis");
        break;
    default:
        console.log("No aplica ninguna promoción");
        break;
}

//////////////////////////////////////////////////////////////////

// FOR EACH

instrumentos.forEach (producto => {
    console.log ("El nombre de los productos es:" , producto.nombre + " y su precio es", producto.precio)
})

// FILTER

const preciosMayor = instrumentos.filter(elemento => elemento.precio > 200);

console.log ("Los productos con precios mayor a 200 son: ", preciosMayor);

// const nombreProducto = instrumentos.filter (elem => elem.nombre.includes("x"))

// console.log (nombreProducto, "INCLUYE?")

// FIND

const productoSeleccionado = instrumentos.find (elementos => elementos.id === 3);

console.log ("El producto que el usuario quiere comparar es: ", productoSeleccionado);

console.log ("El carrito contiene los siguientes porductos: ", carrito);

agregarCarrito (productoSeleccionado, carrito);

console.log ("El carrito contiene los siguientes porductos: ", carrito);

//SOME 

const nombreProducto = instrumentos.some (elemento => elemento.nombre === "teclado");

console.log ("¿Existe el producto? ", nombreProducto);


//MAP

// console.log("Precios normales: ", instrumentos);

// const mitadPrecio = instrumentos.map (elementos => elementos.precio / 2);

// console.log ("El dia de hoy tenemos una oferta del 50%", mitadPrecio);

//REDUCE (ACUMULADOR, VALORES ACTUALES //////// OPCIONAL: VALOR INICIAL)

//OPCION A: Mezcla map y reduce.

const precios = instrumentos.map (elementos => elementos.precio);

console.log("Precios del carrito: ", precios);

const precioFinal = precios.reduce ((total, precio)=>total + precio);

console.log ("Precio apagar: ", precioFinal);

const promedio = precioFinal / instrumentos.length;
console.log (promedio);

//OPCION B: Solo reduce

const precioSO = carrito.reduce ((total, elemen)=>total + elemen.precio, 0);

console.log ("Opcion B, total de precio: ", precioSO); 

if (precioFinal >= 1000) {
    console.log ("Envio gratis. Total: ", precioFinal);
}else {
    console.log ("Total + envio: ", precioSO);
}

// SORT 

const alfabeticamente = instrumentos.sort ((productoA , productoZ) => {
    if (productoA.nombre == productoZ.nombre){
        return 0
    }else if(productoA.nombre < productoZ.nombre){
        return -1
    }else {
        return 1
    }
})

console.log ("Los productos estan oredenados de manera alfabetica", alfabeticamente);

console.log ("Los productos estan ordenados alfabeticamente", alfabeticamente); 

///////////////////////////////////////////////////////////

// const productoMasCostoso = instrumentos.map (elementos => elementos.precio);
// Math.max (productoMasCostoso);
// const valorMaximo = (productoMasCostoso);
// console.log (valorMaximo);
const redondeado = Math.floor (12764.56);
console.log (redondeado);


// const precioFinal = precios.reduce ((total, precio)=>total + precio);

// console.log ("Precio apagar: ", precioFinal);

// const promedio = precioFinal / instrumentos.length;
// console.log (promedio);


// const instrumentosMusicales = [
//     { id: 1, img: "./imagnes/logo.png", nombre: "Bajo", precio: 6000, cantidad: 1 },
//     { id: 2, img: "./imagnes/logo.png", nombre: "Guitarra", precio: 6500, cantidad: 1 },
//     { id: 3, img: "./imagnes/logo.png", nombre: "Saxofon", precio: 2500, cantidad: 1 },
//     { id: 4, img: "./imagnes/logo.png", nombre: "Violin", precio: 3000, cantidad: 1 },
//     { id: 5, img: "./imagnes/logo.png", nombre: "Teclado", precio: 10000, cantidad: 1 },
// ];

// const carritoCompras = [];

// MOSTRAR PRODUCTOS DINAMICAMENTE DESDE EL DOM 

// const contenedorProductos = document.getElementById ("contenedorProductos");

// instrumentosMusicales.forEach (instrument => {
//     contenedorProductos.innerHTML += 
//     `
//     <div>
//         <img src="${instrument.img}" alt="${instrument.nombre}">
//         <h2>${instrument.nombre} </h2>
//         <p>Precio : ${instrument.precio} </p>
//         <button id="${instrument.id}">Agregar al carrito </button>
//     </div>
//     `
// })
