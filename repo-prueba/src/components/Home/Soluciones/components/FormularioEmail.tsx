export default function FormularioEmail() {
  return (
    <div className="flex flex-col pl-4 pr-2 lg:pl-[72px] lg:pr-8 2xl:pl-[40px] w-full lg:max-w-[650px] 2xl:ml-26 2xl:mt-4 2xl:mr-auto">
      <div className="flex flex-col w-full lg:w-[962px] h-auto  2xl:relative top-[-250px]">
      <h3 className="text-[18px] lg:text-[22px] font-normal leading-[24px] text-white max-w-[550px] lg:-mt-12 lg:mb-10">

          ¡Anótate ahora y participa de un sorteo con
          <br className="hidden lg:block" />
          importantes beneficios para tu próxima campaña!
        </h3>
        <div className="flex flex-col space-y-2 mt-4 max-w-[337px] lg:max-w-[501px]">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border rounded-md border-white text-white placeholder-white focus:outline-none focus:border-[#00CED1] text-[18px] lg:text-[22px] leading-[32px] py-1 lg:py-2 pl-4 h-[32px] lg:h-[46px] 2xl:h-[46px]"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-[18px] lg:text-[22px] 2xl:text-[24px] font-bold h-[32px] lg:h-[38px] 2xl:h-[46px] w-[115px] lg:w-[152px] 2xl:w-[186px] rounded-[50px] mt-10 mx-auto lg:mx-0"
            style={{ color: '#19B7CC' }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}



