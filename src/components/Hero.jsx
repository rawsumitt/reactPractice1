import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='flex h-dvh justify-center items-center '>
      <HeroLeft/>
      <HeroRight/>
    </div>
  )
}

export default Hero
