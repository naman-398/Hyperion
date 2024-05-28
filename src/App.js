import './App.css';
import Herosection from './components/Herosection';
import EaseAndDiversity from './components/EaseAndDiversity';
import Hperionsection from './components/Hperionsection';
import MissionSection from './components/MissionSection';
import ExperienceSection from './components/ExperienceSection';
import Abouthype from './components/Abouthype';
import Experience from './components/Experience';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import AiDriven from './components/AiDriven';
import Footer from './components/Footer';
import Familihype from './components/Familihype';
import Loadersection from './components/Loadersection';
import Backtotop from './components/Backtotop';

function App() {
  return (
    <div className=' overflow-hidden bg-[#0B0B0B]'>
      <Loadersection/>
      <Backtotop/>
      <Herosection />
      <EaseAndDiversity />
      <Hperionsection />
      <MissionSection />
      <ExperienceSection />
      <AiDriven/>
      <Roadmap />
      <Abouthype />
      <Features />
      <Experience />
      <Familihype />
      <Footer/>
</div>
  );
}

export default App;