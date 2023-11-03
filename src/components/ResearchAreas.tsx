import styled from 'styled-components';
const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #ffaf37;
`;
const Content = styled.div`
  max-width: 1400px;
  width: 100%;
`;
const Tags = styled.div`
  display: flex;
  gap: 20px;
`;
const Tag = styled.div`
  display: flex;
  padding: 21px 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 66px;
  background: rgba(255, 255, 255, 0.3);
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-family: Atyp Display;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 54.6px */
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
        <Tags>
          {tagTexts.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Text>
          Our research areas span across a wide range of topics including
          designs, methodologies, and technologies — the building blocks that
          contribute to the advancement of rollups
        </Text>
      </Content>
    </Container>
  );
};

export default ResearchAreas;
