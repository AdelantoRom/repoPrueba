
import Servicios from "@/components/Home/Servicios/Servicios";
import Soluciones from "@/components/Home/Soluciones/Soluciones";
import Carousel from "@/components/Home/Carousel/Carousel";
import Formulario from "@/components/Home/Formulario/Formulario";
import Adn from "@/components/Home/Adn/Adn";
import Enfoques from "@/components/Home/Enfoques/Enfoques";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* <Soluciones />
      <Carousel />
      <div id="servicios">
        <Servicios />
      </div> */}
      <div id="casos">
        <Enfoques />
      </div>
      {/* <div id="contacto">
        <Formulario />
      </div>

      <Adn />  */}

      {/* Footer posicionado ABSOLUTO sobre el fondo, sin empujar */}
      {/* <div className="absolute bottom-0 left-0 w-full z-50">
        <Footer />
      </div> */}
    </div>
  );
}


