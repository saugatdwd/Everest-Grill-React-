import React from 'react'
import MenuCard from './MenuCard'
import appetizer from '../../assets/images/appetizer.jpeg'
import dessert from '../../assets/images/dessert.jpeg'
import drinks from '../../assets/images/drinks.png'
import breakfast from '../../assets/images/breakfast.png'
import backgroundfood from '../../assets/images/backgroundfood.jpeg'
import backgroundimg from '../../assets/images/menubackground.jpg'

function MenuSec() {
  const cardStyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: 'cover',
    
  }
  
  return (
    <div style={cardStyle} className='h-[100vh] md:h-[100vh] 
      '>
      <div className='text-center text-white font-satisfy text-3xl py-14'>Our Menu</div>
      <div className='flex md:flex-row flex-col justify-center gap-[1.3rem] items-center md:items-start  md:py-0 h-[90vh] '>
      <MenuCard 
      image={breakfast}
      categoryName="Breakfast" 
      />
      <MenuCard 
      image={appetizer}
      categoryName="Appetizer"
      />
      <MenuCard 
      image={drinks}
      categoryName="Drinks"
      />
      <MenuCard 
      image={dessert}
      categoryName="Dessert"
      />
    </div>
    </div>
  )
}

export default MenuSec