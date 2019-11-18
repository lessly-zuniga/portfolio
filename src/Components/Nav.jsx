//import React, { Component, NavBrand,NavMenu  } from "react";
import React from 'react';
import Profile from './Profile';
import '../Nav.css';
import Start from './Start';
import Projects from './Projects';
//import ContactMe from './Components/ContactMe';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ContactMe from './ContactMe';
import Skills from './Skills';


//import { Link } from 'react-router'

export default class Navbar extends React.Component {
        render() {    
          return (
            <div>
              <Router>
                <nav className="Nav">
                  <ul className="Navbar">
                    <li><NavLink to='/'>Inicio</NavLink></li>
                    <li><NavLink to='/profile'>Perfil</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/skills'>Skills</NavLink></li>
                    <li><NavLink to='/contactme'>Contacto</NavLink></li>
                    
                  </ul>
                 </nav>
                  <Route exact path="/" component={Start} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/Projects" component={Projects} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/contactme" component={ContactMe} />
                 
                   
                </Router>
            </div>
          );
        }
      }

