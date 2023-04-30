import { useQuery } from "@apollo/client";
import { GET_MAIN_TITLE } from "data/mainTitle";

export const GetMainTitle = () => {
  const { data } = useQuery(GET_MAIN_TITLE);
  const mainTitle = data?.post.content;

  return mainTitle;
}
