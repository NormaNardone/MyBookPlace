import { createContext, useContext, useState } from 'react';
import { createListaRequest, getListasRequest, deleteListaRequest, getListaRequest, updateListaRequest } from "../api/listas";

const ListaContext = createContext();

export const useListas = () => {
    const context = useContext(ListaContext);

    if (!context) {
        throw new Error("useListas must be used within a ListaProvider");
    };

    return context;
}

export function ListaProvider({ children }) {
    const [listas, setListas] = useState([]);

    const getListas = async () => {
        try {
          const res = await getListasRequest();
          setListas (res.data);
        } catch (error) {
          console.error(error);
        }
      };
    

    const createLista = async (lista) => {
        const res = await createListaRequest(lista);
        console.log(res);

    };

    const deleteLista = async (id) => {
        try {
          const res = await deleteListaRequest(id);
          if (res.status === 204) setListas(listas.filter((lista) => lista._id !== id));
        } catch (error) {
          console.log(error);
        }
      };

      const getLista = async (id) => {
        try {
          const res = await getListaRequest(id);
          return res.data;
        } catch (error) {
          console.error(error);
        }
      };

      const updateLista = async (id, lista) => {
        try {
          await updateListaRequest(id, lista);
        } catch (error) {
          console.error(error);
        }
      };

    return <ListaContext.Provider
        value={{
            listas,
            createLista,
            getListas,
            getLista,
            deleteLista,
            updateLista,
        }}
    >
        {children}
    </ListaContext.Provider>
}
