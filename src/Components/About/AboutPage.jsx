import React from "react";
import menubackground from "../../assets/images/menubackground.jpg";
import image from "../../assets/images/about-banner.jpg";

function AboutPage() {
  return (
    <>
      <div
        className="bg-fixed h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${menubackground})` }}
      >
        <div className="text-black text-center font-satisfy text-6xl">
          About Everest Grill
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className=" content-center px-4 py-8">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="text-8xl font-satisfy px-4 py-8">Everest Grill</div>
          <div className="text-md">
            Jimbu Thakali is a traditional Thakali Restaurant named after
            Himalayan herb called jimbu. Thakali Khana Set (meal) is widely
            celebrated in Nepal because of it’s irresistible taste and variety
            of portions offered as a meal. Owner Vivek Sherchan’s family whose
            origin is Thak-Khola Village of Mustang District had an urge to
            introduce Thakali Khana to Nepalese and Tourist ever since he
            started working in hospitality. Jimbu Thakali was born when owner
            decided to leave his lucrative career in hospitality in USA and
            decided to run family run Thakali Restaurant & American Diner to
            attract local & foreigners. Prabha Sherchan, Mother of the owner
            pays close attention to every detail served in a plate & ingredient
            used in preparing Thakali set at Jimbu.
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
