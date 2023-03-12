
import './App.css';
import '../src/style.scss'
import '../src/responsive.scss'
import Nav from './Component/Nav';
import Banner from './Component/Banner';
import About from './Component/About';
import ScrollTop from './Component/ScrollTop';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Follow from './Component/Particle';
import Footer from './Component/Footer';
function App() {
  return (
    <>
    <Follow/>
    <Nav/>
    <Banner/>
    <About/>
    <Skills/>
    <Projects/>
    <ScrollTop/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
