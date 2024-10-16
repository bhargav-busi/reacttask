import React from 'react';
import { data } from '../data';
import Cards from './Cards';
import Header from './Header';

export default function Sports() {
  const sports = data.filter(item => item.category === "Sports");


  return (
    <div>
       <Header />
       <Cards allitems={sports} /> 
      
    </div>
  );
}