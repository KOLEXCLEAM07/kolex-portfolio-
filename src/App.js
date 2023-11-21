import AboutMe from "./components/AboutMe";
import Expierence from "./components/Expierence";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Social/>
      <Portfolio/>
      <Expierence/>
    </div>
  );
}

export default App;
