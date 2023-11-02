import styled from 'styled-components';
import hashed from '../assets/images/hashed.svg';
import lambda from '../assets/images/lambda.svg';
import superscrypt from '../assets/images/superscrypt.svg';
import grad_left from '../assets/images/grad_left.svg';
import grad_right from '../assets/images/grad_right.svg';

import empty from '../assets/images/empty.svg';

const MainContainer = styled.div`
  display: flex;
  gap: 98px;
  align-items: center;
  width: 100%;
  padding: 180px 10px;
  background: #000;
  justify-content: center;
`;

const Title = styled.p`
  color: #fff;
  font-family: Atyp Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 78px */
`;

const Logos = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`;

const LeftGrad = styled.div`
  position: absolute;
  background: transparent;
  left: -36px;
`;

const RightGrad = styled.div`
  position: absolute;
  background: transparent;
  right: -36px;
`;

const InvestorsSection = () => {
  return (
    <MainContainer>
      <Title>Investors</Title>
      <Logos>
        <LeftGrad>
          <img src={grad_left} />
        </LeftGrad>
        <img src={hashed} />
        <img src={lambda} />
        <img src={superscrypt} />
        <img src={empty} />
        <RightGrad>
          <img src={grad_right} />
        </RightGrad>
      </Logos>
    </MainContainer>
  );
};

export default InvestorsSection;
