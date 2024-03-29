import React, { Component } from "react";
import '../ContactMe.css'

class ContactMe extends Component {
  render() {
    return (
          <div className='contactMe'>

              <div className='githubIcon'>
                  <a href='https://github.com/lessly-zuniga?tab=repositories'>
                      <img src="https://image.flaticon.com/icons/svg/1051/1051326.svg" className='git-icon' name='github' />
                  </a>
              </div>

              <div className='linkedin'>
                  <a href='https://www.linkedin.com/in/lesly-zu%C3%B1iga-727137192/'>
                      <img src="https://image.flaticon.com/icons/svg/1384/1384014.svg" className='lkd' alt='Linkedin' />
                  </a>
              </div>

           </div>
           
        
    )
  }
}
 
export default ContactMe;