import React from 'react'
import Image from 'next/image'
import circle from "../public/circle.png"
import {motion} from  "framer-motion"

type Props = {}

const Landing = (props: Props) => {
  return (
    <div id="anasayfa" className="text-center mt-8 pt-24 "  >
      <div className="font-normal">
          <div className='font-extrabold text-transparent text-4xl md:text-6xl  bg-clip-text bg-gradient-to-b from-green-400 to-green-900'>Çukurova Blockchain</div>
          <div className='mt-4 font-extrabold text-transparent text-4xl md:text-6xl  bg-clip-text bg-gradient-to-l from-purple-400 to-pink-600'>
            Merkeziyetsiz Geleceği <br /> İnşa Et</div>
      </div>
        <form action="https://docs.google.com/forms/d/e/1FAIpQLScveXgdC_61urLM8w4NJNYN9-R4oTgHCNQ89pl5uaPd3AIOig/viewform" target="_blank">
          <button 
          type='submit'
           className='mt-5 mb-10 justify-center mx-2 border-2 font-mono
            border-white px-3 py-2 rounded-3xl text-xl hover:bg-white hover:text-black'>
              Aramıza Katıl
          </button>
         </form>
         
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image className='object-contain' src={circle} />
        </motion.div>
    </div>  
  )
}

export default Landing