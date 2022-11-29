let nombre = prompt("¡Hola! Bienvenido a Tu entrenador personal. Por Favor Indicanos tu nombre");
alert("Un gusto tenerte con nosotros " + nombre + " Ahora haz click en aceptar para comenzar");
alert("Bien este entrenador te orientara para el acondicionamiento físico de brazos, pecho, espalda y piernas" + " Pulsa aceptar para continuar.");

let opcion = ""

do {
    opcion = prompt("Ingrese una de las siguientes opcion: \n 0 - salir \n 1 - Brazos \n 2 - Pecho \n 3 - Espalda \n 4 - Piernas");
  
    if(opcion == 1) {
        alert("Debes entrenar Lunes y Miercoles"+" Para esta zona del cuerpo debes realizar 3 series de 4 repeticiones.");
    } else if (opcion == 2) {
        alert("Debes entrenar los dias Martes"+" Y realizar 3 series de 6 repeticiones.");
    } else if (opcion == 3) {
        alert("Debes entrenar los dias Lunes"+" Y realizar 3 series de 3 repeticiones.");
    } else if (opcion == 4) {
        alert("Debes entrenar los dias Viernes"+" Y realizar zancadas y prensa con 3 series de 6 repeticiones cada una.");
    } else {
        alert("Gracias por visitarnos");
    }
} while (opcion != 0)

// let grupo_musculo = prompt("Indica zona corporal a entrenar");

// for (let i = 0; i<10; i++) {
//     alert(i);
//     }