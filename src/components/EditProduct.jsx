import { Disclosure, Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ChevronDownIcon } from '@heroicons/react/solid'
import categoryActions from '../store/categories/actions'
import productActions from '../store/products/actions'
import { useParams } from 'react-router'

const { getProductById, updateProduct } = productActions
const { getCategories } = categoryActions

function EditProduct() {
    const storeProducts = useSelector((state) => state.products)
    const storeCategories = useSelector((state) => state.categories)
    const [category, setCategory] = useState(
        storeProducts.product?.response?.category_id?._id
    )
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params

    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (id !== storeProducts.product?.response?._id) {
            dispatch(getProductById(id))
        }
        dispatch(getCategories())
        setProduct(storeProducts.product?.response)
        setCategory(storeProducts.product?.response?.category_id?._id)
    }, [storeProducts])

    const handleEdit = (e) => {
        e.preventDefault()
        setCategory(category)
        const formData = new FormData(e.target)
        let updatedProduct = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: formData.get('price'),
            stock: formData.get('stock'),
            image: formData.get('image'),
            category_id: category,
        }
        if (formData.getAll('image') !== []) {
            updatedProduct.image = formData.getAll('image')
        }
        if (formData.get('abv')) {
            updatedProduct.abv = formData.get('abv')
        }
        if (formData.get('ibu')) {
            updatedProduct.ibu = formData.get('ibu')
        }
        if (formData.get('ml')) {
            updatedProduct.ml = formData.get('ml')
        }
        if (formData.get('packSize')) {
            updatedProduct.packSize = formData.get('packSize')
        }
        dispatch(updateProduct({ id: id, product: updatedProduct }))
    }

    return (
        <div className="flex w-full flex-col items-center">
            <h1 className="text-center text-3xl font-bold text-primary-500">
                Editar producto
            </h1>
            <div className="my-10 flex w-full justify-center rounded-md bg-gray-100 md:max-w-4xl">
                <form
                    onSubmit={handleEdit}
                    className="mx-4 w-full py-6 md:max-w-2xl"
                >
                    <div className="mb-4 flex justify-between">
                        <div className="w-1/2 pr-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={product?.name}
                                className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Categoría
                            </label>
                            <select
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                            >
                                <option
                                    value={category}
                                    defaultValue={category}
                                >
                                    {product?.category_id?.name}
                                </option>
                                {storeCategories.categories.response
                                    ?.filter(
                                        (category) =>
                                            category._id !==
                                            product?.category_id?._id
                                    )
                                    ?.map((category) => (
                                        <option
                                            key={category._id}
                                            value={category._id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <div className="w-1/2 pr-2">
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Precio
                            </label>
                            <div className="relative flex items-center">
                                <p className="absolute left-2 top-[11px] text-gray-600">
                                    $
                                </p>
                                <input
                                    type="number"
                                    name="price"
                                    defaultValue={product?.price}
                                    className="mt-1 block w-full rounded-md border-gray-300 p-2 pl-5 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                />
                            </div>
                        </div>
                        <div className="w-1/2 pl-2">
                            <label
                                htmlFor="stock"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Stock
                            </label>
                            <input
                                type="number"
                                name="stock"
                                defaultValue={product?.stock}
                                className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                            />
                        </div>
                    </div>
                    {product?.abv || product?.ibu ? (
                        <div className="mb-4 flex justify-between">
                            <>
                                <div className="w-1/2 pr-2">
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        ABV
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        defaultValue={product?.abv}
                                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        IBU
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        defaultValue={product?.ibu}
                                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                            </>
                        </div>
                    ) : null}
                    {product?.ml || product?.packSize ? (
                        <div className="mb-4 flex justify-between">
                            <>
                                <div className="w-1/2 pr-2">
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        ml/botella
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        defaultValue={product?.ml}
                                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Cantidad botellas
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        defaultValue={product?.packSize}
                                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                            </>
                        </div>
                    ) : null}
                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Imágenes
                        </label>
                        {product?.image?.map((image, index) => (
                            <input
                                key={index}
                                type="text"
                                name="image"
                                defaultValue={image}
                                className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                            />
                        ))}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Descripción
                        </label>
                        <textarea
                            type="text"
                            name="description"
                            defaultValue={product?.description}
                            className="mt-1 block h-52 w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="submit"
                            value="Actualizar"
                            className="mt-6 w-full cursor-pointer rounded-md bg-primary-500 py-2 px-4 font-bold text-white hover:bg-primary-600"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProduct
