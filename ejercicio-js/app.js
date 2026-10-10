// =====================================================
// Práctica de JavaScript - Desarrollo Web (UNPilar)
// Mismos temas de la Clase II, con ejemplos propios
// =====================================================

// --- Primer mensaje por consola ---
console.log("¡Bienvenidos a la práctica de JavaScript!");


// =====================================================
// 1) VARIABLES: var, let y const
// =====================================================
// var  -> alcance de función (se "escapa" de los bloques if/for).
// let  -> alcance de bloque, se puede reasignar.
// const-> alcance de bloque, NO se puede reasignar y hay que
//         darle valor en el momento de crearla.
console.log("--- Variables ---");

const materia = "Desarrollo Web";   // obligatoria con valor inicial
var colectivo = "Línea 57";          // con var
let tren = "Belgrano Norte";         // con let

let sinValor;                        // let/var pueden quedar sin inicializar
console.log("Variable sin inicializar:", sinValor); // undefined


// =====================================================
// 2) DIFERENCIA ENTRE var Y let (alcance)
// =====================================================
console.log("--- var vs let ---");

if (colectivo) {
   var colectivo = "Línea 315";      // pisa a la variable de afuera
   console.log("Dentro del bloque:", colectivo);
}
console.log("Fuera del bloque:", colectivo);   // Línea 315 (¡cambió!)

if (tren) {
   let tren = "Sarmiento";           // vive solo dentro de las llaves
   console.log("Dentro del bloque:", tren);
}
console.log("Fuera del bloque:", tren);        // Belgrano Norte (no cambió)


// =====================================================
// 3) FUNCIONES
// =====================================================
console.log("--- Funciones ---");

// Paso 1: se declara
function saludar() {
   console.log("Hola desde la función saludar");
}

// Paso 2: se invoca (todas las veces que quiera)
saludar();
saludar();

// Función guardada en una variable, con parámetro
let inscribir = function (carrera) {
   console.log("Te inscribiste en la carrera:", carrera);
};
inscribir("Licenciatura en Informática");


// =====================================================
// 4) REPRESENTACIÓN DE STRINGS (comillas y template strings)
// =====================================================
console.log("--- Strings ---");

const jugadora = "Delfina";
const camiseta = "7";

console.log(jugadora + " usa la camiseta " + camiseta);   // concatenación
console.log("${jugadora} usa la camiseta ${camiseta}");    // NO interpola (comillas dobles)
console.log(`${jugadora} usa la camiseta ${camiseta}`);    // SÍ interpola (backticks)


// =====================================================
// 5) ARROW FUNCTIONS
// =====================================================
console.log("--- Arrow functions ---");

// Función tradicional
const tradicional = function (comida) {
   console.log(`Mi comida preferida es ${comida}`);
};
tradicional("el asado");

// Arrow con llaves y return (un solo parámetro, sin paréntesis)
const plato = comida => {
   return `Mi comida preferida es ${comida}`;
};
let preferido = plato("las empanadas");
console.log(preferido);
console.log(plato("la milanesa"));

// Arrow simplificada: sin llaves, el resultado se devuelve solo
const destino = lugar => console.log(`Me gustaría viajar a ${lugar}`);
destino("Bariloche");

// Con dos o más parámetros, los paréntesis son obligatorios
const destinos = (lugar1, lugar2) =>
   console.log(`Me gustaría viajar a ${lugar1} o a ${lugar2}`);
destinos("Salta", "Ushuaia");


// =====================================================
// 6) OBJECT LITERAL
// =====================================================
// Un objeto agrupa características (propiedades) de algo real.
console.log("--- Object literal ---");

const libro = {
   titulo: "Rayuela",
   autor: "Julio Cortázar",
   anio: 1963
};

// Lo mismo pero en variables sueltas (sin objeto)
let tituloSuelto = "Ficciones";
let autorSuelto = "Jorge Luis Borges";

// Comparar cómo lo muestra la consola
console.log(libro);
console.log(tituloSuelto);
console.log(autorSuelto);

// Dos maneras de leer una propiedad
console.log(libro.titulo);       // notación de punto
console.log(libro["autor"]);     // notación de corchetes

// Para otro libro con la misma forma, hay que escribir otro objeto
const otroLibro = {
   titulo: "El Aleph",
   autor: "Jorge Luis Borges",
   anio: 1949
};
console.log(otroLibro.titulo, "-", otroLibro.autor);


// =====================================================
// 7) OBJECT CONSTRUCTOR
// =====================================================
// Un "molde" para fabricar muchos objetos con la misma estructura.
console.log("--- Object constructor ---");

function Estudiante(nombre, carrera, turno) {
   this.nombre = nombre;
   this.carrera = carrera;
   this.turno = turno;
}

const est1 = new Estudiante("Lucía", "Informática", "Noche");
const est2 = new Estudiante("Tomás", "Enfermería");   // turno queda undefined

console.log(est1);
console.log(est2);
console.log(est1.nombre);


// =====================================================
// 8) PROTOTYPES
// =====================================================
// Permiten agregarle un método a TODOS los objetos de un mismo tipo.
console.log("--- Prototypes ---");

function Mascota(nombre, especie) {
   this.nombre = nombre;
   this.especie = especie;
}

Mascota.prototype.presentarse = function () {
   return `Me llamo ${this.nombre} y soy un ${this.especie}`;
};

const mascota1 = new Mascota("Firulais", "perro");
const mascota2 = new Mascota("Michi", "gato");

console.log(mascota1);
console.log(mascota2);

let texto1 = mascota1.presentarse();
console.log(texto1);
console.log(mascota2.presentarse());

console.log("¡Fin de la práctica!");
