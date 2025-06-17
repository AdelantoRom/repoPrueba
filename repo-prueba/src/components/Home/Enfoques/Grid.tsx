import Image from "next/image";
import ButtonHp from "./Marcas/HP/Botón";
import ButtonChile from "./Marcas/Chile/Botón";
import ButtonClinic from "./Marcas/TheClinic/BotónClinic";
import ButtonNatreon from "./Marcas/Natreon/ButtonNatreon";
import ButtonHotel from "./Marcas/Hotel/BotonHotel";
import ButtonBintelligenz from "./Marcas/Bintelligenz.tsx/BotonBintelligenz";

export default function Grid() {
    return (
        <div className="relative w-[1644px] h-[1360px]">
            <Image
                src="/CuadroPortfolios.png"
                alt="Portfolios"
                fill
                className="object-cover rounded-lg"
            />

            <div className="absolute">
                <ButtonHp />
            </div>

            <div className="absolute left-[1530px]">
                <ButtonChile />
            </div>

            <div className="absolute top-[530px] ">
                <ButtonClinic />
            </div>

            <div className="absolute top-[360px] left-[1530px]">
                <ButtonNatreon />
            </div>

            <div className="absolute top-[1250px]">
                <ButtonHotel />
            </div>

            <div className="absolute top-[1250px] left-[1530px]">
                <ButtonBintelligenz />
            </div>
        </div>
    );
}
