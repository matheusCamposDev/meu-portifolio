export function Navbar() {
  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="mx-auto px-20 py-3 flex justify-end items-center">
        <ul className="flex gap-6">
          <li><a href="/#/home" className="hover:text-blue-400">Home</a></li>
          <li><a href="/#/about" className="hover:text-blue-400">Sobre mim</a></li>
          <li><a href="/#/projects" className="hover:text-blue-400">Projetos</a></li>
          <li><a href="/#/contact" className="hover:text-blue-400">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}