import styled from 'styled-components';
import lab from '../assets/images/lab.svg';

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

const Ecosystem = styled.div`
  width: 100%;
  padding: 115px 223px;
  background: #fdeba8;
  font-weight: 300;
`;

const Title = styled.div`
  color: #ff7a00;
  text-align: center;
  //   font-family: Atyp Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 300;
  font-family: Gilroy;
  line-height: 140.625%;
`;
const WhiteSection = () => {
  return (
    <Container>
      <Img src={lab} alt='lab' />
      <Ecosystem>
        <Title>Ecosystem</Title>
      </Ecosystem>
    </Container>
  );
};

export default WhiteSection;
