function TwoCards({ cards }) {
  return (
    <div className="card-grid">
      <div className='cardOne'>
        <img src={cards[0].src} alt={cards[0].value} />
      </div>
      <div className='cardTwo'>
        <img src={cards[1].src} alt='card two' />
      </div>
    </div>
  )
}

export default TwoCards;