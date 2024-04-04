import React from 'react'
import aboutbanner from '../../assets/images/about-banner.jpg'
import underline from '../../assets/images/separator.svg'
function AboutSec() {
  return (
    <>
    <div className='bg-gray-200 h-[100vh] pt-14 md:pt-0 md:pb-0 pb-14'>
    <div className="md:min-h-screen  max-w-[90vw] mx-auto flex flex-col-reverse md:flex-row items-center gap-y-5
     ">
    <div className='w-full md:w-2/4'>
        <img src={aboutbanner} alt="about banner" />
    </div>
    <div className='w-full md:w-2/4 text-center space-y-6'>
        <div className=''>
        <p className='text-3xl'>Our Story</p>
        <img src={underline} alt="..." className='w-[150px] mx-auto' />
        </div>
        <h1 className=' text-6xl font-bold'>Every Flavor tells a story</h1>
        <p>Nestled amidst the bustling streets of Kathmandu, Nepal, our restaurant offers a culinary journey steeped in tradition and innovation.
             With a cozy ambiance adorned with local artwork and accents, guests are transported to a realm of warmth and hospitality.</p>
             <button className="gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3  border hover:scale-105 duration-200  hover:border-gray-800 hover:from-black hover:to-gray-900">
  Read More
</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default AboutSec