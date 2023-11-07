import styled from 'styled-components';
import BssCards from './BssCards';
import black_mosaic from '../assets/images/black_mosaic.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 221px 10px 222px 10px;
  background-image: url(${black_mosaic});
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 66px 30px 100px;
  }
`;

const Title = styled.p`
  color: #fff;
  text-align: center;
  font-family: Atyp Display;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 54.6px */
  margin-bottom: 77px;
  max-width: 1020px;
  @media (max-width: 750px) {
    margin-bottom: 61px;
    font-size: 24px;
  }
`;

const BuildSecureScale = () => {
  return (
    <Container>
      <Title>
        With our modular foundation, Radius takes rollups to new heights,
        empowering rollup businesses to scale and adapt to evolving needs
      </Title>
      <BssCards />
    </Container>
  );
};

export default BuildSecureScale;
