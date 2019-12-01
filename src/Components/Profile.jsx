import React, { Component, Fragment} from "react";
import myPhoto from '../Images/Me.jpg';



//import { Card } from "semantic-ui-react";
import '../Profile.css';

class Profile extends Component {
    render () {
        return (
           
        <Fragment>
                
                   <section className=' blockMe'>
                       <div className='myPhoto'>
                            <img src={myPhoto}/>
                       </div>
                       <div className='txtAboutMe'>
                            <h2>Sobre mi </h2>
                                
                                <div className='txtaboutme' >
                                        Soy Desarrolladora Web Front-End, Fui analista en una empresa de soportes bancarios
                                        donde me encargaba de el control y funcionamiento de todos los ATM en Mèxico. 
                                        En mi tiempo libre me gusta nadar en cascadas, acampar y hacer 
                                        ejercicio al aire libre, leer un buen libro y tocar guitarra.

                                </div>
                       </div>
                    </section>
                           
                     
        
        </Fragment>
                 
                 
            
        )
    }
}
export default Profile;