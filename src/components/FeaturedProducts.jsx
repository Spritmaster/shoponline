 import React from 'react'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeaturedProducts = () => {
  return (
    <div className='pt-24 align-elements'>
        <SectionTitle text={'Featured Products'}/>
        <ProductsGrid/>
    </div>
  )
}

export default FeaturedProducts