import './App.css';
import React, { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from './pages/Books.jsx';
import { books } from './data.js';
import BookInfo from './pages/BookInfo.jsx';
import Cart from "./pages/Cart";


  function App() {
   const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id 
      ? {
          ...item,
          quantity: +quantity
      }
      : item
    )
  );
}

function removeItem(item) {
  setCart(cart.filter(book => book.id !== item.id))
}
  

useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/books" exact render={() => <Books books={books} />}/>
      <Route 
      path="/books/:id" 
      render={() => (
      <BookInfo books={books} addToCart={addToCart}/>
    )}
      />
      <Route path="/cart"
      render={() => (
      <Cart
        books={books}
        cart={cart}
        changeQuantity={changeQuantity} 
        removeItem={removeItem}
      />)}
      />
      <Route
        path="/books/:id"
        exact
        render={() => (
    <BookInfo books={books} addToCart={addToCart} cart={cart} />
  )}
/>
      <Footer />
    </div>
    </Router>
  );
}


export default App;
