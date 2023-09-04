import { useListas } from "../context/ListasContext"
import { Link } from "react-router-dom";

function ListaCard({ lista }) {

   const { deleteLista }= useListas();


  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded">
   <header className="flex justify-between">
   <h1 className="text-2xl font-bold">{lista.titulo}</h1>
    <div className="flex gap-x-2 items-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
           onClick={() => deleteLista(lista._id)}>Borrar</button>
          <Link  to={`/listas/${lista._id}`} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Editar</Link>
        </div>
   </header>
    <p className="text-slate-300">{lista.tematica}</p>
    <p className="text-slate-300">{lista.autor}</p>
  </div>
  );
}

export default ListaCard;