import styled from 'styled-components';
import lab from '../assets/images/lab.svg';
import radius from '../assets/images/radius.svg';
import arrow from '../assets/images/arrow.svg';
import purple_card_1 from '../assets/images/purple_card_1.svg';
import purple_card_2 from '../assets/images/purple_card_2.svg';
import purple_card_3 from '../assets/images/purple_card_3.svg';
import purple_card_4 from '../assets/images/purple_card_4.svg';
import PurpleCards from './PurpleCards';
import BeyondSection from './BeyondSection';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 41px 30px 238px 30px;
  align-items: center;
`;

const LabWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  position: absolute;
  height: 100%;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 19px;
`;

const EcoDocGit = styled.div`
  display: flex;
  border-radius: 34px;
  max-width: 600px;
  width: 100%;
  height: 50px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

const EcoBtn = styled.button`
  color: #000;
  font-family: Gilroy-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  width: 100%;
  padding: 14px 35px 13px 91px;
  border-radius: 34px 0px 0px 34px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #ff5c02;
  }
`;
const DocBtn = styled.button`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gilroy-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  border: none;
  background: transparent;
  padding: 14px 35px 13px 35px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #ff5c02;
  }
`;
const GitBtn = styled.button`
  color: #000;
  font-family: Gilroy-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  background: transparent;
  padding: 14px 90px 13px 35px;
  border-radius: 0px 34px 34px 0px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #ff5c02;
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
`;
const IntroTitle = styled.p`
  color: #fff;
  font-family: Atyp Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 72px */
  text-transform: capitalize;
`;
const IntroSub = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: Atyp Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 136%; /* 32.64px */
`;
const EcoContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
`;

const EcoWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 115px 10px;
  background: #fdeba8;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;
`;
const Eco = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  max-width: 972px;
`;

const Title = styled.p`
  color: #ff7a00;
  text-align: center;
  font-family: Atyp Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%; /* 84.375px */
`;

const Details = styled.p`
  color: #ff7a00;
  font-family: Gilroy-Medium;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 41.6px */
`;

const Arrow = styled.img`
  margin-left: 260px;
`;

const PurpleWrapper = styled.div`
  display: flex;
  background: #291346;
  width: 100%;
  padding: 208px 10px;
  justify-content: center;
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
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

type Card = {
  topPadding: string;
  title: string;
  details: string;
  imgUrl: string;
};

const WhiteSection = () => {
  const cards: Card[] = [
    {
      topPadding: '36px',
      title: 'Censorship Resistance',
      details:
        'Our trustless approach to transaction ordering remains true to decentralization values with powerful censorship resistance.',
      imgUrl: purple_card_1,
    },
    {
      topPadding: '50px',
      title: 'MEV Success',
      details:
        'While MEV resistance is valuable, sustaining rollup economics can be challenging. At Radius, we build with zero knowledge to find the perfect formula for MEV.',
      imgUrl: purple_card_2,
    },
    {
      topPadding: '45px',
      title: 'Fast Finality',
      details:
        'Fast pre-confirmations and proofs add an extra layer of assurance and transparency for users.',
      imgUrl: purple_card_4,
    },
    {
      topPadding: '44px',
      title: 'Interoperability',
      details:
        'With atomic composability in place, rollups can maximize resources and unlock exciting new possibilities.',
      imgUrl: purple_card_3,
    },
  ];

  return (
    <Container>
      <LabWrapper>
        <Img src={lab} />
        <Content>
          <IntroWrapper>
            <IntroTitle>
              Empowering rollups <strong>Beyond decentralization</strong>
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
              Radius collaborates with builders and partners in research and
              development to bring together the most promising ideas and forge a
              better path for Ethereum’s decentralized future
            </Details>
          </Eco>
          <Arrow src={arrow} alt='arrow_right' />
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
