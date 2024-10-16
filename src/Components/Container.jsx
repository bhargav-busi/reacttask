import React from 'react';
import { data } from '../data';
import Cards from './Cards';

const Container = () => {
  return (
    <div>
      <Cards allitems={data} />
    </div>
  );
}

export default Container;
