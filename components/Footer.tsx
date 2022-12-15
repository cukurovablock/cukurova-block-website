import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
type Props = {}

const Footer = (props: Props) => {
  return (
    <motion.div  
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className='h-max bg-black mt-16' >
        <div className="py-10 px-1 mx-auto justify-center flex ">
                <SocialIcon 
                target={'_blank'}
                fgColor='black'
                bgColor='white'
                className='cursor-pointer mr-1 md:mr-4'
                url='https://www.twitter.com/cukurovablock'
                />
                <SocialIcon 
                target={'_blank'}
                fgColor='black'
                bgColor='white'
                className='cursor-pointer mr-1 md:mr-4'
                url='https://www.instagram.com/cukurovablockchain'
                />
                <SocialIcon 
                target={'_blank'}
                fgColor='black'
                bgColor='white'
                className='cursor-pointer mr-1 md:mr-4'
                url='https://medium.com/@cukurovablock'
                />
                <SocialIcon
                target={'_blank'}
                fgColor='black'
                bgColor='white'
                className='cursor-pointer mr-1 md:mr-4'
                url='https://t.me/cukurovablockchain'
                />
                <SocialIcon 
                target={'_blank'}
                fgColor='black'
                bgColor='white'
                className='cursor-pointer mr-1 md:mr-4'
                url='https://www.linkedin.com/company/cukurovablock/'
                />
                <SocialIcon 
                target={'_blank'}
                fgColor='black'
                bgColor='white'
                className='cursor-pointer mr-1 md:mr-4'
                url='https://github.com/cukurovablock'
                />
                <SocialIcon
                target={'_blank'}
                fgColor='black'
                bgColor='white' 
                className='cursor-pointer mr-1 md:mr-4'
                url='https://chat.whatsapp.com/C0T7hRIp5hjJJGe4e7gj58'
                />
                <SocialIcon
                target={'_blank'}
                fgColor='black'
                bgColor='white'
                className='cursor-pointer mr-1 md:mr-4'
                url='mailto:cukurovablock@gmail.com'
                />
                <SocialIcon 
                target={'_blank'}
                fgColor='black'
                bgColor='white'
                className='cursor-pointer mr-1 md:mr-4'
                url='https://discord.gg/RZExgGTk'
                />
        </div>
        <div className='text-center text-white text-sm pb-5'>
            <p>© 2022 Çukurova Blockchain</p>
        </div>
    </motion.div>
  )
}

export default Footer