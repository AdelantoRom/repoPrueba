export default function Analisis() {
  return (
    <div
  className="relative w-[1670px] mx-auto px-8"
  style={{ transform: 'translateY(-580px) translateY(40px)' }}
>

      {/* Título */}
      <div className="mb-16 text-center col-span-3">
        <h1
          className="font-light text-black text-[112px] leading-[120px]"
          style={{ transform: 'translateX(-80px)' }}
        >
          Análisis del negocio y <br />
          propuesta de valor diferencial
        </h1>
      </div>

      {/* Grid container */}
      <div
        className="grid grid-cols-[480px_480px_480px] justify-between gap-x-8 gap-y-4"
        style={{ height: 'auto' }}
      >
        {/* Tarjeta 1 */}
        <div
          className="bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-12 pb-10 mt-26"
          style={{
            backgroundImage: "url('/Gradiente-Home-2.png')",
            height: '370px',
            transform: 'translateX(-30px)',
          }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            ¿Dónde estás y a dónde
            <br />
            puedas llegar? Estudiamos
            <br />
            tu posición en el mercado e
            <br />
            identificamos oportunidades
            <br />
            mediante un benchmarking
            <br />
            estratégico.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-14 pb-10 mt-32"
          style={{
            backgroundImage: "url('/Gradiente-Home-2.png')",
            height: '330px',
            transform: 'translateX(-70px)',
          }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            El valor clave de tu empresa.
            <br />
            Definimos lo que hace única
            <br />
            a tu oferta frente a la
            <br />
            competencia y preferente
            <br />
            para el público consumidor.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="bg-cover bg-center text-white rounded-3xl overflow-hidden flex items-start justify-center px-10 pt-12 pb-10 mt-18"
          style={{
            backgroundImage: "url('/Gradiente-Home-2.png')",
            height: '474px',
            transform: 'translateX(-110px)',
          }}
        >
          <p className="font-medium text-[30px] leading-[42px] text-left">
            Inteligencia competitiva.
            <br />
            Transformamos ese valor
            <br />
            distintivo en un diseño
            <br />
            atractivo, una comunicación
            <br />
            impactante y una estrategia
            <br />
            sólida para asegurar tu
            <br />
            liderazgo en el espacio
            <br />
            virtual.
          </p>
        </div>
      </div>
    </div>
  );
}

