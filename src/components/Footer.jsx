import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={footerStyles}>
      <div id='main' className={mainDivStyles}>
        <div>
          <h3 className={h3Styles}>QuadB-Task</h3>
          <p className="text-fuchsia-400 text-sm md:text-base">A movie booking app</p>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-purple-400 hover:text-purple-300">Home</Link>
          <Link to="https://github.com/anchalraj31082004" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub</Link>
        </div>
      </div>
    </footer>
  );
};

//tailwind classes

const footerStyles = `bg-fuchsia-950 text-white lg:h-28 h-fit p-5`
const mainDivStyles = `lg:max-w-5xl m-auto flex justify-between items-center`
const h3Styles = `md:text-5xl text-2xl tracking-widest font-extrabold mb-2`

export default Footer;
