import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetail from '../../components/ProductDetail'
import productActions from '../../store/products/actions'
const { getProductById } = productActions

function ProductPage() {
    const productStore = useSelector((store) => store.products)
    const product = productStore.product.response
    const dispatch = useDispatch()
    const id = '63e2630b161ab6c08bb45c13'
    useEffect(() => {
        dispatch(getProductById(id))
    }, [id, dispatch])
    console.log(product)

    return (
        <>
            <div className="w-full">
                {product?.map((e, index) => (
                    <ProductDetail
                        key={index}
                        description={e.description}
                        name={e.name}
                        price={e.price}
                        stock={e.stock}
                        abv={e.abv}
                    />
                ))}
            </div>
        </>
    )
}

export default ProductPage
