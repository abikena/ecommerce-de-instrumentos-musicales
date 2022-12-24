let nombre = prompt("Bienvenido(a), proporcione su nombre");
const apellido = prompt("Mencione su primer apellido");
let edadUsuario = parseInt(prompt ("Favor de colocar su edad"));


// CONCATENACION
//const datosUsuario = alert ("Hola" + nombre + apellido + ", usted tiene" + edadUsuario + "años de edad".);


//INTERPOLACION o TRANSPOLACION 
const entrada = alert (`Bienvenido(a) ${nombre}, su apellido es ${apellido} y usted tiene ${edadUsuario} años de edad.`)

console.log (nombre);
console.log (apellido);
console.log (edadUsuario);


if (edadUsuario >= 17){
    alert("puede navegar por la pagina libremente");
}else{
    alert ("es muy joven, si quiere navegar por la pagina favor de hacerlo con alguien mayor de edad.");
}

let edadAcompañante = parseInt(prompt ("En caso de tener menos de 17, favor de colocar la edad de su acompañante, caso contrario, favor de dejar el espacio en blanco"));
alert(edadUsuario + edadAcompañante);


let pregunta = false;

do {
    pregunta = prompt ("Es la primera vez que navega en nuestra pagina?. Si no quiere responder, puede darle en cancelar");
    alert("Respuesta:" + pregunta);
} while (pregunta);

//while(nombre != "SALIR") {
//    alert ("Hola" + nombre + "\nEsta dentro de un ciclo. Para escapar de el, porfavor escribe `SALIR`.");
//    nombre = prompt ("Para continuar escriba SALIR").toUpperCase();
//}
