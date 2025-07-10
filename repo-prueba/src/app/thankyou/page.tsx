import Thank from "@/components/Thankyou/Thankyou";
import Footer from "@/components/Footer/Footer";

function page() {
    return (
        <div className="relative">
            <Thank />
            <div className="absolute bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    )
}

export default page