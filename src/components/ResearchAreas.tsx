import styled from 'styled-components';
import x from '../assets/images/x.svg';
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #ffaf37;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 237px 45px 161px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 750px) {
    padding: 130px 30px 122px;
  }
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-family: Atyp Display;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 54.6px */
  margin-bottom: 58px;
  @media (max-width: 750px) {
    font-size: 24px;
    margin-bottom: 75px;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 159px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    gap: 10px;
    margin-bottom: 75px;
  }
`;

const Tag = styled.div`
  display: flex;
  padding: 21px 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 66px;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  text-align: center;
  font-family: Gilroy-Medium;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  @media (max-width: 750px) {
    font-size: 12px;
    padding: 10px 20px;
  }
`;

const SubText = styled.div`
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  font-family: Atyp Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
  margin-top: 32px;
  @media (max-width: 750px) {
    margin-top: 18px;
    font-size: 18px;
    max-width: 270px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const tagTexts = [
  '# MEV',
  '# Zero Knowledge',
  '# Encrypted Mempool',
  '# Distributed Sequencer',
  '# Interoperability',
  '# Proposer Builder Separation',
  '# Atomic Composability',
];
const ResearchAreas = () => {
  return (
    <Container>
      <Content>
        <Text>
          Our research areas span across a wide range of topics including
          designs, methodologies, and technologies — the building blocks that
          contribute to the advancement of rollups
        </Text>
        <Tags>
          {tagTexts.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <StyledLink to='https://twitter.com/radius_xyz'>
          <img src={x} width='63px' alt='x' />
        </StyledLink>
        <SubText>
          Interested in collaboration? We want to hear from you!
        </SubText>
      </Content>
    </Container>
  );
};

export default ResearchAreas;
