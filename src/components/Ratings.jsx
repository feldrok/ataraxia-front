import '@smastrom/react-rating/style.css'

import { Rating } from '@smastrom/react-rating'
import { useState } from 'react'

export default function Ratings() {
    const [state, setState] = useState({
        review: '',
        rating: 0 // Initial value
    })

    function handleRating(selectedValue) {
        // 1. Logs the selected rating (1, 2, 3...)
        console.log(selectedValue)

        // 2. Do something with or without the value...

        // 3. Update Rating UI
        setState((prevState) => ({
            ...prevState,
            rating: selectedValue
        }))
    }

    return <Rating style={{ maxWidth: 150, padding: 0 }} onChange={handleRating} value={state.rating} />
}