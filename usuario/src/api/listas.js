import axios from "./axios"

export const getListasRequest = () => axios.get("/listas");

export const getListaRequest = (id) => axios.get(`/listas/${id}`);

export const createListaRequest = (lista) => axios.post("/listas", lista);

export const updateListaRequest = (id, lista) =>
  axios.put(`/listas/${id}`, lista);

export const deleteListaRequest = (id) => axios.delete(`/listas/${id}`);

