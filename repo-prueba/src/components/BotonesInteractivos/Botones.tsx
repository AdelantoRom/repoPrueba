import React from 'react';
import Image from 'next/image';

function Botones() {
    return (
        <div>
            <div className="w-full flex justify-center lg:ml-4 lg:translate-x-[8px] 2xl:ml-6 2xl:translate-x-[-64px] 2xl:mt-[-16px]">
              
              <div className="flex justify-center items-start gap-x-4 lg:gap-x-46 2xl:gap-x-110 w-full lg:max-w-[900px] 2xl:max-w-[1343px]">


            {/* Botón 1 */}
<div className="flex flex-col items-center lg:w-[132px] lg:translate-x-[-32px] 2xl:w-[160px] 2xl:translate-x-[-34px]">

                        <Image
                            src="/Calendly.gif"
                            alt="Calendario"
                            width={48}
                            height={48}
                            className="rounded-lg lg:w-[64px] lg:h-[65px] 2xl:h-[48px] 2xl:w-[48px]"
                        />
                        <div className="mt-[24px] text-center font-medium text-white text-[18px] leading-[28px] w-[203px] 
                         lg:text-[20px] lg:leading-[24px] lg:w-[132px] lg:h-[46px]">
                            Agenda una <br />reunión
                        </div>
                    </div>

                    {/* Botón 2 */}
                    <div className="flex flex-col items-center lg:w-[132px] 2xl:h-[48px] 2xl:w-[48px] 2xl:translate-x-[-6px]">
                        <Image
                            src="/Mensaje.gif"
                            alt="Mensaje"
                            width={48}
                            height={48}
                            className="rounded-lg lg:w-[64px] lg:h-[65px]"
                        />
                        <div className="mt-[24px] text-center font-medium text-white text-[18px] leading-[28px] w-[203px] 
                        lg:text-[20px] lg:leading-[24px] lg:w-[132px] lg:h-[46px]">
                            Mándanos un <br /> email
                        </div>
                    </div>

                    {/* Botón 3 */}
                    <div className="flex flex-col items-center lg:w-[203px] 2xl:h-[48px] 2xl:w-[48px] 2xl:translate-x-[54px]">
                        <Image
                            src="/Chat.gif"
                            alt="Chat"
                            width={48}
                            height={48}
                            className="rounded-lg lg:w-[64px] lg:h-[65px]"
                        />
                        <div className="mt-[24px] text-center font-medium text-white  text-[18px] leading-[28px] w-[203px] 
                         lg:text-[20px] lg:leading-[24px] lg:w-[203px] lg:h-[46px]">
                            Chatea con Romy, nuestro agente IA
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Botones;


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