import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="bg-gray-900 sticky top-0 left-0 w-full">
      <nav className="mx-auto lg:pr-10 md:pr-10 py-3 flex justify-center lg:justify-end md:justify-end sm:justify-center items-center">
        <ul className="flex gap-6 text-white font-mono">
          <li><Link to="/home" className="hover:text-green-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-400">Sobre mim</Link></li>
          <li><Link to="/projects" className="hover:text-green-400">Projetos</Link></li>
          <li><Link to="/contact" className="hover:text-green-400">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}