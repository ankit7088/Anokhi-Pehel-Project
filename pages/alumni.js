import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { FaArrowCircleDown,FaArrowCircleUp } from 'react-icons/fa';
import { client } from '../lib/sanityClient';
// import TeamCom from '../components/TeamCom';

const Team = ({alumnis}) => {
    const [Index, setIndex] = useState(2020);
    const handleSetIndex = (Id) => {
        if(Index !== Id){
            setIndex(Id);
        }else{
            setIndex(false);
        }
    }
    // console.log(alumnis);
    let obj2020 = alumnis.filter((year)=>{
        return(
            year.tag==="2020"
        )
    })
    let obj2021 = alumnis.filter((year)=>{
        return(
            year.tag==="2021"
        )
    })
    let obj2022 = alumnis.filter((year)=>{
        return(
            year.tag==="2022"
        )
    })
    // console.log(obj2020);
    return (
        <>
            <div className='justify-center items-center text-center pt-4 pb-2 md:p-4 lg:text-4xl font-medium sm:text-3xl text-2xl italic'>ALUMNI</div>
            <div className="flex mt-0 mb-3 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
            {/* <TeamCom Id={2020} obj={obj2020}/>
            <TeamCom Id={2021} obj={obj2021}/>
            <TeamCom Id={2022} obj={obj2022}/> */}
            <div onClick={()=>handleSetIndex(2020)} className='container justify-center mx-auto'>
                <div className='justify-start px-5 pt-6 lg:px-28 '>
                    <div  className='hover:divide-x cursor-pointer justify-center items-center text-start py-4 px-6 rounded-lg text-3xl font-medium italic border bg-slate-900 text-stone-100'>{Index !== 2020 ?(<FaArrowCircleDown className='animate-bounce inline-block text-4xl'/>):(<FaArrowCircleUp className='inline-block text-4xl '/>)} <span className='inline-block px-4'>  Batch of 2021</span></div>
                </div>
                <div className='scroll-smooth'>
                    <section className="text-gray-600 body-font scroll-smooth">
                        <div className="container px-5 lg:px-32  pt-1 mx-auto">
                            {Index === 2020 && <div className="flex flex-wrap  justify-center">
                            {obj2020.map((item)=>{
                                    return <div key={item._id} className="p-2 lg:w-1/4">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className='transition ease-in-out delay-150 cursor-pointer  hover:-translate-y-2 hover:scale-110 duration-500'>
                                                <Image alt='image' src={item.image.asset.url} className='object-fill aspect-auto' width={450} height={500}></Image>
                                            </div>
                                            <div className="px-6 pb-2 justify-center items-center text-center hover:bg-teal-50">
                                               
                                                <h1 className="title-font text-lg font-medium text-gray-900 ">{item.name}</h1>
                                                <p className="leading-relaxed">{item.designation}</p>
                                                <p className="leading-relaxed ">{item.location}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    })
                                    }
                            </div>}
                        </div>
                    </section>
                </div>
            </div>
            <div onClick={()=>handleSetIndex(2021)} className='container justify-center mx-auto'>
                <div className='justify-start px-5 pt-6 lg:px-28 '>
                    <div  className='hover:divide-x cursor-pointer justify-center items-center text-start py-4 px-6 rounded-lg text-3xl font-medium italic border bg-slate-900 text-stone-100'>{Index !== 2021 ?(<FaArrowCircleDown className='animate-bounce inline-block text-4xl'/>):(<FaArrowCircleUp className='inline-block text-4xl'/>)} <span className='inline-block px-4'>  Batch of 2021</span></div>
                </div>
                <div className='scroll-smooth'>
                    <section className="text-gray-600 body-font scroll-smooth">
                        <div className="container px-5 lg:px-32  pt-1 mx-auto">
                            {Index === 2021 && <div className="flex flex-wrap  justify-center">
                            {obj2021.map((item)=>{
                                    return <div key={item._id} className="p-2 lg:w-1/4">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className='transition ease-in-out delay-150 cursor-pointer  hover:-translate-y-2 hover:scale-110 duration-500'>
                                                <Image alt='image' src={item.image.asset.url} className='object-fill aspect-auto' width={450} height={500}></Image>
                                            </div>
                                            <div className="px-6 pb-2 justify-center items-center text-center hover:bg-teal-50">
                                               
                                                <h1 className="title-font text-lg font-medium text-gray-900">{item.name}</h1>
                                                <p className="leading-relaxed ">{item.designation}</p>
                                                <p className="leading-relaxed">{item.location}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    })
                                    }
                            </div>}
                        </div>
                    </section>
                </div>
            </div>
            <div onClick={()=>handleSetIndex(2022)} className='container justify-center mx-auto'>
                <div className='justify-start px-5 pt-6 lg:px-28 '>
                    <div  className='hover:divide-x cursor-pointer justify-center items-center text-start py-4 px-6 rounded-lg text-3xl font-medium italic border bg-slate-900 text-stone-100'>{Index !== 2022 ?(<FaArrowCircleDown className='animate-bounce inline-block text-4xl'/>):(<FaArrowCircleUp className='inline-block text-4xl'/>)} <span className='inline-block px-4'>  Batch of 2022</span></div>
                </div>
                <div className='scroll-smooth'>
                    <section className="text-gray-600 body-font scroll-smooth">
                        <div className="container px-5 lg:px-32  pt-1 mx-auto">
                            {Index === 2022 && <div className="flex flex-wrap  justify-center">
                            {obj2022.map((item)=>{
                                    return <div key={item._id} className="p-2 lg:w-1/4">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className='transition ease-in-out delay-150 cursor-pointer  hover:-translate-y-2 hover:scale-110 duration-500'>
                                                <Image alt='image' src={item.image.asset.url} className='object-fill aspect-auto' width={450} height={500}></Image>
                                            </div>
                                            <div className="px-6 pb-2 justify-center items-center text-center hover:bg-teal-50">
                                               
                                                <h1 className="title-font text-lg font-medium text-gray-900">{item.name}</h1>
                                                <p className="leading-relaxed ">{item.designation}</p>
                                                <p className="leading-relaxed ">{item.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                    })
                                    }
                            </div>}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Team


export async function getStaticProps() {
    const data=`*[_type == "alumni"] | order(tag asc) | order(order asc){image{
        asset->{
          url
        }
      },_id,name,designation,location,tag,order}`;
    const alumnis = await client.fetch(data);
    // console.log(alumnis);
  
    return {
      props: {
        alumnis,
      },
    };
  }