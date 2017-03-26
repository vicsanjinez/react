import React, { Component } from 'react';
import logo from './logo.svg';

import ProfileImg from './components/ProfileImg';
import ProfileInfo from './components/ProfileInfo';
import SocialButton from './components/SocialButton';

import './App.css';

//si se usa default al exportar es sin llaves



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.          
        </p>

        <ProfileImg avatar="http://st3.depositphotos.com/3557671/12561/v/170/depositphotos_125614440-stock-illustration-girl-icon-cartoon-single-avatarpeaople.jpg"/>
        
        <div className="Profile-info">
          <ProfileInfo empresa="AppDimension" profesion="Ingeniero de Sistemas" url="http://appdimension.com" />

          <SocialButton backgroundColor="#3498db" 
                        textColor="#000000"
                        url="http://mitwitter.com"> 
            Twitter 
          </SocialButton>

          <SocialButton backgroundColor="#e67e22" 
                        textColor="#000000"
                        url="http://miinstagram.com"> 
            Instagram
          </SocialButton>
        </div>
      </div>


      
      
    );
  }
}

export default App;
