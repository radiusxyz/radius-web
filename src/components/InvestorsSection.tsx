import styled from 'styled-components';
import hashed from '../assets/images/hashed.svg';
import lambda from '../assets/images/lambda.svg';
import cryptocom from '../assets/images/cryptocom.svg';
import superscrypt from '../assets/images/superscrypt.svg';
import grad_left from '../assets/images/grad_left.svg';
import grad_right from '../assets/images/grad_right.svg';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 180px 10px;
  background: #000;
  justify-content: center;
  @media (max-width: 1400px) {
    padding: 94px 10px;
  }
  @media (max-width: 750px) {
    padding: 72px 60px 55px;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
  gap: 98px;
  align-items: center;
  width: 100%;
  @media (max-width: 1400px) {
    font-size: 60px;
    gap: 59px;
    flex-direction: column;
  }
  @media (max-width: 750px) {
    font-size: 24px;
    gap: 26px;
    flex-direction: column;
  }
`;

const Title = styled.p`
  color: #fff;
  font-family: Atyp Display;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 78px */
  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

const Logos = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
  @media (max-width: 1640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 750px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  width: auto;
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
  // type Investors = { url: string; img: string }[];
  // const investorData: Investors = [
  //   { url: 'https://www.hashed.com/', img: hashed },
  //   { url: 'https://lambdaclass.com/', img: lambda },
  //   { url: 'https://www.superscrypt.xyz/', img: superscrypt },
  //   { url: 'https://crypto.com/capital', img: cryptocom },
  // ];

  return (
    <MainContainer>
      <Content>
        <Title>Investors</Title>
        <Logos>
          {window.innerWidth > 750 && (
            <LeftGrad>
              <img src={grad_left} />
            </LeftGrad>
          )}{' '}
          <StyledLink to='https://www.hashed.com/' target='_blank'>
            <img
              src={hashed}
              width={(window.innerWidth < 750 && '126px') || 'auto'}
            />
          </StyledLink>
          <StyledLink to='https://lambdaclass.com/' target='_blank'>
            <img
              src={lambda}
              width={(window.innerWidth < 750 && '126px') || 'auto'}
            />
          </StyledLink>
          <StyledLink to='https://www.superscrypt.xyz/' target='_blank'>
            <img
              src={superscrypt}
              width={(window.innerWidth < 750 && '126px') || 'auto'}
            />
          </StyledLink>
          <StyledLink to='https://crypto.com/capital' target='_blank'>
            <img
              src={cryptocom}
              width={(window.innerWidth < 750 && '126px') || 'auto'}
            />{' '}
          </StyledLink>
          {window.innerWidth > 750 && (
            <RightGrad>
              <img src={grad_right} />
            </RightGrad>
          )}
        </Logos>
      </Content>
    </MainContainer>
  );
};

export default InvestorsSection;
