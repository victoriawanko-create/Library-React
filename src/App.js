import './App.css';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from './pages/Books.jsx';
import { books } from './data.js';
import BookInfo from './pages/BookInfo.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/books" exact component={Books}/>
      <Route path="/books/1" render={() => <BookInfo books={books} />} />
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
