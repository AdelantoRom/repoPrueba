export default function FormularioEmail() {
  return (

    <div className="flex flex-col w-full  text-white 
    lg:-mt-[100px]
    2xl:-mt-[323px] 2xl:-ml-[5px] 2xl:max-w-[507px]">
      <h3 className="font-normal lg:text-[22px]  lg:leading-[24px] lg:mb-6 2xl:text-[20px] 2xl:leading-[28px] 2xl:mb-11">

        ¡Anótate ahora y participa de un sorteo con
        <br />
        importantes beneficios para tu próxima campaña!
      </h3>

      <div className="flex flex-col w-full">
        <input
          type="email"
          placeholder="Email"

          className="bg-transparent border rounded-md  text-white border-white placeholder-white font-normal focus:outline-none focus:border-[#00CED1] 
           lg:text-[22px] lg:leading-[32px] lg:py-2 lg:pl-4 lg:h-[46px] lg:w-[501px]
          2xl:text-[16px] 2xl:leading-[24px] 2xl:py-2 2xl:pl-6 2xl:h-[48px] 2xl:w-[404px]"
        />
        <button
          type="submit"
          className="bg-white lg:text-[22px] lg:leading-[25px] font-semibold 2xl:text-[18px] 2xl:leading-[24px] rounded-[56px] 
          lg:h-[38px] lg:w-[152px] lg:mt-14
          2xl:h-[46px] 2xl:w-[186px] 2xl:mt-12"

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
