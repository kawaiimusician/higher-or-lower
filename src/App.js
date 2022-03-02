import './App.css';
import { useEffect, useState } from 'react'
import TwoCards from './components/TwoCards';

const cardValues = [
  // name on card : value of card
  { 'src': '/img/A.png', 'name': 'Ace', 'value': 14 },
  { 'src': '/img/2.png', 'name': '2', 'value': 2 },
  { 'src': '/img/3.png', 'name': '3', 'value': 3 },
  { 'src': '/img/4.png', 'name': '4', 'value': 4 },
  { 'src': '/img/5.png', 'name': '5', 'value': 5 },
  { 'src': '/img/6.png', 'name': '6', 'value': 6 },
  { 'src': '/img/7.png', 'name': '7', 'value': 7 },
  { 'src': '/img/8.png', 'name': '8', 'value': 8 },
  { 'src': '/img/9.png', 'name': '9', 'value': 9 },
  { 'src': '/img/10.png', 'name': '10', 'value': 10 },
  { 'src': '/img/Jack.png', 'name': 'Jack', 'value': 11 },
  { 'src': '/img/Queen.png', 'name': 'Queen', 'value': 12 },
  { 'src': '/img/King.png', 'name': 'King', 'value': 13 },
];

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState([]);

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
    // console.log(twoNums)
    const cards = [];
    cards.push(cardValues[twoNums[0]]);
    cards.push(cardValues[twoNums[1]]);

    setCards(cards)
    console.log(cards)
  };


  // start game immediately
  useEffect(()=> {
    pickCards();
    setScore([{'win': 0, 'lose': 0}])
  },[])

  return (
    <div className="App">
      <h1>Higher or Lower?</h1>
      <div>
        <button>Higher</button>
        <button>Lower</button>
      </div>

      <div>
        {cards.length >=1 && <TwoCards cards={cards} />} 
      </div>

      <button>New Game</button>
    </div>
  );
}

export default App;
