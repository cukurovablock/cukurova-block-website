import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from './Footer';
import { motion } from 'framer-motion'

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
}

type Props = {}

const Contact = (props: Props) => {
  const { 
    register,
    handleSubmit, 
  } = useForm<Inputs>(); 

  const onSubmit: SubmitHandler<Inputs> = (formData) =>{
    window.location.href = `mailto:cukurovablock@gmail.com?subject=${formData.subject}&body= Merhaba ben ${formData.name}. ${formData.message}  `
  }
  
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='iletişim' className='text-white bg-slate-900 h-max pt-28 ' >
      <h1 className='text-3xl text-center font-mono font-semibold'>İletişim</h1>
      <div id="contact" className="">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <p className="w-1/2 text-center text-gray-400">
              Mesajınızı bize iletin. İşbirliği ve partnerlik için iletişime geçin!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 p-8 flex flex-col gap-5 items-center">
            <input {...register("name")}
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm bg-slate-800 dark:ring-0"
              type="text"
              placeholder="Ad Soyad"
            />
            <input {...register("email")}
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm bg-slate-800 dark:ring-0"
              type="email"
              placeholder="Email"
            />
            <input {...register("subject")}
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm bg-slate-800 dark:ring-0"
              type="text"
              placeholder="Konu"
            />
            <textarea {...register("message")}
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm bg-slate-800 dark:ring-0"
              cols={30}
              rows={10}
              placeholder="Mesaj..."
            ></textarea>
            
            <button type='submit'
              className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </motion.div>
  )
}

export default Contact