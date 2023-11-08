import * as React from 'react';
import './Catsgrid.css';
import Topimg from './Topimg';
import Infotext from './Infotext';
import ourcats from '../media/navimg2.jpeg'



import cat1 from '../media/cats/cat1.jpg'
import cat2 from '../media/cats/cat2.jpg'
import cat3 from '../media/cats/cat3.jpg'
import cat4 from '../media/cats/cat4.jpg'
import cat5 from '../media/cats/cat5.jpg'
import cat6 from '../media/cats/cat6.jpg'
import cat7 from '../media/cats/cat7.jpg'
import cat8 from '../media/cats/cat8.jpg'
import cat9 from '../media/cats/cat9.jpg'
import cat10 from '../media/cats/cat10.jpg'
import cat11 from '../media/cats/cat11.jpg'
import cat12 from '../media/cats/cat12.jpg'



function Catsgrid(props) {
  
    let cats = [
        {
            id: 1,
            img: cat1,
            name: 'Адмірал',
            age: 5  + ' років',
            sex: 'котик'
        },
        {
            id: 2,
            img: cat2,
            name: 'Лілу',
            age: 1  + ' рік',
            sex: 'кішка'
        },
        {
            id: 3,
            img: cat3,
            name: 'Лісник',
            age: 3 + ' роки',
            sex: 'котик'
        },
        {
          id: 4,
          img: cat4,
          name: 'Мідер',
          age: 1  + ' рік',
          sex: 'котик'
      },
      {
          id: 5,
          img: cat5,
          name: 'Топер',
          age: 2  + ' роки',
          sex: 'котик'
      },
      {
          id: 6,
          img: cat6,
          name: 'Мілла',
          age: 4  + ' роки',
          sex: 'кішка'
      },
      {
        id: 7,
        img: cat7,
        name: 'Керрі',
        age: 0.5  + ' рік',
        sex: 'кішка'
    },
    {
        id: 8,
        img: cat8,
        name: 'Вуглик',
        age: 1.5  + ' року',
        sex: 'котик'
    },
    {
        id: 9,
        img: cat9,
        name: 'Джині',
        age: 4  + ' роки',
        sex: 'котик'
    },
    {
      id: 10,
      img: cat10,
      name: 'Бетмен',
      age: 3  + ' роки',
      sex: 'котик'
  },
  {
      id: 11,
      img: cat11,
      name: 'Міні',
      age: 0.5  + ' року',
      sex: 'кішка'
  },
  {
      id: 12,
      img: cat12,
      name: 'Шерлок',
      age: 8  + ' років',
      sex: 'котик'
  }
    ]



  return (
    <div className='catsgrid'>
      <Topimg img={ourcats} heading='Наші котики'/>
      <Infotext  heading='Наші котики'
       info='Звичайно ми не можемо тут і зараз вам показати усіх наших котиків та кішок, але знизу ви можете загалянути в кілька пар невинних очей, яким ви можете допомогти, надавши притулок вже цього тижня !!!'/>
    <div className="grid">
      {cats.map(cat => (
        <div key={cat.id} className="cat-card">
          <img src={cat.img} alt={cat.name} />
          <h2>Кличка: <br/>{cat.name}</h2>
          <h3>Вік: {cat.age}</h3>
          <h3>Стать: {cat.sex}</h3>
        </div>
      ))}
    </div>
    </div>

  );
}

export default Catsgrid;