
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import AboutSec from '../About/AboutSec';
import MenuSec from '../Menu/MenuSec';
import OurServiceSec from '../OurServiceSec/OurServiceSec';
import Query from '../QuerySec/Query';
import HomeContent from './HomeContent';


function Home() {



  return (
    <>
  

    <HomeContent/>
    <AboutSec/>
    <MenuSec />
    <OurServiceSec/>
    <Query/>

    </>
  );

}

export default Home;
