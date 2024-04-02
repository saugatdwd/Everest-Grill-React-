import React from 'react'
import MenuCard from './MenuCard'
import img from '../../assets/images/dish3.jpeg'

function MenuSec() {
  
  return (
    <div className=' flex md:flex-row flex-col justify-center gap-[1.3rem] items-center h-auto md:h-[90vh]
     py-14 md:py-0 gap-y-7 bg-gradient-to-b from-[#161718] to-white'>
      <MenuCard 
      image={img}
      categoryName="Breakfast" 
      />
      <MenuCard 
      image={img}
      categoryName="Apetizer"
      />
      <MenuCard 
      image={img}
      categoryName="Drinks"
      />
      <MenuCard 
      image={img}
      categoryName="Dessert"
      />
    </div>
  )
}

export default MenuSec