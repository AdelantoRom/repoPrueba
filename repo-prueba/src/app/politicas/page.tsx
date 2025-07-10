import Politicas from "@/components/Politicas/Politicas"
import Footer from "@/components/Footer/Footer"

function Politics() {
    return (
        <div className="relative">
            <Politicas />
            <div className="absolute bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    )
}

export default Politics