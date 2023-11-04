import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const Card = styled.div`
  border-radius: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.83);
  background: #2d2d2d;
  width: 100%;
  max-width: 454px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 59px;
  min-height: 276px;
`;

const LogoTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${logo});
  background-size: 60px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  color: #fff;
  font-family: Gilroy-Bold;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
`;

const Details = styled.p`
  color: #fff;
  font-family: Gilroy-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%; /* 22.5px */
`;

const EcoPage = () => {
  return (
    <Card>
      <LogoTitle>
        <Logo />
        <Title>ALTLAYER</Title>
      </LogoTitle>
      <Details>
        AltLayer is an open and decentralized protocol for developers to launch
        highly elastic application-tailored rollups.
      </Details>
    </Card>
  );
};

export default EcoPage;
