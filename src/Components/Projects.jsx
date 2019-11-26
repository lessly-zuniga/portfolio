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
                   
               </div>  
               <div className='card-text'>
                  
                    <h2>Lab Notes</h2>  
                    <p>Notas a donde quiera que vayas </p> 
                    <span className='date'>Firebase</span>
                    <span className='date'>React js</span>
                </div> 
                <div className='card-stats'>
                    <div className='stat'>
                    <div className='type'>React js</div>
                    <div className='type'>Firebase</div>
                </div>
               
                <div className='stat'>
                   
                    <div className='type'>read</div>
                    <div className='type'>read</div>
                
                </div> 
                <div className='stat'>
                    <div className='type'>read</div>
                    <div className='type'>read</div>
                
                </div> 
              
                </div>  
                
            </div>

            <div className='card' >
               <div className='card-image'></div>  
               <div className='card-text'>
               <h2>Lab Notes</h2>  
                    <p>Notas a donde quiera que vayas </p> 
                    <span className='date'>App aqui!</span> 
                </div> 
                <div className='card-stats'>
                    <div className='stat'>
                    <div className='type'>4m</div>
                    <div className='type'>read</div>
                </div>
               
                <div className='stat'>
                   
                    <div className='type'>read</div>
                    <div className='type'>read</div>
                
                </div> 
                <div className='stat'>
                    <div className='type'>read</div>
                    <div className='type'>read</div>
                
                </div> 
              
                </div>  
                
            </div>

            <div className='card' >
               <div className='card-image'></div>  
               <div className='card-text'>
               <h2>Lab Notes</h2>  
                    <p>Notas a donde quiera que vayas </p> 
                    <span className='date'>App aqui!</span>
                </div> 
                <div className='card-stats'>
                    <div className='stat'>
                    <div className='type'>4m</div>
                    <div className='type'>read</div>
                </div>
               
                <div className='stat'>
                   
                    <div className='type'>read</div>
                    <div className='type'>read</div>
                
                </div> 
                <div className='stat'>
                    <div className='type'>read</div>
                    <div className='type'>read</div>
                
                </div> 
              
                </div>  
                
            </div>

            </div>
        )
    }
}

export default Projects;