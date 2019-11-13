import React, { Component, Fragment } from "react";
//import './Prueba.scss';
import '../App.css';
import Projects from './Projects';
import Profile from './Profile';
import ContactMe from './ContactMe';

class Start extends Component {
  render() {
    return (
        <Fragment>
        <div className='first' >
            <img></img>
            <center>
            <h1>  
                Lesly Zuñiga</h1>
                </center>
        </div>  

      <Profile/>
      <Projects/>
      <ContactMe/>
      </Fragment>
    );
  }
}
 
export default Start;