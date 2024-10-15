import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa'

const NewsLetter = () => {
  return (
    <div>
      <div>
         <h3  className='text-lg font-bold mb-2 flex items-center gap-2'> <FaEnvelopeOpenText/> Email me for Jobs </h3>
         <p className='text-primary/70 text-base mb-4'>Stay updated with the latest job openings and career tips straight to your inbox. Subscribe now, and never miss out on exciting opportunities tailored just for you. Email us today to get started on your job hunt!</p>
        
        <div className='w-full space-y-4'>
         <input type="email" name='email' id='email' placeholder='name@gmail.com'
         className='w-full block py-2 p1-3 border focus:outline-none'/>
         <input type="submit" value={"Subscribe"} className='w-full block py-2 p1-3 border focus:outline-none bg-blue rounded-full text-yellow-50'/>

        </div>
      </div>
    </div>
  )
}

export default NewsLetter
