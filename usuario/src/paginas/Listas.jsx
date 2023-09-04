import { useEffect } from "react";
import { useListas } from "../context/ListasContext"
import ListaCard from "../components/ListaCard"

function Listas() {
  const { getListas, listas } = useListas();


  useEffect(() => {
    getListas();
  }, []);

  if (listas.length === 0) return (<h1 className="text-center text-5xl font-bold text-zinc-600 mt-40">Tu lista de libros leídos</h1>);

  return (
    
   
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <h1 className="text-center text-xl font-bold text-zinc-600 mt-10">Tu lista de libros leídos</h1>
      {listas.map((lista) => (
        <ListaCard lista={lista} key={lista._id} />

      ))}
    </div>
   
  );
}

export default Listas