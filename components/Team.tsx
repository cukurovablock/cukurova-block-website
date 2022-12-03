import React from 'react'
import Image from 'next/image'
import {TeamData} from  "../data"
type Props = {}

const Team = (props: Props) => {
  return ( 
    <div className="mt-20 px-10 md:px-52">
        <h1 className='text-4xl text-center font-mono font-semibold'>Yönetim Ekibi</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {TeamData.map((item, index) => (
                <div key={index} className="rounded-lg shadow-lg p-4">
                    <div className="w-32 h-32 mx-auto">
                        <Image src={item.image
                        } layout="fill" className="rounded-full " />
                    </div>
                    <div className="text-center mt-4">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-500">{item.position}</p>
                    </div>
                </div>
            ))}
          </div>
    </div>
  )
}
export default Team