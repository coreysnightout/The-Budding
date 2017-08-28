import React from 'react';
import PlantControls from './PlantControls';
import PlantsModel from '../Models/Plants';

class Plants extends React.Component {

  constructor(props){
    super(props)
    this.waterPlants = this.waterPlants.bind(this);
    this.state = {
      dead: false,
      plants: new PlantsModel(100)
    }
  }

  componentDidMount() {
    var test = setInterval(() =>
    this.water(),
    1000
    );
  }

  water() {
    this.state.plants.waterLevel -= 10;
    var newState = this.state.plants;
    this.setState({Plants: newState});
    newState.waterLevel = 200;
  }

  waterPlants(){ //feedTama
    var newState = this.state.plants;
    this.setState({Plants: newState});
    console.log(newState.waterLevel += 25);
  }

  componentWillUnmount(){
    if (test < 100) {
    clearInterval(test)
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
          <PlantControls
            waterPlants={this.waterPlants}
          water={this.state.plants}/>
        </div>
      );
    }
  }

export default Plants;
