import BuildSecureScale from './components/BuildSecureScale';
import Footer from './components/Footer';
import InvestorsSection from './components/InvestorsSection';
import OrangeSection from './components/OrangeSection';
import ResearchAreas from './components/ResearchAreas';
import TopAlert from './components/TopAlert';
import WhiteSection from './components/WhiteSection';
import radius from './assets/images/radius.svg';
import './index.css';
import radius_dark from './assets/images/radius_dark.svg';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

const NavBar = styled.div<{ sticky: boolean }>`
  position: absolute;
  width: 100%;
  height: 70px;
  display: flex;
  background:${(props) => (props.sticky && '#fff') || 'transparent'}
  align-items: center;
  justify-content: center;
  // background: #fff;
  box-shadow:${(props) =>
    props.sticky && '0px 4px 36px 0px rgba(255, 122, 0, 0.25))'};
  top: 92px;
  z-index: 10;
  margin-top: 9px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
`;

const EcoDocGit = styled.div`
  display: flex;
  border-radius: 34px;
  max-width: 600px;
  width: 100%;
  height: 50px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

const EcoBtn = styled.button`
  color: #000;
  font-family: Gilroy-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  width: 100%;
  padding: 14px 35px 13px 91px;
  border-radius: 34px 0px 0px 34px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #ff5c02;
  }
`;

const DocBtn = styled.button`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gilroy-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  border: none;
  background: transparent;
  padding: 14px 35px 13px 35px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #ff5c02;
  }
`;

const GitBtn = styled.button`
  color: #000;
  font-family: Gilroy-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  background: transparent;
  padding: 14px 90px 13px 35px;
  border-radius: 0px 34px 34px 0px;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #ff5c02;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

function App() {
  const [gnb, setGnb] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(windowHeight);
      windowHeight > 162 ? setGnb(true) : setGnb(false);
    }
  };

  return (
    <>
      <NavBar sticky={gnb}>
        <Content>
          <img src={gnb ? radius_dark : radius} alt='radius' />
          <EcoDocGit>
            <EcoBtn>Ecosystem</EcoBtn>
            <StyledLink href='https://docs.theradius.xyz/overview/introduction-to-radius'>
              <DocBtn>Documentation</DocBtn>
            </StyledLink>
            <StyledLink href='https://github.com/radiusxyz'>
              <GitBtn>Github</GitBtn>
            </StyledLink>
          </EcoDocGit>
        </Content>
      </NavBar>
      <TopAlert />
      <WhiteSection />
      <BuildSecureScale />
      <ResearchAreas />
      <InvestorsSection />
      <OrangeSection />
      <Footer />
    </>
  );
}

export default App;
