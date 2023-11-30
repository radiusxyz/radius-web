import styled from 'styled-components';
import radius_footer from '../assets/images/radius_footer.svg';
import radius_footer_150x37 from '../assets/images/radius_150x37.svg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #0e0e0e;
  padding: 84px 0px;
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 60px 30px;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 40px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const StyledLinkLogo = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  width: auto;
`;

const Columns = styled.div`
  display: flex;
  gap: 180px;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 60px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Column = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.li`
  color: #777;
  font-family: Gilroy-Medium;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  letter-spacing: 0.8px;
  &:first-child {
    color: #b2b2b2;
    font-size: 18px;
    letter-spacing: 0px;
    margin-bottom: 2px;
  }
`;

const FooterV2 = () => {
  return (
    <Container>
      <Content>
        <StyledLinkLogo to='/'>
          <img
            src={window.innerWidth > 750 ? radius_footer : radius_footer_150x37}
            alt='radius_footer'
          />
        </StyledLinkLogo>
        <Columns>
          <Column>
            <Row>Follow us</Row>
            <Row>TWITTER</Row>
            <Row>DISCORD</Row>
            <Row>BLOG</Row>
          </Column>
          <Column>
            <Row>Recources</Row>
            <Row>Documentation</Row>
            <Row>Github</Row>
            <Row>Brand</Row>
          </Column>
        </Columns>
      </Content>
    </Container>
  );
};

export default FooterV2;
