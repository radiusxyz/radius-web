import styled from 'styled-components';
import radius_footer from '../assets/images/radius_footer.svg';
import x_footer from '../assets/images/x_footer.svg';
import discord from '../assets/images/discord.svg';
import medium from '../assets/images/medium.svg';
import github from '../assets/images/github.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #0e0e0e;
  padding: 117px 0px 103px;
`;

const Content = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  max-width: 831px;
  width: 100%;
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
`;

const Card = styled.div`
  max-width: 265px;
  display: flex;
  justify-content: center;
  align-items: center !important;
  width: 100%;
  padding: 39px 0;
  border-radius: 4px;
  border: 1px solid #222;
  background: linear-gradient(180deg, #161616 0%, #0e0e0e 100%);
  gap: 19px;
`;

// const CardContent = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 19px;
// `;

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

const Footer = () => {
  return (
    <Container>
      <Content>
        <img src={radius_footer} alt='radius_footer' />
        <Links>
          <RowWrapper>
            <RowTitle>Follow us</RowTitle>
            <CardRow>
              <Card>
                <img src={x_footer} />
                <CardText>Twitter</CardText>
              </Card>
              <Card>
                <img src={discord} /> <CardText>DISCORD</CardText>
              </Card>
              <Card>
                {' '}
                <img src={medium} /> <CardText>BLOG</CardText>
              </Card>
            </CardRow>
          </RowWrapper>
          <RowWrapper>
            <RowTitle>Recources</RowTitle>
            <CardRow>
              <Card>
                {' '}
                <img src={x_footer} />
                <CardText>Documentation</CardText>
              </Card>
              <Card>
                {' '}
                <img src={github} /> <CardText>Github</CardText>
              </Card>
            </CardRow>
          </RowWrapper>
        </Links>
      </Content>
    </Container>
  );
};

export default Footer;
