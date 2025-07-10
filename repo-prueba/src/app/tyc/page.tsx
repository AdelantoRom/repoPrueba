import TyC from "@/components/TyC/TyC";
import Footer from "@/components/Footer/Footer";

import React from 'react'

function page() {
    return (
        <div className="relative">
            <TyC />
            <div className="absolute bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    )
}

export default page