import { Link, useNavigate } from "react-router-dom";
import radius from "../assets/images/radius.svg";
import radius_dark from "../assets/images/radius_dark.svg";
import hamburger from "../assets/images/hamburger.svg";
import close from "../assets/images/close.svg";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const CustomNavBar = styled.div<{ sticky: boolean }>`
  position: ${({ sticky }) => (sticky ? "sticky" : "absolute")};
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ sticky }) => (sticky ? "#fff" : "transparent")};
  box-shadow: ${({ sticky }) => (sticky ? "0px 4px 36px 0px rgba(255, 122, 0, 0.25)" : "none")};
  // Adjust this property if there is a top alert
  top: ${({ sticky }) => (sticky ? "0px" : "41px")};
  z-index: 10;
  margin-top: ${({ sticky }) => (sticky ? "0px" : "9px")};
  padding: ${({ sticky }) => (sticky ? "0px" : "0px 30px")};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 50px;
  max-width: 1480px;
  padding-left: 40px;
  padding-right: 40px;
`;

const EcoDocGit = styled.div`
  display: flex;
  border-radius: 34px;
  max-width: 536px;
  width: 100%;
  height: 50px;
  gap: 40px;
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
  padding: 14px 10px;
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
  width: 100%;
  font-family: Gilroy-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  border: none;
  background: transparent;
  padding: 14px 10px;
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
  padding: 14px 10px;
  border-radius: 0px 20px 24px 10px;
  &:hover {
    cursor: pointer;
    color: #ff7a00;
  }
`;

// Styled components

const Sticky = styled.div<{ eco: string }>`
  // position: absolute;
  position: ${(props) => (props.eco === "/ecosystem" ? "sticky" : "absolute")};
  width: 100%;
  height: auto;
  z-index: 10;
  // Adjust the below property when there is a top alert
  top: ${(props) => (props.eco === "/ecosystem" ? "0px" : "0px")};
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
  const navigate = useNavigate();

  const handleMenu = () => {
    setIsShown((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if ((location.pathname === "/" && window.scrollY > 162) || location.pathname === "/ecosystem") {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/ecosystem") {
      setSticky(true);
    }
  }, []);

  useEffect(() => {
    const handleBackButton = () => {
      setSticky(false);
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowWidth <= 750 ? (
    <>
      <Sticky eco={location.pathname}>
        <NavbarContainer>
          <LogoAndClose>
            <Logo onClick={() => navigate("/")} src={radius} width='93px' alt='Radius' />
            {isShown ? (
              <CloseButton onClick={handleMenu}>
                <img loading='lazy' src={close} />
              </CloseButton>
            ) : (
              <img loading='lazy' onClick={handleMenu} src={hamburger} />
            )}
          </LogoAndClose>
          {isShown && (
            <NavLinksContainer>
              <StyledNavLink onClick={handleMenu} to='/ecosystem'>
                Ecosystem
              </StyledNavLink>
              <StyledNavLink onClick={handleMenu} to='https://docs.theradius.xyz/overview/introduction-to-radius'>
                Documentation
              </StyledNavLink>
              <StyledNavLink onClick={handleMenu} to='https://github.com/radiusxyz'>
                Github
              </StyledNavLink>
            </NavLinksContainer>
          )}
        </NavbarContainer>
      </Sticky>
      {isShown && <Backdrop onClick={handleMenu} />}
    </>
  ) : (
    <CustomNavBar sticky={sticky}>
      <Content>
        <StyledLink to='/' onClick={() => setSticky(false)}>
          <img loading='lazy' src={sticky ? radius_dark : radius} alt='radius' />
        </StyledLink>

        <EcoDocGit>
          <StyledLink to='/ecosystem' onClick={() => setSticky(true)}>
            <EcoBtn>Ecosystem</EcoBtn>
          </StyledLink>
          <StyledLink to='https://mirror.xyz/0x957084A1F20AB33cfA0cE07ed57F50c05954999C' target='_blank'>
            <DocBtn>Blog</DocBtn>
          </StyledLink>
          <StyledLink to='https://docs.theradius.xyz/overview/introduction-to-radius' target='_blank'>
            <GitBtn>Documentation</GitBtn>
          </StyledLink>
        </EcoDocGit>
      </Content>
    </CustomNavBar>
  );
};

export default NavBar;
