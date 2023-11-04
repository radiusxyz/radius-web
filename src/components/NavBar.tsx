import radius from '../assets/images/radius.svg';
import radius_dark from '../assets/images/radius_dark.svg';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
const StyledLink = styled.a`
  text-decoration: none;
`;

const LocalNavBar = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: none;
  top: 92px;
  z-index: 10;
  margin-top: 9px;
`;

const StickyNavBar = styled.div`
  position: sticky;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(255, 122, 0, 0.25);
  top: 0px;
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

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let windowHeight = window.scrollY;
      console.log(windowHeight);
      if (windowHeight > 162) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Set up the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    (sticky && (
      <StickyNavBar>
        <Content>
          <img src={radius_dark} alt='radius' />
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
      </StickyNavBar>
    )) || (
      <LocalNavBar>
        <Content>
          <img src={radius} alt='radius' />
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
      </LocalNavBar>
    )
  );
};

export default NavBar;
