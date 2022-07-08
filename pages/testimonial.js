import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { client } from '../lib/sanityClient';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = (props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <>
    <div>
    <div className='justify-center items-center text-center pt-6 lg:text-4xl font-medium text-3xl italic'>TESTIMONIALS</div>
    <div className="flex mt-2 mb-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
    {/* <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span> */}
    <section className="text-gray-600 body-font">
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerclass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListclass="custom-dot-list-style"
  itemclass="carousel-item-padding-40-px"
>
{props.mem.map((item)=>{
  return <div key={item._id} className=" px-5 pt-8 pb-3 mx-auto">
  <div className="flex flex-wrap ">
  <div className="lg:px-32 lg:mb-0 mb-6 md:p-4 ">
        <div className="h-full text-center rounded-lg border-x-4 lg:border-x-8 border-y-2 border-x-teal-500 hover:bg-stone-50 hover:shadow-xl">
          <div className='pt-4 items-center justify-center'>
          <img alt="testimonial" className=" lg:w-40 w-36 lg:h-40 h-36 mb-4 object-cover object-center rounded-full inline-block border-2 border-teal-200 bg-gray-100" src={item.image.asset.url}/>
          </div>
          <FaQuoteLeft className='lg:text-3xl text-2xl mb-1 ml-4 lg:ml-20' />
          <div className='pb-6 px-8 lg:px-24'>
          <p className="leading-relaxed">{item.quote}</p>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg mt-4">{item.name}</h2>
          <p className="text-gray-500 text-sm">{item.workingAt}</p>
          <p className="text-gray-500 text-sm font-medium">{item.education}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
})
}
</Carousel>
</section>
    </div>
    </>
  )
}

export default Testimonial

export async function getStaticProps() {
    const data=`*[_type == "testimonial"] | order(order asc){image{
        asset->{
          url
        }
      },_id,name,quote,workingAt,education,order}`;
    const mem = await client.fetch(data);
    // console.log(mem);
  
    return {
      props: {
        mem,
      },
      revalidate:3600,
    };
  }