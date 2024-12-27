import { Link } from '@inertiajs/react'
import React from 'react'

function Index({ products }) {
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
            <div className='p-6 container mx-auto mt-12'>
                <div className="text-center text-2xl font-bold p-4">
                    🎉PP-Prom-Shop🎉
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className='border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-white'
                        >
                            <Link href={`/products/${product.id}`}>
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                                        {product.name}
                                    </h2>
                                    <p className="text-green-400 text-xl font-bold">
                                        ${product.price}
                                    </p>
                                </div>

                                <div className="p-4 pt-0 flex justify-end items-center">
                                    <button
                                        className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer bg-green-800 text-white mt-12">
                <div className="container mx-auto text-center py-4">
                    <p>�� 2023 PP-Prom-Shop. All rights reserved.</p>
                </div>
            </div>
        </>

    )
}

export default Index
