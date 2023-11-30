import styled from 'styled-components';
import creating_new_new from '../assets/images/creating_new_new.svg';
import connecting_new_new from '../assets/images/connecting_new_new.svg';
import { useEffect, useState } from 'react';

const MainContainer = styled.div`
  display: flex;
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  margin-top: 290px;
  flex-direction: column;
  align-items: center;
  gap: 180px;
  @media (max-width: 750px) {
    margin-top: 0px;
    padding: 68px 30px 84px;
    gap: 24px;
  }
`;

const HeaderWrapper = styled.div`
  @media (max-width: 750px) {
    font-size: 24px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const Header = styled.p`
  color: #291346;
  font-family: Atyp Display;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 96px */
  @media (max-width: 750px) {
    font-size: 24px;
    width: auto;
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 124px;
  @media (max-width: 930px) {
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 121px;
  @media (max-width: 930px) {
    justify-content: center;
  }
  @media (max-width: 750px) {
    gap: 62px;
  }
`;

const DummyImg = styled.img`
  width: 501px;
  height: auto;
  @media (max-width: 930px) {
    height: auto;
  }
  @media (max-width: 750px) {
    width: 315px;
    height: 349px;
  }
`;

const TextWrapper = styled.div`
  max-width: 763px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 750px) {
    gap: 10px;
  }
`;

const Title = styled.p`
  color: #ff7a00;
  font-family: Atyp Display;
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 50.4px */
  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

const Details = styled.p`
  color: #404040;
  font-family: Gilroy-Regular;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 42px */
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;
const BeyondSection = () => {
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
    <MainContainer>
      <HeaderWrapper>
        <Header>
          How our design and system go <strong>beyond decentralization</strong>
        </Header>
      </HeaderWrapper>
      <Body>
        <Row>
          <DummyImg src={creating_new_new} />
          <TextWrapper>
            <Title>Creating sustainable rollup economics</Title>
            <Details>
              Encrypted mempool and zero knowledge are the backbones for
              protection. We redesign rollup economics and create a system where
              everyone’s interests align.
            </Details>
          </TextWrapper>
        </Row>
        {windowWidth > 750 && !(windowWidth < 930) ? (
          <Row>
            <TextWrapper>
              <Title>Connecting through a shared layer</Title>
              <Details>
                In the age of countless rollups, a shared layer is essential for
                atomic composability. That’s why we’re creating a superhighway
                optimized for interoperability and efficient data exchange.
              </Details>
            </TextWrapper>
            <DummyImg src={connecting_new_new} />
          </Row>
        ) : (
          <Row>
            <DummyImg src={connecting_new_new} />
            <TextWrapper>
              <Title>Connecting through a shared layer</Title>
              <Details>
                In the age of countless rollups, a shared layer is essential for
                atomic composability. That’s why we’re creating a superhighway
                optimized for interoperability and efficient data exchange.
              </Details>
            </TextWrapper>
          </Row>
        )}
      </Body>
    </MainContainer>
  );
};

export default BeyondSection;
