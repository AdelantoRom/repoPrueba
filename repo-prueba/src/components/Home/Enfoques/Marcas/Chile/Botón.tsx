"use client"

import React, { useState } from 'react'
import PopupModalChile from './Chile'

export default function ButtonChile() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="pl-10 pt-10">
            <button
                onClick={() => setShowPopup(true)}
                className="bg-white border border-[#D81FB9] text-[#D81FB9] text-[28px] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#D81FB9]/10 transition cursor-pointer"
            >
                +
            </button>

            {showPopup && <PopupModalChile onClose={() => setShowPopup(false)} />}
        </div>
    )
}
