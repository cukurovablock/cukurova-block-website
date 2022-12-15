import React, {useState} from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)
let Links = [
    {name:"Anasayfa", link:"anasayfa"},
    {name:"Hakkımızda", link:"hakkimizda"},
    {name:"Etkinlikler", link:"etkinlikler"},
    {name:"İletişim", link:"iletişim"},
];


  return (
    <div className='z-50 bg-black right-0 shadow-md fixed md:flex items-center justify-between py-4 md:px-10 px-7 text-white top-0 left-0 '>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Helvetica]'>
            <div className="mr-1 pt-2">
                <Image width={50} height={50} src={logo}  />
            </div>
            <p className='text-xl font-bold'>ÇUKUROVABLOCK</p>
        </div>
        <div onClick={()=>setIsOpen(!isOpen)} className="icon text-3xl absolute right-8 top-6 cursor-pointer md:hidden
        ">
             {isOpen ? <AiOutlineClose  />  : <AiOutlineMenu /> } 
        </div>
        <div className={`md:flex md:items-center md:pb-0 
        pb-12 md:static md:z-auto z-[-1] bg-black 
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
        duration-300 ease-in ${isOpen ? 'top-20 opacity-100': 'hidden left-[-400px]'} md:opacity-100`} >
            {
                Links.map((link, index) => {
                    return ( 
                        <ul key={index} className='md:ml-8 text-xl cursor-pointer 
                        md:my-0 my-7'>
                            <li className="hover:text-gray-500 duration-500" >
                                <Link key={index} activeClass="active" to={link.link} smooth={true}
                            offset={0} duration={500} >
                                {link.name}
                                </ Link>
                            </li>
                        </ul>
                    )       
                })
            }
        </div>
    </div>
  )
}

export default Navbar