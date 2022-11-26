import React, {useState} from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)
let Links = [
    {name:"Anasayfa", link:"/"},
    {name:"Hakkımızda", link:"/about"},
    {name:"Etkinlikler", link:"/events"},
    {name:"Blog", link:"/blog"},
    {name:"İletişim", link:"/contact"},
];


  return (
    <div className='shadow-md md:flex items-center justify-between py-4 md:px-10 px-7 text-white w-full fixed top-0 left-0'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Helvetica]'>
            <div className="mr-1 pt-2">
                <Image width={50} height={50} src={logo} />
            </div>
            <h1>ÇUKUROVABLOCK</h1>
        </div>
        <div onClick={()=>setIsOpen(!isOpen)} className="icon text-3xl absolute right-8 top-6 cursor-pointer md:hidden
        ">
             {isOpen ? <AiOutlineClose  />  : <AiOutlineMenu /> } 
        </div>
        <ul className={`md:flex md:items-center md:pb-0
        pb-12 absolute md:static md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
        duration-500 ease-in ${isOpen ? 'top-20 opacity-100': 'left-[-400px]'} md:opacity-100`} >
            {
                Links.map((link, index) => {
                    return (
                        <li key={index} className='md:ml-8 text-xl cursor-pointer 
                        md:my-0 my-7'>
                            <a href={link.link} className="hover:text-gray-500 duration-500" >{link.name}</a>
                        </li>
                    )       
                })
            }
        </ul>
    </div>
  )
}

export default Navbar