import Cards from "./Cards";
import { useState } from "react";

const Listas = () => {
  const frutas = [
    { id: 1, nombre: "Sale para ser feliz", imagen: "sale-para-ser-feliz.png" },
    { id: 2, nombre: "Matadora", imagen: "matadora.png" },
    { id: 3, nombre: "Cobarde", imagen: "cobarde.png" },
  ];

  const [total, setTotal] = useState(0);
  const [busqueda, setBusqueda] = useState("");

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Total de likes de las musicas: {total}</h1>

      <input
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="Ingrese nombre de una musica:"
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
        }}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        {frutasFiltradas.length === 0 && (
          <p style={{ color: "#ccc", fontSize: "20px" }}>
            No se encontraron frutas con el nombre: {busqueda}
          </p>
        )}

        {frutasFiltradas.map((fruta) => {
          return (
            <Cards
              key={fruta.id}
              nombre={fruta.nombre}
              img={fruta.imagen}
              onLike={() => {
                setTotal(total + 1);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Listas;