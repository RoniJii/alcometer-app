import './App.css';
import React, { useState } from "react";

export default function App() {
  
  const [count, setCount] = useState(0);
  const [Gender, setGender] = useState("male");
  const [Bottles, setBottles] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [Time, setTime] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    let tulos = 0
    let liters = Bottles * 0.33
    let grams = liters * 8 * 4.5
    let burning = Weight / 10
    let gramsleft = (grams - (burning * Time))
    if (Gender === "male") {
      tulos = (gramsleft / (Weight * 0.7)) 
    } else {
      tulos = gramsleft / (Weight * 0.6)  
    } 
    if (tulos < 0) {
      setCount(0)
    } else{
      setCount(tulos)
    }
    
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}> 
      <header>Qemu</header>
      <div className="runko">
      <h1 className="otsikko">#Calculating alcohol blood &#60;level.h&#62;</h1>
      <label>&#60;Weight <input placeholder="<type here>" name="Weight"  onChange={e => setWeight(e.target.value)}/></label>

      <div> 
        <label> &#60;Bottles </label>
        <select type="number" value={Bottles} onChange={e => setBottles(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          </select>
      </div>

      <div> 
        <label>&#60;Time </label>
        <select type="number" value={Time} onChange={e => setTime(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          </select>
      </div>

      <label>&#60;Gender
      <input type="radio" value="Male" name="Gender" defaultChecked onChange={e => setGender(e.target.value)} /> Male
      <input type="radio" value="Female" name="Gender" onChange={e => setGender(e.target.value)}/> Female</label> 
      <div> 
        <output>
          {count.toFixed(1)}
          </output>
      </div>
      <button>Calculate</button>
      </div>
      </form>
    </div>
  );
}


