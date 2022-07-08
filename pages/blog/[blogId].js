import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { client } from '../../lib/sanityClient';
import Masonry from "react-masonry-css";
import { BsArrowLeft } from 'react-icons/Bs';


const blogDetails = ({post}) => {
  
  if(!post)
  return;
  return (
    <>
    
     <div className=''>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex flex-col">
      {post && <div className="lg:w-4/6 mx-auto">
        <div className='py-4 mb-10 md:mb-16 px-2 border-b-2'>
          <a className="inline-flex items-center mb-3">
                <img alt="blog" src={post[0].authorImage.asset.url} className="w-9 h-9 rounded-full flex-shrink-0 object-cover object-center"/>
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font text-xl font-medium text-gray-900">{post[0].authorName}</span>
                  </span>
                </a>
          <p className='leading-relaxed text-lg items-baseline ml-1 mb-3'><FaCalendarAlt className='text-3xl mr-2 items-baseline inline-block'/> Created on {post[0].publishedAt}</p>
        </div>
          <div className=" h-64 overflow-hidden">
            <Masonry><img src={post[0].mainImage.asset.url} alt="content" className="object-cover object-center rounded-lg h-full w-full" /></Masonry>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="  sm:py-8  border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="text-lg sm:text-2xl md:text-3xl  text-gray-900 font-medium title-font mb-2">{post[0].title}</h2>
              <p className="leading-relaxed text-lg mb-4">{post[0].body}</p>
              <Link href="/blog">
              <a className="text-teal-600 inline-flex text-base md:text-lg items-center">Back
                <BsArrowLeft className='ml-3 text-base md:text-lg'/>
              </a>
              </Link>
            </div>
          </div>
        </div>
      }
  </div>
</section>
    </div>
    </>
  )
}

export default blogDetails


export async function getServerSideProps(context) {
  const { blogId } = context.params;
  // console.log(typeof(blogId))
  const query = `*[_type == "blog" && num == '${blogId}']{mainImage{
    asset->{
      url
    }
  },authorImage{
    asset->{
      url
    }
  },title,body,authorName,publishedAt,_id,num}`;

  const data = await client.fetch(query);
  // console.log((data))
 
  return {
    props: {
      post:data,
    },
  }
}

