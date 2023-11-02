import styled from 'styled-components';
import BssCards from './BssCards';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 221px 10px 222px 10px;
  background: linear-gradient(
    180deg,
    #1b1b1b 40.68%,
    rgba(27, 27, 27, 0.74) 75.49%,
    #1b1b1b 100.59%
  );
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
