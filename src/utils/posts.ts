import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "data/posts";

export const GetAllPosts = () => {
  const { data } = useQuery(GET_ALL_POSTS);
  const firstTitle = data?.posts?.nodes[33].content;
  const secondTitle = data?.posts?.nodes[32].content;
  const thirdTitle = data?.posts?.nodes[31].content;
  const fourthTitle = data?.posts?.nodes[30].content;
  const fifthTitle = data?.posts?.nodes[29].content;
  const firstCardTitle = data?.posts?.nodes[28].title;
  const firstCardSubTitle = data?.posts?.nodes[28].content;
  const secondCardTitle = data?.posts?.nodes[27].title;
  const secondCardSubTitle = data?.posts?.nodes[27].content;
  const thirdCardTitle = data?.posts?.nodes[26].title;
  const thirdCardSubTitle = data?.posts?.nodes[26].content;
  const fourthCardTitle = data?.posts?.nodes[25].title;
  const fourthCardSubTitle = data?.posts?.nodes[25].content;
  const firstSkillCardsTitle = data?.posts?.nodes[24].content;
  const secondSkillCardsTitle = data?.posts?.nodes[23].title;
  const secondSkillCardsSubtitle = data?.posts?.nodes[23].content;
  const thirdSkillCardsTitle = data?.posts?.nodes[22].title;
  const thirdSkillCardsSubtitle = data?.posts?.nodes[22].content;
  const fourthSkillCardsTitle = data?.posts?.nodes[21].title;
  const fourthSkillCardsSubtitle = data?.posts?.nodes[21].content;
  const fifthSkillCardsTitle = data?.posts?.nodes[20].title;
  const fifthSkillCardsSubtitle = data?.posts?.nodes[20].content;
  const sixthSkillCardsTitle = data?.posts?.nodes[19].title;
  const sixthSkillCardsSubtitle = data?.posts?.nodes[19].content;
  const seventhCardsTitle = data?.posts?.nodes[18].title;
  const seventhCardsSubtitle = data?.posts?.nodes[18].content;
  const firstRealCasesTitle = data?.posts?.nodes[16].title;
  const firstRealCasesSubtitle = data?.posts?.nodes[16].content;
  const secondRealCasesTitle = data?.posts?.nodes[15].title;
  const secondRealCasesSubtitle = data?.posts?.nodes[15].content;
  const thirdRealCasesTitle = data?.posts?.nodes[14].title;
  const thirdRealCasesSubtitle = data?.posts?.nodes[14].content;
  const fourthRealCasesTitle = data?.posts?.nodes[13].title;
  const fourthRealCasesSubtitle = data?.posts?.nodes[13].content;
  const cooperationTitle = data?.posts?.nodes[12].content;
  const ourTeamTitle = data?.posts?.nodes[11].content;
  const firstEmployeeName = data?.posts?.nodes[9].content;
  const firstEmployeeSpecialty = data?.posts?.nodes[8].content;
  const secondEmployeeName = data?.posts?.nodes[7].content;
  const secondEmployeeSpecialty = data?.posts?.nodes[6].content;
  const thirdEmployeeName = data?.posts?.nodes[5].content;
  const thirdEmployeeSpecialty = data?.posts?.nodes[4].content;
  const firstSEOTitle = data?.posts?.nodes[3].title;
  const firstSEOSubtitle = data?.posts?.nodes[3].content;
  const secondSEOTitle = data?.posts?.nodes[2].title;
  const secondSEOSubtitle = data?.posts?.nodes[2].content;
  const thirdSEOTitle = data?.posts?.nodes[1].title;
  const thirdSEOSubtitle = data?.posts?.nodes[1].content;
  const fourthSEOTitle = data?.posts?.nodes[0].title;
  const fourthSEOSubtitle = data?.posts?.nodes[0].content;
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
    ourTeamTitle,
    thirdEmployeeSpecialty,
    thirdEmployeeName,
    secondEmployeeSpecialty,
    secondEmployeeName,
    firstEmployeeSpecialty,
    firstEmployeeName,
    firstSEOTitle,
    firstSEOSubtitle,
    secondSEOTitle,
    secondSEOSubtitle,
    thirdSEOTitle,
    thirdSEOSubtitle,
    fourthSEOTitle,
    fourthSEOSubtitle,
  };
  
  return posts;
};
