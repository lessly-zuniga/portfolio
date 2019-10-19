import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import '../App.css';

class Profile extends Component {
    render () {
        return (
            <div className='Profile'>
                 <img className='Me' src= 'https://data.whicdn.com/images/212364680/original.jpg' ></img>
                 <h1>Sobre mi </h1>
                <Card>Soy Desarrolladora Web Frot-End, 
                 fan de la creatividad y organización. 
                 Con gusto por soluciones innovadoras 
                 para crear una mejor experiencia
                  y optimizar resultados.</Card>
                 
            </div>
        )
    }
}
export default Profile;