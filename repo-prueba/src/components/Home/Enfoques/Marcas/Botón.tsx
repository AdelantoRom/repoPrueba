"use client"

import React, { useState } from 'react'
import PopupModal from './Hp'

export default function Button() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="p-10">
            <button
                onClick={() => setShowPopup(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Ver HP Premier A3
            </button>

            {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}
        </div>
    )
}
