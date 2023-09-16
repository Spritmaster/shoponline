import React from 'react'
import { Hero } from '../components'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='pt-20  text-base-300 align-elements'>
      <div className='grid lg:grid-cols-2 gap-24 items-center'>
        <div>
        <h1 className='tracking-tight text-4xl sm:text-6xl font-bold max-w-2xl '>We are changing the way people shop</h1>
        <p className='max-w-xl leading-8 text-lg mt-8 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>

        <NavLink to={'/products'} className="btn btn-primary mt-10 base-100 text-info">Our Products</NavLink>
        </div>
      <Hero/>
      </div>


      <div className='pt-24'>
        <h1 className='text-3xl font-medium tracking-wider capitalize'>Featured Products</h1>
      </div>
    </div>
  )
}

export default Landing