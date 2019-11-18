import React, { Component, Fragment } from "react";
//import './Prueba.scss';
import '../Skills.css';
import Projects from './Projects';
import Profile from './Profile';
import ContactMe from './ContactMe';


class Skills extends Component {
  

  render() {
    return (
        <Fragment className='Skills'>
         
            <h3>SKILLS</h3>
            <ul>
              <div className='SkillsLeft' >
                  <li>HTML 5</li>
                  <li>Javascript</li>
                  <li>CSS 3</li>
                  <li>React JS</li> 
                  <li>Mongo DB</li>
                  <li>Firebase</li>
                  <li>Express</li>
                  <li>Node.Js</li>
                  <li>React Native</li>
                  <li>Express</li>
                  <li>Git</li>
                  
              </div>
            </ul>

        </Fragment>
    );
  }
}
 
export default Skills;