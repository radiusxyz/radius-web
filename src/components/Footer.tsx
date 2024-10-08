import styled from "styled-components";
import radius_footer from "../assets/images/radius_footer.svg";
import x_footer from "../assets/images/x_footer.svg";
import radius_footer_150x37 from "../assets/images/radius_150x37.svg";
import discord from "../assets/images/discord.svg";
import medium from "../assets/images/medium.svg";
import github from "../assets/images/github.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #0e0e0e;
  padding: 117px 0px 103px;
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 56px 30px 110px;
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
    gap: 64px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  max-width: 831px;
  width: 100%;
  @media (max-width: 1100px) {
    margin-left: 40px;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 64px;
    margin-left: 0px;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const RowTitle = styled.span`
  color: rgba(199, 199, 199, 0.5);
  font-family: Gilroy-SemiBold;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */
`;

const CardRow = styled.div`
  display: flex;
  gap: 18px;
  @media (max-width: 750px) {
    flex-direction: column;
    border: none;
    border-top: 1px solid #2b2b2b;
    gap: 0px;
  }
`;

const Card = styled.div`
  max-width: 265px;
  display: flex;
  justify-content: center;
  align-items: center !important;
  width: 100%;
  padding: 39px 20px;
  border-radius: 4px;
  border: 1px solid #222;
  background: linear-gradient(180deg, #161616 0%, #0e0e0e 100%);
  gap: 19px;
  @media (max-width: 750px) {
    border: none;
    border-bottom: 1px solid #2b2b2b;
    border-radius: 0;
    max-width: none;
    justify-content: flex-start;
    padding: 20px 0px 19px;
    background: transparent;
  }
`;

const CardText = styled.span`
  color: #c7c7c7;
  font-family: Atyp Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  align-self: center;
  margin-top: 7px;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  width: 100%;
  max-width: 265px;
  @media (max-width: 750px) {
    max-width: none;
  }
`;

const StyledLinkLogo = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  width: auto;
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <StyledLinkLogo to="/">
          <img
            src={window.innerWidth > 750 ? radius_footer : radius_footer_150x37}
            alt="radius_footer"
          />
        </StyledLinkLogo>
        <Links>
          <RowWrapper>
            <RowTitle>Follow us</RowTitle>
            <CardRow>
              <StyledLink to="https://twitter.com/radius_xyz" target="_blank">
                <Card>
                  <img loading="lazy" src={x_footer} />
                  <CardText>Twitter</CardText>
                </Card>
              </StyledLink>
              <StyledLink
                to="https://discord.com/invite/wdS6k4wz9H"
                target="_blank"
              >
                <Card>
                  <img loading="lazy" src={discord} />{" "}
                  <CardText>Discord</CardText>
                </Card>
              </StyledLink>
              <StyledLink to="https://medium.com/@radius_xyz" target="_blank">
                <Card>
                  <img loading="lazy" src={medium} /> <CardText>Blog</CardText>
                </Card>
              </StyledLink>
            </CardRow>
          </RowWrapper>
          <RowWrapper>
            <RowTitle>Recources</RowTitle>
            <CardRow>
              <StyledLink to="https://docs.theradius.xyz/" target="_blank">
                <Card>
                  <img loading="lazy" src={x_footer} />
                  <CardText>Documentation</CardText>
                </Card>
              </StyledLink>
              <StyledLink to="https://github.com/radiusxyz" target="_blank">
                <Card>
                  <img loading="lazy" src={github} />
                  <CardText>Github</CardText>
                </Card>
              </StyledLink>
            </CardRow>
          </RowWrapper>
        </Links>
      </Content>
    </Container>
  );
};

export default Footer;
