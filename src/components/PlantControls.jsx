import React from "react";
import Succulents from './Succulents';
import Tropical from './Tropical';
import FruitTrees from './FruitTrees';
import Tomatoes from './Tomatoes';
import Houseplants from './Houseplants';

function PlantControls(props) {

    var plantStyles = {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "25px"
    }

    return (
      <div>
        <div style={plantStyles}>
          <Succulents waterPlants={props.waterPlants}
          water={props.water}/>
          <Tropical/>
          <FruitTrees/>
          <Tomatoes/>
          <Houseplants/>
        </div>
      </div>
    );
  }

export default PlantControls;
