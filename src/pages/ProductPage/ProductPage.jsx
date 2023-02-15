import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductDetail from '../../components/ProductDetail'
import productActions from '../../store/products/actions'
import { useParams } from 'react-router'

const { getProductById } = productActions

function ProductPage() {
    const productStore = useSelector((store) => store.products)
    const product = productStore.product.response
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductById(id))
    }, [id, dispatch])

    let bgColor
    let bgHoverColor
    let textColor
    if (product?.name === 'Scottish Ale') {
        bgColor = 'bg-primary-500'
        bgHoverColor = 'hover:bg-primary-300'
        textColor = 'text-primary-500'
    } else if (product?.name === 'IPA') {
        bgColor = 'bg-secondary-500'
        bgHoverColor = 'hover:bg-secondary-300'
        textColor = 'text-secondary-500'
    } else if (product?.name === 'Stout') {
        bgColor = 'bg-tertiary-500'
        bgHoverColor = 'hover:bg-tertiary-300'
        textColor = 'text-tertiary-500'
    } else if (product?.name === 'Blonde Ale') {
        bgColor = 'bg-quaternary-500'
        bgHoverColor = 'hover:bg-quaternary-300'
        textColor = 'text-quaternary-500'
    } else {
        bgColor = 'bg-gray-700'
        bgHoverColor = 'hover:bg-gray-500'
    }

    return (
        <ProductDetail
            key={1}
            name={product?.name}
            abv={product?.abv}
            description={product?.description}
            image={product?.image}
            price={product?.price}
            stock={product?.stock}
            ibu={product?.ibu}
            packSize={product?.packSize}
            ml={product?.ml}
            textColor={textColor}
            bgColor={bgColor}
            bgHoverColor={bgHoverColor}
        />
    )
}

export default ProductPage
