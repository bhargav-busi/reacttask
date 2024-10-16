import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Electronics from './Components/Electronics';
import Books from './Components/Book';
import Clothing from './Components/Clothing';
import Kitchen from './Components/Kitchen';
import Sports from './Components/Sports';
import Header from './Components/Header';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Products from './Components/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/clothing" element={<Clothing />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/sports" element={<Sports />}/>
      <Route path="/books" element={<Books />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* Dynamic route for product category and id */}
      <Route path='/products/:category/:id' element={<Products />} /> 
    </Routes>
  );
}

export default App;
