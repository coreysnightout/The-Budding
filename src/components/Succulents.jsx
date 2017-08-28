import React from 'react';

function Succulents(props) {

  alert("hi");
    return (
      <div>
        <p>Succulents</p>
        <button onClick={props.waterPlants}>water!</button>
      </div>
    );
  }

export default Succulents;
