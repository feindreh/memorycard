import Memory from "./components/memory";
import Header from "./components/header";
import arc1 from "./cards/img/arc1";
import "./App.css"
import { useEffect, useState } from "react";
import getShuffled from "./shuffle";

function App() {


  //Übergeorneten Karten mit denen Gespielt wird
  const [cards,setCards] = useState(arc1())

 
  //Karten die noch übrig sind
  const [leftCards,setLeftCards] = useState([...cards])
  //Karten die zum spielen sind (und geshuffelt werden)
  const [activeCards,setActiveCards] = useState([...cards])
  //score
  const [score,setScore] = useState(0)

  
  useEffect(()=>{
    //check for gameover
      const maxScore = cards.length
      if(maxScore === score){alert("Winner Winner Chicken Dinner")}
    },[score])

  

  function pickCard(name){
    setActiveCards(getShuffled(activeCards))
    const relative = [...leftCards]
    for(let i = 0;i<relative.length;i++){
      if(relative[i].name === name){
        setScore(score+1) 
        setLeftCards(leftCards.filter(card => card.name !== name))
        return
      }
    }
    setScore(0)
    setLeftCards([...cards])
  }

  


  return (
  <div>
      <Header score={score}/>
      <Memory cards={activeCards} cp={pickCard}/>
  </div>
  );
}

export default App;
