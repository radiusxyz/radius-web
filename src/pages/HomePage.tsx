import BuildSecureScale from '../components/BuildSecureScale';
import InvestorsSection from '../components/InvestorsSection';
import OrangeSection from '../components/OrangeSection';
import ResearchAreas from '../components/ResearchAreas';
import TopAlert from '../components/TopAlert';
import WhiteSection from '../components/WhiteSection';

const HomePage = () => {
  return (
    <>
      {window.innerWidth > 740 && <TopAlert />}
      <WhiteSection />
      <BuildSecureScale />
      <ResearchAreas />
      <InvestorsSection />
      <OrangeSection />
    </>
  );
};

export default HomePage;
