// import { useEffect, useState } from 'react';
import { styled } from "styled-components";
import BuildSecureScale from "../components/BuildSecureScale";
import InvestorsSection from "../components/InvestorsSection";
import OrangeSection from "../components/OrangeSection";
import ResearchAreas from "../components/ResearchAreas";
// import TopAlert from '../components/TopAlert';
import WhiteSection from "../components/WhiteSection";
import interop from "../assets/images/interop.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  width: auto;
`;

const Popup = styled.div<{ right: number }>`
  position: fixed;
  right: ${({ right }) => (right > 0 ? right + 40 : 70)}px;
  bottom: 6vh;
  max-width: 368px;
  width: 100%;
  @media (max-width: 1919px) {
    bottom: 14px;
  }
  @media (max-width: 750px) {
    top: 64px;
    left: 50%;
    max-width: 315px;
    transform: translateX(-50%);
  }
`;

const Notification = styled.div`
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.92);
  padding: 24px 25px;
  height: auto;

  @media (max-width: 750px) {
    padding: 24px 16px;
  }
`;

const Interop = styled.img`
  width: 111px;
  right: 0;
  position: absolute;
  opacity: 0.22;
  mix-blend-mode: screen;
  @media (max-width: 750px) {
    width: 90px;
  }
`;

const Date = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  margin-bottom: 6px;
`;

const Status = styled.span`
  color: #fff;
  font-family: "Atyp Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const Dash = styled.span`
  color: #fff;
  font-family: "Atyp Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const MonthDay = styled.span`
  color: #ffef5f;
  font-family: "Atyp Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const MessageBox = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 10px;
  position: relative;
`;

const MainMessage = styled.span`
  color: #1e1e1e;
  font-family: "Atyp Display";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.25px;
  @media (max-width: 750px) {
    font-size: 22px;
  }
`;

const SubMessage = styled.span`
  color: #1e1e1e;
  font-family: "Atyp Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

const BtnRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 6px;
  align-items: center;
`;

const NotificationBtn = styled.button`
  color: #fff;
  font-family: "Atyp Display";
  font-size: 14px;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: -0.25px;
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 99999px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 750px) {
    padding: 12px 20px;
    font-size: 12px;
  }
`;

const DismissBtn = styled(NotificationBtn)``;

const LaunchBtn = styled(NotificationBtn)`
  background: #ff5c00;
`;
const HomePage = () => {
  const [dismiss, setDismiss] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   // Handler to call on window resize
  //   function handleResize() {
  //     // Set window width to state
  //     setWindowWidth(window.innerWidth);
  //   }

  //   // Add event listener
  //   window.addEventListener('resize', handleResize);

  //   // Call handler right away so state gets updated with initial window size
  //   handleResize();

  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []); // Empty array ensures that effect is only run on mount and unmount

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
  }, []);

  return (
    <>
      {/* <TopAlert /> */}
      <WhiteSection />
      <BuildSecureScale />
      <ResearchAreas />
      <InvestorsSection />
      <OrangeSection />

      {!dismiss && (
        <Popup right={(windowWidth - 1480) / 2}>
          <Interop src={interop} alt='entangled_chain' />
          <Notification>
            <Date>
              <Status>OPEN</Status>
              <Dash>-</Dash>
              <MonthDay>March 6, 2024</MonthDay>
            </Date>
            <MessageBox>
              <MainMessage> Portico Testnet is live!</MainMessage>
              <SubMessage>
                Sequencing Liveness <br /> & Multi-Rollup Sequencing
              </SubMessage>
            </MessageBox>
            <BtnRow>
              <DismissBtn onClick={() => setDismiss(true)}>Dismiss</DismissBtn>
              <StyledLink to='https://portico.theradius.xyz/' target='_blank'>
                <LaunchBtn>Launch App</LaunchBtn>
              </StyledLink>
            </BtnRow>
          </Notification>
        </Popup>
      )}
    </>
  );
};

export default HomePage;
