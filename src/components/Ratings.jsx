import '@smastrom/react-rating/style.css'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Rating } from '@smastrom/react-rating'
import ratingActions from '../store/ratings/actions'
import { useParams } from 'react-router'

const { createRating, getProductRating, getUserRating } = ratingActions

export default function Ratings() {
    const ratingStore = useSelector((store) => store.ratings)
    const dispatch = useDispatch()
    const params = useParams()
    const [rating, setRating] = useState(0)
    const { id } = params
    console.log(ratingStore)

useEffect(() => {
        if(ratingStore.message !== 'Rating encontrado') {
            dispatch(getProductRating(id))
        }
        if (ratingStore.message === 'Rating encontrado') {
            setRating(ratingStore.productRating?.response)
        }
}, [ratingStore])

const handleChange = (selectedValue) => {
    try {
        dispatch(createRating({product_id: id, rating: selectedValue}))
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(getProductRating(id))
    }
}

console.log(rating)
    return (
    <div className='flex gap-4 items-center'>
        <Rating style={{ maxWidth: 150, padding: 0 }} onChange={handleChange} value={Math.floor(rating)}  />
        <p>{`(${rating})`}</p>
    </div>
    )
}