import '@smastrom/react-rating/style.css'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'

import { Rating } from '@smastrom/react-rating'
import ratingActions from '../store/ratings/actions'

const { createRating, getProductRating, getUserRating } = ratingActions

export default function Ratings() {
    const ratingStore = useSelector((store) => store.ratings)
    const dispatch = useDispatch()
    const params = useParams()
    const [rating, setRating] = useState(0)
    const { id } = params
    const location = useLocation()
    console.log(ratingStore)

    useEffect(() => {
        dispatch(getProductRating(id))
    }, [location, id])

    useEffect(() => {
        if (ratingStore.message === 'Rating encontrado') {
            setRating(ratingStore.productRating?.response)
        }
    }, [ratingStore])

    const handleChange = async (selectedValue) => {
        try {
            await dispatch(
                createRating({ product_id: id, rating: selectedValue })
            )
        } catch (error) {
            console.log(error)
        } finally {
            await dispatch(getProductRating(id))
        }
    }

    return (
        <div className="flex items-center gap-4">
            <Rating
                style={{ maxWidth: 150, padding: 0 }}
                onChange={handleChange}
                value={Math.floor(rating)}
            />
            <p>{`(${rating.toLocaleString({
                maximumFractionDigits: 1,
            })})`}</p>
        </div>
    )
}
