export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };

  export const feedQuery = (start,end) => {
    const query = `*[_type == "photo"] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
          _id,
          title,
        }[${start}...${end}]`;
    return query;
  };