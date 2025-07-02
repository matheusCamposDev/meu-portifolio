export function Navbar() {
  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Matheus Campos</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#sobre" className="hover:text-blue-400">Sobre mim</a></li>
          <li><a href="#projetos" className="hover:text-blue-400">Projetos</a></li>
          <li><a href="#contato" className="hover:text-blue-400">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}