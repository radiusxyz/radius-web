import styled from "styled-components";
import arrow from "../assets/images/arrow.svg";
import purple_new_1 from "../assets/images/purple_new_1.svg";
import purple_new_2 from "../assets/images/purple_new_2.svg";
import purple_new_3 from "../assets/images/purple_new_3.svg";
import purple_new_4 from "../assets/images/purple_new_4.svg";
import PurpleCards from "./PurpleCards";
import BeyondSection from "./BeyondSection";
import newVid from "../assets/images/video.mp4";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 41px 30px 200px 30px;
  align-items: center;
  @media (max-width: 750px) {
    padding: 0;
  }
`;

const LabWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
  @media (max-width: 750px) {
    margin-bottom: 0;
    height: 502px;
  }
`;

const VideoWrapper = styled.div`
  @media (max-width: 750px) {
    height: 100%;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 20px;
  @media (max-width: 1920px) {
    height: 1015px;
    object-fit: cover;
   }
  
  @media (max-width: 750px) {
    object-fit: cover;
    object-position: 58% center;
    position absolute;
    height: 100%;
    border-radius: 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
  position: absolute;
  height: 100%;
  @media (max-width: 750px) {
    padding: 0px 30px 28px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  max-width: 658px;

  @media (max-width: 1040px) {
    max-width: 300px;
  }
  @media (max-width: 750px) {
    max-width: 315px;
    gap: 10px;
    position: relative;
    top: 0px;
    transform: translate(0, 0);
  }
`;

const IntroTitle = styled.p`
  color: #fff;
  font-family: Atyp Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 200;
  line-height: 120%; /* 72px */
  text-transform: capitalize;
  @media (max-width: 1400px) {
    font-size: 60px;
  }
  @media (max-width: 750px) {
    font-size: 30px;
  }
`;

const Bold = styled.span`
  color: #fff;
  font-family: Atyp Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 72px */
  text-transform: capitalize;
  @media (max-width: 1040px) {
    font-size: 60px;
  }
  @media (max-width: 750px) {
    font-size: 30px;
  }
`;

const EcoWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 115px 10px;
  background: #fdeba8;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;
  @media (max-width: 750px) {
    padding: 78px 32px;
    position: relative;
    border-radius: 0;
  }
`;

const EcoContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: space-between;
  @media (max-width: 750px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Eco = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  max-width: 972px;
  @media (max-width: 750px) {
    gap: 15px;
  }
`;

const Title = styled.p`
  color: #ff7a00;
  text-align: center;
  font-family: Atyp Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 140.625%; /* 84.375px */
  @media (max-width: 750px) {
    font-size: 30px;
  }
`;

const Details = styled.p`
  color: #ff7a00;
  font-family: Gilroy-Medium;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 41.6px */
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  width: auto;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 750px) {
    position: absolute;
    right: 30px;
  }
`;

const Arrow = styled.img`
  // margin-left: 260px;
  @media (max-width: 750px) {
    margin-left: 0px;
    width: 33px;
  }
`;

const PurpleWrapper = styled.div`
  display: flex;
  background: #291346;
  width: 100%;
  padding-top: 208px;
  padding-bottom: 200px;
  justify-content: center;
  @media (max-width: 750px) {
    padding: 79px 30px 148px;
  }
`;

const PurpleContent = styled.div`
  display: flex;
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 750px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const TrueToDec = styled.p`
  color: #ff7a00;
  font-family: Atyp Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 41.6px */
  margin-bottom: 34px;
  @media (max-width: 750px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

const BuiltIn = styled.div`
  color: #fff;
  text-align: center;
  font-family: Atyp Display;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 111px;
  @media (max-width: 750px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

type Card = {
  title: string;
  details: string;
  imgUrl: string;
};

const WhiteSection = () => {
  const cards: Card[] = [
    {
      title: "Censorship Resistance",
      details:
        "Our trustless approach to transaction ordering remains true to decentralization values with powerful censorship resistance.",
      imgUrl: purple_new_1,
    },
    {
      title: "MEV Success",
      details:
        "While MEV resistance is valuable, sustaining rollup economics can be challenging. At Radius, we build with zero knowledge to find the perfect formula for MEV.",
      imgUrl: purple_new_2,
    },
    {
      title: "Fast Finality",
      details:
        "Fast pre-confirmations and proofs add an extra layer of assurance and transparency for users.",
      imgUrl: purple_new_3,
    },
    {
      title: "Interoperability",
      details:
        "With atomic composability in place, rollups can maximize resources and unlock exciting new possibilities.",
      imgUrl: purple_new_4,
    },
  ];

  return (
    <Container>
      <LabWrapper>
        {/* <Img loading="lazy" src={window.innerWidth > 740 ? lab : lab_mob} /> */}
        <VideoWrapper>
          <StyledVideo playsInline autoPlay muted loop preload="auto">
            <source src={newVid} />
          </StyledVideo>
        </VideoWrapper>
        <Content>
          <IntroWrapper>
            <IntroTitle>
              Empowering rollups <Bold>Beyond decentralization</Bold>
            </IntroTitle>
            {/* <IntroSub></IntroSub> */}
          </IntroWrapper>
        </Content>
      </LabWrapper>
      <EcoWrapper>
        <EcoContent>
          <Eco>
            <Title>Ecosystem</Title>
            <Details>
              We collaborate with builders and partners who share our
              decentralized vision to bring together the most promising ideas
              and forge a better path for Ethereum
            </Details>
          </Eco>
          <StyledLink to="/ecosystem">
            <Button>
              <Arrow src={arrow} alt="arrow_right" />
            </Button>
          </StyledLink>
        </EcoContent>
      </EcoWrapper>
      <PurpleWrapper>
        <PurpleContent>
          <TrueToDec>TRUE TO DECENTRALIZATION</TrueToDec>
          <BuiltIn>
            Built-in defensibility and trustless capabilities with{" "}
            <strong>zero knowledge</strong>
          </BuiltIn>
          <PurpleCards cards={cards} />
        </PurpleContent>
      </PurpleWrapper>
      <BeyondSection />
    </Container>
  );
};

export default WhiteSection;
