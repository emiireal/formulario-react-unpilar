import { useState } from "react";
import Campo from "./Campo";
import {
  CARRERAS,
  TURNOS,
  FORM_INICIAL,
  Inscripcion,
  validar,
  mensajeBienvenida,
} from "../utils/inscripcion";

function Formulario({ onInscribir }) {
  // Estado del formulario (un object literal) y de los errores
  const [datos, setDatos] = useState(FORM_INICIAL);
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState("");

  // Un solo manejador para todos los campos, usando el "name" del input
  const manejarCambio = (evento) => {
    const { name, value, type, checked } = evento.target;
    setDatos({ ...datos, [name]: type === "checkbox" ? checked : value });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault(); // evita que la página se recargue

    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      setMensaje("");
      return;
    }

    // Se crea el objeto con el Object Constructor
    const inscripcion = new Inscripcion(datos);
    console.log("Nueva inscripción:", inscripcion);
    console.log(inscripcion.resumen()); // método del prototype

    onInscribir(inscripcion);
    setMensaje(mensajeBienvenida(inscripcion.nombre, inscripcion.carrera));
    setDatos(FORM_INICIAL);
  };

  const limpiar = () => {
    setDatos(FORM_INICIAL);
    setErrores({});
    setMensaje("");
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio} noValidate>
      <h2>Formulario de inscripción</h2>

      <div className="fila">
        <Campo id="nombre" etiqueta="Nombre" error={errores.nombre}>
          <input id="nombre" name="nombre" type="text" value={datos.nombre}
            onChange={manejarCambio} autoComplete="given-name" />
        </Campo>
        <Campo id="apellido" etiqueta="Apellido" error={errores.apellido}>
          <input id="apellido" name="apellido" type="text" value={datos.apellido}
            onChange={manejarCambio} autoComplete="family-name" />
        </Campo>
      </div>

      <div className="fila">
        <Campo id="email" etiqueta="Correo electrónico" error={errores.email}>
          <input id="email" name="email" type="email" value={datos.email}
            onChange={manejarCambio} autoComplete="email" />
        </Campo>
        <Campo id="edad" etiqueta="Edad" error={errores.edad}>
          <input id="edad" name="edad" type="number" min="17" max="99"
            value={datos.edad} onChange={manejarCambio} />
        </Campo>
      </div>

      <Campo id="carrera" etiqueta="Carrera" error={errores.carrera}>
        <select id="carrera" name="carrera" value={datos.carrera} onChange={manejarCambio}>
          <option value="">-- Elegí una opción --</option>
          {Object.entries(CARRERAS).map(([clave, nombre]) => (
            <option key={clave} value={clave}>{nombre}</option>
          ))}
        </select>
      </Campo>

      <fieldset className={`campo ${errores.turno ? "campo--error" : ""}`}>
        <legend>Turno</legend>
        <div className="opciones">
          {TURNOS.map((turno) => (
            <label key={turno} className="opcion">
              <input type="radio" name="turno" value={turno}
                checked={datos.turno === turno} onChange={manejarCambio} />
              {turno}
            </label>
          ))}
        </div>
        {errores.turno && <span className="campo__error" role="alert">{errores.turno}</span>}
      </fieldset>

      <Campo id="comentario" etiqueta="Comentario (opcional)">
        <textarea id="comentario" name="comentario" rows="3"
          value={datos.comentario} onChange={manejarCambio} />
      </Campo>

      <div className={`campo ${errores.acepta ? "campo--error" : ""}`}>
        <label className="opcion">
          <input type="checkbox" name="acepta" checked={datos.acepta} onChange={manejarCambio} />
          Acepto que mis datos se usen para la inscripción
        </label>
        {errores.acepta && <span className="campo__error" role="alert">{errores.acepta}</span>}
      </div>

      <div className="acciones">
        <button type="button" className="boton boton--secundario" onClick={limpiar}>
          Limpiar
        </button>
        <button type="submit" className="boton">Enviar inscripción</button>
      </div>

      {mensaje && <p className="mensaje-ok" role="status">{mensaje}</p>}
    </form>
  );
}

export default Formulario;
