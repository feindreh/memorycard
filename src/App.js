import Memory from "./components/memory";
import Header from "./components/header";
import arc1 from "./cards/img/arc1";
import "./App.css"
import { useState } from "react";

function App() {

  const [score,setScore] = useState(0)
  const [highScore,setHighScore] = useState(0)


  return (
  <div>
      <Header score={score} highScore={highScore}/>
      <Memory cards={arc1()}/>
  </div>
  );
}

export default App;
