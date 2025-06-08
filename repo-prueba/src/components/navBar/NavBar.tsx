export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between py-[63px] px-[143px] bg-[url('/a10b28.png')] bg-cover bg-center">
    
      <img
        src="/logo.png"
        alt="Logo Rombux"
        className="w-[240px] h-[39px]"
      />

   
      <div className="flex items-center space-x-20 text-white text-[32px] leading-[24px] font-normal font-[Albert Sans]">
        <a href="#">Servicios</a>
        <a href="#">Casos</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  );
}
