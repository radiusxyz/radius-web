import styled from 'styled-components';
import bss_icon from '../assets/images/bss_icon.svg';

const CardsContainer = styled.div`
  display: flex;
  gap: 18px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 378px;
  max-height: 380px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1.5px solid #2b2b2b;
  background: #111;
  padding: 62px 36px 55px 36px;
  align-items: center;
`;

const Img = styled.img`
  width: 92px;
  margin-bottom: 58px;
`;

const CardTitle = styled.p`
  color: #fff;
  font-family: Gilroy-Bold;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
  margin-bottom: 10px;
`;

const CardDetails = styled.p`
  color: #949494;
  text-align: center;
  font-family: Atyp Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
`;

const BssCards = () => {
  return (
    <CardsContainer>
      <Card>
        <Img src={bss_icon} alt={bss_icon} />
        <CardTitle>BUILD</CardTitle>
        <CardDetails>
          Building Radius at any point in rollup deployment into a new or
          existing design
        </CardDetails>
      </Card>
      <Card>
        <Img src={bss_icon} alt={bss_icon} />
        <CardTitle>SECURE</CardTitle>
        <CardDetails>
          Our distributed sequencer network guarantees liveness and keeps the
          rollups active and secure
        </CardDetails>
      </Card>
      <Card>
        <Img src={bss_icon} alt={bss_icon} />
        <CardTitle>SCALE</CardTitle>
        <CardDetails>
          With these systems in place, rollups can better scale to meet growing
          demands
        </CardDetails>
      </Card>
    </CardsContainer>
  );
};

export default BssCards;