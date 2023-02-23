import Memory from "./components/memory";
import Header from "./components/header";
import arc1 from "./cards/img/arc1";
import "./App.css"
import { useState } from "react";

function App() {


  
  const [cards,setCards] = useState(arc1())
  const [score,setScore] = useState(0)
  const [highScore,setHighScore] = useState(0)
  const [leftCards,setLeftCards] = useState(cards)

  

  function pickCard(name){
    const relative = [...leftCards]
    relative.forEach((card)=>{
      if(card.name === name){
        /*+1 Punkt 
        vergleiche highscore
        entferne karte
        beende function
        */
      }
    })
    //reset game
  }



  return (
  <div>
      <Header score={score} highScore={highScore}/>
      <Memory cards={cards} cp={pickCard}/>
  </div>
  );
}

export default App;
