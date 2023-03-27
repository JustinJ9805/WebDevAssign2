import './App.css';
import React from 'react';
import { useState } from 'react';

const cardImage = [
  {"src" : "/images/luffy.png"},
  {"src" : "/images/zoro.png"},
  {"src" : "/images/nami.png"},
  {"src" : "/images/ussop.png"},
  {"src" : "/images/sanji.png"},
  {"src" : "/images/robin.png"},
  {"src" : "/images/chopper.png"},
  {"src" : "/images/franky.png"},
  {"src" : "/images/brook.png"},
  {"src" : "/images/jinbe.png"}

]

function App() {


  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shuffle the deck
  const shuffle = () =>{
    const shuffled = [...cardImage, ...cardImage] 
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffled)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div>
      <div>
        <h1>Match the Cards!</h1>
        <button onClick={shuffle}>New Game</button>
      </div>

      <div className='grid'> 
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.src} alt='card front'/>
              <img className='back' src='/images/cover.png' alt='card back'/>
            </div>
          </div>
        ))}
      </div>
    </div>
    


  );
}

export default App;
