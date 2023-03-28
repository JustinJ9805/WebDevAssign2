import './aCard.css'

export default function ACard({card, handleChoice, flipped}){

    const handleClick = () => {
        handleChoice(card)
    }



    return(
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
              <img className='front cardImg' src={card.src} alt='card front'/>
              <img onClick={handleClick} className='back cardImg' src='/images/cover.png' alt='card back'/>
            </div>
          </div>
    )
}