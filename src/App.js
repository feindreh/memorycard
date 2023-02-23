import Memory from "./components/memory";
import Header from "./components/header";
import "./App.css"
import { useEffect, useState } from "react";
import getShuffled from "./shuffle";
import CARDS from "./cards/arcBarrel";

function App() {



 
  //Übergeorneten Karten mit denen Gespielt wird
  const [stage,setStage] = useState(0)
  const [cards,setCards] = useState(CARDS[stage])
  

 
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

    
    // USEEFFECT wenn stage sich ändern neue karten
    // wenn karten sich ändern neues?

  

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
