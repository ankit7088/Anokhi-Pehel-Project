import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn,FaFacebookF } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/Bs';


const Footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start lg:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="lg:w-1/3 w-full flex-shrink-0 justify-center mx-auto text-center ">
      <a className="flex title-font font-medium items-center text-center justify-center text-gray-900">
      <Image src="/5.png" alt="Picture of the author" width={100} height={110} className='text-center text-white p-2 ' />
        <span className="ml-3 text-3xl">Anokhi Pehel</span>
      </a>
      <p className="mt-2 text-sm text-center m-auto text-gray-500">Anokhi pehel is an initiative started by MNNITians.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-12 lg:mt-0 mt-10 lg:text-left text-center">
    <div className=" lg:w-1/3 w-full px-4 py-2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2">Useful Links</h2>
        <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div>
        <nav className="list-none mb-10 mt-3">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Donate</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Get involved</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Our working</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Achievements</a>
          </li> 
        </nav>
      </div>
      <div className="lg:w-1/3 w-full px-4 py-2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2">Anokhi Phele Club</h2>
        <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div>
        <nav className="list-none mb-10 mt-3">
           <li className="text-gray-600 hover:text-gray-800">Near Academic Building</li>
            <li className="text-gray-600 hover:text-gray-800">MNNIT Allahabad</li>
            <li className="text-gray-600 hover:text-gray-800">Prayagraj</li>
            <li className="text-gray-600 hover:text-gray-800">Uttar Pradesh, India</li>
          
        </nav>
      </div>
      <div className=" lg:w-1/3 w-full px-4 py-2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-2">Our Social Networks</h2>
        <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div>
        <nav className="list-none mb-10 mt-5">
           <li className="text-gray-600 hover:text-gray-800">
            <Link href='#'><a className="text-teal-600 inline-block">
        <FaFacebookF className='text-xl md:text-2xl'/>
        </a></Link>
        <Link href='#'><a className="ml-3 text-teal-600 inline-block">
          <BsTwitter className='text-xl md:text-2xl'/>
        </a></Link>
        <Link href='#'><a className="ml-3 text-teal-600 inline-block">
          <BsInstagram className='text-xl md:text-2xl'/>
        </a></Link>
        <Link href='#'><a className="ml-3 text-teal-600 inline-block">
          <FaLinkedinIn className='text-xl md:text-2xl'/>
        </a></Link>
        </li>
          
        </nav>
      </div>
    
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Anokhi Pehel —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@MNNIT</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-teal-600">
        <FaFacebookF className='text-lg md:text-xl'/>
        </a>
        <a className="ml-3 text-teal-600">
        <BsTwitter className='text-lg md:text-xl'/>
        </a>
        <a className="ml-3 text-teal-600">
        <BsInstagram className='text-lg md:text-xl'/>
        </a>
        <a className="ml-3 text-teal-600">
        <FaLinkedinIn className='text-lg md:text-xl'/>
        </a>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer