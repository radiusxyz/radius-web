import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import entanglement from '../assets/images/entanglement.svg';
import entanglement_mob from '../assets/images/entanglement_mob.svg';
import altlayer from '../assets/images/altlayer.svg';
import caldera from '../assets/images/caldera.svg';
import celestia from '../assets/images/celestia.svg';
import herodotus from '../assets/images/herodotus.svg';
import lumoz from '../assets/images/lumoz.svg';
import madara from '../assets/images/madara.svg';
import pragma from '../assets/images/pragma.svg';
import rollkit from '../assets/images/rollkit.svg';
import saga from '../assets/images/saga.svg';
import stackr from '../assets/images/stackr.svg';
import vistara from '../assets/images/vistara.svg';
import nectar from '../assets/images/nectar.svg';
import dsrv from '../assets/images/dsrv.svg';
import gevulot from '../assets/images/gevulot.svg';
import karnot from '../assets/images/karnot.svg';
import marlin from '../assets/images/marlin.svg';
import risczero from '../assets/images/risczero.svg';
import snarkify from '../assets/images/snarkify.svg';

const IntroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 750px) {
    padding: 0px 30px 45px;
    height: 567px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const IntroBackground = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 750px) {
    object-fit: cover;
    height: 438px;
    position: absolute;
  }
`;

const IntroContent = styled.div`
  width: 100%;
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
  position: absolute;
  top: calc(50%-20px);
  @media (max-width: 750px) {
    position: relative;
    height: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const IntroText = styled.div`
  max-width: 697px;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    position: absolute;
    bottom: 0;
  }
`;

const IntroMiniTitle = styled.p`
  color: #ff7a00;
  font-family: Atyp Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  margin-bottom: 51px;
  @media (max-width: 980px) {
    font-size: 13px;
  }
  @media (max-width: 750px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
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
  @media (max-width: 980px) {
    font-size: 55px;
    max-width: 450px;
  }
  @media (max-width: 750px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const IntroDetails = styled.p`
  color: #585858;
  font-family: Gilroy-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
  @media (max-width: 980px) {
    font-size: 16px;
    max-width: 450px;
  }
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const CardsSection = styled.div`
  width: 100%;
  background: #1b191f;
  padding: 250px 0 16px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: center;
  @media (max-width: 750px) {
    padding: 50px 30px;
  }
`;

const CardsSectionContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: center;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 19px 18px;

  @media (max-width: 850px) {
    grid-wrap: wrap;
    gap: 10px;
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

const Card = styled.div`
  border-radius: 12px;
  border: 1px solid #444;
  background: #2d2d2d;
  width: 100%;
  max-width: 454px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  min-height: 276px;
  height: 100%;
  @media (max-width: 750px) {
    gap: 15.48px;
    min-height: 157px;
    padding: 20px;
  }
`;

const LogoTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  @media (max-width: 750px) {
    gap: 10px;
  }
`;

const Logo = styled.img`
  width: 100%;
  width: 60px;
  height: auto;
  @media (max-width: 750px) {
    width: 30px;
    height: auto;
  }
`;

const CardTitle = styled.span`
  color: #fff;
  font-family: Gilroy-Bold;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

const CardDetails = styled.p`
  color: #fff;
  font-family: Gilroy-Light;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: 140.625%; /* 22.5px */
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const GradientSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #1b191f 0%, #302b38 100%);
  @media (max-width: 750px) {
    padding: 78px 30px;
  }
`;

const GradientContent = styled.div`
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  @media (max-width: 750px) {
    padding-left: 0px;
    padding-right: 0px;
  }
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
  @media (max-width: 750px) {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 16px;
  }
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
  @media (max-width: 750px) {
    font-size: 14px;
    margin-bottom: 0;
  }
`;

const cards = [
  {
    url: 'https://altlayer.io/',
    logo: altlayer,
    title: 'Altlayer',
    details:
      'AltLayer is an open and decentralized protocol for developers to launch highly elastic application-tailored rollups.',
  },
  {
    url: 'https://caldera.xyz/',
    logo: caldera,
    title: 'Caldera',
    details:
      'Caldera specializes in building high-performance, customizable, and application-specific layer-two blockchains.',
  },
  {
    url: 'https://celestia.org/',
    logo: celestia,
    title: 'Celestia',
    details:
      'Celestia is a modular data availability network that securely scales with the number of users, making it easy for anyone to launch their own blockchain.',
  },
  {
    logo: herodotus,
    url: 'https://www.herodotus.dev/',
    title: 'Herodotus',
    details:
      'Herodotus is a powerful data access middleware that provides smart contracts with synchronous access to both current and historical on-chain data across Ethereum layers.',
  },
  {
    url: 'https://lumoz.org/',
    logo: lumoz,
    title: 'Lumoz',
    details:
      'Lumoz (Previously Opside) is a decentralized ZK-RaaS platform as well as a PoW network that facilitates ZKP mining.',
  },
  {
    url: 'https://www.madara.zone/',
    logo: madara,
    title: 'Madara',
    details:
      'Madara is standard, customizable and blazing fast Starknet sequencer. Madara delivers unmatched performance and scalability to power Starknet-based Validity Rollup chain.',
  },
  {
    url: 'https://www.pragmaoracle.com/',
    logo: pragma,
    title: 'Pragma',
    details:
      'Pragma is a decentralized, transparent and composable oracle network, leveraging state-of-the-art zero-knowledge cryptography.',
  },
  {
    url: 'https://rollkit.dev/',
    logo: rollkit,
    title: 'Rollkit',
    details:
      'Rollkit is a rollup framework that gives developers the freedom to deploy rollups throughout the modular stack.',
  },
  {
    url: 'https://www.saga.xyz/',
    logo: saga,
    title: 'Saga',
    details: 'Saga is a protocol for automatically provisioning application-specific blockchains.',
  },
  {
    url: 'https://www.stackrlabs.xyz/',
    logo: stackr,
    title: 'Stackr',
    details: 'Stackr is a modular SDK for building micro-rollups in general-purpose languages.',
  },
  {
    url: 'https://www.vistara.dev/',
    logo: vistara,
    title: 'Vistara',
    details: 'Vistara is a one-click rollup deployment framework for designing and managing scalable infrastructure.',
  },
  {
    url: 'https://www.nectarx.io/',
    logo: nectar,
    title: 'Nectar',
    details: 'Nectar is a safe and affordable on-chain trading for all by WASD3R.',
  },
  {
    title: 'DSRV',
    url: 'https://www.dsrvlabs.com/',
    logo: dsrv,
    details:
      'DSRV is an integrated blockchain solutions company with the mission of enriching the crypto ecosystem via stronger connectivity.',
  },
  {
    title: 'Gevulot',
    url: 'https://www.gevulot.com/',
    logo: gevulot,
    details: 'Gevulot is the internet scale compute network for zero-knowledge proof generation and verification.',
  },
  {
    title: 'Karnot',
    url: 'https://www.karnot.xyz/',
    logo: karnot,
    details:
      'Karnot is the leading RaaS provider for Madara, simplifying scalable ZK app chain deployment so you can focus on building your app.',
  },
  {
    url: 'https://www.marlin.org/',
    title: 'Marlin',
    logo: marlin,
    details:
      'Marlin is a verifiable computing protocol featuring TEE and ZK-based coprocessors to delegate complex workloads over a decentralized node network.',
  },
  {
    title: 'RISC Zero',
    logo: risczero,
    url: 'https://www.risczero.com/',
    details:
      'RISC Zero is creating the infrastructure and tooling necessary for developers around the globe to build software that leverages ZK technology.',
  },
  {
    url: 'https://snarkify.io/',
    logo: snarkify,
    title: 'Snarkify',
    details:
      'Snarkify is scaling ZK for the trustless future, building scalable systems and high performance libraries to accelerate ZK adoption.',
  },
];

const EcoPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <>
      <IntroSection>
        <IntroBackground src={windowWidth > 750 ? entanglement : entanglement_mob} />
        <IntroContent>
          <IntroText>
            <IntroMiniTitle>OUR ECOSYSTEM</IntroMiniTitle>
            <IntroTitle>Meet builders and partners</IntroTitle>
            <IntroDetails>
              We're all about making rollups decentralized, interoperable, and sustainable. We work with like-minded
              builders and infrastructure partners to collectively advance research and development, shaping a
              decentralized future together.
            </IntroDetails>
          </IntroText>
        </IntroContent>
      </IntroSection>
      <CardsSection>
        <CardsSectionContent>
          <Cards>
            {cards
              .sort((a, b) => (a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1))
              .map((card) => (
                <StyledLink key={card.title} to={card.url} target='_blank'>
                  <Card key={card.title}>
                    <LogoTitle>
                      <Logo src={card.logo} />
                      <CardTitle>{card.title}</CardTitle>
                    </LogoTitle>
                    <CardDetails>{card.details}</CardDetails>
                  </Card>
                </StyledLink>
              ))}
          </Cards>
        </CardsSectionContent>
      </CardsSection>
      <GradientSection>
        <GradientContent>
          <GradientText>Join Radius in decentralizing and future-proofing Ethereum</GradientText>
          <a href='https://twitter.com/radius_xyz' target='_blank'>
            <GradientLink>Talk to us</GradientLink>
          </a>
        </GradientContent>
      </GradientSection>
    </>
  );
};

export default EcoPage;
