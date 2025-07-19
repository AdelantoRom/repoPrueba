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

            <div className="absolute -left-[10px] -top-[10px] max-2xl:-left-[14px] max-xl:top-[-20px] max-xl:left-[-20px]">
                <ButtonHp />
            </div>

            <div className="absolute left-[1455px] -top-[10px] max-2xl:left-[1110px] max-xl:left-[820px] max-xl:top-[-20px] ">
                <ButtonChile />
            </div>

            <div className="absolute -left-[10px] top-[490px] max-2xl:top-[380px] max-2xl:-left-[14px] max-xl:top-[275px] max-xl:left-[-20px]">
                <ButtonClinic />
            </div>

            <div className="absolute top-[330px] left-[1455px] max-2xl:left-[1110px] max-2xl:top-[260px] max-xl:left-[820px] max-xl:top-[180px] ">
                <ButtonNatreon />
            </div>

            <div className="absolute -left-[10px] top-[1180px] max-2xl:top-[900px] max-2xl:-left-[14px] max-xl:top-[660px] max-xl:left-[-20px]">
                <ButtonHotel />
            </div>

            <div className="absolute top-[1180px] left-[1455px] max-2xl:left-[1110px] max-2xl:top-[900px] max-xl:left-[820px] max-xl:top-[660px]">
                <ButtonBintelligenz />
            </div>
        </div>
    );
}
