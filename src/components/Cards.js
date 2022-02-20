import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Famous Women in Technology</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/one.jpg'
              text='Kimberly Bryant, founder and CEO of Black Girls Code'
              path='/life'
            />
            <CardItem
              src='images/two.jpg'
              text='Safra Catz, CEO of Oracle'
              path='/life'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/three.jpeg'
              text='Reshma Saujani, founder and CEO of Girls Who Code'
              path='/life'
            />
            <CardItem
              src='images/four.jpg'
              text='Susan Wojcicki, CEO of YouTube'
              path='/life'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;