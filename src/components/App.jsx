import React from 'react';
import styles from '../styles/App.css';
import succulent from '../assets/test.png';

function App(props){
  var appStyles = {
    fontFamily: "sans-serif"
  }
  return (
    <div style={appStyles}>
      <h1>The Budding</h1>
      <img src={succulent} alt="succulent example image" />
    </div>
  );
}

export default App;
