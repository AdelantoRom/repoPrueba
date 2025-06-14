import Image
    from "next/image";
export default function Grid() {
    return (
        <div>
            <Image
                src="/CuadroPortfolios.png"
                alt="Portfolios"
                width={1644}
                height={1360}
            />
        </div>
        // <div className="grid grid-cols-6 grid-rows-3 gap-1 w-[1639px] relative bg-[#F4F0F0] overflow-hidden rounded-3xl">
        //     <div className="col-span-4 row-span-1 bg-blue-300 h-[400px] relative z-10 translate-y-1/4 rounded-tl-[40px] rounded-br-[40px]">
        //         area1
        //     </div> 
        //     <div className="col-span-2 row-span-1 bg-pink-300 h-[300px] relative z-10 translate-y-25 rounded-tr-[40px]">area2</div>

        //     <div className="col-span-2 row-start-2 bg-purple-300 h-[300px] z-0 mt-25">area3</div>
        //     <div className="col-span-4 row-start-2 bg-yellow-300 h-[400px] z-0">area4</div>

        //     <div className="col-span-3 row-start-3 bg-green-300 h-[300px] rounded-bl-[40px]">area5</div>
        //     <div className="col-span-3 row-start-3 col-start-4 bg-red-300 h-[300px] rounded-br-[40px]">area6</div>
        // </div>
    );
}
