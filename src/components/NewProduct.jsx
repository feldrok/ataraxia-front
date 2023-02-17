import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import categoryActions from '../store/categories/actions'
import productActions from '../store/products/actions'
import { toast } from 'react-hot-toast'

const { createProduct } = productActions
const { getCategories } = categoryActions

function NewProduct() {
    const storeCategories = useSelector((state) => state.categories)
    const storeProducts = useSelector((state) => state.products)
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const handleCreate = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newProduct = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: formData.get('price'),
            stock: formData.get('stock'),
            category_id: formData.get('category'),
        }
        if (formData.getAll('image') !== []) {
            newProduct.image = formData.getAll('image')
        }
        if (formData.get('abv')) {
            newProduct.abv = formData.get('abv')
        }
        if (formData.get('ibu')) {
            newProduct.ibu = formData.get('ibu')
        }
        if (formData.get('ml')) {
            newProduct.ml = formData.get('ml')
        }
        if (formData.get('packSize')) {
            newProduct.packSize = formData.get('packSize')
        }
        dispatch(createProduct(newProduct))
    }

    useEffect(() => {
        if (storeProducts.message === 'Producto creado con éxito') {
            toast.success('Producto creado con éxito')
            setLoading(false)
        }
        if (storeProducts.message === 'Error al crear el producto') {
            if (storeProducts.product === 'El producto ya existe') {
                toast.error('El producto ya existe')
                setLoading(false)
            } else {
                storeProducts.product?.map((msg) =>
                    toast.error(msg.message, {
                        position: 'top-right',
                    })
                )
                setLoading(false)
            }
        }
    }, [storeProducts])

    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex w-full justify-center">
                <h1 className="text-center text-3xl font-bold text-primary-500">
                    Nuevo producto
                </h1>
            </div>
            <div className="my-10 flex w-full justify-center rounded-md bg-gray-100 md:max-w-4xl">
                <form
                    onSubmit={handleCreate}
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
                                placeholder="Nombre del producto"
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
                                name="category"
                                className={`${
                                    category === ''
                                        ? 'text-gray-400'
                                        : 'text-black'
                                } mt-1 block w-full rounded-md border-gray-300 bg-white p-2  shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500`}
                            >
                                <option value="">
                                    Seleccione una categoría
                                </option>
                                {storeCategories.categories.response?.map(
                                    (category) => (
                                        <option
                                            key={category._id}
                                            value={category._id}
                                        >
                                            {category.name}
                                        </option>
                                    )
                                )}
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
                                    placeholder="Precio"
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
                                placeholder="Stock"
                                className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                            />
                        </div>
                    </div>
                    {storeCategories.categories.response?.find(
                        (category) => category.name === 'cervezas'
                    )._id === category ? (
                        <>
                            <div className="mb-4 flex justify-between">
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
                                        placeholder="ABV"
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
                                        placeholder="IBU"
                                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-between">
                                <div className="w-1/2 pr-2">
                                    <label
                                        htmlFor="ml"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        ml/botella
                                    </label>
                                    <input
                                        type="number"
                                        name="ml"
                                        placeholder="ml/botella"
                                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <label
                                        htmlFor="packSize"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Cantidad botellas
                                    </label>
                                    <input
                                        type="number"
                                        name="packSize"
                                        placeholder="Cantidad botellas"
                                        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                    />
                                </div>
                            </div>
                        </>
                    ) : null}
                    {storeCategories.categories.response?.find(
                        (category) => category.name === 'packs'
                    )._id === category ? (
                        <div className="mb-4 flex justify-between">
                            <div className="w-1/2 pr-2">
                                <label
                                    htmlFor="ml"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    ml/botella
                                </label>
                                <input
                                    type="number"
                                    name="ml"
                                    placeholder="ml/botella"
                                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                />
                            </div>
                            <div className="w-1/2 pl-2">
                                <label
                                    htmlFor="packSize"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Cantidad botellas
                                </label>
                                <input
                                    type="number"
                                    name="packSize"
                                    placeholder="Cantidad botellas"
                                    className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                                />
                            </div>
                        </div>
                    ) : null}
                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Imágenes
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Imagen 1"
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                        />
                        <input
                            type="text"
                            name="image"
                            placeholder="Imagen 2"
                            className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm outline-primary-500 focus:border-primary-500 focus:ring-primary-500"
                        />
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
                            placeholder="Descripción del producto"
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

export default NewProduct
