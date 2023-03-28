import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ACard from './components/aCard'


const cardImage = [
  {"src" : "/images/circle.png"},
  {"src" : "/images/diamond.png"},
  {"src" : "/images/clubs.png"},
  {"src" : "/images/triangle.png"},
  {"src" : "/images/star.png"},
  {"src" : "/images/spade.png"}

]

function App() {


  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)
  
  //shuffle the deck
  const shuffle = () =>{
    const shuffled = [...cardImage, ...cardImage] 
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffled)
    setTurns(0)
  }

  //console.log(cards, turns)
  const handleChoice = (card) => {
    //console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card =>{
            if(card.src === choiceOne.src){
              return { ...card, matched:true}
            }else {
              return card
            }
          })
        })
        resetTurn()
      } else{
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }



  return (
    <div>
      <div>
        <h1>Match the Cards!</h1>
        <button onClick={shuffle}>New Game</button>
      </div>

      <div className='grid'> 
        {cards.map(card => (
          <ACard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched}/>
        ))}
      </div>
    </div>
    


  );
}

export default App;
