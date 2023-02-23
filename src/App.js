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
  const [won,setWon] = useState(false)
  

 
  //Karten die noch übrig sind
  const [leftCards,setLeftCards] = useState([...cards])
  //Karten die zum spielen sind (und geshuffelt werden)
  const [activeCards,setActiveCards] = useState([...cards])
  //score
  const [score,setScore] = useState(0)
  const [win,setWin] = useState(false)
  

  useEffect(()=>{
    //check for gameover
      const maxScore = cards.length
      if(maxScore === score){setWin(true)}
    },[score])

  useEffect(()=>{
    //load new set of cards
    if(CARDS[stage] === undefined){
      setWon(true)
    }else{
      setCards(CARDS[stage])
    }
      },[stage])
    
  useEffect(()=>{
    //update alles mit neuem set
    setLeftCards([...cards])
    setActiveCards([...cards])
    setScore(0)
  },[cards])

    
     
    
   

  

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
    setWin(false)
    setLeftCards([...cards])
  }


  if(won){
    return(
      <div>Winner Winner</div>
    )
  }

  return (
  <div id="App">
      <Header score={score} scoreMax={cards.length}/>
      
      <Memory cards={activeCards} cp={pickCard}/>

      {win?(<button onClick={()=>{setStage(stage + 1);setWin(false)}}>Next Stage</button>):undefined}
      
  </div>
  );
}

export default App;
