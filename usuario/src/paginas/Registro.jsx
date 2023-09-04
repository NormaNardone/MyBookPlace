import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import lectura from '../assets/lectura.png'

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (isAuthenticated) navigate('/listas');
  }, [isAuthenticated]);


  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (

    <div className="bg-pink-200 bg-cover bg-center h-screen flex flex-col justify-center items-center">
     <img className="w-100 h-60 mt-4" src={lectura} alt="lectura"/>
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {
          registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))
        }
        
        <h1 className="text-2xl font-bold my-2">Registro</h1>
        <form
          onSubmit={onSubmit}
        >
          <input type="text" {...register("username", { required: true })}
            className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2" placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Usuario es requerido</p>
          )}


          <input type="email" {...register("email", { required: true })}
            className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2" placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">Email es requerido</p>
          )}

          <input type="password" {...register("password", { required: true })}
            className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2" placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña es requerida</p>
          )}

          <button type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded-md my-2">Registro</button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Ingresar</Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Registro