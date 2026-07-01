import './App.css'
import Nav from './components/Nav.jsx'
import Landing from './components/Landing.jsx'
import Highlights from './components/Highlights.jsx'
import Highlight from './components/ui/Highlight.jsx'


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
    </div>
  );
}

export default App;
