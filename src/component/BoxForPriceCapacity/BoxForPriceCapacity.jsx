import React from 'react';
import "./BoxForPriceCapacity.css"


function BoxForPriceCapacity(props) {
  return (
    <div className='wrapper3'>
        <p className='name_of_number'>{props.name}</p>
        <p className='amount'>
            {props.data}
        </p>
    </div>
  );
}

export default BoxForPriceCapacity;