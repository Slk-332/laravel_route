

import { Link } from '@inertiajs/react'
import React from 'react'

function Show({ product }) {
  return (
    <>
    <div className='fixed left-0 top-0 w-full bg-green-900 p-4 z-50'>
                <div className="text-white container mx-auto">
                    <ul className='flex justify-center items-center text-lg font-medium space-x-6'>
                        <li className='cursor-pointer hover:text-yellow-400'>
                            <h2>Home</h2>
                        </li>
                        <li className='cursor-pointer hover:text-yellow-400'>
                            <h2>About</h2>
                        </li>
                        <li className='cursor-pointer hover:text-yellow-400'>
                            <h2>More Product</h2>
                        </li>
                        <li className='cursor-pointer hover:text-yellow-400'>
                            <h2>Contact us</h2>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="container mx-auto py-8 px-4 mt-12 h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center h-full">
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
                        />

                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-4">{product.description}</p>

                        <div className="flex items-center mb-6">
                            <span className="text-2xl font-bold text-green-500">
                                ${product.price}
                            </span>

                        </div>

                        <div className="flex space-x-4 mb-8">
                            <button
                                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition shadow-md"
                            >
                                🛒 Add to Cart
                            </button>

                        </div>

                        <Link
                            href="/products"
                            className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                        >
                            ⬅ Back to All Products
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" bg-green-800 text-white mt-12">
                <div className="container mx-auto text-center py-4">
                    <p>�� 2023 PP-Prom-Shop. All rights reserved.</p>
                </div>
            </div>
        </>
  )
}

export default Show
