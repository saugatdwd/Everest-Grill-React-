import React from "react";
import menubackground from "../../assets/images/menubackground.jpg";
import image from "../../assets/images/about-banner.jpg";

function AboutPage() {
  return (
    <div className="mainAboutPage" id="mainAboutPage">
      <div
        className="bg-fixed h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${menubackground})` }}
      >
        <div className="text-black text-center font-satisfy text-6xl">
          About Everest Grill
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 px-16">
        <div className=" content-center px-4 py-8">
          <img src={image} alt="" />
        </div>
        <div className="p">
          <div className="text-8xl font-satisfy px-4 py-8">Everest Grill</div>
          <div className="text-md font-normal">
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



<div className="flex text-center justify-center my-4 mx-16">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.40988057884!2d85.3165884756918!3d27.735501024248705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f06c125c4b%3A0x28e589ddc882af98!2sThe%20Everest%20Grill!5e0!3m2!1sen!2snp!4v1712297643865!5m2!1sen!2snp" 
      width="100%" 
      height="450" 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
    </div>
  );
}

export default AboutPage;
