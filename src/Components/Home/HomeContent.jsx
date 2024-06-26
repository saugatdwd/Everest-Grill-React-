
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import AboutSec from '../About/AboutSec';
import MenuSec from '../Menu/MenuSec';
import OurServiceSec from '../OurServiceSec/OurServiceSec';
import Query from '../QuerySec/Query';


function HomeContent() {

  const slides = [
      {
          url: "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=",
          text: "Come with family & feel the joy of mouthwatering food",
        },
        {
          url: "https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1711950528~exp=1711954128~hmac=36629021d54afc07637eb739e54653a381fb2e6f674e0bf1e7b837e3f322ee9c&w=2000",
          text: "For the love of delicious food.",
        },
    {
      url: "https://img.freepik.com/free-photo/grilled-beef-pork-with-fresh-guacamole-generated-by-ai_188544-38177.jpg?t=st=1711953458~exp=1711957058~hmac=4e6988a2be6be71ed38c7b7013ff6352c702e7bdb7148bf2e41a76e63e35b316&w=2000",
      text: "Where every flavor tells a story",
    },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  React.useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <>
  

    <div className="max-w-full h-[100vh] w-full m-auto relative group">

      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-1000 ease-in-out flex items-center justify-center opacity-100 brightness-100 "
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-8xl text-center font-satisfy brightness-120">
          {slides[currentIndex].text}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      
    </div>

    </>
  );

}

export default HomeContent;
