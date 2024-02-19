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

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
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
          <img src={window.innerWidth > 750 ? radius_footer : radius_footer_150x37} alt='radius_footer' />
        </StyledLinkLogo>
        <Columns>
          <Column>
            <Row>Follow us</Row>
            <Row>
              <StyledLink to='https://twitter.com/radius_xyz' target='_blank'>
                Twitter
              </StyledLink>
            </Row>
            <Row>
              <StyledLink to='https://discord.com/invite/wdS6k4wz9H' target='_blank'>
                Discord
              </StyledLink>
            </Row>
            <Row>
              <StyledLink to='https://mirror.xyz/0x957084A1F20AB33cfA0cE07ed57F50c05954999C' target='_blank'>
                Blog
              </StyledLink>
            </Row>
          </Column>
          <Column>
            <Row>Resources</Row>
            <Row>
              <StyledLink to='https://docs.theradius.xyz/' target='_blank'>
                Documentation
              </StyledLink>
            </Row>
            <Row>
              <StyledLink to='https://github.com/radiusxyz' target='_blank'>
                Github
              </StyledLink>
            </Row>
            <Row>
              <StyledLink to='https://sincere-overlays-393830.framer.app' target='_blank'>
                Brand
              </StyledLink>
            </Row>
          </Column>
        </Columns>
      </Content>
    </Container>
  );
};

export default FooterV2;
