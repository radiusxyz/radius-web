import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import entanglement from "../assets/images/entanglement.svg";
import entanglement_mob from "../assets/images/entanglement_mob.svg";
import linkarrow from "../assets/images/linkarrow.svg";
import altlayer from "../assets/images/altlayer.png";
import caldera from "../assets/images/caldera.png";
import herodotus from "../assets/images/herodotus.png";
import lumoz from "../assets/images/lumoz.png";
import madara from "../assets/images/madara.png";
import pragma from "../assets/images/pragma.png";
import rollkit from "../assets/images/rollkit.png";
import saga from "../assets/images/saga.png";
import stackr from "../assets/images/stackr.png";
import vistara from "../assets/images/vistara.png";
import dsrv from "../assets/images/dsrv.png";
import karnot from "../assets/images/karnot.png";
import marlin from "../assets/images/marlin.png";
import risczero from "../assets/images/risczero.png";
import snarkify from "../assets/images/snarkify.png";
import celestia from "../assets/images/celestia.png";
import gevulot from "../assets/images/gevulot.png";
import vessel from "../assets/images/vessel.png";
import swell from "../assets/images/swell.png";
import starknet from "../assets/images/starknet.png";
import zkcross from "../assets/images/zkcross.png";
import aligned from "../assets/images/aligned.png";
import avail from "../assets/images/avail.png";
import nuffle from "../assets/images/nuffle.png";
import witnesschain from "../assets/images/witnesschain.png";
import symbiotic from "../assets/images/symbiotic.png";
import eigenlayer from "../assets/images/eigenlayer.png";

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
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 19px 18px;

  @media (max-width: 1106px) {
    grid-template-columns: repeat(2, 1fr);
    flex-direction: column;
    gap: 12px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    flex-direction: column;
    gap: 4px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
`;

const TextIconLink = styled.span`
  position: absolute;
  left: 50%;
  width: auto;
  bottom: 20px;
  display: flex;
  gap: 4px;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  ${StyledLink}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const LinkText = styled.span`
  color: #fff;
  font-family: Gilroy-Medium;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

const Card = styled.div`
  position: relative;
  border-radius: 12px;
  border: 2px rgba(229, 227, 232, 0.12);
  background: #34303b;
  width: 100%;
  max-width: 454px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 276px;
  &:hover {
    background: #5e5772;
  }
  @media (max-width: 1106px) {
    height: 252px;
    padding: 0 60px;
  }
  @media (max-width: 768px) {
    padding: 8px 36px 0px 36px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  gap: 6px;
  width: auto;
`;

const Tag = styled.div`
  display: flex;
  padding: 8px 16px 6px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: #1b191f;
  color: #fff;
  text-align: center;
  font-family: Gilroy-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const Logo = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  @media (max-width: 1106px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: auto;
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
    title: "Vessel",
    types: ["RaaS"],
    url: "https://vessel.finance/",
    logo: vessel,
  },
  {
    title: "Swell",
    types: ["Rollup", "LRT"],
    url: "https://www.swellnetwork.io/",
    logo: swell,
  },
  {
    title: "Starknet",
    types: ["Rollup"],
    url: "https://www.starknet.io/",
    logo: starknet,
  },
  {
    title: "AltLayer",
    types: ["RaaS"],
    url: "https://altlayer.io/",
    logo: altlayer,
  },
  {
    title: "Caldera",
    types: ["RaaS"],
    url: "https://caldera.xyz/",
    logo: caldera,
  },
  {
    title: "Lumoz",
    types: ["RaaS"],
    url: "https://lumoz.org/",
    logo: lumoz,
  },
  {
    title: "Karnot",
    types: ["RaaS"],
    url: "https://www.karnot.xyz/",
    logo: karnot,
  },
  {
    title: "Vistara",
    types: ["RaaS"],
    url: "https://www.vistara.dev/",
    logo: vistara,
  },
  {
    title: "Madara",
    types: ["Framework"],
    url: "https://www.madara.zone/",
    logo: madara,
  },
  {
    title: "Rollkit",
    types: ["Framework"],
    url: "https://rollkit.dev/",
    logo: rollkit,
  },
  {
    title: "Celestia",
    types: ["DA"],
    url: "https://celestia.org/",
    logo: celestia,
  },
  {
    title: "Saga",
    types: ["Framework"],
    url: "https://www.saga.xyz/",
    logo: saga,
  },
  {
    title: "Stackr",
    types: ["Framework"],
    url: "https://www.stackrlabs.xyz/",
    logo: stackr,
  },
  {
    title: "ZKCross",
    types: ["Framework"],
    url: "https://www.zkcross.org/",
    logo: zkcross,
  },
  {
    title: "RISC Zero",
    types: ["Prover"],
    url: "https://www.risczero.com/",
    logo: risczero,
  },
  {
    title: "Snarkify",
    types: ["Prover"],
    url: "https://snarkify.io/",
    logo: snarkify,
  },
  {
    title: "Marlin",
    types: ["Prover", "Operator"],
    url: "https://www.marlin.org/",
    logo: marlin,
  },
  {
    title: "Herodotus",
    types: ["Storage Proof"],
    url: "https://www.herodotus.dev/",
    logo: herodotus,
  },
  {
    title: "Aligned",
    types: ["DA", "Proof Verification"],
    url: "https://alignedlayer.com/",
    logo: aligned,
  },
  {
    title: "Avail",
    types: ["DA", "Proof Aggregation"],
    url: "https://www.availproject.org/",
    logo: avail,
  },
  {
    title: "Nuffle",
    types: ["Fast Finality", "AVS"],
    url: "https://nuff.tech/",
    logo: nuffle,
  },
  {
    title: "Witness Chain",
    types: ["Watchtower", "AVS"],
    url: "https://www.witnesschain.com/",
    logo: witnesschain,
  },
  {
    title: "Pragma",
    types: ["Oracle"],
    url: "https://www.pragmaoracle.com/",
    logo: pragma,
  },
  {
    title: "Symbiotic",
    types: ["Restaking"],
    url: "https://symbiotic.fi/",
    logo: symbiotic,
  },
  {
    title: "Gevulot",
    types: ["Prover"],
    url: "https://www.gevulot.com/",
    logo: gevulot,
  },
  {
    title: "Eigenlayer",
    types: ["Restaking"],
    logo: eigenlayer,
    url: "https://www.eigenlayer.xyz/",
  },
  {
    title: "DSRV",
    types: ["Operator"],
    url: "https://www.dsrvlabs.com/",
    logo: dsrv,
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
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <>
      <IntroSection>
        <IntroBackground
          src={windowWidth > 750 ? entanglement : entanglement_mob}
        />
        <IntroContent>
          <IntroText>
            <IntroMiniTitle>OUR ECOSYSTEM</IntroMiniTitle>
            <IntroTitle>Meet builders and partners</IntroTitle>
            <IntroDetails>
              We're all about making rollups decentralized, interoperable, and
              sustainable. We work with like-minded builders and infrastructure
              partners to collectively advance research and development, shaping
              a decentralized future together.
            </IntroDetails>
          </IntroText>
        </IntroContent>
      </IntroSection>
      <CardsSection>
        <CardsSectionContent>
          <Cards>
            {cards
              .sort((a, b) =>
                a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1
              )
              .map((card) => (
                <StyledLink key={card.title} to={card.url} target="_blank">
                  <Card key={card.title}>
                    <TagsContainer>
                      {card.types.map((type: string, index: number) => (
                        <Tag key={`type_${index}`}>{type}</Tag>
                      ))}
                    </TagsContainer>
                    <Logo src={card.logo} />
                    <TextIconLink
                      key={card.title}
                      to={card.url}
                      target="_blank"
                    >
                      <LinkText>Visit Website</LinkText>
                      <img src={linkarrow} />
                    </TextIconLink>
                  </Card>
                </StyledLink>
              ))}
          </Cards>
        </CardsSectionContent>
      </CardsSection>
      <GradientSection>
        <GradientContent>
          <GradientText>
            Join Radius in decentralizing and future-proofing Ethereum
          </GradientText>
          <a href="https://twitter.com/radius_xyz" target="_blank">
            <GradientLink>Talk to us</GradientLink>
          </a>
        </GradientContent>
      </GradientSection>
    </>
  );
};

export default EcoPage;
