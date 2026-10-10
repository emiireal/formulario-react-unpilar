# Formulario de inscripción en React — UNPilar

Trabajo práctico de **Desarrollo Web** (Universidad Nacional de Pilar).
Autor: Emiliano Real.

Aplicación de tipo formulario hecha con **React JS** usando **create-react-app**, que aplica los temas trabajados en la cursada: HTML, CSS y JavaScript (variables `let`/`const`, funciones, arrow functions, template strings, object literal, object constructor y prototypes).

## Requisitos

- [Node.js](https://nodejs.org/) (última versión LTS) — incluye `npm`
- Git

## Cómo descargarla y ejecutarla

```bash
git clone https://github.com/USUARIO/formulario-react-unpilar.git
cd formulario-react-unpilar
npm install
npm start
```

Se abre en el navegador en `http://localhost:3000`.

Para generar la versión de producción: `npm run build`.

## Qué hace

- Formulario con nombre, apellido, correo, edad, carrera (select), turno (radio), comentario (textarea) y aceptación de términos (checkbox).
- Valida los datos y muestra los errores debajo de cada campo.
- Cada inscripción válida se guarda en una lista que se puede ir borrando.
- En la consola del navegador (F12) se ve cada objeto creado.

## Dónde está cada tema de la cursada

| Tema | Archivo |
|---|---|
| HTML base (`div` donde se monta la app) | `public/index.html` |
| CSS (estilos, grid, responsive) | `src/App.css` |
| `const` / `let` | todo `src/` |
| Funciones tradicionales | `validar()` en `src/utils/inscripcion.js` |
| Arrow functions (con y sin llaves, 1 y 2 parámetros) | `src/utils/inscripcion.js`, `src/components/` |
| Template strings | `resumen()`, `mensajeBienvenida()` |
| Object literal | `CARRERAS`, `FORM_INICIAL` |
| Object constructor (`new`) | `Inscripcion` |
| Prototypes | `Inscripcion.prototype.resumen` y `fechaTexto` |
| Componentes, props y estado (React) | `src/App.js`, `src/components/` |

## Práctica de JavaScript (sin React)

La carpeta `ejercicio-js/` tiene la práctica de la Clase II rehecha con ejemplos propios (`index.html` + `app.js`). Se abre con la extensión **Live Server** de VS Code (clic derecho en `index.html` → *Open with Live Server*) y se mira la salida en la consola.

## Estructura

```
formulario-react-unpilar/
├── ejercicio-js/        práctica de JS de la Clase II
├── public/index.html
├── src/
│   ├── components/      Campo, Formulario, ListaInscriptos
│   ├── utils/           lógica y validación
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```
