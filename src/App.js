import './App.css';
import Home from "./Components/Home";
import SKills from "./Components/SKills";
import Projects from "./Components/Projects";
import About from "./Components/About";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <SKills />
      <Projects />
    </div>
  );
}

export default App;
