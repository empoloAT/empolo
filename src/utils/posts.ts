import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "data/posts";

export const GetAllPosts = () => {
  const { data } = useQuery(GET_ALL_POSTS);
  const firstTitle = data?.posts?.nodes[42].content;
  const secondTitle = data?.posts?.nodes[41].content;
  const thirdTitle = data?.posts?.nodes[40].content;
  const fourthTitle = data?.posts?.nodes[39].content;
  const fifthTitle = data?.posts?.nodes[38].content;
  const firstCardTitle = data?.posts?.nodes[37].title;
  const firstCardSubTitle = data?.posts?.nodes[37].content;
  const secondCardTitle = data?.posts?.nodes[36].title;
  const secondCardSubTitle = data?.posts?.nodes[36].content;
  const thirdCardTitle = data?.posts?.nodes[35].title;
  const thirdCardSubTitle = data?.posts?.nodes[35].content;
  const fourthCardTitle = data?.posts?.nodes[34].title;
  const fourthCardSubTitle = data?.posts?.nodes[34].content;
  const firstSkillCardsTitle = data?.posts?.nodes[33].content;
  const secondSkillCardsTitle = data?.posts?.nodes[32].title;
  const secondSkillCardsSubtitle = data?.posts?.nodes[32].content;
  const thirdSkillCardsTitle = data?.posts?.nodes[31].title;
  const thirdSkillCardsSubtitle = data?.posts?.nodes[31].content;
  const fourthSkillCardsTitle = data?.posts?.nodes[30].title;
  const fourthSkillCardsSubtitle = data?.posts?.nodes[30].content;
  const fifthSkillCardsTitle = data?.posts?.nodes[29].title;
  const fifthSkillCardsSubtitle = data?.posts?.nodes[29].content;
  const sixthSkillCardsTitle = data?.posts?.nodes[28].title;
  const sixthSkillCardsSubtitle = data?.posts?.nodes[28].content;
  const seventhCardsTitle = data?.posts?.nodes[27].title;
  const seventhCardsSubtitle = data?.posts?.nodes[27].content;
  const firstRealCasesTitle = data?.posts?.nodes[25].title;
  const firstRealCasesSubtitle = data?.posts?.nodes[25].content;
  const secondRealCasesTitle = data?.posts?.nodes[24].title;
  const secondRealCasesSubtitle = data?.posts?.nodes[24].content;
  const thirdRealCasesTitle = data?.posts?.nodes[23].title;
  const thirdRealCasesSubtitle = data?.posts?.nodes[23].content;
  const fourthRealCasesTitle = data?.posts?.nodes[22].title;
  const fourthRealCasesSubtitle = data?.posts?.nodes[22].content;
  const cooperationTitle = data?.posts?.nodes[21].content;
  const ourTeamTitle = data?.posts?.nodes[20].content;
  const firstEmployeeName = data?.posts?.nodes[18].content;
  const firstEmployeeSpecialty = data?.posts?.nodes[17].content;
  const secondEmployeeName = data?.posts?.nodes[16].content;
  const secondEmployeeSpecialty = data?.posts?.nodes[15].content;
  const thirdEmployeeName = data?.posts?.nodes[14].content;
  const thirdEmployeeSpecialty = data?.posts?.nodes[13].content;
  const firstSEOTitle = data?.posts?.nodes[12].title;
  const firstSEOSubtitle = data?.posts?.nodes[12].content;
  const secondSEOTitle = data?.posts?.nodes[11].title;
  const secondSEOSubtitle = data?.posts?.nodes[11].content;
  const thirdSEOTitle = data?.posts?.nodes[10].title;
  const thirdSEOSubtitle = data?.posts?.nodes[10].content;
  const fourthSEOTitle = data?.posts?.nodes[9].title;
  const fourthSEOSubtitle = data?.posts?.nodes[9].content;
  const newsletterTitle = data?.posts?.nodes[8].title;
  const subscribingTitle = data?.posts?.nodes[7].title;
  const copyrightTitle = data?.posts?.nodes[6].title;
  const privacyPolicyTitle = data?.posts?.nodes[5].title;
  const termsConditionsTitle = data?.posts?.nodes[4].title;
  const contactUsToastTitle = data?.posts?.nodes[3].content;
  const toastError = data?.posts?.nodes[2].content;
  const newsletterToastTitle = data?.posts?.nodes[1].content;
  const cookieBannerTitle = data?.posts?.nodes[0].content;

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
    newsletterTitle,
    subscribingTitle,
    copyrightTitle,
    privacyPolicyTitle,
    termsConditionsTitle,
    contactUsToastTitle,
    toastError,
    newsletterToastTitle,
    cookieBannerTitle
  };
  
  return posts;
};
