import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
//import { start } from 'repl';
import CoverPage from './Start';
import Profile from './Profile';


class Cards extends Component {
    render () {
        return (
      

            <div className='card'>
               <div className='card-image'></div>  
               <div className='card-text'>
                    <span className='date'> 4 days ago</span>
                    <h2>Post one</h2>  
                    <p>ccbdcblidcsbckjsbckjsbckjslbckjslbckjbslckjbsldkjcblskjc</p> 
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
        )
    }
}

export default Cards;