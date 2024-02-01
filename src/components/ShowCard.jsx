import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  const {
    name,
    image,
    genres,
    premiered,
    status,
  } = show;

  return (
    <Link to={`/movie/${show.id}`} className="w-[250px] mx-auto bg-gray-800 text-white rounded-md overflow-hidden shadow-md hover:scale-105 hover:bg-gray-950 transition-all">
      <img className="w-full h-40 object-cover" src={image?.medium} alt={name} />

      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{name}</h2>
        <p className="text-gray-400 text-sm mb-2">Genres: {genres?.join(', ')}</p>
        <p className="text-gray-400 text-sm mb-2">Premiered: {premiered}</p>
        <p className={`text-sm ${status === 'Ended' ? 'text-red-500' : 'text-green-500'}`}>Status: {status}</p>
      </div>
    </Link>
  );
};

export default ShowCard;
