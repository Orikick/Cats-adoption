import * as React from 'react';
import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../media/kittylogo1.png'

function Navbar({ isAboutVisible, isCatsgridVisible, setAboutVisible, setCatsgridVisible, isContactVisible, setContactVisible}) {
  const [scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imgStyle = {
    transform: `scale(${scrollY >= 20 ? 0.45 : 1})`,
    marginBottom: `${scrollY >= 20 ? '-70px' : '0'}`,
    marginTop: `${scrollY >= 20 ? '-40px' : '0'}`,
    opacity: `${scrollY >= 600 ? '0' : '10'}`,
    transition: '0.7s',
  };


  const handleAboutClick = () => {
    setAboutVisible(true);
    setCatsgridVisible(false);
    setContactVisible(false);

    localStorage.setItem('selectedComponent', 'about');
  };

  const handleCatsgridClick = () => {
    setCatsgridVisible(true);
    setAboutVisible(false);
    setContactVisible(false);

    localStorage.setItem('selectedComponent', 'catsgrid');
  };

  const handleContactClick = () => {
    setContactVisible(true);
    setAboutVisible(false);
    setCatsgridVisible(false);

    localStorage.setItem('selectedComponent', 'catsgrid');
  };
  return (

    <div className="navbar">        
    <ul className='navbar_components'>
            <li onClick={handleAboutClick}>Про нас</li>
            <li onClick={handleCatsgridClick}>Дати притулок котику</li>
            <li onClick={handleContactClick}> Зконтактуватися з нами</li>
        </ul>
        <div className='logo' style={imgStyle}>
            <img src={logo} alt='logo'></img>
        </div>
    </div>
  );
}

export default Navbar;
