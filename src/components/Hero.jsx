import React from 'react'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const Hero = () => {
    const carueselImages=[hero1,hero2,hero3,hero4]
  return (
    <div className=" hidden lg:carousel carousel-center   space-x-4 bg-neutral rounded-box max-w-[450px]   p-4">


  {carueselImages && carueselImages.map((images)=>{
    return(
        <div className="carousel-item">
        <img src={`${images}`} className="rounded-box w-[252px] h-[350px] bg-contain" />
      </div>   
    )
  })}
</div>
  )
}

export default Hero