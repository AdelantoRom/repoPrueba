import React from 'react';
import Image from 'next/image';

export default function Botones() {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-center
                gap-[90px] lg:gap-x-[200px] 2xl:gap-x-[410px] w-full 
                max-w-[336px] lg:max-w-[900px] 2xl:max-w-[1343px]">

                {/* Botón 1 - Calendly */}
                <div className="flex flex-col items-center cursor-pointer w-[151px]">
                    <Image
                        src="/Calendly.gif"
                        alt="Calendario"
                        width={65}
                        height={65}
                        className="rounded-lg w-[65px] h-[65px]"
                    />
                    <div className="mt-[24px] text-center font-medium text-white 
                        text-[18px] leading-[24px] lg:leading-[28px] lg:w-auto 
                        whitespace-nowrap lg:whitespace-normal">
                        Agenda una <br className="hidden lg:block" /> reunión
                    </div>
                </div>

                {/* Botón 2 - Email */}
                <div className="flex flex-col items-center cursor-pointer w-[151px]">
                    <Image
                        src="/Mensaje.gif"
                        alt="Mensaje"
                        width={65}
                        height={65}
                        className="rounded-lg w-[65px] h-[65px]"
                    />
                    <div className="mt-[24px] text-center font-medium text-white 
                        text-[18px] leading-[24px] lg:leading-[28px] lg:w-auto 
                        whitespace-nowrap lg:whitespace-normal">
                        Mándanos un <br className="hidden lg:block" /> email
                    </div>
                </div>

                {/* Botón 3 - Chat IA */}
                <div className="flex flex-col items-center cursor-pointer">
                    <Image
                        src="/Chat.gif"
                        alt="Chat"
                        width={65}
                        height={65}
                        className="rounded-lg w-[65px] h-[65px]"
                    />
                    <div className="mt-[24px] text-center font-medium text-white 
                        text-[18px] leading-[24px] lg:leading-[28px] lg:w-auto 
                        whitespace-nowrap lg:whitespace-normal">
                        Chatea con Romy, <br className="hidden lg:block" /> nuestra agente IA
                    </div>
                </div>

            </div>
        </div>
    );
}



// import React from 'react';
// import Image from 'next/image';

// function Botones() {
//     return (
//         <div className="w-full flex justify-center">
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-[40px] sm:gap-x-10 lg:gap-x-20 w-full max-w-[336px] sm:max-w-[900px] 2xl:max-w-[1343px]">
                
//                 {/* Botón 1 */}
//                 <div className="flex flex-col items-center cursor-pointer">
//                     <Image
//                         src="/Calendly.gif"
//                         alt="Calendario"
//                         width={65}
//                         height={65}
//                         className="rounded-lg w-[65px] h-[65px]"
//                     />
//                     <div className="mt-[8px] sm:mt-[24px] text-center font-medium text-white text-[18px] leading-[24px] sm:leading-[28px] w-[203px] sm:w-auto">
//                         Agenda una <br className="hidden sm:block" /> reunión
//                     </div>
//                 </div>

//                 {/* Botón 2 */}
//                 <div className="flex flex-col items-center cursor-pointer">
//                     <Image
//                         src="/Mensaje.gif"
//                         alt="Mensaje"
//                         width={65}
//                         height={65}
//                         className="rounded-lg w-[65px] h-[65px]"
//                     />
//                     <div className="mt-[8px] sm:mt-[24px] text-center font-medium text-white text-[18px] leading-[24px] sm:leading-[28px] w-[203px] sm:w-auto">
//                         Mándanos un <br className="hidden sm:block" /> email
//                     </div>
//                 </div>

//                 {/* Botón 3 */}
//                 <div className="flex flex-col items-center cursor-pointer">
//                     <Image
//                         src="/Chat.gif"
//                         alt="Chat"
//                         width={65}
//                         height={65}
//                         className="rounded-lg w-[65px] h-[65px]"
//                     />
//                     <div className="mt-[8px] sm:mt-[24px] text-center font-medium text-white text-[18px] leading-[24px] sm:leading-[28px] w-[203px] sm:w-auto">
//                         Chatéa con Romy,<br className="hidden sm:block" /> IA
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Botones;


// import React from 'react';
// import Image from 'next/image';

// function Botones() {
//     return (
//         <div>
//             <div className="w-full flex justify-center lg:ml-4 lg:translate-x-[8px] 2xl:ml-6 2xl:translate-x-[-64px] 2xl:mt-[-16px]">
              
//               <div className="flex justify-center items-start gap-x-4 lg:gap-x-46 2xl:gap-x-110 w-full lg:max-w-[900px] 2xl:max-w-[1343px]">


//             {/* Botón 1 */}
// <div className="flex flex-col items-center lg:w-[132px] lg:translate-x-[-32px] 2xl:w-[160px] 2xl:translate-x-[-34px]">

//                         <Image
//                             src="/Calendly.gif"
//                             alt="Calendario"
//                             width={48}
//                             height={48}
//                             className="rounded-lg lg:w-[64px] lg:h-[65px] 2xl:h-[48px] 2xl:w-[48px]"
//                         />
//                         <div className="mt-[24px] text-center font-medium text-white text-[18px] leading-[28px] w-[203px] 
//                          lg:text-[20px] lg:leading-[24px] lg:w-[132px] lg:h-[46px]">
//                             Agenda una <br />reunión
//                         </div>
//                     </div>

//                     {/* Botón 2 */}
//                     <div className="flex flex-col items-center lg:w-[132px] 2xl:h-[48px] 2xl:w-[48px] 2xl:translate-x-[-6px]">
//                         <Image
//                             src="/Mensaje.gif"
//                             alt="Mensaje"
//                             width={48}
//                             height={48}
//                             className="rounded-lg lg:w-[64px] lg:h-[65px]"
//                         />
//                         <div className="mt-[24px] text-center font-medium text-white text-[18px] leading-[28px] w-[203px] 
//                         lg:text-[20px] lg:leading-[24px] lg:w-[132px] lg:h-[46px]">
//                             Mándanos un <br /> email
//                         </div>
//                     </div>

//                     {/* Botón 3 */}
//                     <div className="flex flex-col items-center lg:w-[203px] 2xl:h-[48px] 2xl:w-[48px] 2xl:translate-x-[54px]">
//                         <Image
//                             src="/Chat.gif"
//                             alt="Chat"
//                             width={48}
//                             height={48}
//                             className="rounded-lg lg:w-[64px] lg:h-[65px]"
//                         />
//                         <div className="mt-[24px] text-center font-medium text-white  text-[18px] leading-[28px] w-[203px] 
//                          lg:text-[20px] lg:leading-[24px] lg:w-[203px] lg:h-[46px]">
//                             Chatea con Romy, nuestro agente IA
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Botones;


// import React from 'react'
// import Image from 'next/image'

// function Botones() {
//     return (
//         <div>
//             <div className="w-full flex justify-center mb-1">
//                 <div className="flex justify-between items-start gap-x-90 max-xl:gap-x-45 max-lg:gap-x-20">

//                     <div className="flex flex-col items-center">
//                         <Image src="/Calendly.gif" alt="Calendario" width={48} height={48} className="rounded-lg" />
//                         <div className="mt-[24px] w-[203px] text-center text-white text-[18px] leading-[28px]">
//                             Agenda una <br />reunión
//                         </div>
//                     </div>

//                     <div className="flex flex-col items-center">
//                         <Image src="/Mensaje.gif" alt="Mensaje" width={48} height={48} className="rounded-lg" />
//                         <div className="mt-[24px] w-[203px] text-center text-white text-[18px] leading-[28px]">
//                             Envíanos un <br /> mensaje
//                         </div>
//                     </div>

//                     <div className="flex flex-col items-center">
//                         <Image src="/Chat.gif" alt="Chat" width={48} height={48} className="rounded-lg" />
//                         <div className="mt-[24px] w-[203px] text-center text-white text-[18px] leading-[28px]">
//                             Chatea con Romy, nuestro agente IA
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </div>
//     )
// }

// export default Botones