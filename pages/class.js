import React from 'react'
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Class = (props) => {
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
    <div className='lg:mx-28'>
    <div className='justify-center items-center text-center pt-3 pb-2  italic lg:text-4xl font-medium sm:text-3xl text-2xl'>Evening Class</div>
    <div className="flex mt-0 mb-5 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
    <Carousel
  pauseOnHover={false}
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
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  deviceType={props.deviceType}
  dotListclass="custom-dot-list-style"
  itemclass="carousel-item-padding-40-px"
>
<div >
  <img className='h-60 md:h-[37rem] w-full' alt='slidingImage' src='/3.jpeg' layout="responsive"   ></img>
  </div>
  <div><img className='h-60 md:h-[37rem] w-full' alt='slidingImage' src='/2.jpg' layout="responsive"  ></img></div>
</Carousel>
<div className='mx-4 md:mx-16 mt-8'>
  <div className='mb-4 font-medium lg:text-xl text-lg '>
  <h1>Anokhi Pehel is committed to providing basic education to such underprivileged kids, to empower their families and help them evolve as good citizens. It also helps provide sponsorship to children who are unable to pursue education due to lack of funds.</h1>
  </div>
  <div className='justify-center items-center px-4 font-normal'>
  <ul className="list-disc ">
  <li>Regular classes for 12 batches (preparatory 1, 2,3,4 + (5-12)). 250+ students for each session
</li>
  <li>Separate classes for Navodaya (class 5) and competitions like NSO, NTSE, FIIT-JEE for class 9th (striker)
</li>
  <li>Mentorship programme for personal attention ( 50+ teachers so students/mentors is 3-4).</li>
</ul>
  </div>
</div>

    </div>
    
    </>
  )
}

export default Class