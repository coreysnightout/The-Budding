import React from 'react';
import styles from '../styles/App.css';
import succulent from '../assets/test.png';
import PlantControls from './PlantControls';

function App(props){
  var appStyles = {
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center"
  }

  var formStyles = {
    display: "flex",
  }

  var imageStyles = {
    width: "75px",
    heiht: "auto"
  }

  return (
    <div>
      <div style={appStyles}>
        <h1>The Budding</h1>
        <img style={imageStyles} src={succulent} alt="succulent example image" />
      </div>
      <div>
       <PlantControls/>
      </div>
    </div>
  );
}

export default App;
