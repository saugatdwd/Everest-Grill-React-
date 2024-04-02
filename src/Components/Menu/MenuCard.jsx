import React from 'react';

function MenuCard({ image, categoryName, ...props }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Ensures relative positioning
    width: '250px',
    minWidth:'200px',
    height: '60vh', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: 'white',
    textAlign: 'center',
    padding: '20px', // Adjust padding as needed
  };

  return (
    <div {...props} style={cardStyle} className=' text-3xl brightness-75 hover:brightness-110 hover:scale-110 rounded-sm duration-500'>
      {categoryName}
    </div>
  );
}

export default MenuCard;