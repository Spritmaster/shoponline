import React, { useState } from 'react'
import { customFetch } from '../utils'


import {AllProductsWrapper, FilterProducts , CardStyle} from '../components'
import PagesChange from '../components/PagesChange'

const url='/products'


export const loader =async ()=>{
  const reques =await customFetch(url)
  const allProducts =reques.data
  return {allProducts}
 }



 


const Products = () => {
  return (
    <div className='align-elements py-10'>
      <FilterProducts/>
      <CardStyle />
      <AllProductsWrapper/>
      <PagesChange/>
    </div>
  )
}

export default Products