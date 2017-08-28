import React from 'react';
import PlantControls from './PlantControls';
import PlantsModel from '../Models/Plants';

class Plants extends React.Component {

  constructor(props){
    super(props)
    this.waterPlants = this.waterPlants.bind(this);
    this.state = {
      dead: false,
      Plants: new PlantsModel(100)
    }
  }

  render() {
      var plantStyles = {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "25px"
      }

      return (
        <div>
        </div>
      );
    }
  }

export default Plants;
