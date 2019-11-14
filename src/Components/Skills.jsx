import React, { Component, Fragment } from "react";
//import './Prueba.scss';
import '../App.css';
import Projects from './Projects';
import Profile from './Profile';
import ContactMe from './ContactMe';


class Skills extends Component {
  

  render() {
    return (
        <Fragment>
         
         <h1>  
                Skills!
            </h1>
        <div className='SkillsLeft' >
          
            
            <div>HTML 5</div>
            <div>Javascript</div>
            <div>CSS 3</div>
            <div>React JS</div>
           



             
        </div>  
        <div className='SkillsRight'>
        <div>Mongo DB</div>
            <div>Firebase</div>
            <div>Express</div>
            <div>Node.Js</div>
        </div>

        </Fragment>
    );
  }
}
 
export default Skills;