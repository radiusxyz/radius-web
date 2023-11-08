import { Link } from 'react-router-dom';
import radius from '../assets/images/radius.svg';
import radius_dark from '../assets/images/radius_dark.svg';
import hamburger from '../assets/images/hamburger.svg';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  width: 100%;
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
    color: #ff7a00;
  }
  &:active {
    color: #ff7a00;
  }
  &:focus {
    color: #ff7a00;
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
    color: #ff7a00;
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
    color: #ff7a00;
  }
`;

// Styled components

const Sticky = styled.div`
  position: sticky;
  height: auto;
  z-index: 10;
`;

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 0 30px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 0.5s ease-in;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 13px 5px 14px;
  font-family: Gilroy-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  &.active {
    color: #ff7a00;
  }
  &:focus {
    color: #ff7a00;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const LogoAndClose = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 205px;
  z-index: 9;
`;

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const location = useLocation();

  const handleMenu = () => {
    setIsShown((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        (location.pathname === '/' && window.scrollY > 162) ||
        location.pathname === '/ecosystem'
      ) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/ecosystem') {
      setSticky(true);
    }
  }, []);

  useEffect(() => {
    const handleBackButton = () => {
      setSticky(false);
    };
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return window.innerWidth > 750 ? (
    <CustomNavBar sticky={sticky}>
      <Content>
        <img src={sticky ? radius_dark : radius} alt='radius' />
        <EcoDocGit>
          <StyledLink to='/ecosystem' onClick={() => setSticky(true)}>
            <EcoBtn>Ecosystem</EcoBtn>
          </StyledLink>
          <StyledLink to='https://docs.theradius.xyz/overview/introduction-to-radius'>
            <DocBtn>Documentation</DocBtn>
          </StyledLink>
          <StyledLink to='https://github.com/radiusxyz'>
            <GitBtn>Github</GitBtn>
          </StyledLink>
        </EcoDocGit>
      </Content>
    </CustomNavBar>
  ) : (
    <>
      <Sticky>
        <NavbarContainer>
          <LogoAndClose>
            <Logo src={radius} width='93px' alt='Radius' />
            {isShown ? (
              <CloseButton onClick={handleMenu}>X</CloseButton>
            ) : (
              <img onClick={handleMenu} src={hamburger} />
            )}
          </LogoAndClose>
          {isShown && (
            <NavLinksContainer>
              <StyledNavLink onClick={handleMenu} to='/ecosystem'>
                Ecosystem
              </StyledNavLink>
              <StyledNavLink
                onClick={handleMenu}
                to='https://docs.theradius.xyz/overview/introduction-to-radius'
              >
                Documentation
              </StyledNavLink>
              <StyledNavLink
                onClick={handleMenu}
                to='https://github.com/radiusxyz'
              >
                Github
              </StyledNavLink>
            </NavLinksContainer>
          )}
        </NavbarContainer>
      </Sticky>
      <Backdrop onClick={handleMenu} />
    </>
  );
};

export default NavBar;
