import React from 'react';
import { useSelector } from 'react-redux';
import { ShowCard } from '../components';

const Home = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <section id='container' className={containerStyles}>
      <h1 className={titleH1Styles}>
        Highlighted Movies here
      </h1>
      <div className={gridStyles}>
        {movies.map((movie) => {
          const { show } = movie;
          return <ShowCard key={show.id} show={show} />;
        })}
      </div>
    </section>
  );
};

//tailwind classes
const containerStyles = `w-full max-h-full flex flex-col items-center p-10 bg-fuchsia-950/90 backdrop-filter backdrop-blur`
const titleH1Styles = `text-3xl border-b-4 pb-2 -mt-[25px] mb-5 rounded-b-xl px-5 border-fuchsia-700 drop-shadow-xl font-bold tracking-widest text-purple-400`
const gridStyles = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-x-20 md:gap-y-5`

export default Home;
