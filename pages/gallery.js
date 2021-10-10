import GalleryCard from "@/components/GalleryCard";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import React, { useEffect, useState } from "react";

const Gallery = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    setLoading(false);
    setGalleries(data);
  }, [data]);

  if (loading) {
    return <>Loading</>;
  }

  return (
    <>
      <Layout title="Gallery">
        <div className="px-20 py-10">
          <h1 className="text-3xl leading-loose pb-7">Gallery</h1>
          <div className="grid grid-cols-4 gap-x-5 gap-y-10">
            {galleries.length > 0 ? (
              galleries.map((gallery) => (
                <GalleryCard
                  key={gallery.workTitle}
                  imgUrl={gallery.imgUrl}
                  isFavourite={gallery.isFavourite}
                  workTitle={gallery.workTitle}
                  description={gallery.description}
                />
              ))
            ) : (
              <>Nothing in the gallery</>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Gallery;

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/gallery`);
  const data = await res.json();

  if (res.ok) {
    return { props: { data } };
  } else {
    return { props: data };
  }
};

const galleryData = [
  {
    imgUrl:
      "https://media.designcafe.com/wp-content/uploads/2019/11/17060054/modern-false-ceiling-design-for-bedroom-1024x1024.jpg",
    isFavourite: false,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/OIP.axXkqDIEank7iFcAS8JVtAHaHa?pid=ImgDet&rs=1",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://www.architectureartdesigns.com/wp-content/uploads/2016/08/15-Inspirational-Rustic-Kitchen-Designs-You-Will-Adore-3.jpg",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/R.c9f352f4f96e135957c65287580a2c7a?rik=TVm2JAXPlmCC5w&riu=http%3a%2f%2fwww.nouvelle.com.au%2fwp-content%2fuploads%2f2018%2f05%2fmodern-kitchen11.jpg&ehk=uVRHLVSAu1xXYGmpmUGK%2btAlW3oryi6U7IQruNkbFa0%3d&risl=&pid=ImgRaw&r=0",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://media.designcafe.com/wp-content/uploads/2019/11/17060054/modern-false-ceiling-design-for-bedroom-1024x1024.jpg",
    isFavourite: false,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/OIP.axXkqDIEank7iFcAS8JVtAHaHa?pid=ImgDet&rs=1",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://www.architectureartdesigns.com/wp-content/uploads/2016/08/15-Inspirational-Rustic-Kitchen-Designs-You-Will-Adore-3.jpg",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/R.c9f352f4f96e135957c65287580a2c7a?rik=TVm2JAXPlmCC5w&riu=http%3a%2f%2fwww.nouvelle.com.au%2fwp-content%2fuploads%2f2018%2f05%2fmodern-kitchen11.jpg&ehk=uVRHLVSAu1xXYGmpmUGK%2btAlW3oryi6U7IQruNkbFa0%3d&risl=&pid=ImgRaw&r=0",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://media.designcafe.com/wp-content/uploads/2019/11/17060054/modern-false-ceiling-design-for-bedroom-1024x1024.jpg",
    isFavourite: false,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/OIP.axXkqDIEank7iFcAS8JVtAHaHa?pid=ImgDet&rs=1",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://www.architectureartdesigns.com/wp-content/uploads/2016/08/15-Inspirational-Rustic-Kitchen-Designs-You-Will-Adore-3.jpg",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/R.c9f352f4f96e135957c65287580a2c7a?rik=TVm2JAXPlmCC5w&riu=http%3a%2f%2fwww.nouvelle.com.au%2fwp-content%2fuploads%2f2018%2f05%2fmodern-kitchen11.jpg&ehk=uVRHLVSAu1xXYGmpmUGK%2btAlW3oryi6U7IQruNkbFa0%3d&risl=&pid=ImgRaw&r=0",
    isFavourite: true,
    workTitle: "Ceiling Designs For Living Room",
    description: "Design description",
  },
];
