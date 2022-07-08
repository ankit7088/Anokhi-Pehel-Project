import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { FaArrowCircleDown,FaArrowCircleUp } from 'react-icons/fa';
import { client } from '../lib/sanityClient';
// import TeamCom from '../components/TeamCom';

const Coordinators = ({team}) => {
    const [Index, setIndex] = useState(2023);
    const handleSetIndex = (Id) => {
        if(Index !== Id){
            setIndex(Id);
        }else{
            setIndex(false);
        }
    }
    // console.log(alumnis);
    let obj2023 = team.filter((year)=>{
        return(
            year.tag==="2023"
        )
    })
    let obj2024 = team.filter((year)=>{
        return(
            year.tag==="2024"
        )
    })
    // console.log(obj2023);
    return (
        <>
            <div className='justify-center items-center text-center pt-4 pb-2 md:p-4 lg:text-4xl font-medium sm:text-3xl text-2xl italic'>COORDINATORS</div>
            <div className="flex mt-0 mb-3 justify-center">
                <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
            </div>
            {/* <TeamCom Id={2020} obj={obj2020}/>
            <TeamCom Id={2021} obj={obj2021}/>
            <TeamCom Id={2022} obj={obj2022}/> */}
            <div onClick={()=>handleSetIndex(2023)} className='container justify-center mx-auto'>
                <div className='justify-start px-5 pt-6 lg:px-28 '>
                    <div  className='hover:divide-x cursor-pointer justify-center items-center text-start py-4 px-6 rounded-lg text-2xl md:text-3xl font-medium italic border bg-slate-900 text-stone-100'>{Index !== 2023 ?(<FaArrowCircleDown className='animate-bounce inline-block text-3xl md:text-4xl'/>):(<FaArrowCircleUp className='inline-block text-3xl md:text-4xl'/>)} <span className='inline-block px-3 md:px-4'>Core Coordinators</span></div>
                </div>
                <div className='scroll-smooth'>
                    <section className="text-gray-600 body-font scroll-smooth">
                        <div className="container px-5 lg:px-32  pt-1 mx-auto">
                            {Index === 2023 && <div className="flex flex-wrap  justify-center">
                            {obj2023.map((item)=>{
                                    return <div key={item._id} className="p-2 lg:w-1/4">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className='transition ease-in-out delay-150 cursor-pointer  hover:-translate-y-2 hover:scale-110 duration-500'>
                                                <Image alt='humanImage' src={item.image.asset.url} className='object-fill aspect-auto' width={450} height={500}></Image>
                                            </div>
                                            <div className="px-6 pb-2 justify-center items-center text-center hover:bg-teal-50 ">
                                               
                                                <h1 className="title-font text-lg font-medium text-gray-900">{item.name}</h1>
                                                <p className="leading-relaxed">{item.year}</p>
                                                <p className="leading-relaxed ">{item.branch}</p>
                                                
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
            <div onClick={()=>handleSetIndex(2024)} className='container justify-center mx-auto'>
                <div className='justify-start px-5 pt-6 lg:px-28 '>
                    <div  className='hover:divide-x cursor-pointer justify-center items-center text-start py-4 px-6 rounded-lg text-2xl md:text-3xl font-medium italic border bg-slate-900 text-stone-100'>{Index !== 2024 ?(<FaArrowCircleDown className='animate-bounce inline-block text-3xl md:text-4xl'/>):(<FaArrowCircleUp className='inline-block text-3xl md:text-4xl'/>)} <span className='inline-block px-3 md:px-4'>Senior Coordinators</span></div>
                </div>
                <div className='scroll-smooth'>
                    <section className="text-gray-600 body-font scroll-smooth">
                        <div className="container px-5 lg:px-32  pt-1 mx-auto">
                            {Index === 2024 && <div className="flex flex-wrap  justify-center">
                            {obj2024.map((item)=>{
                                    return <div key={item._id} className="p-2 lg:w-1/4">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className='transition ease-in-out delay-150 cursor-pointer  hover:-translate-y-2 hover:scale-110 duration-500'>
                                                <Image alt='humanImage'  src={item.image.asset.url} className='object-fill aspect-auto' width={450} height={500}></Image>
                                            </div>
                                            <div className="px-6 pb-2 justify-center items-center text-center hover:bg-teal-50">
                                               
                                                <h1 className="title-font text-lg font-medium text-gray-900">{item.name}</h1>
                                                <p className="leading-relaxed ">{item.year}</p>
                                                <p className="leading-relaxed">{item.branch}</p>
                                                
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

export default Coordinators


export async function getStaticProps() {
    const data=`*[_type == "coordinator"] | order(tag asc) | order(order asc){image{
        asset->{
          url
        }
      },_id,name,year,branch,tag,order}`;
    const team = await client.fetch(data);
    // console.log(team);
  
    return {
      props: {
        team,
      },
    };
  }