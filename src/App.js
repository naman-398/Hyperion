import './App.css';
import Abouthype from './components/Abouthype';
import Experience from './components/Experience';
import Features from './components/Features';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className=' overflow-hidden'>
      <Roadmap />
      <Abouthype />
      <Features />
      <Experience />
    </div>
  );
}

export default App;