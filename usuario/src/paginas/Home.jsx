import { Link } from "react-router-dom"
import lectura from '../assets/lectura.png'

function Home() {
  return (

    <div className="bg-pink-200 bg-cover bg-center h-screen flex flex-col justify-center items-center">
      <img className="w-100 h-60 mt-4" src={lectura} alt="lectura"/>
      <h1 className="text-5xl font-bold text-sky-600 mt-5">COMUNIDAD LECTORA</h1>
      <p className="text-4xl font-bold text-sky-600 mt-5">Bienvenidos</p>


    
          <p className="text-xl text-zinc-600 mt-8">¿Cuántos libros has leído este año?</p>
          <Link className="ml-2 mb-5 px-4 py-2" to="/login">
            <button className="px-3 py-1 mt-1 bg-pink-500 text-white rounded-full hover:bg-sky-400">Click Aquí</button>
          </Link>
      

       
          <p className="text-xl text-zinc-600 mt-1">¿Quieres información sobre algún libro?</p>
          <Link className="ml-2 mb-5 px-4 py-2" to="/InfoBook">
            <button className="px-4 py-1 bg-pink-500 text-white rounded-full hover:bg-sky-400">Click Aquí</button>
          </Link>
     
      </div>



  )
}

export default Home
