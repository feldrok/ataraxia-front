import '@smastrom/react-rating/style.css'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'

import { Rating } from '@smastrom/react-rating'
import ratingActions from '../store/ratings/actions'
import { toast } from 'react-hot-toast'

const { createRating, getProductRating, getUserRating } = ratingActions

export default function Ratings() {
    const ratingStore = useSelector((store) => store.ratings)
    const dispatch = useDispatch()
    const params = useParams()
    const [productRating, setProductRating] = useState(0)
    const [rating, setRating] = useState(0)
    const { id } = params
    const location = useLocation()

    useEffect(() => {
        dispatch(getProductRating(id))
        dispatch(getUserRating(id))
    }, [location, id])

    useEffect(() => {
        if (ratingStore.message === 'Rating encontrado') {
            setProductRating(ratingStore.productRating?.response)
            setRating(ratingStore.userRating?.response)
        }
        if (ratingStore.message === 'Rating creado') {
            toast.success('Tu clasificación ha sido enviada')
        }
        if (ratingStore.message === 'Unauthorized') {
            toast.error('Debes iniciar sesión para calificar')
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
            setRating(selectedValue)
            await dispatch(getUserRating(id))
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
            <p>{`(${productRating.toLocaleString({
                maximumFractionDigits: 1,
            })})`}</p>
        </div>
    )
}
