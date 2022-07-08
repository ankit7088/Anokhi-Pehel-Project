import { client} from '../../lib/sanityClient';

const PhotoDetailsModal = ({photoData}) => {

    if(!photoData)
    return;

  return (
     
    <>
      {photoData && <div>
      <div className=''>
        <img
            className="w-full max-h-[80vh] object-contain"
            src={photoData.image.asset.url}
            alt="user-post"
            />
        </div>
        <div className="w-full px-2 md:px-0 flex flex-col">
          <div className='md:border-b-2 pb-2 text-center md:mr-2'>
              <h1 className='flex-1 mt-2 text-slate-800 text-xl md:text-3xl font-bold break-words'>
                {photoData.title}
              </h1>
            <p className="mt-2 text-slate-900 font-semibold text-base md:text-md">{photoData.about}</p>
            </div>
            
        </div>
      </div>}
    
     </>
     
  );
};

export default PhotoDetailsModal;



export async function getServerSideProps(context) {
    const { photoId } = context.params;
    const query = `*[_type == "photo" && _id == '${photoId}']{
      _id,
      title,
      image{
  asset->{
    url
  }
      },
      about,
    }`;
  
    const data = await client.fetch(query);
    // console.log(data[0])
   
    return {
      props: {
        photoData: data[0]
      }
    }
  }