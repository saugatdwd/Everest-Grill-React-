import React, { useState } from 'react'
import logo from '../../assets/images/logo.jpg'

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "About us",
        link: "/#"
    },
    {
        id: 3,
        name: "Menu",
        link: "/#"
    },
    {
        id: 4,
        name: "Chef",
        link: "/#"
    },
    {
        id: 5,
        name: "Contact",
        link: "/#"
    },
    
]
function Header() {
    const [open, setOpen] = useState(false)
   
  return (
    <div className='shadow-md w-full top-0 left-0 font-sans '>
        <div className='md:flex items-center justify-between bg-gray-900 py-4 px-7'>
            <div>
                <img className='w-52' src={logo} alt="logo" />
            </div>
        <div onClick={()=>setOpen(!open)} className=' text-3xl text-white absolute right-8 top-6 cursor-pointer lg:hidden block'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`list-none bg-inherit  lg:flex lg:items-center gap-12 absolute lg:static lg:z-auto z-[1]
         left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in-out ${open ? 'top-16':'top-[-480px]'}`}>
            {
                NavLinks.map(({id,name,link})=>(
                    <li key={id} className=' text-xl lg:my-0 my-7'>
                        <a className='no-underline text-white hover:text-blue-600' href={link}>{name}</a>
                    </li>
                ))
            }
            <button className=' md:hidden block bg-indigo-600 text-white md:my-0 my-7 py-2 px-6 rounded hover:bg-indigo-400 duration-500 border-none text-xl'>FIND A TABLE</button> 
        </ul>
        <button className='lg:mr-0 mr-10 md:block hidden bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-400 duration-500 border-none text-xl'>FIND A TABLE</button>
        
        
        
        </div>

    </div>
  )
}

export default Header