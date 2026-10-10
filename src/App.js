import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaInscriptos from "./components/ListaInscriptos";
import "./App.css";

function App() {
  const [inscripciones, setInscripciones] = useState([]);

  const agregar = (nueva) => setInscripciones([...inscripciones, nueva]);
  const borrar = (indice) =>
    setInscripciones(inscripciones.filter((_, i) => i !== indice));

  return (
    <div className="app">
      <header className="encabezado">
        <p className="encabezado__sub">Universidad Nacional de Pilar · Desarrollo Web</p>
        <h1>Inscripción a carreras</h1>
      </header>

      <main className="contenido">
        <Formulario onInscribir={agregar} />

        <section className="panel">
          <h2>Inscriptos ({inscripciones.length})</h2>
          <ListaInscriptos inscripciones={inscripciones} onBorrar={borrar} />
        </section>
      </main>

      <footer className="pie">Hecho con React JS · create-react-app</footer>
    </div>
  );
}

export default App;
