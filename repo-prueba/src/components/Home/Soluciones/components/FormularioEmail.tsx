export default function FormularioEmail() {
  return (

    <div className="flex flex-col w-full sm:w-[400px] text-white 
  2xl:-mt-[360px] max-sm:mt-10 
  lg:mx-0 lg:pl-0 pl-5 lg:translate-y-0
  ml-2 md:mx-16 md:-translate-y-28 xl:pl-13 2xl:translate-y-0 2xl:pl-0">

      <h3 className="font-normal  text-[18px] leading-[24px] w-[312px] h-[76px]
      lg:text-[22px] lg:leading-[24px] lg:w-[524px] lg:h-[76px]  mb-4 sm:mb-10 lg:mb-2 lg:-mt-[20px] 2xl:text-[20px] 2xl:leading-[28px] 2xl:-mt-[190px] 2xl:mb-[14px]">
        ¡Anótate ahora y participa de un sorteo con
        <br className="hidden md:block" />
        importantes beneficios para tu próxima campaña!
      </h3>

      <div className="flex flex-col w-full">
        <input
          type="email"
          placeholder="Email"

          className="bg-transparent border rounded-md  text-white border-white placeholder-white focus:outline-none focus:border-[#00CED1] 
          text-[16px] leading-[32px] h-[32px] max-lg:w-[330px] font-semibold py-1 pl-2
          lg:text-[22px] lg:leading-[32px] lg:py-2 lg:pl-2 lg:h-[46px] lg:w-[470px] lg:font-normal
          2xl:text-[16px] 2xl:leading-[24px] 2xl:py-2 2xl:pl-4 2xl:h-[48px] 2xl:w-[404px]"
        />
        <button
          type="submit"
          className="
            bg-white font-semibold rounded-[56px]
            text-[18px] leading-[32px] h-[32px] w-[110px] max-md:ml-26 mt-8
            lg:mx-0 lg:text-[22px] lg:leading-[25px] lg:h-[38px] lg:w-[152px] lg:mt-14 
            2xl:text-[18px] 2xl:leading-[24px] 2xl:h-[46px] 2xl:w-[186px] 2xl:mt-12"
          style={{ color: '#19B7CC' }}
        >
          Enviar
        </button>

      </div>
    </div>
  );
}



// // components/FormularioEmail.tsx
// export default function FormularioEmail() {
//   return (
//     <div className="flex flex-col pl-28 pr-8 w-full max-w-[650px] ml-48 mr-auto">
//       <h3 className="text-[20px] font-normal leading-[28px] text-white max-w-[575px] mb-10">
//         ¡Anótate ahora y participa de un sorteo con
//         <br />
//         importantes beneficios para tu próxima campaña!
//       </h3>

//       <div className="flex flex-col pr-8 w-full max-w-[650px] mr-auto">
//         <div className="relative w-full">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full bg-transparent border rounded-md border-white text-white placeholder-white focus:outline-none focus:border-[#00CED1] text-[22px] leading-[32px] py-2 pl-4 h-[46px]"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-white text-[18px] font-bold h-[42px] w-[186px] rounded-[56px] mt-10 mx-0"
//           style={{ color: '#19B7CC' }}
//         >
//           Enviar
//         </button>
//       </div>
//     </div>
//   );
// }
