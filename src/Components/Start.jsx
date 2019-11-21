import React, { Component, Fragment } from "react";
//import './Prueba.scss';
import '../Start.css';
import Projects from './Projects';
import Profile from './Profile';
import ContactMe from './ContactMe';
import Skills from './Skills';
//import Palmeras from '../Images/Palmeras'


class Start extends Component {
  

  render() {
    return (
        <Fragment>
         

        <div className='first' >
          <div>
            <img className='firstphoto' ></img>
          </div>
        {/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qwz88S1P0os?start=5"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
       
        <video className='firstVideo' controls type="video/mp4" src="https://www.youtube-nocookie.com/embed/qwz88S1P0os?start=5"></video>
         */}
        
        <h1 className='font'>  Lesly Zuñiga </h1>
        <h6 className='font6'>Front-End Developer</h6>
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