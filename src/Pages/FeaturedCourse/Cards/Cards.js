import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://b610-lerning-platform-server-side-saruaralam-swd.vercel.app/courses')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  return (
    <div className='px-20'>
      <h2 className='text-2xl md:text-3xl text-center font-semibold'>Our Featured Courses</h2>
      
      <div className="divider">OR</div>

      <div className='grid md:grid-cols-3 gap-8 '>
        {
          cards.map(card => <Card key={card.id} card={card}></Card>)
        }
      </div>
    </div>
  );
};

export default Cards;