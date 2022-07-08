import React from 'react'
import { client } from '../../lib/sanityClient'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs';

const Blog = ({post}) => {
    // console.log(typeof(post));
    return (
        <>
        <div className='justify-center items-center text-center p-4 lg:text-4xl font-medium sm:text-3xl text-2xl '>Blogs</div>
    <div className="flex mt-0 mb-1 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
         <div>
         <section className="text-gray-600 body-font">
                <div className=" px-5 md:px-6 lg:px-12 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        {post.map((item)=>{
                            return <div key={item._id} className=" md:p-2 p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-56 md:h-36 w-full object-cover object-center" src={item.mainImage.asset.url} alt="blog" />
                                <div className="p-1 md:p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.publishedAt}</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                                    <p className="leading-relaxed mb-3">{item.subTitle}</p>
                                    <div className="flex items-center flex-wrap ">
                                            <a className="inline-flex items-center">
                                                <img alt="blog" src={item.authorImage.asset.url} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                                <span className="flex-grow flex flex-col pl-4">
                                                    <span className="title-font font-medium text-gray-900">{item.authorName}</span>
                                                    {/* <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span> */}
                                                </span>
                                            </a>
                                         {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto  text-sm  tracking-widest mt-0.5">12 Jun 2019</span> */}
                                    </div>
                                    <div className="flex items-center flex-wrap mt-2 md:mt-4">
                                            <Link href={`/blog/${item.num}`}>
                                            <a className="text-teal-600 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                                <BsArrowRight className='ml-3'/>
                                            </a>
                                            </Link>
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

export default Blog

export async function getStaticProps() {
    const data=`*[_type == "blog"]{mainImage{
        asset->{
          url
        }
      },authorImage{
        asset->{
          url
        }
      },title,subTitle,authorName,publishedAt,_id,num}`;
    const post = await client.fetch(data);
    // console.log((post));
  
    return {
      props: {
        post,
      },
    };
  }