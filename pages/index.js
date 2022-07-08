import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { client } from '../lib/sanityClient';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Contact from '../components/Contact';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Home(props) {
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
    <div >
      <Head>
        <title>Anokhi Pehel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/5.png" />
      </Head>

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
  <div><Image alt='slidingImage' src='/3.jpeg' layout="responsive" width={1500} height={590} ></Image></div>
  <div><Image alt='slidingImage' src='/2.jpg' layout="responsive" width={1500} height={590} ></Image></div>
  {/* <div><Image src='/' layout="responsive" width={1500} height={600} ></Image></div> */}
  {/* <div>Item 4</div> */}
</Carousel>
<div className='bg-slate-900 text-stone-200 pb-1'>
<div className='lg:mx-16 lg:my-8 md:mx-6 md:my-4 mx-1 my-1 '>
  <div className="container flex items-center flex-col lg:flex-row">
    <div className="video w-full lg:w-1/2  ml-4">
    <iframe className='w-full h-64 lg:h-80 aspect-auto  lg:aspect-video px-8'
        src="https://www.youtube.com/embed/NxMhckSJEP4?rel=0"
        title="YouTube video"
        allowFullScreen
    ></iframe>
    </div>
    <div className='w-full lg:w-1/2 pl-10 content-start pt-12 space-y-4'>
        <h2 className="pb-1 italic text-5xl font-bold" >Anokhi Pehel</h2>
        <div className="h-1 w-28 bg-teal-600 rounded"></div>
        <p className=' xl:pb-20 text-left text-lg tracking-normal leading-relaxed'>Anokhi Pehel is an initiative taken by the students of MNNIT to help the children of the economically weaker sections of the society by providing them an education in the best possible way. Under this initiative, we teach students from preparatory classes to 12th level teaching them various subjects.Not only do we develop academic skills of the students but also other extra curricular activities such as painting, dancing, sketching, etc. Started with a few teachers and just 20 students, today we have a team of about 60 teachers shaping the life of more than 250 students. Our students have shown great performance in various fields.</p>

    </div>
  </div>
  </div>
</div>
<div className="container m-auto md:my-12 p-2">
<div className="text-gray-600 body-font w-full">
<div className="flex flex-wrap ">
      <div className="lg:w-1/3 w-full p-1">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400 ">
          <h2 className="text-3xl text-gray-900 font-medium title-font mb-2 text-center italic ">Connect With Us</h2>
          {/* <div className='px-48 lg:visible invisible'><div className="h-1 w-20 bg-teal-600  rounded "></div></div> */}
          {/* <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div> */}
          <p className="leading-relaxed p-12 text-center hover:text-white text-lg">We aspire to establish anokhi pehel in each institute. Join us in giving this initiative an international level.</p>
        </div>
      </div>
      <div className="lg:w-1/3 w-full p-1">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400">
          <h2 className="text-3xl text-gray-900 font-medium title-font mb-2 text-center italic">Our Operations</h2>
          {/* <div className='px-52 lg:visible invisible'><div className="h-1 w-20 bg-teal-600 rounded "></div></div> */}
          {/* <div className="h-1 md:ml-20 w-28 bg-teal-600 rounded "></div> */}
          <p className="leading-relaxed p-12 text-center hover:text-white text-lg">We help the children of the economically weaker section of our society by providing them an education.we also do lots of extracurricular activities to improve their social skills and personality development.we also celebrate lots of festivals with them.</p>
        </div>
      </div>
      <div className="lg:w-1/3 w-full p-1">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400">
          <h2 className="text-3xl text-gray-900 font-medium title-font mb-2 text-center italic">Donate for a good cause</h2>
          {/* <div className='px-52 lg:visible invisible'><div className="h-1 w-20 bg-teal-600 rounded "></div></div> */}
          {/* <div className="h-1 md:ml-3 w-28 bg-teal-600 rounded "></div> */}
          <p className="leading-relaxed p-12 text-center hover:text-white text-lg">Your small donation makes a lot of difference for us</p>
        </div>
      </div>
  </div>
 </div>
</div>
<div className=" text-stone-200 bg-slate-900 body-font">
{/* <div className="lg:ml-4">
  <h2 className='title-font text-center text-4xl italic text-white  font-medium'>Endorsements</h2>
  <div className="flex mt-4 mb-8 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
  </div> */}
  <div className="container px-0 py-14 mx-auto flex flex-wrap">
    <div className="flex flex-wrap mt-auto mb-auto lg:w-1/2 w-full content-start p-4">
      <div className="w-full sm:p-4 mb-6">
        <h1 className="title-font font-medium mb-2 text-stone-200 text-4xl italic">Achievements</h1>
        <div className="h-1 w-24 bg-teal-600 rounded"></div>
        <div className="leading-relaxed text-lg mt-8">Stories that we create`&lsquo;` smiles that we get are some priceless moments that motivates team Anokhi Pehel work tirelessly and achieve more than just a milestone - it`&apos;`s the contribution for betterment of the notion`&rsquo;`</div>
      </div>
      
    </div>
    <div className="flex flex-wrap  mt-auto mb-auto lg:w-1/2 w-full content-start ">
        <div className="p-4 w-1/3">
            <h2 className="title-font font-medium text-4xl mt-8 text-stone-200">1,000+</h2>
            <p className="leading-relaxed">Children helped</p>
          </div>
          <div className="p-4 w-1/3">
            <h2 className="title-font font-medium text-4xl mt-8 text-stone-200">100+</h2>
            <p className="leading-relaxed">Volunteers</p>
          </div>
          <div className="p-4 w-1/3">
            <h2 className="title-font font-medium text-4xl mt-8 text-stone-200">20+</h2>
            <p className="leading-relaxed">Students admitted to school</p>
          </div>
    </div>
    {/* <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats">
    </div> */}
  </div>
</div>
<div className="container m-auto md:mt-12 p-4 ">
<div className="text-gray-600 body-font w-full ">
<div className="lg:ml-4">
  <h2 className='title-font text-center text-4xl italic text-gray-900  font-medium'>Endorsements</h2>
  <div className="flex mt-4 mb-8 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
  </div>
<div className="flex flex-wrap mt-4 ">
      <div className="lg:w-1/3 w-full p-2 hover:text-white">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400 shadow-inner">
          <h2 className="text-3xl text-slate-600 font-medium title-font mb-2 text-center italic ">Dr. Rajeev Tripathi</h2>
          {/* <div className='px-48 lg:visible invisible'><div className="h-1 w-20 bg-teal-600  rounded "></div></div> */}
          <p className="leading-relaxed p-12 text-center hover:text-white text-lg">The purpose of the Anokhi Pehel is to be a bridge between the street and schools, by giving our children the tools and knowledge to go to school.</p>
        </div>
      </div>
      <div className="lg:w-1/3 w-full p-2 hover:text-white">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400 shadow-inner">
          <h2 className="text-3xl text-slate-600 font-medium title-font mb-2 text-center italic">Dr. Basant Kumar</h2>
          {/* <div className='px-48 lg:visible invisible'><div className="h-1 w-20 bg-teal-600  rounded "></div></div> */}
          {/* <div className="h-1 md:ml-20 w-28 bg-teal-600 rounded "></div> */}
          <p className="leading-relaxed p-12 text-center hover:text-white text-lg">Creating access to education is the purest form of nation building.</p>
        </div>
      </div>
      <div className="lg:w-1/3 w-full p-2 hover:text-white">
        <div className="border border-gray-200 p-2 h-full rounded-2xl hover:bg-teal-400 shadow-inner">
          <h2 className="text-3xl text-slate-600 font-medium title-font mb-2 text-center italic">Dr. Ranvijay</h2>
          {/* <div className='px-48 lg:visible invisible'><div className="h-1 w-20 bg-teal-600  rounded "></div></div> */}
          <p className="leading-relaxed p-12 text-center hover:text-white text-lg">Every child on the streets of our cities should have the opportunity to a better life.</p>
        </div>
      </div>
  </div>
 </div>
</div>

<div className=' lg:px-5 mt-16'>
<div className="text-gray-600 body-font w-full ">
  <div className="lg:ml-4">
  <h2 className='title-font text-center text-4xl italic text-gray-900  font-medium'>Testimonials</h2>
  <div className="flex mt-4 mb-8 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
  </div>
  </div>
  
    <Carousel
    
    additionalTransfrom={0}
    arrows
    autoPlay
    autoPlaySpeed={5000}
    centerMode={false}
    className=""
    containerclass="container-with-dots"
    dotListclass=""
    draggable
    focusOnSelect={false}
    infinite
    itemclass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover={false}
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={true}
    sliderclass=""
    slidesToSlide={2}
    swipeable
>

{props.testimonial.map((item)=>{
return <div key={item._id} className="p-4 mb-6">
        <div className="h-full w-full bg-teal-50 hover:bg-teal-100 border-r-4 border-b-4 border-rose-500 p-8 rounded">
          <FaQuoteLeft className='text-base md:text-lg'/>
          <p className="leading-relaxed mb-6 text-black mx-2">{item.quote}</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={item.image.asset.url} className="w-20 h-20 rounded-full border-teal-600 border-2 flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">{item.name}</span>
              <span className="text-gray-500 text-sm">{item.education}</span>
              <span className="text-gray-500 text-sm">{item.workingAt}</span>
            </span>
          </a>
        </div>
      </div>})}
</Carousel>
<div className='text-center'>
<Link href="/testimonial"><a className="mt-3 cursor-pointer text-teal-500 inline-flex items-center text-xl lg:text-2xl">Click for More</a></Link>
</div>
    </div>
    <div className='justify-center items-center text-center p-2 mt-20 lg:text-4xl font-medium sm:text-3xl text-2xl italic'>Contact Us</div>
            <div className="flex mt-0 mb-3 justify-center">
                <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
            </div>
    <Contact/>

    </div>
  )
}

export async function getStaticProps() {
  const data=`*[_type == "testimonial"] | order(order asc)[0...4]{image{
      asset->{
        url
      }
    },_id,name,quote,workingAt,education,order}`;
  const testimonial = await client.fetch(data);
  // console.log(testimonial);

  return {
    props: {
      testimonial,
    },
    revalidate:3600,
  };
}