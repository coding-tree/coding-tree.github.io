import React from 'react';

function Birds({placeOne, placeTwo, placeThree, placeFour, placeFive, placeSix, placeSeven}) {
  return (
    <>
      {placeOne({className: 'right', id: 'bird-one'})}
      {placeTwo({id: 'bird-two'})}
      {placeThree({className: 'right', id: 'bird-three'})}
      {placeFour({id: 'bird-four'})}
      {placeFive({className: 'right', id: 'bird-five'})}
      {placeSix({id: 'bird-six'})}
      {placeSeven({className: 'right', id: 'bird-seven'})}
    </>
  );
}

export default Birds;
