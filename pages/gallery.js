import { BsArrowRight } from 'react-icons/bs';
// import { cdnClient } from "../lib/sanityClient";
// import { feedQuery } from "../lib/Data";
import Feed from "../components/Feed";
import { client } from '../lib/sanityClient';

// import { useState } from "react";
// import InfiniteScroll from 'react-infinite-scroller';


export default function Gallery({ pins }) { 

//   const [start, setStart] = useState(8);
//   const [end, setEnd] = useState(16);
//   const [disable, setDisable] = useState(false);
  
//   const loadmore = async () => {
//     const data = await cdnClient.fetch(feedQuery(start, end));
//     if (data.length < 8)
//       setDisable(true);
    
//     pins.push(...data);
//     setStart(prev => prev + 8);
//     setEnd(prev => prev + 8);
// }

  return (
  <>
        {/* <div className="bg-fixed bg-center bg-no-repeat bg-cover h-96 flex justify-center items-center"
      style={{backgroundImage:`url("https://i.pinimg.com/originals/ed/e1/d6/ede1d669ed75699be57f39d14bb4306b.jpg")`}}>
        
          <div className="p-8 font-bold text-2xl md:text-4xl">
            Share Images and connect with people
          </div>
      </div> */}
      <div className='justify-center items-center text-center p-1 lg:p-4 text-3xl lg:text-5xl font-medium '>Videos</div>
      <div className="flex justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
      <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-2 lg:py-12 mx-auto">
    
    <div className="flex flex-wrap lg:px-4 sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div className="p-8 md:w-1/2 sm:mb-0 mb-6 ">
        {/* <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div> */}
        <div className="video w-full rounded-lg  overflow-hidden">
    <iframe className='w-full aspect-video'
        src="https://www.youtube.com/embed/NxMhckSJEP4?rel=0"
        title="YouTube video"
        allowFullScreen
    ></iframe>
    </div>
        <div className='border rounded px-4 pb-4'>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-teal-600 inline-flex items-center mt-3">Learn More
        <BsArrowRight className='ml-3'/>
        </a>
        </div>
      </div>
    <div className="p-8 md:w-1/2 sm:mb-0 mb-6 ">
        {/* <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div> */}
        <div className="video w-full rounded-lg  overflow-hidden">
    <iframe className='w-full aspect-video'
        src="https://www.youtube.com/embed/NxMhckSJEP4?rel=0"
        title="YouTube video"
        allowFullScreen
    ></iframe>
    </div>
        <div className='border rounded px-4 pb-4'>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-teal-600 inline-flex items-center mt-3">Learn More
        <BsArrowRight className='ml-3'/>
        </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

    <div className='justify-center items-center text-center p-1 mt-4 lg:p-4 text-3xl lg:text-5xl font-medium '>Gallery</div>
    <div className="flex mt-1 mb-4 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
      
      {/* <InfiniteScroll
    pageStart={0}
    loadMore={loadmore}
    hasMore={!disable}
    loader={<div className="loader" key={0}>Loading ...</div>}
> */}
       <Feed pins={pins} />
        
      {/* </InfiniteScroll> */}

    </>
  )
}

export async function getStaticProps() {
    
  // const data = await cdnClient.fetch(feedQuery(0,8));
  const query = `*[_type == "photo"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        title,
      }`;
      const pins = await client.fetch(query);
  return {
      props: {
      pins,
      },
      revalidate: 3600
  }
}