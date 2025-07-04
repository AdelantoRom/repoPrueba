export default function FormularioEmail() {
  return (
    <div className="flex flex-col pl-28 pr-8 w-full max-w-[650px] ml-18 mt-24 mr-auto">
      <div className="flex flex-col w-[962px] h-auto relative top-[-250px]">
        <h3 className="text-[20px] font-normal leading-[28px] text-white max-w-[575px] -mt-12 mb-10">
          ¡Anótate ahora y participa de un sorteo con
          <br />
          importantes beneficios para tu próxima campaña!
        </h3>
        <div className="flex flex-col space-y-2 mt-4 w-[404px]">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border rounded-md border-white text-white placeholder-white focus:outline-none focus:border-[#00CED1] text-[22px] leading-[32px] py-2 pl-4 h-[46px]"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-[18px] font-bold h-[42px] w-[186px] rounded-[56px] mt-10 mx-0"
            style={{ color: '#19B7CC' }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
