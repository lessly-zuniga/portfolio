import React, { Component, Fragment } from "react";
//import './Prueba.scss';
import '../Start.css';
import Projects from './Projects';
import Profile from './Profile';
import ContactMe from './ContactMe';
import Skills from './Skills';
//import Ocean from '..Images/Ocean.jpg'


class Start extends Component {
  

  render() {
    return (
        <Fragment>
         

        <div className='first' >
         <img></img>
        <h1 className='font'>  Lesly Zuñiga </h1>
        <h6 className='font6'>Front-End Developer</h6>
        {/* <video className='firstVideo' controls type="video/mp4" src="https://media.giphy.com/media/f45816CTsKd7G/giphy.mp4"></video>
         */}
        {/* <video src="https://media.giphy.com/media/1hujy3a24Q3eM/giphy.mp4" controls>
          Tu navegador no implementa el elemento <code>video</code>.
        </video> */}
            
        </div>  

      <Profile/>
      <Projects/>
      <Skills/>
      <ContactMe/>

    </Fragment>
    );
  }
}
 
export default Start;