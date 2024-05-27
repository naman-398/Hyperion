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

function App() {
  return (
    <div className=' overflow-hidden bg-[#0D0D0D]'>
      <Herosection />
      <EaseAndDiversity />
      <Hperionsection />
      <MissionSection />
      <ExperienceSection />
      <Roadmap />
      <Abouthype />
      <Features />
      <Experience />
    </div>
  );
}

export default App;