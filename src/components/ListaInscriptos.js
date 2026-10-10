// Muestra las inscripciones cargadas usando los métodos del prototype
function ListaInscriptos({ inscripciones, onBorrar }) {
  if (inscripciones.length === 0) {
    return <p className="vacio">Todavía no hay inscripciones cargadas.</p>;
  }

  return (
    <ul className="lista">
      {inscripciones.map((insc, indice) => (
        <li key={insc.fecha.getTime() + "-" + indice} className="lista__item">
          <div>
            <strong>{insc.resumen()}</strong>
            <small>{insc.email} · {insc.edad} años · {insc.fechaTexto()}</small>
          </div>
          <button className="boton boton--chico" onClick={() => onBorrar(indice)}
            aria-label={`Borrar inscripción de ${insc.nombre}`}>
            Borrar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaInscriptos;
