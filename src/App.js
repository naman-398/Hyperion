import './App.css';
import Herosection from './components/HeroSection';
import EaseAndDiversity from './components/EaseAndDiversity';
import MissionSection from './components/MissionSection';
import ExperienceSection from './components/ExperienceSection';
import Experience from './components/HyperExperience';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import AiDriven from './components/AiDriven';
import Footer from './components/Footer';
import Familihype from './components/Familihype';
import Loadersection from './components/common/LoaderSection';
import Backtotop from './components/common/Backtotop';
import AboutHypesec from './components/AboutHypesec';
import HyperionSection from './components/HyperionSection';

function App() {
  return (
    <div className=' overflow-hidden bg-[#0B0B0B]'>
      <Loadersection />
      <Backtotop />
      <Herosection />
      <EaseAndDiversity />
      <HyperionSection />
      <MissionSection />
      <ExperienceSection />
      <AiDriven />
      <Roadmap />
      <AboutHypesec />
      <Experience />
      <Features />
      <Familihype />
      <Footer />
    </div>
  );
}

export default App;