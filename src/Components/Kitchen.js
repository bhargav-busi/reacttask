import React from 'react';
import { data } from '../data';
import Cards from './Cards';
import Header from './Header';

export default function Kitchen() {
  const kitchen = data.filter(item => item.category === "Kitchen");


  return (
    <div>
       <Header />
       <Cards allitems={kitchen} /> 
      
    </div>
  );
}