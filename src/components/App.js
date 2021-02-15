import React from 'react';
import Header from "./Header";
import SodaControl from "./SodaControl";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
    
      <Header />
    
    <div classname="container">   
      <SodaControl />
    </div>
    </>
  );
}

export default App;
