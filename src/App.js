import './App.css';
import Background from "./components/Background/Background"
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
