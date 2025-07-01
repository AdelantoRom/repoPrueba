import Image from "next/image";
import ButtonHp from "./Marcas/HP/Botón";
import ButtonChile from "./Marcas/Chile/Botón";
import ButtonClinic from "./Marcas/TheClinic/BotónClinic";
import ButtonNatreon from "./Marcas/Natreon/ButtonNatreon";
import ButtonHotel from "./Marcas/Hotel/BotonHotel";
import ButtonBintelligenz from "./Marcas/Bintelligenz.tsx/BotonBintelligenz";

export default function Grid() {
    return (
        <div className="relative">
            <Image
                src="/CuadroPortfolios.png"
                alt="Portfolios"
                
                width={1544}
                height={1260}
                className="object-cover rounded-lg max-2xl:w-[1200px] max-xl:w-[900px]"
            />

            <div className="absolute top-[10px] max-xl:top-[-10px] max-xl:left-[-10px]">
                <ButtonHp />
            </div>

            <div className="absolute left-[1430px] top-[10px] max-2xl:left-[1080px] max-xl:left-[800px] max-xl:top-[-10px] ">
                <ButtonChile />
            </div>

            <div className="absolute top-[530px] max-2xl:top-[380px] max-xl:top-[280px] max-xl:left-[-10px]">
                <ButtonClinic />
            </div>

            <div className="absolute top-[360px] left-[1430px] max-2xl:left-[1080px] max-2xl:top-[280px] max-xl:left-[800px] max-xl:top-[200px] ">
                <ButtonNatreon />
            </div>

            <div className="absolute top-[1150px] max-2xl:top-[870px] max-xl:top-[650px] max-xl:left-[-10px]">
                <ButtonHotel />
            </div>

            <div className="absolute top-[1150px] left-[1430px] max-2xl:left-[1080px] max-2xl:top-[870px] max-xl:left-[800px] max-xl:top-[650px]">
                <ButtonBintelligenz />
            </div>
        </div>
    );
}
