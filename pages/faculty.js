import React from 'react'
import Image from 'next/image'
import { client } from '../lib/sanityClient'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/Bs';

const Faculty = ({mem}) => {
  return (
    <>
    <div className='justify-center items-center text-center pt-6 lg:text-4xl font-medium sm:text-3xl text-2xl italic'>FACULTY CORNER</div>
    <div className="flex mt-3 mb-8 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
    {mem.map((item)=>{
      return <div key={item._id} className=''>
      <section className="text-gray-600 body-font justify-center items-center">
  <div className="mx-auto md:mx-12 flex px-0 py-12 mt-8 hover:shadow-inner shadow md:flex-row flex-col items-center rounded border border-stone-300">
      <div className=" mb-10 md:mb-0 w-1/2 md:w-2/6 md:self-start">
      <Image src={item.image.asset.url} className='object-fill  rounded-lg ' width={1000} height={750}></Image>
      </div>
      <div className="lg:flex-grow w-auto md:w-4/6 lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
      <p className="mb-8 px-4 md:px-2 lg:px-0 leading-relaxed text-left text-lg font-medium lg:mr-8">{item.quote}</p>
      <h1 className="title-font text-2xl mb-2 mt-2 font-medium text-gray-900">{item.name}</h1>
      <p className="leading-relaxed text-base font-medium ">{item.responsibility}</p>
      <p className="leading-relaxed text-base font-medium ">{item.deparment}</p>
      <Link href={item.profileUrl} >
      <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0 mt-2">View Profile
      <BsArrowRight className='ml-3'/>
        </a>
      </Link>
      
      </div>
  </div>
  </section>
</div>
    })
    }
    </>
  )
}

export default Faculty

export async function getStaticProps() {
  const data=`*[_type == "faculty"] | order(order asc){image{
      asset->{
        url
      }
    },_id,name,quote,responsibility,deparment,order,profileUrl}`;
  const mem = await client.fetch(data);
  // console.log(mem);

  return {
    props: {
      mem,
    },
  };
}