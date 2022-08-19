import { useState } from 'react'
import './App.css'

function App() {
  
  const diceSides = 6;
  const [dice, setDice] = useState(0)


  return (
    <div className="App">
    
      <h1>Dice Roller</h1>
      <h2>Roll the dice</h2>
      <button onClick={() => setDice(Math.floor(Math.random() * diceSides) + 1)}>Roll</button>
      <h2>{dice}</h2>



    </div>
  )
}

export default App
