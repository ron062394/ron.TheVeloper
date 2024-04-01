import ProjectCard from './components/ProjectCard'
import Socials from './components/Linkedin'
import Stacks from './components/Stacks/Frontend';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ProjecSection from './Pages/ProjecSection';
import StacksSection from './Pages/StacksSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <StacksSection/>
      <ProjecSection/>
    </div>
  );
}

export default App;
