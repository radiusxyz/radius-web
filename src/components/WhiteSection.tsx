import styled from 'styled-components';
import lab from '../assets/images/lab.svg';
import lab_mob from '../assets/images/lab_mob.svg';
import arrow from '../assets/images/arrow.svg';
import purple_card_1 from '../assets/images/purple_card_1.svg';
import purple_card_2 from '../assets/images/purple_card_2.svg';
import purple_card_3 from '../assets/images/purple_card_3.svg';
import purple_card_4 from '../assets/images/purple_card_4.svg';
import PurpleCards from './PurpleCards';
import BeyondSection from './BeyondSection';
import myvid from '../assets/images/video.mp4';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 41px 30px 238px 30px;
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
  width: 100%;
  @media (max-width: 750px) {
    height: 100%;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 20px;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
  @media (max-width: 750px) {
    object-fit: cover;
    object-position: 30% center;
    position absolute;
    height: 100%;
    border-radius: 0px;

  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 750px) {
    object-fit: cover;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
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
  @media (max-width: 750px) {
    font-size: 30px;
  }
`;

const IntroSub = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: Atyp Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 200;
  line-height: 136%; /* 32.64px */
  @media (max-width: 750px) {
    font-size: 14px;
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
  max-width: 1400px;
  justify-content: space-between;
`;

const Eco = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
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

const Arrow = styled.img`
  margin-left: 260px;
  @media (max-width: 750px) {
    margin-left: 0px;
    width: 33px;
    position: absolute;
    right: 30px;
  }
`;

const PurpleWrapper = styled.div`
  display: flex;
  background: #291346;
  width: 100%;
  padding: 208px 10px;
  justify-content: center;
  @media (max-width: 750px) {
    padding: 79px 30px 148px;
  }
`;

const PurpleContent = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  width: auto;
`;

type Card = {
  toppadding: string;
  title: string;
  details: string;
  imgUrl: string;
};

const WhiteSection = () => {
  const cards: Card[] = [
    {
      toppadding: '36px',
      title: 'Censorship Resistance',
      details:
        'Our trustless approach to transaction ordering remains true to decentralization values with powerful censorship resistance.',
      imgUrl: purple_card_1,
    },
    {
      toppadding: '50px',
      title: 'MEV Success',
      details:
        'While MEV resistance is valuable, sustaining rollup economics can be challenging. At Radius, we build with zero knowledge to find the perfect formula for MEV.',
      imgUrl: purple_card_2,
    },
    {
      toppadding: '45px',
      title: 'Fast Finality',
      details:
        'Fast pre-confirmations and proofs add an extra layer of assurance and transparency for users.',
      imgUrl: purple_card_4,
    },
    {
      toppadding: '44px',
      title: 'Interoperability',
      details:
        'With atomic composability in place, rollups can maximize resources and unlock exciting new possibilities.',
      imgUrl: purple_card_3,
    },
  ];

  return (
    <Container>
      <LabWrapper>
        {/* <Img src={window.innerWidth > 740 ? lab : lab_mob} /> */}
        <VideoWrapper>
          <StyledVideo playsInline autoPlay muted loop>
            <source src={myvid} />
          </StyledVideo>
        </VideoWrapper>
        <Content>
          <IntroWrapper>
            <IntroTitle>
              Empowering rollups <Bold>Beyond decentralization</Bold>
            </IntroTitle>
            <IntroSub>
              A way to build, connect, and scale rollups with one decentralized
              shared sequencing layer
            </IntroSub>
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
          <StyledLink to='/ecosystem'>
            <Arrow src={arrow} alt='arrow_right' />
          </StyledLink>
        </EcoContent>
      </EcoWrapper>
      <PurpleWrapper>
        <PurpleContent>
          <TrueToDec>TRUE TO DECENTRALIZATION</TrueToDec>
          <BuiltIn>
            Built-in defensibility and trustless capabilities with{' '}
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
