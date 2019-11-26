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
           <h4>SKILLS</h4>
           <div className='IconList'>
              <img src="https://img.icons8.com/color/2x/mongodb.png" className='IconList' name='React js'/>
              <img src="https://img.icons8.com/color/2x/html-5.png" className='IconList' name='React js'/>
              <img src="https://img.icons8.com/color/48/000000/javascript.png" className='IconList' name='React js'/>
              <img src="https://img.icons8.com/color/2x/nodejs.png" className='IconList' name='React js'/>
              <img src="https://image.flaticon.com/icons/svg/81/81323.svg" className='IconList' name='React js'/>
              <img src="https://img.icons8.com/color/2x/npm.png" className='IconList' name='React js'/>
              <img src="https://img.icons8.com/plasticine/100/000000/react.png" className='IconList' name='React js'/>
              <img src="https://img.icons8.com/color/2x/css3.png" className='IconList' name='React js'/>
           </div>
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
              <li>Git Hub</li> 
              <li>NPM</li>
              <li>API</li>

              </div>
            </ul>

            
           </div>

        </Fragment>
    );
  }
}
 
export default Skills;