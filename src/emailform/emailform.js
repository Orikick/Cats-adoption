import * as React from 'react';
import './emailform.css';
import emailjs from '@emailjs/browser';
import useLocalStorage from './useLocalStorage.js'
import emailimg from '../media/emailformimg.webp'

function Emailform() {
  
let [name, setName] = useLocalStorage('name', '')
let [phone, setPhone] = useLocalStorage('phone', '')
let [email, setEmail] = useLocalStorage('email', '')
    
const sendEmail = (e) => {
    e.preventDefault();
emailjs.sendForm('service_xxchtrr', 'template_jyzs19e', e.target, 'v45bDMWaxCAOwLzTh')
}
  return (
    <div className="emailform">
      <div className='email'>
      <h4 className="page__title">Хочете дати притулок котику?<br/>Заповніть форму і ми з вами зв'яжемся</h4>
      <form className="contact__form" onSubmit={sendEmail}>
      <label htmlFor="nameFrom">Повне ім'я:</label>
        <input type="text" name="name_form" id="name_form" className="name__from" placeholder="Name" onChange={(event) => setName(event.target.value)} value = {name}/>
        <label htmlFor="phoneFrom">Номер телефону:</label>
        <input type="text" name="phone_form" id="phone_form" className="phone__from" placeholder="+380000000000" onChange={(event) => setPhone(event.target.value)} value = {phone}/>
        <label htmlFor="emailFrom">Електронна пошта:</label>
        <input type="text" name="email_from" id="email_from" className="email__from" placeholder="person@example.com" onChange={(event) => setEmail(event.target.value)} value = {email}/>
        <button type='submit' variant="contained"className="submit__btn" style={{marginTop: "5px"}}>
        Надіслати
      </button>
      </form>
      </div>
      
      <img src={emailimg}></img>
    </div>
  );
}

export default Emailform;