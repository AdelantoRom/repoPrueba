"use client"

import React, { useState } from 'react'
import PopupModalBintelligenz from './Bintelligenz'

export default function ButtonBintelligenz() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="p-10">
            <button
                onClick={() => setShowPopup(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Ver Bintelligenz
            </button>

            {showPopup && <PopupModalBintelligenz onClose={() => setShowPopup(false)} />}
        </div>
    )
}
