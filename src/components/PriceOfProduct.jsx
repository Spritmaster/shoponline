import React, { useState } from 'react'
import { formatPrice } from '../utils'

const PriceOfProduct = ({labelname ,labelFor ,type, name ,minPrice,maxPrice , InputId}) => {

    const displayMaxPrice=maxPrice
    const [money,setMoney] =useState(displayMaxPrice)
    const formatMoney=formatPrice(+money)
 

  return (
    <div className='form-control'>
        <label htmlFor={labelFor} className='label cursor-pointer'>
            <span className='label-text capitalize'>{labelname}</span>
            <span>{formatMoney}</span>
        </label>
        <input type={type} name={name} id={InputId} min={minPrice} max={maxPrice} className='range range-primary range-sm ' step='1000' onChange={(e)=>{setMoney(e.target.value)}} defaultValue={maxPrice}/>
        <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span className='font-bold text-md'>0</span>
            <span className='font-bold text-md'>Max : {formatPrice(maxPrice)}</span>
        </div>

    </div>
  )
}

export default PriceOfProduct