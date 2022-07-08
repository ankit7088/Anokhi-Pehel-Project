import { useState } from "react";
import Share from "./Share";

import { AiOutlineShareAlt,AiOutlineDownload } from "react-icons/ai";

const Photo = ({ pin}) => {
  const [postHovered, setPostHovered] = useState(false);

  
  const [showShareModal, setShowShareModal] = useState(false);

  let {image, _id,title } = pin;


  return (
    <>
      <div
        className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
        style={{
          backgroundColor: 'rgba(17, 25, 40, 0.15)',
        }}>
        <div
          onMouseEnter={() => setPostHovered(true)}
          onMouseLeave={() => setPostHovered(false)}
          className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          <div className="w-full relative overflow-hidden">
            <img
            //   onClick={showPin}
              src={image?.asset.url}
              height={500}
              width={500}
              className="w-full h-full object-cover hover:scale-125 transition duration-1000"
              alt="user-post" 
              />
          </div>
    
        </div>
      
          <div className="bg-teal-500 flex relative justify-around items-center">
          <h1 className="flex-1 pl-2 text-lg font-semibold text-black ">
            {title}
          </h1>

          <div className="flex items-center btn-group">
            
          <label htmlFor="my-modal" className="btn btn-square hover:bg-teal-600 bg-teal-500 px-2  border-1 border-black" onClick={()=>setShowShareModal(true)}>
          <AiOutlineShareAlt className="h-5 w-5 text-black"/>
          </label>
          {showShareModal && <Share setShowShareModal={setShowShareModal} title={title} id={_id} imageUrl={image.asset.url}/>}

          <a
              href={`${image?.asset?.url}?dl=`}
              download
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="btn btn-square bg-teal-500 px-2 hover:animate-pulse border-1 border-black hover:bg-teal-600 "
                          >
             <AiOutlineDownload className="h-5 w-5 text-black "/>
          </a>
         </div>
       </div>
      </div>
      </>
  );
};

export default Photo;