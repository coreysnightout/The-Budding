import React from 'react';

function Succulents(props) {

    return (
      <div>
        <p>Succulents</p>
        <button onClick={props.waterPlants}>Add!</button>
      </div>
    );
  }

export default Succulents;
