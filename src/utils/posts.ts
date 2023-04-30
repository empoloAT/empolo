import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "data/posts";

export const GetAllPosts = () => {
  const { data } = useQuery(GET_ALL_POSTS);
  const firstTitle = data?.posts?.nodes[23].content;
  const secondTitle = data?.posts?.nodes[22].content;
  const thirdTitle = data?.posts?.nodes[21].content;
  const fourthTitle = data?.posts?.nodes[20].content;
  const fifthTitle = data?.posts?.nodes[19].content;
  const firstCardTitle = data?.posts?.nodes[18].title;
  const firstCardSubTitle = data?.posts?.nodes[18].content;
  const secondCardTitle = data?.posts?.nodes[17].title;
  const secondCardSubTitle = data?.posts?.nodes[17].content;
  const thirdCardTitle = data?.posts?.nodes[16].title;
  const thirdCardSubTitle = data?.posts?.nodes[16].content;
  const fourthCardTitle = data?.posts?.nodes[15].title;
  const fourthCardSubTitle = data?.posts?.nodes[15].content;
  const firstSkillCardsTitle = data?.posts?.nodes[14].content;
  const secondSkillCardsTitle = data?.posts?.nodes[13].title;
  const secondSkillCardsSubtitle = data?.posts?.nodes[13].content;
  const thirdSkillCardsTitle = data?.posts?.nodes[12].title;
  const thirdSkillCardsSubtitle = data?.posts?.nodes[12].content;
  const fourthSkillCardsTitle = data?.posts?.nodes[11].title;
  const fourthSkillCardsSubtitle = data?.posts?.nodes[11].content;
  const fifthSkillCardsTitle = data?.posts?.nodes[10].title;
  const fifthSkillCardsSubtitle = data?.posts?.nodes[10].content;
  const sixthSkillCardsTitle = data?.posts?.nodes[9].title;
  const sixthSkillCardsSubtitle = data?.posts?.nodes[9].content;
  const seventhCardsTitle = data?.posts?.nodes[8].title;
  const seventhCardsSubtitle = data?.posts?.nodes[8].content;
  const firstRealCasesTitle = data?.posts?.nodes[6].title;
  const firstRealCasesSubtitle = data?.posts?.nodes[6].content;
  const secondRealCasesTitle = data?.posts?.nodes[5].title;
  const secondRealCasesSubtitle = data?.posts?.nodes[5].content;
  const thirdRealCasesTitle = data?.posts?.nodes[4].title;
  const thirdRealCasesSubtitle = data?.posts?.nodes[4].content;
  const fourthRealCasesTitle = data?.posts?.nodes[3].title;
  const fourthRealCasesSubtitle = data?.posts?.nodes[3].content;
  const cooperationTitle = data?.posts?.nodes[2].content;
  const ourTeamTitle = data?.posts?.nodes[1].content;
  const posts = {
    firstTitle,
    secondTitle,
    thirdTitle,
    fourthTitle,
    fifthTitle,
    firstCardTitle,
    firstCardSubTitle,
    secondCardTitle,
    secondCardSubTitle,
    thirdCardTitle,
    thirdCardSubTitle,
    fourthCardTitle,
    fourthCardSubTitle,
    firstSkillCardsTitle,
    secondSkillCardsTitle,
    secondSkillCardsSubtitle,
    thirdSkillCardsTitle,
    thirdSkillCardsSubtitle,
    fourthSkillCardsTitle,
    fourthSkillCardsSubtitle,
    fifthSkillCardsTitle,
    fifthSkillCardsSubtitle,
    sixthSkillCardsTitle,
    sixthSkillCardsSubtitle,
    seventhCardsTitle,
    seventhCardsSubtitle,
    firstRealCasesTitle,
    firstRealCasesSubtitle,
    secondRealCasesTitle,
    secondRealCasesSubtitle,
    thirdRealCasesTitle,
    thirdRealCasesSubtitle,
    fourthRealCasesTitle,
    fourthRealCasesSubtitle,
    cooperationTitle,
    ourTeamTitle
  };
  
  return posts;
};
