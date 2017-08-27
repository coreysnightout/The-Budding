import React from 'react';
import styles from '../styles/App.css';
import succulent from '../assets/test.png';
import UserFormControls from './UserFormControls';

function App(props){
  var appStyles = {
    fontFamily: "sans-serif",
    display: "flex"
  }
  return (
    <div style={appStyles}>
      <h1>The Budding</h1>
      <img src={succulent} alt="succulent example image" />
      <div>
        <UserFormControls/>
      </div>
    </div>
  );
}

export default App;
