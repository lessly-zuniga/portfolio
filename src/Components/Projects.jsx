
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import '../App.css';
import { Component } from 'react';


class Projects extends Component {
    render () {
        return (
            <div className='Projects'>
              <Card
              
                    image= 'https://66.media.tumblr.com/d31f02f8884493683e642bc6a8c6dfd3/tumblr_oeqj0nsmaJ1u78hylo2_500.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description='Elliot is h his cat.'
                   
                />

                <Card
                    image='https://66.media.tumblr.com/d31f02f8884493683e642bc6a8c6dfd3/tumblr_oeqj0nsmaJ1u78hylo2_500.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description='Elliot is a .'
                   
                />
                  <Card
                    image='https://66.media.tumblr.com/d31f02f8884493683e642bc6a8c6dfd3/tumblr_oeqj0nsmaJ1u78hylo2_500.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description='Elliot is a sound .'
                   
                />    
            </div>
        )
    }
}
export default Projects;