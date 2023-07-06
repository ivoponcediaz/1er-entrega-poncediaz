let usuario = prompt("Tu nombre de usuario");
let contrasenia = prompt("Tu contraseña");

if (usuario == "juan" && contrasenia == "1234") {
  alert("Bienvenido Juan !!");
} else {
  alert("Usuario y/o contrasenia erroneos");
}

let producto = prompt(
  "1-Rosa China ... $1800\n2-Palmeras ... $5300\n3-Heliconia ... $3600\n4-Strelitzia ... $2800\n0-Para finalizar"
);

function mostrarCuotas() {
  console.log("Nuestras plantas tienen");
  for (let i = 1; i <= 6; i++) console.log(i + "Cuotas sin interes");
}

function mostrarPrecio(codigo) {
  switch (codigo) {
    case "1":
      console.log("El precio de las Rosa China es de: $1800");
      break;

    case "2":
      console.log("El precio de las Palmeras es de: $5300");
      break;

    case "3":
      console.log("El precio de las Heliconia es de: $3600");
      break;

    case "4":
      console.log("El precio de las Strelitzia es de: $2800");
      break;

    default:
      console.warn("Lo que usted pide no esta disponible");
      break;
  }
}

function consultarPlantas() {
  let respuesta = confirm("Quieres saber cuales son nuestros precios?");
  if (respuesta === true) {
    let codigo = prompt("Ingrese el codigo de la planta que desea adquirir");
    mostrarPrecio(codigo);
    mostrarCuotas();
  } else {
    console.log("Gracias por visitarnos, te esperamos pronto");
  }
}
