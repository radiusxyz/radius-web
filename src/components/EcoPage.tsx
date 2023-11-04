import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import entanglement from '../assets/images/entanglement.svg';

const IntroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IntroBackground = styled.img`
  width: 100%;
  height: auto;
`;

const IntroContent = styled.div`
  width: 100%;
  max-width: 1400px;
  position: absolute;
  top: calc(50%-20px);
`;

const IntroText = styled.div`
  max-width: 697px;
  display: flex;
  flex-direction: column;
`;

const IntroMiniTitle = styled.p`
  color: #ff7a00;
  font-family: Atyp Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  margin-bottom: 51px;
`;

const IntroTitle = styled.p`
  color: #000;
  font-family: Atyp Display;
  font-size: 82px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 98.4px */
  max-width: 568px;
  margin-bottom: 37px;
`;

const IntroDetails = styled.p`
  color: #585858;
  font-family: Gilroy-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
`;

const CardsSection = styled.div`
  width: 100%;
  background: #1b191f;
  padding: 250px 0 16px;
  display: flex;
  justify-content: center;
`;

const CardsSectionContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 19px 18px;
`;

const Card = styled.div`
  border-radius: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.83);
  background: #2d2d2d;
  width: 100%;
  max-width: 454px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  min-height: 276px;
`;

const LogoTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${logo});
  background-size: 60px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.span`
  color: #fff;
  font-family: Gilroy-Bold;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
`;

const CardDetails = styled.p`
  color: #fff;
  font-family: Gilroy-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%; /* 22.5px */
`;

const GradientSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #1b191f 0%, #302b38 100%);
`;

const GradientContent = styled.div`
  max-width: 1400px;
  width: 100%;
`;

const GradientText = styled.p`
  color: #fff;
  font-family: Atyp Display;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%; /* 112.5px */
  margin-top: 267px;
  margin-bottom: 31px;
`;

const GradientLink = styled.p`
  color: #ff7a00;
  font-family: Gilroy-Medium;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 44px */
  text-decoration-line: underline;
  margin-bottom: 332px;
`;

const cards = [
  {
    logo: logo,
    title: 'ALTLAYER',
    details:
      'AltLayer is an open and decentralized protocol for developers to launch highly elastic application-tailored rollups.',
  },
  {
    logo: logo,
    title: 'caldera',
    details:
      'Caldera specializes in building high-performance, customizable, and application-specific layer-two blockchains.',
  },
  {
    logo: logo,
    title: 'CELESTIA',
    details:
      'Celestia is a modular data availability network that securely scales with the number of users, making it easy for anyone to launch their own blockchain.',
  },
  {
    logo: logo,
    title: 'HERODOTUS',
    details:
      'Herodotus is a powerful data access middleware that provides smart contracts with synchronous access to both current and historical on-chain data across Ethereum layers.',
  },
  {
    logo: logo,
    title: 'LUMOZ',
    details:
      'Lumoz (Previously Opside) is a decentralized ZK-RaaS platform as well as a PoW network that facilitates ZKP mining.',
  },
  {
    logo: logo,
    title: 'MADARA',
    details:
      'Madara is standard, customizable and blazing fast Starknet sequencer. Madara delivers unmatched performance and scalability to power Starknet-based Validity Rollup chain.',
  },
  {
    logo: logo,
    title: 'Parama',
    details:
      'Pragma is a decentralized, transparent and composable oracle network, leveraging state-of-the-art zero-knowledge cryptography.',
  },
  {
    logo: logo,
    title: 'Rollkit',
    details:
      'Rollkit is a rollup framework that gives developers the freedom to deploy rollups throughout the modular stack.',
  },
  {
    logo: logo,
    title: 'SAGA',
    details:
      'Saga is a protocol for automatically provisioning application-specific blockchains.',
  },
  {
    logo: logo,
    title: 'Stacker',
    details:
      'Stackr is a modular SDK for building micro-rollups in general-purpose languages.',
  },
  {
    logo: logo,
    title: 'Vistara',
    details:
      'Vistara is a one-click rollup deployment framework for designing and managing scalable infrastructure.',
  },
];

const EcoPage = () => {
  return (
    <>
      <IntroSection>
        <IntroBackground src={entanglement} />
        <IntroContent>
          <IntroText>
            <IntroMiniTitle>OUR ECOSYSTEM</IntroMiniTitle>
            <IntroTitle>Meet builders and partners</IntroTitle>
            <IntroDetails>
              We're all about making rollups more decentralized, sustainable,
              and scalable. We collaborate with like-minded builders and
              infrastructure partners to drive our research and development
              efforts, working together to shape a decentralized future.
            </IntroDetails>
          </IntroText>
        </IntroContent>
      </IntroSection>
      <CardsSection>
        <CardsSectionContent>
          <Cards>
            {cards.map((card) => (
              <Card>
                <LogoTitle>
                  <Logo />
                  <CardTitle>{card.title}</CardTitle>
                </LogoTitle>
                <CardDetails>{card.details}</CardDetails>
              </Card>
            ))}
          </Cards>
        </CardsSectionContent>
      </CardsSection>
      <GradientSection>
        <GradientContent>
          <GradientText>
            Join Radius in decentralizing and future-proofing Ethereum
          </GradientText>
          <a href='https://twitter.com/radius_xyz'>
            <GradientLink>Talk to us</GradientLink>
          </a>
        </GradientContent>
      </GradientSection>
    </>
  );
};

export default EcoPage;
