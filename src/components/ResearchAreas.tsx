import styled from 'styled-components';
import x from '../assets/images/x.svg';
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
`;

const Tags = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 159px;
  justify-content: center;
  flex-wrap: wrap;
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
  font-family: Gilroy-SemiBold;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
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
`;

const tagTexts = [
  '# MEV',
  '# Zero Knowledge',
  '# Encrypted Mempool',
  '# Distributed Sequencer',
  '# Interperability',
  '# Proposer Builder Separation',
  '# Atomic Conposability',
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
        <img src={x} width='63px' alt='x' />
        <SubText>
          Interested in collaboration? We'd love to hear from you!
        </SubText>
      </Content>
    </Container>
  );
};

export default ResearchAreas;
