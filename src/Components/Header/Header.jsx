import React, { useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import { easeInCubic, FlipProvider, useFlip } from 'react-easy-flip'
import PopupModal from '../Registration/PopupModal';
import { Link } from 'react-router-dom';



const NavLinks = [
    {
        id: 1,
        text: "Home",
        link: ""
    },
    {
        id: 2,
        text: "About us",
        link: "/aboutpage"
    },
    {
        id: 3,
        text: "Menu",
        link: "/#"
    },
    {
        id: 4,
        text: "Chef",
        link: "/#"
    },
    {
        id: 5,
        text: "Contact",
        link: "/#"
    },
    
]
function Header() {
    const [open, setOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState("home")

    const [showMyModel,setShowMyModel] = useState(false);

    const handleOnClose = ()=>{setShowMyModel(false)}

   
    const selectedTabHandler = (id) => {
        setSelectedTab(id);
      };
    
      const aniationOption = {
        duration: 500,
        easeInCubic
      };
      const flipRootId = "flipRoot";
    
      useFlip(flipRootId, aniationOption);
      

    
  return (

    <FlipProvider>


         <div className='shadow-md  z-10 w-full top-0 left-0 font-sans '  data-flip-root-id={flipRootId}>
              <div className='md:flex items-center justify-between bg-gray-900 py-4 px-7'>
                  <div>
                      <img className='w-52' src={logo} alt="logo" />
                  </div>
              <div onClick={()=>setOpen(!open)} className=' text-3xl text-white absolute right-8 top-6 cursor-pointer lg:hidden block'>
              <ion-icon name={open ? 'close':'menu'}></ion-icon>
              </div>
              <ul className={`list-none bg-inherit  lg:flex lg:items-center gap-12 absolute lg:static lg:z-auto z-[1]
               left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in-out ${open ? 'top-16':'top-[-480px]'}`}>
                  {/* {
                      NavLinks.map(({id,text,link})=>(
                          <li key={id} className=' text-xl lg:my-0 my-7'>
                              <a className='no-underline text-white hover:text-blue-600' href={link}>{text}</a>
                          </li>
                      ))
                  } */}
      
              {NavLinks?.map((item, index) => {
                  return (
                    <Link
                      to={item.link}
                      onClick={() => selectedTabHandler(item.id)}
                      className="flex-col cursor-pointer text-white hover:text-red-800"
                      key={item.id}
                    >
                      {item.text}
      
                      {selectedTab === item.id ? (
                        <div className="active-tab w-[100%] h-[4px] bg-red-800 mt-2" data-flip-id="highlight" />
                      ) : (
                        <div className="non-active-tab bg-transparent w-[100%] h-[4px] bg-red-800 mt-2 " />
                      )}
                    </Link>
                  );
                })}

                  <button onClick={()=>setShowMyModel(true)} className=' md:hidden block bg-indigo-600 text-white md:my-0 my-7 py-2 px-6 rounded hover:bg-indigo-400 duration-500 border-none text-xl'>FIND A TABLE</button> 
              </ul>
              <button onClick={()=>setShowMyModel(true)} className='lg:mr-0 mr-10 md:block hidden bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500 border-none text-xl'>FIND A TABLE</button>
      </div>
              
              
        </div>
        
        <PopupModal visible={showMyModel} onClose={handleOnClose}/>

      
      
          
         
    </FlipProvider>

  )
}

export default Header