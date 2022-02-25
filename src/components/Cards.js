function Cards({ cards }) {
  const cardKeys = cards.map(card=> {
    for(var i in card){
      return i
    }
  })

  // console.log(cardKeys)

  return(
    <div>

      <div className="singleCard cardOne">
        <p>{cardKeys[0]}</p>
      </div>

      <div className="singleCard cardTwo">
        <p>{cardKeys[1]}</p>
      </div>
      
    </div>
  )
}

export default Cards;