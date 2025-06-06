export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold text-black">Rombux</div>
      <div className="space-x-12 text-white">
        <a href="#">Servicios</a>
        <a href="#">Casos</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  );
}
