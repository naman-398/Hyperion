import logo from './logo.svg';
import './App.css';
import Herosection from './components/Herosection';
import EaseAndDiversity from './components/EaseAndDiversity';
import Hperionsection from './components/Hperionsection';
import MissionSection from './components/MissionSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className=' bg-[#0D0D0D]'>
      <Herosection/> 
      <EaseAndDiversity/>
      <Hperionsection/>
      <MissionSection/>
      <ExperienceSection/>
    </div>
  );
}

export default App;
