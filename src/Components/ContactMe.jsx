import React, { Component } from "react";
import '../ContactMe.css'
//import Imagit from 'C:\Users\Laboratoria\Desktop\Laboratoria\porfolio\src\images';
 
class ContactMe extends Component {
  render() {
    return (
   
                 <div className='contactMe' >
    
                      <div className='githubIcon'>
                        <a href='https://github.com/lessly-zuniga?tab=repositories'>
                          <img src="https://image.flaticon.com/icons/svg/1051/1051326.svg" className='git-icon' name='github'/>
                        </a>
                      </div>

                      <div className='linkedin'>
                      <a href='https://www.linkedin.com/in/lesly-zu%C3%B1iga-727137192/'>
                        <img src="https://image.flaticon.com/icons/svg/1384/1384014.svg"  className='lkd' alt='Linkedin'/>
                      </a>
                      </div>

                      <div className='slack'>
                        {/* agregar liga  a slack */}
                      <a href='https://www.linkedin.com/in/lesly-zu%C3%B1iga-727137192/'>
                        <img src='https://image.flaticon.com/icons/svg/2111/2111674.svg'  className='slack' alt='Linkedin'/>
                      </a>
                      </div>

                      {/* slack(?)  y CV (?)<div className='CV'> 
                      <img src="../images/git.png" alt='CV'/>
                      <a href='https://www.linkedin.com/in/lesly-zu%C3%B1iga-727137192/'></a>
                      </div> */}
                    
                  </div>
           
        
    )
  }
}
 
export default ContactMe;