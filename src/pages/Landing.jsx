import React  from 'react'
import { Hero , FeaturedProducts} from '../components'
import { customFetch } from '../utils'

const url='/products?featured=true'

export const loader =async ()=>{
  const reques =await customFetch(url)
  const products =reques.data.data
  return {products}
 }
const Landing = () => {


 
  return (
    <div >

      <Hero/>
      <FeaturedProducts/>
    </div>
  )
}

export default Landing