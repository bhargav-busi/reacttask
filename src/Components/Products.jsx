import React from 'react';
import { useParams } from 'react-router-dom';

// import Cards from './Cards';
import { data } from '../data';

function Products() {
  const { category, id } = useParams();
  const product = data.find(item => 
    item.category.toLowerCase() === category.toLowerCase() && item.id.toString() === id
  );

  return (
    <div>
      {product ? (
        <div key={product.id} className='info'>
          <img src={product.image} alt={product.name} className='photo'/>
          <h2 className='des'>ID: {product.id}</h2>
          <h2 className='des'>Name: {product.name}</h2>
          <h2 className='des'>Category: {product.category}</h2>
          <h2 className='des'>Price: ${product.price}</h2>
{/*           <Cards allitems={product} />  */}
        </div>
      ) : (
        <h2>No product found for this category and ID.</h2>
      )}
    </div>
  );
}

export default Products;
