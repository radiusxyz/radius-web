import styled from 'styled-components';
import lab from '../assets/images/lab.svg';
import arrow from '../assets/images/arrow.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 41px 30px 0px 30px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 24px;
`;

const EcoWrapper = styled.div`
  width: auto;
  padding: 115px 223px 115px 245px;
  background: #fdeba8;
  display: flex;
  justify-content: space-between;
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 208px 171px 0px 171px;
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
color: #FFF;
text-align: center;
font-family: Atyp Display;
font-size: 80px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 96px *
`;

const WhiteSection = () => {
  return (
    <Container>
      <Img src={lab} alt='lab' />
      <EcoWrapper>
        <Eco>
          <Title>Ecosystem</Title>
          <Details>
            Radius collaborates with builders and partners in research and
            development to bring together the most promising ideas and forge a
            better path for Ethereum’s decentralized future
          </Details>
        </Eco>
        <Arrow src={arrow} alt='arrow_right' />
      </EcoWrapper>
      <PurpleWrapper>
        <TrueToDec>TRUE TO DECENTRALIZATION</TrueToDec>
        <BuiltIn>
          Built-in defensibility and trustless capabilities with{' '}
          <strong>zero knowledge</strong>
        </BuiltIn>
      </PurpleWrapper>
    </Container>
  );
};

export default WhiteSection;
