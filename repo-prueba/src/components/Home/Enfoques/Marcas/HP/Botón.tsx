"use client"

import React, { useState } from 'react'
import PopupModal from './Hp'

export default function ButtonHp() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="p-10">
            <button
                onClick={() => setShowPopup(true)}
                className="bg-white border border-[#D81FB9] text-[#D81FB9] text-[28px] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#D81FB9]/10 transition cursor-pointer"
            >
                +
            </button>


            {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}
        </div>
    )
}
