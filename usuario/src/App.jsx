import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"

import Registro from "./paginas/Registro";
import Login from "./paginas/Login";
import Listas from "./paginas/Listas";
import ListasForm from "./paginas/ListasForm";
import Home from "./paginas/Home";
import Perfil from "./paginas/Perfil";
import ProtectedRoute from "./ProtectedRoute";
import { ListaProvider } from "./context/ListasContext";
import Navbar from './components/Navbar';
import Books from "./components/Books";


function App() {
  return (
    <AuthProvider>
      <ListaProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10 md:px-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/InfoBook" element={<Books />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/listas" element={<Listas />} />
                <Route path="/nueva-lista" element={<ListasForm />} />
                <Route path="/listas/:id" element={<ListasForm />} />
                <Route path="/perfil" element={<Perfil />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter >
      </ListaProvider>
    </AuthProvider>
  )
}

export default App