import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../../components/ProductCard'
import Slider from '../../components/Slider'
import categoryActions from '../../store/categories/actions'
import productActions from '../../store/products/actions'

const { getProducts } = productActions
const { getCategories } = categoryActions

function Home() {
    const dispatch = useDispatch()
    const storeProducts = useSelector((state) => state.products)
    const storeCategories = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    }, [])

    const filteredProducts = (category) => {
        return storeProducts.products?.response
            ?.filter((product) => product.category_id._id === category)
            .slice(0, 4)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Slider />
            <div className="flex flex-col items-center justify-center p-2">
                <h1 className="pb-4 text-4xl font-semibold text-primary-500">
                    Alcanza tu estado de calma...
                </h1>
                {storeCategories.categories.response?.map((category) => (
                    <div
                        className="flex flex-col items-center justify-center"
                        key={category.name}
                    >
                        <h1 className="p-4 text-2xl font-bold text-tertiary-500">
                            {category.name.toUpperCase()}
                        </h1>
                        <div className="grid grid-flow-row-dense grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {filteredProducts(category._id)?.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    id={product._id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    abv={product.abv}
                                    ibu={product.ibu}
                                    ml={product.ml}
                                    packSize={product.packSize}
                                    stock={product.stock}
                                    category={category.name}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
