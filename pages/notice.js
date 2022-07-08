import React from 'react'
import { client } from '../lib/sanityClient'
import { BsArrowRight } from 'react-icons/bs';

const Notice = ({info}) => {
  return (
    <>
    <div className='justify-center items-center text-center p-4 lg:text-4xl font-medium sm:text-3xl text-2xl italic'>Notice Board</div>
            <div className="flex mt-0 mb-8 justify-center">
                <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
    </div>
   {info.map((item)=>{
      return <div key={item._id}className="flex flex-wrap px-3 md:px-8 lg:px-12 mb-8">
      <div className="w-full px-4 md:px-8 py-6 border-2 rounded border-black border-opacity-60">
        <h2 className="text-lg sm:text-xl md:text-2xl  text-gray-900 font-medium title-font mb-2">{item.title}</h2>
        <p className="leading-relaxed text-base mb-4">{item.message}</p>
        <a className="text-teal-600 inline-flex items-center">{item.anchorTag}
        <BsArrowRight className='ml-3'/>
        </a>
        <p className="mt-1 md:mt-3 text-gray-500 text-sm">Created on {item.releaseDate}</p>
      </div>
    </div> }) } 
    </>
  )
}

export default Notice

export async function getServerSideProps() {
    const data=`*[_type == "notice"] | order(_createdAt desc){title,message,anchorTag,check,_id,releaseDate}`;
    const info = await client.fetch(data);
    // console.log(info);
  
    return {
      props: {
        info,
      }
    };
  }