import BuildSecureScale from './components/BuildSecureScale';
import InvestorsSection from './components/InvestorsSection';
import OrangeSection from './components/OrangeSection';
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
    </>
  );
}

export default App;
