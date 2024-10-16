import React from 'react';
import { data } from '../data';
import Cards from './Cards';
import Header from './Header';

export default function Electronics() {
  const electronics = data.filter(item => item.category === "Electronics");


  return (
    <div>
        <Header />
        <Cards allitems={electronics} /> 
      
    </div>
  );
}
