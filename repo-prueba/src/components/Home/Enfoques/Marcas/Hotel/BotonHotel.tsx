"use client"

import React, { useState } from 'react'
import PopupModalHotel from './Hotel'

export default function ButtonHotel() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="p-10">
            <button
                onClick={() => setShowPopup(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Ver Hotel
            </button>

            {showPopup && <PopupModalHotel onClose={() => setShowPopup(false)} />}
        </div>
    )
}
