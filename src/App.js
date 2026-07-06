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
      <Route path="/books" exact render={() => <Books books={books} />}/>
      <Route path="/books/:id" render={() => <BookInfo books={books} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
