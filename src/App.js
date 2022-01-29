import './App.css';
import Background from "./components/Background/Background"
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"
import Technologies from "./components/Technologies/Technologies"
import Timeline from "./components/Timeline/Timeline"

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Projects />
      <Technologies />
      <Timeline />
    </div>
  );
}

export default App;
