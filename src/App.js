import Memory from "./components/memory";
import Header from "./components/header";
import arc1 from "./cards/img/arc1";
import "./App.css"

function App() {


  return (
  <div>
      <Header/>
      <Memory cards={arc1()}/>
  </div>
  );
}

export default App;
