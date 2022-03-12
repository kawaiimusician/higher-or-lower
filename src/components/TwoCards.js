import './TwoCards.css'


function TwoCards({ cards, flipped, clickHandler }) {

  return (
    <div className="card-grid">

      <div className='cardOne'>
        <img src={cards[0].src} alt={cards[0].value} />
      </div>

      <div className='cardTwo'>
        <div className={flipped ? "flipped" : ''}>
          <img 
            src={cards[1].src} 
            alt='card two' 
            className="front" 
          />
          <img
            src="/img/cover.png" 
            alt="card cover" 
            className="back" 
          />
        </div>
      </div>

    </div>
  )
}

export default TwoCards;