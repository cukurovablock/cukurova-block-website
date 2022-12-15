import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='hakkimizda' className='h-auto md:px-36 lg:px-64 pt-24 text-white bg-black w-auto ' >
      <h1 className='text-3xl text-center font-mono font-semibold'>Hakkımızda</h1>
      <p className='w-auto text-center px-5 text-gray-400 text-xl leading-8 pt-10'>
        Çukurova Blockchain Kulübü, teknolojinin, özellikle de blokzincir ve kripto paraların her geçen 
        gün yaygınlaştığı bu dönemde gelişmelere ayak uydurabilmek adına Nisan 2022’de Çukurova 
        Üniversitesi öğrencileri tarafından kurulmuştur.
      </p>
      <div className="justify-center mt-16">
        <div className="w-auto border border-black text-gray-300 bg-gray-800 rounded-3xl mx-8 p-5">
            <h1 className='text-2xl font-sans font-semibold'>Misyon</h1>
            <ul className='p-5 list-disc ' >
              <li className='pt-3' >
                Misyonumuz, başta öğrenciler olmak üzere, herkesi
                blokzincir ve alt dalları (NFT, kripto paralar, akıllı
                sözleşmeler, DAO, dApp) hakkında bilgilendirmek.
              </li>
              <li className='pt-3'>
              Ekosistemin gelişmesi için yayınlar, içerikler ve projeler üretmek.
              </li>
              <li className='pt-3'>
              Çukurova Üniversitesi’nde ve bölgesinde blokzincir ve kripto paralar konusunda 
              etkinlikler düzenlemek. 
              </li>
              <li className='pt-3'>
              Bölgesel ve ulusal etkinliklerde yer alarak okulumuzu ve ülkemizi temsil etmek.
              </li>
            </ul>
        </div>
        <div className="w-auto border mt-8 border-black text-gray-300 bg-gray-800 rounded-3xl mx-8 p-5">
            <h1 className='text-2xl font-sans font-semibold'>Vizyon</h1>
            <ul className='p-5 list-disc ' >
              <li className='pt-3'>
                Çukurova Üniversitesi ve Adana bölgesinde blockchain teknolojisi ve getirdiği yenilikler hakkında farkındalık oluşturmak.
              </li>
              <li className='pt-3'>
                Türkiye’deki aktif kulüplerle temas halinde olup blockchain ekosisteminin gelişmesini sağlamak.
              </li>
              <li className='pt-3'>
                Bu alanla ilgili kişileri bir araya getirip gelişimi hızlandırmak.
              </li>
              <li className='pt-3'>
                Türkiye ve dünyada bu ekosistemin gelişmesi ve aynı zamanda Türkçe içeriklerin artması için katkı sunmak.
              </li>
            </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default About