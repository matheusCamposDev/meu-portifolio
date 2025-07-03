import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="mx-auto px-20 py-3 flex justify-end items-center">
        <ul className="flex gap-6">
          <li><Link to="/home" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">Sobre mim</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projetos</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}