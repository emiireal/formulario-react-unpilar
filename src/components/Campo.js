// Componente reutilizable: etiqueta + control + mensaje de error.
// Es una arrow function que recibe "props" desestructuradas.
const Campo = ({ id, etiqueta, error, children }) => (
  <div className={`campo ${error ? "campo--error" : ""}`}>
    <label htmlFor={id}>{etiqueta}</label>
    {children}
    {error && (
      <span className="campo__error" id={`${id}-error`} role="alert">
        {error}
      </span>
    )}
  </div>
);

export default Campo;
