import { useForm } from 'react-hook-form'
import { useListas } from '../context/ListasContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function ListasForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { createLista, getLista, updateLista } = useListas();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadLista() {
      if (params.id) {
        const lista = await getLista(params.id);
        console.log(lista)
        setValue("titulo", lista.titulo);
        setValue("tematica", lista.tematica);
      }
    };
    loadLista();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateLista(params.id, data)
    } else {
      createLista(data);
    }
    navigate("/listas")

  });

  return (

    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            {...register("titulo", { required: true })}
            className='w-full bg-zinc-700 text-white px-2 py-2 rounded-md my-2'
            autoFocus
          />

          <label htmlFor="tematica">Tematica</label>
          <textarea
            rows="3"
            placeholder="Temática"
            {...register("tematica", { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          ></textarea>

          <label htmlFor="autor">Autor</label>
          <textarea
            rows="3"
            placeholder="Autor"
            {...register("autor", { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          ></textarea>

          <button className='bg-indigo-500 px-3 py-2 rounded-md'>Guardar</button>
        </form>
      </div>
    </div>

  )
}

export default ListasForm;