import React from 'react'
import aboutbanner from '../../assets/images/about-banner.jpg'
import underline from '../../assets/images/separator.svg'
function AboutSec() {
  return (
    <>
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5
     mt-14">
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
    </div>
    </div>
    </>
  )
}

export default AboutSec