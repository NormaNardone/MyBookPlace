import React, { useState } from 'react';
import axios from 'axios';


function Books() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyC5Uyo2-6yrPtv3h8ZRwDS62zYETqRwVp4`
      );

      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (


    <div className="mt-5">

      <h1 className="text-2xl text-center text-zinc-300 mt-4">Consigue informacón sobre tus libros favoritos</h1>
      <input
        type="text"
        placeholder="Nombre del libro..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="ml-0 p-2 mt-5 text-zinc-600 border border-gray-600 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-sky-400"
      >
        Buscar
      </button>

      <div>

        <div className="grid grid-cols-2 gap-4 p-4">
          {books.map((book) => (
            <div key={book.id} className="bg-pink-200 text-lg text-center mt-10 text-zinc-600 p-4 py-2 shadow-md">
              <h2 className="text-2xl text-zinc-600 font-bold mt-5">{book.volumeInfo.title}</h2>
            
              <p className='text-sg text-pink-600 font-bold'>{book.volumeInfo.authors?.join(', ')}</p>
              <a
                href={book.volumeInfo.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:underline"
              >
                Leer el libro
              </a>
              <p>{book.volumeInfo.description}</p>
              <img className="w-32 h-40 mx-auto mb-4 mt-10" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Books;