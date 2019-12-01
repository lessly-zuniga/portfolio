import React from 'react'
//import {  Icon, Image } from 'semantic-ui-react'
import '../Projects.css';
import { Component } from 'react';
import { Link } from "react-router-dom"
// import ReactCardFlip from 'react-card-flip';
// //import { start } from 'repl';
// import CoverPage from './Start';
// import Profile from './Profile';


class Projects extends Component {
    render () {
        return (
      
<div className='blockCard' >
            <div className='card' >
               <div className='card-image'>
                  <img src="https://i.pinimg.com/originals/0c/a5/43/0ca5437ad727ed4520655a44cee18035.gif" alt=""/>
               </div>  
               <div className='card-text'>
                  
                    <h5>Plans</h5>  
                    <p> Que no se te vayan las ideas!  <br></br>
                        Notas a donde quiera que vayas </p> 
                    <span className='date'>
                        App creada con React js para interfaz
                         y con Firebase como base de datos </span>
                    {/* <span className='date'>React js</span> */}
                </div> 
                <div className='card-stats'>
                <div className='stat'>
                    {/* <div className='type'>Repo</div> */}
                    {/* <div className='type'>read</div> */}
                
                </div> 
                <div className='stat'>
                
                <div className='type'>
                <a href='https://github.com/lessly-zuniga?tab=repositories'>
                      <img src="https://img.icons8.com/dusk/2x/push-notifications.png" className='git-icon' name='github'/>
                    </a>
                </div>
                {/* <div className='type'>read</div> */}
            
            </div>  
            <div className='stat'>
                    {/* <div className='type'>DEMO</div> */}
                    {/* <div className='type'>read</div> */}
                
                </div> 
              
                </div>  
                
            </div>

            <div className='card' >
               <div className='card-image'>
                <img src="https://i.pinimg.com/564x/af/a9/8c/afa98ce438d8dc2861e55353829463ac.jpg" alt=""/>    
               </div>  
               <div className='card-text'>
               <h5>Gigil </h5>   
                    <p>Las mejores peliculas y series 
                     de amor a un click!
                    </p> 
                    <span className='date'>App creada con Javascript 
                    y Css puro en menos de 3 dias !
                    </span> 
                </div> 
                <div className='card-stats'>
                <div className='stat'>
                    {/* <div className='type'>Repo</div> */}
                    {/* <div className='type'>read</div> */}
                
                </div> 
                <div className='stat'>
                
                <div className='type'>
                <a href='https://github.com/lessly-zuniga?tab=repositories'>
                      <img src="https://img.icons8.com/doodle/2x/hdtv.png" className='git-icon' name='github'/>
                    </a>
                </div>
                {/* <div className='type'>read</div> */}
            
            </div>  
            <div className='stat'>
                    {/* <div className='type'>DEMO</div> */}
                    {/* <div className='type'>read</div> */}
                
                </div> 
              
                </div>  
                
            </div>

            <div className='card' >
               <div className='card-image'>
                <img src="https://i.pinimg.com/originals/9c/9f/bb/9c9fbb6f5b0d85f83ab05d9483033736.gif" alt=""/>
               </div>  
               <div className='card-text'>
               <h5>Md-links</h5>   
                    <p>Encuentra todos los enlaces que necesitas 
                        en un texto super rapido! </p> 
                    <span className='date'>App diseñada para programadores,
                    creada con Javascript y Node.js</span>
                </div> 
                <div className='card-stats'>
                <div className='stat'>
                    {/* <div className='type'>Repo</div> */}
                    {/* <div className='type'>read</div> */}
                
                </div> 
                <div className='stat'>
                
                <div className='type'>
                <a href='https://github.com/lessly-zuniga?tab=repositories'>
                      <img src="https://img.icons8.com/plasticine/2x/browse-folder.png" className='git-icon' name='github'/>
                    </a>
                </div>
                {/* <div className='type'>read</div> */}
            
            </div>  
            <div className='stat'>
                    {/* <div className='type'>DEMO</div> */}
                    {/* <div className='type'>read</div> */}
                
                </div> 
              
                </div>  
                
            </div>

            </div>
        )
    }
}

export default Projects;