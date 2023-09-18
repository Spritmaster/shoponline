import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { BsGridFill } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

const CardStyle = () => {
    const {allProducts} =useLoaderData() 
    const productsTotal =allProducts.meta.pagination.total

    const [cardGridFlex ,setCardGridFlex] =useState(null)



  return (
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <h4 className="font-medium text-md">{productsTotal}</h4>
        <div className='flex gap-x-2'>
            <button type='button' className={`text-xl btn btn-circle btn-sm ${cardGridFlex === 'grid' ? 'btn-primary' : 'btn-info'} text-primary-content`} onClick={()=>{setCardGridFlex('grid')}}>
                <BsGridFill className='text-base-300'/>
            </button>
            <button type='button' className={`text-xl btn btn-circle btn-sm ${cardGridFlex === 'flex' ? 'btn-primary' : 'btn-info'} text-primary-content`}
            onClick={()=>{setCardGridFlex('flex')}}>
                <GiHamburgerMenu className='text-base-300'/>
            </button>
        </div>
    </div>
  )
}

export default CardStyle