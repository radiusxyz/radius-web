import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;
  margin-top: 290px;
`;

const Header = styled.p`
  color: #291346;
  font-family: Atyp Display;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 96px */
  margin-bottom: 180px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const DummyImg = styled.div`
  width: 551px;
  height: 555px;
  border-radius: 8px;
  background: #7bff88;
`;

const TextWrapper = styled.div`
  max-width: 763px;
`;

const Title = styled.p`
  color: #ff7a00;
  font-family: Atyp Display;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 50.4px */
`;

const Details = styled.p`
  color: #404040;
  font-family: Gilroy-Regular;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 42px */
`;
const BeyondSection = () => {
  return (
    <MainContainer>
      <Header>
        How our design and system goes <strong>beyond decentralization</strong>
      </Header>
      <Row>
        <DummyImg />
        <TextWrapper>
          <Title>Creating sustainable rollup economics</Title>
          <Details>
            While MEV resistance is valuable, the challenge is finding ways to
            sustain rollup economics. Radius not only effectively prevents
            centralization pressures, security concerns, and economic
            inefficiencies but also makes
          </Details>
        </TextWrapper>
      </Row>
      <Row>
        <DummyImg />
        <TextWrapper>
          <Title>Connecting through a shared layer</Title>
          <Details>
            A shared layer is essential to atomic composability, ensuring
            consistent data exchange and value flow across different rollups.
            With atomic composability in place, rollups can optimize resources
            and unlock exciting new possibilities.
          </Details>
        </TextWrapper>
      </Row>
    </MainContainer>
  );
};

export default BeyondSection;
