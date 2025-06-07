import Navbar from "../components/navBar/NavBar"
import Servicios from "@/components/Home/Servicios/Servicios"

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/a10b28.png')] bg-cover bg-center min-h-screen">
        <Navbar />
        <section className="text-white p-10">
          <h1>Contenido de la Sección 1</h1>
          
        </section>
      </div>
      <div>
        <Servicios/>
      </div>
    </div>
  )
}
