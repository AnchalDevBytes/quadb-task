import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 text-white h-20">
      <div className="max-w-5xl m-auto flex justify-between items-center">
        <div>
          <h3 className="text-5xl tracking-widest font-extrabold mb-2">QuadB-Task</h3>
          <p className="text-fuchsia-400">A movie booking app</p>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-purple-400 hover:text-purple-300">Home</Link>
          <Link to="https://github.com/anchalraj31082004" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
