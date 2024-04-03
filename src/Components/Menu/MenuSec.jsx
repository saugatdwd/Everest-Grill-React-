import React from 'react'
import MenuCard from './MenuCard'
import img from '../../assets/images/dish3.jpeg'
import backgroundimg from '../../assets/images/blackwhitebg.jpg'

function MenuSec() {
  const cardStyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: 'cover',
    
  }
  
  return (
    <div style={cardStyle} className='h-auto md:h-[100vh] 
      '>
      <div className='text-center text-3xl py-14'>Our Menu</div>
      <div className='flex md:flex-row flex-col justify-center gap-[1.3rem] items-center md:items-start  md:py-0 h-[90vh] '>
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
    </div>
  )
}

export default MenuSec