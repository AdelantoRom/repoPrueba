import HeroSection from './components/HeroSection';
import FormularioEmail from "./components/FormularioEmail";
import TransformacionDigital from './components/TransformacionDigital';
import ClientesLogos from './components/ClientesLogos';

export default function Soluciones() {
  return (
    <main
      className="
        bg-[url('/gradiente13.png')]
        bg-no-repeat bg-top bg-cover
        w-full min-h-screen text-white
        pt-[50px] pb-[20px]
        lg:pt-[150px] lg:pb-[10px]
        2xl:pt-[197px] 2xl:pb-[40px]
      "
    >

    
      <div className="lg:pl-26 lg:pr-8 
                      2xl:pl-74 2xl:pr-10 custom-herotext">


        {/* Hero + Formulario */}
        <div className="flex flex-col pb-0">
          <HeroSection />
          <div className="mt-[-40px] lg:mt-[-64px] 2xl:mt-[-128px]">
            <FormularioEmail />
          </div>
        </div>

        {/* --- MOBILE (vertical): título arriba, texto abajo --- */}
        <div className="flex flex-col lg:hidden text-center mt-22 mr-4">
          <h2 className="text-[40px] leading-[40px] font-medium mb-4 text-right">
            Impulsando <br /> tus Negocios <br /> al Futuro
          </h2>
          <TransformacionDigital />
        </div>

        {/* --- TABLET & DESKTOP (horizontal) --- */}
        <div className="hidden lg:flex flex-row justify-start items-start 
                        lg:mt-16 lg:py-16 lg:gap-x-6
                        2xl:mt-28 2xl:py-20 2xl:gap-x-12">
         <div className="lg:mt-4 2xl:-mt-12 flex justify-start 
  lg:order-1 2xl:order-2 
  lg:translate-x-[-50px] 2xl:translate-x-[90px]">

           <h2 className="text-right drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
  text-[70px] leading-[70px] w-[487px] font-normal
  2xl:text-[102px] 2xl:leading-[110px] 2xl:w-[630px]">
  
  <span className="hidden lg:inline 2xl:hidden">
    Impulsando<br />
    tus Negocios<br />
    al Futuro
  </span>

  <span className="hidden 2xl:inline">
    Impulsando<br/> tus Negocios<br /> al Futuro
  </span>
</h2>

          </div>
          <TransformacionDigital />
        </div>
      </div>

      <ClientesLogos />
    </main>
  );
}


// import HeroSection from './components/HeroSection';
// import FormularioEmail from "./components/FormularioEmail";
// import TransformacionDigital from './components/TransformacionDigital';
// import ClientesLogos from './components/ClientesLogos';


// export default function Soluciones() {
//   return (
//     <main
//       className="
//         bg-[url('/gradiente-desktop.png')]
//         bg-no-repeat bg-top bg-cover
//         w-full min-h-screen text-white
//         pt-[50px] pb-[20px] //PUSE POR PONER ALGO. MODIFICAR//
//         lg:pt-[150px] lg:pb-[10px]
//         2xl:pt-[197px] 2xl:pb-[40px]
//       "
//     >
    
//       <div className="pl:14 pr-4 lg:pl-26 lg:pr-8 2xl:pl-74 2xl:pr-10">

//       <div className="flex flex-col pb-0">
//           <HeroSection />
//           <div className="mt-[-40px] lg:mt-[-64px] 2xl:mt-[-128px]">
//             <FormularioEmail />
//           </div>
//         </div>
       
//        <div className="flex flex-row justify-start items-start 
//                        lg:mt-16 lg:py-16 lg:gap-x-6
//                        2xl:mt-28 2xl:py-20  2xl:gap-x-12">
//   <div className="lg:mt-4 2xl:-mt-12 flex justify-start lg:order-1 2xl:order-2 lg:-translate-x-[12px] 2xl:translate-x-[88px]">
//     <h2 className="text-right drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
//     text-[40px] leading-[40px] 
//     lg:text-[70px] lg:leading-[70px] lg:max-w-[487px]
//     2xl:text-[102px] 2xl:leading-[110px] 2xl:max-w-[614px] ]">

//       Impulsando tus Negocios al Futuro
//     </h2>
//   </div>
//   <TransformacionDigital />
// </div>


//       </div>

//       <ClientesLogos />
//     </main>
//   );
// }





// import HeroSection from './components/HeroSection';
// import FormularioEmail from "./components/FormularioEmail";
// import TransformacionDigital from './components/TransformacionDigital';
// import ClientesLogos from './components/ClientesLogos';


// export default function Soluciones() {
//   return (
//     <main
//       className="
//         bg-[url('/gradiente-desktop.png')]
//         bg-no-repeat bg-top bg-cover
//         w-full min-h-screen text-white pt-[200px] pb-[40px]
//       "
//     >
    
//       <div className="pl-74 pr-10">

//        <div className="flex flex-col pb-0">
//           <HeroSection />
//           <div className="mt-[-130px]">
//             <FormularioEmail />
//           </div>
//         </div>

       
//        <div className="mt-32 py-20 flex flex-row justify-start items-start gap-x-12">
//   <div className="mt-6 flex justify-start order-2 translate-x-28">
//     <h2 className="text-right text-[102px] leading-[110px] max-w-[614px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] ">
//       Impulsando tus Negocios al Futuro
//     </h2>
//   </div>
//   <TransformacionDigital />
// </div>


//       </div>

//       <ClientesLogos />
//     </main>
//   );
// }


