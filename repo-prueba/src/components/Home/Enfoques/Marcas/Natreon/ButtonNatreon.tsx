"use client"

import React, { useState } from 'react'
import PopupModalNatreon from './Natreon'

export default function ButtonNatreon() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="p-10">
            <button
                onClick={() => setShowPopup(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Ver Natreon
            </button>

            {showPopup && <PopupModalNatreon onClose={() => setShowPopup(false)} />}
        </div>
    )
}
