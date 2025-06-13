import Image from 'next/image';

export default function Footer() {
  return (
    <div className="relative w-full h-[277px] bg-no-repeat bg-[length:100%_100%] bg-[url('/footer.png')]">

      {/* Bloque izquierdo (logo + soluciones) más cerca del centro */}
    <div className="absolute left-[180px] top-[40%] -translate-y-1/2 flex flex-col space-y-2">

     
  <Image src="/logofooter.png" alt="Logo Footer" width={245} height={39} />
  <Image src="/footersoluciones.png" alt="Soluciones" width={245} height={28} />
</div>


      {/* Imagen derechos centrada */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src="/footerderechos.png" alt="Derechos" width={1255} height={28} />
      </div>

      {/* logoin.png (esquina derecha con margen) */}
      <div className="absolute right-[180px] bottom-[125px]">
        <Image src="/logoin.png" alt="Logo IN" width={90} height={90} />
      </div>

    </div>
  );
}
