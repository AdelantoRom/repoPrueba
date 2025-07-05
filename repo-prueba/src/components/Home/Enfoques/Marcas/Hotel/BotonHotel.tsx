"use client"

import React, { useState } from 'react'
import PopupModalHotel from './Hotel'

export default function ButtonHotel() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="p-10">
            <button
                onClick={() => setShowPopup(true)}
                className="bg-white border border-[#D81FB9] text-[#D81FB9] text-[28px] rounded-full w-5 h-5 flex items-center justify-center hover:bg-[#D81FB9]/10 transition max-xl:w-7 max-xl:h-7 max-xl:text-[30px]"
            >
                +
            </button>

            {showPopup && <PopupModalHotel onClose={() => setShowPopup(false)} />}
        </div>
    )
}
