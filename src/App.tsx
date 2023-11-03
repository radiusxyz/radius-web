import BuildSecureScale from './components/BuildSecureScale';
import InvestorsSection from './components/InvestorsSection';
import OrangeSection from './components/OrangeSection';
import ResearchAreas from './components/ResearchAreas';
import TopAlert from './components/TopAlert';
import WhiteSection from './components/WhiteSection';
import './index.css';

function App() {
  return (
    <>
      <TopAlert />
      <WhiteSection />
      <BuildSecureScale />
      <InvestorsSection />
      <OrangeSection />
      <ResearchAreas />
    </>
  );
}

export default App;
