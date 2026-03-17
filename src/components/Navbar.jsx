export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-zinc-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <img src="/assets/logo.png" className="h-10" />

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-gray-300 cursor-pointer">Inicio</li>
          <li className="hover:text-gray-300 cursor-pointer">Catálogo</li>
          <li className="hover:text-gray-300 cursor-pointer">Servicios</li>
          <li className="hover:text-gray-300 cursor-pointer">Contacto</li>
        </ul>

        <div className="flex items-center gap-2">$0.00</div>
      </div>
    </nav>
  );
}
