import './App.css';
import EaseAndDiversity from './components/EaseAndDiversity';
import MissionSection from './components/MissionSection';
import ExperienceSection from './components/ExperienceSection';
import Experience from './components/HyperExperience';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import AiDriven from './components/AiDriven';
import Footer from './components/Footer';
import Loadersection from './components/common/LoaderSection';
import Backtotop from './components/common/Backtotop';
import AboutHypesec from './components/AboutHypesec';
import HyperionSection from './components/HyperionSection';
import Header from './components/Header';
import FamilyHype from './components/FamilyHype';

function App() {
  return (
    <div className=' overflow-hidden bg-night'>
      <Loadersection />
      <Backtotop />
      <Header />
      <EaseAndDiversity />
      <HyperionSection />
      <MissionSection />
      <ExperienceSection />
      <AiDriven />
      <Roadmap />
      <AboutHypesec />
      <Experience />
      <Features />
      <FamilyHype />
      <Footer />
    </div>
  );
}

export default App;