import React from "react";
import Succulents from './Succulents';
import Tropical from './Tropical';
import FruitTrees from './FruitTrees';
import Tomatoes from './Tomatoes';
import Houseplants from './Houseplants';

class UserPlantVarieties extends React.Component {

  constructor(props){
    super(props)
    this.addWater = this.addWater.bind(this);
  }

  render() {

    var plantStyles = {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "25px"
    }

    return (
      <div>
        <div style={plantStyles}>
          <Succulents/>
          <Tropical/>
          <FruitTrees/>
          <Tomatoes/>
          <Houseplants/>
        </div>
      </div>
    );
  }
}

export default UserPlantVarieties;
