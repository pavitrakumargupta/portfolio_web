import './App.css';
import Navbar from "./components/navbar/Navbar"
import Homepage from './components/home_page/Homepage';
import AboutPage from  "./components/aboutPage/aboutPage"
import Service from "./components/services/services"
import Skills from './components/skills/skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage />
      <AboutPage  />
      <Skills/>
      <Service/>
    </div>
  );
}

export default App;
