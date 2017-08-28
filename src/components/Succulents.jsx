import React from 'react';

function Succulents(props) {

  // if (props.water.waterLevel === 0){
  //   alert('dead plants');
  // }
    return (
      <div>
        <p>Succulents</p>
        <button onClick={props.waterPlants}>water!</button>
      </div>
    );
  }

export default Succulents;
