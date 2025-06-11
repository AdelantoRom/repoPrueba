import Navbar from "../components/navBar/NavBar";
import Servicios from "@/components/Home/Servicios/Servicios";
import Soluciones from "@/components/Home/Soluciones/Soluciones";
import Carousel from "@/components/Home/Carousel/Carousel";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="bg-[url('/gradiente1.png')] bg-no-repeat bg-cover w-full min-h-screen text-white pt-[150px]">
        <Soluciones />
      </div>
      <Carousel/>


      {/* Secciones siguientes */}
      <Servicios />
    </div>
  );
}
