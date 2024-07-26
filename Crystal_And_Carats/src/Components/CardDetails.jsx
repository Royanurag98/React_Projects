import React from 'react';
import { Data } from './Cards';
import { useContext } from 'react';

function CardDetails() {
  const cardDataALl=useContext(Data)
  return (
    <div>
      <h1>{cardDataALl[0]}</h1>
      <h2>{cardDataALl[1]}</h2>
      <h3>{cardDataALl[2]}</h3>
    </div>
  );
}

export default CardDetails;
