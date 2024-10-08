//Ejercicio 2
let a = 10;
let b = 15;
let c = a+b;
console.log(c);

//Ejercicio 3
let input1 = window.prompt ("Cual es su nombre?");
console.log("Hola", input1);

//Ejercicio 4
function mayor () {
  let a = 130;
  let b = 30;
  let c = 100;
  return Math.max(a,b,c);
}
let resultadomayor = mayor();
console.log("El mayor de los numeros es: ", resultadomayor);

//Ejercicio 5
function paroimpar () {
  let pregunta = window.prompt("Ingrese un numero y te dire si es par o impar")
 if ((pregunta%2)==0) {
  console.log("El numero ",pregunta, " es par");
  } else {
     console.log("El numero",pregunta, " es impar");
  }
}
paroimpar();

//Ejercicio 6
function mientras () {
  console.log("Ejercicio 6");
  let k = 10;
  let i = 1;
  while (i <= k) {
    console.log(k);
    k--;
  }
}
mientras();

//Ejercicio 7
function mayora100 () {
  let cuadro;
  do {
    cuadro = window.prompt("Ingrese un numero mayor a 100");
  } while (cuadro<=100)
  console.log("Ingresaste un numero mayor que 100: ", cuadro);
}
mayora100();

//Ejercicio 8
function espar (numero) {
  if ((numero%2)==0) {
    return true;
  } else {
    return false;
  }
}
let num = 213123
console.log("El numero " + num + " es par?: ",espar(num));

//Ejercicio 9
function calculadoraCaF (grados) {
  let faren = (grados*1.8)+32;
  console.log(grados+"°C son equivalentes a "+faren+"°F");
}
calculadoraCaF(30);

//Ejercicio 10
let persona = {
  nombre: "",
  edad: undefined,
  ciudad: ""
}
function cambiociudad(ciudadn) {
  persona.ciudad = ciudadn;
}
persona.nombre = "Valentin";
persona.edad = 20;
persona.ciudad = "Mendoza";
cambiociudad("Cordoba");
console.log("Persona: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad);

//Ejercicio 11
let libro = {
  titulo: "",
  autor: "",
  año: undefined,
}
function esviejo (libro1) {
  let ap = libro.año;
  let aa = new Date().getFullYear();
  if ((ap - aa)> 10) {
    return true;
  } else {
    return false;
  }
}
libro.titulo = "Metro Exodus";
libro.autor = "Dmitry Glukhovsky";
libro.año = 2015;
console.log(`El libro "${libro.titulo}" es antiguo: `, esviejo(libro));

//Ejercicio 12
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeros2 = numeros.map(function(numero) {
  return numero*2
})
console.log("Numeros originales: ",numeros);
console.log("Numeros multiplicados por 2: ",numeros2);

//Ejercicio 13
let pares = [];
for (let i = 1; i<=20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}
console.log("Primeros 10 numeros pares: ", pares);

//Ejercicio 14
function cambiarcolor() {
  let parrafos = document.querySelectorAll(".parrafo");
  parrafos.forEach(function(parrafo){
    parrafo.classList.add('azul')
  });
}
let boton = document.getElementById("botonparrafo");
boton.addEventListener("click", cambiarcolor);

//Ejercicio 15
function mostraralerta(){
  let mensaje = document.getElementById("textInput").value
  window.prompt("Has ingresado:", mensaje)
}
let boton2 = document.getElementById("botonalerta");
boton2.addEventListener("click",mostraralerta);

//Ejercicio 16
document.addEventListener("DOMContentLoaded", function() {
  var lista = document.getElementById("milista");
  var itemslista = lista.getElementsByTagName("li");
  for (var i = 0; i < itemslista.length; i++) {
      itemslista[i].addEventListener("click", function() {
          console.log("Contenido del elemento:", this.textContent);
      });
  }
});

//Ejercicio 17
document.addEventListener("DOMContentLoaded", function() {
  let texto = document.getElementById("textobotones");
  let desactivado = document.getElementById("desactivar");
  let activado = document.getElementById("activar");

  desactivado.addEventListener('click', function() {
      texto.classList.add("deshabilitar")
      texto.disabled = true;
  });

  activado.addEventListener('click', function() {
    texto.classList.remove("deshabilitar")
      texto.disabled = false;
  });
});

//Ejercicio 18
function guardarCorreo(){
  document.addEventListener("DOMContentLoaded", () => {
    const correoGuardadoDiv = document.getElementById('emailsubido');

    const correoGuardado = localStorage.getItem('inputcorreo');
    if (correoGuardado) {
        mostrarCorreoGuardado(correoGuardado);
    }


    const formCorreo = document.getElementById('FormularioEmail');
    formCorreo.addEventListener('submit', (event) => {
        event.preventDefault();
        const correo = document.getElementById('inputcorreo').value;


        localStorage.setItem('inputcorreo', correo);

        mostrarCorreoGuardado(correo);
    });


    function mostrarCorreoGuardado(correo) {
        correoGuardadoDiv.innerHTML = `
            <p>Correo guardado: ${correo}</p>
            <button id="eliminarCorreo">Eliminar Correo Guardado</button>`
        ;

        document.getElementById('eliminarCorreo').addEventListener('click', () => {
            localStorage.removeItem('inputcorreo');
            correoGuardadoDiv.innerHTML = '';
        });
    }
  });
}
guardarCorreo();