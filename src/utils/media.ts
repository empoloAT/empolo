import { useQuery } from "@apollo/client";
import { GET_ALL_MEDIA } from "../data/media";

export const GetAllMedia = () => {
  const { data } = useQuery(GET_ALL_MEDIA);
  const videoUrl = data?.mediaItems.nodes[7].mediaItemUrl;
  const firstImageUrl = data?.mediaItems.nodes[8].mediaItemUrl;
  const secondImageUrl = data?.mediaItems.nodes[9].mediaItemUrl;
  const thirdImageUrl = data?.mediaItems.nodes[6].mediaItemUrl;
  const fourthImageUrl = data?.mediaItems.nodes[5].mediaItemUrl;
  const fifthImageUrl = data?.mediaItems.nodes[4].mediaItemUrl;
  const sixthImageUrl = data?.mediaItems.nodes[3].mediaItemUrl;
  const seventhImageUrl = data?.mediaItems.nodes[2].mediaItemUrl;
  const eighthImageUrl = data?.mediaItems.nodes[1].mediaItemUrl;
  const ninthImageUrl = data?.mediaItems.nodes[0].mediaItemUrl;
  const mediaUrls = {
    videoUrl,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl,
    fourthImageUrl,
    fifthImageUrl,
    sixthImageUrl,
    seventhImageUrl,
    eighthImageUrl,
    ninthImageUrl
  };

  return (
    mediaUrls
  );
};
