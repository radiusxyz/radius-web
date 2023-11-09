// import { useEffect, useState } from 'react';
import BuildSecureScale from '../components/BuildSecureScale';
import InvestorsSection from '../components/InvestorsSection';
import OrangeSection from '../components/OrangeSection';
import ResearchAreas from '../components/ResearchAreas';
// import TopAlert from '../components/TopAlert';
import WhiteSection from '../components/WhiteSection';

const HomePage = () => {
  /*
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount
*/
  return (
    <>
      {/* {windowWidth > 750 && <TopAlert />} */}
      <WhiteSection />
      <BuildSecureScale />
      <ResearchAreas />
      <InvestorsSection />
      <OrangeSection />
    </>
  );
};

export default HomePage;
