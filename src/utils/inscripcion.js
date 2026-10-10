// Lógica del formulario, usando los temas vistos en la cursada:
// const/let, funciones tradicionales, arrow functions, template strings,
// object literal, object constructor y prototypes.

// Object literal: opciones fijas del formulario
export const CARRERAS = {
  informatica: "Licenciatura en Informática",
  enfermeria: "Licenciatura en Enfermería",
  administracion: "Licenciatura en Administración",
  diseno: "Tecnicatura en Diseño Web",
};

export const TURNOS = ["Mañana", "Tarde", "Noche"];

// Object literal: estado inicial del formulario
export const FORM_INICIAL = {
  nombre: "",
  apellido: "",
  email: "",
  edad: "",
  carrera: "",
  turno: "",
  comentario: "",
  acepta: false,
};

// Object constructor: molde para crear cada inscripción
export function Inscripcion(datos) {
  this.nombre = datos.nombre.trim();
  this.apellido = datos.apellido.trim();
  this.email = datos.email.trim();
  this.edad = Number(datos.edad);
  this.carrera = datos.carrera;
  this.turno = datos.turno;
  this.comentario = datos.comentario.trim();
  this.fecha = new Date();
}

// Prototype: método compartido por todas las inscripciones
Inscripcion.prototype.resumen = function () {
  return `${this.apellido}, ${this.nombre} - ${CARRERAS[this.carrera]} (turno ${this.turno})`;
};

Inscripcion.prototype.fechaTexto = function () {
  return this.fecha.toLocaleString("es-AR");
};

// Arrow functions simplificadas para validar
const estaVacio = valor => valor.trim() === "";
const emailValido = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Función tradicional que devuelve un object literal con los errores
export function validar(datos) {
  let errores = {};

  if (estaVacio(datos.nombre)) errores.nombre = "Ingresá tu nombre.";
  if (estaVacio(datos.apellido)) errores.apellido = "Ingresá tu apellido.";

  if (estaVacio(datos.email)) {
    errores.email = "Ingresá tu correo.";
  } else if (!emailValido(datos.email)) {
    errores.email = "El correo no tiene un formato válido.";
  }

  const edad = Number(datos.edad);
  if (estaVacio(datos.edad)) {
    errores.edad = "Ingresá tu edad.";
  } else if (!Number.isInteger(edad) || edad < 17 || edad > 99) {
    errores.edad = "La edad debe estar entre 17 y 99 años.";
  }

  if (!datos.carrera) errores.carrera = "Elegí una carrera.";
  if (!datos.turno) errores.turno = "Elegí un turno.";
  if (!datos.acepta) errores.acepta = "Tenés que aceptar los términos.";

  return errores;
}

// Arrow function con dos parámetros (paréntesis obligatorios)
export const mensajeBienvenida = (nombre, carrera) =>
  `¡Gracias ${nombre}! Tu inscripción a ${CARRERAS[carrera]} fue registrada.`;
