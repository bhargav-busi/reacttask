import React from 'react';
import { data } from '../data';
import Cards from './Cards';
import Header from './Header';

export default function Books() {
  const books = data.filter(item => item.category === "Books");

  console.log(books);  // Debugging: See the filtered electronics data

  return (
    <div>
       <Header />
       <Cards allitems={books} /> 
      
    </div>
  );
}