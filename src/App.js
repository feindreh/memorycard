import Memory from "./components/memory";
import Header from "./components/header";
import arc1 from "./cards/img/arc1";
import "./App.css"
import { useState } from "react";

function App() {


  
  const [cards,setCards] = useState(arc1())
  const [score,setScore] = useState(0)
  const [highScore,setHighScore] = useState(0)
  const [leftCards,setLeftCards] = useState([...cards])

  

  function pickCard(name){
    const relative = [...leftCards]
    for(let i = 0;i<relative.length;i++){
      if(relative[i].name === name){
        setScore(score+1) 
        if(highScore <= score){setHighScore(score+1)}
        setLeftCards(leftCards.filter(card => card.name !== name))
        return
      }
    }

    setScore(0)
    setLeftCards([...cards])

    

  }



  return (
  <div>
      <Header score={score} highScore={highScore}/>
      <Memory cards={cards} cp={pickCard}/>
  </div>
  );
}

export default App;
