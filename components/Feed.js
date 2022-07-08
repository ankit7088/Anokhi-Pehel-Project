import Masonry from "react-masonry-css";
import Photo from "./Photo";

const breakPointObj = {
    default: 3,
    1200: 2,
    900: 1,
    600: 1
}

const Feed = ({pins}) => {

    
    return (
        <>
            
            <Masonry
                className="px-2 md:px-4 pt-1 md:pt-3 flex gap-2"
                columnClassName="bg-clip-padding"
                breakpointCols={breakPointObj}>
                {pins?.map(pin => <Photo
                    key={pin._key ? pin._key : pin._id}
                    pin={pin._key ? pin.item : pin} />)}
            </Masonry>
        </>
  );
};

export default Feed;