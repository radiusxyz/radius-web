import styled from 'styled-components';
import orange_mosaic from '../assets/images/orange_mosaic.svg';
import { Link } from 'react-router-dom';

const Background = styled.div`
  background-image: url(${orange_mosaic});
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 330px 0;
  @media (max-width: 750px) {
    padding: 62px 30px;
    background-size: contain;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  @media (max-width: 750px) {
    gap: 9px;
  }
`;

const Title = styled.p`
  max-width: 1400px;
  color: #fff;
  font-family: Atyp Display;
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 130px */
  @media (max-width: 750px) {
    font-size: 30px;
  }
`;

const BuildBtn = styled.button`
  display: inline-flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #ff7a00;
  text-align: center;
  font-family: Gilroy-SemiBold;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 28.8px */
  max-width: 300px;
  border-radius: 81px;
  background: #fff;
  border: none;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #ff9a00;
    outline: 1px solid #fff;
  }
  @media (max-width: 750px) {
    font-size: 12px;
    padding: 10px;
    max-width: 240px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const OrangeSection = () => {
  return (
    <Background>
      <Wrapper>
        <Title>
          Laying the foundation for a <strong>sustainable future</strong> for
          rollups
        </Title>
        <StyledLink to='https://docs.theradius.xyz/'>
          <BuildBtn>BUILD WITH RADIUS</BuildBtn>
        </StyledLink>
      </Wrapper>
    </Background>
  );
};

export default OrangeSection;
