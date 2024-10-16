import React from 'react';
import { data } from '../data';
import Cards from './Cards';
import Header from './Header';

export default function Clothing() {
  const clothing = data.filter(item => item.category === "Clothing");

 

  return (
    <div>
        <Header />
       <Cards allitems={clothing} /> 
      
    </div>
  );
}