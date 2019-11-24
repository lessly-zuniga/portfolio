import React, { Component, Fragment } from "react";
//import './Prueba.scss';
import '../Skills.css';
import Projects from './Projects';
import Profile from './Profile';
import ContactMe from './ContactMe';


class Skills extends Component {
  

  render() {
    return (
        <Fragment>
         
           <div className='SkillsContend'>
           <h3>SKILLS</h3>
            <ul className='listSkills' >
              <div className='SkillsLeft' >
                  <li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Javascript</li>
                  
              </div>
              <div className='SkillsCenter'>
                  <li>React JS</li> 
                  <li>Firebase</li> 
                  <li>Node JS</li>
                  
              </div>
              <div className='SkillsRight'>
                  <li>React Native </li>
                  <li>Express</li>
                  <li>Mongo DB</li>
                  
                  
              </div>
              <div className='SkillsRight'>
              <li>Git</li>
              <li>Git Hub</li> 

              </div>
            </ul>
           </div>

        </Fragment>
    );
  }
}
 
export default Skills;