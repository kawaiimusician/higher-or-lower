function Cards({ cards }) {
  const cardKeys = cards.map(card=> {
    for(var i in card){
      return i
    }
  })

  console.log(cardKeys)

  return(
    <div>
      <p>{cardKeys[0]}</p>
      <p>{cardKeys[1]}</p>
    </div>
  )
}

export default Cards;