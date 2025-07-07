export default function FormularioEmail() {
  return (
    <div className="flex flex-col w-full max-w-[507px] text-white">
      <h3 className="text-[20px] font-normal leading-[28px] mb-10">
        ¡Anótate ahora y participa de un sorteo con
        <br />
        importantes beneficios para tu próxima campaña!
      </h3>

      <div className="flex flex-col w-full">
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border rounded-md border-white placeholder-white focus:outline-none focus:border-[#00CED1] text-[22px] leading-[32px] py-2 pl-4 h-[48px] w-[404px] text-white"
        />
        <button
          type="submit"
          className="bg-white text-[18px] font-bold h-[42px] w-[186px] rounded-[56px] mt-10"
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
