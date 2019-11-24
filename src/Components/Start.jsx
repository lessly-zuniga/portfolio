import React, { Component, Fragment } from "react";
//import './Prueba.scss';
import '../Start.css';
import Projects from './Projects';
import Profile from './Profile';
import ContactMe from './ContactMe';
import Skills from './Skills';


class Start extends Component {
  

  render() {
    return (
        <Fragment>
         

        <div className='coverHero' >
          <div class="title">
           <h1>Lesly <br/></h1>
         </div>            
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