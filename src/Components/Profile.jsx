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
        
                                        Soy Desarrolladora Web Front.End, soy una persona muy energica, me encanta estar 
                                        en constante moviemiento, haciendo cosas nuevas todos los dias, disfruto de llenar 
                                        mi dia de atividades interesantes que me inspiran a hacer las cosas mejor siempre,
                                        Anteriormente laboraba como 'Analista' en un empresa de soportes bancarios,
                                        mi principal funcion era mantener un control y estabilizacion de ATM del cliente en 
                                        la Republica,identificaba el funcionamiento, si  necesiataban intervencion tecnica
                                        o solo actualizaciones y planeaba un encuntro con ingieneria tratando de no solo buscar
                                        una solucion sino tambien anticipar todas las posibles complicaciones 
                                        que se pudieran presentar.
                            
                                </div>
                       </div>
                    </section>
                           
                     
        
        </Fragment>
                 
                 
            
        )
    }
}
export default Profile;