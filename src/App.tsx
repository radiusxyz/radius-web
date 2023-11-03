import BuildSecureScale from './components/BuildSecureScale';
import Footer from './components/Footer';
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
      <ResearchAreas />
      <InvestorsSection />
      <OrangeSection />
      <Footer />
    </>
  );
}

export default App;
