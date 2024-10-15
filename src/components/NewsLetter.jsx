import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa'

const NewsLetter = () => {
  return (
    <div>
      <div>
         <h3  className='text-lg font-bold mb-2 flex items-center gap-2'> <FaEnvelopeOpenText/> Email me for Jobs </h3>
         <p className='text-primary/70 text-base mb-4'>Stay updated with the latest job openings and career tips straight to your inbox. Subscribe now, and never miss out on exciting opportunities tailored just for you. Email us today to get started on your job hunt!</p>
        
        <div className='w-full space-y-4'>
         <input type="email" name='email' id='email' placeholder='name@gmail.com'
         className='w-full block py-2 p1-3 border focus:outline-none'/>
         <input type="submit" value={"Subscribe"} className='w-full block py-2 p1-3 border focus:outline-none bg-blue rounded-full text-yellow-50 cursor-pointer font-semibold'/>

        </div>
      </div>

      <div className='py-8'>
         <h3  className='text-lg font-bold mb-2 flex items-center gap-2'> <FaRocket/> Get Noticed Faster </h3>
         <p className='text-primary/70 text-base mb-4'>Stand out from the crowd and get noticed by top employers faster! Create a profile, showcase your skills, and let recruiters find you with ease. Start now and boost your visibility in the job market!</p>
        
        <div className='w-full space-y-4'>
         
         <input type="submit" value={"Upload your resume"} className='w-full block py-2 p1-3 border focus:outline-none bg-blue rounded-full text-yellow-50 cursor-pointer font-semibold'/>

        </div>

      </div>
    </div>
  )
}

export default NewsLetter
