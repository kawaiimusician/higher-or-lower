import './App.css';
import Cards from './components/Cards';
import { useEffect, useState } from 'react'

const cardValues = [
  // name on card : value of card
  {'A' : 14 },
  {'2' : 2 },
  {'3' : 3 },
  {'4' : 4 },
  {'5' : 5 },
  {'6' : 6 },
  {'7' : 7 },
  {'8' : 8 },
  {'9' : 9 },
  {'10' : 10 },
  {'J' : 11 },
  {'Q' : 12 },
  {'K' : 13 },
]

function App() {
  const [cards, setCards] = useState([]);
  // picks two cards out of the "deck"
  const pickCards = () => {
    function getTwoNums() {
      let numOne = Math.floor((Math.random() * 13))
      let numTwo = Math.floor((Math.random() * 13))
  
      if (numOne === numTwo) {
        return getTwoNums();
      }
      return [numOne, numTwo]
    }
    let twoNums = getTwoNums();
    console.log(twoNums)
    const cards = [];
    cards.push(cardValues[twoNums[0]]);
    cards.push(cardValues[twoNums[1]]);

    setCards(cards)
  }

  console.log(cards)


  // start game immediately
  useEffect(()=> {
    pickCards();
  },[])

  return (
    <div className="App">
      <h1>Higher or Lower?</h1>
      <div>
        <button>Higher</button>
        <button>Lower</button>
      </div>
      <Cards 
        cards={cards}
      />
      <button>New Game</button>
    </div>
  );
}

export default App;
