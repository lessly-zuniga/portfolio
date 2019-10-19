import React from 'react';
import NavBar from './Components/Nav';
import Profile from './Components/Profile';
import ListItem from './Components/Projects';
import CoverPage from './Components/Start';
import './App.css';


function App() {
  return (
    <div className="App">
     <CoverPage/>
     <Profile/>
      </div>
  );
}

export default App;