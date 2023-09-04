import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();


    return (
        <nav className="bg-pink-600 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to={
                isAuthenticated ? '/listas' : '/'
            }>
                <h1 className="text-2xl font-bold">MyBookPlace</h1>
            </Link>

            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                         {user.username}
                        </li>
                        <li>
                            <Link to="/nueva-lista" className="bg-sky-500 px-4 py-1 rounded-full  hover:bg-pink-300 transition duration-300" >Nuevo Libro</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => logout()}>
                                Salir
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="bg-sky-500 px-4 py-1 rounded-full  hover:bg-pink-300 transition duration-300">Login</Link>
                        </li>
                        <li>
                            <Link to="/registro" className="bg-sky-500 px-4 py-1 rounded-full  hover:bg-pink-300 transition duration-300">Registro</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar