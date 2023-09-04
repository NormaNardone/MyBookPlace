import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react"; 
import lectura from '../assets/lectura.png'

function Login() {

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

const onSubmit = handleSubmit((data) => {
  signin(data);
});

useEffect(() => {
  if (isAuthenticated) {
    navigate("/listas");
  }
}, [isAuthenticated]);

return (
  <div className="bg-pink-200 bg-cover bg-center h-screen flex flex-col justify-center items-center">
    <img className="w-100 h-60 mt-4" src={lectura} alt="lectura"/>
  <div className="h-[calc(100vh-100px)] flex items-center justify-center">
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

    {
        signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))
      }

      <h1 className="text-2xl font-bold my-2">Login</h1>
      <form
        onSubmit={onSubmit}
      >

        <input type="email" {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500">Email es requerido</p>
        )}

        <input type="password" {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Contraseña es requerida</p>
        )}

        <button type="submit"
        className="bg-sky-500 text-white px-4 py-2 rounded-md my-2">Login</button>
      </form>

      <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta? <Link to="/registro" className="text-sky-500">Registrarse</Link>
        </p>
    </div>
  </div>
  </div>
)
}

export default Login