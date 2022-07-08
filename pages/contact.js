import React from 'react'
import Contact from '../components/Contact';

const contactUs = () => {
  return (
    <>
    <div className='justify-center items-center text-center mt-2 p-2 lg:text-4xl font-medium sm:text-3xl text-2xl italic'>Contact Us</div>
            <div className="flex mt-0 mb-3 justify-center">
                <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
            </div>
    <Contact/>
    </>
  )
}

export default contactUs