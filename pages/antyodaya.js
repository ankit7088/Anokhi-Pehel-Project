import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs';
import { client } from '../lib/sanityClient';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

const Antyodaya = ({events}) => {
  // console.log(events);
  return (
    <>
    <div className='justify-center items-center text-center p-2 md:p-4 lg:text-4xl font-medium text-3xl '>Antyodaya</div>
    <div className="flex mt-0 mb-4 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
    <div className='md:mx-20 lg:mx-44 '>
      <div>
        <img alt='slidingImage' src="/3.jpeg" className='h-60 md:h-[31rem] object-fill w-full ' width={1200} height={550}></img>
      </div>
      <div className='mt-2 p-2 text-center md:font-normal text-lg '>
        <p>Anokhi पहल is the non profit organisation run by the students of MNNIT Allahabad and is working to provide education to the less fortunate. Antyodaya-the annual fest of anokhi पहल. We aim to create a unique platform for students who have lot of potential, all they needof from different Government schools where activities or events are not conducted for the sake of students of prayagraj participate and gain a unique experience and exposure while having fun along the way. The various scientific, cultural and artistic competitions have been specifically designed to judge students based on their creative, analytical and innovative ability. Every year Antyodaya is conducted on eve on Children’s Day within the college campus. Antyodaya is conducted for an all-round learning experience filled with fun! Anokhi पहल has successfully conducted 3 editions so far and November, 2020 will witness fourth edition of Antyodaya.</p>
      </div>
    </div>
    <div className="container m-auto md:my-28 p-2 lg:px-16">
<div className="text-gray-600 body-font w-full">
<div className="flex flex-wrap  ">
      <div className="lg:w-1/3 w-full p-1 hover:text-white">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400 shadow-inner ">
          <h2 className="text-2xl md:text-3xl text-gray-900  font-medium title-font mb-2 text-center italic ">We are a big family.</h2>
          {/* <div className='px-48 lg:visible invisible'><div className="h-1 w-20 bg-teal-600  rounded "></div></div> */}
          {/* <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div> */}
          <p className="leading-relaxed p-6 md:p-12 text-center hover:text-white text-lg">500+ Students Participate every year.</p>
        </div>
      </div>
      <div className="lg:w-1/3 w-full p-1 hover:text-white">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400 shadow-inner">
          <h2 className="text-2xl md:text-3xl text-gray-900  font-medium title-font mb-2 text-center italic">Volunteers</h2>
          {/* <div className='px-52 lg:visible invisible'><div className="h-1 w-20 bg-teal-600 rounded "></div></div> */}
          {/* <div className="h-1 md:ml-20 w-28 bg-teal-600 rounded "></div> */}
          <p className="leading-relaxed p-6 md:p-12 text-center hover:text-white text-lg">We have a big family of coordinators, volunteers and faculties.With 80+ volunteers we always stands on people expectations.From managing finances,scheduling and public relation its never easy to go ahead without these amazing volunteers.</p>
        </div>
      </div>
      <div className="lg:w-1/3 w-full p-1 hover:text-white">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400 shadow-inner">
          <h2 className="text-2xl md:text-3xl text-gray-900  font-medium title-font mb-2 text-center italic px-4">Its all about your happiness and joy.</h2>
          {/* <div className='px-52 lg:visible invisible'><div className="h-1 w-20 bg-teal-600 rounded "></div></div> */}
          {/* <div className="h-1 md:ml-3 w-28 bg-teal-600 rounded "></div> */}
          <p className="leading-relaxed p-6 md:p-12 text-center hover:text-white text-lg">12+ Events are organised in Antyodaya</p>
        </div>
      </div>
  </div>
 </div>
</div>
<div>
<div className='justify-center items-center text-center mt-5 md:mt-0 p-2 md:p-4 italic lg:text-4xl font-medium text-3xl'>Events</div>
<div className="flex mt-0 mb-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
<div className=''><p className='leading-relaxed p-4 text-center text-lg'>Be the change you want to see in the world.</p></div>
<section className="text-gray-600 body-font">
  <div className="container px-5 lg:px-14 py-12 mx-auto">
    <div className="flex flex-wrap -m-4">
      {events.map((item)=>{
        return <div key={item._id} className="p-4 lg:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className='transition ease-in-out delay-150 cursor-pointer  hover:-translate-y-2 hover:scale-110 duration-500'>
        <Image alt='eventsImage' src={item.image.asset.url} className='object-fill aspect-auto' width={1200} height={700}></Image>
        </div>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
            <p className="leading-relaxed mb-3">{item.message}</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <BsArrowRight className='ml-3'/>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <AiOutlineEye className='text-xl md:text-2xl mr-1'/>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <FaRegComment className='text-lg md:text-xl mr-1'/>6
              </span>
            </div>
          </div>
        </div>
        </div>
        
      })}
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default Antyodaya


export async function getStaticProps() {
  const data=`*[_type == "event"]{image{
    asset->{
      url
    }
  },title,message,_id}`;
  const events = await client.fetch(data);
  // console.log(data);

  return {
    props: {
      events,
    },
    revalidate:3600,
  };
}