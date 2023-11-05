import { Link } from 'react-router-dom';
import radius from '../assets/images/radius.svg';
import radius_dark from '../assets/images/radius_dark.svg';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const StyledLink = styled.a`
  text-decoration: none;
`;

const CustomNavBar = styled.div<{ sticky: boolean }>`
  position: ${({ sticky }) => (sticky ? 'sticky' : 'absolute')};
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ sticky }) => (sticky ? '#fff' : 'transparent')};
  box-shadow: ${({ sticky }) =>
    sticky ? '0px 4px 36px 0px rgba(255, 122, 0, 0.25)' : 'none'};
  top: ${({ sticky }) => (sticky ? '0px' : '92px')};
  z-index: 10;
  margin-top: ${({ sticky }) => (sticky ? '0px' : '9px')};
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
  const location = useLocation();
  // const match = useMatch('/ecosystem'); // Replace '/your/path/*' with your actual path pattern

  // If you want just the path name
  console.log(location.pathname);

  // If you need to match a path pattern and extract params (with useMatch)
  // if (match) {
  //   console.log(match.pathname); // This will give you the matched part of the URL
  //   console.log(match.params); // This will give you the matched parameters
  // }

  useEffect(() => {
    const handleScroll = () => {
      let windowHeight = window.scrollY;
      if (windowHeight > 162) {
        setSticky(true);
      } else {
        if (location.pathname !== '/ecosystem') {
          setSticky(false);
        }
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
    <CustomNavBar sticky={sticky}>
      <Content>
        <img src={sticky ? radius_dark : radius} alt='radius' />
        <EcoDocGit>
          <Link to='/ecosystem' onClick={() => setSticky(true)}>
            <EcoBtn>Ecosystem</EcoBtn>
          </Link>
          <StyledLink href='https://docs.theradius.xyz/overview/introduction-to-radius'>
            <DocBtn>Documentation</DocBtn>
          </StyledLink>
          <StyledLink href='https://github.com/radiusxyz'>
            <GitBtn>Github</GitBtn>
          </StyledLink>
        </EcoDocGit>
      </Content>
    </CustomNavBar>
  );
};

export default NavBar;
