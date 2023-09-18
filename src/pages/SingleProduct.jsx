import React, { useState } from 'react'
import {  Link, useLoaderData} from 'react-router-dom'
import { formatPrice, customFetch } from '../utils'
import { ProductsSelect } from '../components'

export const loader = async({params}) =>{
  const request =await customFetch(`/products/${params.id}`)
  return {product : request.data.data}
}




const SingleProduct = () => {
  const {product} =useLoaderData()
  const {title,company,image,price,colors,description }=product.attributes
  const dolarAmount=formatPrice(price)

  const amountProduct=[]
  for (let i = 1; i < 21; i++) {const element = amountProduct.push(i)}
  const [active, setActive] = useState(null);
  return (
    <section className='align-elements py-20'>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img src={image} alt="title" className='w-96 h-96 object-cover rounded-lg lg:w-full'/>
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>

          <p className="mt-3 text-xl">{dolarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className='text-md font-medium tracking-wider capitalize'>Colors</h4>
            <div className="mt-2">
              {colors.map((col,i)=>{
                return(
            <button
              onClick={() => {setActive(col)}}
              className={` ${active === col ? "border-secondary border-2" : ""} badge w-6 h-6 mr-2 `}
              style={{ backgroundColor: col }}
              key={i}
            ></button>
                )
              })}
              {/*input  */}
              <ProductsSelect 
              labelname={'Amount'} labelFor={'amount'}  selectId={'amount'} optionArr={amountProduct} 
              formCtrl={'w-full max-w-xs'} labelClas={'text-md font-medium -tracking-wider '} selectClas={'select-base-300 select-md'}/>

              <div className="mt-10">
                <button className='btn btn-error btn-md'>ADD TO BAG</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default SingleProduct