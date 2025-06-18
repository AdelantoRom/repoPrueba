import Image from "next/image";

export default function Thank() {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/gradiente1.png"
                    alt=""
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>
            <h1 className="text-[48px] font-bold leading-[40px]">¡Gracias por ponerte en contacto!</h1>
            <h2 className="text-[40px] leading-[50px] mt-4">En breve nos comunicaremos contigo.</h2>
        </div>
    );
}
