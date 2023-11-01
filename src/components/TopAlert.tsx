import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  height: 52px;
  background: #ff5c0;
`;

const Text = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:last-child {
    text-decoration: underline;
  }
`;

const TopAlert = () => {
  return (
    <Container>
      <Text>
        Our private testnet is live! Sign up to participate <span>here</span>.
      </Text>
    </Container>
  );
};

export default TopAlert;
