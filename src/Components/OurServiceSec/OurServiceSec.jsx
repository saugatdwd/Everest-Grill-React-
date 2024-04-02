import React from 'react'
import separator from '../../assets/images/separator.svg'
import hygenicFoodImage from '../../assets/images/hygenic-food.png'
import freshEnvironmentImage from '../../assets/images/fresh-environment.png'
import skilledChefsImage from '../../assets/images/skilled-chef.png'
import eventAndPartyImage from '../../assets/images/event-and-party.png'

function OurServiceSec() {
  return (
    <div className="bg-[#161718]">
    <div className='text-center py-4 mb-4 flex flex-col justify-center items-center text-[#E3C48E]'>
        <p>Why Choose Us</p>
        <div className="text-center mx-auto w-40 h-5">
            <img src={separator} alt="Seperator" />
        </div>
    </div>
    <div className="text-center font-satisfy text-6xl text-white">
            Our Strength
    </div>

    <div>

<div className='flex md:flex-row flex-col gap-4 justify-evenly mx-16 mt-8'>


<div className="w-[1/4] border border-none rounded-lg shadow ">

    <div className="flex justify-center">
        <img className="rounded-t-lg" src={hygenicFoodImage} alt="" />
    </div>
    <div className="p-5 text-center">
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-satisfy">Hygenic Food</div>
            <p className='text-[#7E7171] md:max-w-96 text-center'>Clean, safe, and properly handled for consumption.</p>
    </div>
</div>



<div className="w-[1/4] bg-[#121111] border border-none rounded-lg shadow ">

    <div className="flex justify-center">
        <img className="rounded-t-lg" src={freshEnvironmentImage} alt="" />
    </div>
    <div className="p-5 text-center">
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-satisfy">Fresh Environment</div>
            <p className='text-[#7E7171] md:max-w-96 text-center'>Clean, unpolluted surroundings fostering health and well-being for all.</p>
    </div>
</div>



<div className="w-[1/4] border border-none rounded-lg shadow ">

    <div className="flex justify-center">

        <img className="rounded-t-lg" src={skilledChefsImage} alt="" />
    </div>
    <div className="p-5 text-center">
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-satisfy">Skilled Chefs</div>
            <p className='text-[#7E7171] md:max-w-96'>Culinary experts crafting exquisite dishes with precision and creativity.</p>
    </div>
</div>



<div className="w-[1/4] bg-[#121111] border border-none rounded-lg shadow ">

    <div className="flex justify-center">
        <img className="rounded-t-lg" src={eventAndPartyImage} alt="" />
    </div>
    <div className="p-5 text-center">
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-satisfy">Party & Event</div>
            <p className='text-[#7E7171] md:max-w-96'>Memorable gatherings featuring meticulous planning, vibrant ambiance, and joyous celebrations.</p>
    </div>
</div>

</div>

    </div>


    </div>
  )
}

export default OurServiceSec