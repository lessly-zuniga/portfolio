import React, { Component } from "react";



//import { Card } from "semantic-ui-react";
import '../App.css';

class Profile extends Component {
    render () {
        return (
           
                 
                <div className='AboutMe'>
                    
                   <div className=' blockMe'>
                   <img className='Me' src= 'https://files.slack.com/files-pri/T0NNB6T0R-FQ82WQVUZ/lesly.png' ></img>

                         <div className='blocktxt'>
                         <h3>Sobre mi </h3>
                            
                            <div className='txtaboutme' width='20px;'>
                            Soy Desarrolladora Web Front-End,  me encanta la tecnologia,
                            las cosas bonitas y utiles !.  
                            Solo soy un diseñador de experiencia de usuario que ama la 
                            vida, hace lo que disfruta y se divierte en el camino. Soy 
                            una persona libre que busca brindar soluciones creativas a 
                            este mundo lleno de oportunidades. Creo en la mejora continua,
                            buscando experiencias inolvidables para aprender a ser una mejor
                            persona en todo lo que hago y con los que me rodean. Siempre
                            trato de innovar porque me gusta la sensación de crear algo
                            que nadie ha hecho. Soy increíblemente creativo para resolver 
                            proyectos todos los días y la vida misma. Me gusta el chai latte, 
                            el sándwich de jamón con queso azul, el vino tinto y la buena compañía también.     

                            </div>
                         </div>
                           
                     </div>
                   
                    </div>
                 
            
        )
    }
}
export default Profile;