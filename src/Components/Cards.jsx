import React from 'react';
import './Cards.css'
import { Link } from 'react-router-dom';

function Cards({ allitems }) {
  return (
    <div className='main'>
      {allitems.map(item => (
         <div key={item.id} className='info'>
          <img src={item.image} alt={item.image} className='photo'/>
          <Link to={allitems.category}>
          <h2 className='des'>{item.name}</h2>
          </Link>
        
        </div>
      ))}
    </div>
  );
}

export default Cards;
