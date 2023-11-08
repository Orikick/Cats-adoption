import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Catsgrid from './components/Catsgrid';
import Emailform from './emailform/emailform';

function App() {
  const [isAboutVisible, setAboutVisible] = useState(false);
  const [isCatsgridVisible, setCatsgridVisible] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const selectedComponent = localStorage.getItem('selectedComponent');
    
    if (selectedComponent === 'about') {
      setAboutVisible(true);
    } else if (selectedComponent === 'catsgrid') {
      setCatsgridVisible(true);
    }
  }, []);

  return (
    <div className="App">
      <Navbar
        setAboutVisible={setAboutVisible}
        setCatsgridVisible={setCatsgridVisible}
        setContactVisible={setContactVisible}
        isAboutVisible={isAboutVisible}
        isCatsgridVisible={isCatsgridVisible}
        isContactVisible={isContactVisible}
      />
      {isAboutVisible && <Body />}
      {isCatsgridVisible && <Catsgrid />}
      {isContactVisible && <Emailform/>}
      <Footer/>
    </div>
  );
}

export default App;
