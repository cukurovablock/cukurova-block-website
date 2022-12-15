import React from 'react'
import Image from 'next/image'
import { SanityTeam } from '../typings'
import { urlFor } from '../sanity'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
type TeamProps = {
  team: SanityTeam[];
}

 const Team = ({team}: TeamProps) => {
  return ( 
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1}}
      className="mt-20 px-10 md:px-54 lg:px-52 max-h-full">
        <h1 className='text-3xl text-center font-mono font-semibold'>Yönetim Ekibi</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-16">
            { team.map((member) => (
              <div key={member?._id} className="rounded-lg shadow-lg p-4 ">
                  <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full w-32 h-32 mx-auto ">
                    <a className=' p-1 rounded-full' >
                      <Image alt='team'
                       src={urlFor(member?.image).url()}
                       width={250} height={250}
                      className="rounded-full object-cover" />
                    </a>
                  </div>
                  <div className="text-center mt-4">
                      <h3 className="text-xl font-semibold">{member?.name}</h3>
                      <p className="text-gray-500">{member?.role}</p>
                      <SocialIcon
                        target={'_blank'}
                        style={{ height: 25, width: 25 }}
                        bgColor=''
                        className=""
                      url={member?.link}
                      />
                  </div>
              </div>
            ))}
          </div>
    </motion.div>
  )
}
export default Team