import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsGrid = () => {
    const {products} =useLoaderData() 
    
  return (
    <div className='py-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
        {products.map((singleCard)=>{
            const {title,price ,image} =singleCard.attributes
            const dolarAmount=formatPrice(price)
            return(
                <Link to={`/singleProduct/${singleCard.id}`} className='card shadow-xl hover:shadow-2xl w-full ' key={singleCard.id}>
                    <figure className='px-4  pt-4'>
                        <img  src={image} alt={title} className='rounded-xl h-64 md:h-48 w-full object-cover'/>
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                        <span className=''>{dolarAmount}</span>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default ProductsGrid